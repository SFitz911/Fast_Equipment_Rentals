export default function Testimonials() {
  const testimonials = [
    {
      name: 'John D.',
      content: 'I rented construction equipment from Fast Equipment Rentals, and the entire experience was excellent. The team was professional from start to finish. The equipment was clean, well-maintained, and perfect for my project. I even had to extend my rental last minute, and they made the process quick and hassle-free. Great customer service, great equipment — definitely a 5-star experience all around. Highly recommend!',
    },
    {
      name: 'Sarah M.',
      content: 'I can attest to the outstanding customer service. Excellent communication during the entire rental process. They patiently took extra time to help me resolve an issue I had with equipment setup. Also, the pickup and return process went very smoothly. Thank you!',
    },
    {
      name: 'Michael T.',
      content: 'The team at Fast Equipment Rentals was awesome. The equipment was neat, clean, and organized. They supply all the necessary accessories and basic supplies that were helpful. If you\'re looking for well-maintained equipment, call them. It was great working with them.',
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real feedback from professionals like you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.content}"
              </p>
              <p className="text-gray-900 font-semibold">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">Had a great experience with us?</p>
          <button className="text-red-600 font-semibold hover:text-red-700 transition">
            Leave us a 5-star review
          </button>
        </div>
      </div>
    </section>
  );
}