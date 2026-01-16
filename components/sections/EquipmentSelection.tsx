import Link from 'next/link';

export default function EquipmentSelection() {
  const equipmentTypes = [
    {
      title: 'Construction Equipment',
      description: 'Heavy-duty machinery for construction projects, excavation, and site preparation.',
    },
    {
      title: 'Industrial Equipment',
      description: 'Professional-grade industrial machinery for manufacturing and large-scale operations.',
    },
    {
      title: 'Specialty Equipment',
      description: 'Specialized tools and equipment for unique projects and specific industry needs.',
    },
    {
      title: 'Tools & Accessories',
      description: 'Comprehensive selection of hand tools, power tools, and essential accessories.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Equipment Rental Selection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality equipment for every need in your area.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentTypes.map((equipment, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {equipment.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {equipment.description}
              </p>
              <Link
                href="/equipment"
                className="text-blue-600 font-semibold hover:text-blue-700 transition inline-flex items-center gap-2"
              >
                View Details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}