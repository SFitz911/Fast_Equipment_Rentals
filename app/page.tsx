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
    <div className="min-h-screen bg-gray-800">
      <Hero />
          {/* Equipment Image Section */}
          <section className="py-12 bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center">
                <Image
                  src="/images/equipment/3.png"
                  alt="Equipment"
                  width={1200}
                  height={800}
                  className="max-w-full h-auto object-contain rounded-lg shadow-lg"
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