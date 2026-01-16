export interface Equipment {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  availableDate?: string;
  rentedDate?: string;
  status: 'available' | 'rented';
}

export const equipmentData: Equipment[] = [
  {
    id: 1,
    name: 'Utility Trailer - Flatbed',
    type: 'Utility Trailers',
    price: '$85/day',
    image: '/images/equipment/3.png',
    description: 'Versatile flatbed utility trailer perfect for hauling equipment, ATVs, motorcycles, and building materials.',
    features: ['7x12 ft deck', '2,000 lb capacity', 'Ramp gate included'],
    availableDate: '2026-01-20',
    status: 'available',
  },
  {
    id: 2,
    name: 'Enclosed Cargo Trailer',
    type: 'Enclosed Trailers',
    price: '$120/day',
    image: '/images/equipment/4.png',
    description: 'Secure enclosed trailer for valuable items, equipment, and weather-sensitive cargo.',
    features: ['6x12 ft interior', 'Lockable doors', 'Weatherproof'],
    rentedDate: '2026-01-18',
    status: 'rented',
  },
  {
    id: 3,
    name: 'Moving Trailer - Large',
    type: 'Moving Trailers',
    price: '$150/day',
    image: '/images/equipment/5.png',
    description: 'Spacious enclosed trailer ideal for household moves, furniture transport, and relocations.',
    features: ['8x16 ft interior', 'High roof clearance', 'Tie-down points'],
    availableDate: '2026-01-22',
    status: 'available',
  },
  {
    id: 4,
    name: 'Utility Trailer - Medium',
    type: 'Utility Trailers',
    price: '$75/day',
    image: '/images/equipment/3.png',
    description: 'Compact utility trailer for smaller loads and projects.',
    features: ['5x10 ft deck', '1,500 lb capacity', 'Easy towing'],
    availableDate: '2026-01-19',
    status: 'available',
  },
  {
    id: 5,
    name: 'Enclosed Cargo Trailer - Medium',
    type: 'Enclosed Trailers',
    price: '$100/day',
    image: '/images/equipment/4.png',
    description: 'Mid-size enclosed trailer for secure cargo transport.',
    features: ['6x10 ft interior', 'Side door access', 'Ventilation'],
    rentedDate: '2026-01-17',
    status: 'rented',
  },
  {
    id: 6,
    name: 'Moving Trailer - Medium',
    type: 'Moving Trailers',
    price: '$125/day',
    image: '/images/equipment/5.png',
    description: 'Perfect size for apartment moves and medium relocations.',
    features: ['7x14 ft interior', 'E-track system', 'Smooth floor'],
    availableDate: '2026-01-21',
    status: 'available',
  },
];
