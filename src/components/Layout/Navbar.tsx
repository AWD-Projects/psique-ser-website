"use client";

import React, { useState, useEffect } from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Container,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Brand colors
const BRAND_PRIMARY = "#84BF23";
const BRAND_PRIMARY_ALPHA_08 = "rgba(132, 191, 35, 0.08)";
const BRAND_PRIMARY_ALPHA_12 = "rgba(132, 191, 35, 0.12)";

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const theme = useTheme();
    const pathname = usePathname();

    // Navigation items
    const navLinks = [
        { title: "Inicio", path: "/" },
        { title: "Nosotros", path: "/nosotros" },
        { title: "Servicios", path: "/servicios" },
        { title: "Red Clínica", path: "/red-clinica" },
        { title: "Blog", path: "/blog" },
        { title: "Campañas", path: "/campanas" },
        { title: "Espacio Psicoeducativo", path: "/espacio-psicoeducativo" },
        { title: "Tienda", path: "/tienda" },
        { title: "Contacto", path: "/contacto" },
    ];

    // Detect scroll to handle navbar background
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDrawer =
        (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent): void => {
            // Prevent drawer from closing on TAB/Shift key usage
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }
            setDrawerOpen(open);
        };

    const isActiveRoute = (path: string) => pathname === path;

    // Styles for the desktop nav buttons (no underline for active links)
    const desktopNavItemStyles = (active: boolean) => ({
        my: 2,
        mx: 1.5,
        position: "relative",
        color: active ? "primary.main" : "text.primary",
        fontWeight: active ? 600 : 400,
        transition: "color 0.2s ease-in-out",
        "&:hover": {
            color: "primary.main",
            backgroundColor: "transparent",
        },
    });

    // Drawer content for mobile
    const drawerList = (
        <Box
            sx={{
                width: 280,
                height: "100%",
                pt: 2,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    px: 2,
                    mb: 2,
                }}
            >
                <IconButton onClick={toggleDrawer(false)} component="div">
                    <CloseIcon />
                </IconButton>
            </Box>

            <List sx={{ px: 1 }}>
                {navLinks.map((page) => {
                    const active = isActiveRoute(page.path);
                    return (
                        <ListItem
                            key={page.title}
                            disablePadding
                            sx={{
                                mb: 0.5,
                                borderRadius: 1,
                                overflow: "hidden",
                            }}
                        >
                            <ListItemButton
                                component={Link}
                                href={page.path}
                                sx={{
                                    py: 2,
                                    backgroundColor: active
                                        ? BRAND_PRIMARY_ALPHA_08
                                        : "transparent",
                                    "&:hover": {
                                        backgroundColor: BRAND_PRIMARY_ALPHA_12,
                                    },
                                }}
                            >
                                <ListItemText
                                    primary={page.title}
                                    primaryTypographyProps={{
                                        fontWeight: active ? 600 : 400,
                                        color: active
                                            ? BRAND_PRIMARY
                                            : "text.primary",
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>

            <Box sx={{ p: 2, mt: 2 }}>
                <Button
                    component={Link}
                    href="https://wa.me/525535208014"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ py: 1.5, fontWeight: 600, color: "white" }}
                >
                    Agendar Cita
                </Button>
            </Box>
        </Box>
    );

    return (
        <AppBar
            // Use sticky so it remains at the top even while scrolling
            position="fixed"
            color="inherit"
            elevation={hasScrolled ? 4 : 0}
            sx={{
                top: 0,
                backgroundColor: hasScrolled
                    ? "rgba(255, 255, 255, 0.95)"
                    : "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                transition: "background-color 0.3s ease-in-out",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Logo for desktop */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
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
                                src="/Logo/logoAzul.png" // coloca aquí el path de tu logo
                                alt="Psique & Ser"
                                width={140} // ajusta el tamaño según lo necesites
                                height={60}
                                style={{ objectFit: "contain" }}
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop navigation */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        {navLinks.map((page, index) => {
                            const active = isActiveRoute(page.path);
                            return (
                                <motion.div
                                    key={page.title}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Button
                                        component={Link}
                                        href={page.path}
                                        sx={desktopNavItemStyles(active)}
                                    >
                                        {page.title}
                                    </Button>
                                </motion.div>
                            );
                        })}
                    </Box>

                    {/* CTA Button (Desktop) */}
                    <Box
                        sx={{
                            flexGrow: 0,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    const mensaje = `¡Hola! Me gustaría agendar una cita con ustedes. ¿Podrías brindarme más información, por favor?`;
                                    const telefono = "525535208014";
                                    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(
                                        mensaje
                                    )}`;
                                    window.open(url, "_blank");
                                }}
                                sx={{
                                    px: 3,
                                    py: 1,
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    fontWeight: 600,
                                    transition: "all 0.3s ease",
                                    color: "white",
                                    "&:hover": {
                                        boxShadow: 4,
                                        transform: "translateY(-2px)",
                                    },
                                }}
                            >
                                Agendar Cita
                            </Button>
                        </motion.div>
                    </Box>
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                    },
                }}
            >
                {drawerList}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
