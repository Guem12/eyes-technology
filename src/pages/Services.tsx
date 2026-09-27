import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageCircle, Star } from 'lucide-react';
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
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-600 bg-gradient-to-br from-primary-600 to-accent-500 text-white mb-5">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title[lang]}</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-200 mb-4">{service.description[lang]}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {service.features[lang].map((feat) => (
                        <li key={feat} className="text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2">
                          <span className="flex items-center justify-center w-4 h-4 rounded-full bg-success-500/15 text-success-500 flex-shrink-0">
                            <Check className="w-3 h-3" />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    {service.tags && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {service.tags[lang].map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300 border border-primary-500/15 dark:border-primary-400/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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

      {/* Façons de travailler ensemble */}
      <section className="section-padding">
        <div className="container-max">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">
              {t.servicesPage.engagementsLabel[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              {t.servicesPage.engagementsTitle[lang]}
              <span className="gradient-text">{t.servicesPage.engagementsTitleAccent[lang]}</span>
            </h2>
            <p className="text-gray-800 dark:text-gray-200">
              {t.servicesPage.engagementsDesc[lang]}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.servicesPage.engagements.map((eng, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`glass-card p-6 h-full flex flex-col relative ${eng.badge ? 'glow-border ring-2 ring-primary-500/40' : ''}`}
                >
                  {eng.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-primary-600 bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-lg whitespace-nowrap">
                      <Star className="w-3 h-3 inline mr-1 -mt-0.5" />
                      {eng.badge[lang]}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-2 mt-1">{eng.title[lang]}</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-200 mb-5">{eng.desc[lang]}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {eng.points[lang].map((point) => (
                      <li key={point} className="text-sm text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-success-500/15 text-success-500 flex-shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                  {i === 0 && (
                    <Link to="/contact" className="btn-primary w-full">
                      {eng.cta[lang]}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  {i === 1 && (
                    <a
                      href={`https://wa.me/22393739935?text=${encodeURIComponent(lang === 'fr' ? "Bonjour EyesTechnology ! Je suis intéressé par un accompagnement mensuel pour mon site." : "Hello EyesTechnology! I'm interested in a monthly plan for my website.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary w-full inline-flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      {eng.cta[lang]}
                    </a>
                  )}
                  {i === 2 && (
                    <Link to="/contact" className="btn-secondary w-full inline-flex items-center justify-center gap-2">
                      {eng.cta[lang]}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'activité */}
      <section className="section-padding bg-gray-50 dark:bg-white/[0.02]">
        <div className="container-max">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">
              {t.servicesPage.sectorsLabel[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              {t.servicesPage.sectorsTitle[lang]}
              <span className="gradient-text">{t.servicesPage.sectorsTitleAccent[lang]}</span>
            </h2>
            <p className="text-gray-800 dark:text-gray-200">
              {t.servicesPage.sectorsDesc[lang]}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.servicesPage.sectors.map((sector, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card p-5 h-full hover:border-primary-500/40 transition-colors">
                  <h3 className="font-semibold mb-1.5">{sector.title[lang]}</h3>
                  <p className="text-sm text-gray-800 dark:text-gray-200">{sector.desc[lang]}</p>
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
