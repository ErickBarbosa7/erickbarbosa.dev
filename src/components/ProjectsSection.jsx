import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolio';
import kyroImg from '../assets/projects/kyro.png';
import merakiImg from '../assets/projects/meraki.png';
import studyhubImg from '../assets/projects/studyhub.png';

const projectImages = {
  'Kyro System': [kyroImg],
  Meraki: [merakiImg],
  StudyHub: [studyhubImg],
};

const ProjectsSection = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selected, setSelected] = useState(null);

  return (
    <section id="proyectos" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Proyectos{' '}
            <span className="italic font-medium text-stone-500">Destacados</span>
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const images = projectImages[project.name] ?? [];

            return (
              <FadeIn key={project.name} delay={(index % 3) * 0.1}>
                <ProjectCard
                  project={project}
                  images={images}
                  onOpen={() => setSelected({ project, images })}
                />
              </FadeIn>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected.project}
            images={selected.images}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
