import HeroSection from '@/components/HeroSection/HeroSection';
import StatsSection from '@/components/StatsSection/StatsSection';
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid';
import CallToAction from '@/components/CallToAction/CallToAction';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesGrid />
      <CallToAction />
    </>
  );
}
