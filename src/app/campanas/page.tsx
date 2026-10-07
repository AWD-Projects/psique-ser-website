import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: "Campañas de solidaridad",
    description:
        "Cada año organizamos una colecta para apoyar a poblaciones y áreas vulnerables: arranca en septiembre y cerramos con la entrega de víveres en noviembre.",
    path: "/campanas",
});

export default function Page() {
    return <PageClient />;
}
