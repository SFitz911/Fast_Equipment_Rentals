import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Fast Equipment Rentals</h3>
            <p className="text-sm">
              Quality equipment rentals serving your business needs with reliable, well-maintained equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/equipment" className="hover:text-white transition">
                  Our Equipment
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Equipment Types */}
          <div>
            <h4 className="text-white font-semibold mb-4">Equipment Types</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/equipment#construction" className="hover:text-white transition">
                  Construction Equipment
                </Link>
              </li>
              <li>
                <Link href="/equipment#industrial" className="hover:text-white transition">
                  Industrial Equipment
                </Link>
              </li>
              <li>
                <Link href="/equipment#specialty" className="hover:text-white transition">
                  Specialty Equipment
                </Link>
              </li>
              <li>
                <Link href="/equipment#tools" className="hover:text-white transition">
                  Tools & Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+1234567890" className="hover:text-white transition">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@fastequipment.com" className="hover:text-white transition">
                  info@fastequipment.com
                </a>
              </li>
              <li className="pt-2">
                <p className="text-xs">24/7 - Always Available</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Fast Equipment Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}