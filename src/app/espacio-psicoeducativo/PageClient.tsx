"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BannerEspacioPsicoeducativo from "@/components/Space/BannerEspacioPsicoeducativo";
import SessionsSection from "@/components/Space/SessionSection";

export default function EspacioPsicoeducativo() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />     
            <BannerEspacioPsicoeducativo />
            <SessionsSection />
            <Footer />
        </ThemeProvider>
    );
}
