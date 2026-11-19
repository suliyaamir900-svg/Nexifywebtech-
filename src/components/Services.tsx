import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { ServiceItem } from '../types';
import {
  Smartphone,
  Monitor,
  Globe,
  Layout,
  ShoppingBag,
  Cpu,
  Palette,
  Wrench,
  Gamepad2,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Eye,
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { ServiceDetailModal } from './ServiceDetailModal';
import { Link, useRouter } from '../router/Router';

interface ServicesProps {
  darkMode: boolean;
  onStartProject: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ darkMode, onStartProject }) => {
  const { navigate } = useRouter();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Smartphone,
    Monitor,
    Globe,
    Layout,
    ShoppingBag,
    Cpu,
    Palette,
    Wrench,
    Gamepad2,
    Headphones,
  };

  const handleInquire = (serviceTitle: string) => {
    onStartProject(serviceTitle);
    navigate(`/inquiry?project=${encodeURIComponent(serviceTitle)}`);
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge="Our Professional Services"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Comprehensive IT & Software Solutions"
        description="We engineer custom software, native and hybrid mobile apps, high-speed Windows desktop systems, and modern web platforms tailored to your business operations."
        breadcrumbs={[{ label: 'Services' }]}
        darkMode={darkMode}
      />

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {SERVICES_DATA.map((srv) => {
          const Icon = iconMap[srv.iconName] || Monitor;
          return (
            <div
              key={srv.id}
              className={`p-7 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 group ${
                darkMode
                  ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_20px_42px_-16px_rgba(41,121,255,0.30)]'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-[#2979FF]/12 border border-[#2979FF]/30 text-[#2979FF] dark:text-[#55A3FF] flex items-center justify-center group-hover:bg-[#2979FF] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border ${
                      darkMode ? 'bg-[#181A20] border-[#30343D] text-[#A7ADB8]' : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#4B5565]'
                    }`}
                  >
                    {srv.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors">
                  {srv.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  {srv.description}
                </p>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider">
                    Key Deliverables
                  </div>
                  <ul className="space-y-1.5">
                    {srv.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className={`flex items-center space-x-2 text-xs ${darkMode ? 'text-white/85' : 'text-[#101114]'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF] shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-7 flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className="nexify-btn-secondary flex-1 py-2.5 px-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />
                  <span>Details</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleInquire(srv.title)}
                  className="nexify-btn-primary flex-1 py-2.5 px-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div
        className={`text-center p-10 rounded-3xl border space-y-6 ${
          darkMode
            ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
            : 'bg-white border-[#DCE2EC] shadow-xl'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold">Need a Tailored Software Solution?</h3>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          From full-stack web applications to automated Windows POS workflows, we build dependable digital products with clean code and long-term support.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/pricing" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
            Explore Pricing &amp; Packages
          </Link>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProject={handleInquire}
        darkMode={darkMode}
      />
    </div>
  );
};
