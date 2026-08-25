import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolio';
import kyroImg from '../assets/projects/kyro.png';

import merakiImg from '../assets/projects/meraki/meraki.png';
import merakiImg2 from '../assets/projects/meraki/meraki1.png';
import merakiImg3 from '../assets/projects/meraki/meraki2.png';


import studyhubImg from '../assets/projects/studyhub/studyhub.png';
import studyhubImg2 from '../assets/projects/studyhub/studyhub2.png';
import studyhubImg3 from '../assets/projects/studyhub/studyhub3.png';
import studyhubImg4 from '../assets/projects/studyhub/studyhub4.png';

import capitangrillImg from '../assets/projects/capitangrill/capitangrill.png';
import capitangrill1Img from '../assets/projects/capitangrill/capitangrill1.png';
import capitangrill2Img from '../assets/projects/capitangrill/capitangrill2.png';
import capitangrill3Img from '../assets/projects/capitangrill/capitangrill3.png';

const projectImages = {
  'Kyro System': [kyroImg],
  Meraki: [merakiImg, merakiImg2, merakiImg3],
  StudyHub: [studyhubImg, studyhubImg2, studyhubImg3, studyhubImg4],
  'Capitán Grill': [
    capitangrillImg,
    capitangrill1Img,
    capitangrill2Img,
    capitangrill3Img,
  ],
};

// Capturas verticales (móvil): se muestran completas con object-contain
const PORTRAIT_PROJECTS = new Set(['StudyHub']);

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
            const portrait = PORTRAIT_PROJECTS.has(project.name);

            return (
              <FadeIn key={project.name} delay={(index % 3) * 0.1}>
                <ProjectCard
                  project={project}
                  images={images}
                  portrait={portrait}
                  onOpen={() => setSelected({ project, images, portrait })}
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
            portrait={selected.portrait}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
