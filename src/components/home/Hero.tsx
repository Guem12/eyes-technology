import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Eye } from 'lucide-react';
import TypingEffect from '@/components/TypingEffect';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedLogo from '@/components/AnimatedLogo';
import { stats } from '@/data/content';
import { useT } from '@/data/i18n';

export default function Hero() {
  const { t, lang } = useT();

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-14 isolate">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0a0e17] pointer-events-none z-10" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
              <Sparkles className="w-4 h-4" />
              {t.hero.available[lang]}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mb-4 flex"
            >
              <AnimatedLogo />
            </motion.div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-center">
            {t.hero.greeting[lang]}<br />
            <span className="gradient-text">
              <TypingEffect words={t.hero.typingWords[lang]} />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-6 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description[lang]}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              {t.hero.ctaPrimary[lang]}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary">
              <Eye className="w-4 h-4" />
              {t.hero.ctaSecondary[lang]}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
          >
            {stats.map((stat) => (
              <div key={stat.labelKey} className="text-center sm:text-left">
                <div className="flex items-center gap-2 justify-center">
                  <stat.icon className="w-4 h-4 text-primary-500" />
                  <span className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</span>
                </div>
                <span className="stat-underline" aria-hidden="true" />
                <p className="text-sm text-gray-700 dark:text-gray-200 mt-1.5">
                  {t.stats[stat.labelKey as keyof typeof t.stats][lang]}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
