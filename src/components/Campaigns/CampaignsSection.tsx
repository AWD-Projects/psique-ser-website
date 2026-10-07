"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import CampaignCard from "./CampaignCard"; // Adjust path as needed
import { motion, useInView } from "framer-motion";

// Example data
const campaigns = [
    {
        title: "Dogminiquee primera campaña de solidaridad",
        description:
            "Dogminiquee es una fundación dedicada a la protección y rescate de perros en situación de calle. A través de esta campaña, recolectamos alimento, medicinas y donaciones para apoyar su labor.",
        images: [
            "/Campanas/dogminiquee-1.jpeg",
            "/Campanas/dogminiquee-2.jpeg",
            "/Campanas/dogminiquee-3.jpeg",
            "/Campanas/dogminiquee-4.jpeg",
            "/Campanas/dogminiquee-5.jpeg",
        ],
    },
    {
        title: "Funfai Segunda Campaña",
        description:
            "Funfai brinda asistencia a familias de escasos recursos, fomentando la educación y la nutrición infantil. En nuestra segunda campaña colaboramos para donar víveres, ropa y juguetes.",
        images: [
            "/Campanas/funfai-1.jpeg",
            "/Campanas/funfai-2.png",
            "/Campanas/funfai-3.png",
            "/Campanas/funfai-4.jpeg",
            "/Campanas/funfai-5.jpeg",
            "/Campanas/funfai-6.jpeg",
        ],
    },
    {
        title: "Asilo de Ancianos San Judas Tadeo A.C tercera campaña de solidaridad",
        description:
            "Asilo de Ancianos San Judas Tadeo A.C. es una asociación civil sin fines de lucro dedicada a brindar atención integral, hogar y cuidado a personas adultas mayores en situación vulnerable, promoviendo una vida digna, acompañada y protegida.",
        images: [
            "/Campanas/asilo-1.jpeg",
            "/Campanas/asilo-2.jpeg",
            "/Campanas/asilo-3.jpeg",
            "/Campanas/asilo-4.jpeg",
        ],
    },
];


const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const svgBackground =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201600%20800'%20preserveAspectRatio='none'%3E%3Crect%20width='1600'%20height='800'%20fill='%2300407A'/%3E%3Cpath%20fill='%23005A9C'%20d='M0%20100C300%20200%20500%20100%20800%20150s500-50%20800-100v750H0Z'/%3E%3Cpath%20fill='%230070B8'%20d='M0%20200C350%20150%20450%20200%20750%20230s550-30%20850-80v650H0Z'/%3E%3Cpath%20fill='%23339EDB'%20d='M0%20350C300%20300%20500%20350%20800%20380s500-30%20800-80v450H0Z'/%3E%3Cpath%20fill='%2366B8E1'%20d='M0%20450C300%20400%20550%20480%20800%20500s500-50%20800-30v330H0Z'/%3E%3C/svg%3E";

const CampaignsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });
    return (
        <>
        <Box
            ref={ref}
            component={motion.div}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeVariants}
            sx={{
                minHeight: { xs: "300px", md: "500px" },
                backgroundImage: `url("${svgBackground}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
                pt: { xs: 8, md: 0 },
            }}
        >
            <Container sx={{ zIndex: 1 }}>
                <Typography variant="h3" component="h1" sx={{ mb: 2 }}>
                    Campañas de Solidaridad
                </Typography>
                <Typography variant="body1">
                Anualmente realizamos una colecta para apoyar a las poblaciones y áreas vulnerables que requieren de nuestra ayuda, amor y solidaridad. Arrancamos en septiembre de cada año y cerramos entregando en noviembre. Pregunta a quién apoyaremos este año para la colecta y entrega de víveres.
                </Typography>
            </Container>
        </Box>
        
        <Box
            component="section"
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: "#f9fafb",
            }}
        >
            <Container>
                {campaigns.map((campaign, index) => (
                    <CampaignCard
                        key={index}
                        title={campaign.title}
                        description={campaign.description}
                        images={campaign.images}
                    />
                ))}
            </Container>
        </Box>
        </>
    );
};

export default CampaignsSection;
