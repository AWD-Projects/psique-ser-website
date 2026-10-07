import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import {
    DEFAULT_OG_IMAGE,
    SITE_DESCRIPTION,
    SITE_EMAIL,
    SITE_LEGAL_NAME,
    SITE_NAME,
    SITE_PHONE,
    SITE_TITLE,
    SITE_URL,
    SOCIAL_LINKS,
} from "@/lib/site";

const GA_ID = "G-GJK2PPXH84";

// Configure Inter
const inter = Inter({
    subsets: ["latin"],
});

// El canónico NO se define aquí: cada página declara el suyo (ver lib/seo.ts).
// Si se definiera en el layout, todas las páginas heredarían la misma URL.
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [
        "Psique & Ser",
        "Asociación Civil",
        "psicología",
        "psicólogos",
        "terapia",
        "salud mental",
        "recursos de psicología",
        "apoyo psicológico",
        "bienestar mental",
        "estudiantes de psicología",
        "asesoría psicológica",
        "crecimiento personal",
    ],
    icons: {
        icon: "/favicon.png",
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: "/",
        siteName: SITE_NAME,
        images: [
            {
                url: DEFAULT_OG_IMAGE,
                width: 1200,
                height: 630,
                alt: SITE_TITLE,
            },
        ],
        locale: "es_MX",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [DEFAULT_OG_IMAGE],
    },
};

const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/Logo/logoAzul.png`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    description: SITE_DESCRIPTION,
    foundingDate: "2015",
    founder: [
        { "@type": "Person", name: "Alan Torres" },
        { "@type": "Person", name: "Ximena Mendoza" },
    ],
    areaServed: "Ciudad de México",
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        availableLanguage: "es",
    },
    sameAs: SOCIAL_LINKS,
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "es-MX",
    publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <JsonLd data={organizationJsonLd} />
                <JsonLd data={websiteJsonLd} />
                {children}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_ID}');
                    `}
                </Script>
            </body>
        </html>
    );
}
