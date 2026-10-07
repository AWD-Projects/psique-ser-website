"use client";

import React, { useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PersonCard from "./PersonCard";
import { motion } from "framer-motion";

interface PersonData {
    photoUrl: string;
    name: string;
    description: string;
    avatarUrl?: string;
    semblanza?: string;
}

// Example data for Red Clínica
const people: PersonData[] = [
    {
      photoUrl: "/Red/14.jpg",
      name: "Mtro. Alan Torres",
      description: "Fundador y Director de Psique & Ser A.C.",
      avatarUrl: "/Red/14.jpg",
      semblanza:
        "Psicólogo egresado de la Universidad La Salle con especialidad en educación. Maestro en psicología y posgrados en psicología clínica. Cuenta con 10 años de experiencia en atención clínica. Ha laborado en diversas instituciones reconocidas a nivel nacional. También es psicólogo en Tec de Monterrey Campus CCM.",
    },
    {
      photoUrl: "/Red/13.jpg",
      name: "Psic. Ximena Mendoza",
      description: "Fundadora de Psique & Ser A.C.",
      avatarUrl: "/Red/13.jpg",
      semblanza:
        "Egresada de la Universidad La Salle y con Especialidad en Educación. Cuenta con 10 años de experiencia en atención a niños, adolescentes y adultos. También es Directora a nivel secundaria del Colegio Británico. Tiene un Diplomado en psicología clínica del Centro de educación e innovación profesional",
    },
    {
      photoUrl: "/Red/24.jpg",
      name: "Psic. Carolina Mendoza",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/24.jpg",
      semblanza:
        "Psicóloga con experiencia en atención a adolescentes y adultos, con enfoque cognitivo conductual, narrativo y terapia breve centrada en soluciones. También, tiene experiencia en psicodiagnósticos, perfiles vocacionales, intervención en crisis y abordajes de diversos temas de salud mental.",
    },
    {
      photoUrl: "/Red/2.jpg",
      name: "Psic. Paulina López",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/2.jpg",
      semblanza:
        "Psicóloga egresada de la UNAM con experiencia en atención y evaluación a niños y adolescentes. También ha sido facilitadora de talleres y psicoeducación, al igual que atención a jóvenes universitarios.",
    },
    {
      photoUrl: "/Red/8.jpg",
      name: "Psic. Juan Loreto",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/8.jpg",
      semblanza:
        "Psicólogo egresado del Centro Universitario Coyotl. Cuenta con experiencia en el ámbito clínico desde un enfoque cognitivo conductual.",
    },
    {
      photoUrl: "/Red/17.jpg",
      name: "Psic. Nohemí López",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/17.jpg",
      semblanza:
        "Psicóloga clínica con enfoque cognitivo conductual. Brinda atención a adultos y adolescentes. De igual modo interviene desde la línea psicopedagógica a niños. Tiene posgrado en psicopatología del desarrollo y urgencias psiquiátricas.",
    },
    {
      photoUrl: "/Red/12.jpg",
      name: "Psic. Elizabeth Moreno",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/12.jpg",
      semblanza:
        "Psicóloga egresada del Centro Universitario Emmanuel Kant, con un enfoque psicoanalítico. También colabora como psicóloga en la Fundación Armando el tejido social y cultural urbano para todos.",
    },
    {
      photoUrl: "/Red/19.jpg",
      name: "Psic. Paola Luna",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/19.jpg",
      semblanza:
        "Psicóloga egresada de la UVM. Durante su formación se ha enfocado en psicoterapia de juego, atención en el área de lenguaje y habla, desarrollo y estimulación temprana, psicomotricidad, problemas de conducta y aprendizaje.",
    },
    {
      photoUrl: "/Red/7.jpg",
      name: "Psic. Francisco Flores",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/7.jpg",
      semblanza:
        "Psicoterapeuta psicoanalítico con experiencia en trabajo comunitario con población en riesgo de adicciones y violencia. De igual modo, ha sido terapeuta en CIJ y DIF. También es ponente en temas de adicciones, violencia, acoso y sexualidad.",
    },
    {
      photoUrl: "/Red/23.jpg",
      name: "Psic. Karla Rosales",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/23.jpg",
      semblanza:
        "Psicóloga con experiencia en evaluación y tratamiento psicológico bajo el enfoque cognitivo conductual y gestáltico en población infantil con diversas problemáticas.",
    },
    {
      photoUrl: "/Red/16.jpg",
      name: "Psic. Ana Castillo",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/16.jpg",
      semblanza:
        "Psicóloga con experiencia clínica desde un enfoque cognitivo conductual. Se dedica a la consulta privada y, también, es docente en educación primaria.",
    },
    {
      photoUrl: "/Red/21.jpg",
      name: "Psic. Fernando Contreras",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/21.jpg",
      semblanza:
        "Psicólogo clínico con experiencia en estrés post traumático, víctimas de delitos, violencia familiar y temas relacionados con salud mental. De igual modo, ha fungido como servidor público atendiendo víctimas y generadores de violencia.",
    },
    {
      photoUrl: "/Red/27.jpg",
      name: "Psic. Victoria Gutiérrez",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/27.jpg",
      semblanza:
        "Psicóloga clínica con enfoque humanista, brinda atención a adolescentes y adultos. De igual modo, proporciona terapia de pareja. Es egresada de la Universidad Latinoamérica y tiene formación en terapia breve.",
    },
    {
      photoUrl: "/Red/4.jpg",
      name: "Psic. Ricardo Najera",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/4.jpg",
      semblanza:
        "Psicólogo egresado de la FES Iztacala, con experiencia en el ámbito educativo y clínico. Brinda atención individual de corte cognitivo conductual a adolescentes y adultos.",
    },
    {
      photoUrl: "/Red/11.jpg",
      name: "Psic. Liliana Guzmán",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/11.jpg",
      semblanza:
        "Psicóloga egresada del Centro Universitario Emmanuel Kant. Cuenta con experiencia en clínica psico-oncológica pediátrica y psicología bariátrica.",
    },
    {
      photoUrl: "/Red/9.jpg",
      name: "Psic. Maricela Lara",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/9.jpg",
      semblanza:
        "Psicóloga egresada de la FES Zaragoza. Cuenta con posgrados en formación como psicóloga perito. También es psicoterapeuta en CIJ y DIF, y ponente en temas de adicciones, violencia, acoso y sexualidad.",
    },
    {
      photoUrl: "/Red/26.jpg",
      name: "Psic. Diana Trujillo",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/26.jpg",
      semblanza:
        "Psicóloga egresada de la UAM, enfocada al ámbito clínico. Cuenta con experiencia en consulta privada en atención a niños, adolescentes y adultos. De igual modo, es docente de psicología a nivel bachillerato.",
    },
    {
      photoUrl: "/Red/5.jpg",
      name: "Psic. Paola Estrada",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/5.jpg",
      semblanza:
        "Psicóloga egresada de la UNAM. Además de su labor clínica, cuenta con experiencia en asesoramiento a padres y profesores en temas de abordaje de competencias. Es escritora de artículos en la revista 'Miradas de cambio'.",
    },
    {
      photoUrl: "/Red/10.jpg",
      name: "Psic. Naylea Bonilla",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/10.jpg",
      semblanza:
        "Psicóloga clínica egresada de la Universidad Humanitas con enfoque cognitivo conductual. Tiene experiencia en tratamiento psicológico en trastornos del sueño. Maneja estudios polisomnográficos y electroencefalográficos en el IMMIS y en la clínica de Trastornos del sueño de la UNAM.",
    },
    {
      photoUrl: "/Red/31.jpg",
      name: "Psic. Leticia Caporal",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/31.jpg",
      semblanza:
        "Mtra. en psicología clínica por parte de la Universidad Humanitas. Cuenta con experiencia como docente a nivel Universitario y como psicóloga particular.",
    },
    {
      photoUrl: "/Red/30.jpg",
      name: "Psic. Karla Winkler",
      description: "Psicoanalista en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/30.jpg",
      semblanza:
        "Psicoanalista con experiencia en el ámbito clínico. Cuenta con la maestría en Filosofía por parte de la UNAM y otra maestría en Psicoanálisis por parte de Dimensión Psicoanalítica. Atiende adolescentes y adultos.",
    },
    {
      photoUrl: "/Red/18.jpg",
      name: "Psic. Karina Feliciano",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/18.jpg",
      semblanza:
        "Psicóloga con experiencia en el ámbito clínico y psicoeducativo desde un enfoque cognitivo conductual. Es egresada de la UNAM. También tiene experiencia en consejería breve, atención en crisis, y diseño e impartición de talleres.",
    },
    {
      photoUrl: "/Red/1.jpg",
      name: "Psic. Noemí Vázquez",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/1.jpg",
      semblanza:
        "Psicóloga clínica egresada de la Universidad Marista, con enfoque Gestalt. Cuenta con 8 años de experiencia brindando terapia a niños, adolescentes y adultos. También ofrece acompañamiento escolar a personas con capacidades diferentes.",
    },
    {
      photoUrl: "/Red/29.jpg",
      name: "Psic. Brenda Linares",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/29.jpg",
      semblanza:
        "Psicóloga egresada de la UNAM con experiencia en evaluación e intervención a niños, adolescentes y adultos bajo un enfoque cognitivo conductual.",
    },
    {
      photoUrl: "/Red/3.jpg",
      name: "Psic. Luis Palacios",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/3.jpg",
      semblanza:
        "Psicólogo clínico con enfoque psicoanalítico, egresado del IPN. Cuenta con experiencia en atención a adolescentes y adultos. Tiene un posgrado en psicología.",
    },
    {
      photoUrl: "/Red/33.jpg",
      name: "Psic. Aidé González",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/33.jpg",
      semblanza:
        "Psicóloga con enfoque cognitivo-conductual, especializada en evaluación, diagnóstico e intervención psicológica con adolescentes y adultos. Egresada de la UNAM con licenciatura en Psicología. Brinda atención de manera presencial, con horarios a convenir directamente con la terapeuta.",
    },
    {
      photoUrl: "/Red/34.jpg",
      name: "Psic. Angélica Gil",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/34.jpg",
      semblanza:
        "Psicoterapeuta con enfoque humanista, con experiencia en la atención a adolescentes y adultos. Brinda acompañamiento emocional a personas que buscan alternativas de solución a situaciones que consideran problemáticas. Egresada de la UNAM como licenciada en Psicología, con especialidad en Terapia Gestalt, Psicoterapia Sistémica, Terapia Psicocorporal y Terapia Familiar. Ofrece atención presencial y en línea, con horario a convenir directamente con la terapeuta.",
    },
    {
      photoUrl: "/Red/35.jpg",
      name: "Psic. Beatríz Martínez",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/35.jpg",
      semblanza:
        "Psicóloga clínica y psicoterapeuta con enfoque cognitivo-conductual, especializada en la atención a niños, adolescentes y adultos. Cuenta con experiencia en temas de salud mental como estrés, ansiedad y TOC. Además, brinda acompañamiento tanatológico y se especializa en evaluación, diagnóstico y procesos terapéuticos individuales. Egresada de la Universidad Tecnológica Latinoamericana, con diplomados en terapia cognitivo-conductual (ANÁHUAC) y tanatología (Instituto Mexicano de Tanatología A.C.). Ofrece atención presencial y en línea, con horario a convenir con la terapeuta.",
    },
    {
      photoUrl: "/Red/36.jpg",
      name: "Psic. Diana Rueda",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/36.jpg",
      semblanza:
        "Psicóloga clínica con enfoque cognitivo-conductual, especializada en terapia integradora de tercera generación. Atiende procesos de separación, divorcio, ansiedad, depresión, drogadicción, dependencia emocional, TOC, fobias, manejo de ira, modificación de conducta, trastornos del estado de ánimo, estrés postraumático, preocupaciones o miedos excesivos e intervención en crisis. Egresada de la Universidad del Pedregal y con maestría en Psicología Clínica por la Universidad ISEP. Ofrece atención presencial y en línea, con horarios a convenir directamente con la terapeuta.",
    },
    {
      photoUrl: "/Red/37.jpg",
      name: "Psic. Diego Rosa",
      description: "Psicólogo en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/37.jpg",
      semblanza:
        "Psicólogo con enfoque sistémico centrado en soluciones, con experiencia en la atención a adolescentes y adultos. Su práctica clínica busca comprender las dinámicas interpersonales y ofrecer herramientas prácticas para mejorar la calidad de vida. Egresado del Centro Interdisciplinario de Ciencias de la Salud (Unidad Santo Tomás del IPN), con formación en tanatología y diplomado en Terapia Gestalt Relacional por el Centro de Psicoterapia Gestaltung A.C. Ofrece atención presencial y en línea, con horario a convenir directamente con el terapeuta.",
    },
    {
      photoUrl: "/Red/38.jpg",
      name: "Psic. Gisela Hernández",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/38.jpg",
      semblanza:
        "Psicóloga con enfoque psicoanalítico, con experiencia en el ámbito clínico brindando atención e intervención en el desarrollo psicosocial de niños, adolescentes y adultos. Licenciada en Psicología por la Universidad Intercontinental y con maestría en estudios en Psicoanálisis por la Universidad del Claustro de Sor Juana. Brinda atención en línea, con horario a convenir directamente con la terapeuta.",
    },
    {
      photoUrl: "/Red/39.jpg",
      name: "Psic. Iliuhtzy López",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/39.jpg",
      semblanza:
        "Psicóloga con experiencia en el trabajo terapéutico con niños, enfocándose en el desarrollo de sus habilidades emocionales, sociales y cognitivas. Utiliza pruebas proyectivas como herramienta clave para comprender mejor el mundo interno, emociones y necesidades de los menores, adaptando el proceso a su edad y personalidad. Licenciada en Psicología por la Universidad Autónoma Metropolitana, Unidad Xochimilco. Ofrece atención presencial y en línea, con horario a convenir con la terapeuta.",
    },
    {
      photoUrl: "/Red/40.jpg",
      name: "Psic. Iris Alfonso",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/40.jpg",
      semblanza:
        "Psicóloga clínica con experiencia en la atención de niños, niñas, adolescentes y adultos, abordando problemáticas psiquiátricas y del comportamiento desde un enfoque cognitivo-conductual. Especialista en Estructuración de Modelos de Intervención y acreditada como neuropsicóloga, con experiencia en la aplicación de pruebas psicológicas ante la STPS. Egresada de la Universidad Tecnológica de México, donde también cursó su maestría en Psicología. Brinda atención presencial y en línea, con horario a convenir con la terapeuta.",
    },
    {
      photoUrl: "/Red/41.jpg",
      name: "Psic. Jatnaely Ruíz",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/41.jpg",
      semblanza:
        "Psicóloga con enfoque integrativo en la atención a pacientes. Ha sido coordinadora formativa en Casa Hogar Alegría y acompañante psicoemocional en Fundación Yad RAJAMIM. También cuenta con experiencia docente y como tallerista artístico y psicoemocional. Licenciada en Psicología por la Universidad Tecnológica de México (UNITEC), actualmente estudia una maestría en Educación y Necesidades Especiales. También es licenciada en Artes Teatrales por la UAEM. Cuenta con diplomados en formación psicoterapéutica, intervención terapéutica de tercera generación, terapia de pareja y sexualidad, técnicas conductuales y motivación, y psicometría y evaluación psicológica. Brinda atención presencial y en línea, con horarios a convenir con la terapeuta.",
    },
    {
      photoUrl: "/Red/42.jpg",
      name: "Psic. Jazmin Tavera",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/42.jpg",
      semblanza:
        "Psicóloga con experiencia clínica en atención a niños, adolescentes, adultos y adultos mayores. Con formación en terapia de duelo, ansiedad, depresión, problemas de conducta y manejo emocional. Fundadora de la página 'Escuchando tu voz', enfocada en brindar terapia a la población mexicana. Licenciada en Psicología por la Universidad de la República Mexicana, con maestría en Educación. También se ha formado en el Instituto Especializado en Medicina Integrativa en Terapia de Duelo y Cuidados Paliativos. Ofrece atención presencial y en línea, con horario a convenir con la terapeuta.",
    },
    {
      photoUrl: "/Red/43.jpg",
      name: "Psic. Paulina Vázquez",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/43.jpg",
      semblanza:
        "Psicóloga con formación en el enfoque sistémico, con experiencia en la atención a pacientes niños, adolescentes y adultos. Ha colaborado en instituciones educativas como profesora adjunta y responsable de inclusión estudiantil. Licenciada en Psicología por ULA Florida, cuenta con posgrado en Terapia Familiar Sistémica con especialidad en Terapia de Parejas por la Universidad de Lebrija, así como diplomados en Terapia de Parejas (UDEMY), Neurociencias y Arte (IMTE), y Terapia de Danza (Danzaterapia México). Brinda atención presencial y en línea, con horario a convenir directamente con la terapeuta.",
    },
    {
      photoUrl: "/Red/44.jpg",
      name: "Psic. Tania Ávila",
      description: "Psicóloga en Red Clínica de Psique & Ser A.C.",
      avatarUrl: "/Red/44.jpg",
      semblanza:
        "Maestrante en Psicología Clínica con enfoque psicoanalítico. Cuenta con experiencia en atención y seguimiento psicológico a niños, adolescentes y adultos. Egresada de la Universidad La Salle, actualmente cursa la maestría en Centro Eleia. Ofrece atención presencial y en línea, con horarios a convenir directamente con la terapeuta.",
    },
];
  

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const PeopleGrid: React.FC = () => {
    // Show 8 items initially
    const [visibleCount, setVisibleCount] = useState(8);

    // Function to load 8 more cards
    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 8);
    };

    // Slice the array to show only the visibleCount items
    const visiblePeople = people.slice(0, visibleCount);

    return (
        <Box sx={{ py: { xs: 6, md: 12 },  pt: { xs: 15, md: 15 },}}>
            <Container>
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{ mb: 7, textAlign: "center", fontWeight: 700 }}
                >
                    Nuestra Red Clínica
                </Typography>

                <Grid container spacing={4}>
                    {visiblePeople.map((person, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            component={motion.div}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUpVariants}
                        >
                            <PersonCard
                                photoUrl={person.photoUrl}
                                name={person.name}
                                description={person.description}
                                avatarUrl={person.avatarUrl}
                                semblanza={person.semblanza}
                            />
                        </Grid>
                    ))}
                </Grid>

                {/* Load More Button (Only if there are more people to show) */}
                {visibleCount < people.length && (
                    <Box sx={{ textAlign: "center", mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleLoadMore}
                            sx={{ textTransform: "none", color: "#fff" }}
                        >
                            Cargar más
                        </Button>
                    </Box>
                )}
            </Container>
        </Box>
    );
};

export default PeopleGrid;