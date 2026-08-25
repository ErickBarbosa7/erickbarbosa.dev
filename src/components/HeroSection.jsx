import { motion } from 'framer-motion';
import { Code2, Download, Folder } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';
import { PORTFOLIO_DATA } from '../data/portfolio';
import heroImg from '../assets/hero.png';

const CV_URL = '/cv/CV_Erick_Barbosa.pdf';

const socials = [
  { label: 'GitHub', href: PORTFOLIO_DATA.personalInfo.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: PORTFOLIO_DATA.personalInfo.linkedin, Icon: LinkedinIcon },
];

const HeroSection = () => {
  const { name } = PORTFOLIO_DATA.personalInfo;
  const { description } = PORTFOLIO_DATA.aboutMe;
  const [firstName, ...rest] = name.split(' ');

  return (
    <section id="inicio" className="overflow-hidden pb-20 pt-16 sm:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Izquierda: imagen + ícono de código + nombre */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto w-full max-w-sm"
        >
          <img
            src={heroImg}
            alt={name}
            className="aspect-square w-full rounded-[2.5rem] object-cover shadow-xl shadow-stone-900/10 dark:shadow-black/40"
          />

          <div className="mt-8 flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone-900 font-mono text-sm font-bold text-white dark:bg-stone-100 dark:text-stone-900">
              <Code2 size={20} />
            </span>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
              {firstName}{' '}
              <span className="italic text-stone-500">{rest.join(' ')}</span>
            </h1>
          </div>
        </motion.div>

        {/* Derecha: About Me + acciones */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="lg:pl-6"
        >
          <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Sobre{' '}
            <span className="italic font-medium text-stone-500">mí</span>
          </h2>

          <p className="mt-6 leading-relaxed text-stone-600 dark:text-stone-400">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={CV_URL}
              download="CV_Erick_Barbosa.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
            >
              Descargar CV <Download size={18} />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-7 py-3 font-semibold text-stone-900 transition-colors hover:border-stone-900 hover:bg-stone-100 dark:border-stone-700 dark:text-stone-50 dark:hover:border-stone-300 dark:hover:bg-stone-800"
            >
              Ver Proyectos <Folder size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-stone-400 transition-colors hover:text-stone-900 dark:hover:text-stone-50"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
