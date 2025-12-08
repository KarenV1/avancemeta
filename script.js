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
            nav_about: "Nosotros",
            nav_contact: "Contacto",
            nav_book: "Reservar",
            hero_title: "Transformamos la ciencia en soluciones prácticas para México y el mundo",
            hero_subtitle: "Investigación aplicada, capacitación especializada y desarrollo biotecnológico para instituciones, investigadores y estudiantes.",
            hero_cta_book: "Agendar Cita",
            hero_cta_chat: "Chat vía WhatsApp",
            card_biotech: "I+D Biotecnológico",
            card_training: "Capacitación Especializada",
            card_sustainable: "Soluciones Sustentables",
            about_title: "Quiénes Somos",
            about_subtitle: "Cerrando la brecha entre el descubrimiento científico y la aplicación en el mundo real.",
            mission_title: "Nuestra Misión y Visión",
            mission_text: "Meta Scientia se dedica a avanzar en la biotecnología y la educación científica. Empoderamos a investigadores, instituciones y estudiantes con herramientas y conocimientos de vanguardia para resolver desafíos urgentes en agricultura, salud y medio ambiente.",
            achieve_pubs: "50+ Publicaciones",
            achieve_students: "1000+ Estudiantes Capacitados",
            achieve_projects: "20+ Proyectos Activos",
            founder_role: "Fundador y Científico Principal",
            services_title: "Nuestros Servicios",
            services_subtitle: "Soluciones integrales para la comunidad científica.",
            service_1_title: "Biotecnología Vegetal",
            service_1_desc: "Cultivo de tejidos y protocolos de mejoramiento genético para la resiliencia agrícola.",
            service_2_title: "Producción de Hongos",
            service_2_desc: "Capacitación y consultoría para el cultivo industrial y artesanal de hongos.",
            service_3_title: "Productos Herbales",
            service_3_desc: "Desarrollo y estandarización de productos fitofarmacéuticos.",
            service_4_title: "Bioinformática",
            service_4_desc: "Análisis de datos y descubrimiento de fármacos utilizando biología computacional.",
            service_5_title: "Redacción Científica",
            service_5_desc: "Asistencia en la preparación de manuscritos, edición y estrategia de publicación.",
            service_6_title: "Programas Internacionales",
            service_6_desc: "Fomento de la colaboración global y programas de intercambio para investigadores.",
            learn_more: "Aprender Más",
            projects_title: "Proyectos e Investigación",
            projects_subtitle: "Explorando las fronteras de la ciencia.",
            slide_1_title: "Análisis Genético Avanzado",
            slide_1_desc: "Mapeo de genomas para cultivos resistentes a la sequía.",
            slide_2_title: "Agricultura Sustentable",
            slide_2_desc: "Implementación de biofertilizantes en comunidades rurales.",
            slide_3_title: "Colaboración Internacional",
            slide_3_desc: "Presentación de hallazgos en cumbres globales de biotecnología.",
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
            footer_copyright: "&copy; 2023 Meta Scientia. Todos los derechos reservados."
        },
        en: {
            nav_home: "Home",
            nav_services: "Services",
            nav_projects: "Projects",
            nav_courses: "Courses",
            nav_about: "About",
            nav_contact: "Contact",
            nav_book: "Book",
            hero_title: "We transform science into practical solutions for Mexico and the world",
            hero_subtitle: "Applied research, specialized training, and biotechnological development for institutions, researchers, and students.",
            hero_cta_book: "Book a Consultation",
            hero_cta_chat: "WhatsApp Chat",
            card_biotech: "Biotech R&D",
            card_training: "Specialized Training",
            card_sustainable: "Sustainable Solutions",
            about_title: "Who We Are",
            about_subtitle: "Bridging the gap between scientific discovery and real-world application.",
            mission_title: "Our Mission & Vision",
            mission_text: "Meta Scientia is dedicated to advancing biotechnology and scientific education. We empower researchers, institutions, and students with cutting-edge tools and knowledge to solve pressing challenges in agriculture, health, and the environment.",
            achieve_pubs: "50+ Publications",
            achieve_students: "1000+ Students Trained",
            achieve_projects: "20+ Active Projects",
            founder_role: "Founder & Lead Scientist",
            services_title: "Our Services",
            services_subtitle: "Comprehensive solutions for the scientific community.",
            service_1_title: "Plant Biotechnology",
            service_1_desc: "Tissue culture and genetic improvement protocols for agricultural resilience.",
            service_2_title: "Mushroom Production",
            service_2_desc: "Training and consultancy for industrial and artisanal mushroom cultivation.",
            service_3_title: "Herbal Products",
            service_3_desc: "Development and standardization of phytopharmaceutical products.",
            service_4_title: "Bioinformatics",
            service_4_desc: "Data analysis and drug discovery pipelines using computational biology.",
            service_5_title: "Scientific Writing",
            service_5_desc: "Assistance with manuscript preparation, editing, and publication strategy.",
            service_6_title: "International Programs",
            service_6_desc: "Fostering global collaboration and exchange programs for researchers.",
            learn_more: "Learn More",
            projects_title: "Projects & Research",
            projects_subtitle: "Exploring the frontiers of science.",
            slide_1_title: "Advanced Genetic Analysis",
            slide_1_desc: "Mapping genomes for drought-resistant crops.",
            slide_2_title: "Sustainable Agriculture",
            slide_2_desc: "Implementing bio-fertilizers in rural communities.",
            slide_3_title: "International Collaboration",
            slide_3_desc: "Presenting findings at global biotech summits.",
            courses_title: "Courses & Workshops",
            courses_subtitle: "Empowering the next generation of scientists.",
            course_1_badge: "Online",
            course_1_title: "PCR & Molecular Biology",
            duration_label_1: "Duration:",
            duration_label_11: "4 weeks",
            course_1_desc: "Master the fundamentals of Polymerase Chain Reaction.",
            enroll_btn: "Enroll Now",
            course_2_badge: "Hybrid",
            course_2_title: "Scientific Writing Masterclass",
            duration_label_2: "Duration: ",
            duration_label_21: "2 weeks",
            course_2_desc: "Learn to write high-impact research papers.",
            course_3_badge: "In-Person",
            course_3_title: "Mushroom Cultivation",
            duration_label_3: "Duration: ",
            duration_label_31: "3 days",
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
            footer_copyright: "&copy; 2023 Meta Scientia. All rights reserved."
        }
    };

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update active state
        if (lang === 'es') {
            langEsBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langEsBtn.classList.remove('active');
        }
    }

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
            slideInterval = setInterval(nextSlide, 5000); // 5 seconds
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











    VANTA.CELLS({
        el: "#hero",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x8c8c,
        color2: 0xf2e735,
        size: 1.5,
        speed: 1
    })

});



