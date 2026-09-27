import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Check, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  CreditCard,
  Zap,
  CheckCircle2
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { useT } from '@/data/i18n';

interface ProjectType {
  id: string;
  name: { fr: string; en: string };
  desc: { fr: string; en: string };
  basePrice: number;
  icon: typeof Globe;
}

interface FeatureOption {
  id: string;
  name: { fr: string; en: string };
  price: number;
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'vitrine',
    name: { fr: 'Site Vitrine', en: 'Showcase Site' },
    desc: { fr: 'Présentation professionnelle de votre entreprise', en: 'Professional business presentation' },
    basePrice: 150000,
    icon: Globe,
  },
  {
    id: 'web-app',
    name: { fr: 'Application Web / CMS', en: 'Web App / CMS' },
    desc: { fr: 'Plateforme dynamique avec espace admin', en: 'Dynamic platform with admin dashboard' },
    basePrice: 450000,
    icon: Monitor,
  },
  {
    id: 'mobile-app',
    name: { fr: 'Application Mobile', en: 'Mobile App' },
    desc: { fr: 'Application smartphone iOS & Android', en: 'iOS & Android smartphone app' },
    basePrice: 750000,
    icon: Smartphone,
  },
  {
    id: 'custom-erp',
    name: { fr: 'Logiciel de Gestion / ERP', en: 'Management Software / ERP' },
    desc: { fr: 'Gestion de stock, factures et suivi sur mesure', en: 'Custom inventory, invoicing & reporting' },
    basePrice: 600000,
    icon: Database,
  },
];

const FEATURES: FeatureOption[] = [
  { id: 'whatsapp', name: { fr: 'Bouton & Notification WhatsApp Direct', en: 'Direct WhatsApp Button & Notifications' }, price: 25000 },
  { id: 'payment', name: { fr: 'Paiement Wave & Orange Money', en: 'Wave & Orange Money Payment Setup' }, price: 50000 },
  { id: 'seo', name: { fr: 'Optimisation SEO & Google Indexing', en: 'SEO Optimization & Google Indexing' }, price: 35000 },
  { id: 'multilang', name: { fr: 'Multilingue (Français / Anglais)', en: 'Multilingual (French / English)' }, price: 40000 },
  { id: 'admin', name: { fr: 'Panneau d\'Administration Dédié', en: 'Dedicated Admin Dashboard' }, price: 80000 },
  { id: 'domain', name: { fr: 'Nom de domaine + Hébergement 1 an', en: 'Domain Name + 1-Year Hosting' }, price: 30000 },
  { id: 'bi-dashboard', name: { fr: 'Tableau de bord BI (ventes, stocks, clients)', en: 'BI Dashboard (sales, inventory, customers)' }, price: 120000 },
  { id: 'data-migration', name: { fr: 'Migration de données existantes (Excel, ancien logiciel)', en: 'Migration of existing data (Excel, legacy software)' }, price: 90000 },
  { id: 'auto-backup', name: { fr: 'Sauvegardes automatiques & rapports par e-mail', en: 'Automatic backups & email reports' }, price: 60000 },
];

const TIMELINES = [
  { id: 'standard', name: { fr: 'Standard (7-14 jours)', en: 'Standard (7-14 days)' }, multiplier: 1 },
  { id: 'express', name: { fr: 'Express (3-7 jours, +25%)', en: 'Express (3-7 days, +25%)' }, multiplier: 1.25 },
];

