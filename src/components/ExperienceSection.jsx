import { Briefcase, Check } from 'lucide-react';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolio';

const ExperienceSection = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experiencia" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Mi{' '}
            <span className="italic font-medium text-stone-500">Experiencia</span>
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-5">
          {experience.map((job, index) => (
            <FadeIn key={`${job.company}-${job.period}`} delay={index * 0.1}>
              <article className="rounded-[2rem] border border-stone-200 bg-white p-6 transition-colors hover:border-stone-400 sm:p-8 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600">
                {/* Encabezado estilo píldora: logo · rol/empresa · fecha */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-200">
                    <Briefcase size={20} />
                  </span>

                  <div className="min-w-0 flex-1 text-center">
                    <h3 className="truncate font-serif text-lg font-bold text-stone-900 dark:text-stone-50">
                      {job.role}
                    </h3>
                    <p className="truncate text-sm font-medium text-stone-500 dark:text-stone-400">
                      {job.company}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-stone-200 px-4 py-1.5 text-xs font-medium whitespace-nowrap text-stone-500 dark:border-stone-700 dark:text-stone-400">
                    {job.period}
                  </span>
                </div>

                <p className="mt-5 leading-relaxed text-stone-600 dark:text-stone-300">
                  {job.description}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm leading-relaxed text-stone-500 dark:text-stone-400"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-stone-700 dark:text-stone-300"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
