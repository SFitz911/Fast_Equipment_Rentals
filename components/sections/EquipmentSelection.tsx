import Link from 'next/link';
import { equipmentData } from '@/data/equipment';

export default function EquipmentSelection() {
  const equipment = equipmentData;

  return (
    <section id="equipment" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Equipment Rental Selection
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Quality equipment for every need in your area.
          </p>
        </div>

        {/* Equipment Grid - Scrollable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
                <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-lg shadow-lg">
                  {item.price}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {item.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/book"
                  className="block w-full bg-red-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/equipment"
            className="text-red-600 hover:text-red-700 font-semibold text-lg inline-flex items-center gap-2"
          >
            View All Equipment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}