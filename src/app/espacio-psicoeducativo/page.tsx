import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: "Espacio psicoeducativo gratuito en línea",
    description:
        "Espacio virtual gratuito con contenidos actuales sobre salud mental, todos los fines de mes a las 9 pm (hora CDMX), en vivo por Facebook o por Zoom.",
    path: "/espacio-psicoeducativo",
});

export default function Page() {
    return <PageClient />;
}
