import { useEffect, useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import FadeIn from './FadeIn';
import { PORTFOLIO_DATA } from '../data/portfolio';

const Footer = () => {
  const { email, phone, location } = PORTFOLIO_DATA.personalInfo;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Portapapeles no disponible (contexto no seguro)
    }
  };

  const details = [
    { Icon: Phone, label: phone, href: `tel:${phone}` },
    { Icon: MapPin, label: location },
  ];

  return (
    <footer
      id="contacto"
      className="scroll-mt-24 border-t border-stone-200 py-24 dark:border-stone-800"
    >
      <FadeIn className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl dark:text-stone-50">
          ¡Conectemos<span className="italic font-medium text-stone-500">!</span>
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-3.5 font-semibold text-white shadow-lg shadow-stone-900/10 transition-all hover:-translate-y-0.5 hover:bg-stone-700 dark:bg-stone-100 dark:text-stone-900 dark:shadow-black/30 dark:hover:bg-white"
          >
            <Mail size={18} />
            {email}
          </a>

          <button
            type="button"
            onClick={copyEmail}
            aria-label={copied ? 'Correo copiado' : 'Copiar correo'}
            title={copied ? '¡Copiado!' : 'Copiar correo'}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors ${
              copied
                ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900'
                : 'border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900 dark:border-stone-700 dark:text-stone-300 dark:hover:border-stone-100 dark:hover:text-white'
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {details.map(({ Icon, label, href }) => (
            <li
              key={label}
              className="flex items-center gap-2 font-mono text-sm text-stone-500 dark:text-stone-400"
            >
              <Icon size={16} className="text-stone-700 dark:text-stone-300" />
              {href ? (
                <a
                  href={href}
                  className="transition-colors hover:text-stone-900 dark:hover:text-stone-50"
                >
                  {label}
                </a>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>

        <p className="mt-14 font-mono text-xs text-stone-400 dark:text-stone-600">
          © {new Date().getFullYear()} Erick Barbosa 
        </p>
      </FadeIn>
    </footer>
  );
};

export default Footer;
