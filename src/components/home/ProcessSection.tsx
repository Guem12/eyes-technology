import { FileText, Code2, Rocket, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useT } from '@/data/i18n';

export default function ProcessSection() {
  const { lang } = useT();

  const steps = [
    {
      number: '01',
      icon: FileText,
      title: { fr: 'Cadrage & Devis Gratuit', en: 'Scope & Free Quote' },
      desc: {
        fr: 'Nous analysons vos besoins et votre activité pour établir un cahier des charges clair et une estimation forfaitaire en FCFA sans surprise.',
        en: 'We analyze your requirements and business goals to establish a clear scope and transparent FCFA quote.',
      },
    },
    {
      number: '02',
      icon: Code2,
      title: { fr: 'Conception & Développement', en: 'Design & Development' },
      desc: {
        fr: 'Création du design moderne, développement sur mesure et intégration des fonctionnalités (Paiements Wave/Orange Money, WhatsApp, CMS).',
        en: 'Modern UI/UX design, custom development, and feature integration (Wave/Orange Money payments, WhatsApp, CMS).',
      },
    },
    {
      number: '03',
      icon: Rocket,
      title: { fr: 'Mise en ligne & Garantie 30j', en: 'Launch & 30-Day Guarantee' },
      desc: {
        fr: 'Déploiement rapide sur nom de domaine, formation de votre équipe et accompagnement technique offert pendant 30 jours.',
        en: 'Fast domain deployment, team training, and 30-day post-launch technical support included.',
      },
    },
  ];

  return (
    <section className="section-padding bg-gray-50/50 dark:bg-white/[0.02] border-y border-gray-200 dark:border-white/5">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">
            {lang === 'fr' ? 'Notre Méthode' : 'Our Process'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 mb-4">
            {lang === 'fr' ? 'Comment nous travaillons ' : 'How We Work '}
            <span className="gradient-text">{lang === 'fr' ? 'ensemble' : 'Together'}</span>
          </h2>
          <p className="text-gray-800 dark:text-gray-200">
            {lang === 'fr'
              ? 'Un processus clair en 3 étapes pour livrer votre projet à temps et au budget convenu.'
              : 'A transparent 3-step workflow to deliver your project on time and on budget.'}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={idx * 0.15}>
                <div className="relative glass-card p-8 h-full flex flex-col justify-between group hover:border-primary-500/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-3xl font-black text-gray-300 dark:text-white/10 group-hover:text-primary-500/30 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3">{step.title[lang]}</h3>
                    <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
                      {step.desc[lang]}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Guarantee Badge */}
        <Reveal delay={0.4} className="mt-12 max-w-3xl mx-auto">
          <div className="glass-card p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-transparent border border-primary-500/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 text-white shrink-0 shadow-lg shadow-primary-500/30">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-base mb-1">
                {lang === 'fr' ? 'Garantie de satisfaction — 30 jours de suivi inclus' : 'Satisfaction Guarantee — 30 Days Support Included'}
              </h4>
              <p className="text-xs text-gray-800 dark:text-gray-200">
                {lang === 'fr'
                  ? 'Après la livraison, nous restons à votre disposition 30 jours pour affiner et maintenir votre projet sans aucun frais supplémentaire.'
                  : 'After delivery, we remain at your service for 30 days to refine and maintain your project at no extra cost.'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
