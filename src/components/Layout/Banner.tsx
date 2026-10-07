"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";

interface BannerProps {
    backgroundImage: string;
    title: string;
    description: string;
}

const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const Banner: React.FC<BannerProps> = ({ backgroundImage, title, description }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <Box
  ref={ref}
  component={motion.div}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={bannerVariants}
  sx={{
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.4)", // 👈 opacidad ajustable
      zIndex: 0,
    },
  }}
>
  <Container sx={{ position: "relative", zIndex: 1 }}>
    <Typography variant="h3" component="h1" sx={{ mb: 2, color: "#fff" }}>
      {title}
    </Typography>
    <Typography variant="body1" sx={{ color: "#fff" }}>
      {description}
    </Typography>
  </Container>
</Box>

    );
};

export default Banner;
