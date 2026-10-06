import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = "G-GJK2PPXH84";

// Configure Inter
const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Asociación Civil Psique & Ser",
    description:
        "Bienvenido a la Asociación Civil Psique & Ser. Brindamos recursos valiosos y apoyo a psicólogos, terapeutas, estudiantes y cualquier persona interesada en la psicología.",
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
    metadataBase: new URL("https://www.tusitioweb.com"),
    alternates: {
        canonical: "https://www.tusitioweb.com",
    },
    icons: {
        icon: "/favicon.png",
    },
    openGraph: {
        title: "Asociación Civil Psique & Ser",
        description:
            "Empoderando al mundo a través de la psicología. Únete a nuestra asociación para recursos valiosos y apoyo.",
        url: "https://www.tusitioweb.com",
        siteName: "Psique & Ser",
        images: [
            {
                url: "https://ejemplo.com/tu-imagen.jpg",
                width: 800,
                height: 600,
                alt: "Imagen de Psique & Ser",
            },
        ],
        locale: "es_ES",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Asociación Civil Psique & Ser",
        description:
            "Empoderando al mundo a través de la psicología. Únete a nuestra asociación para recursos valiosos y apoyo.",
        images: ["https://ejemplo.com/tu-imagen.jpg"],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={inter.className}>
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
