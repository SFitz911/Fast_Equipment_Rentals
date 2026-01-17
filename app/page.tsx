import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import EquipmentSelection from '@/components/sections/EquipmentSelection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Testimonials from '@/components/sections/Testimonials';
import CallToAction from '@/components/sections/CallToAction';
import Contact from '@/components/sections/Contact';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Logo Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <Image
              src="/images/logos/logo_2.0.png"
              alt="Fast Equipment Rentals Logo"
              width={3000}
              height={900}
              className="h-[768px] w-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <HowItWorks />
      <EquipmentSelection />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Contact />
    </div>
  );
}