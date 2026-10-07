"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PeopleGrid from "@/components/Network/PeopleGrid";

export default function RedClinica() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <PeopleGrid />
            <Footer />
        </ThemeProvider>
    );
}
