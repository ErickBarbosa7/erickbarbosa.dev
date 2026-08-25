import { Code2, Database, HeartHandshake, Server, Wrench } from 'lucide-react';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolio';

const categories = [
  { title: 'Frontend', Icon: Code2, key: 'frontend' },
  { title: 'Backend', Icon: Server, key: 'backend' },
  { title: 'Bases de Datos', Icon: Database, key: 'database' },
  { title: 'Herramientas', Icon: Wrench, key: 'tools' },
];

const SkillsSection = () => {
  const { skills, softSkills } = PORTFOLIO_DATA;

  return (
    <section id="habilidades" className="scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-stone-50">
            Mis{' '}
            <span className="italic font-medium text-stone-500">
              Habilidades
            </span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Habilidades técnicas */}
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map(({ title, Icon, key }) => (
                <div
                  key={key}
                  className="rounded-[2rem] border border-stone-200 bg-white p-5 dark:border-stone-800 dark:bg-stone-900"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-semibold text-stone-900 dark:text-stone-50">
                      {title}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {skills[key].map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-500 transition-colors hover:border-stone-900 hover:text-stone-900 dark:border-stone-700 dark:text-stone-400 dark:hover:border-stone-300 dark:hover:text-stone-100"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Habilidades blandas */}
          <FadeIn delay={0.15}>
            <div className="flex h-full flex-col rounded-[2rem] border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900">
                  <HeartHandshake size={16} />
                </span>
                <h3 className="font-semibold text-stone-900 dark:text-stone-50">
                  Habilidades Blandas
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {softSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-stone-100 px-4 py-1.5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-900 hover:text-white dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-100 dark:hover:text-stone-900"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
