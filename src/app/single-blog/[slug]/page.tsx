import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { blogData } from "@/components/Blog/BlogData";
import { blogDateToISO } from "@/lib/blog";
import { buildMetadata, truncate } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import BlogPostClient from "./BlogPostClient";

type Props = { params: Promise<{ slug: string }> };

// Solo existen los artículos de blogData; cualquier otro slug responde 404 real.
export const dynamicParams = false;

export function generateStaticParams() {
    return blogData.map((post) => ({ slug: post.slug }));
}

function findPost(slug: string) {
    return blogData.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = findPost(slug);
    if (!post) return {};

    return buildMetadata({
        title: post.title,
        description: post.excerpt,
        path: `/single-blog/${post.slug}`,
        image: post.image,
        type: "article",
        publishedTime: blogDateToISO(post.date),
        tags: post.tags,
    });
}

export default async function Page({ params }: Props) {
    const { slug } = await params;
    const post = findPost(slug);
    if (!post) notFound();

    const url = `${SITE_URL}/single-blog/${post.slug}`;
    const isoDate = blogDateToISO(post.date);

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: truncate(post.excerpt, 200),
        image: [`${SITE_URL}${post.image}`],
        ...(isoDate ? { datePublished: isoDate, dateModified: isoDate } : {}),
        author: { "@type": "Organization", name: post.author || SITE_NAME },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        url,
        inLanguage: "es-MX",
        ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
    };

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
            { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
    };

    return (
        <>
            <JsonLd data={articleJsonLd} />
            <JsonLd data={breadcrumbJsonLd} />
            <BlogPostClient post={post} />
        </>
    );
}
