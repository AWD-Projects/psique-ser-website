"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const BannerEspacioPsicoeducativo: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    const backgroundImage = "/Services/banner.jpeg"
    return (
        <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeVariants}
            sx={{
                minHeight: { xs: "300px", md: "500px" },
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                pt: { xs: 8, md: 0 },
                "::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  zIndex: 1,
                },
              }}
        >
            <Container sx={{ zIndex: 1 }}>
                <Typography variant="h3" component="h1" sx={{ mb: 2, color:"white" }}>
                    Espacio Psicoeducativo
                </Typography>
                <Typography variant="body1" sx={{color:"white"}}>
                    Brindamos un espacio virtual de forma gratuita a la audiencia con
                    contenidos relevantes y actuales en torno a la salud mental todos
                    los fines de mes a las 9pm hora CDMX. Puedes ver la transmisión en
                    vivo por Facebook o conectarte a zoom 409 111 3034.
                </Typography>
            </Container>
        </Box>
    );
};

export default BannerEspacioPsicoeducativo;
