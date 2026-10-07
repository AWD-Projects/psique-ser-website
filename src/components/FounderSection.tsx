"use client";

import React, { useRef, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

// Framer-motion variants for text fade-up
const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
    },
};

const FounderSection: React.FC = () => {
    const imgRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);

    // Trigger framer-motion text animation when in view
    const textInView = useInView(textRef, { once: true, amount: 0.2 });

    // GSAP microanimation for the image
    useEffect(() => {
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
            );
        }
    }, []);

    return (
        <Box
            sx={{
                minHeight: { xs: "auto", md: "100vh" },
                display: "flex",
                alignItems: "center",
                pt: { xs: 8, md: 0 },
            }}
        >
            <Container>
                <Grid container spacing={4} alignItems="center">
                    {/* Left: Image */}
                    <Grid item xs={12} md={5}>
                    <Box
                        ref={imgRef}
                        sx={{
                        width: "100%",
                        borderRadius: "20px",
                        overflow: "hidden"
                        }}
                    >
                        <Box
                        component="img"
                        src="/Founder.jpg"
                        alt="Founder"
                        sx={{
                            width: "60%",
                            height: "auto",
                            borderRadius: "20px",
                            objectFit: "contain",
                            display: "block",
                        }}
                        />
                    </Box>
                    </Grid>


                    {/* Right: Text */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            ref={textRef}
                            variants={textVariants}
                            initial="hidden"
                            animate={textInView ? "visible" : "hidden"}
                        >
                            <Typography
                                variant="subtitle1"
                                sx={{ color: "primary.main", mb: 1 }}
                            >
                                Bienvenido a Psique & Ser A.C.
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{ mb: 3 }}
                            >
                                Fundación
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ mb: 3 }}
                            >
                                Psique & Ser A.C. surge en el año 2015 por los psicólogos Alan Torres y
                                Ximena Mendoza. A lo largo de los años, han institucionalizado e integrado
                                una red de atención psicológica con especialistas altamente competentes en
                                la salud mental y en el ámbito clínico. Hoy en día, Psique & Ser es una
                                Asociación Civil y marca registrada ante el IMPI. 
                            </Typography>
                            <Typography variant="body2">
                                Alan Torres - Fundador
                            </Typography>
                            <Typography variant="body2">
                                Ximena Mendoza - Fundadora
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FounderSection;