export default function DevisCalculator() {
  const { lang } = useT();
  const [selectedType, setSelectedType] = useState<string>('vitrine');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['whatsapp', 'domain']);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');

  const activeProjectType = PROJECT_TYPES.find((p) => p.id === selectedType) || PROJECT_TYPES[0];

  const totalEstimate = useMemo(() => {
    let price = activeProjectType.basePrice;
    selectedFeatures.forEach((featId) => {
      const feat = FEATURES.find((f) => f.id === featId);
      if (feat) price += feat.price;
    });
    const timeline = TIMELINES.find((t) => t.id === selectedTimeline);
    if (timeline) price *= timeline.multiplier;
    return Math.round(price);
  }, [activeProjectType, selectedFeatures, selectedTimeline]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fr-FR').format(amount) + ' FCFA';
  };

  const generateWhatsAppUrl = () => {
    const featureNames = selectedFeatures
      .map((fId) => FEATURES.find((f) => f.id === fId)?.name.fr)
      .filter(Boolean)
      .join(', ');

    const text = encodeURIComponent(
      `Bonjour EyesTechnology ! J'ai effectué une estimation sur votre site :\n` +
      `- Type : ${activeProjectType.name.fr}\n` +
      `- Options : ${featureNames || 'Aucune'}\n` +
      `- Estimation : environ ${formatPrice(totalEstimate)}\n` +
      `Je souhaite obtenir un devis officiel.`
    );
    return `https://wa.me/22393739935?text=${text}`;
  };

  return (
    <section id="devis-calculator" className="section-padding bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="container-max">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">
            {lang === 'fr' ? 'Estimation Instantanée' : 'Instant Estimate'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">
            {lang === 'fr' ? 'Calculez le budget de votre ' : 'Calculate Your Project '}
            <span className="gradient-text">{lang === 'fr' ? 'projet' : 'Budget'}</span>
          </h2>
          <p className="text-gray-800 dark:text-gray-200">
            {lang === 'fr'
              ? 'Sélectionnez vos besoins pour obtenir une estimation immédiate en FCFA. Sans engagement.'
              : 'Select your requirements to get an instant estimate in FCFA. No commitment required.'}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Options Selection */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Project Type */}
            <Reveal>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-bold">1</span>
                  {lang === 'fr' ? 'Type de projet' : 'Project Type'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_TYPES.map((type) => {
                    const Icon = type.icon;
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? 'border-primary-500 bg-primary-500/10 shadow-sm ring-1 ring-primary-500'
                            : 'border-gray-200 dark:border-white/10 hover:border-primary-500/50 bg-white/50 dark:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={`w-5 h-5 ${isSelected ? 'text-primary-500' : 'text-gray-400'}`} />
                          {isSelected && <Check className="w-4 h-4 text-primary-500" />}
                        </div>
                        <p className="font-semibold text-sm mb-1">{type.name[lang]}</p>
                        <p className="text-xs text-gray-700 dark:text-gray-200">{type.desc[lang]}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Step 2: Features */}
            <Reveal delay={0.1}>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-bold">2</span>
                  {lang === 'fr' ? 'Fonctionnalités souhaitées' : 'Desired Features'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FEATURES.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat.id);
                    return (
                      <button
                        key={feat.id}
                        type="button"
                        onClick={() => toggleFeature(feat.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                          isSelected
                            ? 'border-primary-500 bg-primary-500/10'
                            : 'border-gray-200 dark:border-white/10 hover:border-primary-500/30 bg-white/50 dark:bg-white/5'
                        }`}
                      >
                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-primary-500 border-primary-500 text-white' : 'border-gray-400'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <p className="text-xs font-medium">{feat.name[lang]}</p>
                          <p className="text-[11px] text-gray-700 dark:text-gray-200 mt-0.5">+ {formatPrice(feat.price)}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Step 3: Timeline */}
            <Reveal delay={0.2}>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-bold">3</span>
                  {lang === 'fr' ? 'Délai de livraison' : 'Delivery Timeline'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TIMELINES.map((tLine) => {
                    const isSelected = selectedTimeline === tLine.id;
                    return (
                      <button
                        key={tLine.id}
                        type="button"
                        onClick={() => setSelectedTimeline(tLine.id)}
                        className={`p-3.5 rounded-xl border text-left text-sm font-medium transition-all ${
                          isSelected
                            ? 'border-primary-500 bg-primary-500/10 text-primary-600 dark:text-primary-400 font-semibold'
                            : 'border-gray-200 dark:border-white/10 hover:border-primary-500/30'
                        }`}
                      >
                        {tLine.name[lang]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Estimate Summary Box */}
          <div className="lg:col-span-5">
            <Reveal delay={0.3} className="sticky top-24">
              <div className="glass-card p-6 sm:p-8 border-2 border-primary-500/30 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 text-xs font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider mb-2">
                  <Zap className="w-4 h-4" />
                  {lang === 'fr' ? 'Résultat de l\'estimation' : 'Estimated Total'}
                </div>

                <div className="my-4">
                  <p className="text-xs text-gray-700 dark:text-gray-200 mb-1">
                    {lang === 'fr' ? 'Estimation indicative en FCFA :' : 'Estimated total in FCFA:'}
                  </p>
                  <motion.div
                    key={totalEstimate}
                    initial={{ scale: 0.95, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-2xl sm:text-3xl font-extrabold gradient-text"
                  >
                    {formatPrice(totalEstimate)}
                  </motion.div>
                </div>

                <div className="space-y-2 py-4 border-t border-b border-gray-200 dark:border-white/10 my-4 text-xs text-gray-800 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-success-500 shrink-0" />
                    <span>{lang === 'fr' ? 'Étude & Cahier des charges gratuit' : 'Free spec & requirement analysis'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary-500 shrink-0" />
                    <span>{lang === 'fr' ? '30 jours de garantie & suivi inclus' : '30-day warranty & support included'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-accent-500 shrink-0" />
                    <span>{lang === 'fr' ? 'Paiement sécurisé Wave & Orange Money' : 'Wave & Orange Money Payment Accepted'}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center bg-emerald-600 hover:bg-emerald-500 border-none shadow-lg shadow-emerald-600/20 text-white"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {lang === 'fr' ? 'Envoyer sur WhatsApp' : 'Send via WhatsApp'}
                  </a>

                  <Link
                    to="/contact"
                    className="btn-secondary w-full justify-center text-xs"
                  >
                    <Send className="w-4 h-4" />
                    {lang === 'fr' ? 'Demander un devis officiel' : 'Request Official Quote'}
                  </Link>
                </div>

                <p className="text-[11px] text-gray-700 dark:text-gray-200 text-center mt-4">
                  {lang === 'fr'
                    ? '* Prix fixe garanti après validation finale du devis.'
                    : '* Fixed price confirmed upon quote validation.'}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
