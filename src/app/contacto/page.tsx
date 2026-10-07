import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: "Contacto y orientación psicológica",
    description:
        "Escríbenos o llámanos para recibir orientación y apoyo psicológico, o resolver tus dudas sobre horarios, servicios y campañas.",
    path: "/contacto",
});

export default function Page() {
    return <PageClient />;
}
