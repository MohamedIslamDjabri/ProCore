import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { FieldCommandAiWidget } from "@/components/ai/FieldCommandAiWidget";
import { SITE_CONFIG } from "@/constants/data";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a141e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "https://procoreroofing.com"),
  title: {
    default: "ProCore Commercial Roofing | Commercial & Industrial Roofing Systems",
    template: "%s | ProCore Commercial Roofing",
  },
  description:
    "Engineered commercial flat roofing assemblies, single-ply TPO & PVC membranes, elastomeric roof coatings, and 24/7 facility asset maintenance programs nationwide.",
  keywords: [
    "commercial roofing",
    "industrial flat roofing",
    "TPO roofing contractor",
    "commercial roof coatings",
    "EPDM rubber roof",
    "commercial roof maintenance",
    "NDL warranty commercial roof",
    "commercial roof restoration",
  ],
  authors: [{ name: "ProCore Commercial Roofing Enterprise" }],
  creator: "ProCore Commercial Roofing",
  publisher: "ProCore Commercial Roofing",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ProCore Commercial Roofing",
    title: "ProCore Commercial Roofing | Built for Performance. Managed for the Long Term.",
    description:
      "Reliable commercial roofing systems, restorative liquid assemblies, elastomeric coatings, and continuous maintenance protocols for mission-critical facilities.",
    images: [
      {
        url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL7I2Gqg8MC3przkOF-aQt-SkTHXlXs4KGffz1a5vRKjSOsAfvWd0iSQ4yf5BFgash2ZRhdNVb9zaA29m9nZSIl3SmlUSKid4NB4ihakfN92RBZq-RieSbbNYXsBUUQqxSE_1FykAER-DJatSNK6JNQ9KYOqUn0GzzHaRQuYVqC8uXbjWwwP9pM7ynjfNgaxRMbTuTDs3uo6qFEreJb1Euyoy29xFwlwp0IfVt0z_t-dgRMTmTdnmI",
        width: 1200,
        height: 630,
        alt: "ProCore Commercial Roofing Industrial Enclosures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProCore Commercial Roofing | Commercial & Industrial Roofing",
    description:
      "Engineered commercial and industrial roofing systems, flat roofing, elastomeric coatings, and asset lifecycle maintenance programs.",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL7I2Gqg8MC3przkOF-aQt-SkTHXlXs4KGffz1a5vRKjSOsAfvWd0iSQ4yf5BFgash2ZRhdNVb9zaA29m9nZSIl3SmlUSKid4NB4ihakfN92RBZq-RieSbbNYXsBUUQqxSE_1FykAER-DJatSNK6JNQ9KYOqUn0GzzHaRQuYVqC8uXbjWwwP9pM7ynjfNgaxRMbTuTDs3uo6qFEreJb1Euyoy29xFwlwp0IfVt0z_t-dgRMTmTdnmI",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: SITE_CONFIG.name,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBL7I2Gqg8MC3przkOF-aQt-SkTHXlXs4KGffz1a5vRKjSOsAfvWd0iSQ4yf5BFgash2ZRhdNVb9zaA29m9nZSIl3SmlUSKid4NB4ihakfN92RBZq-RieSbbNYXsBUUQqxSE_1FykAER-DJatSNK6JNQ9KYOqUn0GzzHaRQuYVqC8uXbjWwwP9pM7ynjfNgaxRMbTuTDs3uo6qFEreJb1Euyoy29xFwlwp0IfVt0z_t-dgRMTmTdnmI",
    "@id": "https://procoreroofing.com",
    url: "https://procoreroofing.com",
    telephone: SITE_CONFIG.phoneRaw,
    email: SITE_CONFIG.email,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.81,
      longitude: -96.88,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    serviceArea: {
      "@type": "Country",
      name: "United States",
    },
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen">
        <Header />
        <main className="w-full pt-28 flex-grow">{children}</main>
        <Footer />
        <MobileStickyCta />
        <FieldCommandAiWidget />
      </body>
    </html>
  );
}
