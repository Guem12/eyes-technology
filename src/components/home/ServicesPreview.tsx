import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { serviceIcons } from '@/data/content';
import { useT } from '@/data/i18n';

export default function ServicesPreview() {
  const { t, lang } = useT();

  return (
    <section className="section-padding relative bg-white dark:bg-[#0a0e17]">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            {t.servicesPreview.label[lang]}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{t.servicesPreview.title[lang]}</h2>
          <p className="text-gray-800 dark:text-gray-200">
            {t.servicesPreview.description[lang]}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.servicesData.slice(0, 3).map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="glass-card p-6 h-full glow-border"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-600 bg-gradient-to-br from-primary-600 to-accent-500 text-white mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title[lang]}</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">{service.description[lang]}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.features[lang].slice(0, 3).map((feat) => (
                      <li key={feat} className="text-sm text-gray-700 dark:text-gray-200 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="text-center mt-10">
          <Link to="/services" className="btn-secondary">
            {t.servicesPreview.viewAll[lang]}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
