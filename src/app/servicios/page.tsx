import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: "Servicios de terapia psicológica",
    description:
        "Soluciones en salud mental y atención psicológica para niños, adolescentes y adultos. Conoce nuestros servicios y nuestro proceso de atención.",
    path: "/servicios",
});

export default function Page() {
    return <PageClient />;
}
