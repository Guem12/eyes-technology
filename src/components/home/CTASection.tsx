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
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-white/[0.04] px-6 py-12 sm:px-12 sm:py-16 text-center border border-gray-200 dark:border-white/10 shadow-xl shadow-primary-500/5">
            <div className="absolute inset-0 opacity-60 dark:opacity-15 pointer-events-none">
              <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-100 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-100 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t.cta.title[lang]}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                {t.cta.description[lang]}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
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
