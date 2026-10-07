"use client";

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ProductGrid from "@/components/Tienda/ProductGrid";

export default function Tienda() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <ProductGrid />
            <Footer />
        </ThemeProvider>
    );
}
