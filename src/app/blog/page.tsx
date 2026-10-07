import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: "Blog de salud mental y bienestar emocional",
    description:
        "Artículos especializados sobre salud mental, bienestar emocional y herramientas psicológicas para mejorar tu calidad de vida.",
    path: "/blog",
});

export default function Page() {
    return <PageClient />;
}
