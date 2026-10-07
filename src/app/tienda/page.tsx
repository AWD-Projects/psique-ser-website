import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

const visuallyHidden = {
    position: "absolute",
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    whiteSpace: "nowrap",
    border: 0,
} as const;

export const metadata: Metadata = buildMetadata({
    title: "Tienda",
    description:
        "Termos, libretas, cintas para credencial y stickers con frases para promover el bienestar mental.",
    path: "/tienda",
});

export default function Page() {
    return (
        <>
            <h1 style={visuallyHidden}>Tienda de Psique & Ser</h1>
            <PageClient />
        </>
    );
}
