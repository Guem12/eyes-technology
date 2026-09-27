import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useT } from '@/data/i18n';

export default function Testimonials() {
  const { t, lang } = useT();

  return (
    <section className="section-padding">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            {t.testimonials.label[lang]}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{t.testimonials.title[lang]}</h2>
          <p className="text-gray-800 dark:text-gray-200">
            {t.testimonials.description[lang]}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonialsData.map((tm, i) => (
            <Reveal key={tm.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card p-6 h-full relative"
              >
                <Quote className="w-8 h-8 text-primary-500/30 absolute top-6 right-6" />

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 italic">"{tm.quote[lang]}"</p>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-primary-600 bg-gradient-to-br from-primary-600 to-accent-500 text-white font-semibold text-sm">
                    {tm.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{tm.name}</p>
                    <p className="text-xs text-gray-700 dark:text-gray-200">{tm.role[lang]}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
