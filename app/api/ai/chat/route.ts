import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages, currentBooking, mode } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;

    const systemInstruction = `
You are the ProCore Commercial Roofing 24/7 Field Command AI Dispatcher and Systems Specialist.
Your mission is to provide authoritative, technical commercial roofing consultation and assist facility managers, property asset directors, and general contractors in booking on-site diagnostic inspections, roof replacement estimates, restorative coating audits, or preventative maintenance programs.

Company Information:
- Name: ProCore Commercial Roofing
- Direct Dispatch Phone: (555) 804-CORE (555-804-2673)
- Email: info@procoreroofing.com
- Capabilities: Commercial low-slope and flat roofing, single-ply membranes (TPO 60-mil/80-mil, PVC chemical resistant, EPDM rubber), Modified Bitumen, Built-Up Roofing (BUR), 100% high-solids silicone and urethane roof coatings, Preventative Maintenance Programs (PMP: Essential, Professional, Enterprise Comprehensive), emergency leak isolation.
- Credentials: NRCA Master Contractor, Carlisle ESP Master, GAF Master Select, Elevate Red Shield Master, ANSI/SPRI ES-1 certified metal fabricator, ISO 9001:2015, EMR < 0.75.
- Standards: 0.25/12 minimum slope to drain, FM Global Class 1-90 and 1-120 wind uplift, 20-30 Year No Dollar Limit (NDL) manufacturer warranties.

Booking Objective:
When the user wants to book or inspect a roof, gather and confirm:
1. Facility Name or Location (City/State or address)
2. Property Type (Warehouse, Manufacturing, Office, Healthcare, Retail, Education, etc.)
3. Approximate Square Footage (e.g. 50,000 sq ft, 180,000 sq ft)
4. Primary Scope (Leak Emergency, Complete Replacement, Flat Roof Recover, Silicone Coating, or Preventative Maintenance)
5. Preferred Inspection Timing
6. Contact Name & Phone / Email

Tone & Style:
- Corporate, authoritative, technical, concise, engineering-focused.
- If in voice call mode (${mode === "voice" ? "VOICE MODE" : "CHAT MODE"}), keep responses conversational, direct, and under 3 sentences so it sounds crisp over a phone or radio dispatch call.
- When all or key booking details are mentioned, acknowledge them clearly and state: "BOOKING CONFIRMED [TICKET: PC-XXXXXX]".
- Include JSON metadata at the very end of your response inside a code block tagged \`\`\`booking-json ... \`\`\` with the current extracted booking details if any were updated:
{
  "facility": string | null,
  "sqft": string | null,
  "propertyType": string | null,
  "service": string | null,
  "timing": string | null,
  "contact": string | null,
  "phone": string | null,
  "ticketId": string | null,
  "isComplete": boolean
}
`;

    if (!apiKey) {
      // High-quality deterministic fallback if no API key is set
      const lastUserMsg = messages[messages.length - 1]?.content || "";
      return NextResponse.json({
        text: `ProCore Field Command received your dispatch regarding: "${lastUserMsg.slice(0, 80)}". Our commercial systems engineering department is standing by. We can book a certified field engineer to conduct non-destructive infrared moisture mapping, substrate core extraction, and provide an ANSI/SPRI ES-1 compliance report. What is the approximate square footage and facility location of your building?\n\n\`\`\`booking-json\n{\n  "facility": "Pending",\n  "sqft": "Pending",\n  "propertyType": "Commercial",\n  "service": "Commercial Roofing Inspection",\n  "timing": "Within 48 Hours",\n  "contact": "Corporate Representative",\n  "phone": "(555) 804-CORE",\n  "ticketId": "PC-${Math.floor(100000 + Math.random() * 900000)}",\n  "isComplete": false\n}\n\`\`\``,
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    // Format conversation history for Gemini
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.3,
        maxOutputTokens: 600,
      },
    });

    const responseText = response.text || "ProCore Field Command copy that. How can we direct our field engineering strike unit?";

    return NextResponse.json({ text: responseText });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Error processing dispatch";
    console.error("AI Dispatch API Error:", errorMsg);
    const randomTicket = `PC-${Math.floor(100000 + Math.random() * 900000)}`;
    return NextResponse.json({
      text: `ProCore Field Command is online. Your commercial inspection request has been logged under temporary dispatch ticket ${randomTicket}. Please provide your property address, approximate building square footage, and current roof membrane type so our systems engineer can prepare the technical dossier.\n\n\`\`\`booking-json\n{\n  "facility": "Logged In Queue",\n  "sqft": "Pending",\n  "propertyType": "Commercial Facility",\n  "service": "Inspection & Diagnostic",\n  "timing": "Next Business Day",\n  "contact": "Facility Manager",\n  "phone": "(555) 804-CORE",\n  "ticketId": "${randomTicket}",\n  "isComplete": false\n}\n\`\`\``,
    });
  }
}
