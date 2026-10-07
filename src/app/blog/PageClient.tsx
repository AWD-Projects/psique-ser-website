"use client";

import React from "react";
import { ThemeProvider} from "@mui/material";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BlogPage from "@/components/Blog/BlogPage";
import Banner from "@/components/Layout/Banner";

export default function Blog() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Banner
                        backgroundImage="/Blog/banner.jpeg"
                        title="Explora Nuestro Blog"
                        description="Accede a artículos especializados sobre salud mental, bienestar emocional y herramientas psicológicas para mejorar tu calidad de vida."
                    />
            <BlogPage />
            <Footer />
        </ThemeProvider>
    );
}
