"use client";

import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link as MuiLink,
    IconButton,
    Link,
} from "@mui/material";
// Example icons (use your own or from @mui/icons-material)
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "secondary.main",
                color: "#fff",
                pt: 6,
                pb: 4,
                mt: 6,
            }}
        >
            <Container>
                <Grid container spacing={4}>
                    {/* Logo + Hours */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 2 }}>
                            {/* Replace with your logo image if needed */}
                            <Link
                                href="/"
                                style={{
                                    marginRight: "16px",
                                    display: "flex",
                                    flexGrow: 1,
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    src="/Logo/LogoBlanco.png" // coloca aquí el path de tu logo
                                    alt="Psique & Ser"
                                    width={250} // ajusta el tamaño según lo necesites
                                    height={100}
                                    style={{ objectFit: "contain" }}
                                />
                            </Link>
                        </Box>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Lunes a Viernes: 9:00 - 21:00
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Sábado: 9:00 - 14:00
                        </Typography>
                        <Typography variant="body2">
                            Estamos para escucharte
                        </Typography>
                    </Grid>

                    {/* Navigation */}
                    <Grid item xs={6} md={3}>
                        <Typography
                            variant="overline"
                            sx={{ display: "block", mb: 2 }}
                        >
                            Navega
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                            }}
                        >
                            <MuiLink href="/" color="inherit" underline="none">
                                Inicio
                            </MuiLink>
                            <MuiLink
                                href="/nosotros"
                                color="inherit"
                                underline="none"
                            >
                                Nosotros
                            </MuiLink>
                            <MuiLink
                                href="/red-clinica"
                                color="inherit"
                                underline="none"
                            >
                                Red Clínica
                            </MuiLink>
                            <MuiLink
                                href="/espacio-psicoeducativo"
                                color="inherit"
                                underline="none"
                            >
                                Espacio Psicoeducativo
                            </MuiLink>
                            <MuiLink
                                href="/campanas"
                                color="inherit"
                                underline="none"
                            >
                                Campañas de Solidaridad
                            </MuiLink>
                            <MuiLink
                                href="/blog"
                                color="inherit"
                                underline="none"
                            >
                                Blog
                            </MuiLink>
                            <MuiLink
                                href="/contacto"
                                color="inherit"
                                underline="none"
                            >
                                Contacto
                            </MuiLink>
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={6} md={3}>
                        <Typography
                            variant="overline"
                            sx={{ display: "block", mb: 2 }}
                        >
                            Contacto
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            Dirección
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.7)" }}
                        >
                            <Link
                                href="https://maps.app.goo.gl/xPHHtmVfA6jFZ2Vk9"
                                target="_blank"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                Hamburgo 15
                                <br />
                                Cuauhtémoc, CDMX
                            </Link>
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.7)", mt: 2 }}
                        >
                            <Link
                                href="https://maps.app.goo.gl/WC8KE6DFMuJZsxGv9"
                                target="_blank"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                Miraflores 837
                                <br />
                                Benito Juárez, CDMX
                            </Link>
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.7)", mt: 2 }}
                        >
                            <Link
                                href="https://maps.app.goo.gl/kLoK8tzsZymLjqQm7"
                                target="_blank"
                                style={{
                                    color: "inherit",
                                    textDecoration: "none",
                                }}
                            >
                                Carlota, 67
                                <br />
                                Gustavo A. Madero, CDMX
                            </Link>
                        </Typography>

                        <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                            Correo electrónico
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.7)" }}
                        >
                            psique_ser@outlook.com
                        </Typography>

                        <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                            Número telefónico
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.7)" }}
                        >
                            55 3445 8029
                        </Typography>
                    </Grid>

                    {/* Social Media */}
                    <Grid item xs={12} md={2}>
                        <Typography
                            variant="overline"
                            sx={{ display: "block", mb: 2 }}
                        >
                            Síguenos en
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                component="a"
                                href="https://www.facebook.com/psiqueyser/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: "#fff" }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://www.instagram.com/psique_ser/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: "#fff" }}
                            >
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Box
                    sx={{
                        mt: 4,
                        borderTop: "1px solid rgba(255,255,255,0.2)",
                        pt: 2,
                    }}
                >
                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                        © Copyright 2023 by{" "}
                        <MuiLink
                            href="https://www.amoxtli.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            underline="hover"
                        >
                            Amoxtli Web Developers
                        </MuiLink>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
