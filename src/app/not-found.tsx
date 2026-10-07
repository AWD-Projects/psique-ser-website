"use client";

import Link from "next/link";
import { Box, Button, Container, ThemeProvider, Typography } from "@mui/material";
import theme from "../theme";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

// Next.js agrega automáticamente <meta name="robots" content="noindex"> a las páginas 404.
export default function NotFound() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box sx={{ py: { xs: 16, md: 22 }, textAlign: "center" }}>
                <Container maxWidth="sm">
                    <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
                        Página no encontrada
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        La página que buscas no existe o cambió de lugar.
                    </Typography>
                    <Button component={Link} href="/" variant="contained">
                        Volver al inicio
                    </Button>
                </Container>
            </Box>
            <Footer />
        </ThemeProvider>
    );
}
