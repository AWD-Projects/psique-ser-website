import type { MetadataRoute } from "next";
import { blogData } from "@/components/Blog/BlogData";
import { blogDateToISO } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const pages: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    { path: "/nosotros", priority: 0.8 },
    { path: "/red-clinica", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/espacio-psicoeducativo", priority: 0.7 },
    { path: "/contacto", priority: 0.7 },
    { path: "/campanas", priority: 0.5 },
    { path: "/tienda", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const staticPages: MetadataRoute.Sitemap = pages.map(({ path, priority }) => ({
        url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
        priority,
    }));

    const posts: MetadataRoute.Sitemap = blogData.map((post) => {
        const iso = blogDateToISO(post.date);
        return {
            url: `${SITE_URL}/single-blog/${post.slug}`,
            ...(iso ? { lastModified: iso } : {}),
            priority: 0.6,
        };
    });

    return [...staticPages, ...posts];
}
