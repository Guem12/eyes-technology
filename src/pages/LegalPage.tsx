import { FileText, ShieldCheck } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { useT } from '@/data/i18n';

type LegalPageKind = 'notice' | 'privacy';

export default function LegalPage({ kind }: { kind: LegalPageKind }) {
  const { t, lang } = useT();
  const data = t.legal[kind];
  const isPrivacy = kind === 'privacy';

  return (
    <PageWrapper>
      <Seo page={kind === 'notice' ? 'legalNotice' : 'privacy'} />
      <section className="section-padding">
        <div className="container-max max-w-3xl mx-auto">
          <Reveal className="mb-10">
            <span className="inline-flex items-center gap-1.5 section-label">
              {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
              EyesTechnology
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-3">{data.title[lang]}</h1>
            <p className="text-sm text-gray-700 dark:text-gray-300">{data.updatedAt[lang]}</p>
            {isPrivacy && (
              <p className="text-gray-800 dark:text-gray-200 mt-4 leading-relaxed">
                {t.legal.privacy.intro[lang]}
              </p>
            )}
          </Reveal>

          <div className="space-y-6">
            {data.sections.map((section, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card p-6 sm:p-8">
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2">
                    <span className="text-primary-700 dark:text-primary-400">0{i + 1}</span>
                    {section.heading[lang]}
                  </h2>
                  <div className="space-y-2.5">
                    {section.body[lang].map((para, j) => (
                      <p key={j} className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
