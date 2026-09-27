import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { useT } from '@/data/i18n';

/**
 * Section Technologies inspirée d'Aken : une conversation client ↔ EyesTechnology.
 * Chaque besoin est exprimé en langage courant, la réponse montre la solution
 * avec ses tags techniques. La palette reste celle du site (bleu/cyan).
 */
export default function SkillsPreview() {
  const { t, lang } = useT();

  return (
    <section className="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            {t.skills.label[lang]}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">
            {t.skills.title[lang]}
            <span className="gradient-text">{t.skills.titleAccent[lang]}</span>
          </h2>
          <p className="text-gray-800 dark:text-gray-200">
            {t.skills.description[lang]}
          </p>
        </Reveal>

        {/* Conversation client ↔ EyesTechnology */}
        <div className="max-w-2xl mx-auto space-y-4 mb-14">
          {t.skills.conversations.map((conv, i) => (
            <Reveal key={i} delay={i * 0.08}>
              {/* Message client */}
              <div className="flex items-end gap-2.5 mb-3">
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-white/10 text-[11px] font-bold text-gray-700 dark:text-gray-300">
                  {lang === 'fr' ? 'VOUS' : 'YOU'}
                </span>
                <div className="glass-card rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-gray-800 dark:text-gray-200 italic">
                    {conv.client[lang]}
                  </p>
                </div>
              </div>

              {/* Réponse EyesTechnology */}
              <div className="flex items-end gap-2.5 justify-end">
                <div className="rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%] bg-primary-600 bg-gradient-to-br from-primary-600 to-accent-600 dark:bg-primary-900 dark:from-primary-900 dark:to-accent-800 border border-primary-500/20 shadow-lg shadow-primary-500/10">
                  <p className="text-sm text-white leading-relaxed mb-2.5">
                    {conv.reply[lang]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {conv.chips[lang].map((chip) => (
                      <span
                        key={chip}
                        className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/15 text-white border border-white/20"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm border border-gray-200 dark:bg-white/5 dark:border-white/10 overflow-hidden">
                  <img src="/logo.png" alt="" className="h-6 w-6 object-contain dark:invert dark:hue-rotate-180 dark:contrast-90" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* La stack s'adapte à vous */}
        <Reveal>
          <div className="glass-card p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {t.skills.adaptTitle[lang]}
            </h3>
            <p className="text-sm text-gray-800 dark:text-gray-200 mb-6 max-w-xl mx-auto">
              {t.skills.adaptDesc[lang]}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {t.skills.adaptChips[lang].map((chip) => (
                <motion.span
                  key={chip}
                  whileHover={{ y: -3 }}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-700 dark:bg-primary-400/10 dark:text-primary-300 border border-primary-500/15 dark:border-primary-400/20"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
