import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import Seo from '@/components/Seo';
import Reveal from '@/components/Reveal';
import CTASection from '@/components/home/CTASection';
import { serviceIcons } from '@/data/content';
import { useT } from '@/data/i18n';

export default function Services() {
  const { t, lang } = useT();

  return (
    <PageWrapper>
      <Seo page="services" />
      <section className="section-padding">
        <div className="container-max">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">
              {t.servicesPage.label[lang]}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-4">
              {t.servicesPage.title[lang]}<span className="gradient-text">{t.servicesPage.titleAccent[lang]}</span>
            </h1>
            <p className="text-gray-800 dark:text-gray-200">
              {t.servicesPage.description[lang]}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.servicesData.map((service, i) => {
              const Icon = serviceIcons[i];
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="glass-card p-6 h-full glow-border flex flex-col"
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white mb-5">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title[lang]}</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">{service.description[lang]}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features[lang].map((feat) => (
                        <li key={feat} className="text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2">
                          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-success-500/15 text-success-500 flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 inline-flex items-center gap-1 transition-colors"
                    >
                      {t.servicesPage.getQuote[lang]}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50 dark:bg-white/[0.02]">
        <div className="container-max">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">
              {t.servicesPage.processLabel[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{t.servicesPage.processTitle[lang]}</h2>
            <p className="text-gray-800 dark:text-gray-200">
              {t.servicesPage.processDesc[lang]}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.servicesPage.processSteps.map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="relative glass-card p-6 h-full">
                  <span className="text-4xl font-bold gradient-text opacity-50 absolute top-4 right-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-semibold mb-2 relative">{item.title[lang]}</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-200 relative">{item.desc[lang]}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageWrapper>
  );
}
