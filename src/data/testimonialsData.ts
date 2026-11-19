export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  quote: string;
  projectType: string;
  rating: number;
  avatarBg: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    clientName: 'Rajesh Sharma',
    role: 'Operations Director',
    company: 'RetailSuper Mart',
    quote: 'NEXIFYWEBTECH built our custom Store POS software with incredible precision. Checkout speed increased by 40% and our daily inventory reconciliation is now completely seamless.',
    projectType: 'Windows Store POS System',
    rating: 5,
    avatarBg: 'from-[#2979FF] to-[#1D63DC]'
  },
  {
    id: 't2',
    clientName: 'Dr. Anita Varma',
    role: 'Chief Medical Officer',
    company: 'CarePlus Pharmacy & Clinic',
    quote: 'The Medical POS and batch expiry tracking software developed by NEXIFYWEBTECH has eliminated expired stock risks entirely. Their professionalism and technical support are top-notch.',
    projectType: 'Medical POS & Clinic Suite',
    rating: 5,
    avatarBg: 'from-[#55A3FF] to-[#2979FF]'
  },
  {
    id: 't3',
    clientName: 'Vikram Malhotra',
    role: 'Managing Director',
    company: 'GrandStay Hotels & Resorts',
    quote: 'Our hotel management web platform and room booking system run flawlessly. NEXIFYWEBTECH delivered on time with clean architecture and excellent UI/UX.',
    projectType: 'Hotel Management Web App',
    rating: 5,
    avatarBg: 'from-[#2979FF] to-[#55A3FF]'
  },
  {
    id: 't4',
    clientName: 'Sanjay Patel',
    role: 'Founder & CEO',
    company: 'Patel Logistics & Transport',
    quote: 'The mobile business manager and wage tracking app built for our field team has saved countless hours of paperwork. Highly recommend NEXIFYWEBTECH for custom mobile solutions.',
    projectType: 'Android Business & Wage App',
    rating: 5,
    avatarBg: 'from-[#1D63DC] to-[#55A3FF]'
  },
  {
    id: 't5',
    clientName: 'Priya Nambiar',
    role: 'Principal',
    company: 'Apex Coaching Institute',
    quote: 'Our classes management system handles student admissions, attendance, and fee tracking effortlessly. The team at NEXIFYWEBTECH understands business workflows exceptionally well.',
    projectType: 'Classes Management Software',
    rating: 5,
    avatarBg: 'from-[#2979FF] to-[#1D63DC]'
  },
  {
    id: 't6',
    clientName: 'Amitabh Sen',
    role: 'E-commerce Entrepreneur',
    company: 'UrbanCraft Living',
    quote: 'Our corporate website and e-commerce store load lightning fast and look stunning. We experienced a noticeable boost in online inquiries within the first week of launch.',
    projectType: 'E-commerce Website & SEO',
    rating: 5,
    avatarBg: 'from-[#55A3FF] to-[#2979FF]'
  },
];
