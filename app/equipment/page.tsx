import Link from 'next/link';
import { equipmentData } from '@/data/equipment';

export default function EquipmentPage() {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Equipment Inventory</h1>
          <p className="text-lg text-gray-300">Complete list of available equipment for rent</p>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Equipment
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {equipmentData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    {/* Equipment Name & Type */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.type}</div>
                      </div>
                    </td>

                    {/* Description */}
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600 max-w-md">
                        {item.description}
                      </div>
                    </td>

                    {/* Status Box */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.status === 'available' ? (
                        <div className="inline-flex flex-col bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                          <span className="text-xs font-semibold text-green-700 uppercase mb-1">
                            Available
                          </span>
                          <span className="text-sm text-green-900 font-medium">
                            {formatDate(item.availableDate)}
                          </span>
                        </div>
                      ) : (
                        <div className="inline-flex flex-col bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                          <span className="text-xs font-semibold text-red-700 uppercase mb-1">
                            Rented
                          </span>
                          <span className="text-sm text-red-900 font-medium">
                            Until {formatDate(item.rentedDate)}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-lg font-bold text-red-600">
                        {item.price}
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.status === 'available' ? (
                        <Link
                          href="/book"
                          className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition"
                        >
                          Book Now
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 text-sm font-semibold rounded-lg cursor-not-allowed"
                        >
                          Unavailable
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
