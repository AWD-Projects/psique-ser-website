import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: "Red clínica de psicólogos y terapeutas",
    description:
        "Conoce a los especialistas de la red clínica de Psique & Ser: psicólogos y terapeutas con experiencia en salud mental y en el ámbito clínico.",
    path: "/red-clinica",
});

export default function Page() {
    return <PageClient />;
}
