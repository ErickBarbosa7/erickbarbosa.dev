# Guía de Diseño (UI/UX) para el Portafolio - Estilo Editorial con Dark Mode

## 1. Estilo Visual y Estructura Base
El diseño se basará estrictamente en la referencia visual proporcionada (estilo "Albert Flores"). Es un enfoque muy limpio, editorial y minimalista, que utiliza mucho espacio en blanco (whitespace), bordes redondeados tipo "píldora" (pill-shaped) y una combinación elegante de tipografías.

## 2. Paleta de Colores (Light & Dark Mode)
Para soportar ambos modos de manera elegante, usaremos la paleta `stone` (o neutral) de Tailwind CSS.

**Light Mode (Por Defecto):**
- **Fondo General:** Crema cálido (`bg-[#FDFBF7]` o `bg-stone-50`).
- **Superficies/Tarjetas:** Blanco puro (`bg-white`).
- **Textos Principales:** Negro suave (`text-stone-900`).
- **Textos Secundarios:** Gris neutro (`text-stone-500`).
- **Bordes:** Gris muy claro (`border-stone-200`).
- **Botón Primario:** Fondo negro (`bg-stone-900`), texto blanco (`text-white`).

**Dark Mode:**
- **Fondo General:** Gris muy oscuro (`bg-stone-950`).
- **Superficies/Tarjetas:** Gris oscuro (`bg-stone-900`).
- **Textos Principales:** Blanco cálido (`text-stone-50`).
- **Textos Secundarios:** Gris medio (`text-stone-400`).
- **Bordes:** Gris oscuro (`border-stone-800`).
- **Botón Primario:** Fondo blanco (`bg-stone-100`), texto negro (`text-stone-900`).

## 3. Tipografía (Dual)
Este diseño requiere dos familias tipográficas para lograr el efecto editorial:
- **Títulos (Headings):** Una fuente **Serif** elegante (ej. *Playfair Display*, *Lora* o *Merriweather*). Le da ese toque clásico y sofisticado a tu nombre y encabezados de sección.
- **Cuerpo y UI (Body/UI):** Una fuente **Sans-serif** muy limpia (ej. *Inter*, *DM Sans* o *Manrope*). Se usará para descripciones, roles, fechas y botones.

## 4. Elementos de la Interfaz y Arquitectura
- **Tarjetas de Experiencia (Estilo Píldora):** En lugar de tarjetas cuadradas, usar bordes completamente redondeados (`rounded-full` o `rounded-[2rem]`), con el logo a la izquierda, título al centro y fecha a la derecha.
- **Botones:** Redondeados tipo píldora (`rounded-full`). El botón primario es sólido, el secundario tiene un borde fino y fondo transparente.
- **Hero Section:** Asimétrico. Imagen cuadrada con bordes muy redondeados (`rounded-[2.5rem]`) a la izquierda junto a tu nombre y título. A la derecha, un texto más grande ("Passionate creating...") y los botones de acción.
- **Dark Mode Toggle:** Un botón en la navegación (icono de Sol/Luna de Lucide) que cambie la clase `dark` en el elemento `<html>` y guarde la preferencia en `localStorage`.

## 5. Persistencia del Tema
El estado del tema (Light/Dark) debe inicializarse leyendo el `localStorage`. Si no hay nada guardado, debe leer la preferencia del sistema operativo del usuario (`window.matchMedia('(prefers-color-scheme: dark)')`).