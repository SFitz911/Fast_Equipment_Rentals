'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logos/fast-equipment-rentals-transparent.png"
                alt="Fast Equipment Rentals"
                width={350}
                height={105}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white font-medium transition">
              Home
            </Link>
            <Link href="/equipment" className="text-gray-300 hover:text-white font-medium transition">
              Equipment
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white font-medium transition">
              Contact
            </Link>
          </div>

          {/* Right side - Phone and CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:+1234567890" className="text-gray-300 hover:text-white font-semibold transition">
              (123) 456-7890
            </a>
            <Link
              href="/book"
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition shadow-md"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col items-end space-y-3">
              <Link 
                href="/" 
                className="w-full sm:w-auto text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition border border-red-800 shadow-md"
              >
                Home
              </Link>
              <Link 
                href="/equipment" 
                className="w-full sm:w-auto text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition border border-red-800 shadow-md"
              >
                Equipment
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition border border-red-800 shadow-md"
              >
                Contact
              </Link>
              <a 
                href="tel:+1234567890" 
                className="w-full sm:w-auto text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition border border-red-800 shadow-md"
              >
                (123) 456-7890
              </a>
              <Link
                href="/book"
                className="w-full sm:w-auto text-center bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition border border-red-800 shadow-md"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}