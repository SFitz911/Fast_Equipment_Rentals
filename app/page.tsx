import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import EquipmentSelection from '@/components/sections/EquipmentSelection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <EquipmentSelection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
    </div>
  );
}