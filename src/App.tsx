import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ScrollProgress from '@/components/ScrollProgress';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Home from '@/pages/Home';

const Services = lazy(() => import('@/pages/Services'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Contact = lazy(() => import('@/pages/Contact'));
const LegalNotice = lazy(() => import('@/pages/LegalPage'));
const PrivacyPolicy = lazy(() => import('@/pages/LegalPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4"
    >
      <span className="text-8xl font-bold gradient-text mb-4">404</span>
      <h1 className="text-2xl font-semibold mb-2">Page introuvable</h1>
      <p className="text-gray-700 dark:text-gray-200 mb-8 max-w-sm">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Link to="/" className="btn-primary">
        Retour à l'accueil
      </Link>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Suspense fallback={<PageLoader />}><Services /></Suspense>} />
        <Route path="/pricing" element={<Suspense fallback={<PageLoader />}><Pricing /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
        <Route path="/mentions-legales" element={<Suspense fallback={<PageLoader />}><LegalNotice kind="notice" /></Suspense>} />
        <Route path="/politique-de-confidentialite" element={<Suspense fallback={<PageLoader />}><PrivacyPolicy kind="privacy" /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <ScrollProgress />
            <Navbar />
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            <Footer />
            <WhatsAppFloat />
            <BackToTop />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
