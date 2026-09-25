import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import DevisCalculator from '@/components/home/DevisCalculator';
import FAQSection from '@/components/home/FAQSection';
import { useT } from '@/data/i18n';

type CellValue = boolean | string | { fr: string; en: string };

function CheckIcon({ value, lang }: { value: CellValue; lang: 'fr' | 'en' }) {
  if (value === false) {
    return <span className="text-gray-400 dark:text-gray-600">—</span>;
  }
  if (value === true) {
    return <Check className="w-4 h-4 text-success-500 mx-auto" />;
  }
  if (typeof value === 'object' && value !== null && 'fr' in value) {
    return <span className="text-sm font-medium">{(value as { fr: string; en: string })[lang]}</span>;
  }
  return <span className="text-sm font-medium">{value}</span>;
}

export default function Pricing() {
  const { t, lang } = useT();

  return (
    <PageWrapper>
      <Seo page="pricing" />
      {/* Interactive Estimator */}
      <DevisCalculator />

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-max">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">
              {t.pricing.label[lang]}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-4">
              {t.pricing.title[lang]}<span className="gradient-text">{t.pricing.titleAccent[lang]}</span>
            </h1>
            <p className="text-gray-800 dark:text-gray-200">
              {t.pricing.description[lang]}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.pricing.plans.map((plan, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`relative glass-card p-8 h-full flex flex-col ${
                    i === 1 ? 'ring-2 ring-primary-500 shadow-xl shadow-primary-500/20' : ''
                  }`}
                >
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-white" />
                      {t.pricing.mostPopular[lang]}
                    </div>
                  )}

                  <h3 className="text-lg font-semibold mb-1">{plan.name[lang]}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">{plan.description[lang]}</p>

                  <div className="flex flex-col mb-6">
                    <span className={`text-2xl sm:text-3xl font-extrabold ${i === 1 ? 'gradient-text' : ''}`}>
                      {plan.price[lang]}
                    </span>
                    <span className="text-xs text-gray-700 dark:text-gray-200 mt-1">
                      {i < 2 ? t.pricing.perProject[lang] : t.pricing.letsTalk[lang]}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features[lang].map((feat) => (
                      <li key={feat} className="text-sm flex items-start gap-2">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-success-500/15 text-success-500 flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={i === 1 ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  >
                    {plan.cta[lang]}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50 dark:bg-white/[0.02]">
        <div className="container-max">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">
              {t.pricing.comparisonLabel[lang]}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{t.pricing.comparisonTitle[lang]}</h2>
            <p className="text-gray-800 dark:text-gray-200">
              {t.pricing.comparisonDesc[lang]}
            </p>
          </Reveal>

          <Reveal>
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-white/10">
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 dark:text-gray-200">
                        {t.pricing.comparisonFeature[lang]}
                      </th>
                      <th className="text-center px-6 py-4 text-sm font-semibold">{t.pricing.plans[0].name[lang]}</th>
                      <th className="text-center px-6 py-4 text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {t.pricing.plans[1].name[lang]}
                      </th>
                      <th className="text-center px-6 py-4 text-sm font-semibold">{t.pricing.plans[2].name[lang]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.pricing.comparisonRows.map((row, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-100 dark:border-white/5 ${
                          i % 2 === 0 ? 'bg-gray-50/50 dark:bg-white/[0.02]' : ''
                        }`}
                      >
                        <td className="px-6 py-4 text-sm font-medium">{row.feature[lang]}</td>
                        <td className="px-6 py-4 text-center text-sm">
                          <CheckIcon value={row.basic} lang={lang} />
                        </td>
                        <td className="px-6 py-4 text-center text-sm bg-primary-500/5">
                          <CheckIcon value={row.pro} lang={lang} />
                        </td>
                        <td className="px-6 py-4 text-center text-sm">
                          <CheckIcon value={row.enterprise} lang={lang} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="text-center mt-10">
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
              {t.pricing.customQuoteText[lang]}
            </p>
            <Link to="/contact" className="btn-secondary">
              {t.pricing.customQuote[lang]}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </PageWrapper>
  );
}
