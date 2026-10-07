"use client";

import React, { useRef } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion, useInView } from "framer-motion";
import BlogCard from "./BlogCard"; // Adjust import path as needed

export interface BlogItem {
    date: string;
    author: string;
    title: string;
    excerpt: string;
    image: string;
    slug: string;
    content?: Array<{ type: "paragraph" | "quote"; text?: string }>;
    tags?: string[];
}

const blogData: BlogItem[] = [
    {
        date: "31 OCT",
        author: "Psic. Ruth Gonzalez | Psicóloga en Red Clínica de Psique & Ser",
        title: "Salud mental, un derecho universal",
        excerpt: "Tu bienestar mental es un derecho, no un lujo. Descubre cómo cuidar tu salud emocional y mejorar tu calidad de vida.",
        slug: "post-1",
        image: "/Blog/post-1.png",
        content: [
            { type: "quote", text: "La salud es un estado de completo bienestar físico, mental y social y no solamente la ausencia de afecciones o enfermedades." },
            { type: "paragraph", text: "El 10 de octubre se conmemora el <strong> Día Mundial de la Salud Mental </strong> con el objetivo de concientizar acerca de los diferentes problemas de salud mental en todo el mundo y recordar que la salud mental es la base para construir vidas plenas y satisfactorias, por lo tanto, es un tema de interés para todos y no sólo para aquellos afectados por un trastorno mental transitorio o permanente." },
            { type: "paragraph", text: "<strong> ¿Qué es la salud mental? </strong><br/><br/> La Organización Mundial de la Salud (OMS) define a la Salud Mental como un <strong> estado de bienestar en el cual cada individuo desarrolla su potencial, puede afrontar las tensiones de la vida, puede trabajar de forma productiva y fructífera, y puede aportar algo a su comunidad.</strong>" },
            { type: "paragraph", text: "La salud mental asocia con cuatro concepciones fundamentales:<br/><br/> <ul><li>ausencia de síntomas disfuncionales.</li><li>bienestar físico y emocional.</li><li>calidad de vida</li><li>presencia de atributos individuales positivos.</li></ul><br/><br/>Se considera que la Salud Mental se relaciona con un estado de equilibrio entre la persona y su entorno a lo largo de todas las etapas de la vida, el cual incluye una sensación de bienestar emocional, psíquico y social que influye en la forma en que pensamos, sentimos y actuamos cuando enfrentamos la vida. La salud mental también ayuda a determinar cómo nos relacionamos con nosotros mismos, con los demás y la forma en que tomamos decisiones.<br/><br/>Algunos de los conceptos sobre salud mental incluyen el bienestar subjetivo, la autonomía, uso de nuestras habilidades y competencias así como el reconocimiento de nuestra habilidad para realizarnos intelectual, social y emocionalmente. La salud mental se refiere a la posibilidad de aumentar nuestras capacidades y permitirnos alcanzar nuestros objetivos." },
            { type: "paragraph", text: "<strong> ¿Qué es la salud mental? </strong><br/><br/><ul><li>Factores biológicos, neurológicos, psicológicos y genéticos.</li><li>Factores ambientales y sociales como inseguridad, desastres, violencia, etc.</li><li>Experiencias conflictivas de la vida familiar, laboral, escolar o de pareja.</li><li>Nuestro estilo de vida, como la dieta, actividad física y consumo de sustancias.</li><li>Experiencias de estrés, trauma o abuso.</li></ul>" },
            { type: "paragraph", text: "<strong> Algunas señales que nos indican que podemos experimentar problema de salud mental:</strong><br/><br/><ul><li>Cambios en hábitos de alimentación o de sueño.</li><li>Cambios constantes de humor que causen malestar personal</li><li>Inicio o incremento del uso alcohol o drogas</li><li>Sentirse inusualmente confundido, olvidadizo, enojado, molesto, preocupado o asustado</li><li>Sentimientos de vacío o tener nada o poca energía</li><li>Aislamiento de personas y actividades que antes disfrutaba</li><li>Pensar en lastimarse a sí mismo o a otros</li><li>Incapacidad o gran dificultad para realizar sus tareas diarias</li><li>Dificultad o incapacidad para resolver conflictos interpersonales</li></ul>" },
            { type: "paragraph", text: "<strong> Beneficios de la salud mental: </strong><br/><br/><La salud mental nos permite hacer frente a los momentos de estrés de la vida, desarrollar todas nuestras habilidades, ser auténticos, tomar nuestras propias decisiones, poder aprender y trabajar adecuadamente, además de contribuir plenamente en nuestra calidad de vida y en la convivencia con otras personas.<br/><br/>Además de mejorar nuestra salud física, nos ayuda a generar relaciones de calidad con otras personas así como permitirnos vivir en un estado de bienestar constante y generar proyectos para el futuro." },
            { type: "paragraph", text: "<strong> Recomendaciones para mantener una buena salud mental: </strong><br/><br/><ul><li>Mantener buenos hábitos alimenticios</li><li>Realizar actividad física con regularidad</li><li>Evitar el tabaco y el consumo de drogas</li><li>Mantener rutinas de sueño estables</li><li>Sentimientos de vacío o tener nada o poca energía</li><li>Aislamiento de personas y actividades que antes disfrutaba</li><li>Pensar en lastimarse a sí mismo o a otros</li><li>Incapacidad o gran dificultad para realizar sus tareas diarias</li><li>Dificultad o incapacidad para resolver conflictos interpersonales</li></ul>" },
        ],
        tags: ["Derecho universal", "Salud mental", "Bienestar", "Equilibrio", "Calidad de vida", "Relaciones de calidad"]        
    },
    {
        date: "31 AGO",
        author: "Psic. Brenda Linares | Psicóloga en Red Clínica de Psique & Ser",
        title: "Suicidio: Mitos y realidades",
        excerpt: "Rompiendo mitos sobre el suicidio: descubre la verdad, derriba estigmas y aprende cómo la prevención puede salvar vidas. ",
        slug: "post-2",
        image: "/Blog/post-2.png",
        "content": [
            {
              "type": "paragraph",
              "text": "El suicidio es definido como el “acto voluntario e intencional mediante el cual la persona causa su propia muerte (OMS, 2006). A pesar de ser un fenómeno muy estudiado, sigue siendo uno de los temas con más estigma, mitos y tabús alrededor. Dicho estigma hace que se limite la difusión y que el hablar del tema sea visto como algo malo, o como una forma de incitar a las personas a realizarlo, cuando en realidad es la principal línea de prevención ya que sensibiliza y visibiliza una realidad que está muy presente a nivel mundial."
            },
            {
              "type": "paragraph",
              "text": "Actualmente el suicidio es la cuarta causa de muerte a nivel mundial con 703 000 casos al año, y la segunda causa de muerte en México con 8,351 casos reportados, siendo la población de 15 a 29 años más afectada por este fenómeno. Dadas las cifras anuales es que organizaciones como la Organización Mundial de la Salud y la Asociación Internacional para la Prevención del Suicidio han ideado el “Día Mundial para la Prevención del Suicidio” que se conmemora el 10 de septiembre con el objetivo de concientizar a la población sobre el tema y lanzar un mensaje muy importante “el suicidio puede prevenirse”."
            },
            {
              "type": "paragraph",
              "text": "El suicidio es un fenómeno complejo, multifactorial y que requiere intervenciones multidisciplinarias. Intervienen en él múltiples factores tanto individuales como del ambiente que rodea al sujeto, dichos factores pueden ser de riesgo y aumentar la probabilidad de realizarlo o pueden ser protectores y disminuirlo. Dadas esas condiciones es que se habla que cada caso es diferente, que no es relacional ni causal, es decir, no es un fenómeno de causa y efecto, por lo que tampoco es secuencial ya que no siguen un orden en cómo se presentan. Existen diversos tipos de conducta suicida que varían en naturaleza y gravedad, que van desde las autolesiones, ideación o pensamiento suicida e intento suicida, y los cuales puede presentarse uno sin necesidad de estar presente otro."
            },
            {
              "type": "paragraph",
              "text": "Al ser la conducta suicida y el suicidio fenómenos tan complejos, es que es existen muchos criterios equivocados respecto a él y que simplifican, discriminan, enjuician, encasillan, etiquetan, tratan de manera peyorativa a las personas que lo intentan, generando más estigma y limitando las opciones de intervención y de prevención, debido a la poca información que se tiene sobre él debido a que está prohibido hablar sobre el tema o lo que se habla no es del todo adecuado. Por esa razón es de suma importancia que haya espacios donde se hable del tema, para visibilizarlo y desmitificar todos los juicios erróneos que se hacen respecto a éste y a las personas que lo llevan a cabo."
            },
            {
              "type": "paragraph",
              "text": "El suicidio es prevenible, todos podemos contribuir a ello. Escuchemos a quien muestra señales de querer quitarse la vida, y busquemos ayuda. El suicidio es una solución permanente a un problema temporal. No estás solo."
            },
            {
              "type": "quote",
              "text": "El no hablar sobre un tema lo invisibiliza, y una realidad de la que no se habla simplemente no existe"
            }
          ],
          "tags": [
            "Prevención del Suicidio",
            "Salud Mental",
            "Estigma Social",
            "Apoyo Psicológico",
            "Intervención en Crisis",
            "Día Mundial para la Prevención del Suicidio"
          ]
    },
    {
        date: "31 JUL",
        author: "Psic. Paola Estrada | Psicóloga en Red Clínica de Psique & Ser",
        title: "Competencias parentales: ¿Qué hace a una mamá, a un papá ser eficientes?",
        excerpt: "Ser un buen padre o madre no es cuestión de suerte, sino de competencias. Descubre cómo fortalecer tu rol parental y criar con confianza.",
        slug: "post-3",
        image: "/Blog/post-3.png",
        "content": [
            {
              "type": "paragraph",
              "text": "Todos hemos aprendido el rol de papá y mamá “a través de nuestros padres”. Sin darnos cuenta (a veces) nos sorprendemos repitiendo ese comportamiento. Me quedo con la acertada frase del buen Napoleón Bonaparte: “la educación de un niño comienza 20 años antes de su nacimiento… con la educación que recibieron sus padres”. Cuando van creciendo, es fácil olvidar la importancia y la necesidad de estos gestos. Las muestras de afecto pueden ser un poderoso método de enseñanza que debería perdurar… El mensaje que se envía al niño es que es amado, apreciado y reconocido tal cual es."
            },
            {
              "type": "quote",
              "text": "Si un niño es mal portado, llora mucho, es exigente o malcriado… ¿Se debe siempre a una carencia de límites o a la falta de una figura de autoridad?"
            },
            {
              "type": "paragraph",
              "text": "En parte es cierto, pero… Cuando los niños “se portan mal” en realidad nos están indicando, con su conducta ciertas “pistas” de qué áreas como papás necesitamos trabajar y poner atención. Detrás de un mal comportamiento, hay una necesidad que debe ser atendida. ¿Cómo descubrirla? Elijan un día para hacer con tu pequeño algo que disfruten juntos… En ese momento sabrás qué espera de ti."
            },
            {
              "type": "paragraph",
              "text": "Para que un niño sea atento, amoroso, empático primero debió recibir buenos tratos, abrazos, ser escuchado, ser merecido, acariciado, sentirse acompañado. Lo que necesita un niño es un adulto que juegue, genuino, disponible, que lo apoye, oriente y guie. No son las experiencias traumáticas en si las que alteran la crianza de los hijos, sino el hecho de no haber tenido la posibilidad de elaborar y resolver el impacto emocional. Competencias o habilidades parentales:"
            },
            {
              "type": "quote",
              "text": "Las competencias parentales se definen como el saber-hacer o “las capacidades prácticas que tienen las madres y los padres para cuidar, proteger y educar a sus hijos, y asegurarles un desarrollo suficientemente sano.”"
            },
            {
              "type": "paragraph",
              "text": "Comprender las capacidades parentales implica generar conversaciones que permitan a los papás hablar de sí mismos, de sus diferencias y experiencias. En el trabajo con papás es muy importante considerar este componente, el cual se refiere la mentalización que no es otra cosa que la capacidad para entender las propias conductas y ajenas considerando que estas se originan a partir de intenciones, deseos y necesidades."
            },
            {
              "type": "paragraph",
              "text": "Al mismo tiempo es indispensable poner en perspectiva actual a los papás, la importancia de reflexionar y percibir su sentir respecto a su rol como padres, así como de los espacios para procurarse el descanso y “recargar batería” a fin de continuar con las demandas que implica el desarrollo de nuestros pequeños. La salud mental y la física van de la mano. Si ambas se cuidan aseguran una vida estable, saludable y plena. Entre los diferentes tipos de descanso parental que necesitan ser considerados y llevados acabo están:"
            },
            {
                "type": "paragraph",
                "text": "<ul><li><strong>Físico:</strong> mejora la salud, la mente y recargar energía (dormir lo necesario, tomar siestas, practicas yoga, estiramientos o masajes).</li><li><strong>Descanso mental:</strong> cuando estamos abrumados por varios pendientes; alejarnos de los dispositivos electrónicos, darse un tiempo fuera del espacio de trabajo para dejar de pensar, caminar unos minutos al aire libre, sentarse por unos minutos en silencio hacer respiraciones profundas).</li><li><strong>Descanso emocional:</strong> espacio para expresar honestamente tus sentimientos y emociones (tiempo a solas para reflexionar, ser sincero cuando actúas con los demás, ser directo al hablar de sus necesidades, no postergarse a sí mismo por querer complacer a los demás).</li><li><strong>Descanso social:</strong> necesario para tener conexiones sociales positivas que revitalicen y te hagan sentir bien (pasar tiempo con personas que te sean agradables, rodearte de personas solidarias y positivas o dejar de socializar por un tiempo).</li></ul>"
            },  
            {
                "type": "paragraph",
                "text": "<strong>¿Qué recursos cuentan los papás para desarrollar sus competencias parentales?</strong><br/><br/><ul><li><strong>Organización doméstica:</strong> Se refieren al establecimiento de reglas, hábitos y responsabilidades que ayuden a mantener un ambiente familiar.</li><li><strong>Disciplina positiva:</strong> eEntendida como método de crianza. Las frases que repetimos a los niños una y otra vez durante la infancia se quedan grabadas en su cerebro como circuitos que se activan una y otra vez durante su adolescencia y adultez. Dicha forma de hablarles se convierte en su voz interior, lo que él piensa de sí mismo, lo que cree que es como persona. Los niños merecen nuestro respeto y cuidado y por eso, debemos ser capaces de decir “no” de una forma positiva que no lastime su autoestima. Educar en positivo ayuda a crecer con una mejor autoestima.</li><li><strong>Apego:</strong> Visto como un proceso relacional. Para mantenerlo, se requiere la disposición por parte del papá y/o mamá para comprender la conducta y emociones de su pequeño. Entre sus beneficios se encuentran: Tendencia a la exploración y al aprendizaje, confianza y autonomía, seguridad y confianza social, mayor capacidad de regulación emocional, mejora patrones de sueño, produce sentimientos de pertenencia.</li><li><strong>Inteligencia emocional:</strong> rEl ejercicio de la parentalidad requiere inteligencia emocional implica la capacidad de reconocer las emociones propias, para poder discriminar en qué registro emocional se está funcionando, así como el poder aceptar las emociones como naturales para canalizar constructivamente mediante comportamientos y discursos que las tranquilicen. A través de la forma en que los papás gestionar sus propios sentimientos y emociones, los niños aprender a entender, validad y expresar las suyas.</li><li><strong>Empatía:</strong> cEs la capacidad de comprender las emociones ajenas y el poder de responder en consonancia con estos sentimientos. Manejo de las propias emociones e impulsos para enviar un mensaje de comprensión y de reconocimiento, de legitimidad del otro. A través de la repetición de momentos de sincronía emocional, el niño desarrollara la sensación de que los demás pueden y quieren compartir sus emociones y sentimientos.</li><li><strong>Abrazos:</strong> Una de las tantas muestras de amor. Estos causan mayores beneficios cuando son dados de manera sorpresiva: sin esperar una fecha especial para ello. Requieren estar en la rutina permanente de cada papá y mamá por sus beneficios operan de modo recíproco: Fortalecen el sistema inmune, relaja los músculos, disminuye la presión arterial, libera la tensión, estimula la oxigenación (rejuvenece), eleva la serotonina favoreciendo tu felicidad, incrementa la confianza.</li></ul>"
            },  
            {
              "type": "paragraph",
              "text": "Papá e hijos conectan emocionalmente de manera más profunda, fortaleciendo su relación. Se impulsan emociones agradables para ambos, fortaleciendo los circuitos neuronales del bienestar. Los niños aprenden a establecer límites físicos y tomar riesgos de manera segura, haciendo incluso que sea menos probable que se lastimen en otros tipos de juegos. Por lo tanto, el juego (rudo o juegos de mesa) es otra expresión que tiene el papá para hacerle saber a su hijo que es amado."
            },
            {
              "type": "paragraph",
              "text": "Por último, una madre o un padre suficientemente buena: no es la que da todo al niño. Es quien identifica las necesidades del niño, quien le sirve de apoyo, es quien da, pero también frustra un poco para que el niño se esfuerce. Aceptarse por no ser la madre o el padre que pensabas que serias y disfrutar de la madre y el padre que eres ahora."
            },
            {
              "type": "paragraph",
              "text": "Los especialistas que atendemos a los padres, no buscamos juzgarlos por la forma en que han llevado su paternidad. Estamos para comprender sus circunstancias, que los ha llevado a ejercer su rol de determinada manera porque a partir de ello, podremos ubicar, juntos, las competencias que han venido desarrollando y que les han brindado muchas satisfacciones en sus hijos y a partir de estas, aprender, desaprender o reaprender otras tantas que los hagan sentirse más satisfechos con su parentalidad."
            }
          ],
          "tags": [
            "Parentalidad",
            "Competencias Parentales",
            "Crianza",
            "Relación Padres E Hijos",
            "Salud Mental",
            "Descanso Parental"
          ]
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const BlogSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const sectionInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <Box ref={sectionRef} sx={{ py: { xs: 6, md: 10 } }}>
            <Container>
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                >
                    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                        <Typography variant="subtitle1" sx={{ color: "primary.main", mb: 1 }}>
                            Blog
                        </Typography>
                        <Typography variant="h3">
                            Lo más nuevo en nuestro Blog
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {blogData.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <BlogCard
                                    date={item.date}
                                    author={item.author}
                                    title={item.title}
                                    excerpt={item.excerpt}
                                    href={`/single-blog/${item.slug}`}
                                    image={item.image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    );
};

export default BlogSection;
