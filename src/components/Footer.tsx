import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { navPaths } from '@/data/content';
import { useT } from '@/data/i18n';

export default function Footer() {
  const { t, lang } = useT();

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#080b12]">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2.5 font-bold text-lg mb-4">
              <div className="flex items-center justify-center p-1 rounded-xl bg-white shadow-sm border border-gray-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">
                <img src="/logo.png" alt="EyesTechnology Logo" className="h-8 w-auto object-contain rounded-lg dark:invert dark:hue-rotate-180 dark:contrast-90" />
              </div>
              <span className="gradient-text font-extrabold tracking-tight text-xl">EyesTechnology</span>
            </Link>
            <p className="text-sm text-gray-800 dark:text-gray-200 max-w-xs">
              {t.footer.description[lang]}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100">
              {t.footer.navigation[lang]}
            </h4>
            <ul className="space-y-2">
              {navPaths.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {t.nav[link.key][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100">
              {t.footer.connect[lang]}
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${t.contact.emailValue}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} EyesTechnology. {t.footer.rights[lang]}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <Link
              to="/mentions-legales"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t.footer.legalNotice[lang]}
            </Link>
            <span className="hidden sm:block text-gray-300 dark:text-gray-700">·</span>
            <Link
              to="/politique-de-confidentialite"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t.footer.privacyPolicy[lang]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
