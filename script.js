document.addEventListener('DOMContentLoaded', () => {

    // --- MOBILE MENU TOGGLE ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- LANGUAGE SWITCHER ---
    const langEsBtn = document.getElementById('lang-es');
    const langEnBtn = document.getElementById('lang-en');

    // Translations Object
    const translations = {
        es: {
            nav_home: "Inicio",
            nav_services: "Servicios",
            nav_projects: "Proyectos",
            nav_courses: "Cursos",
            nav_about: "Quiénes Somos",
            nav_contact: "Contacto",
            nav_book: "Reservar",
            hero_title: "Transformamos la ciencia en soluciones prácticas para México y el mundo",
            hero_subtitle: "Investigación aplicada, capacitación especializada y desarrollo biotecnológico para instituciones, investigadores y estudiantes.",
            hero_cta_book: "Agendar Cita",
            hero_cta_chat: "Chat vía WhatsApp",
            card_biotech: "I+D Biotecnológico",
            card_training: "Capacitación Especializada",
            card_sustainable: "Soluciones Sustentables",
            about_split_1: "QUI",
            about_split_2: "ÉNES SOMOS",
            about_title: "Quiénes Somos",
            about_intro: "Meta Scientia, Empresa de Investigación e Innovación.",
            about_description: "Meta Scientia es una empresa dedicada al desarrollo de páginas web enfocadas en ciencias biológicas, biotecnología y enfoques de investigación científica en biotecnología. Mediante la colaboración y el desarrollo de habilidades, Meta Scientia transforma ideas científicas en resultados prácticos e impactantes.",
            about_legal: "La empresa está registrada oficialmente ante el Instituto Mexicano de la Propiedad Industrial (IMPI) con el número de registro 2945214, Clase 42, y abarca servicios científicos y tecnológicos; servicios de investigación y diseño; análisis e investigación industrial; diseño industrial; servicios de control de calidad y autenticación; y diseño y desarrollo de hardware y software.",
            about_extra_title: "Acerca de Meta Scientia",
            about_extra_text_1: "Meta Scientia, empresa de investigación e innovación, es una organización científica con sede en México, comprometida con el avance de la biotecnología, el desarrollo de productos naturales y la formación científica.",
            about_extra_text_2: "Apoyamos a investigadores, instituciones e industrias en el desarrollo de prácticas científicas y de innovación sostenibles.",
            about_vision_title: "Nuestra Visión",
            about_vision_text: "Constituir Meta Scientia como una plataforma líder en investigación e innovación en México, impulsando las ciencias de la vida y la biotecnología mediante la gestión de la investigación, la colaboración interdisciplinaria y la transformación de los descubrimientos científicos en soluciones prácticas e impactantes.",
            about_mission_title: "Nuestra Misión",
            about_mission_text: "Nuestra misión es empoderar a investigadores, estudiantes e instituciones mediante la capacitación avanzada y soluciones basadas en la investigación. Mejoramos la calidad, la visibilidad y el impacto del trabajo científico fortaleciendo las habilidades de investigación, impulsando la innovación y apoyando el desarrollo y la comercialización de productos científicos y biotecnológicos.",
            mission_title: "Nuestra Misión y Visión",
            mission_text: "Meta Scientia se dedica a avanzar en la biotecnología y la educación científica. Empoderamos a investigadores, instituciones y estudiantes con herramientas y conocimientos de vanguardia para resolver desafíos urgentes en agricultura, salud y medio ambiente.",
            achieve_pubs: "50+ Publicaciones",
            achieve_students: "1000+ Estudiantes Capacitados",
            achieve_projects: "20+ Proyectos Activos",
            founder_role: "Fundador y Científico Principal",
            founder_degrees: "PhD en Botánica (PMAS Arid Agriculture University, Rawalpindi, Pakistán)<br>PhD en Nanociencia y Nanotecnología (Cinvestav, IPN, Ciudad de México, México)",
            founder_bio: "El Dr. Amir Ali fundó Meta Scientia para empoderar a futuros innovadores e investigadores.",
            services_title: "Nuestros Servicios",
            services_subtitle: "Soluciones integrales para la comunidad científica.",
            service_1_title: "Biotecnología Vegetal",
            service_1_desc: "Cultivo de tejidos y protocolos de mejoramiento genético para la resiliencia agrícola.",
            service_2_title: "Producción de Hongos",
            service_2_desc: "Capacitación y consultoría para el cultivo industrial y artesanal de hongos.",
            service_3_title: "Desarrollo Web",
            service_3_desc: "Diseño y desarrollo de sitios web especializados en ciencias biológicas y biotecnología.",
            service_4_title: "Bioinformática",
            service_4_desc: "Análisis de datos y descubrimiento de fármacos utilizando biología computacional.",
            service_5_title: "Redacción Científica",
            service_5_desc: "Asistencia en la preparación de manuscritos, edición y estrategia de publicación.",
            service_6_title: "Programas Internacionales",
            service_6_desc: "Fomento de la colaboración global y programas de intercambio para investigadores.",
            learn_more: "Aprender Más",
            projects_title: "Proyectos e Investigación",
            projects_subtitle: "Explorando las fronteras de la ciencia.",
            courses_title: "Cursos y Talleres",
            courses_subtitle: "Empoderando a la próxima generación de científicos.",
            course_1_badge: "En Línea",
            course_1_title: "PCR y Biología Molecular",
            duration_label_1: "Duración: ",
            duration_label_11: " 4 semanas",
            course_1_desc: "Domina los fundamentos de la Reacción en Cadena de la Polimerasa.",
            enroll_btn: "Inscribirse Ahora",
            course_2_badge: "Híbrido",
            course_2_title: "Masterclass de Redacción Científica",
            duration_label_2: "Duración: ",
            duration_label_21: " 2 semanas",
            course_2_desc: "Aprende a escribir artículos de investigación de alto impacto.",
            course_3_badge: "Presencial",
            course_3_title: "Cultivo de Hongos",
            duration_label_3: "Duración: ",
            duration_label_31: " 3 días",
            course_3_desc: "Taller práctico para el cultivo de hongos comestibles.",
            testimonials_title: "Lo Que Dicen Nuestros Estudiantes",
            testimonial_1: "\"El curso de PCR cambió el juego para mi trabajo de tesis. ¡Muy recomendado!\"",
            testimonial_1_cite: "- Maria G., Estudiante de PhD",
            testimonial_2: "\"Excelentes instructores y material práctico. Publiqué mi primer artículo gracias a su guía.\"",
            testimonial_2_cite: "- Carlos R., Investigador",
            contact_title: "Ponte en Contacto",
            contact_subtitle: "Colaboremos en tu próximo proyecto.",
            label_name: "Nombre Completo",
            label_email: "Correo Electrónico",
            label_inquiry: "Tipo de Consulta",
            option_general: "Consulta General",
            option_services: "Servicios",
            option_courses: "Cursos",
            option_collaboration: "Colaboración",
            label_message: "Mensaje",
            btn_send: "Enviar Mensaje",
            quick_access_text: "O contáctanos directamente:",
            schedule_call: "Agendar Llamada",
            footer_slogan: "Transformando la ciencia en soluciones.",
            footer_quicklinks: "Enlaces Rápidos",
            footer_legal: "Legal",
            footer_privacy: "Política de Privacidad",
            footer_terms: "Términos de Servicio",
            footer_newsletter: "Boletín",
            placeholder_email: "Tu correo",
            btn_subscribe: "Suscribirse",
            footer_copyright: "&copy; 2023 Meta Scientia. Todos los derechos reservados.",

            // Bioinformatics Page
            bio_title: "Bioinformatics",
            bio_tagline: "Bioinformática y Descubrimiento Computacional de Fármacos",
            bio_about_title: "Sobre este servicio",
            bio_about_text: "En Meta Scientia, aprovechamos el poder de la bioinformática avanzada y la biología computacional para acelerar la innovación científica, optimizar los resultados de investigación y apoyar el desarrollo de fármacos en los sectores académico, industrial y clínico. Nuestra experiencia integra herramientas computacionales de vanguardia con profundos conocimientos biológicos para ayudar a nuestros clientes a interpretar conjuntos de datos complejos, descubrir nuevos candidatos terapéuticos y tomar decisiones de investigación basadas en datos.",
            bio_offer_title: "¿Qué ofrecemos?",
            bio_feat_1_title: "Descubrimiento Computacional de Fármacos.",
            bio_feat_1_desc: "Ofrecemos soluciones integrales de descubrimiento de fármacos in silico, que incluyen:",
            bio_feat_1_li_1: "Cribado virtual de bibliotecas de compuestos naturales y sintéticos",
            bio_feat_1_li_2: "Acoplamiento molecular para predecir interacciones compuesto-diana",
            bio_feat_1_li_3: "Simulaciones de dinámica molecular (MD) para la estabilidad y el perfil de interacción",
            bio_feat_1_li_4: "Predicción de ADMET y similitud con fármacos",
            bio_feat_1_li_5: "Identificación y validación de dianas",
            bio_feat_2_title: "Análisis de Datos Bioinformáticos.",
            bio_feat_2_desc: "Transformamos datos biológicos sin procesar en información científica práctica. Nuestros servicios incluyen:",
            bio_feat_2_li_1: "Análisis de datos ómicos (metabolómica, genómica)",
            bio_feat_2_li_2: "Alineamiento y anotación de secuencias",
            bio_feat_2_li_3: "Análisis filogenético",
            bio_feat_2_li_4: "Análisis de redes y vías biológicas",
            bio_feat_2_li_5: "Descubrimiento de patrones basado en aprendizaje automático",
            bio_feat_2_li_6: "Todos los análisis se entregan con visualizaciones claras, interpretaciones y resultados listos para publicar.",
            bio_feat_3_title: "Desarrollo y automatización de flujos de trabajo científicos",
            bio_feat_3_desc: "Diseñamos procesos computacionales personalizados, adaptados a las necesidades de su proyecto:",
            bio_feat_3_li_1: "Flujos de trabajo automatizados para el procesamiento de datos",
            bio_feat_3_li_2: "Procesos de cribado de alto rendimiento",
            bio_feat_3_li_3: "Sistemas bioinformáticos reproducibles y escalables",
            bio_feat_3_li_4: "Esto ayuda a investigadores y empresas a aumentar la eficiencia y mantener la calidad de la investigación.",
            bio_feat_4_title: "Capacitación y desarrollo de capacidades",
            bio_feat_4_desc: "Meta Scientia también ofrece programas de capacitación para:",
            bio_feat_4_li_1: "Herramientas bioinformáticas (BLAST, Clustal, MEGA, Cytoscape)",
            bio_feat_4_li_2: "Software de descubrimiento de fármacos (AutoDock, Schrödinger, PyRx, GROMACS, VMD, ChimeraX)",
            bio_feat_4_li_3: "Interpretación y visualización de datos ómicos",
            bio_feat_4_li_4: "La capacitación puede impartirse en línea o presencialmente, de forma individual o grupal.",
            bio_why_title: "¿Por qué elegir Meta Scientia?",
            bio_why_text_1: "Experiencia en diseño computacional de fármacos, modelado molecular y bioinformática de productos naturales.",
            bio_why_text_2: "Análisis listos para publicación en revistas, tesis e informes de la industria.",
            bio_why_text_3: "Entrega rápida, alta precisión y flujos de trabajo de proyectos personalizables.",
            bio_why_text_4: "Ideal para estudiantes, universidades, empresas biotecnológicas y laboratorios de investigación.",
            sidebar_interested_title: "¿Interesado en este servicio?",
            sidebar_interested_text: "Contáctanos para más información y cotizaciones personalizadas.",
            sidebar_contact_btn: "Contactar",
            sidebar_related_title: "Servicios Relacionados",

            // International Programs Page
            intl_title: "Programa Global de Estudios y Becas para el Éxito",
            intl_tagline: "Fomento de la colaboración global y programas de intercambio para investigadores.",
            intl_about_title: "Sobre este servicio",
            intl_about_text: "En Meta Scientia, nos comprometemos no solo a impulsar la investigación científica y la innovación, sino también a apoyar a la próxima generación de académicos e investigadores para que alcancen sus sueños académicos en el extranjero. Nuestro Programa de Capacitación en Estudios y Becas Internacionales guía a los estudiantes paso a paso a través del complejo proceso de solicitud de admisión a universidades de todo el mundo y la obtención de becas competitivas.",
            intl_offer_title: "¿Qué ofrecemos?",
            intl_feat_1_title: "Orientación Personalizada para Estudios en el Extranjero",
            intl_feat_1_desc: "Ayudamos a los estudiantes a identificar los mejores países, universidades y programas según su formación académica, intereses y objetivos profesionales.",
            intl_feat_1_strong: "Incluye:",
            intl_feat_1_li_1: "Selección de país/programa",
            intl_feat_1_li_2: "Coordinación con profesores/laboratorios",
            intl_feat_1_li_3: "Identificación de programas con financiación completa (Maestría/Doctorado)",
            intl_feat_2_title: "Capacitación para la Solicitud de Becas",
            intl_feat_2_li_1: "Cómo preparar un CV competitivo",
            intl_feat_2_li_2: "Cómo redactar carta de motivación (SOP)",
            intl_feat_2_li_3: "Propuestas de investigación",
            intl_feat_2_li_4: "Contacto con supervisores",
            intl_feat_2_li_5: "Documentación para becas",
            intl_feat_2_li_6: "Simulacros de entrevista",
            intl_feat_3_title: "Apoyo con la Documentación de Admisión",
            intl_feat_3_li_1: "Formato de CV",
            intl_feat_3_li_2: "Redacción del POE",
            intl_feat_3_li_3: "Ensayos",
            intl_feat_3_li_4: "Propuestas de investigación",
            intl_feat_3_li_5: "Plantillas de recomendaciones",
            intl_feat_3_li_6: "Correcciones",
            intl_feat_4_title: "Desarrollo del perfil de investigación",
            intl_feat_4_li_1: "Escritura científica",
            intl_feat_4_li_2: "Artículos de revisión",
            intl_feat_4_li_3: "Planificación de proyectos",
            intl_feat_4_li_4: "Apoyo para publicaciones",
            intl_feat_4_li_5: "Portafolio académico",
            intl_feat_4_li_6: "Capacitación para conferencias",
            intl_feat_5_title: "Estrategia de correo electrónico para profesores",
            intl_feat_5_li_1: "Cómo buscar supervisores",
            intl_feat_5_li_2: "Escribir correos profesionales",
            intl_feat_5_li_3: "Expresar interés",
            intl_feat_5_li_4: "Seguimiento",
            intl_feat_5_li_5: "Enviar CV/propuesta correctamente",
            intl_feat_6_title: "Orientación para visas y prepartida",
            intl_feat_6_li_1: "Asesoría de visa",
            intl_feat_6_li_2: "Checklist de documentos",
            intl_feat_6_li_3: "Orientación financiera",
            intl_feat_6_li_4: "Preparación de viaje",
            intl_feat_6_li_5: "Adaptación cultural",
            intl_why_title: "¿Por qué elegir Meta Scientia?",
            intl_why_text: "Mentores con experiencia internacional, logros en becas competitivas, formación personalizada, acompañamiento completo, alta tasa de éxito y servicios accesibles.",
            intl_ideal_title: "Ideal para:",
            intl_ideal_li_1: "Estudiantes de pregrado aplicando a maestría",
            intl_ideal_li_2: "Estudiantes de maestría aplicando a doctorado financiado",
            intl_ideal_li_3: "Investigadores buscando postdoctorado",
            intl_ideal_li_4: "Primera generación universitaria",
            intl_ideal_li_5: "Cualquier persona que busque éxito académico internacional.",

            // Mushroom Production Page
            mush_title: "Producción de hongos",
            mush_tagline: "Capacitación y consultoría para el cultivo industrial y artesanal de hongos.",
            mush_about_title: "Sobre este servicio",
            mush_about_text: "La producción de hongos comestibles representa una oportunidad excepcional para el desarrollo sustentable, la seguridad alimentaria y la generación de ingresos. Ofrecemos capacitación integral y asesoría técnica para proyectos de cultivo de hongos.",
            mush_offer_title: "¿Qué ofrecemos?",
            mush_feat_1: "Talleres Prácticos de Cultivo de Hongos",
            mush_feat_2: "Diseño de Instalaciones de Producción",
            mush_feat_3: "Desarrollo de Sustratos Optimizados",
            mush_feat_4: "Control de Calidad y Sanidad",
            mush_feat_5: "Estrategias de Comercialización",
            mush_benefits_title: "Beneficios",
            mush_benefits_text: "Nuestros programas de capacitación han ayudado a emprendedores, comunidades rurales y empresas a establecer operaciones exitosas de cultivo de hongos, generando ingresos sostenibles y contribuyendo a la seguridad alimentaria.",

            // Plant Tissue Culture Page
            ptc_title: "Cultivo de tejidos vegetales",
            ptc_tagline: "Cultivo Avanzado de Tejidos Vegetales y Biofábrica de Metabolitos",
            ptc_about_title: "Sobre este servicio",
            ptc_about_text: "Meta Scientia se especializa en tecnologías modernas de cultivo de tejidos vegetales para producir plántulas de élite, uniformes y libres de contaminación. Integramos protocolos innovadores para la producción de biomasa y fitoquímicos a gran escala, con el respaldo de un equipo que ya ha estandarizado estos métodos para garantizar alta calidad y reproducibilidad. Ofrecemos soluciones sostenibles para las industrias farmacéutica, nutracéutica y cosmética mediante la generación de biomasa vegetal y metabolitos consistentes y de alta pureza mediante micropropagación, cultivo de callos y sistemas de biorreactores controlados.",
            ptc_offer_title: "¿Qué ofrecemos?",
            ptc_feat_1_title: "Calidad",
            ptc_feat_1_desc: "Materiales vegetales estandarizados, libres de patógenos y genéticamente estables, que garantizan fiabilidad y pureza para aplicaciones industriales.",
            ptc_feat_2_title: "Rendimiento",
            ptc_feat_2_desc: "Optimización del crecimiento vegetal y acumulación de metabolitos mediante técnicas avanzadas de cultivo de tejidos y sistemas rentables.",
            ptc_feat_3_title: "Rentabilidad",
            ptc_feat_3_desc: "Producción escalable de compuestos bioactivos de alto valor, que impulsa las formulaciones comerciales y la innovación industrial.",
            ptc_feat_4_title: "Protocolo de Productos",
            ptc_feat_4_desc: "Caralluma, Stevia, Papa, Silybum marianum, Plátano, Fresa, Oliva, etc.",
            ptc_meta_title: "Acerca de Meta Scientia",
            ptc_meta_text_1: "Un enfoque clave de Meta Scientia es el cultivo de tejidos vegetales, brindando soluciones avanzadas para la producción a gran escala de plantas de alto valor y sus metabolitos bioactivos. Mediante tecnologías in vitro de vanguardia, como la micropropagación, cultivos de callos y suspensiones celulares, y estrategias de mejora de metabolitos, apoyamos a las industrias farmacéutica, nutracéutica y cosmética con compuestos vegetales confiables, libres de contaminantes y estandarizados.",
            ptc_meta_text_2: "Meta Scientia también ofrece experiencia en gestión de investigación, comunicación académica, consultoría biotecnológica, capacitación en innovación y transferencia de tecnología.",
            ptc_meta_text_3: "Nuestra misión es promover la excelencia científica, fortalecer la capacidad de investigación y acelerar la comercialización de descubrimientos científicos para un impacto global.",
            ptc_services_title: "Servicios",
            ptc_services_subtitle: "Consultoría y capacitación para laboratorios de cultivo de tejidos",
            ptc_services_desc: "Impulsando la biotecnología vegetal moderna mediante la orientación experta y el desarrollo práctico de capacidades.",
            ptc_serv_1_title: "Establecimiento y optimización de laboratorios de cultivo de tejidos",
            ptc_serv_1_desc: "Orientamos a nuestros clientes en la instalación de instalaciones de cultivo de tejidos completamente funcionales.",
            ptc_serv_1_li_1: "Diseño de la distribución del laboratorio (sala de medios, sala de cultivo, sala de crecimiento, área de esterilización)",
            ptc_serv_1_li_2: "Selección de equipos ajustados al presupuesto y los objetivos del proyecto",
            ptc_serv_1_li_3: "Procedimientos operativos estándar (POE) para flujos de trabajo libres de contaminación",
            ptc_serv_1_li_4: "Planes de formulación de medios para diferentes especies",
            ptc_serv_1_li_5: "Capacitación en técnicas asépticas",
            ptc_serv_2_title: "Capacitación en Micropropagación y Producción de Biomasa",
            ptc_serv_2_desc: "Ofrecemos capacitación práctica para la propagación eficiente y la producción de biomasa vegetal.",
            ptc_serv_2_li_1: "Iniciación de explantos (hojas, nudos, rizomas, meristemos)",
            ptc_serv_2_li_2: "Inducción y proliferación de callos",
            ptc_serv_2_li_3: "Organogénesis de brotes y raíces",
            ptc_serv_2_li_4: "Multiplicación a gran escala en cámara de crecimiento",
            ptc_serv_2_li_5: "Técnicas de aclimatación para transferencia a invernadero",
            ptc_serv_3_title: "Mejora de Metabolitos y Producción Fitoquímica",
            ptc_serv_3_desc: "Desarrollo de sistemas de cultivo de tejidos para metabolitos secundarios.",
            ptc_serv_3_li_1: "Selección de callos y líneas celulares de alto rendimiento",
            ptc_serv_3_li_2: "Estrategias de elicitación (bióticos/abióticos)",
            ptc_serv_3_li_3: "Enfoques de alimentación de precursores",
            ptc_serv_3_li_4: "Optimización de luz, nutrientes y hormonas",
            ptc_serv_3_li_5: "Flujos de trabajo a pequeña escala sin biorreactores",
            ptc_serv_3_li_6: "Protocolos de extracción y perfilado LC-MS",
            ptc_serv_3_li_7: "Producción de alcaloides, flavonoides, fenólicos y terpenoides",
            ptc_serv_4_title: "Resolución de problemas y control de calidad",
            ptc_serv_4_desc: "Apoyo continuo para asegurar el correcto funcionamiento del laboratorio.",
            ptc_serv_4_li_1: "Detección y eliminación de contaminación",
            ptc_serv_4_li_2: "Resolución de problemas de disminución de cultivos",
            ptc_serv_4_li_3: "Optimización de reguladores de crecimiento",
            ptc_serv_4_li_4: "Análisis y registro de datos",
            ptc_serv_4_li_5: "Control de calidad para investigación e industria",
            ptc_serv_5_title: "Desarrollo de capacidades y capacitación del personal",
            ptc_serv_5_desc: "Programas de formación estructurados para diferentes perfiles.",
            ptc_serv_5_li_1: "Estudiantes",
            ptc_serv_5_li_2: "Técnicos de laboratorio",
            ptc_serv_5_li_3: "Investigadores",
            ptc_serv_5_li_4: "Emprendedores y fundadores de empresas agrotech",
            ptc_serv_5_li_5: "Técnicas fundamentales y avanzadas",
            ptc_serv_6_title: "Áreas de aplicación",
            ptc_serv_6_desc: "Apoyamos a laboratorios que trabajan en:",
            ptc_serv_6_li_1: "Plantas medicinales y aromáticas",
            ptc_serv_6_li_2: "Producción de materias primas fitofarmacéuticas",
            ptc_serv_6_li_3: "Ingredientes cosméticos y para cuidado de la piel",
            ptc_serv_6_li_4: "Conservación de cultivos valiosos y especies raras",
            ptc_serv_6_li_5: "Investigación académica y laboratorios de formación",

            // Scientific Writing Page
            sw_title: "Consultoría de Redacción de Artículos de Investigación y Publicaciones",
            sw_tagline: "Transformando la Investigación en Publicaciones Científicas de Alto Impacto.",
            sw_about_title: "Sobre este servicio",
            sw_about_text: "En Meta Scientia, ofrecemos servicios de consultoría especializados para apoyar a investigadores, laboratorios, universidades y socios de la industria en la producción de publicaciones científicas de alta calidad. Nuestra experiencia abarca todo el proceso, desde la investigación hasta la publicación, ayudando a nuestros clientes a superar los desafíos de la redacción, mejorar la comunicación científica y publicar con éxito en revistas internacionales de prestigio.",
            sw_offer_title: "¿Qué ofrecemos?",
            sw_feat_1_title: "Redacción y edición de artículos de investigación.",
            sw_feat_1_desc: "Nuestro equipo de redacción científica ayuda a redactar manuscritos claros, concisos e impactantes, incluyendo:",
            sw_feat_1_li_1: "Artículos de investigación completos",
            sw_feat_1_li_2: "Artículos de revisión",
            sw_feat_1_li_3: "Comunicaciones breves",
            sw_feat_1_li_4: "Revisiones sistemáticas y metaanálisis",
            sw_feat_1_li_5: "Capítulos de libros",
            sw_feat_1_li_6: "Garantizamos:",
            sw_feat_1_li_7: "Precisión científica",
            sw_feat_1_li_8: "Estructura lógica",
            sw_feat_1_li_9: "Mejor legibilidad",
            sw_feat_1_li_10: "Narrativa de investigación sólida",
            sw_feat_1_li_11: "Formato específico para la revista",
            sw_feat_2_title: "Selección de revistas y asistencia para el envío de artículos.",
            sw_feat_2_desc: "Ayudamos a nuestros clientes a identificar revistas con:",
            sw_feat_2_li_1: "Alta relevancia para su investigación.",
            sw_feat_2_li_2: "Factor de impacto adecuado.",
            sw_feat_2_li_3: "Tasas de aceptación razonables.",
            sw_feat_2_li_4: "Plazos de publicación rápidos.",
            sw_feat_2_desc_2: "También asistimos con:",
            sw_feat_2_li_5: "Preparación de cartas de presentación.",
            sw_feat_2_li_6: "Formato del portal de envío de artículos.",
            sw_feat_2_li_7: "Respuesta a los comentarios de los revisores",
            sw_feat_3_title: "Análisis y visualización de datos",
            sw_feat_3_desc: "Apoyamos el análisis estadístico y computacional, incluyendo:",
            sw_feat_3_li_1: "Depuración e interpretación de datos.",
            sw_feat_3_li_2: "Gráficos, figuras y tablas.",
            sw_feat_3_li_3: "Pruebas estadísticas.",
            sw_feat_3_li_4: "Soporte bioinformático (opcional para ciertos proyectos).",
            sw_feat_3_li_5: "Todos los elementos visuales tienen calidad de publicación.",
            sw_feat_4_title: "Comprobación de plagio y mejora del lenguaje",
            sw_feat_4_desc: "Nuestro equipo garantiza que su manuscrito:",
            sw_feat_4_li_1: "Está libre de plagio",
            sw_feat_4_li_2: "Está escrito en inglés científico profesional",
            sw_feat_4_li_3: "Tiene una gramática sólida",
            sw_feat_4_li_4: "Está listo para su envío",
            sw_feat_5_title: "Diseño de investigación y apoyo metodológico",
            sw_feat_5_desc: "Si es necesario, asesoramos a nuestros clientes para fortalecer:",
            sw_feat_5_li_1: "Diseño experimental",
            sw_feat_5_li_2: "Formulación de hipótesis",
            sw_feat_5_li_3: "Variables, tamaño de muestra, réplicas",
            sw_feat_5_li_4: "Selección de controles",
            sw_feat_5_li_5: "Flujos de trabajo analíticos",
            sw_feat_5_li_6: "Esto mejora la calidad del artículo y su impacto científico.",
            sw_feat_6_title: "Estrategia de Publicación y Mejora del Impacto",
            sw_feat_6_desc: "Ayudamos a los investigadores a:",
            sw_feat_6_li_1: "Mejorar el potencial de citación",
            sw_feat_6_li_2: "Identificar oportunidades de colaboración",
            sw_feat_6_li_3: "Posicionar su trabajo para una alta visibilidad",
            sw_feat_6_li_4: "Incrementar el impacto científico de sus hallazgos",
            sw_beneficiaries_title: "¿Quién puede beneficiarse?",
            sw_ben_li_1: "Estudiantes de doctorado y maestría",
            sw_ben_li_2: "Laboratorios de investigación",
            sw_ben_li_3: "Empresas emergentes y de I+D",
            sw_ben_li_4: "Instituciones públicas y privadas",
            sw_ben_li_5: "Científicos independientes",
            sw_mission_text: "Nuestra misión es empoderar a los investigadores mejorando la comunicación científica, la calidad de las publicaciones y el impacto global de la investigación mediante servicios de consultoría profesional y ética.",
            sw_why_title: "¿Por qué elegir Meta Scientia?",
            sw_why_li_1: "Equipo de expertos con procesos estandarizados",
            sw_why_li_2: "Nuestro equipo ha desarrollado protocolos estandarizados y reproducibles para la redacción científica, edición y orientación de publicaciones de alta calidad, garantizando una excelencia constante.",
            sw_why_li_3: "Experiencia en diversas disciplinas",
            sw_support_title: "Apoyamos publicaciones en:",
            sw_supp_li_1: "Biotecnología vegetal",
            sw_supp_li_2: "Nanociencia y nanotecnología",
            sw_supp_li_3: "Farmacología",
            sw_supp_li_4: "Ciencia vegetal",
            sw_supp_li_5: "Biología del cáncer",
            sw_supp_li_6: "Microbiología",
            sw_supp_li_7: "Agricultura",
            sw_supp_li_8: "Ciencias ambientales",
            sw_expert_title: "Equipo de expertos con procesos estandarizados",
            sw_expert_li_1: "Nuestro equipo ha desarrollado protocolos estandarizados y reproducibles para la redacción científica, edición y orientación de publicaciones de alta calidad, garantizando una excelencia constante.",
            sw_expert_li_2: "Experiencia en diversas disciplinas",
            sw_expert_li_3: "Apoyamos publicaciones en:",
            sw_expert_li_4: "Apoyo integral",
            sw_expert_li_5: "Desde la preparación inicial del manuscrito hasta la carta de aceptación final, le guiamos en cada paso.",

            // Web Development Page
            web_title: "Desarrollo Web",
            web_tagline: "Soluciones digitales especializadas para ciencia, biotecnología e innovación.",
            web_about_title: "Sobre este servicio",
            web_about_text: "En Meta Scientia desarrollamos plataformas web diseñadas específicamente para el ámbito científico y biotecnológico. Creamos sitios web profesionales, responsivos y técnicamente confiables que comunican investigación, fortalecen la presencia institucional y apoyan la divulgación científica y tecnológica.",
            web_offer_title: "¿Qué ofrecemos?",
            web_feat_1: "Diseño Enfocado a Ciencia y Biotecnología",
            web_feat_1_desc: "Sitios web con identidad científica, visualmente profesionales y alineados a estándares académicos, industriales y de innovación.",
            web_feat_2: "Desarrollo Responsivo y Escalable",
            web_feat_2_desc: "Arquitecturas modernas que funcionan perfectamente en cualquier dispositivo y pueden crecer junto a sus proyectos, laboratorios o instituciones.",
            web_feat_3: "Soluciones Personalizadas para Investigación",
            web_feat_3_desc: "Sitios orientados a laboratorios, grupos de investigación, empresas biotecnológicas, proyectos científicos, divulgación y transferencia tecnológica.",
            web_feat_4: "Integración de Contenidos Especializados",
            web_feat_4_desc: "Estructuración de información científica, secciones técnicas, proyectos, publicaciones, certificaciones, patentes y evidencia de impacto.",
            web_benefits_title: "Beneficios",
            web_benefits_text: "Convertimos su trabajo científico en una presencia digital sólida, clara y confiable. Un sitio web profesional mejora la visibilidad, refuerza credibilidad y facilita colaboración, posicionamiento institucional y alcance internacional."
        },
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_courses: "Courses",
            nav_about: "Who We Are",
            nav_contact: "Contact",
            nav_book: "Book",
            hero_title: "We transform science into practical solutions for Mexico and the world",
            hero_subtitle: "Applied research, specialized training, and biotechnological development for institutions, researchers, and students.",
            hero_cta_book: "Book a Consultation",
            hero_cta_chat: "WhatsApp Chat",
            card_biotech: "Biotech R&D",
            card_training: "Specialized Training",
            card_sustainable: "Sustainable Solutions",
            about_split_1: "WHO",
            about_split_2: " WE ARE",
            about_title: "Who We Are",
            about_intro: "Meta Scientia, Research and Innovation Company.",
            about_description: "Meta Scientia is a company dedicated to the development of web pages focused on biological sciences, biotechnology, and scientific research approaches in biotechnology. Through collaboration and skills development, Meta Scientia transforms scientific ideas into practical and impactful results.",
            about_legal: "The company is officially registered with the Mexican Institute of Industrial Property (IMPI) under registration number 2945214, Class 42, covering scientific and technological services; research and design services; industrial analysis and research; industrial design; quality control and authentication services; and hardware and software design and development.",
            about_extra_title: "About Meta Scientia",
            about_extra_text_1: "Meta Scientia, a research and innovation company, is a scientific organization based in Mexico, committed to the advancement of biotechnology, natural product development, and scientific training.",
            about_extra_text_2: "We support researchers, institutions, and industries in the development of sustainable scientific and innovation practices.",
            about_vision_title: "Our Vision",
            about_vision_text: "To establish Meta Scientia as a leading research and innovation platform in Mexico, driving life sciences and biotechnology through research management, interdisciplinary collaboration, and the transformation of scientific discoveries into practical and impactful solutions.",
            about_mission_title: "Our Mission",
            about_mission_text: "Our mission is to empower researchers, students, and institutions through advanced training and research-based solutions. We improve the quality, visibility, and impact of scientific work by strengthening research skills, driving innovation, and supporting the development and commercialization of scientific and biotechnological products.",
            mission_title: "Our Mission & Vision",
            mission_text: "Meta Scientia is dedicated to advancing biotechnology and scientific education. We empower researchers, institutions, and students with cutting-edge tools and knowledge to solve pressing challenges in agriculture, health, and the environment.",
            achieve_pubs: "50+ Publications",
            achieve_students: "1000+ Students Trained",
            achieve_projects: "20+ Active Projects",
            founder_role: "Founder & Lead Scientist",
            founder_degrees: "PhD in Botany (PMAS Arid Agriculture University, Rawalpindi, Pakistan)<br>PhD in Nanoscience & Nanotechnology (Cinvestav, IPN, Mexico City, Mexico)",
            founder_bio: "Dr. Amir Ali founded Meta Scientia to empower future innovators and researchers.",
            services_title: "Our Services",
            services_subtitle: "Comprehensive solutions for the scientific community.",
            service_1_title: "Plant Tissue Culture",
            service_1_desc: "Tissue culture and genetic improvement protocols for agricultural resilience.",
            service_2_title: "Mushroom Production",
            service_2_desc: "Training and consultancy for industrial and artisanal mushroom cultivation.",
            service_3_title: "Web Development",
            service_3_desc: "Design and development of specialized websites for biological sciences and biotechnology.",
            service_4_title: "Bioinformatics",
            service_4_desc: "Data analysis and drug discovery pipelines using computational biology.",
            service_5_title: "Scientific Writing",
            service_5_desc: "Assistance with manuscript preparation, editing, and publication strategy.",
            service_6_title: "International Programs",
            service_6_desc: "Fostering global collaboration and exchange programs for researchers.",
            learn_more: "Learn More",
            projects_title: "Projects & Research",
            projects_subtitle: "Exploring the frontiers of science.",
            courses_title: "Courses & Workshops",
            courses_subtitle: "Empowering the next generation of scientists.",
            course_1_badge: "Online",
            course_1_title: "PCR & Molecular Biology",
            duration_label_1: "Duration:",
            duration_label_11: " 4 weeks",
            course_1_desc: "Master the fundamentals of Polymerase Chain Reaction.",
            enroll_btn: "Enroll Now",
            course_2_badge: "Hybrid",
            course_2_title: "Scientific Writing Masterclass",
            duration_label_2: "Duration:",
            duration_label_21: " 2 weeks",
            course_2_desc: "Learn to write high-impact research papers.",
            course_3_badge: "In-Person",
            course_3_title: "Mushroom Cultivation",
            duration_label_3: "Duration:",
            duration_label_31: " 3 days",
            course_3_desc: "Hands-on workshop for growing edible fungi.",
            testimonials_title: "What Our Students Say",
            testimonial_1: "\"The PCR course was a game-changer for my thesis work. Highly recommended!\"",
            testimonial_1_cite: "- Maria G., PhD Student",
            testimonial_2: "\"Excellent instructors and practical material. I published my first paper thanks to their guidance.\"",
            testimonial_2_cite: "- Carlos R., Researcher",
            contact_title: "Get in Touch",
            contact_subtitle: "Let's collaborate on your next project.",
            label_name: "Full Name",
            label_email: "Email Address",
            label_inquiry: "Type of Inquiry",
            option_general: "General Inquiry",
            option_services: "Services",
            option_courses: "Courses",
            option_collaboration: "Collaboration",
            label_message: "Message",
            btn_send: "Send Message",
            quick_access_text: "Or contact us directly:",
            schedule_call: "Schedule Call",
            footer_slogan: "Transforming science into solutions.",
            footer_quicklinks: "Quick Links",
            footer_legal: "Legal",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            footer_newsletter: "Newsletter",
            placeholder_email: "Your email",
            btn_subscribe: "Subscribe",
            footer_copyright: "&copy; 2023 Meta Scientia. All rights reserved.",

            // Bioinformatics Page
            bio_title: "Bioinformatics",
            bio_tagline: "Bioinformatics and Computational Drug Discovery",
            bio_about_title: "About this service",
            bio_about_text: "At Meta Scientia, we harness the power of advanced bioinformatics and computational biology to accelerate scientific innovation, optimize research outcomes, and support drug development in academic, industrial, and clinical sectors. Our expertise integrates cutting-edge computational tools with deep biological insights to help our clients interpret complex datasets, discover new therapeutic candidates, and make data-driven research decisions.",
            bio_offer_title: "What do we offer?",
            bio_feat_1_title: "Computational Drug Discovery.",
            bio_feat_1_desc: "We offer comprehensive in silico drug discovery solutions, including:",
            bio_feat_1_li_1: "Virtual screening of natural and synthetic compound libraries",
            bio_feat_1_li_2: "Molecular docking to predict compound-target interactions",
            bio_feat_1_li_3: "Molecular dynamics (MD) simulations for stability and interaction profiling",
            bio_feat_1_li_4: "ADMET prediction and drug-likeness",
            bio_feat_1_li_5: "Target identification and validation",
            bio_feat_2_title: "Bioinformatics Data Analysis.",
            bio_feat_2_desc: "We transform raw biological data into actionable scientific insights. Our services include:",
            bio_feat_2_li_1: "Omics data analysis (metabolomics, genomics)",
            bio_feat_2_li_2: "Sequence alignment and annotation",
            bio_feat_2_li_3: "Phylogenetic analysis",
            bio_feat_2_li_4: "Biological network and pathway analysis",
            bio_feat_2_li_5: "Machine learning-based pattern discovery",
            bio_feat_2_li_6: "All analyses are delivered with clear visualizations, interpretations, and publication-ready results.",
            bio_feat_3_title: "Scientific Workflow Development & Automation",
            bio_feat_3_desc: "We design custom computational pipelines tailored to your project needs:",
            bio_feat_3_li_1: "Automated data processing workflows",
            bio_feat_3_li_2: "High-throughput screening pipelines",
            bio_feat_3_li_3: "Reproducible and scalable bioinformatics systems",
            bio_feat_3_li_4: "This helps researchers and companies increase efficiency and maintain research quality.",
            bio_feat_4_title: "Training & Capacity Building",
            bio_feat_4_desc: "Meta Scientia also offers training programs for:",
            bio_feat_4_li_1: "Bioinformatics tools (BLAST, Clustal, MEGA, Cytoscape)",
            bio_feat_4_li_2: "Drug discovery software (AutoDock, Schrödinger, PyRx, GROMACS, VMD, ChimeraX)",
            bio_feat_4_li_3: "Omics data interpretation and visualization",
            bio_feat_4_li_4: "Training can be delivered online or in-person, individually or in groups.",
            bio_why_title: "Why Choose Meta Scientia?",
            bio_why_text_1: "Expertise in computational drug design, molecular modeling, and natural product bioinformatics.",
            bio_why_text_2: "Analyses ready for journal publication, theses, and industry reports.",
            bio_why_text_3: "Fast delivery, high accuracy, and customizable project workflows.",
            bio_why_text_4: "Ideal for students, universities, biotech companies, and research labs.",
            sidebar_interested_title: "Interested in this service?",
            sidebar_interested_text: "Contact us for more information and personalized quotes.",
            sidebar_contact_btn: "Contact Us",
            sidebar_related_title: "Related Services",

            // International Programs Page
            intl_title: "Global Study and Scholarship Program for Success",
            intl_tagline: "Fostering global collaboration and exchange programs for researchers.",
            intl_about_title: "About this service",
            intl_about_text: "At Meta Scientia, we are committed not only to driving scientific research and innovation but also to supporting the next generation of scholars and researchers in achieving their academic dreams abroad. Our International Studies and Scholarship Training Program guides students step-by-step through the complex process of applying for admission to universities worldwide and securing competitive scholarships.",
            intl_offer_title: "What do we offer?",
            intl_feat_1_title: "Personalized Guidance for Study Abroad",
            intl_feat_1_desc: "We help students identify the best countries, universities, and programs based on their academic background, interests, and career goals.",
            intl_feat_1_strong: "Includes:",
            intl_feat_1_li_1: "Country/program selection",
            intl_feat_1_li_2: "Coordination with professors/labs",
            intl_feat_1_li_3: "Identification of fully funded programs (Master's/PhD)",
            intl_feat_2_title: "Scholarship Application Training",
            intl_feat_2_li_1: "How to prepare a competitive CV",
            intl_feat_2_li_2: "How to write a Statement of Purpose (SOP)",
            intl_feat_2_li_3: "Research proposals",
            intl_feat_2_li_4: "Contacting supervisors",
            intl_feat_2_li_5: "Scholarship documentation",
            intl_feat_2_li_6: "Interview mock sessions",
            intl_feat_3_title: "Admission Documentation Support",
            intl_feat_3_li_1: "CV formatting",
            intl_feat_3_li_2: "SOP writing",
            intl_feat_3_li_3: "Essays",
            intl_feat_3_li_4: "Research proposals",
            intl_feat_3_li_5: "Recommendation templates",
            intl_feat_3_li_6: "Corrections",
            intl_feat_4_title: "Research Profile Development",
            intl_feat_4_li_1: "Scientific writing",
            intl_feat_4_li_2: "Review articles",
            intl_feat_4_li_3: "Project planning",
            intl_feat_4_li_4: "Publication support",
            intl_feat_4_li_5: "Academic portfolio",
            intl_feat_4_li_6: "Conference training",
            intl_feat_5_title: "Email Strategy for Professors",
            intl_feat_5_li_1: "How to search for supervisors",
            intl_feat_5_li_2: "Writing professional emails",
            intl_feat_5_li_3: "Expressing interest",
            intl_feat_5_li_4: "Follow-up",
            intl_feat_5_li_5: "Sending CV/proposal correctly",
            intl_feat_6_title: "Visa and Pre-departure Orientation",
            intl_feat_6_li_1: "Visa counseling",
            intl_feat_6_li_2: "Document checklist",
            intl_feat_6_li_3: "Financial guidance",
            intl_feat_6_li_4: "Travel preparation",
            intl_feat_6_li_5: "Cultural adaptation",
            intl_why_title: "Why Choose Meta Scientia?",
            intl_why_text: "Mentors with international experience, achievements in competitive scholarships, personalized training, full accompaniment, high success rate, and accessible services.",
            intl_ideal_title: "Ideal for:",
            intl_ideal_li_1: "Undergraduate students applying for Master's",
            intl_ideal_li_2: "Master's students applying for funded PhD",
            intl_ideal_li_3: "Researchers looking for Postdoc",
            intl_ideal_li_4: "First-generation university students",
            intl_ideal_li_5: "Anyone seeking international academic success.",

            // Mushroom Production Page
            mush_title: "Mushroom Production",
            mush_tagline: "Training and consultancy for industrial and artisanal mushroom cultivation.",
            mush_about_title: "About this service",
            mush_about_text: "Edible mushroom production represents an exceptional opportunity for sustainable development, food security, and income generation. We offer comprehensive training and technical advice for mushroom cultivation projects.",
            mush_offer_title: "What do we offer?",
            mush_feat_1: "Practical Mushroom Cultivation Workshops",
            mush_feat_2: "Production Facility Design",
            mush_feat_3: "Optimized Substrate Development",
            mush_feat_4: "Quality Control and Sanitation",
            mush_feat_5: "Marketing Strategies",
            mush_benefits_title: "Benefits",
            mush_benefits_text: "Our training programs have helped entrepreneurs, rural communities, and companies establish successful mushroom cultivation operations, generating sustainable income and contributing to food security.",

            // Plant Tissue Culture Page
            ptc_title: "Plant Tissue Culture",
            ptc_tagline: "Advanced Plant Tissue Culture and Metabolite Biofactory",
            ptc_about_title: "About this service",
            ptc_about_text: "Meta Scientia specializes in modern plant tissue culture technologies to produce elite, uniform, and contamination-free seedlings. We integrate innovative protocols for large-scale biomass and phytochemical production, backed by a team that has already standardized these methods to ensure high quality and reproducibility. We offer sustainable solutions for the pharmaceutical, nutraceutical, and cosmetic industries through the generation of consistent, high-purity plant biomass and metabolites via micropropagation, callus culture, and controlled bioreactor systems.",
            ptc_offer_title: "What do we offer?",
            ptc_feat_1_title: "Quality",
            ptc_feat_1_desc: "Standardized plant materials, pathogen-free and genetically stable, ensuring reliability and purity for industrial applications.",
            ptc_feat_2_title: "Yield",
            ptc_feat_2_desc: "Optimization of plant growth and metabolite accumulation through advanced tissue culture techniques and cost-effective systems.",
            ptc_feat_3_title: "Profitability",
            ptc_feat_3_desc: "Scalable production of high-value bioactive compounds, driving commercial formulations and industrial innovation.",
            ptc_feat_4_title: "Product Protocol",
            ptc_feat_4_desc: "Caralluma, Stevia, Potato, Silybum marianum, Banana, Strawberry, Olive, etc.",
            ptc_meta_title: "About Meta Scientia",
            ptc_meta_text_1: "A key focus of Meta Scientia is plant tissue culture, providing advanced solutions for the large-scale production of high-value plants and their bioactive metabolites. Through cutting-edge in vitro technologies such as micropropagation, callus cultures, and cell suspensions, and metabolite enhancement strategies, we support the pharmaceutical, nutraceutical, and cosmetic industries with reliable, contaminant-free, and standardized plant compounds.",
            ptc_meta_text_2: "Meta Scientia also offers expertise in research management, academic communication, biotechnology consulting, innovation training, and technology transfer.",
            ptc_meta_text_3: "Our mission is to promote scientific excellence, strengthen research capacity, and accelerate the commercialization of scientific discoveries for global impact.",
            ptc_services_title: "Services",
            ptc_services_subtitle: "Consulting and training for tissue culture laboratories",
            ptc_services_desc: "Driving modern plant biotechnology through expert guidance and practical capacity building.",
            ptc_serv_1_title: "Establishment and optimization of tissue culture laboratories",
            ptc_serv_1_desc: "We guide our clients in setting up fully functional tissue culture facilities.",
            ptc_serv_1_li_1: "Lab layout design (media room, culture room, growth room, sterilization area)",
            ptc_serv_1_li_2: "Equipment selection adjusted to budget and project goals",
            ptc_serv_1_li_3: "Standard Operating Procedures (SOPs) for contamination-free workflows",
            ptc_serv_1_li_4: "Media formulation plans for different species",
            ptc_serv_1_li_5: "Training in aseptic techniques",
            ptc_serv_2_title: "Training in Micropropagation and Biomass Production",
            ptc_serv_2_desc: "We offer practical training for efficient propagation and plant biomass production.",
            ptc_serv_2_li_1: "Explant initiation (leaves, nodes, rhizomes, meristems)",
            ptc_serv_2_li_2: "Callus induction and proliferation",
            ptc_serv_2_li_3: "Shoot and root organogenesis",
            ptc_serv_2_li_4: "Large-scale multiplication in growth chamber",
            ptc_serv_2_li_5: "Acclimatization techniques for greenhouse transfer",
            ptc_serv_3_title: "Metabolite Enhancement and Phytochemical Production",
            ptc_serv_3_desc: "Development of tissue culture systems for secondary metabolites.",
            ptc_serv_3_li_1: "Selection of high-yielding callus and cell lines",
            ptc_serv_3_li_2: "Elicitation strategies (biotic/abiotic)",
            ptc_serv_3_li_3: "Precursor feeding approaches",
            ptc_serv_3_li_4: "Optimization of light, nutrients, and hormones",
            ptc_serv_3_li_5: "Small-scale workflows without bioreactors",
            ptc_serv_3_li_6: "Extraction protocols and LC-MS profiling",
            ptc_serv_3_li_7: "Production of alkaloids, flavonoids, phenolics, and terpenoids",
            ptc_serv_4_title: "Troubleshooting and Quality Control",
            ptc_serv_4_desc: "Ongoing support to ensure proper lab operation.",
            ptc_serv_4_li_1: "Contamination detection and elimination",
            ptc_serv_4_li_2: "Troubleshooting culture decline issues",
            ptc_serv_4_li_3: "Growth regulator optimization",
            ptc_serv_4_li_4: "Data analysis and recording",
            ptc_serv_4_li_5: "Quality control for research and industry",
            ptc_serv_5_title: "Capacity Building and Staff Training",
            ptc_serv_5_desc: "Structured training programs for different profiles.",
            ptc_serv_5_li_1: "Students",
            ptc_serv_5_li_2: "Lab technicians",
            ptc_serv_5_li_3: "Researchers",
            ptc_serv_5_li_4: "Entrepreneurs and agrotech founders",
            ptc_serv_5_li_5: "Fundamental and advanced techniques",
            ptc_serv_6_title: "Application Areas",
            ptc_serv_6_desc: "We support laboratories working on:",
            ptc_serv_6_li_1: "Medicinal and aromatic plants",
            ptc_serv_6_li_2: "Production of phytopharmaceutical raw materials",
            ptc_serv_6_li_3: "Cosmetic and skincare ingredients",
            ptc_serv_6_li_4: "Conservation of valuable crops and rare species",
            ptc_serv_6_li_5: "Academic research and training labs",

            // Scientific Writing Page
            sw_title: "Research Article Writing and Publication Consultancy",
            sw_tagline: "Transforming Research into High-Impact Scientific Publications.",
            sw_about_title: "About this service",
            sw_about_text: "At Meta Scientia, we offer specialized consulting services to support researchers, laboratories, universities, and industry partners in producing high-quality scientific publications. Our expertise spans the entire process, from research to publication, helping our clients overcome writing challenges, improve scientific communication, and successfully publish in prestigious international journals.",
            sw_offer_title: "What do we offer?",
            sw_feat_1_title: "Research Article Writing and Editing",
            sw_feat_1_desc: "Our scientific writing team helps draft clear, concise, and impactful manuscripts, including:",
            sw_feat_1_li_1: "Full research articles",
            sw_feat_1_li_2: "Review articles",
            sw_feat_1_li_3: "Short communications",
            sw_feat_1_li_4: "Systematic reviews and meta-analyses",
            sw_feat_1_li_5: "Book chapters",
            sw_feat_1_li_6: "We guarantee:",
            sw_feat_1_li_7: "Scientific accuracy",
            sw_feat_1_li_8: "Logical structure",
            sw_feat_1_li_9: "Improved readability",
            sw_feat_1_li_10: "Strong research narrative",
            sw_feat_1_li_11: "Journal-specific formatting",
            sw_feat_2_title: "Journal Selection and Submission Assistance",
            sw_feat_2_desc: "We help our clients identify journals with:",
            sw_feat_2_li_1: "High relevance to their research.",
            sw_feat_2_li_2: "Appropriate impact factor.",
            sw_feat_2_li_3: "Reasonable acceptance rates.",
            sw_feat_2_li_4: "Fast publication timelines.",
            sw_feat_2_desc_2: "We also assist with:",
            sw_feat_2_li_5: "Cover letter preparation.",
            sw_feat_2_li_6: "Submission portal formatting.",
            sw_feat_2_li_7: "Response to reviewer comments",
            sw_feat_3_title: "Data Analysis and Visualization",
            sw_feat_3_desc: "We support statistical and computational analysis, including:",
            sw_feat_3_li_1: "Data cleaning and interpretation.",
            sw_feat_3_li_2: "Graphs, figures, and tables.",
            sw_feat_3_li_3: "Statistical tests.",
            sw_feat_3_li_4: "Bioinformatics support (optional for certain projects).",
            sw_feat_3_li_5: "All visual elements are publication-quality.",
            sw_feat_4_title: "Plagiarism Check and Language Improvement",
            sw_feat_4_desc: "Our team ensures your manuscript:",
            sw_feat_4_li_1: "Is plagiarism-free",
            sw_feat_4_li_2: "Is written in professional scientific English",
            sw_feat_4_li_3: "Has solid grammar",
            sw_feat_4_li_4: "Is ready for submission",
            sw_feat_5_title: "Research Design and Methodological Support",
            sw_feat_5_desc: "If needed, we advise our clients to strengthen:",
            sw_feat_5_li_1: "Experimental design",
            sw_feat_5_li_2: "Hypothesis formulation",
            sw_feat_5_li_3: "Variables, sample size, replicates",
            sw_feat_5_li_4: "Control selection",
            sw_feat_5_li_5: "Analytical workflows",
            sw_feat_5_li_6: "This improves article quality and scientific impact.",
            sw_feat_6_title: "Publication Strategy and Impact Enhancement",
            sw_feat_6_desc: "We help researchers to:",
            sw_feat_6_li_1: "Improve citation potential",
            sw_feat_6_li_2: "Identify collaboration opportunities",
            sw_feat_6_li_3: "Position their work for high visibility",
            sw_feat_6_li_4: "Increase the scientific impact of their findings",
            sw_beneficiaries_title: "Who can benefit?",
            sw_ben_li_1: "PhD and Master's students",
            sw_ben_li_2: "Research laboratories",
            sw_ben_li_3: "Startups and R&D companies",
            sw_ben_li_4: "Public and private institutions",
            sw_ben_li_5: "Independent scientists",
            sw_mission_text: "Our mission is to empower researchers by improving scientific communication, publication quality, and the global impact of research through professional and ethical consulting services.",
            sw_why_title: "Why choose Meta Scientia?",
            sw_why_li_1: "Team of experts with standardized processes",
            sw_why_li_2: "Our team has developed standardized and reproducible protocols for scientific writing, editing, and high-quality publication guidance, ensuring consistent excellence.",
            sw_why_li_3: "Expertise in diverse disciplines",
            sw_support_title: "We support publications in:",
            sw_supp_li_1: "Plant tissue culture",
            sw_supp_li_2: "Nanoscience and nanotechnology",
            sw_supp_li_3: "Pharmacology",
            sw_supp_li_4: "Plant science",
            sw_supp_li_5: "Cancer biology",
            sw_supp_li_6: "Microbiology",
            sw_supp_li_7: "Agriculture",
            sw_supp_li_8: "Environmental sciences",
            sw_expert_title: "Team of experts with standardized processes",
            sw_expert_li_1: "Our team has developed standardized and reproducible protocols for scientific writing, editing, and high-quality publication guidance, ensuring consistent excellence.",
            sw_expert_li_2: "Expertise in diverse disciplines",
            sw_expert_li_3: "We support publications in:",
            sw_expert_li_4: "Comprehensive support",
            sw_expert_li_5: "From initial manuscript preparation to the final acceptance letter, we guide you every step of the way.",

            // Web Development Page
            web_title: "Web Development",
            web_tagline: "Specialized digital solutions for science, biotechnology, and innovation.",
            web_about_title: "About this service",
            web_about_text: "At Meta Scientia, we develop web platforms specifically designed for the scientific and biotechnological field. We create professional, responsive, and technically reliable websites that communicate research, strengthen institutional presence, and support scientific and technological outreach.",
            web_offer_title: "What do we offer?",
            web_feat_1: "Science & Biotech Focused Design",
            web_feat_1_desc: "Websites with scientific identity, visually professional and aligned with academic, industrial, and innovation standards.",
            web_feat_2: "Responsive & Scalable Development",
            web_feat_2_desc: "Modern architectures that work perfectly on any device and can grow along with your projects, labs, or institutions.",
            web_feat_3: "Custom Solutions for Research",
            web_feat_3_desc: "Sites oriented towards labs, research groups, biotech companies, scientific projects, outreach, and technology transfer.",
            web_feat_4: "Specialized Content Integration",
            web_feat_4_desc: "Structuring of scientific information, technical sections, projects, publications, certifications, patents, and impact evidence.",
            web_benefits_title: "Benefits",
            web_benefits_text: "We transform your scientific work into a solid, clear, and reliable digital presence. A professional website improves visibility, reinforces credibility, and facilitates collaboration, institutional positioning, and international reach."
        }
    };

    function setLanguage(lang) {
        // Save to localStorage
        localStorage.setItem('preferredLanguage', lang);

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update active state
        if (lang === 'es') {
            if (langEsBtn) langEsBtn.classList.add('active');
            if (langEnBtn) langEnBtn.classList.remove('active');
        } else {
            if (langEnBtn) langEnBtn.classList.add('active');
            if (langEsBtn) langEsBtn.classList.remove('active');
        }
    }

    // Initialize Language
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(savedLang);

    if (langEsBtn && langEnBtn) {
        langEsBtn.addEventListener('click', () => setLanguage('es'));
        langEnBtn.addEventListener('click', () => setLanguage('en'));
    }

    // --- PROJECTS SLIDER ---
    const sliderWrapper = document.getElementById('projects-slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;
    // Check if slides exist to avoid errors
    const totalSlides = slides.length;
    let slideInterval;

    function updateSlider() {
        if (sliderWrapper) {
            sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;

            // Handle Video Playback: Reset and Play active, Pause others
            slides.forEach((slide, index) => {
                const video = slide.querySelector('video');
                if (video) {
                    if (index === currentSlide) {
                        video.currentTime = 0;
                        video.play().catch(e => console.log("Video auto-play blocked or error:", e));
                    } else {
                        video.pause();
                    }
                }
            });
        }
    }

    function nextSlide() {
        if (totalSlides > 0) {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }
    }

    function prevSlide() {
        if (totalSlides > 0) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
    }

    // Controls
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetTimer();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetTimer();
        });
    }

    // Autoplay
    function startTimer() {
        if (totalSlides > 0) {
            // Prevent multiple intervals
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 2000); // 2 seconds
        }
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // Pause on hover
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', () => clearInterval(slideInterval));
        sliderWrapper.addEventListener('mouseleave', startTimer);

        // Initialize
        startTimer();
    }

    // --- TESTIMONIAL SLIDER (Simple Fade) ---
    const testimonials = document.querySelectorAll('.testimonial-slide');
    let currentTestimonial = 0;

    function rotateTestimonials() {
        if (testimonials.length > 0) {
            testimonials[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            testimonials[currentTestimonial].classList.add('active');
        }
    }

    if (testimonials.length > 0) {
        setInterval(rotateTestimonials, 6000);
    }

    // --- FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Simple validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            const inputs = [name, email, message];

            inputs.forEach(input => {
                const formGroup = input.parentElement;
                if (!input.value.trim()) {
                    formGroup.classList.add('error');
                    isValid = false;
                } else {
                    formGroup.classList.remove('error');
                }
            });

            // Email format check
            if (email.value.trim() && !validateEmail(email.value)) {
                email.parentElement.classList.add('error');
                isValid = false;
            }

            if (isValid) {
                alert('Thank you! Your message has been sent.');
                contactForm.reset();
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // --- SMOOTH SCROLLING FOR ANCHOR LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileBtn.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });

    });













});



