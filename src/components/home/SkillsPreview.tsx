import Reveal, { ProgressBar } from '@/components/Reveal';
import { skills } from '@/data/content';
import { useT } from '@/data/i18n';

export default function SkillsPreview() {
  const { t, lang } = useT();

  return (
    <section className="section-padding bg-gray-50 dark:bg-white/[0.02]">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            {t.skills.label[lang]}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">{t.skills.title[lang]}</h2>
          <p className="text-gray-800 dark:text-gray-200">
            {t.skills.description[lang]}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-3xl mx-auto">
          {skills.map((skill, i) => (
            <ProgressBar
              key={skill.name}
              label={skill.name}
              value={skill.level}
              icon={<skill.icon className="w-4 h-4" />}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
