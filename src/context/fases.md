# Fases de Desarrollo del Portafolio

## Fase 1: Configuración Inicial e Infraestructura (Día 1)
- Inicializar el proyecto base: `npm create vite@latest portafolio -- --template react-ts`
- Instalar Tailwind CSS y configurar el archivo `tailwind.config.js`.
- Configurar la fuente principal e instalar dependencias auxiliares (`lucide-react`, `framer-motion`).
- Crear la arquitectura de carpetas: `/components`, `/assets`, `/data`, `/hooks`.

## Fase 2: Construcción del Layout y Componentes Base (Días 2-3)
- Desarrollar el componente de navegación (`Navbar`) con anclas para *smooth scrolling*.
- Construir la sección de bienvenida (`HeroSection`).
- Preparar los contenedores globales para asegurar que el diseño sea *responsive* (adaptable a móviles y escritorio).

## Fase 3: Integración de Contenidos (Días 4-5)
- Crear un archivo de configuración (ej. `data/portfolio.ts`) para centralizar textos, experiencia y proyectos. Esto facilita actualizaciones futuras sin tocar los componentes.
- Desarrollar la sección de experiencia integrando los roles de desarrollo y gestión de planificación.
- Programar las tarjetas de proyectos (`ProjectCard`), asegurando un diseño limpio para las imágenes y las etiquetas de tecnologías.

## Fase 4: Refinamiento Visual y Animaciones (Día 6)
- Implementar animaciones de entrada con Framer Motion (elementos que aparecen suavemente al hacer scroll hacia abajo).
- Ajustar márgenes, paletas de colores y tipografía fina mediante utilidades de Tailwind.
- Auditar el contraste y la legibilidad en modo oscuro.

## Fase 5: Pruebas y Despliegue (Día 7)
- Ejecutar Google Lighthouse en local para verificar métricas de rendimiento, accesibilidad y SEO.
- Configurar el repositorio de GitHub.
- Conectar el repositorio con la plataforma de Vercel para activar el despliegue continuo (CI/CD).