import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  X,
} from 'lucide-react';
import { GithubIcon } from './icons';

const ProjectModal = ({ project, images = [], portrait = false, onClose }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  // Respaldo por si pasas un solo array de stack
  const stackList = project.stackFull || project.extendedStack || project.stack || [];

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (total > 1 && event.key === 'ArrowLeft') {
        setIndex((current) => (current - 1 + total) % total);
      }
      if (total > 1 && event.key === 'ArrowRight') {
        setIndex((current) => (current + 1) % total);
      }
    };

    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, total]);

  const goPrev = () => setIndex((current) => (current - 1 + total) % total);
  const goNext = () => setIndex((current) => (current + 1) % total);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-md sm:p-6 lg:p-8"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(event) => event.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl dark:bg-stone-900"
      >
        {/* Encabezado Fijo (Sticky) */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-stone-100 bg-white/95 px-6 py-5 backdrop-blur-sm dark:border-stone-800 dark:bg-stone-900/95 sm:px-8">
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-50 sm:text-3xl">
              {project.name}
            </h2>
            {project.role && (
              <span className="hidden rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300 sm:inline-block">
                {project.role}
              </span>
            )}
          </div>
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar detalles"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-900 dark:bg-stone-800 dark:hover:bg-stone-700 dark:hover:text-white"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Contenedor Scrollable Principal */}
        <div className="overflow-y-auto px-6 py-8 sm:px-8">
          
          {/* Galería (Arriba del todo para mayor impacto visual) */}
          {total > 0 && (
            <div className="group relative mb-10 flex h-[250px] w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-stone-50 dark:bg-stone-950 sm:h-[350px] lg:h-[400px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`h-full w-full ${
                    portrait ? 'object-contain' : 'object-cover'
                  }`}
                  alt={`${project.name} - Captura ${index + 1}`}
                />
              </AnimatePresence>

              {total > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Imagen anterior"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-sm backdrop-blur transition-transform hover:scale-105 dark:bg-stone-800/90 dark:text-white"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Imagen siguiente"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-sm backdrop-blur transition-transform hover:scale-105 dark:bg-stone-800/90 dark:text-white"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
              {/* Indicador de imagen (Ej: 1 / 3) */}
              {total > 1 && (
                <div className="absolute bottom-4 rounded-full bg-stone-900/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {index + 1} / {total}
                </div>
              )}
            </div>
          )}

          {/* Grid de Contenido (Dos columnas en pantallas grandes) */}
          <div className="grid gap-10 lg:grid-cols-3">
            
            {/* Columna Izquierda: Descripciones y Detalles (Ocupa 2/3) */}
            <div className="space-y-8 lg:col-span-2">
              <section>
                <h3 className="mb-3 font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                  Sobre el proyecto
                </h3>
                <p className="leading-relaxed text-stone-600 dark:text-stone-400">
                  {project.longDescription || project.challenge || project.description}
                </p>
              </section>

              {project.features && project.features.length > 0 && (
                <section>
                  <h3 className="mb-4 font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                    Características clave
                  </h3>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400"
                      >
                        <div className="mt-0.5 flex shrink-0 items-center justify-center rounded-full bg-stone-100 p-1 dark:bg-stone-800">
                          <Check size={12} className="text-stone-900 dark:text-stone-100" />
                        </div>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Columna Derecha: Stack y Enlaces (Ocupa 1/3) */}
            <div className="space-y-8">
              <section>
                <h3 className="mb-4 font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                  Tecnologías
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stackList.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs text-stone-600 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {(project.liveDemoUrl || project.githubUrl) && (
                <section className="pt-4 lg:border-t lg:border-stone-100 lg:dark:border-stone-800">
                  <div className="flex flex-col gap-3">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
                      >
                        <ExternalLink size={16} /> Ver sitio web
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-transparent px-5 py-2.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-white"
                      >
                        <GithubIcon size={16} /> Ver código
                      </a>
                    )}
                  </div>
                </section>
              )}
            </div>
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;