"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import MainBannerNosotros from "@/components/About/MainBannerNosotros";
import MissionVisionValuesSection from "@/components/About/MissionVisionValuesSection";
import TherapyTabs from "@/components/About/TherapyTabs";
import FAQSection from "@/components/About/FAQSection";

export default function Nosotros() {
    return (
        <ThemeProvider theme={theme}>
              <Navbar />
              <MainBannerNosotros />
              <MissionVisionValuesSection />
              <TherapyTabs />
              <FAQSection />
              <Footer />
        </ThemeProvider>
    );
}
