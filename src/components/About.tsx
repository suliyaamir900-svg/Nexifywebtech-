import React from 'react';
import { COMPANY_VALUES } from '../data/portfolioData';
import {
  Sparkles,
  CheckCircle2,
  Target,
  Eye,
  Award,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
} from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link } from '../router/Router';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      title: '4+ Years of Industry Experience',
      desc: 'Continuous software engineering, product design, and client delivery across India and international markets.',
    },
    {
      title: '50+ Websites & Web Platforms',
      desc: 'High-conversion business websites, interactive portals, and modern cloud web apps built with speed and security.',
    },
    {
      title: '20+ Android Mobile Applications',
      desc: 'Native and hybrid apps for business records, attendance, field teams, and offline-first productivity.',
    },
    {
      title: '10+ Windows Desktop Systems',
      desc: 'Robust retail POS, medical store management, hotel billing, and institute accounting software.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Code2,
      title: 'Complete Source Ownership',
      desc: 'Zero vendor lock-in. Upon project completion you own your repositories, installers, and design assets.',
    },
    {
      icon: ShieldCheck,
      title: 'Dependable Offline-First Builds',
      desc: 'Windows desktop suites and Android apps engineered to keep running smoothly even without constant internet.',
    },
    {
      icon: Zap,
      title: 'Direct Engineer Access',
      desc: 'Communicate directly with the engineering leads building your software—no fragmented agency layers.',
    },
  ];

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge="About NEXIFYWEBTECH"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Building Technology That Makes a Difference."
        description="NEXIFYWEBTECH is a software engineering and IT solutions agency dedicated to transforming complex workflows into intuitive, reliable, and practical digital products."
        breadcrumbs={[{ label: 'About Us' }]}
        darkMode={darkMode}
      />

      {/* Company Overview */}
      <div
        className={`p-8 sm:p-12 rounded-3xl border space-y-6 relative overflow-hidden ${
          darkMode ? 'bg-[#181A20] border-[#30343D] shadow-2xl' : 'bg-white border-[#DCE2EC] shadow-xl'
        }`}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41, 121, 255, 0.14), transparent 70%)' }}
        />
        <h2 className="text-2xl sm:text-3xl font-bold relative z-10">Company Overview</h2>
        <p className={`leading-relaxed relative z-10 text-base sm:text-lg ${darkMode ? 'text-white/90' : 'text-[#101114]'}`}>
          Our engineering spectrum covers Windows desktop software, Android mobile applications, responsive business websites, scalable web applications, Point of Sale (POS) systems, custom accounting tools, and browser utilities.
        </p>
        <p className={`leading-relaxed relative z-10 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          Guided by our core ethos—Ideas Into Digital Reality—we believe technology should remove friction from everyday operations, streamline billing and customer records, and provide lasting value without bloated complexity.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className={`p-8 rounded-3xl border space-y-4 transition-all ${
            darkMode
              ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF]'
              : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/15 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30 flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Our Mission</h3>
          <p className={`leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            "To transform ambitious ideas into practical, reliable, and user-friendly digital solutions that empower businesses to scale smoothly."
          </p>
        </div>

        <div
          className={`p-8 rounded-3xl border space-y-4 transition-all ${
            darkMode
              ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF]'
              : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/15 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30 flex items-center justify-center">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Our Vision</h3>
          <p className={`leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            "To be recognized as a premier software development partner known for craftsmanship, performance, transparent pricing, and unwavering reliability."
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold">Why Businesses Choose NEXIFYWEBTECH</h2>
          <p className={`text-sm ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Practical engineering discipline paired with transparent communication from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl border space-y-4 transition-all ${
                  darkMode
                    ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_38px_-14px_rgba(41,121,255,0.28)]'
                    : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/15 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Core Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold">Our Core Values</h2>
          <p className={`text-sm ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Principles that guide every architecture decision, code commit, and client interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_VALUES.map((val, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border space-y-3 transition-colors ${
                darkMode
                  ? 'bg-[#181A20] border-[#30343D] hover:border-[#2979FF]/60'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF]/60 shadow-sm'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold">{val.title}</h4>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Track Record Highlights */}
      <div
        className={`p-8 sm:p-12 rounded-3xl border space-y-8 ${
          darkMode ? 'bg-[#181A20] border-[#30343D] shadow-xl' : 'bg-white border-[#DCE2EC] shadow-xl'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Our Engineering Track Record</h2>
          <p className={`text-sm ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Consistent delivery across diverse platforms and business domains.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className={`flex items-start space-x-4 p-5 rounded-2xl border ${
                darkMode ? 'bg-[#202329] border-[#30343D]' : 'bg-[#F6F8FC] border-[#DCE2EC]'
              }`}
            >
              <Award className="w-6 h-6 text-[#2979FF] dark:text-[#55A3FF] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm sm:text-base">{h.title}</h4>
                <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  {h.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Bottom CTA */}
      <div
        className={`text-center p-10 rounded-3xl border space-y-6 ${
          darkMode
            ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
            : 'bg-white border-[#DCE2EC] shadow-xl'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold">Have a Project in Mind?</h3>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          Let’s discuss your requirements and engineer a custom digital experience built specifically for your goals.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
            Explore All Services
          </Link>
        </div>
      </div>
    </div>
  );
};
