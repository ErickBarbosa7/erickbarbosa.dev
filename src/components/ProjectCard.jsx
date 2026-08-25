import { ExternalLink, Maximize2 } from 'lucide-react';
import { GithubIcon } from './icons';

const ProjectCard = ({ project, images = [], onOpen }) => {
  const hasGallery = images.length > 0;
  const hasDetails = Boolean(
    project.role ||
      project.challenge ||
      (project.features && project.features.length > 0) ||
      (project.stackFull && project.stackFull.length > 0),
  );
  const isInteractive = hasGallery || hasDetails;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article
      onClick={isInteractive ? onOpen : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      aria-label={
        isInteractive
          ? `Ver más detalles de ${project.name}`
          : undefined
      }
      className={`group flex flex-col overflow-hidden rounded-[2rem] border border-stone-200 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-black/30 ${
        isInteractive
          ? 'cursor-pointer hover:-translate-y-1 hover:border-stone-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 dark:hover:border-stone-600'
          : 'hover:-translate-y-1 hover:border-stone-400 dark:hover:border-stone-600'
      }`}
    >
      {/* Captura del proyecto o placeholder */}
      {hasGallery ? (
        <div className="relative h-44 overflow-hidden border-b border-stone-200 dark:border-stone-800">
          <img
            src={images[0]}
            alt={`Captura de ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          {hasGallery && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-950/0 opacity-0 transition-all duration-300 group-hover:bg-stone-950/40 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-900 shadow-lg">
                <Maximize2 size={15} /> Ver galería
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="relative flex h-44 items-center justify-center border-b border-stone-200 bg-stone-100 dark:border-stone-800 dark:bg-stone-800/60">
          <span className="font-serif text-4xl text-stone-300 italic transition-colors group-hover:text-stone-500 dark:text-stone-700 dark:group-hover:text-stone-400">
            {'</>'}
          </span>
          {isInteractive && !hasGallery && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-950/0 opacity-0 transition-all duration-300 group-hover:bg-stone-950/40 group-hover:opacity-100">
              <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-stone-900 shadow-lg">
                <Maximize2 size={15} /> Ver más
              </span>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-grow flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-50">
          {project.name}
        </h3>

        <p className="mt-3 flex-grow text-sm leading-relaxed text-stone-500 line-clamp-3 dark:text-stone-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-stone-100 px-3 py-1 font-mono text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5 border-t border-stone-200 pt-4 dark:border-stone-800">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-300 dark:hover:text-white"
            >
              <ExternalLink size={15} /> Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 dark:text-stone-300 dark:hover:text-white"
          >
            <GithubIcon size={15} /> GitHub
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
