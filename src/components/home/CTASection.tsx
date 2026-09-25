import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { useT } from '@/data/i18n';

export default function CTASection() {
  const { t, lang } = useT();

  return (
    <section className="section-padding">
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 dark:from-primary-900 dark:via-primary-950 dark:to-accent-800 px-6 py-16 sm:px-12 sm:py-20 text-center border border-transparent dark:border-white/10">
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-white dark:bg-primary-400 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-300 dark:bg-accent-500 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.cta.title[lang]}
              </h2>
              <p className="text-primary-50 dark:text-primary-100/90 text-lg mb-8 max-w-xl mx-auto">
                {t.cta.description[lang]}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-primary-700 bg-white hover:bg-primary-50 transition-all duration-300 shadow-xl"
                >
                  {t.cta.button[lang]}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
