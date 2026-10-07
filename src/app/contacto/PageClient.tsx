"use client";

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ContactSection from "@/components/Contact/ContactSection";
import LocationSection from "@/components/Contact/LocationSection";

export default function Contacto() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <ContactSection />
            <LocationSection />
            <Footer />
        </ThemeProvider>
    );
}
