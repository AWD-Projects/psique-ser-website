import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/site";
import PageClient from "./PageClient";

export const metadata: Metadata = buildMetadata({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    path: "/",
    absoluteTitle: true,
});

export default function Page() {
    return <PageClient />;
}
