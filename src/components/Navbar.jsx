import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const links = [
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
];

const CV_URL = '/cv/CV_Erick_Barbosa.pdf';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#FDFBF7]/80 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="font-serif text-xl font-bold text-stone-900 dark:text-stone-50"
        >
          Erick<span className="italic text-stone-500"> Barbosa</span>
        </a>

        {/* Links escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          {/* Toggle de tema */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
            }
            className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900 dark:border-stone-800 dark:text-stone-300 dark:hover:border-stone-100 dark:hover:text-stone-50"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Ver CV */}
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-stone-300 px-5 py-2 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100 dark:border-stone-700 dark:text-stone-50 dark:hover:bg-stone-800"
          >
            Ver CV
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-600 dark:border-stone-800 dark:text-stone-300 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Panel móvil */}
      {open && (
        <div className="space-y-1 border-t border-stone-200 bg-[#FDFBF7] px-6 py-4 dark:border-stone-800 dark:bg-stone-950 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-full px-4 py-2 text-sm font-medium text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-900 dark:hover:text-stone-50"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-600 dark:border-stone-800 dark:text-stone-300"
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center justify-center rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white dark:bg-stone-100 dark:text-stone-900"
            >
              Ver CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
