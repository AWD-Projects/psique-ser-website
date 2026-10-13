"use client";

import React, { useRef, useEffect } from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const mediaRef = useRef<HTMLDivElement | null>(null);

    // Trigger framer-motion fade once card is in view
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    // GSAP microanimation on the image (scale up a bit)
    useEffect(() => {
        if (mediaRef.current) {
            gsap.fromTo(
                mediaRef.current,
                { scale: 0.9 },
                { scale: 1, duration: 1, ease: "power2.out" }
            );
        }
    }, []);

    return (
        <motion.div
            ref={cardRef}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ width: "100%", display: "inline-block", height: "100%" }}
        >
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <Box ref={mediaRef}>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={title}
                        sx={{ height: 180, objectFit: "cover" }}
                    />
                </Box>

                {/* CardContent grows to fill remaining space */}
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                        {description}
                    </Typography>
                    
                    {/* Button at the bottom */}
                    <Box sx={{ mt: "auto" }}>
                    <Button
                        variant="text"
                        onClick={() => {
                            const mensaje = `¡Hola! Me gustaría solicitar más información sobre el servicio de ${title}. ¿Podrías ayudarme, por favor?`;
                            const telefono = "525535208014";
                            const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
                            window.open(url, "_blank");
                        }}
                    >
                        Reserva tu lugar →
                    </Button>
                    </Box>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ServiceCard;
