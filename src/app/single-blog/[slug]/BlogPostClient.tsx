"use client";

import HeaderBlog from "@/components/SingleBlog/HeaderBlog";
import ContentBlog from "@/components/SingleBlog/ContentBlog";
import type { BlogItem } from "@/components/Blog/BlogData";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme";

export default function BlogPostClient({ post }: { post: BlogItem }) {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <HeaderBlog post={post} />
            <ContentBlog post={post} />
            <Footer />
        </ThemeProvider>
    );
}
