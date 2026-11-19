import React from 'react';
import { Hero } from './Hero';
import { Process } from './Process';
import { Testimonials } from './Testimonials';
import { Technologies } from './Technologies';
import { ConnectWithUs } from './ConnectWithUs';
import { PRODUCTS_DATA } from '../data/portfolioData';
import {
  Monitor,
  Smartphone,
  Globe,
  ShoppingBag,
  Wrench,
  Gamepad2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Zap,
  Code2,
} from 'lucide-react';
import { ProductItem } from '../types';
import { Link } from '../router/Router';

interface HomeProps {
  darkMode: boolean;
  onSelectCategory: (cat: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onStartProject: (title?: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  darkMode,
  onSelectCategory,
  onSelectProduct,
  onStartProject,
}) => {
  const quickCategories = [
    {
      id: 'windows',
      title: 'Windows Software',
      desc: 'Powerful POS and business desktop applications engineered for Windows.',
      icon: Monitor,
    },
    {
      id: 'android',
      title: 'Android Applications',
      desc: 'Mobile apps for business management, wages, and everyday operations.',
      icon: Smartphone,
    },
    {
      id: 'web',
      title: 'Web Applications',
      desc: 'Cloud web applications, management portals, and clinic/hotel suites.',
      icon: ShoppingBag,
    },
    {
      id: 'website',
      title: 'Websites and Digital Platforms',
      desc: 'High-performance platforms like PDFLove and modern corporate websites.',
      icon: Globe,
    },
    {
      id: 'tools',
      title: 'Digital Tools',
      desc: 'Fast browser-based PDF, image, calculation, and developer utilities.',
      icon: Wrench,
    },
    {
      id: 'games',
      title: 'Games & Entertainment',
      desc: 'Engaging logic puzzle games and interactive digital experiences.',
      icon: Gamepad2,
    },
  ];

  const featuredProjects = PRODUCTS_DATA.slice(0, 6);

  const whyChooseUs = [
    {
      icon: Code2,
      title: '100% Source Code Ownership',
      desc: 'You own every line of custom code, design asset, and repository upon completion with zero vendor lock-in.',
    },
    {
      icon: ShieldCheck,
      title: 'Offline-First Reliability',
      desc: 'Our desktop POS and Android field apps keep working smoothly even when internet connectivity drops.',
    },
    {
      icon: Zap,
      title: 'Transparent Milestones',
      desc: 'Written technical scopes, live build previews, and clear payment stages from discovery to final launch.',
    },
  ];

  const getStatusBadge = (status: ProductItem['status']) => {
    switch (status) {
      case 'Available':
        return darkMode
          ? 'bg-[#2979FF]/15 text-[#55A3FF] border-[#2979FF]/35'
          : 'bg-[#2979FF]/10 text-[#2979FF] border-[#2979FF]/30';
      case 'In Development':
        return darkMode
          ? 'bg-[#55A3FF]/12 text-[#55A3FF] border-[#55A3FF]/30'
          : 'bg-[#2979FF]/8 text-[#1D63DC] border-[#2979FF]/25';
      case 'Custom Development':
        return darkMode
          ? 'bg-white/8 text-white border-[#30343D]'
          : 'bg-[#101114]/5 text-[#101114] border-[#DCE2EC]';
      default:
        return darkMode
          ? 'bg-[#181A20] text-[#A7ADB8] border-[#30343D]'
          : 'bg-[#F6F8FC] text-[#4B5565] border-[#DCE2EC]';
    }
  };

  return (
    <div className={`space-y-24 pb-20 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      {/* Split Hero Section */}
      <Hero darkMode={darkMode} />

      {/* About & Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-12 rounded-3xl border relative overflow-hidden ${
            darkMode
              ? 'bg-[#181A20] border-[#30343D] shadow-2xl'
              : 'bg-white border-[#DCE2EC] shadow-xl'
          }`}
        >
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(41, 121, 255, 0.14), transparent 70%)' }}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 text-xs font-semibold uppercase tracking-wider">
                <span>About NEXIFYWEBTECH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Your Technology Partner for Digital Growth.
              </h2>
              <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                NEXIFYWEBTECH is a software development and IT solutions company dedicated to building practical, modern, and user-friendly digital products for businesses, professionals, and organizations worldwide.
              </p>
              <p className={`text-sm sm:text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                We turn everyday operational bottlenecks into streamlined desktop software, native Android apps, and scalable web platforms.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="nexify-btn-primary px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center space-x-2"
                >
                  <span>About Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="nexify-btn-secondary px-6 py-3 rounded-xl font-semibold text-sm"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3.5">
              {whyChooseUs.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl border flex items-start space-x-3.5 transition-colors ${
                      darkMode
                        ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF]/60'
                        : 'bg-[#F6F8FC] border-[#DCE2EC] hover:border-[#2979FF]/60'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2979FF]/12 border border-[#2979FF]/30 text-[#2979FF] dark:text-[#55A3FF] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                      <p className={`text-xs mt-1 leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 text-xs font-semibold uppercase tracking-wider">
            Core Engineering Domains
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold">Explore Our Development Categories</h2>
          <p className={`text-sm sm:text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Discover our comprehensive suite of software, applications, and digital solutions built for modern operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                onClick={() => onSelectCategory(cat.id)}
                className={`group p-8 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  darkMode
                    ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.30)]'
                    : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg hover:shadow-xl'
                }`}
              >
                <div className="space-y-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#2979FF]/12 border border-[#2979FF]/30 text-[#2979FF] dark:text-[#55A3FF] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#2979FF] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors">
                    {cat.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-6 flex items-center space-x-2 text-sm font-semibold text-[#2979FF] dark:text-[#55A3FF] group-hover:translate-x-1 transition-transform">
                  <span>Explore category</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products & Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center px-3.5 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] text-xs font-semibold uppercase tracking-wider border border-[#2979FF]/25">
            Our Developed Software &amp; Products
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Projects – Digital Solutions Built for Real Needs.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Explore our range of software applications, business management systems, digital tools and custom technology solutions designed to simplify everyday work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featuredProjects.map((product) => (
            <div
              key={product.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                darkMode
                  ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_20px_42px_-16px_rgba(41,121,255,0.30)]'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
              }`}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-[#181A20]">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-semibold bg-[#101114]/88 text-[#55A3FF] border border-[#2979FF]/40 backdrop-blur-md">
                    {product.platform}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF]">
                      NEXIFYWEBTECH Portfolio
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border ${getStatusBadge(product.status)}`}>
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    {product.shortDesc}
                  </p>
                </div>
              </div>

              <div className={`p-6 pt-0 border-t mt-3 ${darkMode ? 'border-[#30343D]/70' : 'border-[#DCE2EC]'}`}>
                <div className="flex items-center gap-2.5 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(product)}
                    className="nexify-btn-primary flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {product.liveWebsiteUrl && (
                    <a
                      href={product.liveWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nexify-btn-secondary px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 whitespace-nowrap"
                      title="Visit Live Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12">
          <Link
            href="/products"
            className="nexify-btn-secondary inline-flex items-center space-x-3 px-8 py-3.5 rounded-xl font-bold text-sm"
          >
            <span>View Full Products &amp; Software Catalog</span>
            <ArrowRight className="w-4 h-4 text-[#2979FF] dark:text-[#55A3FF]" />
          </Link>
        </div>
      </section>

      {/* Technologies & Engineering Stack Section */}
      <section className="relative">
        <Technologies darkMode={darkMode} isStandalonePage={false} />
      </section>

      {/* Process Section Overview */}
      <section className="relative">
        <Process darkMode={darkMode} />
        <div className="text-center pt-6">
          <Link
            href="/process"
            className="inline-flex items-center space-x-2 font-semibold text-[#2979FF] dark:text-[#55A3FF] hover:underline text-sm"
          >
            <span>Explore our full 6-step project delivery methodology</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="relative">
        <Testimonials darkMode={darkMode} isFeaturedOnly={true} />
        <div className="text-center pt-6">
          <Link
            href="/testimonials"
            className="inline-flex items-center space-x-2 font-semibold text-[#2979FF] dark:text-[#55A3FF] hover:underline text-sm"
          >
            <span>Read all authentic client success stories &amp; reviews</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Connect With Us Section */}
      <ConnectWithUs darkMode={darkMode} onStartProject={onStartProject} />
    </div>
  );
};
