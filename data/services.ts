export type Service = {
  id: string;
  name: string;
  description: string;
  duration: number; // minutes
  price: number;
};

export const services: Service[] = [
  {
    id: '1',
    name: 'Haircut',
    description: 'Professional haircut tailored to your style.',
    duration: 30,
    price: 500,
  },
  {
    id: '2',
    name: 'Beard Trim',
    description: 'Clean and sharp beard trim.',
    duration: 20,
    price: 300,
  },
  {
    id: '3',
    name: 'Full Grooming',
    description: 'Haircut, beard trim, and styling.',
    duration: 60,
    price: 1000,
  },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  price: number;
};

export const services: Service[] = [
  { id: '1', name: 'Haircut', description: 'Professional haircut tailored to your style.', duration: 30, price: 500 },
  { id: '2', name: 'Beard Trim', description: 'Clean and sharp beard trim.', duration: 20, price: 300 },
  { id: '3', name: 'Full Grooming', description: 'Haircut, beard trim, and styling.', duration: 60, price: 1000 },
];
