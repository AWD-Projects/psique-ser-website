"use client";

import React, { useRef, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

// Simple fade-up variants for Framer Motion
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const CountersSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

    // Animate the counters from 0 to their final values when in view
    useEffect(() => {
        if (sectionInView) {
            const counters = document.querySelectorAll<HTMLElement>(".counter-value");
            counters.forEach((el) => {
                const finalVal = parseInt(el.dataset.value || "0", 10);

                gsap.fromTo(
                    el,
                    { innerText: 0 },
                    {
                        innerText: finalVal,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerText: 1 },
                        onUpdate() {
                            // Force the text to be an integer
                            el.innerText = Math.floor(parseFloat(el.innerText)).toString();
                        },
                    }
                );
            });
        }
    }, [sectionInView]);

    return (
        <Box
            ref={sectionRef}
            sx={{
                position: "relative",
                py: { xs: 6, md: 10 },
                backgroundColor: "transparent",
                color: "primary.main",
                overflow: "hidden",
            }}
        >
            <Container
                component={motion.div}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={fadeUp}
                sx={{ position: "relative", zIndex: 2 }}
            >
                <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                    <Typography variant="h1" component="h2" sx={{ mb: 2 }}>
                        Siempre listos para nuevos retos
                    </Typography>
                </Box>

                <Grid container spacing={4} sx={{ textAlign: "center" }}>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h3"
                            sx={{ mb: 1 }}
                            className="counter-value"
                            data-value="886"
                        >
                            886
                        </Typography>
                        <Typography variant="body1">
                            Casos exitosos
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h3"
                            sx={{ mb: 1 }}
                            className="counter-value"
                            data-value="600"
                        >
                            600
                        </Typography>
                        <Typography variant="body1">
                            Clientes satisfechos
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="h3"
                            sx={{ mb: 1 }}
                            className="counter-value"
                            data-value="960"
                        >
                            960
                        </Typography>
                        <Typography variant="body1">
                            Consultas con expertos
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CountersSection;
