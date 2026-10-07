"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Banner from "@/components/Layout/Banner";
import ServiceSection from "@/components/Services/ServiceSection";
import CTA from "@/components/Layout/CTA";
import OurProcessSection from "@/components/Services/OurProcessSection";

export default function Servicios() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Banner
                backgroundImage="/Services/banner.jpeg"
                title="Nuestros Servicios"
                description="Descubre nuestras soluciones en salud mental y atención psicológica para transformar tu vida."
            />
            <ServiceSection />
            <OurProcessSection />
            <CTA />
            <Footer />
        </ThemeProvider>
    );
}
