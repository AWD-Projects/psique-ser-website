import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "./site";

type PageSeo = {
    title: string;
    description: string;
    /** Ruta relativa al dominio, p. ej. "/servicios". Se usa como canónico. */
    path: string;
    image?: string;
    type?: "website" | "article";
    publishedTime?: string;
    tags?: string[];
    /** Usar el título tal cual, sin agregar " | Psique & Ser". */
    absoluteTitle?: boolean;
};

const MAX_TITLE = 70;
const MAX_DESCRIPTION = 160;

/** Recorta en el límite de palabra más cercano para que no se corte a media palabra en Google. */
export function truncate(text: string, max = MAX_DESCRIPTION): string {
    const clean = text.replace(/\s+/g, " ").trim();
    if (clean.length <= max) return clean;
    const cut = clean.slice(0, max - 1);
    const lastSpace = cut.lastIndexOf(" ");
    return `${cut.slice(0, lastSpace > 80 ? lastSpace : cut.length).replace(/[.,;:\s]+$/, "")}…`;
}

export function buildMetadata({
    title,
    description,
    path,
    image = DEFAULT_OG_IMAGE,
    type = "website",
    publishedTime,
    tags,
    absoluteTitle = false,
}: PageSeo): Metadata {
    const withBrand = `${title} | ${SITE_NAME}`;
    // Si con la marca el título es muy largo, se deja solo el título.
    const useAbsolute = absoluteTitle || withBrand.length > MAX_TITLE;
    const fullTitle = useAbsolute ? title : withBrand;
    const desc = truncate(description);

    const isDefaultImage = image === DEFAULT_OG_IMAGE;
    const base = {
        title: fullTitle,
        description: desc,
        url: path,
        siteName: SITE_NAME,
        locale: "es_MX",
        images: [
            {
                url: image,
                alt: title,
                ...(isDefaultImage ? { width: 1200, height: 630 } : {}),
            },
        ],
    };

    const openGraph: Metadata["openGraph"] =
        type === "article"
            ? {
                  ...base,
                  type: "article",
                  publishedTime,
                  tags,
                  authors: [SITE_NAME],
              }
            : { ...base, type: "website" };

    return {
        title: useAbsolute ? { absolute: title } : title,
        description: desc,
        alternates: { canonical: path },
        openGraph,
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: desc,
            images: [image],
        },
    };
}
