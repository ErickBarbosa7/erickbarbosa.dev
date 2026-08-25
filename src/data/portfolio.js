export const PORTFOLIO_DATA = {
 personalInfo: {
    name: "Erick Barbosa",
    title: "Desarrollador Full-Stack", 
    tagline: "Desarrollador Full-Stack enfocado en construir software moderno, escalable y centrado en el usuario.",
    email: "erickbarbosa.dev@gmail.com",
    phone: "415-566-5431",
    location: "San Miguel de Allende, Gto.",
    github: "https://github.com/ErickBarbosa7",
    linkedin: "https://www.linkedin.com/in/erick-barbosa-0bba10372/"
  },
  aboutMe: {
    description: "Soy un desarrollador full-stack en mi último año de Ingeniería en Sistemas, enfocado en construir software escalable y eficiente. Disfruto diseñar soluciones completas, desde la arquitectura y despliegue con Docker, hasta la creación de interfaces limpias con React y Angular. Mi experiencia abarca no solo el desarrollo técnico, sino también la gestión de equipos bajo metodologías ágiles, asegurando que el código resuelva problemas reales del negocio."
  },
  experience: [
    {
      role: "Planning Manager",
      company: "Cafe Dragon (Proyecto académico)",
      period: "Ene 2026 - Actualidad",
      description: "Liderazgo en proyecto de equipo (10 integrantes) bajo la metodología TSP (Team Software Process).",
      achievements: [
        "Coordiné la planificación de 4 sprints de 2 semanas, priorizando el backlog según dependencias críticas entre backend y frontend.",
        "Di seguimiento a la carga de trabajo mediante estimación por puntos y horas reales, reduciendo cuellos de botella.",
        "Aseguré el cumplimiento de hitos del proyecto gestionando las interacciones del equipo full-stack."
      ]
    },
    {
      role: "Desarrollador Full-Stack",
      company: "Proyecto Nestly",
      period: "Feb 2025 - Sep 2025",
      description: "Desarrollo de una plataforma web para la publicación y renta de propiedades en un equipo de 4 integrantes.",
      achievements: [
        "Desarrollé el frontend con Angular y Tailwind CSS, consumiendo una API REST construida en Laravel.",
        "Participé en el modelado y diseño de la base de datos relacional en MySQL.",
        "Implementé Docker para estandarizar el entorno de desarrollo y validé endpoints utilizando Postman."
      ]
    },
    {
      role: "Participante y Desarrollador",
      company: "Hackathon UAQ (Universidad Autónoma de Querétaro)",
      period: "Marzo 2025",
      description: "Desarrollo intensivo de software en un entorno de tiempo limitado.",
      achievements: [
        "Formé parte de un equipo multidisciplinario para crear una solución tecnológica funcional en 48 horas.",
        "Validación rápida de ideas, trabajo bajo presión y colaboración ágil."
      ]
    }
  ],
  projects: [
    {
      name: "Kyro System",
      description: "Sistema ERP moderno diseñado para gestionar costos, inventario y flujos de producción. Incluye catálogos de proveedores y configuraciones de temas dinámicos.",
      role: "Desarrollador Full-Stack",
      challenge: "La gestión de costos, inventario y producción suele estar dispersa en hojas de cálculo y herramientas aisladas, lo que genera errores y pérdida de tiempo. Construí un ERP web centralizado que unifica esos procesos en un solo sistema, con catálogos de proveedores y una interfaz personalizable mediante temas dinámicos.",
      features: [
        "Gestión de costos e inventario",
        "Control de flujos de producción",
        "Catálogo de proveedores",
        "Temas dinámicos de interfaz"
      ],
      stack: ["React", "Node.js", "Prisma", "PostgreSQL", "Docker", "Vercel"],
      stackFull: ["React", "Node.js", "Prisma ORM", "PostgreSQL", "Docker", "Vercel"],
      liveDemoUrl: "https://kyro-system.vercel.app",
      githubUrl: "https://github.com/ErickBarbosa7/Kyro-System-Front"
    },
    {
      name: "StudyHub",
      description: "Plataforma de salas de estudio colaborativas en tiempo real. Implementa comunicación bidireccional para sincronización de usuarios conectados.",
      role: "Desarrollador Full-Stack",
      challenge: "El mayor reto fue lograr que todos los usuarios dentro de una sala vieran la misma información al mismo tiempo sin recargar la página. Lo resolví implementando comunicación bidireccional con WebSockets, sincronizando en tiempo real el estado de las salas y de los usuarios conectados.",
      features: [
        "Salas de estudio colaborativas",
        "Sincronización en tiempo real con WebSockets",
        "Gestión de usuarios conectados",
        "Comunicación bidireccional cliente-servidor"
      ],
      stack: ["Flutter Web", "Node.js", "WebSockets", "MongoDB", "Render", "Netlify"],
      stackFull: ["Flutter Web", "Dart", "Node.js", "WebSockets", "MongoDB", "Render", "Netlify"],
      liveDemoUrl: "https://studyhub-live.netlify.app/",
      githubUrl: "https://github.com/ErickBarbosa7"
    },
    {
      name: "Bravo",
      description: "Plataforma de gestión de flotas diseñada para la administración de vehículos, programación de mantenimientos preventivos y control operativo de conductores.",
      role: "Desarrollador Full-Stack",
      challenge: "La administración de una flota implica controlar mantenimientos y operatividad de conductores de forma manual, lo que provoca omisiones costosas. Diseñé una plataforma centralizada que digitaliza el registro de vehículos, la programación de mantenimientos preventivos y el control operativo de conductores en un solo lugar.",
      features: [
        "Registro y administración de vehículos",
        "Programación de mantenimientos preventivos",
        "Control operativo de conductores"
      ],
      stack: ["Angular", ".NET", "MySQL", "Docker", "Render"],
      stackFull: ["Angular", "TypeScript", ".NET", "C#", "Entity Framework", "MySQL", "Docker", "Render"],
      liveDemoUrl: "",
      githubUrl: "https://github.com/ErickBarbosa7/Project-Bravo.git"
    },
    {
      name: "Meraki",
      description: "Aplicación web lúdica y editorial para el descubrimiento de palabras. Incorpora físicas de animación, efectos de audio y microservicios.",
      role: "Desarrollador Frontend",
      challenge: "El reto era crear una experiencia lúdica donde las animaciones con físicas y los efectos de audio no sacrificaran el rendimiento. Lo logré combinando animaciones ligeras con Lottie y una arquitectura de microservicios que mantiene la aplicación rápida y escalable.",
      features: [
        "Descubrimiento interactivo de palabras",
        "Animaciones con físicas integradas",
        "Efectos de audio dinámicos",
        "Arquitectura basada en microservicios"
      ],
      stack: ["React", "Vite", "Tailwind CSS", "Lottie", "Vercel"],
      stackFull: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lottie", "Howler", "Vercel"],
      liveDemoUrl: "https://getmeraki.vercel.app/",
      githubUrl: "https://github.com/ErickBarbosa7"
    },
    {
      name: "Capitán Grill",
      description: "Plataforma integral para gestión de restaurante. Combina una moderna landing page con menú digital accesible por QR, y un dashboard administrativo para el control de inventario, registro de gastos y cierres diarios de caja.",
      stack: ["React", "Vite", ".NET", "MySQL"],
      liveDemoUrl: "https://capitan-grill.vercel.app/inicio",
      githubUrl: "https://github.com/ErickBarbosa7/Capitan-Grill-Front.git",
      // --- INFO PARA EL MODAL (Opcional, pero recomendada) ---
      role: "Desarrollador Full-Stack",
      longDescription: "Una solución de extremo a extremo diseñada para un restaurante de estilo campestre. El proyecto resuelve dos necesidades: ofrecer un menú digital interactivo para los clientes mediante códigos QR, y proveer a la administración un panel seguro para gestionar las finanzas diarias, el inventario y los gastos operativos.",
      keyFeatures: [
        "Landing page promocional con menú digital integrado.",
        "Panel administrativo protegido para dueños/gerentes.",
        "Módulo de control de inventario y registro de gastos.",
        "Sistema de caja con cálculos automáticos para cierres diarios."
      ],
      extendedStack: ["React", "Vite", "Tailwind CSS", ".NET Web API", "MySQL", "Entity Framework", "Vercel"]
    },
    {
      name: "Nestly",
      description: "Plataforma de alojamiento que conecta anfitriones y huéspedes mediante una experiencia web limpia, con gestión de reservas y autenticación.",
      role: "Desarrollo de Frontend y Base de Datos",
      challenge: "En un equipo de 4 integrantes construimos una plataforma tipo marketplace para publicar y rentar propiedades. Fui responsable del frontend en Angular con Tailwind CSS consumiendo la API REST de Laravel, participé en el modelado de la base de datos relacional en MySQL y estandaricé el entorno de desarrollo del equipo con Docker.",
      features: [
        "Publicación y búsqueda de propiedades",
        "Gestión de reservas",
        "Autenticación de anfitriones y huéspedes",
        "Interfaz responsive con Tailwind CSS"
      ],
      stack: ["Angular", "Laravel", "MySQL", "Docker", "Tailwind CSS"],
      stackFull: ["Angular", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "MySQL", "Docker", "Postman"],
      liveDemoUrl: "",
      githubUrl: "https://github.com/MikeRbl/Nestly_frntd.git"
    }
  ],
  skills: {
    frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Angular"],
    backend: ["Node.js", "Laravel", "PHP", "Java", "C#", ".NET"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
    tools: ["Git", "GitHub", "Docker", "Postman", "n8n", "Figma"]
  },
  softSkills: [
    "Trabajo en equipo", 
    "Resolución de problemas",
      "Comunicación eficaz", 
      "Gestión del tiempo", 
      "Aprendizaje autónomo", 
      "Adaptabilidad", 
      "Responsabilidad",
      "Creatividad"
      
  ]
};
