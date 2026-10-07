import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: "Nosotros, psicología desde 2015",
    description:
        "Fundada en 2015 por Alan Torres y Ximena Mendoza, Psique & Ser reúne una red de especialistas en salud mental. Asociación Civil con marca registrada ante el IMPI.",
    path: "/nosotros",
});

export default function Page() {
    return <PageClient />;
}
