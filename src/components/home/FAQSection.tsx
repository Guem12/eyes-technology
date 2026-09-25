import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useT } from '@/data/i18n';

interface FAQItem {
  q: { fr: string; en: string };
  a: { fr: string; en: string };
}

const FAQS: FAQItem[] = [
  {
    q: {
      fr: 'Combien coûte un site vitrine avec EyesTechnology ?',
      en: 'How much does a showcase website cost with EyesTechnology?',
    },
    a: {
      fr: 'Nos forfaits site vitrine démarrent à partir de 150 000 FCFA pour une présence professionnelle complète (design responsive, bouton WhatsApp, formulaire de contact, hébergement et nom de domaine inclus).',
      en: 'Our showcase website packages start at 150,000 FCFA for a complete professional setup (responsive design, WhatsApp button, contact form, hosting & domain included).',
    },
  },
  {
    q: {
      fr: 'Acceptez-vous les paiements par Wave et Orange Money ?',
      en: 'Do you accept Wave and Orange Money payments?',
    },
    a: {
      fr: 'Absolument. J\'accepte les paiements Mobile Money (Wave, Orange Money, Moov Money) ainsi que les virements bancaires. De plus, je peux intégrer directement ces moyens de paiement sur vos propres sites et applications !',
      en: 'Absolutely. I accept Mobile Money payments (Wave, Orange Money, Moov Money) as well as bank transfers. Furthermore, I can integrate these payment methods directly onto your own websites and apps!',
    },
  },
  {
    q: {
      fr: 'Quel est le délai de livraison moyen d\'un projet ?',
      en: 'What is the average project delivery timeline?',
    },
    a: {
      fr: 'Un site vitrine standard est livré en 7 à 14 jours. Pour une application web ou mobile sur mesure, le délai varie généralement entre 3 et 6 semaines selon la complexité.',
      en: 'A standard showcase website is delivered within 7 to 14 days. For custom web or mobile applications, delivery typically takes 3 to 6 weeks depending on complexity.',
    },
  },
  {
    q: {
      fr: 'Faut-il payer la totalité au début du projet ?',
      en: 'Do I have to pay the full amount upfront?',
    },
    a: {
      fr: 'Non. Je fonctionne avec un acompte au lancement (généralement 30% à 50%), et le solde est versé à la livraison après votre entière satisfaction.',
      en: 'No. I work with a deposit at launch (usually 30% to 50%), and the final balance is paid upon delivery after your full satisfaction.',
    },
  },
  {
    q: {
      fr: 'Que comprend la garantie 30 jours après la mise en ligne ?',
      en: 'What is included in the 30-day post-launch warranty?',
    },
    a: {
      fr: 'Pendant 30 jours après le lancement, je corrige gratuitement tout bug éventuel, effectue les ajustements mineurs et vous accompagne pour la prise en main de vos outils.',
      en: 'For 30 days after launch, I fix any potential bugs free of charge, handle minor adjustments, and guide you through mastering your tools.',
    },
  },
];

export default function FAQSection() {
  const { lang } = useT();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx((prev) => (prev === i ? null : i));
  };

  return (
    <section className="section-padding">
      <div className="container-max max-w-4xl mx-auto">
        <Reveal className="text-center mb-12">
          <span className="section-label flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            {lang === 'fr' ? 'Foire Aux Questions' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
            {lang === 'fr' ? 'Des questions ? J\'ai les ' : 'Got Questions? I Have '}
            <span className="gradient-text">{lang === 'fr' ? 'réponses' : 'Answers'}</span>
          </h2>
          <p className="text-gray-800 dark:text-gray-200">
            {lang === 'fr'
              ? 'Tout ce que vous devez savoir sur nos tarifs en FCFA, délais et garanties.'
              : 'Everything you need to know about our FCFA pricing, timelines, and guarantees.'}
          </p>
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card overflow-hidden transition-all duration-200">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg hover:text-primary-500 transition-colors"
                  >
                    <span>{faq.q[lang]}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-gray-400"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 text-sm text-gray-800 dark:text-gray-200 leading-relaxed border-t border-gray-100 dark:border-white/5 pt-4">
                          {faq.a[lang]}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
