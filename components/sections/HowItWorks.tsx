export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Browse Our Equipment',
      description: 'Explore our selection of equipment for every need, from construction to specialty tools.',
    },
    {
      number: '2',
      title: 'Book Online',
      description: 'Book online to request a smooth, secure reservation process.',
    },
    {
      number: '3',
      title: 'Pick Up & Go',
      description: 'Enjoy our effortless pickup process and get started with your clean, safe equipment.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to get your equipment rental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}