"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import CampaignsSection from "@/components/Campaigns/CampaignsSection";

export default function Campañas() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <CampaignsSection />        
            <Footer />
        </ThemeProvider>
    );
}
