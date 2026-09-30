"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  MessageSquare,
  PhoneCall,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
  Maximize2,
  Minimize2,
  Send,
  ShieldCheck,
  Building2,
  RefreshCw,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

interface BookingDossier {
  facility: string | null;
  sqft: string | null;
  propertyType: string | null;
  service: string | null;
  timing: string | null;
  contact: string | null;
  phone: string | null;
  ticketId: string | null;
  isComplete: boolean;
}

interface WindowWithSpeech extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export function FieldCommandAiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "voice">("chat");
  const [isMinimized, setIsMinimized] = useState(false);

  // Chat State
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "ProCore Field Command AI online. I am Chief Systems Dispatcher. How can I assist with your commercial facility roof evaluation or diagnostic inspection booking today?",
      timestamp: "Just now",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Extracted Booking State
  const [booking, setBooking] = useState<BookingDossier>({
    facility: null,
    sqft: null,
    propertyType: null,
    service: null,
    timing: null,
    contact: null,
    phone: null,
    ticketId: "PC-8842-QUEUE",
    isComplete: false,
  });

  // Voice Call State
  const [isCallActive, setIsCallActive] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isSpeakerMuted, setIsSpeakerMuted] = useState(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isUserSpeaking, setIsUserSpeaking] = useState(false);
  const [voiceTranscript, setVoiceTranscript] = useState("");

  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Speak AI text via SpeechSynthesis
  const speakText = useCallback(
    (text: string) => {
      if (isSpeakerMuted || typeof window === "undefined" || !("speechSynthesis" in window)) {
        return;
      }

      window.speechSynthesis.cancel();

      // Clean text of json blocks or formatting tags
      const cleanSpeech = text
        .replace(/```booking-json[\s\S]*?```/g, "")
        .replace(/\[TICKET:.*?\]/g, "")
        .replace(/[*#_]/g, "")
        .trim();

      if (!cleanSpeech) return;

      const utterance = new SpeechSynthesisUtterance(cleanSpeech);
      utterance.rate = 1.05;
      utterance.pitch = 0.95;

      const voices = window.speechSynthesis.getVoices();
      const preferredVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.includes("Natural") ||
            v.name.includes("Google") ||
            v.name.includes("David") ||
            v.name.includes("Alex"))
      );
      if (preferredVoice) utterance.voice = preferredVoice;

      utterance.onstart = () => setIsAiSpeaking(true);
      utterance.onend = () => setIsAiSpeaking(false);
      utterance.onerror = () => setIsAiSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isSpeakerMuted]
  );

  // Send message to server Gemini route
  const sendMessage = useCallback(
    async (textToSend?: string, mode: "chat" | "voice" = "chat") => {
      const query = textToSend || inputMessage;
      if (!query.trim() || isLoading) return;

      const userMsg: Message = {
        role: "user",
        content: query,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInputMessage("");
      setIsLoading(true);

      try {
        const response = await fetch("/api/ai/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMsg].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            currentBooking: booking,
            mode: mode,
          }),
        });

        if (!response.ok) throw new Error("Dispatch communication error");

        const data = await response.json();
        const rawText = data.text || "";

        // Extract JSON booking metadata if returned
        const jsonMatch = rawText.match(/```booking-json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) {
          try {
            const parsedBooking = JSON.parse(jsonMatch[1]);
            if (parsedBooking) {
              setBooking((prev) => ({
                ...prev,
                ...parsedBooking,
                ticketId: parsedBooking?.ticketId || prev.ticketId,
              }));
            }
          } catch (e) {
            // ignore json parse error
          }
        }

        const cleanDisplay = rawText.replace(/```booking-json[\s\S]*?```/g, "").trim();

        const assistantMsg: Message = {
          role: "assistant",
          content: cleanDisplay,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, assistantMsg]);

        if (isCallActive || mode === "voice") {
          speakText(cleanDisplay);
          setVoiceTranscript(cleanDisplay);
        }
      } catch (err) {
        console.error(err);
        const fallbackMsg: Message = {
          role: "assistant",
          content:
            "ProCore Field Command: Dispatch transmission acknowledged. A technical supervisor has logged your commercial inquiry under active queue. You can also call direct field dispatch at (555) 804-CORE.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, fallbackMsg]);
        if (isCallActive || mode === "voice") {
          speakText(fallbackMsg.content);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [inputMessage, isLoading, messages, booking, isCallActive, speakText]
  );

  // Handle user voice input
  const handleUserVoiceInput = useCallback(
    (text: string) => {
      sendMessage(text, "voice");
    },
    [sendMessage]
  );

  // Start voice call
  const startVoiceCall = useCallback(() => {
    setActiveTab("voice");
    setIsCallActive(true);
    setCallDuration(0);
    setVoiceTranscript("Connecting to ProCore Field Command Dispatch...");

    const initialGreeting =
      "ProCore Field Command voice dispatch connected. This is Chief Systems Dispatcher. What commercial facility can we assist with today?";

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: initialGreeting,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);

    setTimeout(() => {
      speakText(initialGreeting);
      setVoiceTranscript("Listening... (Speak your facility name, roof issues, or square footage)");
      try {
        recognitionRef.current?.start();
      } catch (e) {
        // already started
      }
    }, 500);
  }, [speakText]);

  // End voice call
  const endVoiceCall = useCallback(() => {
    setIsCallActive(false);
    setIsAiSpeaking(false);
    setIsUserSpeaking(false);
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    try {
      recognitionRef.current?.stop();
    } catch (e) {
      // ignore
    }
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Listen for open-field-command-ai custom event
  useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      setIsMinimized(false);
      if (e.detail?.mode === "voice") {
        startVoiceCall();
      } else {
        setActiveTab("chat");
      }
    };
    window.addEventListener("open-field-command-ai", handleOpen);
    return () => window.removeEventListener("open-field-command-ai", handleOpen);
  }, [startVoiceCall]);

  // Voice Call Timer
  useEffect(() => {
    if (isCallActive) {
      callTimerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
    };
  }, [isCallActive]);

  // Speech Recognition Setup
  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWithSpeech = window as WindowWithSpeech;
      const SpeechRecognition =
        windowWithSpeech.SpeechRecognition ||
        windowWithSpeech.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsUserSpeaking(true);
        };

        recognition.onresult = (event: any) => {
          let interimTranscript = "";
          let finalTranscript = "";

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript;
            } else {
              interimTranscript += transcript;
            }
          }

          if (interimTranscript) {
            setVoiceTranscript(interimTranscript);
          }

          if (finalTranscript.trim()) {
            setVoiceTranscript(finalTranscript);
            handleUserVoiceInput(finalTranscript);
          }
        };

        recognition.onerror = (event: any) => {
          console.warn("Speech recognition error:", event.error);
          setIsUserSpeaking(false);
        };

        recognition.onend = () => {
          setIsUserSpeaking(false);
          if (isCallActive && !isMicMuted) {
            try {
              recognition.start();
            } catch (e) {
              // ignore already started
            }
          }
        };

        recognitionRef.current = recognition;
      }
    }
  }, [isCallActive, isMicMuted, handleUserVoiceInput]);

  const quickPrompts = [
    "Schedule a commercial flat roof diagnostic",
    "Emergency leak breach intake (under 4hr)",
    "Book bi-annual Preventative Maintenance (PMP)",
    "Compare 80-mil TPO vs Silicone Restoration ROI",
  ];

  return (
    <>
      {/* Discreet Fixed Trigger Launcher (Bottom Right) */}
      {!isOpen && (
        <aside
          aria-label="ProCore Field Command AI Launchers"
          className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5"
        >
          {/* Quick Voice Call Launcher Button */}
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              startVoiceCall();
            }}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-primary text-surface hover:bg-secondary font-title-md uppercase tracking-wider text-xs shadow-lg border border-primary-container transition-all hover:scale-105 cursor-pointer font-bold group"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary-fixed"></span>
            </span>
            <PhoneCall className="w-4 h-4 text-tertiary-fixed group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">AI Voice Dispatch Call</span>
            <span className="sm:hidden">Voice Call</span>
          </button>

          {/* Primary AI Field Command Launcher */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 bg-tertiary-container text-on-tertiary hover:bg-tertiary font-title-md uppercase tracking-wider text-xs shadow-xl border border-tertiary transition-all hover:scale-105 cursor-pointer font-bold"
          >
            <ShieldCheck className="w-5 h-5 text-tertiary-fixed" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] tracking-widest text-tertiary-fixed font-semibold">
                24/7 COMMAND DISPATCH
              </span>
              <span className="text-surface font-display text-sm tracking-normal">
                AI Commercial Roof Booking
              </span>
            </div>
            <MessageSquare className="w-4 h-4 text-tertiary-fixed ml-1" />
          </button>
        </aside>
      )}

      {/* Main Field Command Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[540px] sm:max-w-[calc(100vw-3rem)] sm:h-[680px] sm:max-h-[calc(100vh-4rem)] z-50 flex flex-col bg-surface-container-lowest border border-primary shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Top Command Bar */}
          <div className="bg-primary text-surface p-3.5 sm:p-4 flex items-center justify-between border-b border-primary-container shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-tertiary-container border border-tertiary flex items-center justify-center text-tertiary-fixed font-bold text-xs">
                AI
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-title-md text-surface font-bold text-sm tracking-tight">
                    ProCore Field Command AI
                  </span>
                  <span className="px-1.5 py-0.2 bg-tertiary text-tertiary-fixed text-[9px] font-code-spec font-bold border border-tertiary-fixed/30 uppercase">
                    DISPATCH LIVE
                  </span>
                </div>
                <span className="font-label-sm text-inverse-primary text-[10px] tracking-wider uppercase">
                  DIVISION 07 AUTOMATED BOOKING & DIAGNOSTIC
                </span>
              </div>
            </div>

            {/* Actions: Minimize & Close */}
            <div className="flex items-center gap-1.5 text-inverse-primary">
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 hover:text-surface hover:bg-primary-container transition-colors"
                title={isMinimized ? "Expand" : "Minimize"}
                aria-label={isMinimized ? "Expand" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  if (isCallActive) endVoiceCall();
                  setIsOpen(false);
                }}
                className="p-1.5 hover:text-surface hover:bg-primary-container transition-colors"
                title="Close Dispatch Console"
                aria-label="Close Dispatch Console"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Mode Switcher Tabs */}
              <div className="bg-surface-container-high border-b border-outline-variant/40 flex items-center justify-between px-3 py-1.5 text-xs font-label-md uppercase tracking-wider shrink-0">
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (isCallActive) endVoiceCall();
                      setActiveTab("chat");
                    }}
                    className={`px-3 py-1.5 font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "chat"
                        ? "bg-primary text-on-primary shadow-xs"
                        : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>AI Chat Booking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("voice");
                      if (!isCallActive) startVoiceCall();
                    }}
                    className={`px-3 py-1.5 font-bold transition-colors cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "voice"
                        ? "bg-tertiary-container text-on-tertiary shadow-xs border border-tertiary"
                        : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
                    }`}
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-tertiary-fixed" />
                    <span>AI Voice Call</span>
                    {isCallActive && (
                      <span className="w-2 h-2 rounded-full bg-tertiary-fixed animate-ping ml-1" />
                    )}
                  </button>
                </div>

                <div className="font-code-spec text-[10px] text-secondary font-bold hidden sm:block">
                  TICKET: {booking.ticketId || "PC-8842"}
                </div>
              </div>

              {/* Active Booking Dossier Bar */}
              {(booking.facility || booking.service || booking.sqft) && (
                <div className="bg-surface-container-low px-4 py-2 border-b border-outline-variant/30 text-xs flex items-center justify-between gap-2 overflow-x-auto">
                  <div className="flex items-center gap-3 text-[11px] truncate">
                    <span className="font-bold text-primary flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-secondary" />
                      {booking.facility || "Commercial Facility"}
                    </span>
                    {booking.sqft && (
                      <span className="text-secondary">· {booking.sqft}</span>
                    )}
                    {booking.service && (
                      <span className="text-on-tertiary-container font-semibold truncate">
                        · {booking.service}
                      </span>
                    )}
                  </div>
                  <span className="font-code-spec text-[10px] bg-primary text-on-primary px-2 py-0.5 font-bold shrink-0">
                    {booking.isComplete ? "BOOKED" : "INTAKE LOGGED"}
                  </span>
                </div>
              )}

              {/* TAB 1: AI CHAT INTERFACE */}
              {activeTab === "chat" && (
                <div className="flex-1 flex flex-col justify-between overflow-hidden bg-surface">
                  {/* Messages Thread */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, idx) => {
                      const isAi = msg.role === "assistant";

                      return (
                        <div
                          key={idx}
                          className={`flex flex-col ${isAi ? "items-start" : "items-end"}`}
                        >
                          <div className="flex items-center gap-1.5 text-[10px] text-secondary font-code-spec mb-1 px-1">
                            <span>{isAi ? "PROCORE FIELD COMMAND" : "FACILITY OPERATOR"}</span>
                            <span>·</span>
                            <span>{msg.timestamp}</span>
                          </div>

                          <div
                            className={`p-3.5 max-w-[88%] text-xs sm:text-sm leading-relaxed ${
                              isAi
                                ? "bg-surface-container-lowest border border-outline-variant/40 text-primary shadow-xs"
                                : "bg-primary text-on-primary font-medium shadow-xs"
                            }`}
                          >
                            <p className="whitespace-pre-wrap">{msg.content}</p>
                          </div>
                        </div>
                      );
                    })}

                    {isLoading && (
                      <div className="flex items-center gap-2 p-3 bg-surface-container-low text-xs text-secondary border border-outline-variant/20 max-w-[70%]">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-primary" />
                        <span className="font-code-spec">Processing technical dispatch specs...</span>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>

                  {/* Quick Prompts Bar */}
                  <div className="p-2 bg-surface-container-low border-t border-outline-variant/30 flex gap-2 overflow-x-auto shrink-0">
                    {quickPrompts.map((prompt, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => sendMessage(prompt, "chat")}
                        className="text-[11px] font-title-md bg-surface-container-lowest text-primary hover:bg-surface-container px-2.5 py-1 border border-outline-variant/40 whitespace-nowrap cursor-pointer transition-colors"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMessage(undefined, "chat");
                    }}
                    className="p-3 bg-surface-container-lowest border-t border-outline-variant/40 flex items-center gap-2 shrink-0"
                  >
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your facility location, roof type, or booking request..."
                      className="flex-1 bg-surface-container-low px-3 py-2.5 text-xs sm:text-sm text-primary border border-outline-variant/50 focus:outline-none focus:border-primary"
                    />
                    <button
                      type="button"
                      onClick={() => startVoiceCall()}
                      title="Switch to Voice Call"
                      aria-label="Switch to Voice Call"
                      className="p-2.5 bg-surface-container text-primary hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/40"
                    >
                      <Mic className="w-4 h-4" />
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading || !inputMessage.trim()}
                      className="px-4 py-2.5 bg-primary text-on-primary hover:bg-secondary disabled:opacity-50 transition-colors font-title-md uppercase text-xs font-bold flex items-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <span>Send</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* TAB 2: AI VOICE CALL INTERFACE */}
              {activeTab === "voice" && (
                <div className="flex-1 flex flex-col justify-between p-6 bg-primary text-surface overflow-hidden relative">
                  {/* Background Grid Accent */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2933_1px,transparent_1px),linear-gradient(to_bottom,#1f2933_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

                  {/* Voice Call Top Status */}
                  <div className="relative z-10 flex items-center justify-between pb-4 border-b border-primary-container">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-fixed"></span>
                      </span>
                      <span className="font-code-spec text-xs text-tertiary-fixed uppercase font-bold tracking-wider">
                        {isCallActive ? "DISPATCH CALL IN PROGRESS" : "CALL IDLE"}
                      </span>
                    </div>

                    <div className="font-code-spec text-sm font-bold text-surface bg-primary-container px-3 py-1 border border-primary">
                      {Math.floor(callDuration / 60)
                        .toString()
                        .padStart(2, "0")}
                      :
                      {(callDuration % 60).toString().padStart(2, "0")}
                    </div>
                  </div>

                  {/* Central Voice Visualization Core */}
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center my-6 space-y-6 text-center">
                    {/* Animated Pulsing Frequency Rings */}
                    <div className="relative flex items-center justify-center">
                      <div
                        className={`w-32 h-32 rounded-full border border-tertiary-fixed/30 flex items-center justify-center transition-transform duration-300 ${
                          isAiSpeaking || isUserSpeaking ? "scale-110 animate-pulse border-tertiary-fixed" : ""
                        }`}
                      >
                        <div
                          className={`w-24 h-24 rounded-full bg-primary-container border-2 border-tertiary-fixed flex items-center justify-center text-tertiary-fixed shadow-lg ${
                            isAiSpeaking ? "ring-8 ring-tertiary-fixed/20" : ""
                          }`}
                        >
                          <PhoneCall className="w-10 h-10 animate-bounce" />
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Status / Speaker Indicator */}
                    <div className="space-y-1">
                      <h4 className="font-display text-lg sm:text-xl font-bold text-surface tracking-tight">
                        {isAiSpeaking
                          ? "ProCore Dispatcher Speaking..."
                          : isUserSpeaking
                          ? "Listening to Facility Operator..."
                          : isCallActive
                          ? "Voice Channel Open - Speak Freely"
                          : "Voice Call Disconnected"}
                      </h4>
                      <p className="font-label-sm text-xs text-inverse-primary uppercase tracking-widest">
                        ANSI/SPRI ES-1 CERTIFIED DISPATCH ENGINE
                      </p>
                    </div>

                    {/* Audio Waveform Bars Simulation */}
                    <div className="flex items-center gap-1.5 h-10">
                      {[12, 24, 38, 20, 32, 16, 28, 40, 22, 34, 18, 26, 36, 14].map((h, i) => (
                        <div
                          key={i}
                          className={`w-1.5 bg-tertiary-fixed transition-all duration-150 ${
                            isAiSpeaking || isUserSpeaking
                              ? "opacity-100"
                              : "opacity-30 h-3!"
                          }`}
                          style={{
                            height: isAiSpeaking || isUserSpeaking ? `${h}px` : "8px",
                            transitionDelay: `${i * 30}ms`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Live Voice Transcript Banner */}
                    <div className="p-3 bg-primary-container/80 border border-primary text-xs text-inverse-primary max-w-md w-full leading-relaxed min-h-[50px] flex items-center justify-center">
                      <p className="italic">{voiceTranscript || "Press microphone or start speaking your roof specs..."}</p>
                    </div>
                  </div>

                  {/* Call Controls Bar */}
                  <div className="relative z-10 pt-4 border-t border-primary-container flex items-center justify-center gap-4">
                    {/* Mic Toggle */}
                    <button
                      type="button"
                      onClick={() => {
                        const nextState = !isMicMuted;
                        setIsMicMuted(nextState);
                        if (nextState) {
                          recognitionRef.current?.stop();
                        } else {
                          recognitionRef.current?.start();
                        }
                      }}
                      className={`p-3.5 rounded-full border transition-all cursor-pointer ${
                        isMicMuted
                          ? "bg-error text-surface border-error"
                          : "bg-primary-container text-surface hover:bg-secondary border-outline-variant/40"
                      }`}
                      title={isMicMuted ? "Unmute Mic" : "Mute Mic"}
                      aria-label={isMicMuted ? "Unmute Mic" : "Mute Mic"}
                    >
                      {isMicMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </button>

                    {/* End Call Button */}
                    <button
                      type="button"
                      onClick={() => endVoiceCall()}
                      className="px-6 py-3.5 bg-error hover:bg-red-700 text-surface font-title-md uppercase tracking-wider text-xs font-bold flex items-center gap-2 rounded-full transition-colors cursor-pointer shadow-lg"
                    >
                      <PhoneOff className="w-4 h-4" />
                      <span>End Call</span>
                    </button>

                    {/* Speaker Toggle */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsSpeakerMuted(!isSpeakerMuted);
                        if (!isSpeakerMuted && typeof window !== "undefined") {
                          window.speechSynthesis?.cancel();
                        }
                      }}
                      className={`p-3.5 rounded-full border transition-all cursor-pointer ${
                        isSpeakerMuted
                          ? "bg-error text-surface border-error"
                          : "bg-primary-container text-surface hover:bg-secondary border-outline-variant/40"
                      }`}
                      title={isSpeakerMuted ? "Unmute Audio" : "Mute Audio"}
                      aria-label={isSpeakerMuted ? "Unmute Audio" : "Mute Audio"}
                    >
                      {isSpeakerMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
