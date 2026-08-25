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

        <div className="relative mt-16">
          {/* Línea vertical de la timeline — solo visible desde sm, conecta los hitos */}
          <div
            className="absolute top-3 bottom-3 left-6 hidden w-px bg-gradient-to-b from-stone-300 via-stone-200 to-transparent sm:block dark:from-stone-700 dark:via-stone-800"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((job, index) => {
              const isCurrent = index === 0;
              return (
                <FadeIn key={`${job.company}-${job.period}`} delay={index * 0.1}>
                  <article className="relative sm:pl-16">
                    {/* Nodo de la timeline */}
                    <span
                      className={`absolute top-6 left-0 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border sm:flex ${
                        isCurrent
                          ? 'border-stone-900 bg-stone-900 text-stone-50 dark:border-stone-50 dark:bg-stone-50 dark:text-stone-900'
                          : 'border-stone-200 bg-white text-stone-500 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-400'
                      }`}
                    >
                      <Briefcase size={18} />
                    </span>

                    <div className="rounded-[2rem] border border-stone-200 bg-white p-6 transition-all hover:border-stone-400 hover:shadow-sm sm:p-8 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-stone-600">
                      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                        {/* Ícono solo en móvil, ya que el nodo cubre esto en sm+ */}
                        <div className="flex w-full items-center gap-4 sm:hidden">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-200">
                            <Briefcase size={18} />
                          </span>
                          <div className="min-w-0 text-left">
                            <h3 className="font-serif text-lg leading-snug font-bold text-stone-900 dark:text-stone-50">
                              {job.role}
                            </h3>
                            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                              {job.company}
                            </p>
                          </div>
                        </div>

                        {/* Título en sm+, alineado con el nodo */}
                        <div className="hidden min-w-0 text-left sm:block">
                          <div className="flex items-center gap-2.5">
                            <h3 className="font-serif text-lg leading-snug font-bold text-stone-900 dark:text-stone-50">
                              {job.role}
                            </h3>
                            {isCurrent && (
                              <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-700 uppercase dark:bg-emerald-950 dark:text-emerald-400">
                                Actual
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-stone-500 dark:text-stone-400">
                            {job.company}
                          </p>
                        </div>

                        <span className="shrink-0 self-start rounded-full border border-stone-200 px-4 py-1.5 text-xs font-medium whitespace-nowrap text-stone-500 dark:border-stone-700 dark:text-stone-400">
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

                      {job.stack && (
                        <div className="mt-5 flex flex-wrap gap-2 border-t border-stone-100 pt-4 dark:border-stone-800">
                          {job.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-stone-100 px-2.5 py-1 font-mono text-[11px] text-stone-600 dark:bg-stone-800 dark:text-stone-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;