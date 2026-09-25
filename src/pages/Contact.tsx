import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Twitter, Linkedin, AlertCircle } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';
import { useT } from '@/data/i18n';

const WHATSAPP_NUMBER = '22393739935';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { t, lang } = useT();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    const text = `Bonjour EyesTechnology ! 👋\n\n*Nom :* ${data.name}\n*Email :* ${data.email}\n*Sujet :* ${data.subject}\n\n*Message :*\n${data.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
    reset();
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border transition-colors duration-200 outline-none focus:ring-2 focus:ring-primary-500/40 ${
      hasError
        ? 'border-error-500 focus:border-error-500'
        : 'border-gray-200 dark:border-white/10 focus:border-primary-500'
    }`;

  return (
    <PageWrapper>
      <Seo page="contact" />
      <section className="section-padding">
        <div className="container-max">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label">
              {t.contact.label[lang]}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-4">
              {t.contact.title[lang]}<span className="gradient-text">{t.contact.titleAccent[lang]}</span>
            </h1>
            <p className="text-gray-800 dark:text-gray-200">
              {t.contact.description[lang]}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <Reveal className="lg:col-span-2">
              <div className="glass-card p-6 h-full">
                <h3 className="text-lg font-semibold mb-6">{t.contact.getInTouch[lang]}</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: t.contact.email[lang], value: t.contact.emailValue, href: `mailto:${t.contact.emailValue}` },
                    { icon: Phone, label: t.contact.whatsapp[lang], value: t.contact.whatsappValue, href: `https://wa.me/${WHATSAPP_NUMBER}` },
                    { icon: MapPin, label: t.contact.location[lang], value: t.contact.locationValue[lang] },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-500/10 text-primary-600 dark:text-primary-400 shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-700 dark:text-gray-200">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary-500 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-white transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {lang === 'fr' ? 'Discuter sur WhatsApp' : 'Chat on WhatsApp'}
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                  <p className="text-xs text-gray-700 dark:text-gray-200 mb-3">{t.contact.followMe[lang]}</p>
                  <div className="flex gap-3">
                    {[
                      { icon: Github, href: 'https://github.com', label: 'GitHub' },
                      { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                      { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-white/10 hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Contact Form → WhatsApp */}
            <Reveal delay={0.2} className="lg:col-span-3">
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-6 sm:p-8 space-y-5">

                {/* WhatsApp badge */}
                <div className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
                  style={{ background: 'rgba(37, 211, 102, 0.1)', border: '1px solid rgba(37, 211, 102, 0.3)', color: '#25D366' }}>
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {lang === 'fr'
                    ? 'Ce formulaire vous redirige directement sur WhatsApp'
                    : 'This form redirects you directly to WhatsApp'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.name[lang]} <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.namePlaceholder[lang]}
                      className={inputClass(!!errors.name)}
                      {...register('name', { required: t.contact.nameRequired[lang], minLength: { value: 2, message: t.contact.nameMinLength[lang] } })}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t.contact.email[lang]} <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className={inputClass(!!errors.email)}
                      {...register('email', {
                        required: t.contact.emailRequired[lang],
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t.contact.emailInvalid[lang] },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.subject[lang]} <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t.contact.subjectPlaceholder[lang]}
                    className={inputClass(!!errors.subject)}
                    {...register('subject', { required: t.contact.subjectRequired[lang], minLength: { value: 3, message: t.contact.subjectMinLength[lang] } })}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t.contact.message[lang]} <span className="text-error-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t.contact.messagePlaceholder[lang]}
                    className={`${inputClass(!!errors.message)} resize-none`}
                    {...register('message', { required: t.contact.messageRequired[lang], minLength: { value: 10, message: t.contact.messageMinLength[lang] } })}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-error-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {lang === 'fr' ? 'Envoyer via WhatsApp' : 'Send via WhatsApp'}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
