import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import SkillsPreview from '@/components/home/SkillsPreview';
import ProcessSection from '@/components/home/ProcessSection';
import Testimonials from '@/components/home/Testimonials';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';
import PageWrapper from '@/components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Seo page="home" />
      <Hero />
      <ServicesPreview />
      <ProcessSection />
      <SkillsPreview />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </PageWrapper>
  );
}
