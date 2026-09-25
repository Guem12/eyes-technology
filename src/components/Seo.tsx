import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useT } from '@/data/i18n';

const SITE_URL = 'https://eyestechnology.ml';

export const SITE_URLS = {
  home: SITE_URL,
  services: `${SITE_URL}/services`,
  pricing: `${SITE_URL}/pricing`,
  contact: `${SITE_URL}/contact`,
  legalNotice: `${SITE_URL}/mentions-legales`,
  privacy: `${SITE_URL}/politique-de-confidentialite`,
};

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'EyesTechnology',
  description:
    'Développeur web et mobile freelance à Bamako : sites vitrines, e-commerce, applications sur mesure.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: '+22393739935',
  email: 'beidydia61@gmail.com',
  founder: { '@type': 'Person', name: 'Beidy Dia' },
  employee: { '@type': 'Person', name: 'Beidy Dia' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bamako',
    addressCountry: 'ML',
  },
  areaServed: [
    { '@type': 'City', name: 'Bamako' },
    { '@type': 'Country', name: 'Mali' },
  ],
  priceRange: '150000-1000000 XOF',
  currenciesAccepted: 'XOF',
  paymentAccepted: 'Wave, Orange Money, Moov Money, Bank Transfer',
  sameAs: [],
};

interface SeoProps {
  page: 'home' | 'services' | 'pricing' | 'contact' | 'legalNotice' | 'privacy';
}

export default function Seo({ page }: SeoProps) {
  const { t, lang } = useT();
  const location = useLocation();

  useEffect(() => {
    const meta = t.meta[page];
    document.title = meta.title;
    setMeta('name', 'description', meta.desc);
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.desc);
    setMeta('property', 'og:url', SITE_URL + location.pathname);
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.desc);
    setCanonical(SITE_URLS[page]);
  }, [page, lang, location.pathname, t]);

  useEffect(() => {
    let el = document.head.querySelector<HTMLScriptElement>('script[data-seo="local-business"]');
    if (!el) {
      el = document.createElement('script');
      el.setAttribute('type', 'application/ld+json');
      el.setAttribute('data-seo', 'local-business');
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(LOCAL_BUSINESS_JSONLD);
  }, []);

  return null;
}
