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


export const blogData: BlogItem[] = [
      {
        date: "28 MAR 2025",
        author: "Psique & Ser",
        title: "Entre Sueños y Desvelos: ¿Cómo el sueño afecta tu bienestar?",
        excerpt: "Dormir bien no es un lujo, es una necesidad. Descubre cómo la calidad del sueño impacta tu salud física, mental y emocional, y aprende a mejorar tus hábitos para un descanso reparador.",
        slug: "post-30",
        image: "/Blog/post-30.png",
        content: [
            { type: "paragraph", text: "A lo largo de nuestra vida, el sueño ha formado parte importante de nuestro desarrollo, por lo que es necesario que conozcamos más acerca de las cosas que suceden cuando nosotros dormimos, ya que, al dormir, también realizamos funciones que nos permiten tener un mejor rendimiento, desempeño al momento de despertar y dependiendo de nuestra calidad de sueño, será el impacto que tendrá en nuestro diario vivir. <br/><br/>El sueño es un proceso fisiológico que nos permite restablecer las funciones físicas y mentales para mantener un adecuado estado de salud y adaptarnos a las diversas situaciones que se presentan cada día, en el cual se producen las hormonas responsables de regular los patrones que intervienen con el hambre, la saciedad, el bienestar, el crecimiento y la reproducción.<br/><br/>El dormir tiene un impacto directo en las personas, en su salud mental y del cual pueden generarse diversas enfermedades y padecimientos por no poder llevar acabo esta acción que al pasar del tiempo se ha convertido en algo secundario debido al modo tan apresurado que tenemos de vivir, por diversos factores tanto económicos como sociales. Los seres humanos pasamos más de una tercera parte de nuestra vida durmiendo, lo que demuestra que dormir es una actividad fisiológica indispensable para vivir.<br/><br/>" },
            { type: "quote", text: "El que nosotros podamos dormir de manera adecuada y con las horas que corresponden de acuerdo a nuestra edad, nos permite tener múltiples beneficios como un mejor rendimiento académico y laboral." },
            { type: "paragraph", text: "Incluyendo un bienestar en nuestra salud, ya que el dormir puede favorecer a nuestros procesos cognitivos como lo es la memoria y el aprendizaje, nos puede ayudar en la perdida de peso, mejora no solo nuestro estado de animo, también puede llevarnos a evitar trastornos de ansiedad y depresión, los cuales tienden a generar trastornos del dormir como el insomnio como efectos secundarios de diversos trastornos mentales.<br/><br/>Se ha comprobado que el dormir es un proceso que así como nosotros, también va cambiando y modificándose al pasar del tiempo; por lo que es fundamental conocer con exactitud cuánto tiempo es el ideal dormir de acuerdo a nuestra edad. A continuación, mostraremos una gráfica que nos muestra las horas que cada individuo, de acuerdo a la edad, debe dormir para poder completar todas aquellas funciones que su cerebro necesita para funcionar adecuadamente.<br/><br/>Para poder mejorar nuestra calidad de sueño hay cosas que se pueden realizar de manera propia, a esto de le llama Higiene de Sueño, el cual consiste en crear hábitos o rutinas para antes de dormir, para poder preparar a nuestro cerebro e irlo ayudando a relajarse y disminuir la carga del día a día, lo cual nos permitirá inducir el sueño con mayor facilidad. A continuación, se muestra una imagen con ejemplos de actividades que son parte de la Higiene de Sueño.<br/><br/>" },
            { type: "paragraph", text: "Para poder mejorar nuestra calidad de sueño hay cosas que se pueden realizar de manera propia, a esto de le llama Higiene de Sueño, el cual consiste en crear hábitos o rutinas para antes de dormir, para poder preparar a nuestro cerebro e irlo ayudando a relajarse y disminuir la carga del día a día, lo cual nos permitirá inducir el sueño con mayor facilidad. A continuación, se muestra una imagen con ejemplos de actividades que son parte de la Higiene de Sueño. Existen grandes beneficios que podemos obtener de tener buena calidad de sueño, sin embargo, hay consecuencias graves que podemos ocasionarnos por no dormir las horas que nosotros necesitamos.<br/><br/>Un mal dormir nos puede llevar a padecer diversas enfermedades tales como enfermedades cardiovasculares, diabetes mellitus tipo 2 y síndrome metabólico, diversas comorbilidades psiquiátricas y en algunos casos se ha demostrado que el tener privación de sueño de manera constante puede llevar a incrementar el riesgo a desarrollar cáncer, por lo que es de suma importancia comenzar a identificar nuestros malos hábitos de sueño, corregirlos y tratar aquellos padecimientos que tengamos relacionados al sueño de la mano de un profesional de la salud.<br/><br/>" },
          ],
        tags: ["Salud mental", "Sueño y descanso", "Higiene del sueño", "Bienestar emocional", "Estilo de vida saludable", "Prevención de enfermedades"]        
    },
    {
        date: "28 MAR 2025",
        author: "Psique & Ser",
        title: "Heridas de la infancia desde la teoría del apego.",
        excerpt: "Comprende cómo los estilos de apego en la infancia impactan tus relaciones y bienestar emocional en la adultez. Sanar las heridas emocionales es clave para construir vínculos saludables.",
        slug: "post-29",
        image: "/Blog/post-29.png",
        content: [
            { type: "paragraph", text: "Desde los primeros días de vida nos vinculamos emocionalmente con nuestros cuidadores, principalmente los padres o figuras que los suplen como abuelos, niñeras, tíos. John Bowlby (1958) ha demostrado que la tendencia a establecer esos vínculos es innata. A partir de esta conexión, el niño define un estilo para relacionarse con los demás.<br/><br/>Desde pequeños tenemos una necesidad innata de buscar esa cercanía para recibir amor, cuidados y protección en aquellas personas que se suponen cuidaran y nos amaran profundamente.<br/><br/>" },
            { type: "quote", text: "Necesitamos apegarnos para sobrevivir. Los cuidados que recibimos nos ayudan a transitar por la vida en lo que aprendemos a ser independientes y autosuficientes." },
            { type: "paragraph", text: "Más que determinar si se tiene o no, es más conveniente valorar cómo es mi forma de apegarme o mi estilo de apego, es decir, la forma que aprendí desde niño de responder a la manera de ser amado y cuidado por mis padres.<br/><br/>Si los padres buscaron la manera de dar cuidados consistentes al bebé, se esforzaron por demostrarle su amor, si estuvieron atentos a sus necesidades, el bebé -gradualmente- aprenderá que el amor no duele, que puede confiar en esas personas que lo están cuidando, pero sobre todo que puede confiar en que él es una persona digna y merece ser amada.<br/><br/>Lo anterior describe en parte la teoría del apego. Dicha teoría del apego establece 4 formas en que las personas aprenden a apegarse dependiendo cómo hayan sido cuidados, educados, criados durante la infancia: apego seguro, ansioso, evitativo o desorganizado<br/><br/>El niño desarrolla un apego seguro cuando la figura de apego está disponible para él, le brindan cariño y al mismo tiempo le permite la exploración del mundo que lo rodea bajo la mirada atenta.<br/><br/>" },
            { type: "paragraph", text: "Para un apego ansioso, las personas que cuidan del bebé por momentos muestran poco interés por él y en otros, actúan exageradamente y sobreprotegiéndolo. El niño vive en constante incertidumbre sobre si sus padres o cuidadores estarán disponibles para él.<br/><br/>Con respecto al apego evitativo, los padres o cuidadores suelen reaccionar de una forma que el niño no necesita porque no están disponibles o no están comprometidos con su rol parental. A lo largo de su crecimiento, son niños muy independientes, pero presentan dificultades para gestionar sus emociones y establecer lazos de confianza con los demás. <br/><br/>El apego desorganizado se desarrolla cuando el niño recibe constantemente respuestas repulsivas o agresivas. Se da en familias donde hay maltrato, abusos, padres con adicciones o con psicopatologías. Los niños aprenden que es mejor no mostrar sus emociones porque no tienen seguridad de obtener respuestas de sus padres o cuidadores. <br/><br/>¿Cuál es la utilidad de conocer y comprender las relaciones o el tipo de apego? Porque pueden influir en cómo construimos relaciones, en la personalidad, en el bienestar emocional y la forma en que la persona se ve a sí misma. Los patrones que se desarrollan en la infancia tienden a repetirse en la adultez. <br/><br/>" },
            { type: "paragraph", text: "El tipo de apego que se desarrolla en la infancia puede influir en la aparición de heridas emocionales. Dichas heridas pueden ser causadas por experiencias dolorosas, de abuso, pérdidas significativas, de relaciones disfuncionales o eventos estresantes.<br/><br/>Existen cinco tipos de heridas emocionales. Cada una de ellas tiene sus propias características y podemos tener una o varias dependiendo de las experiencias y sucesos que ha vivido cada persona.<br/><br/><ul><li>Herida de rechazo. Es una persona que procura pasar desapercibida, se anula.</li><li>Factores ambientales y sociales como inseguridad, desastres, violencia, etc.</li><li>Herida de abandono. Tiene miedo a la soledad, hace lo posible por llamar la atención y ser amado.</li><li>Herida de humillación. Es una persona que de forma inconsciente buscar el dolor y la humillación,</li><li>Herida de traición. Como no tolera la traición, hace lo posible por ser responsable y fuerte. </li><li>Herida de injusticia. Su percepción es que se le aprecie más por lo que hace que por lo que es.</li></ul><br/><br/>" },
            { type: "paragraph", text: "Debido a que lo que aprendemos de nuestros padres en nuestra niñez es lo que llevamos a nuestras relaciones en la vida adulta.<br/><br/>Los apegos que desarrollamos son patrones con los que vamos creciendo con ellos. Por ejemplo, si yo crecí en un hogar permisivo donde todo se vale, todo se permite, eso lo traslado a mi relación; si, por el contrario, me desarrollo en un ambiente restrictivo con límites, entonces idealizo que la relación de pareja es así: exigiendo, no negociando”.<br/><br/>Las consecuencias de no resolver las heridas emocionales de la niñez son varias, y pueden afectar posteriormente nuestras relaciones sociales, al grado de evitar la cercanía o no confiar en los demás, reprimir o exagerar nuestras emociones, sentir ansiedad por abandono, dar en exceso, ser codependientes, entre otros efectos. <br/><br/>¿Cómo podemos identificar, conectar, comprender y trabajar las heridas emocionales? Podemos preguntarnos ¿en qué momento de nuestra infancia nos sentimos de terminada manera?, ¿qué nos hubiera gustado recibir, ¿qué necesito darme o empezar a brindarme? La intención es redefinir nuestras heridas, que nos permita iniciar el proceso de autodescubrimiento, reestructurar el amor propio y construir relaciones saludables. <br/><br/>Si el proceso se torna muy intenso por recordar el pasado relacional, el acompañamiento de un especialista es la mejor opción. La terapia no es solo para tratar heridas, también sirve para no herir a otros. Sanar para aprender para crecer para seguir. <br/><br/>" },
          ],
        tags: ["Apego infantil", "Heridas emocionales", "Psicología", "Relaciones afectivas", "Salud mental", "Autoconocimiento"]        
    },
    {
        date: "31 OCT 2023",
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
        date: "31 AGO 2023",
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
        date: "31 JUL 2023",
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
    {
        date: "31 MAY 2023",
        author: "Psic. Teresita Quintana | Psicóloga en Red Clínica de Psique & Ser",
        title: "La ruptura del lazo social como consecuencia de la posmodernidad",
        excerpt: "En la era digital, ¿nos estamos desconectando más que nunca? Descubre cómo la posmodernidad impacta nuestras relaciones y lazos sociales",
        slug: "post-4",
        image: "/Blog/post-4.png",
        "content": [
            {
              "type": "quote",
              "text": "\"En este mundo de la positividad solo se admiten cosas que pueden consumirse\" — Han, <em>2012, p. 27</em>"
            },
            {
              "type": "paragraph",
              "text": "¿Por qué preocupa tanto si nos vemos bien en la selfie que nos tomamos? ¿Por qué es tan importante publicar una foto o una historia en redes sociales de lo que se hizo en el día? ¿Por qué se nos pueden pasar horas de la vida viendo tik toks? ¿Por qué cuando no se tiene el celular en la mano, se siente como si faltara algo? ¿Por qué si hoy en día se cuentan con más vías de comunicación, resulta tan difícil poder decir lo que se siente? ¿Por qué cuando se llega a un lugar y se saluda, la mayoría de la gente ya no responde? ¿Por qué se lleva por bandera la ansiedad al interactuar con los otros? ¿Por qué si hoy en día se quiere ligar, es más factible pedir las redes sociales en lugar del número telefónico? ¿Por qué si se tiene el internet como herramienta, resulta tan tedioso investigar o estudiar algo? ¿Por qué cuesta tanto trabajo tener constancia en una actividad? ¿Por qué si ahora existe el home office, la gente se siente más aislada que tranquila? ¿Por qué si pareciera que tenemos todo para poder, aún así, no podemos? …"
            },
            {
              "type": "paragraph",
              "text": "La historia de la humanidad se divide en épocas. Las épocas son periodos de tiempo que marcan un antes y un después en la sociedad. Con la masificación de la tecnología, con los aparatos inteligentes, con las redes de internet gratuitas a lo largo del país y del mundo, con la inteligencia artificial, con las redes sociales como la nueva forma de comunicación y con esta inmediatez que hoy en día existe para creer que se puede “tener o hacer todo” de manera fácil y rápida, se dio inicio a la posmodernidad."
            },
            {
              "type": "paragraph",
              "text": "La posmodernidad entendida en un aproximado desde 1970 a la fecha, es un movimiento social y cultural que se caracteriza por la fantasía de creer que hoy en día, nada falta. Esto a su vez, ha generado nuevos lazos sociales, nuevas enfermedades y nuevas maneras de pensar y de comunicarnos."
            },
            {
              "type": "quote",
              "text": "Las personas se han vuelto objetos consumibles."
            },
            {
              "type": "paragraph",
              "text": "Si el otro cumple con las expectativas de aquello que se cree que se busca, entonces puede despertar el interés y el deseo en los demás, pero si en algún momento falla, se le desecha con su cualidad de ser “reemplazable”. En la actualidad, la valía del ser humano radica en aquello que tiene para ofrecer. Se elige a aquel que se cree puede proveer de más, de más experiencias, de más economía, de más consejos, de más diversión, de más amistad, de más amor."
            },
            {
              "type": "paragraph",
              "text": "Entonces, ¿por qué si ahora existen los lenguajes del amor, aún así hay tantos problemas de comunicación en la pareja?, ¿Por qué si existen los fármacos para controlar los niveles de ansiedad y depresión, aún así la gente se sigue sintiendo mal? ¿Por qué habiendo ya tantas carreras por estudiar, tantas actividades artísticas a desarrollar o tantos estilos de vida, aún así, no se sabe qué elegir? ¿Por qué si estamos en la época de la aceptación de todo aquello que rodea la vida, la idea de pensarse en un lugar lleno de gente y sentirse juzgado, genera fobia? ¿Por qué si hoy en día “está bien estar mal”, “está bien no poder con todo” “está bien ser egoísta y ponerte como prioridad”, “está bien ver por tu salud mental y cortar lazos”, la soledad se siente más que nunca? La subjetividad se ha ido difuminando poco a poco. La infancia se está perdiendo, los niños de la posmodernidad saben más de tecnología que de cuentos fantasiosos o de superhéroes. Las mujeres están cansadas de los estereotipos pero ahora tienen que poder ser todo a la vez: mamás, bloggers y emprendedoras independientes que van al gimnasio. Los hombres están adaptándose a la igualdad de género pero ahora no saben cómo hablarle a las mujeres sin tener el temor de hacerlas sentir acosadas o invalidadas."
            },
            {
              "type": "paragraph",
              "text": "El escrito tiene por objetivo plantear y reflexionar las nuevas maneras de relacionarnos como sociedad y con aquellos que son allegados a nosotros, de dónde vienen estos nuevos lazos sociales y cuáles son sus funciones y preguntarnos, <strong>¿qué es lo que se ha perdido a partir de esto?, ¿cuál es hoy en día, nuestro lugar en el mundo que habitamos?</strong>"
            }
          ],
          "tags": [
            "Posmodernidad",
            "Redes Sociales",
            "Comunicación Digital",
            "Consumismo",
            "Relaciones Sociales",
            "Identidad Social"
          ]
    },
    {
        date: "28 ABR 2023",
        author: "Psic. Paola Luna | Psicóloga en Red Clínica de Psique & Ser",
        title: "Disciplina positiva: un método de crianza para niños",
        excerpt: "Educar con amor y respeto es posible. Descubre cómo la disciplina positiva puede transformar la crianza de tus hijos.",
        slug: "post-5",
        image: "/Blog/post-5.png",
        "content": [
            {
              "type": "paragraph",
              "text": "<strong>¿Quiénes son los fundadores de la disciplina positiva?</strong><br/><br/>En 1920, Alfred Adler, médico y psicoterapeuta austríaco, introdujo por primera vez la idea de la educación para madres y padres. Abogó por un trato respetuoso hacia la infancia y también argumentó que los niños y las niñas que no tenían límites o estaban sobre protegidos podrían tener problemas sociales y de comportamiento. Adler y su discípulo Rudolf Dreikurs apostaron por un enfoque amable y firme en la educación y por una crianza basada en el respeto mutuo. A esta nueva manera de entender la educación le llamaron crianza democrática. A finales de los años 30, sus teorías llegaron a los Estados Unidos de la mano de Rudolf Dreikurs.<br/><br/>En 1988, Jane Nelsen y Lynn Lott, tras un profundo estudio de la psicología adleriana, adaptaron sus conocimientos y crearon lo que hoy en día conocemos como Disciplina Positiva. A partir de ese momento, empezaron a enseñar esta metodología educativa en clases experimentales para madres y padres así como en el aula."
            },
            {
                "type": "paragraph",
                "text": "<strong>¿Qué es la disciplina positiva?</strong><br/><br/><ul><li>No es ni permisivo ni represivo.</li><li>Primero se establece una conexión antes de la corrección, porque el objetivo principal es desarrollar el sentido de pertenencia e importancia.</li><li>No se centra en los castigos, sino en aportar soluciones.</li><li>El tipo de motivación es intrínseca.</li><li>Validas sus emociones.</li><li>Los haces confiar en sus capacidades.</li></ul>"
            },
            {
              "type": "quote",
              "text": "Hay normas, consecuencias y respeto"
            },
            {
                "type": "paragraph",
                "text": "<strong>Normas:</strong>Debemos enseñarle previamente que significa la norma y para qué hay que aplicarla. El niño se siente involucrado por lo que incrementa su sentido de pertenencia. Si le permito que sea el quien aplique esas normas de forma autónoma, le estoy transmitiendo mi confianza, lo que incrementa su sentido de importancia. Comienza a asumir responsabilidades.<br/><br/><strong>Respeto:</strong>Educar con miedo a un niño no es sinónimo de inculcar respeto y valores, probablemente llegará a la edad adulta y exigirá lo mismo o infundirá temor como lo hicieron con él."
            },
            {
                "type": "paragraph",
                "text": "<strong>Consecuencias:</strong>Resultado de nuestros actos. Evalúa nuestra conducta. No significa un castigo.<br/><br/><ul><li>Autoritarismo = menos respeto para el niño Permisividad = menos respeto para mi. Es equilibrar la balanza entre autoritarismo y permisividad tratar con cariño y dignidad.</li><li>Para que los limites sean eficaces se necesita: ser firmes y concisos: sin gritos con firmeza y sin entrar en explicaciones.</li><li>Ser constantes: aunque estés cansado o estresado, los limites deben ser eficaces y claros cada día.</li><li>Las acciones tienen consecuencias se pierde la credibilidad al no cumplir los límites, no tienen consecuencias.</li><li>Ser ejemplo: enseñar a través de nuestro comportamiento, ellos no aprenden por lo que decimos, sino por lo que hacemos.</li><li>Dedicarles el tiempo necesario: cariño y límites deben ir de la mano, jugar con ellos al menos 15 minutos al día.</li></ul>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Tipos de consecuencias:</strong>Dos tipos de consecuencias las lógicas y naturales. En las lógicas interviene un adulto y en las naturales permite aprender de los errores. Condiciones de las consecuencias lógicas.<br/><br/><ul><li>Aquí y ahora, no lo que el niño(a) hizo ayer o la semana pasada.</li><li>Su aplicación debe hacerse de manera tranquila, respetuosa y sin causar dolor, vergüenza o humillación al niño(a). </li><li>Revelación anticipada. Es fundamental que en la medida de lo posible, anticipes a tus hijo(a)s las cosas que sucederán cuando se saltan las reglas.</li></ul>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Estilos educativos:</strong><br/><br/><ul><li>Autoritario </li><li>Negligente</li><li>Democrático</li><li>Permisivo</li></ul>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Diferencia entre motivar y elogiar.</strong><br/><br/>Motivación es a partir de los 4 años, debido a que existe un nivel de maduración, Existe una conexión, Predica con el ejemplo, Destacar las cualidades del niñx,Hacerle entender el proceso de aprendizaje, El error es una prueba de aprendizaje, la autoestima se desarrolla, reflexiona sobre su comportamiento. Elogiar es controlar. Puede ser positivo como negativo."
            },
            {
                "type": "paragraph",
                "text": "<strong>¿Qué hay detrás del mal comportamiento?</strong><br/><br/>La cima del iceberg, lo que es visible el mal comportamiento y lo no visible que hay detrás de este comportamiento. ¿Por qué no debemos utilizar el muy bien como muletilla?<br/><br/><ul><li>Se vuelven adictos a la aprovacion. </li><li>Actuan movidos por el premio.</li><li>No permitimos que reflexionen ante sus actos.</li></ul>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Consecuencias del castigo:</strong><br/><br/><ul><li>Dificulta la comunicación </li><li>Deteriora el autoestima</li><li>Fomenta el conformismo y la agresividad</li><li>Genera inseguridad</li><li>Dificulta el autoconocimiento y respeto por uno mismo.</li><li>Desarrolla comportamientos sumisos y víctimas.</li><li>El niño o niña actúa por temor a las represalias </li><li>Las investigaciones en psicología han demostrado que el castigo actúa sobre el comportamiento inmediato pero no modifica la conducta a largo plazo.</li></ul>"
            },
            {
                "type": "quote",
                "text": "4 rs del castigo: Resentimiento, revancha, rebeldía y retraimiento"
            },
            {
                "type": "paragraph",
                "text": "Corregir dando calidez y estructura. La calidez se aprecia con el lado derecho del cerebro, este es el lado del afecto y la estructura con el lado izquierdo, fomentar las normas, escuchar, explicar razones claramente.<br/><br/><ul><li>Es mejor conectar con el niño o niña.</li><li>Primero se validan las emociones</li><li>Ten en cuenta el contacto físico, tono de voz, expresión facial, empatía, hacer pausas </li><li>Para buscar soluciones utiliza palabras, planificaciones, explicaciones lógicas</li></ul>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Comportamientos que como adultos debemos evitar:</strong><br/><br/><ul><li>Golpearlo</li><li>Gritarle</li><li>Mandarlo a otro lado</li><li>Criticarlo</li><li>Decirle que ya no lo quieres</li><li>Decirle que es un niño malo</li><li>Amenazarlo</li><li>Humillarlo</li></ul>"
            },
          ],
          "tags": [
            "Disciplina Positiva",
            "Alfred Adler",
            "Educación Infantil",
            "Estilos Educativos",
            "Consecuencias Lógicas",
            "Comunicación Respetuosa"
          ]
    },
    {
        date: "31 MAR 2023",
        author: "Psic. Liliana Guzmán | Psicóloga en Red Clínica de Psique & Ser",
        title: "La obesidad, como un tejido entre la alimentación y los afecto",
        excerpt: "La obesidad va más allá de la alimentación: descubre su conexión con las emociones y el afecto.",
        slug: "post-6",
        image: "/Blog/post-6.png",
        "content": [
            {
              "type": "quote",
              "text": "\"Lo que se presenta en el cuerpo como un aumento del tejido adiposo, es decir, una alteración somática, es, en el alma, un drama inconsciente\" — Chiozza, <em>1995</em>"
            },
            {
              "type": "paragraph",
              "text": "Con motivo del día mundial contra la obesidad que tuvo lugar, el pasado 4 de marzo, y entendiendo que México ocupa el primer lugar a nivel mundial en obesidad infantil y el segundo lugar en población adulta. Psique & Ser se suma a la campaña de concientización bajo el lema: 'Cambiando las perspectivas: hablemos sobre la obesidad.'<br/><br/>Como bien sabemos, la obesidad es una enfermedad crónica que se caracteriza por el aumento de grasa corporal, que es asociada a un riesgo latente para la salud. Además, que la causa principal obedece a un desequilibrio energético entre las calorías que se consumen y las que se gastan. Sin embargo, si alguna vez has intentado bajar de peso, te habrás dado cuenta que para resolver la ecuación y bajar de peso, hay muchas otras variables a despejar. De lo contrario, su tratamiento sería mucho más sencillo.<br/><br/>En primer lugar, la obesidad está directamente vinculada al acto de comer, y el alimentarnos, va mucho más allá de solo ser un acto. Comer no solo obedece a una necesidad imprescindible para poder sobrevivir, sino que también es un medio que nos convoca al placer y al gozo.<br/><br/>Y ¿Por qué gozamos cuándo comemos? Porque el acto de comer se inicia en la boca, y la boca es un órgano multitareas: Según Freud en su teoría de desarrollo psicosexual, la boca es una zona erógena. Entonces, la boca no solo da lugar a la digestión, la boca es un órgano que nos permite sentir placer y que, además, interviene en nuestras relaciones amorosas, porque la boca se usa para besar y también se usa para…hablar. Y para lo que se te ocurra; para eso también.<br/><br/>"
            },
            {
                "type": "quote",
                "text": "Por otro lado, el comer se abraza con el deseo. Si bien es cierto que todos comemos, no todos comemos lo mismo. Cada uno come lo que le gusta, comemos lo que se nos antoja y no necesariamente lo que nos nutre. ¿Te suena?"
            },
            {
                "type": "paragraph",
                "text": "Y si le seguimos, te tengo otra noticia: La comida nunca es solo comida, es también un vehículo por el cual cuando éramos muy pequeños, fuimos dotados de nuestra primera despensa afectiva. Como recién nacidos, al ser amamantados, más que nutrientes, obtenemos sensaciones de sentirnos amados, cuidados y protegidos (en el mejor de los casos). Esa despensa de afectos, aquel acercamiento, dejará una huella como sello personal que nos acompañará toda la vida y fundará nuestra relación con la comida. Posteriormente, utilizaremos la comida no solo para cubrir una necesidad biológica sino para evocar nuestros deseos vitales, deseos que se inscriben en nuestro mundo interno, en nuestro psiquismo, en nuestra subjetividad. Alimentarnos entonces, será una forma de saciar y paliar nuestras necesidades psíquicas más profundas, en una suerte de compensar, con falta o con excesos de comida.<br/><br/>Entonces, si toda la cuestión para bajar de peso se sostuviera en solo saber cómo, cuánto, qué comer y qué no comer. Sería mucho más fácil y nadie tendría obesidad. Sin embargo, la obesidad es una enfermedad multifactorial, compleja, que se anuda y se desanuda como un tejido entre la alimentación y los afectos. Entre lo psíquico y lo somático. Por ende, su abordaje implica un seguimiento multidisciplinario."
            },
          ],
          "tags": [
            "Obesidad",
            "Salud Mental",
            "Psicología",
            "Relación Con La Comida",
            "Desarrollo Psicosexual",
            "Despensa Afectiva"
          ]
    },
    {
        date: "28 FEB 2023",
        author: "Psic. Ximena Mendoza | Fundadora de Psique & Ser",
        title: "Relaciones sanas en la adolescencia: Amor y amistad",
        excerpt: "Amor y amistad en la adolescencia: claves para construir relaciones sanas y significativas.",
        slug: "post-7",
        image: "/Blog/post-7.png",
        "content": [
            {
              "type": "paragraph",
              "text": "La amistad es un valor universal sin el cual una persona difícilmente podrá sobrevivir. El adolescente, necesita a alguien de su misma edad para compartir la pesada carga de todas las dudas que le surgen constantemente. Ha de ser alguien que él vea como un igual, con sus mismos problemas e inquietudes.<br/><br/>La amistad es más intensa en la adolescencia que en otra época de la vida. En la adolescencia, los amigos son más íntimos y se apoyan más que a edades anteriores; también exigen una mayor lealtad, compiten menos entre sí y comparten más con sus amigos que los niños. Estos cambios se deben en parte a su mayor desarrollo cognitivo.<br/><br/>El amor es uno de los sentimiento más universales y permanentes en el ser humano. Está presente en todas las edades, razas, culturas y países. Con este descubrimos el amor incondicional de la familia y poco a poco vamos sintiendo y experimentando otros tipos de amor a lo largo de la vida. La adolescencia tiene un papel muy importante en el amor, ya que es cuando hace presencia, por primera vez, el sentimiento hacia otra persona de manera más intensa como pareja.<br/><br/>Las hormonas, que tanta revolución y conflicto provocan en esta edad, a nivel conductual, van a hacer sentir las primeras mariposas en el estómago a nivel emocional, es decir empiezan a descubrir su primer enamoramiento que no es lo mismo que el amor.<br/><br/>"
            },
            {
                "type": "quote",
                "text": "El enamoramiento es la primera etapa del amor. Es muy intenso y pasional."
            },
            {
                "type": "paragraph",
                "text": "Tanto es así que, en el momento que se vive, parece que nunca va a poder acabar. Pero es una etapa que acabará con el amor o el desamor. No se puede estar eternamente viviendo en la fase del enamoramiento, sino que cuando este enamoramiento se va estabilizando y madurando acaba cogiendo una forma más serena y duradera convirtiéndose en Amor.<br/><br/>En la etapa de la adolescencia es cuando se empieza a experimentar el enamoramiento y es más difícil que llegue a convertirse en un amor verdadero. Se suelen vivir muchos enamoramientos en breves espacios de tiempo, incluso varios enamoramientos a la vez."
            },
          ],
          "tags": [
            "Amistad",
            "Adolescencia",
            "Desarrollo Cognitivo",
            "Amor",
            "Enamoramiento",
            "Emociones Adolescentes"
          ]
    },
    {
        date: "31 ENE 2023",
        author: "Psic. Alan Torres V | Fundador y Director de Psique & Ser",
        title: "Rituales de inicio de año y sus efectos en nuestra psique",
        excerpt: "Más que una tradición, los rituales de inicio de año impactan nuestra mente y emociones. Descubre su poder psicológico.",
        slug: "post-8",
        image: "/Blog/post-8.png",
        "content": [
            {
                "type": "quote",
                "text": "..el hombre (5) “Privado de su anclaje trascendente inventará la religión, la filosofía, la política, con el objeto de recuperar la seguridad perdida. Gusdorf, George. “Mito y Metafísica - Nova Argentina 1960."
            },
            {
              "type": "paragraph",
              "text": "Cuántas veces no hemos escuchado o aplicado la frase “Año nuevo, vida nueva”. Y es que dicha frase, y muchas otras, devienen de nuestra naturaleza humana, ya que tendemos a plantearnos ciclos en las actividades o rutinas que establecemos. Y cómo no hacerlo si estamos inmersos en un ciclo de vida que tiene un principio y un final. Para muchos, los ciclos fungen como un corte proveniente del interior que nos orilla a detener, pensar y tomar decisiones para mejorar o perfeccionar nuestra estabilidad y actuar en un futuro. Para otros, es un corte externo-obligado con la intención de encontrar elementos ajenos a uno que nos ayuden a asegurar que las decisiones fueron acertadas o fortuitas. Podemos resumir esto como: personas que crean y forjan su propio año, y personas que depositan en elementos o rituales externos sus acciones venideras. Se plasma en dos polos para que el tema de los rituales de inicio de año y sus efectos en nuestra psique tenga un mayor impacto y sea más didáctico. No con esto eximo que existan sujetos que oscilan entre ambas o más posturas.<br/><br/>Para poder abordar este tema tan interesante, haremos uso del interaccionismo simbólico; corriente sociológica que centra su interés en el mundo cotidiano de significados, ya que actuamos sobre estas bases para darle un sentido a los objetos y situaciones que nos rodean, y a las que nos exponemos constantemente. A partir de estos significados de las cosas, deriva o surge la interacción social. Sin interacción no puede haber vida social, por ende es el proceso que nos va a posibilitar construir significados sobre el mundo exterior."
            },
            {
                "type": "quote",
                "text": "Con base en este postulado, podemos entender que los rituales de inicio de año como actos que tienen una connotación de significados subjetivos, cada uno le da un valor o representación que nos permiten aligerar la angustia de dejar en manos de “la vida, divinidad o elemento totémico”, la responsabilidad de nuestra propia existencia y lo inesperado del año entrante."
            },
            {
                "type": "paragraph",
                "text": "Para poder continuar, pensemos en los rituales de inicio de año más habituales en la población mexicana:<br/><br/><ul><li>Comer 12 uvas en la campanada de Año Nuevo, cada uva representa un propósito a cumplir o un deseo. </li><li>La noche de Año Nuevo se utiliza ropa interior de un color específico. Los más comunes son amarillo = dinero, rojo = amor y blanco = paz. </li><li>Salir con una maleta a dar la vuelta para atraer viajes. </li><li>Aventar lentejas para la abundancia. </li><li>Prender veladoras para atraer la fortuna.  </li><li>Hacer aseo para sacar las malas vibras.  </li><li>Aventar cubetas de agua para limpiar las vibras. </li><li>Meterse debajo de la mesa para conseguir pareja.</li></ul><br/><br/>Los rituales entonces, son estrategias simbólicas que nos ayudan a regularnos como personas, familias y culturas; ya que nos cohesionan para solucionar problemas. De igual modo, a reforzar el sentido de existencia y a entender la relación que tenemos no solo con nosotros mismos, sino también con nuestros pares y con el mundo externo en el que interactuamos.<br/><br/>Con lo dicho hasta ahora, nada tiene que ver la hipótesis de si los rituales son buenos o malos para nuestra Psique. El tema de hoy no viene a destruir los rituales, sino a conocer los efectos que tiene en nuestra mente, y cómo estos tienen un rol importante y subjetivo en nuestras vidas.<br/><br/>Los rituales de inicio de año nos ayudan a querer anticiparnos, a atraer y a tratar de darle un significado a todo aquello desconocido que conlleva el cambio lógico temporal. Si nos hemos percatado, una palabra que ha estado presente con lo que estamos hablando hoy, es la “atracción”. La RAE define atracción como aquella fuerza o capacidad para atraer. Esto hace sentido, ya que hoy en día, y de manera simplista, la psicología está asociada a vibraciones, atracciones y energías. Es por esto que el tema que estamos analizando tiene mucha fuerza, debido a que socialmente los rituales se ven como energías que nos ayuden a que lo incomprensible e incognoscible pueda ser tramitado y esto genera tranquilidad.Sin embargo, la psicología no va en ese sentido, no es algo mágico, y los rituales no deben cubrir en su totalidad la responsabilidad y el cuidado que debemos tener con nuestra salud mental.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "<strong>¿Debo tener rituales de inicio de año en mi vida?</strong><br/><br/>La respuesta a esta pregunta podría estar orientada al sí, ya que es parte inherente a la cultura y al ser humano. Promueve valores, interacciones, empatía, reconocimiento del otro, y en muchos casos convivencia. Los rituales cumplen con brindar un espacio de seguridad y crear defensas que refuerzan el equilibrio psíquico, que sea capaz de protegernos frente a amenazas tanto externas como internas que nos lleven a la desorganización, confusión o angustia y que nos lleven a una inestabilidad máxima. Pero como todo sí, debe existir un límite, y este radica en que el sujeto no puede depositar su existencia en un rito por el riesgo latente que se presenta. El dejar mi responsabilidad de autocuidado a un elemento externo, me separa de lo que me corresponde a mí hacer e instalarme en vivir en un pensamiento mágico que todos los rituales me van a salvaguardar o a traer mejores resultados sin tener que involucrarme por ello. Incluso llevado a un polo radical, podríamos hablar de una conducta obsesiva compulsiva, o bien de un delirio que más que aligerar la angustia, detonará e impactará en mi salud mental."
            },
          ],
          "tags": [
            "Rituales De Inicio De Año",
            "Interaccionismo Simbólico",
            "Significados Subjetivos",
            "Psicología Cultural",
            "Cambio Temporal",
            "Efectos En La Psique"
          ]
    },
    {
        date: "11 AGO 2022",
        author: "Psique & Ser",
        title: "¿Qué enfoque psicológico es el adecuado para mi para tomar terapia?",
        excerpt: "¿Quieres empezar terapia pero no sabes qué enfoque elegir? Descubre cuál se adapta mejor a ti y a tus necesidades.",
        slug: "post-9",
        image: "/Blog/post-9.png",
        "content": [
            {
              "type": "paragraph",
              "text": "Para responder a este cuestionamiento común en los pacientes, es importante que sepas que en Psique & Ser nos alineamos a la idea plasmada por Gustav Jung que dice"
            },
            {
                "type": "quote",
                "text": "Conozca todas las teorías. Domine todas las técnicas, pero al tocar un alma humana sea apenas otra alma humana - Nova Argentina 1960."
            },
            {
                "type": "paragraph",
                "text": "Con base en esto, queremos puntualizar que más allá del enfoque clínico que practica cada uno de nuestros psicólogos, sabemos que trabajamos con seres pensantes, que sienten y tienen una intersubjetividad que debe ser tratada caso por caso. Explicaremos los 3 cortes clínicos más comunes en la práctica clínica y que se empalman con los enfoques que manejamos en Psique & Ser.<br/><br/>Trataremos de ser lo más específico posible para poder aclarar sus dudas respecto al iniciar un proceso terapéutico y qué método será el más efectivo para abordar mi motivo de consulta."
            },
            {
                "type": "paragraph",
                "text": "<strong>Terapia Cognitivo-Conductual.</strong><br/><br/><strong>Principales autores:</strong>La terapia cognitivo conductual se desprende del pensamiento de Aaron Beck y Albert Ellis. Este último, desarrolló la Terapia Racional Emotiva Conductual que está asociada al abordaje clínico del modelo cognitivo conductual.<br/><br/><strong>Características y métodos:</strong>Su tratamiento se centra en el análisis de los procesos cognitivos desadaptados y en la facilitación de experiencias de aprendizaje que pueden modificar las cogniciones y patrones de conducta. Examina tanto la respuesta emocional como la conducta. Es posible cambiar el modo de pensar modificando la conducta y a la inversa. Las personas a lo largo de su desarrollo van formando pensamientos irracionales y desadaptativos que impactan en sus emociones y su actuar. Su método está orientado a una observación directa de la conducta, elaboración de registros, exposición de sus pensamientos y técnica de ratificación.<br/><br/><strong>Edad y duración:</strong>La terapia cognitivo conductual abarca desde la infancia hasta la adultez tardía. Su duración del tratamiento va en función a la problemática manifestada, pero por lo general oscila entre 6 meses y 1 año, con una constancia de una vez a la semana y con una duración aproximada de 60 minutos por sesión.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Psicoterapia psicoanalítica</strong><br/><br/><strong>Principales autores:</strong>El psicoanálisis, o igual conocida como la psicología profunda, surge a partir del pensar y la práctica clínica de Sigmund Freud en el Siglo XIX.<br/><br/><strong>Características y métodos: </strong>El psicoanálisis escinde al sujeto en tres instancias: yo, ello y superyó. A partir de ello busca evaluar el estado del yo, sus mecanismos de defensa y la adaptación de lo anterior a un mundo interno y externo. Considera que hay factores intrapsíquicos que son la causa de la conducta manifiesta, motivos, deseos y conflictos. Explora los procesos y contenidos inconscientes, mismos que salen de nuestro control y nuestra consciencia. Su tratamiento está orientado en pruebas proyectivas, interpretación de los sueños, catarsis y la asociación libre. Esta última es la técnica más importante del psicoanálisis, ya que se piensa que el inconsciente se manifiesta por medio de la palabra.<br/><br/><strong>Edad y duración: </strong>El psicoanálisis puede abordar al sujeto desde la infancia hasta la adultez tardía. Por lo general, un tratamiento psicoanalítico oscila entre 1 y 3 años con una constancia de al menos 1 vez a la semana con una duración de 50 minutos por sesión. Todo esto va en función de la problemática abordada.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Humanismo</strong><br/><br/><strong>Principales autores:</strong>El pensar humanista surge a partir de los postulados por Abraham Maslow y Carl Rogers. Es común ubicar el humanismo a partir de la pirámide de Maslow, quién da valor a priorizar una serie de necesidades que están intrínsecas en nuestro desarrollo para poder llegar a un proceso de autorrealización.<br/><br/><strong>Características y métodos: </strong>La perspectiva humanista ubica al sujeto como seres con experiencias subjetivas, que van construyendo significados de las experiencias de vida y se centra en la comprensión de la persona más que en su conducta. Es un modelo que se centra en la persona para lograr un mejor ajuste personal. Ubica al sujeto en el aquí y el ahora. Evalúa no lo que la persona es, sino que tiene un potencial para llegar a ser “ser”. Se interesa por lo que el sujeto piensa de su entorno y cómo se adapta. Su técnica está enfocada en entrevistas abiertas, análisis del contenido de su discurso, escalas de estimación y técnicas de clasificación.<br/><br/><strong>Edad y duración: </strong>Esta perspectiva está más orientada a adolescentes y adultos. Por lo general, su tratamiento oscila entre 6 meses y 1 año con una constancia de 1 vez a la semana. Con una duración aproximada de 60 minutos por sesión. Todo esto va en función de la problemática abordada.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "<strong>Consideraciones generales.</strong><br/><br/>Es importante subrayar que en Psique & Ser abordamos los motivos de consulta desde una línea multidisciplinaria. ¿Qué quiere decir esto? Nos referimos a que durante tu proceso mantenemos una visión holística y de ser necesario direccionar con otros especialistas que favorezcan en el desarrollo y la salud mental de los pacientes. Una intervención multidisciplinaria involucra psiquiatras, médicos, médicos especialistas, neurólogos, nutriólogos, etc.…siempre y cuando el caso lo requiera.<br/><br/>Recuerda que iniciar un proceso para el cuidado de tu salud mental no es magia, no elimina la sintomatología en una sola sesión. Es común que al terminar tu primera sesión sientas una mejora, sin embargo, es conocida como una “falsa mejora” porque la catarsis solo alivia el pesar, pero no lo quita. Al pensarlo como un proceso, es porque dentro del mismo habrá avances, pero también retrocesos."
            },
          ],
          "tags": [
            "Terapia Cognitivo Conductual",
            "Psicoanálisis",
            "Humanismo",
            "Enfoques Terapéuticos",
            "Abordaje Clínico",
            "Intersubjetividad"
          ]
    },
    {
        date: "10 JUN 2022",
        author: "Psique & Ser",
        title: "La normalización del estrés",
        excerpt: "¿El estrés se ha convertido en tu día a día? Descubre por qué normalizarlo es peligroso y cómo gestionarlo mejor.",
        slug: "post-10",
        image: "/Blog/post-10.png",
        "content": [
            {
                "type": "paragraph",
                "text": "<strong>¿Qué es mejor, afrontar el estrés o manejar el estrés? ¿Por qué no se habla de extinguir el estrés?</strong><br/><br/>En la bibliografía actual nos vamos a encontrar con la terminología 'manejo del estrés', si profundizamos en ella nos dan un recorrido desde dónde y por qué surge el estrés en nuestro interior. De igual modo, las consecuencias que este conlleva en nuestra salud física y mental. Y de estar tan presente en nuestras vidas, existen altas probabilidades de terminar afectando más áreas de nuestras vidas (social, familiar, de pareja, escolar, profesional, etc.).<br/><br/>Si continuamos revisando la literatura, vamos a llegar al punto que detona interés en todos nosotros. ¿Qué hacer para manejar mi estrés? pero lamento defraudarlos, en este escrito no brindaré estrategias para manejarlo, porque si me permiten voy a señalar algo que ha estado presente en estos dos cuestionamientos. Me refiero a que pareciera que es nuestra culpa que el estrés exista dentro de mí, y peor aún, que esté rebasando los límites humanamente soportables.<br/><br/>La realidad no es así, la investigación del estrés surge a partir de la época de la industrialización. Desde que al sujeto se le sometió a una serie de empleos absorbentes, demandantes y voraces, con horarios extendedidos y que, en ocasiones, sobrepasan las condiciones humanas para poder tolerar tal carga. Es bien sabido que los puestos de un trabajo moderno tienden a normalizar que te quedes más tarde de tu horario laboral porque se evalúa como disponibilidad. También, te piden el tener que cubrir más funciones de las establecidas en tu puesto porque es parte de tu productividad. Una visión tan perversa porque juega con toda la estructura de vida de las personas. En caso de no hacerlo, sabes cuál es tu consecuencia...un muy posible despido. Pero si lo haces, la recompensa no es para nada clara, e incluso se olvidan de ella.<br/><br/>Desde esta óptica podemos entender porque hoy en día se hace referencia a un 'manejo' del estrés. Si lo leemos entre líneas pareciera que es algo que se detonó para quedarse, y que lo que se nos pide es saber cómo adaptarnos a ello sin dejar de ser sujetos funcionales para un ambiente laboral y social. Es como si fuésemos responsables de algo que en realidad no lo somos.<br/><br/>No por nada, países de primer mundo comienzan a modificar las estructuras y condiciones laborales. Empleando el home office, reducción de horas laborales, modalidad flexible e híbrida de acudir o no a tu centro de trabajo, entre otras. Porque saben que el estrés que viven sus empleados, surge no por una respuesta meramente natural, sino emerge a partir de una condición externa que rebasa nuestros recursos de 'manejo' y nos exige un afrontamiento. Hablar de afrontamiento del estrés, es hablar desde otro lugar.<br/><br/>"
            },
            {
                "type": "quote",
                "text": "Según la Real Academia, afrontar es hacer cara a un peligro, problema o situación comprometida. Mientras que manejar la define como moverse con cierta soltura después de haber tenido un impedimento."
            },
            {
                "type": "paragraph",
                "text": "Partiendo de esto, podemos darnos cuenta que las definiciones tienen connotaciones muy distintas. Mientras que la segunda busca que el sujeto actúe ante algo que ya lo padece; la primera busca anteponer nuestros recursos ante una sensación psicofísica displacentera para darle una solución definitiva. El manejo suena más bien a que será algo inherente y que cada vez que se presente, tendrás que utilizar hasta la última técnica para poder silenciarlo y que este no irrumpa en tus actividades.<br/><br/>Lastimosamente no podemos hablar de extinción del estrés porque irónicamente, este tiene una funcionalidad dentro de nuestro sistema. Las investigaciones lo definen como 'eustrés', cuya importancia radica en movilizar al sujeto de una situación adversa o displacentera. Por ejemplo, ante un sismo, un examen, una actividad que demanda de nuestras capacidades. Sus reacciones son las ya conocidas (ansiedad, sudoración, aceleración en la respiración, etc. Sin embargo, se presentan a un nivel tolerable que permite al sujeto ser consciente de su sentir y pensar para actuar de una forma asertiva y adaptativa. El estrés termina siendo funcional.<br/><br/>No así cuando el estrés es catalogado como 'distres'. Este hace que el sujeto pierda sus recursos, se deje influenciar por su sentir físico y emocional y maximice las situaciones externas que están desembocando sus sensaciones. Termina por ser un estrés poco funcional que, de tener una continuidad se puede convertir en agudo o crónico.<br/><br/>Si nos percatamos, no estamos hablando el día de hoy de un tema sencillo de tener que solamente 'manejar'. Incluso desde una visión clínica, sería negligente y no podemos dejar que un sujeto con estrés crónico se haga responsable y utilice todas las técnicas posibles para manejarlo. No estoy demeritando esa labor, pero en un punto crítico no es suficiente. Sin embargo, si lo factores estresantes no tienen una reestructuración, el sujeto no podrá tener una sencilla reinserción.<br/><br/>¿Entonces qué hacer ante este problema de salud física y emocional? Lo primero es no normalizarla, no verlo como algo natural porque eso hará que el umbral del estrés cada vez sea mayor. Mi cuerpo y mis emociones cada vez van a soportar más y más hasta terminar en un punto crónico y agudo.<br/><br/>Lo segundo es detenerte pero no para distraerte, sino para escucharte a ti mismo. ¿Cómo está tu cuerpo? ¿Qué necesitas? ¿Cuáles son tus límites? Esta pausa es para que te conozcas y establezcas tus límites. Sepas cuál es tu línea que no debes sobrepasar porque muy probablemente se te saldrá de tu control si esto sucede.<br/><br/>Y por último, es trabajar en tí mismo para que tus recursos personales sean cada vez más conocidos y fuertes. Esto te permitirá afrontar cualquier eventualidad displacentera desde un lugar más consciente y menos desbordante dentro de ti.<br/><br/>"
            },
          ],
          "tags": [
            "Estrés",
            "Manejo Del Estrés",
            "Afrontar El Estrés",
            "Distres",
            "Eustrés",
            "Salud Mental"
          ]
    },
    {
        date: "4 MAY 2022",
        author: "Psique & Ser",
        title: "La era de la procastinación",
        excerpt: "¿Postergas todo para después? Descubre por qué vivimos en la era de la procrastinación y cómo romper el ciclo.",
        slug: "post-11",
        image: "/Blog/post-11.png",
        "content": [
            {
                "type": "paragraph",
                "text": "A pesar de vivir en una época pandémica, previo a esto, la sociedad comenzaba a tener tintes de ser un ámbito demandante y consumidor de nuestros tiempos. Gran parte de nuestras actividades están orientadas al cumplimiento y resolución de las exigencias exteriores, dejando totalmente de lado todo aquello que es placentero para nosotros.<br/><br/>Quizá en un inicio no exista la sensación de insatisfacción con el cumplimiento de actividades meramente profesionales o académicas, pero al ser una constante la sensación surgirá debido a que solo estamos viviendo y realizando actividades poco placenteras y que, muchas veces, tienen una lógica de imposición no de elección propia.<br/><br/>Deténganse un momento y piensen en un espacio escolar. Nuestro Sistema Educativo está diseñado para cursar una gran tira de materias que posiblemente no todas sean de nuestro interés. En el trabajo, aun estando en un ámbito profesional genuinamente decidido, tendremos que realizar actividades que no se alinean a nuestros deseos. Y así, entrando en la monotonía, no nos percataremos en qué momento mis tiempos están cargados de demandas externas.<br/><br/>Todo lo comentado anteriormente tiene una finalidad, y no es la de 'justificar' la existencia de la procastinación en el sujeto; sino la de denotar que dicho hábito busca cualquier excusa para existir y tener una razón de ser.<br/><br/>"
            },
            {
                "type": "quote",
                "text": "La palabra procastinación proviene del latín /procastinare/, cuyo significado hace referencia a postergar hasta mañana."
            },
            {
                "type": "paragraph",
                "text": "Dicha etimología hace alusión a que el sujeto tiene un control sobre su propia procastinación, sin embargo no siempre es así. Sabemos que existe la procastinación porque vemos el acto de aplazar las actividades, pero difícilmente nos ponemos a pensar en el trasfondo de su existencia.<br/><br/>El acto de procastinar no solo se víncula a cuestiones actitudinales o apáticas del sujeto. Casi siempre se vincula a temas emocionales que terminan siendo puntos ciegos para las personas que lo presentan. Comúnmente el estrés es un factor detonante de la procastinación: muchos proyectos, carga excesiva de trabajo, etc. Pero más habitual es la renuncia a hacer una actividad que va a confrontarme, y que muy probablemente va a remover temas emocionales dentro de mí.<br/><br/>Un ejemplo de lo anterior sería el postergar actividades vinculadas a un proyecto de emprendimiento por temor al fracaso. Se evade porque el fracaso removerá y traerá a la conciencia del sujeto las críticas y la violencia verbal que recibió de su padre a lo largo de su adolescencia.<br/><br/>La procastinación se está convirtiendo en una era porque, hoy en día, los sujetos están más enfocados a cubrir las demandas externas, que a detenerse y reflexionar sobre qué temas están vinculados emocionalmente y me están impidiendo el poder llevar al acto todo aquello que me propongo o que debo realizar. Aunado a esto, la estadística marca que empieza a ser más común en los adolescentes y adultos, lo cual puede generar que lo normalicemos y solamente aprendamos a vivir con ello.<br/><br/>Más que brindarles una serie de tips o estrategias para evitar que la procastinación este presente en nuestras vidas, les queremos recordar la importancia de no solo estar a merced de todo lo que el mundo exterior nos demande; sino también, de tener momentos y espacios para uno mismo que nos ayuden a escuchar las exigencias que viven en mí, que me movilizan y determinan mi actuar.<br/><br/>"
            },
          ],
          "tags": [
            "Procrastinación",
            "Tiempo",
            "Demanda Externa",
            "Sistema Educativo",
            "Trabajo",
            "Monotonía"
          ]
    },
    {
        date: "2 MAR 2022",
        author: "Psique & Ser",
        title: "La dualidad éxito-fracaso",
        excerpt: "¿Fracaso o éxito? Descubre cómo reinterpretar ambos conceptos y convertir cada experiencia en una oportunidad de crecimiento.",
        slug: "post-12",
        image: "/Blog/post-12.png",
        "content": [
            {
                "type": "quote",
                "text": "Cuando te encuentres a ti mismo al lado de la mayoría, es tiempo de parar y reflexionar. - Mark Twain."
            },
            {
                "type": "paragraph",
                "text": "No se puede hablar de un concepto sin la presencia del otro. De hecho, uno no tiene validez sin la existencia de su contraparte. Por supuesto que socialmente tiene una mejor mirada el éxito que el fracaso. Pero cuántas veces no hemos escuchado o visto documentales de personajes históricos, o grandes empresarios que se construyeron a partir del fracaso. Y es que el fracaso tiene tintes de debilidad, fragilidad y puede ser el reflejo de la poca estructuración del sujeto para afrontar elementos y exigencias del mundo exterior. Sin embargo, desde la mirada individual, el fracaso puede tener una serie de connotaciones que dependerá justo de la individualidad y subjetividad del sujeto."
            },
            {
                "type": "paragraph",
                "text": "<strong>Una posible mirada puede ser un fracaso del cual voy a generar una reconstrucción e integración de mí mismo y poder trasladarlo hacia el mundo exterior. Otra tendría relación con la imposibilidad, la desestructuración que se vincula con todos aquellos aspectos negativos que, vistos desde la sociedad, construyen la palabra fracaso.</strong> Arraigándose a aspectos emocionales, psicológicos, físicos, culturales, económicos y sociales que harán que el sujeto se vea así mismo como alguien inútil, perdido y sin un conocimiento integral interno y externo."
            },
            {
                "type": "paragraph",
                "text": "Lo irónico en esto, es que ambas palabras no solo tienen la interpretación individual, también tienen una mirada enjuiciante de la sociedad. De hecho, los estándares sociales están por encima de lo subjetivo. El dejar que lo anterior crezca, va a generar que nuestro éxito-fracaso este definido por otro, más que por mí mismo; lo cual hace que el concepto interno de éxito este definido por aspectos materiales, bienes o cuestiones económicas, ya que esas son imágenes que socialmente definen la posición y el valor que tenemos ante una cultura.<br/><br/>Parte contraria, el fracaso se ve desde la parte de la nada y de no ser nadie; dejando de lado lo ya preestablecido como una familia, un hogar, un empleo. Eso no se ve porque la gran mayoría lo tiene. Sin embargo, eso puede ser el éxito de alguien, sin embargo visto desde los ojos sociales, el tener solo eso es un fracaso porque no aspira a algo más del orden de las imágenes e impresiones.<br/><br/>La pandemia vino a reubicar el lugar del éxito y del fracaso, y dolosamente se comenzó a dar a partir de la perdida. Comenzamos a perder seres cercanos y queridos, libertades, actividades rutinarias y automáticas; dejándonos expuestos y abiertos para recordar la importancia de que lo poco vale mucho, que las complacencias externas se vuelven un fracaso cuando las internas no están cubiertas; y que teniendo lo interno entendido y acomodado se vuelve el mayor de nuestros éxitos.<br/><br/>"
            },
          ],
          "tags": [
            "Éxito",
            "Fracaso",
            "Reflexión",
            "Individualidad",
            "Subjetividad",
            "Estándares Socialeso"
          ]
    },
    {
        date: "5 ENE 2022",
        author: "Psique & Ser",
        title: "Año Nuevo, casualidades o causalidades nuevas",
        excerpt: "¿Tu destino está marcado por el azar o por tus decisiones? Descubre si el Año Nuevo trae casualidades o causalidades.",
        slug: "post-13",
        image: "/Blog/post-13.png",
        "content": [
            {
                "type": "quote",
                "text": "De todos los infortunios que afligen a la humanidad el más amargo es que hemos de tener conciencia de mucho y control de nada. - Heródoto."
            },
            {
                "type": "paragraph",
                "text": "Para muchos se ha vuelto tradición hacer un corte en su vida cuando se comienza un Nuevo Año. Dejar todo aquello vivido en el pasado y construir un nuevo presente.<br/><br/>La fantasía o el deseo, gira entorno a que será un nuevo espacio-tiempo para generar oportunidades, modificaciones o se presenten casualidades. Sin embargo, muchas de las veces, esto está sostenido en una base tan efímera, que las acciones no terminan por denotar el deseo de alcanzar dichas propuestas.<br/><br/>Es una parte muy del humano el dejar que su desarrollo dependa de situaciones o fortunios externos, sin responsabilizarse de sus actos o hacer algo por materializarlos. De ahí se desprenden exclamaciones como: 'está vez no tuve suerte', 'no le caí bien, por eso no conseguí el empleo', ó 'me paré con el pie izquierdo'. Aunque muchas de las veces, las exclamaciones van de la mano con una serie de rituales que refuerzan la fantasía de que hoy 'será un buen día'. Rituales como: usar una prenda en especial, traer consigo amuletos, pulseras, etc; rezar o suplicar a divinidades.<br/><br/>Todo esto pone hacia afuera la responsabilidad que, en la mayor parte de las veces, debe ser puesta hacia adentro. Sin embargo, aunque suene irónico, el hacerlo así, es sano para la persona. Conscientemente no podría tolerar tal angustia de saberse responsable ante sus actos y consecuencias; y como mecanismo de defensa, su psique lo deposita en alguien o algo más. Esto genera una sensación de insatisfacción por no haber cumplido el objetivo, pero elimina la culpa y todos sus desencadenamientos por no ser esa persona que idealmente cree que es.<br/><br/>Pero actuando así, los años pueden pasar y el sujeto puede seguir paralizado, inhibido y pasivo. Esperando y deseando que una casualidad acabe con esa actitud y le dé la oportunidad que tanto desea. Cuando en realidad debemos de hablar de una causalidad.<br/><br/>"
            },
            {
                "type": "quote",
                "text": "Según la real Academia, la diferencia entre casualidad y causalidad es que, la primera es la combinación de circunstancias que no se pueden prever ni evitar. Mientras que la segunda, es la causa u origen de la cual se producen efectos."
            },
            {
                "type": "paragraph",
                "text": "Esto nos lleva a pensar que el sujeto debe ser una causa en sí mismo, y no una casualidad. Él debe ser el origen de sus posibilidades y oportunidades. Para ello se requiere de mucha labor, de instropección y de 'ser consciente de sí'. Tampoco con esto se espera que la persona se vuelva omnipresente y omnisciente, que todo lo puede por solo tener el control de sí mismo, porque una realidad es que si existen factores externos que juegan un papel importante; sin embargo esos factores no deben gobernar tu vida interna.<br/><br/>¿Cómo lograr discernir entre lo que si me compete y lo que está afuera como un factor que puede impactar? Sin afán de generar un comercial mercadológico, la terapia es un excelente espacio que te puede permitir escucharte, analizarte y conocer la profundidad de tus océanos. Un proceso en donde tarde o temprano, caerás en cuenta de ti y de tus actos, por ende te responsabiliza de tu existencia y de tu lugar en los espacios externos."
            },
          ],
          "tags": [
            "Año Nuevo",
            "Desarrollo Personal",
            "Responsabilidad",
            "Sujeto",
            "Causalidad",
            "Consciencia"
          ]
    },
    {
        date: "4 NOV 2021",
        author: "Psique & Ser",
        title: "La muerte en la vida",
        excerpt: "La muerte no es solo un final, sino una parte esencial de la vida. Comprenderla nos ayuda a valorar cada instante.",
        slug: "post-14",
        image: "/Blog/post-14.png",
        "content": [
            {
                "type": "paragraph",
                "text": "Muchos países del mundo se asombran al simple hecho de ver como el mexicano rinde tributo a la muerte. Se cuestionan ¿cómo y por qué festejan que un muerto ya no esté en el mundo terrenal? Y es que el tema de hoy, difícilmente podemos desprenderlo de la perspectiva de nuestra cultura, porque la cultura permea al individuo y a la inversa.<br/><br/>En su mayoría, somos una cultura “muégano”, difícilmente podemos desprendernos los unos a los otros. Es esta misma adherencia familiar y el amor por el otro, lo que nos hace la tarea aún más difícil de desprendernos de ese ser querido. Sin embargo, aún teniendo una cultura como la mencionada, no podemos dejar de analizar la importancia de la muerte dentro de nuestra representación psíquica."
            },
            {
                "type": "quote",
                "text": "Como se dice “la muerte es lo único seguro en esta vida”. Bajo este presagio entra la duda sobre si vivimos para morir o la muerte está presente para poder vivir. No podemos inclinarnos por alguno de los pasajes porque generalizaríamos una postura ante la muerte."
            },
            {
                "type": "paragraph",
                "text": "¿Cómo hace el mexicano para integrar la muerte a la vida? Ante esta pregunta, se pueden abrir muchas brechas, pero trataremos de esclarecer una que consideramos sucede en el psiquismo de los mexicanos.<br/><br/>La muerte no solo es llevar el cuerpo al punto cero, a lo inanimado. Es también, todo un mecanismo psíquico que surge en las personas o seres queridos que rodean al difunto. Para poder tener una integración e interacción en el día de muertos, lo primero que hacemos es tratar de quitar el afecto a la experiencia, no a la persona. Con esto, el mexicano logra sublimar la muerte como algo fatal o catastrófico, a convertirlo en un evento de un posible retorno simbólico que permite tener una conexión afectiva con la persona. Es un mecanismo tan complejo, que el empuje a hacerlo proviene de la misma cultura.<br/><br/>Otro mecanismo que parece activarse es, que en esta misma línea de sublimación, lograr integrar la percepción de la muerte como algo bueno y no con connotaciones negativas. La festividad, la ofrenda, y todos los rituales ayudan a que los aquejados dejen de sentir la culpa que nos provoca la muerte de nuestros seres queridos. Si la culpa no se transformara, seguramente la muerte seguiría en secuencia dentro de la familia. Terminaría arrebatando no solo a un familiar, sino a todos aquellos que no logren sublimar la culpa.<br/><br/>Con esto, no queremos decir que todos reaccionamos de la misma forma, o que es lo que debemos hacer. Simplemente es entender qué pasa en nuestras mentes y como la cultura tiene un impacto para poder tramitar un escenario que, para muchos, tiene tintes muy oscuros.<br/><br/>"
            },
          ],
          "tags": [
            "Cultura Mexicana",
            "Día De Muertos",
            "Perspectiva De La Muerte",
            "Sublimación",
            "Rituales",
            "Integración Psíquica"
          ]
    },
    {
        date: "2 SEP 2021",
        author: "Psique & Ser",
        title: "La hibridez en nuestras vida",
        excerpt: "La hibridez transforma nuestra forma de vivir, conectar y adaptarnos a un mundo en constante cambio.",
        slug: "post-15",
        image: "/Blog/post-15.png",
        "content": [
            {
                "type": "paragraph",
                "text": "La “nueva normalidad” nos ha exigido la adaptación a diferentes formas de sociabilizar, de poder salir de espacios seguros y aislados con los cuidados necesarios y respetando las medidas sanitarias. Hoy en día se habla de un modelo híbrido, el cual busca la integración y readaptación de las personas a una vida que sigue condicionada por la salud- enfermedad.<br/><br/>A grandes rasgos un modelo híbrido, es aquel que te permite interactuar en 2 vertientes con las personas. La primera, de forma presencial con un porcentaje mínimo de tu población real donde interactúas cara a cara. La segunda, tiene que ver con el trabajo a distancia, lo que se conoce como labores remotas. En este grupo entra la mayoría de la población. Mientras unos cuántos se encuentran de forma presencial, otros están interactuando en la misma actividad, pero de forma virtual. Posteriormente, se intercambiarán los roles a lo largo de la semana<br/><br/>"
            },
            {
                "type": "quote",
                "text": "Sin embargo, no sólo se pone en juego la presencialidad, sino también todo nuestro estado emocional, debido a que la situación remueve cosas en nosotros, y en la mayoría de los casos nos deja en una posición vulnerable e insegura ante el virus."
            },
            {
                "type": "paragraph",
                "text": "¿Cómo hace el mexicano para integrar la muerte a la vida? Ante esta pregunta, se pueden abrir muchas brechas, pero trataremos de esclarecer una que consideramos sucede en el psiquismo de los mexicanos.<br/><br/>¿Qué pasa realmente con las personas? Hay quienes se rehúsan a esta nueva modalidad por el temor de enfrentarse a una situación de enfermedad generada por el Covid. Hay otros que estaban deseosos de poder, dentro de la medida, reanudar sus actividades y sus labores cotidianas. Y, por otro lado, hay otro grupo que no logra generar una opinión individual y deciden en sí lo que externamente se ha impuesto.<br/><br/>Sin afán de categorizar a nuestros lectores, lo importante del presente texto es que ante cualquiera de los panoramas mencionados, la realidad es que mucho de nosotros se pone en juego en este modelo híbrido de vida. La analogía que queremos integrar es que nuestro estado emocional no puede escindirse a que unos días pueda ser expresado y otros días tenga que ser resguardado. Aunado a esto no está de más sobre exigirnos acerca del ser más conscientes de lo que implica el tener un modelo híbrido en nuestras vidas y la responsabilidad que esto conlleva en cada uno de nosotros.<br/><br/>Retomando el tema emocional, también debe entrar dentro del plano de lo consciente. el saber cómo me siento, qué tan preparado estoy hoy para afrontar un día en el exterior y que debo de trabajar conmigo mismo para erradicar esos sentires que detonan en mí reacciones emocionales adversas que obstaculizan mi desarrollo y mi convivencia. Para esto, te sugerimos que aparte de tener listo tu cubrebocas y tú gel antibacterial, estés listo y seguro contigo mismo de que el evento al que te diriges será una buena experiencia de vida.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "Toma en cuenta lo siguiente:<br/><br/><ul><li>Procura no salir a prisa de tu casa. </li><li>Organiza tus tiempos de salida, es más importante que salgas seguro aunque tengas retardo. </li><li>Considera importante reflexionar cómo te sientes hoy y qué tan seguro te encuentras antes de partir. </li><li>Si tienes hijos, tómate unos minutos para platicar sobre cómo se sienten y trata de brindarles herramientas que los hagan sentir más seguros. </li><li>No descuidemos los cuidados físicos pero tampoco te olvides de tus cuidados emocionales </li></ul>"
            },
          ],
          "tags": [
            "Nueva Normalidad",
            "Modelo Híbrido",
            "Adaptación",
            "Sociabilización",
            "Salud Mental",
            "Emociones"
          ]
    },
    {
        date: "4 AGO 2021",
        author: "Psique & Ser",
        title: "Autoconcepto y equilibrio emocional en la adolescencia",
        excerpt: "Construir un autoconcepto sólido en la adolescencia es clave para el equilibrio emocional y el bienestar futuro.",
        slug: "post-16",
        image: "/Blog/post-16.png",
        "content": [
            {
                "type": "paragraph",
                "text": "Como sabemos el adolescente es inestable emocionalmente, que cambia con cierta facilidad de humor y puede estar en un momento determinado eufórico y pasar seguidamente al más hondo pesimismo.<br/><br/>Pese a que esta característica es propia de la adolescencia, en sus ambientes en los que se encuentra y, especialmente, en la familia hay que intentar educar en el complejo mundo de las emociones. Actualmente se habla con frecuencia de la Inteligencia Emocional y con esta expresión se pretende hacer hincapié en que las personas debemos aprender a manejar nuestras emociones, a saber gobernarlas."
            },
            {
                "type": "quote",
                "text": "La felicidad y el éxito en la vida muchas veces no dependen de nuestra capacidad intelectual sino de nuestras habilidades para conocer y controlar nuestras emociones y también conocer las emociones ajenas."
            },
            {
                "type": "paragraph",
                "text": "En el mundo de las relaciones interpersonales es donde se encuentran los mayores problemas afectivos y personales. La madurez y el equilibrio en dichas relaciones son fundamentales para la salud psicológica del adolescente. Pero esta madurez y equilibrio, aunque dependen mucho de las características personales de cada uno, se pueden mejorar con un adecuado entendimiento en estas cuestiones, bien con programas, que hay editados y que están en los centros educativos, o bien con el diálogo y el apoyo sereno de la familia o sus amistades en los momentos difíciles.<br/><br/>Las relaciones con los iguales, familia, relaciones de pareja, son las situaciones que ponen en juego más energía emocional, ya sea en su forma negativa o positiva. Cuando un adolescente se siente triste, abatido, tiene ansiedad, etc., es bueno que comunique estos estados de ánimo, bien sea a amigos y amigas, familia, etc. El problema muchas veces es que estos estados pertenecen más que ninguna otra cosa al terreno de lo íntimo y el adolescente, en muchos casos, huye de la comunicación de estos estados de ánimo que él considera íntimos. Es más fácil que recurra a sus amistades que a la familia porque se siente con más libertad para hablar de ciertos temas y también más comprendido. Lo importante es que tenga la capacidad para expresar lo que siente, teniendo en cuenta que cada persona es diferente a la hora de manifestar estas cuestiones y los padres y madres, en el entorno familiar, han de tener la habilidad para, respetando la intimidad de su hijo e hija, ofrecer un entorno de comunicación abierto y comprensivo.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "<strong>¿Qué puede hacer la familia ante situaciones de bajón anímico?</strong><br/><br/><ul><li>Favorecer la comunicación pero sin mostrarse excesivamente pesados, dado que puede producir el efecto contrario. Estar siempre abiertos al diálogo.</li><li>Actuar con empatía, es decir, ponernos verdaderamente en su lugar para comprender mejor lo que le ocurre y poder ayudarle. Los problemas afectivos de un adolescente son muy importantes para él aunque para una persona adulta puedan resultar una tontería.</li><li>Si los padres y madres observan que los momentos bajos, anímicamente hablando, son frecuentes, no pasan con facilidad, etc., debemos acudir a un especialista que nos ayude con algunas técnicas más específicas. </li></ul>"
            },
          ],
          "tags": [
            "Adolescencia",
            "Inteligencia Emocional",
            "Educación Emocional",
            "Relaciones Interpersonales",
            "Salud Psicológica",
            "Comunicación Abierta"
          ]
    },
    {
        date: "1 JUL 2021",
        author: "Psique & Ser",
        title: "El mundo que habito",
        excerpt: "El mundo que habitamos refleja nuestras acciones. Comprenderlo es el primer paso para transformarlo.",
        slug: "post-17",
        image: "/Blog/post-17.png",
        "content": [
            {
                "type": "paragraph",
                "text": "Para nadie es nuevo que el mundo en el que vivimos no está pasando por su mejor época, e incluso científicos e investigadores apuntan a que no se recuperará en un buen lapso de tiempo. De hecho muchos hablan, de un cambio de era.<br/><br/>Científicos y activistas del cambio climático han diseñado una estrategia para concientizar al mundo del daño que estamos generando a nuestro espacio vital. Dicha estrategia consistió en montar un reloj enorme en la Ciudad de Nueva York, señalando el tiempo de vida que le queda a nuestro planeta en caso de no tomar acciones y medidas que favorezcan su conservación. El reloj marca aproximadamente 7 años con 100 días, a nuestro parecer, tenemos muy poco tiempo para poder equilibrar.<br/><br/>El mundo real ya empieza a tener secuelas visibles y tangibles para todos: pandemia, enfermedades crónicas e incluso no catalogadas, deforestación, temperaturas radicales, muerte de flora y fauna, etc. Quizá todo esto es señal de que las condiciones de afuera requieren de un gran cambio, pero ¿por qué el ser humano sigue sin atenderlas? Es aquí donde queremos equiparar el mundo exterior, con el mundo interno de los humanos. ¿A caso ese desastre y derrumbamiento externo también se está viviendo en nuestros interiores? ¿No vemos aquello que está afuera porque estamos tan acostumbrados a verlo adentro que nos volvemos en sintonía con ello?<br/><br/>Posiblemente solo estemos generando una proyección de todo aquello que habita dentro de nosotros (mi mundo interior debe ser o parecerse a mi interior). Pero en caso de que esta hipótesis sea correcta, todo apuntaría a que dentro de nosotros deseamos que ya no habite porque es justo lo que estamos buscando en el exterior, dejar de habitar. El psicoanálisis y muchas otras corrientes psicológicas y filosóficas apuestan a que el amor será aquello que reconstruya el espacio de las personas, y levante las ruinas de donde en algún momento se vivió una gloria de paz.<br/><br/>"
            },
            {
                "type": "quote",
                "text": "En esta misma línea de ideas, tendríamos una posible solución como seres humanos. Estoy hablando del proceso psíquico que Freud denominó sublimación. A grandes rasgos, la sublimación es un proceso en el que se busca reorientar toda la energía libidinal que vive dentro de nosotros y que por el momento se está enfocando en objetos, actividades o metas poco constructivas, para generar una nueva descarga que sea socialmente aceptada."
            },
            {
                "type": "paragraph",
                "text": "Aquí podríamos entrar en un cuestionamiento, ¿entonces que hay que trabajar primero, lo individual o lo colectivo? La respuesta, con base en las ideas postuladas y con el tiempo que nos marca el reloj, es trabajar a la par. Debemos sublimar todo aquello que vive en mí que no está teniendo fines constructivos para promover mejor vínculos hacia mismo y hacia el exterior. Con ello no quiere decir que “lo malo” de nuestra existencia dejará de existir; esto es algo inherente al ser humano. Vivimos con pulsiones que construyen y con pulsiones que destruyen.<br/><br/>La idea es clara, si somos los destructores de nuestro mundo, podemos ser los constructores del mismo. Externamente es trabajo de la gran mayoría, reconociendo que esas metas no deben ser a beneficio propio, sino al bien común. Dejar de lado el narcisismo y el pensamiento egocéntrico del que nos hablaba Piaget, para poder mirar al otro que está a punto de sufrir lo mismo que yo. Quizá, con este trabajo individual y acciones externas, podamos lograr que esa restauración del afuera, subsane nuestra parte interna"
            },
          ],
          "tags": [
            "Cambio Climático",
            "Conciencia Ambiental",
            "Crisis Global",
            "Tiempo Restante",
            "Salud Mentaln",
            "Sublimación"
          ]
    },
    {
        date: "1 JUN 2021",
        author: "Psique & Ser",
        title: "La ganancia secundaria. Una crítica a nuestra situación actual",
        excerpt: "Las crisis traen cambios, pero también ganancias ocultas. Una reflexión sobre nuestra realidad actual.",
        slug: "post-18",
        image: "/Blog/post-18.png",
        "content": [
            {
                "type": "quote",
                "text": "Es para nosotros, algo consabido, señalo yo, que a los enfermos su padecer les procura una cierta satisfacción, de suerte que en verdad se muestran parcialmente renuentes a sanar - S. Freud."
            },
            {
                "type": "paragraph",
                "text": "La pandemia permanece en nosotros, y con ella la enfermedad; pero el ciclo de la vida continúa y somos los seres humanos somos los que nos rehusamos a que se detenga aun sabiendo que esto podría salvaguardar a nuestros seres queridos y a nosotros mismos. Sin embargo, dicho ciclo no solo es el procurar la vida en sí misma ni el bienestar de la mayoría, sino todo un ciclo político-económico que permita seguir obteniendo las riquezas necesarias para algunos a un precio que otros tantos pagan. Nuestra nueva realidad es que las grandes industrias farmacéuticas y laboratoristas están acelerando la fabricación de las vacunas, con la finalidad de proteger a las personas de acaecer en manos de este virus. No obstante, hay un mensaje no dicho que empieza a materializarse. Me refiero a que la población vacunada podrá ser cada vez más expuesta a una vida con tintes de una “nueva normalidad”. He aquí donde entra lo mencionado en nuestro título del texto, la ganancia secundaria. Para el psicoanálisis y la psicología, la ganancia secundaria es ese beneficio inconsciente que obtenemos a través de un padecimiento o enfermedad.<br/><br/>Desde esta óptica podemos considerar que, ante la vacunación, hay una ganancia secundaria en dos sentidos. En un primer punto, para las industrias, la ganancia no sólo está en la protección ciudadana, sino también en recuperar el flujo económico e industrial del país. Pudiendo tener argumentos ante los vacunados para poderlos exponer a un mundo donde la enfermedad no se ha erradicado. En ese momento, la responsabilidad del cuidado recaerá nuevamente en uno, no en que la infraestructura cumpla con los protocolos de sanidad.<br/><br/>En un segundo momento, para los vacunados, la ganancia secundaria no está del todo definida porque, inconscientemente, resuena el hecho de que la dosis no te va a curar de toda la sintomatología psíquica y somática que la enfermedad, o el encierro ha dejado en la población. La ganancia secundaria podría manifestarse más en las “comodidades” que poco a poco iremos perdiendo. Los empleos home office se irán desvaneciendo, y con ello la sensación de seguridad de estar en un espacio físico aislado, conocido y controlado. De igual modo, se llevará el tiempo compartido en familia, la convivencia y el miramiento que se recuperó entre los integrantes. Aquí nuevamente, será responsabilidad y decisión consciente de cada uno si esa ganancia se pierde aunque tengamos que retornar de formada forzada a una “sanación pandémica social”.<br/><br/>Si en tu realidad estas apunto de regresar a tus labores cotidianas, o ya te encuentras en ellas, es importante que te tomes unos minutos de tu día para reflexionar el cómo te sientes y qué de todo eso que está a tu alrededor tienes el control para tu propio cuidado. Sé consciente de tu desenvolvimiento y de tus labores, pero aún más, debes ser consciente y darle prioridad a tu salud física y mental porque ni la vacuna ni las instituciones te pueden ofrecer cien por ciento tu seguridad. Las ganancias se perderán a la fuerza, pero vendrán otras y dentro de ese venir tiene que estar tu propia salud.<br/><br/>"
            },
          ],
          "tags": [
            "Pandemia Permanente",
            "Ciclo De Vida",
            "Nueva Normalidad",
            "Ganancia Secundaria",
            "Industria Farmacéutica",
            "Vacunación"
          ]
    },
    {
        date: "5 MAY 2021",
        author: "Psique & Ser",
        title: "Hablemos de adolescentes",
        excerpt: "La adolescencia es un viaje de cambios y descubrimientos. Hablemos de cómo acompañarlos en esta etapa clave.",
        slug: "post-19",
        image: "/Blog/post-19.png",
        "content": [
            {
                "type": "paragraph",
                "text": "La adolescencia es esa etapa de nuestras vidas que puede ser crucial para un desarrollo medianamente sano hacia la vida adulta, o una fase tormentosa que viene a destruir los pilares frágiles de la infancia. La OMS define a la adolescencia como el período de crecimiento y desarrollo humano, que se produce después de la niñez y antes de la edad adulta, considerándose entre los 10 y 19 años.<br/><br/>Arminda Aberaustury en su texto 'La adolescencia normal' enuncia una serie de características generales psicosociales y emocionales por las cuáles atraviesa el adolescente en esta etapa de dolencia y de duelos. Algunas de ellas son: ruptura familiar, exploración de nuevos círculos sociales, duelo por el cuerpo y la representación infantil, entre otros.<br/><br/>Para ello, haremos mención de un decálogo que el adolescente no debe olvidar, e incluso debe trabajar para que dicha etapa sea un peldaño más en su desarrollo.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "Los adolescentes deben adaptarse a un cuerpo que duplica su tamaño y adquiere características sexuales. Deben aprender a manejar los cambios biológicos y los sentimientos sexuales que los acompañan; y a practicar conductas sexuales saludables. Su tarea también incluye establecer una identidad sexual y desarrollar habilidades para las relaciones de noviazgo.<br/><br/><ul><li><strong >Desarrollar y aplicar habilidades de pensamiento abstracto:</strong> Los jóvenes suelen atravesar cambios profundos en su forma de pensar durante la adolescencia, lo que les permite comprender y coordinar ideas abstractas más efectivamente, pensar en distintas posibilidades, ensayar hipótesis, pensar en el futuro y construir filosofías. </li><li><strong >Desarrollar y aplicar un nivel de perspectiva más complejo:</strong> Los adolescentes adquieren una nueva y potente habilidad para comprender las relaciones humanas, en las que, una vez que aprenden a “ponerse en el lugar de otra persona”, aprenden a tener en cuenta sus propias perspectivas y las de los demás simultáneamente, y deben usar esta nueva capacidad para resolver conflictos y problemas en las relaciones.</li><li><strong >Desarrollar y aplicar nuevas habilidades de adaptación en áreas tales como la toma de decisiones, la solución de problemas y la resolución de conflictos:</strong> En relación con todos estos cambios notables, los adolescentes adquieren nuevas habilidades para pensar y planificar el futuro, para utilizar estrategias más sofisticadas en la toma de decisiones, solución de problemas y resolución de conflictos y para moderar los riesgos que toman, y así alcanzar sus metas en lugar de ponerlas en peligro.</li><li><strong >Identificar patrones morales, valores y sistemas de creencia significativos:</strong> Construyendo sobre estos cambios y las habilidades resultantes, los adolescentes típicamente desarrollan un entendimiento más complejo del comportamiento moral y los principios subyacentes de justicia y afecto, cuestionando creencias de la infancia y adoptando valores, visiones religiosas y sistemas de creencias personalmente más significativos para guiar sus decisiones y comportamientos.</li><li><strong >Comprender y expresar experiencias emocionales más complejas:</strong> Con relación a estos cambios, los adolescentes tienden a adquirir la habilidad de identificar y comunicar emociones más complejas, comprender las emociones de otros de maneras más sofisticadas y pensar acerca de las emociones de manera abstracta.</li><li><strong >Formar amistades íntimas de apoyo mutuo:</strong> Si bien los jóvenes típicamente tienen amigos durante toda la infancia, los adolescentes suelen desarrollar relaciones de pares que juegan un papel mucho más importante para brindar apoyo y conexión en su vida. Tienden a pasar de amistades basadas en gran medida en compartir actividades e intereses a otras basadas en compartir ideas y sentimientos, con el consiguiente desarrollo de confianza y entendimiento mutuo.</li><li><strong >Establecer aspectos claves de la identidad:</strong> Hasta cierto punto, la formación de la identidad es un proceso que dura toda la vida, pero los aspectos cruciales de la identidad se forjan típicamente durante la adolescencia, incluyendo el desarrollo de una identidad que refleja un sentido de individualidad y la conexión con personas y grupos valorados. Otra parte de esta tarea es desarrollar una identidad positiva con respecto al género, los atributos físicos, la sexualidad, la etnia y, si fuera el caso, el hecho de ser adoptado; también deben desarrollar una conciencia de la diversidad de grupos que conforman la sociedad.</li><li><strong >Hacer frente a las demandas que implican roles y responsabilidades cada vez más maduros:</strong> Los adolescentes gradualmente adoptan los papeles que se esperará de ellos durante la adultez, aprendiendo a adquirir las habilidades y manejar las múltiples demandas que les permitirán moverse en el mercado laboral y satisfacer las expectativas en cuanto a su compromiso con la familia, la comunidad y la ciudadanía.</li><li><strong >Renegociar las relaciones con los adultos que ejercen el rol de padres:</strong> Si bien algunas veces la tarea de los adolescentes ha sido descrita como “separarse” de los padres y otros cuidadores, se la considera ahora más como una tarea conjunta de adultos y adolescentes para negociar un cambio que establezca un equilibrio entre la autonomía y una conexión continua, enfatizando una u otra según los antecedentes étnicos de cada familia.</li></ul>"
            },
          ],
          "tags": [
            "Adolescencia",
            "Desarrollo Psicosocial",
            "Cuerpo En Crecimiento",
            "Ruptura Familiar",
            "Identidad Sexual",
            "Habilidades Cognitivas"
          ]
    },
    {
        date: "6 ABR 2021",
        author: "Psique & Ser",
        title: "Sociedad y locura",
        excerpt: "La locura a lo largo de la historia: un reflejo de cómo la sociedad define y transforma lo que considera 'normal'.",
        slug: "post-20",
        image: "/Blog/post-20.png",
        "content": [
            {
                "type": "paragraph",
                "text": "El hablar de locura es introducirte a un mundo de mitos, especulaciones y estigmatizaciones, porque, invariablemente, no podemos desprender el juicio social que esta alteración mental conlleva.<br/><br/>Si hacemos un breve recorrido a la historia de la psiquiatría, desde tiempos antiguos se señalaba a las personas con ciertas alteraciones en su conducta y los llamaban “lunáticos”. Dicho término proveniente de la idea de que la luna era el elemento que había alterado todo el estado mental del enfermo. Posterior a esto, en el siglo XV y XVI, los enfermos mentales eran encerrados como criminales, señalados por la anormalidad que presentaban y, por lo general, debían ser castigados. Hoy en día, en nuestro siglo XXI, las intervenciones hacia este tipo de población han cambiado y se presumen de ser intervenciones clínicas más humanizadas; sin embargo hay un trasfondo en todo este tema. Ese trasfondo es, precisamente, la sociedad.<br/><br/>Desde la infancia nos introducen a una cultura, a una sociedad con normas, tradiciones, lenguaje y formas de ver la vida y la muerte. En la edad infantil es primordial que nos integremos a una sociedad. Que empecemos a desarrollar habilidades sociales, ya que se dice que somos seres sociales y los niños privados de estímulos sensoriales o de la interacción con otros, pueden hacerlos caer en la locura. Y ante esto me pregunto ¿quién dice que al integrarte a una a sociedad vas a estar en lo correcto? Nos integran a una sociedad tan rota, injusta, polarizada…tan loca. Pero esa locura social no es visto como algo malo, sino como algo normal porque tiene sus propias normas, mismas a las que nos vamos adaptando y aceptando como parte fundamental de nuestras vidas.<br/><br/>Pero ¿qué pasa con las personas que no quieren y no se adaptan a esa locura social?, ante esta pregunta es donde surge el concepto de locura. La locura, entendida en términos generales, es la ausencia de salud mental, y ¿quién evalúa si una persona mantiene una salud mental? La sociedad. La sociedad es nuestro principal juez a lo largo de nuestra vida, ellos determinarán si estamos bien o mal, si somos “normales o anormales”, si nos podemos integrar y desarrollar o si seremos incluidos o excluidos.<br/><br/>Que nuestro lector no crea que estamos desmintiendo la locura como concepto equiparable a enfermedad. Estamos cuestionando los estándares de evaluación que aplica la sociedad ante este tipo de población. Debido a que, aunque la psiquiatría presume que hoy en día que sus métodos de abordamiento son más humanizados, seguimos teniendo inconsistencias y muestras de que el enfermo mental no importa como persona, sino como objeto de estudio o un número cuantificable en las estadísticas médicas que permitan la elaboración de más y más psicofármacos. De hecho, el mismo nombre de los fármacos demuestran lo anterior. El llamar a un medicamento “antipsicótico” o “antidepresivo”, es un significado que comprueba lo mencionado, ¿por qué eliminar al sujeto psicótico o depresivo, y no a la enfermedad? ¿Por qué no llamarlo “antipsicosis o “antidepresión”? Pareciera que el problema no está en la enfermedad, el problema está en el sujeto que no se apega a los estándares sociales, y entonces es él el que tiene que ser segregado. De hecho muchos de los modelos clínicos hoy en día, lo que buscan es la reintegración del sujeto a la sociedad, denotando que lo social siempre va a tener más peso que lo individual.<br/><br/>La locura existe, pero no siempre es tan visible como nos lo demuestran en las películas o series. A veces, la locura es tan silenciosa que basta un mínimo evento que la detone, o incluso, puede que nunca se manifieste y el sujeto pueda vivir en una sociedad. Los signos síntomas como los delirios, las alucinaciones, las conductas violentas, etc., son parte importante para la elaboración de un diagnóstico, pero si no existe alguna sintomalogía tangible y puesta para la evaluación social ¿qué es entonces la locura? Por ello, la psicología tiene una gran labor para las personas que padecen algún trastorno mental. La labor suena sencilla, escuchar, pero es ayudar al paciente a armar todo el rompecabezas de su vida hasta encontrar que fue aquello que rompió su cabeza. Indiscutiblemente, el trabajo de escucha se hace con apoyo de las intervenciones psiquiátricas, pero en está ocasión escuchamos al sujeto y cómo vive su enfermedad con la finalidad, no solo de una integración social, sino de un sentimiento de salud mental.<br/><br/>"
            },
          ],
          "tags": [
            "Locura",
            "Estigmatizació Mental",
            "Historia De La Psiquiatría",
            "Normas Sociales",
            "Adaptación Social",
            "Salud Mental"
          ]
    },
    {
        date: "3 MAR 2021",
        author: "Psique & Ser",
        title: "La familia en épocas modernas",
        excerpt: "La familia evoluciona con el tiempo, adaptándose a los cambios sociales y redefiniendo sus vínculos.",
        slug: "post-21",
        image: "/Blog/post-21.png",
        "content": [
            {
                "type": "paragraph",
                "text": "La familia ha evolucionado muchísimo en los últimos años. Tanto es así, que hasta a los expertos les cuesta trabajo definir lo que es una familia y los tipos que existen (monoparental, homoparental, reagrupada, multicultural). No vamos a entrar en todas las características para no perdernos mucho. Vamos a centrarnos en las situaciones que son más frecuentes en nuestro entorno más cerc.<br/><br/>Los padres de familia con hijos adolescentes suelen estar en torno a los 40 años o más. Nos podemos encontrar, por lo tanto, con que a veces coinciden los cambios e inestabilidad de nuestras hijos con la llamada “crisis de los 40”, que ahora los expertos la sitúan más bien hacia los 50, dado el retraso, en las parejas jóvenes. La familia tradicional ya no está tan extendida, al menos en las ciudades de los países desarrollados. Las madres suelen trabajar junto con los padres y ya no tenemos, en líneas generales, el modelo de la madre en casa que se encarga de las tareas domésticas, y el padre aporta el sustento mediante su trabajo. La incorporación de la mujer al mundo del trabajo ha traído consigo su independencia económica y personal.<br/><br/>Un conjunto de factores como el cambio en la concepción del matrimonio, cambios en las leyes, la independencia económica de la mujer, etc., han contribuido a que el número de separaciones y divorcios incrementen en la actualidad y esta realidad afecta a los hijos que la viven: presencian el desmoronamiento de la relación, las disputas, las dificultades en el cumplimiento de las medidas reguladoras de la separación o divorcio y no digamos los problemas derivados de la convivencia con la nueva pareja de algunos de los Padres. Ahora bien, dicho todo esto, no debemos interpretar que la separación entre las parejas es el peor mal que aqueja a los hijos. Sencillamente estamos describiendo una realidad relativamente frecuente, pero no peor que otras situaciones de convivencia de parejas que, no se deciden o no pueden romper, y se someten a situaciones destructivas moral y psicológicamente para todos los miembros de la familia.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "Si tuviéramos que indicar algunas características de las familias de hoy, podríamos afirmar que, en general:<br/><br/><ul><li>Son más permisivas en la educación de los hijos que en generaciones anteriores. ¿Qué consecuencias tiene? El principio de autoridad está deteriorado y los padres no saben, en muchos casos cómo ejercerlo, incluso dudan si es recomendable utilizarlo. </li><li>Cada vez más, las familias son menos estables y duraderas. ¿Qué consecuencias tiene? Los hijos no solamente viven la situación de deterioro o ruptura de la pareja sino que además son víctimas frecuentes del intento de llevárselos cada uno a su terreno. Como si fuesen ellos, el objeto mediador, aquel que carga con la responsabilidad de ser hijo y de unir a los padres.  </li><li>Tienen menos tiempo para dedicar a los hijos en particular, y a la convivencia familiar en general, debido fundamentalmente a motivos laborales. ¿Qué consecuencias tiene? A veces los padres intentan compensar esta falta de atención y de tiempo con bienes o recompensas de tipo material, lo que tiene repercusiones negativas a corto y largo plazo. Otra consecuencia importante es la pérdida de los momentos de comunicación, tan necesarios para la cohesión familiar y la transmisión de valores. Por último, indicar que las largas jornadas de trabajo generan estress en las personas que las sufren y éste se transmite al entorno familiar, promoviendo espacios en casa de tensión y de angustia en todos los miembros. </li></ul>"
            },
            {
                "type": "quote",
                "text": "Para estar mañana en el recuerdo de tus hijos; debes estar presente en sus vidas hoy"
            },
          ],
          "tags": [
            "Evolución De La Familia",
            "Tipos De Familia",
            "Cambios En La Familiar",
            "Crisis De Los 40",
            "Trabajo Y Familia",
            "Divorcio Y Separación"
          ]
    },
    {
        date: "2 FEB 2021",
        author: "Psique & Ser",
        title: "¿Post Covid-19?",
        excerpt: "Más allá de la pandemia, el Covid-19 dejó huellas en nuestra salud mental y emocional. Reflexionemos sobre el futuro.",
        slug: "post-22",
        image: "/Blog/post-22.png",
        "content": [
            {
                "type": "quote",
                "text": "La relación entre lo corporal y lo anímico es de acción recíproca; pero en el pasado el otro costado de esta relación, la acción de lo anímico sobre el cuerpo, halló poco favor a los ojos de los médicos - Sigmund Freud."
            },
            {
                "type": "paragraph",
                "text": "Hoy, más que antes, en la escucha de los pacientes que lamentablemente han sido infectados por el virus SARS COV 2 o perdido algún ser querido, se detecta una angustia latente de muerte, una ansiedad flotante e incluso síntomas físicos que deterioran su estado anímico.<br/><br/>Y es que, en el presente escrito, queremos hacer conscientes a las personas sobre lo vivido. Todos estamos en este barco, y nadie está exento de hundirse. Aún estamos viviendo un choque exterior, que por supuesto, termina impactando todo nuestro interior. Las medidas de salud externas ya son conocidas: lavado de manos constante, uso de cubrebocas, uso de gel antibacterial, distanciamiento social y de preferencia aislamiento. Pero ¿y la indicaciones para un cuidado interno por qué no se mencionan? Mientras más se alarga la pandemia, mayor agonía nos hunde. La angustia aflora por muchas razones reales y nadie nos dice qué debemos hacer con ella. Al parecer, esto es un pequeño reflejo de como la sociedad sigue sin prestarle la debida atención a lo que vivimos y sentimos internamente; sino que el foco está centrado en regresar a una cotidianeidad que permita tener el flujo de vida externo ya conocido.<br/><br/>Pero como mencionábamos anteriormente, los casos Post Covid en temas de salud mental aumentan, y con justa razón, no estamos hablando de una sintomatología habitual. Incluso hablamos de un virus que hemos asociado a muerte. Es una dualidad muy latente “Covid-muerte”, cuyo significado tiene tal peso que en nuestro psiquismo comienza a hacer estrategos sin haberlo presentado dentro de mi organismo. Es esa angustia latente por mi cuidado, por el cuidado del otro, de un ser querido, por la economía, por si contraigo el virus, o peor aún, por pensar cuándo voy a contraerlo y qué me pasará mientras esté presente en mí.<br/><br/>Estamos en el limbo de vivir entre el duelo y la melancolía. Entendidos estos conceptos desde la visión Freudiana. El duelo se vive y se percibe, sea real o imaginación, al saber que estamos perdiendo un objeto amado. Sin embargo, un desencadenamiento que empieza a presentarse es la melancolía, cuyo significado surge de la pérdida de un objeto, pero en el escenario no solo perdemos al objeto amado, sino también algo de nosotros se va con él y sabemos que no volverá. Es padecer por eso que no sabemos que se fue. Justo como hoy en día lo estamos sintiendo.<br/><br/>No queremos caer en una postura nihilista o catastrófica, es simplemente hacer consciente el escenario que tenemos hoy en día para, a partir de ahí, construir una línea de trabajo con uno mismo.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "Para esto, te compartimos algunas estrategias cognitivas conductuales que te ayuden a sobrellevar el panorama enunciado.<br/><br/><ul><li>Permanece en zonas seguras, aunque sean fueran de casa, que sean zonas que te brinden seguridad de estar bien. </li><li>Infórmate de la situación con fuentes fidedignas y confiables. No te satures de información, procura leer solo la que podrás tolerar. </li><li>Alterna funciones o responsabilidades estresantes con otras placenteras. </li><li>Implementa horarios flexibles en donde tengas tiempos de descanso, relajación y reflexión personal. </li><li>Escucha tus pensamientos y en lístalos. Al lado de ellos escribe de qué forma puedes cambiarlos a un pensamiento más controlado y positivo. </li><li> Redacta una bitácora o diario de cómo te sentiste en el día, tus temores, tus logros y tus expectativas.  </li><li> Mantén tu mente ocupada pero no excedas, el no querer pensar en lo que sientes, no solucionará nada. </li><li> Dibuja, escriba y proyecta tus emociones, no las guarde. </li></ul>"
            },
            {
                "type": "quote",
                "text": "Deseamos que esto pase y que pase de la mejor forma para todos."
            },
          ],
          "tags": [
            "Relación Cuerpo Mente",
            "Impacto Emocional CovidAngustia Y Ansiedad",
            "Salud Mental",
            "PostCovid",
            "Duelo Y Melancolía",
            "Construcción Personal"
          ]
    },
    {
        date: "4 ENE 2021",
        author: "Psique & Ser",
        title: "¿Un año para el olvido?",
        excerpt: "El olvido no borra, transforma. Reflexionemos sobre lo vivido y cómo nos ayuda a construir el futuro.",
        slug: "post-23",
        image: "/Blog/post-23.png",
        "content": [
            {
                "type": "paragraph",
                "text": "El psicoanálisis, en específico Sigmund Freud, fue un explorador del por qué el hombre caía en actos de repetición en su vida que lo único que provocaba era un decaimiento y sentimiento de culpa por saberse qué algo no estaba bien pero no sabía por qué lo hacía y mejor lo reprimía.<br/><br/>Años de análisis y postulados teóricos, llevaron a Freud a determinar que el ser humano tiende a la compulsión a la repetición, porque aquello que repetimos proviene de algo no elaborado o entendido de nuestro inconsciente y, que a pesar de ser angustiante y frustrante, para el inconsciente es liberador. Dicho autor propone que no debemos olvidar, porque el olvido es solo reprimir aquello que seguirá saliendo de una u otra forma. Lo que debemos hacer es, antes de olvidar y repetir, recordar para qué cuando repitamos podamos reelaborarlo o entenderlo internamente.<br/><br/>¿Por qué hablamos de una técnica psicoanalítica en este texto? Precisamente, porque tiene gran relación con nuestro título y contenido. Un año 2020 que, a nivel nacional e internacional, ha sido un año que para muchos está destinado al olvido por diversos factores, pérdidas o sufrimientos. Sin embargo, lo que te proponemos acá es que no sea un año olvidado, que sea un año recordado para que no repitamos aquello que hicimos y qué nos ayude a colocarnos en un lugar diferente y perspectiva distinta ante eso vivido, y nos ayude a poder afrontarlo o manejarlo.<br/><br/>El cambio no viene con un año nuevo, en realidad eso sería algo casual. El cambio debe provenir de uno mismo para poderlo convertir en algo causal. La diferencia entre estos dos emana en qué a lo casual le delegamos gran responsabilidad externa; suerte, fortunio, divinidad, etc. Lo causal proviene de uno mismo, de darle un sentido y un objetivo, de hacerme responsable de mis actos.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "Sin embargo, tampoco el repetir es un acto con puras connotaciones negativas. Juan David Nasio en uno de sus textos, nos menciona que existen dos tipos de repeticiones:<br/><br/><ul><li>Sana, que es aquella que busca la conservación del sujeto y de su bienestar. Por medio de esta podemos afirmar nuestra identidad y lograr que la repetición sea un acto genuino y de construcción. </li><li>Patológica, la cual nos lleva a repetir inexplicablemente nuestros errores y fracasos, con una necesidad de entrar en un círculo que no podemos entender y que llevarlo a la conciencia para elaborarlo se torna complicado. Por ejemplo, la repetición de una ruptura amorosa con muchas parejas. </li></ul>"
            },
            {
                "type": "paragraph",
                "text": "El repetir termina siendo un retorno al pasado pero esta vez, en el presente. Ante esto, te proponemos que no tires el año al olvido porque terminará siendo enterrado pero en algún momento alguien o algo lo desenterrará y todo lo guardado ahí saldrá. Permítete ver el pasado, pero con una mirada entendida y elaborada por el presente para que tú futuro se construya distinto."
            },
            {
                "type": "quote",
                "text": "Que sea un Año de salud y prosperidad para todos, con cariño especial para nuestros lectores y seguidores de Psique & Ser."
            },
          ],
          "tags": [
            "Psicoanálisis",
            "Compulsión A La Repetición",
            "Año 2020",
            "Recordar Para No Repetir",
            "Cambio Personal",
            "Repeticiones Sanas"
          ]
    },
    {
        date: "1 DIC 2020",
        author: "Psique & Ser",
        title: "Un año pandémico no es un año perdido",
        excerpt: "Cada crisis trae aprendizaje. Un año pandémico no es un año perdido, sino una oportunidad de transformación.",
        slug: "post-24",
        image: "/Blog/post-24.png",
        "content": [
            {
                "type": "quote",
                "text": "Si quieres vivir, prepárate para morir. - Sigmund Freud."
            },
            {
                "type": "paragraph",
                "text": "Vida-muerte es una dualidad que le da sentido a la vida, pero también se lo da a la muerte. Ante estos dos conceptos, el ser humano se convierte en una especie más de la cadena, y este pensar nos remonta a temores y angustias tan precarias que paralizan el curso de la vida. El saber que afuera existe un microorganismo imperceptible que amenaza en una constante con nuestra existencia y la de nuestros seres queridos, alimenta la idea de inhibirnos, de no movernos y de permanecer refugiados en espacios seguros. Sin embargo, la idea de sobrevivir sin movilizarnos, también es la muerte en vida.<br/><br/>La muerte es un pensamiento latente. ¿Quién no piensa en la muerte?, la diferencia en cómo lo vamos pensando se debe a la interpretación y elaboración que cada uno le va dando. Es convertir aquello que, dentro de mí, está hecho un nudo y que no tiene sentido, a darle forma, color y textura. A verbalizarlo y analizarlo, pero aun así la muerte sigue ahí, pegada a la vida.<br/><br/>No solo la muerte tiene sus bemoles, también la vida en sí misma los tiene. No hablamos del concepto “vida”, hablamos del cómo la vivimos. Aun a sabiendas y con demostraciones científicas de la existencia de un virus, algunos siguen viviendo como si no hubiese muerte; por lo contrario, otros viven más en la muerte que en la vida. Esto es el ser “Ser”. Sin embargo, este post no tiene como finalidad qué vida (o muerte en vida) es la correcta, porque para iniciar ¿qué es lo correcto hoy en día? El escrito busca caer en la conciencia de cada uno de los lectores de vivir lo que nos toca vivir.<br/><br/>La pandemia tiene sus polaridades, pero todo en nuestro ser también lo tiene. Hay personas que disfrutan la soledad, hay otras tantas que les atemoriza. Algunos saben vivir bajo tensión, mientras que muchos se derrumban y detonan padecimientos ante eventos estresantes. La forma en cómo afrontamos la realidad fáctica nos habla mucho de la estructura de la realidad interna de la persona. Por supuesto, no estamos afirmando que todo debe ser digerido de forma rápida, porque después de casi un año de crisis pandémica, no se ha terminado de asimilar.<br/><br/>La idea central es que para algunos, la pandemia ha sido un momento de crisis que los ha hecho replantearse su curso de vida y fortalecer proyectos, unión familiar, crecer profesionalmente, adaptarse e innovar. Mientras que a otros, les ha desencadenado malestares físicos y psíquicos, los ha derrumbado o tristemente han perdido la vida de algún ser cercano. La dualidad en la respuesta que tenemos hacia la vida y a la muerte se debe a mucho de lo que se vive y percibe afuera, pero también a gran parte de tu propio mundo interno.<br/><br/>Para ello, sería bueno que te detuvieras un poco no solo a pensar lo que está afuera, sino más en lo que está dentro. En tus pensamientos, deseos, angustias, emociones, planes o metas, familia, amistades y todo lo que te vitaliza. En todo lo que día con día nos lleva a saber que estamos con vida.<br/><br/>"
            },
          ],
          "tags": [
            "Vida Y Muerte",
            "Dualidad Existencial",
            "Miedo A La Muerte",
            "Sobrevivir VS Vivir",
            "Elaboración De La Muerte",
            "Pandemia"
          ]
    },
    {
        date: "29 SEP 2020",
        author: "Psique & Ser",
        title: "Consecuencias psicológicas en un año pandémico",
        excerpt: "La pandemia dejó huellas en nuestra mente. Reflexionemos sobre sus consecuencias psicológicas y cómo sanarlas.",
        slug: "post-25",
        image: "/Blog/post-25.png",
        "content": [
            {
                "type": "paragraph",
                "text": "Para nadie es nuevo que a partir de Febrero del presente año, un virus tuvo su llegada a nuestro país con tintes de un esparcimiento exponencial a lo largo de los meses. Aunque visiblemente no tenemos la imagen de COVID-19 como si fuese un tornado o un huracán que arrasa y se lleva todo aquello que esté en sus manos. Podemos extrapolar está imagen a algo real, porque el virus, aunque no es algo tangible y cognoscible de forma inmediata para nuestros sentidos está presente y lo está tanto que desarrolla afectaciones en el ser humano en todos los ámbitos de su vida. Quizá eso hace falta en México, un virus con consecuencias más notorias y físicas que terminen por concientizar a toda nuestra población.<br/><br/>Mucho se habla afuera de la baja considerable en la economía de nuestro país, la deficiencia en servicios de atención a la salud, desempleo, muertes y muchos otros factores más que se suman a elevar los niveles de estrés en los mexicanos. Aquí les pregunto a ustedes… ¿y dónde queda la atención a la salud mental?."
            },
            {
                "type": "paragraph",
                "text": "Es habitual que para nuestro país la idea de una atención a la salud mental ni si quiera esté materializada; sin embargo en este espacio te podemos comentar que ese tema es un factor decisivo ante como afrontas todo lo demás. ¿Te has preguntado por qué algunas personas comienzan a tener alteraciones mentales o en su estado de ánimo y tú no? Precisamente esa pregunta conlleva a una respuesta en términos de salud mental. Hoy te hablaremos de algunas de las consecuencias psicológicas que pueden desarrollarse o que se comienzan a gestar en ti y la importancia del prestar atención para reconocer y tener un manejo adecuado.<br/><br/><ul><li>Reacciones de ansiedad: tiende a ser una reacción normal a una situación de estrés excepcional, que por lo general es transitorio pero se debe mantener en observación. Algunos de los síntomas son: tensión corporal, irritabilidad, alteración en el sueño, malestares físicos, ansiedad generalizada, sudoración, etc. </li><li>Ataques de pánico: reacción a una situación de estrés que por lo general es esporádica pero con una intensidad elevada que rebasan los recursos de las personas. Algunos de los síntomas son: hiperalerta, sudoración excesiva, sofocamiento, falta de aire, inmovilización, pensamientos catastróficos, etc. </li><li>Agorafobia: reacciones de ansiedad muy similar a las antes mencionadas pero enfocadas al temor de salir de casa. </li><li>Trastorno Obsesivo Compulsivo: trastorno que puede llegar a afectar en diversos ámbitos de tu vida. Por lo general, viene acompañado de rituales de limpieza excesiva, pensamientos constantes, culpa y ansiedad generalizada. </li><li>Depresión: disminución del estado de ánimo en términos crónicos que comienza a afectar tu desenvolvimiento, pérdida de interés, alteraciones en sueño y alimentación, visión de túnel. Lo anterior puede detonarse debido a un duelo o pérdida de algún familiar por el COVID-19. </li><li>Reacciones paranoicas: pensamientos constantes y afirmativos que, en ocasiones, no tienen relación con una realidad. Se comienza a gestar una idea tan creíble para el paciente que altera todo su estado mental. Por ejemplo, el creer que todos afuera están infectados y puedo infectarme.  </li><li>Hipocondría: esa sensación internalizada de que hay algo en mi cuerpo, siento dolor o tengo el virus en mi organismo y los médicos no lo han podido detectar. Esto se puede presentar con ideas de creer en cada momento de tu actividad cotidiana que tienes algún síntoma del COVID o la afirmación de que está presente en tu organismo. </li><li>Reaparición de sintomatología ya controlada: hay síntomas que siguen latentes, ya no se han manifestado pero viven en nosotros y buscan la oportunidad perfecta para salir. El escenario pandémico, es un espacio muy oportuno para justificar su presencia. Sin embargo no caigamos en una visión nihilista de crisis existencial, la pandemia también nos ha dejado secuelas positivas: mayor organización social, concientización, empatía, solidaridad, higiene, cuidado de mí y del otro, responsabilidad social y atención e interés en mi salud. </li></ul>"
            },
            {
                "type": "paragraph",
                "text": "Si comienzas a detectar alguna sintomatología que rebase tus capacidades de afrontamiento o comienza a impedir tu desenvolvimiento, te sugerimos des un alto a tus actividades y reflexiones sobre qué sientes, qué lo propicio y que vías de soluciones tienes. Si de lo contrario, la sintomatología aumenta con el tiempo acude a un profesional de la salud."
            },
          ],
          "tags": [
            "Impacto Del COVID",
            "Salud Mental En México",
            "Consecuencias Psicológicas",
            "Ansiedad Y COVID",
            "Ataques De Pánico",
            "Agorafobia"
          ]
    },
    {
        date: "24 AGO 2020",
        author: "Psique & Ser",
        title: "Un diferente retorno a las escuelas",
        excerpt: "El regreso a clases nunca fue tan diferente. Adaptarnos a la nueva educación es un reto para estudiantes y docentes.",
        slug: "post-26",
        image: "/Blog/post-26.png",
        "content": [
            {
                "type": "quote",
                "text": "El sentido de la vida consiste solamente en el propio acto de vivir - Erich Fromm."
            },
            {
                "type": "paragraph",
                "text": "No es para nadie una sorpresa el reconocer que los niños y jóvenes movilizan al país; sin embargo la movilización para este ciclo escolar será distinta e, incluso en algunos casos, desesperanzadora. Ya está dicho, el regreso a clases será, en el caso de escuelas oficiales, a distancia; mientras que, en la mayoría de las instituciones particulares, en línea. ¿Cuál es la diferencia entre ambas?<br/><br/>La opción del gobierno es una educación a distancia, la cual implica que los alumnos decidan en qué momento quieren estudiar. Los materiales tienden a ser libros, recursos audiovisuales o multimedia. La comunicación entre el profesor se da de forma asincrónica, no es necesario estar cara a cara por medio de una plataforma e incluso la impartición de las clases se apoya en recursos como la radio y la televisión.<br/><br/>Por el otro lado, tenemos una educación en línea, la cual requiere de una plataforma virtual que permita realizar videollamadas grupales y mantener una comunicación sincrónica. Tanto alumnos, como profesores tendrán una comunicación virtual, gracias a que las clases son en vivo y esto beneficia debido a que las dudas de los estudiantes son aclaradas de forma inmediata y en tiempo real.<br/><br/>Pero no sólo es este tema del que queremos hablarles, hay otro tema que está flotando en el aire y que para algunos ya empieza a ser tangible. No, no hablamos del virus pandémico (COVID-19), hablamos de las resacas a nivel emocional: la angustia, desánimo, depresión, ansiedad, pánico, obsesiones, temor a la muerte y muchas otras que se han ido desencadenando por la duración del confinamiento.<br/><br/>"
            },
            {
                "type": "paragraph",
                "text": "Hoy nos toca como adultos, tener que ser eso, adultos. Ser seres maduros que tengan los recursos necesarios para afrontar lo venidero del exterior; y aún más madurez para aquellos que han forjado una familia y que tienen que ser escudos para ese núcleo. Nos imaginamos que la noticia de arrancar un ciclo escolar desde casa, modifica nuevamente nuestra estructura, nos arranca la ilusión del retorno a una cotidianeidad y nos agrega una doble responsabilidad. Sin embargo, para ello te sugerimos lo siguiente:<br/><br/><ul><li>Es bueno ocupar la mente en actividades, pero es aún mejor buscar momentos de reflexión personal. </li><li>Disfruta los momentos, por más pequeños que sean, que te permitan tener sensaciones placenteras y diferentes a las que se empiezan a hacer presentes durante la pandemia. </li><li>Mantente en comunicación con tus seres queridos, amigos o conocidos. </li><li>Establece metas a corto plazo y que te sean fáciles de cumplir, sin sobre exigirte.</li><li>Realiza actividades placenteras más allá de las establecidas socialmente (escuela, trabajo, etc.). </li><li>Si detectas que tu estado emocional está alterando cualquier área de tu vida, busca ayuda de un profesional de la salud. No dejes que ese sentir crezca. </li></ul>"
            },
          ],
          "tags": [
            "Educación A Distancia",
            "Educación En Línea",
            "Resacas Emocionales",
            "Ciclo Escolar En Casa",
            "Responsabilidades Parentales",
            "Reflexión Personal"
          ]
    },
    {
        date: "24 JUL 2020",
        author: "Psique & Ser",
        title: "Nuestro estado emocional ante el COVID-19",
        excerpt: "La pandemia transformó nuestras emociones. Comprender nuestro estado emocional es clave para afrontar el cambio.",
        slug: "post-27",
        image: "/Blog/post-27.png",
        "content": [
            {
                "type": "paragraph",
                "text": "Ante situaciones como la que vivimos actualmente, es probable que surja la angustia emocional como un remolino que todo lo atrapa y nos va debilitando para afrontar la problemática de forma adaptativa. Nos aprisiona desde el interior llenándonos de miedo, ansiedad, inquietud y tristeza.<br/><br/>Sin embargo, es importante no olvidarnos como seres humanos que sentimos, pensamos y actuamos; y posiblemente nos lleven a la acción del cuidado de uno mismo y de los seres queridos. Recordar que son momentos de unión familiar, reflexión personal y de buscar soluciones asertivas a las problemáticas venideras."
            },
            {
                "type": "paragraph",
                "text": "Para ello, les compartimos una serie de acciones que te protejan tu salud mental y de las personas que te rodean.<br/><br/><ul><li>Tener una estructura en casa, establecer horarios y definir actividades y espacios que permitan el desarrollo de las labores individuales.</li><li>El permanecer resguardados en casa no significa que todos deben estar juntos en todo momento. Recuerda establecer espacios personales. </li><li>No son vacaciones ni tiempo libre, establece metas pero flexibles, ya que lo vivido ha cambiado nuestras rutinas, hábitos, costumbres, forma de pensar, forma de relacionarnos, lo que nos ha obligado a fomentar estrategias de adaptación. </li><li>Sabemos que lo que se vive afuera es un panorama difícil pero es importante poder mirarnos, compartir nuestros sentimientos, pensamientos, dudas o miedos con las personas más cercanas.</li><li>Limita tus tiempos en el uso de redes sociales y medios de comunicación que puede llegar atormentarnos. Alternarlos con música, películas, lectura … </li><li>No te aísles, las emociones necesitan ser compartidas. Puedes llamar alguien, puedes escribir lo que sientes o expresarlas de una manera artística.</li><li>Es normal que en ciertos momentos te sientas enojado, frustrado, ansioso o con angustia. Sin embargo nadie tiene la culpa de lo que sientes y en la medida de lo posible debemos ser empáticos con los demás.</li></ul>"
            },
            {
                "type": "quote",
                "text": "El cambio realmente revolucionario deberá lograrse, no en el mundo externo, sino en el interior de los seres humanos - Aldous Huxley."
            },
          ],
          "tags": [
            "Cuidado De La Salud Mental",
            "Unión Familiar",
            "Reflexión Personal",
            "Soluciones Asertivas",
            "Estructura En Casa",
            "Espacios Personales"
          ]
    },
    {
        date: "2 JUL 2020",
        author: "Psique & Ser",
        title: "Lidiar con el estrés en momentos de pandemia",
        excerpt: "El estrés en tiempos de pandemia es real, pero también lo son las herramientas para enfrentarlo.",
        slug: "post-28",
        image: "/Blog/post-28.png",
        "content": [
            {
                "type": "paragraph",
                "text": "<ul><li>Es normal sentirse triste, estresado, confundido, asustado o enfadado durante una crisis. Puede ser de ayuda hablar con personas de confianza. Póngase en contacto con amigos y familiares.</li><li>Si debe permanecer en casa, mantenga un estilo de vida saludable, lo que incluye seguir una dieta adecuada, dormir, hacer ejercicio y mantener contactos sociales con sus seres queridos en casa y por correo electrónico y teléfono con otros familiares y amigos.S</li><li>No recurra al tabaco, el alcohol u otras drogas para lidiar con sus emociones. Si se siente superado por la situación, hable con un trabajador de la salud o un consejero en cuestiones de salud. Tenga un plan, sepa dónde y cómo buscar ayuda para atender sus necesidades de salud física y mental, si es necesario. </li><li>Infórmese sobre los hechos. Reúna información que le ayude a determinar con precisión su nivel de riesgo para poder tomar precauciones razonables. Busque una fuente creíble, en la que pueda confiar, como el sitio web de la OMS o una agencia de salud pública local o estatal.</li><li>Limite su nivel de preocupación y nerviosismo reduciendo el tiempo que usted y su familia pasan viendo o escuchando noticias de los medios de comunicación que les generen malestar. </li><li>Recurra a capacidades que ya haya utilizado en el pasado y le hayan ayudado a sobreponerse a las adversidades de la vida, y utilice esas capacidades para manejar sus emociones durante este difícil periodo de brote.</li></ul>"
            }
          ],
          "tags": [
            "Estilo De Vida Saludable",
            "Dieta Adecuada",
            "Sueño",
            "Ejercicio",
            "Contacto Social",
            "Apoyo Emocional"
          ]
    }
]