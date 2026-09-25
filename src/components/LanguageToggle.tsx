import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="relative px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="block"
      >
        {lang === 'fr' ? 'FR' : 'EN'}
      </motion.span>
    </button>
  );
}
