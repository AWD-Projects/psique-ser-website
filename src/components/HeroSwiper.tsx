"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

interface SlideData {
    label: string;
    title: string;
    description: string;
    image: string;
}

interface HeroSwiperProps {
    slides?: SlideData[];
}

// Custom container to override arrow and dot styles
const SwiperContainer = styled(Box)(({ theme }) => ({
    ".swiper-button-next, .swiper-button-prev": {
        color: "#fff !important",
        [theme.breakpoints.down("sm")]: {
            display: "none !important",
        },
    },
    ".swiper-pagination-bullet": {
        backgroundColor: "#00407A !important",
    },
}));

const defaultSlides: SlideData[] = [
    {
        label: "Evaluaciones",
        title: "Trabajamos constantemente por ti",
        description: "Nuestro equipo de profesionales está comprometido con tu bienestar",
        image: "Home/hero-1.jpg",
    },
    {
        label: "Asesorías",
        title: "Encuentra el apoyo que necesitas",
        description: "Estamos aquí para ayudarte a superar tus desafíos",
        image: "Home/hero-2.jpg",
    },
    {
        label: "Contención",
        title: "Nunca estarás solo en tu proceso",
        description: "Estamos aquí para apoyarte en cada paso que des",
        image: "Home/hero-3.jpg",
    },
];

// Simple framer-motion config for fading in/up
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const HeroSwiper: React.FC<HeroSwiperProps> = ({ slides = defaultSlides }) => {
    return (
        <SwiperContainer
            sx={{
                width: "100%",
                height: { xs: "60vh", md: "100vh" },
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                loop
                style={{ width: "100%", height: "100%" }}
            >
                {slides.map(({ label, title, image, description }, i) => (
                    <SwiperSlide key={i}>
                        <Box
                            sx={{
                                width: "100%",
                                height: "100%",
                                backgroundImage: `url(${image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "relative",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                }}
                            />
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                    maxWidth: 800,
                                    textAlign: "center",
                                    color: "#fff",
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{ mb: 1, fontWeight: 500, opacity: 0.8 }}
                                >
                                    {label}
                                </Typography>
                                <Typography
                                    variant="h2"
                                    component={i === 0 ? "h1" : "h2"}
                                    sx={{ mb: 3, fontWeight: 700 }}
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ mb: 3, fontWeight: 300 }}
                                >
                                    {description}
                                </Typography>
                            </motion.div>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </SwiperContainer>
    );
};

export default HeroSwiper;
