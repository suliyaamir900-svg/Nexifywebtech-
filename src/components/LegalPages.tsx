import React from 'react';
import { Shield, FileText, Network, CheckCircle2 } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link } from '../router/Router';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'sitemap';
  darkMode: boolean;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, darkMode }) => {
  if (type === 'privacy') {
    return (
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
        <PageHeader
          badge="Privacy & Security"
          badgeIcon={<Shield className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
          title="Privacy Policy"
          description="How NEXIFYWEBTECH protects your business records, personal information, and project assets."
          breadcrumbs={[{ label: 'Privacy Policy' }]}
          darkMode={darkMode}
        />

        <div
          className={`p-8 sm:p-12 rounded-3xl border shadow-xl space-y-6 leading-relaxed ${
            darkMode
              ? 'bg-[#202329] border-[#30343D] text-[#A7ADB8]'
              : 'bg-white border-[#DCE2EC] text-[#4B5565]'
          }`}
        >
          <div className="text-xs font-medium">Last updated: November 2026</div>

          <p>
            NEXIFYWEBTECH ("we", "our", or "us") is dedicated to protecting your privacy. This Privacy Policy outlines our standards regarding data collection, protection, and intellectual property when you use our website, consult our engineers, or commission custom software products.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            1. Information We Collect
          </h3>
          <p>
            We collect information provided directly through our project inquiry forms, direct email correspondence, and development requirement sessions. This includes your name, email address, phone number, company profile, and functional software specifications.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            2. How We Use Your Information
          </h3>
          <p>
            We use collected data solely to review project requirements, provide architectural recommendations, issue milestones, build contracted software systems, and provide warranty support. We do not sell or monetize client data under any circumstances.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            3. Source Code &amp; Data Confidentiality
          </h3>
          <p>
            All business logic, database schemas, and proprietary company processes shared with NEXIFYWEBTECH are treated under strict confidentiality. Upon project completion and final settlement, full intellectual property and code ownership belong entirely to the client.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            4. Contacting Our Data Officer
          </h3>
          <p>
            For privacy inquiries or deletion requests, contact our engineering office directly at{' '}
            <a href="mailto:nexifywebtech@gmail.com" className="text-[#2979FF] dark:text-[#55A3FF] font-semibold underline">
              nexifywebtech@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
        <PageHeader
          badge="Legal Terms"
          badgeIcon={<FileText className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
          title="Terms & Conditions"
          description="Guidelines and agreements governing software engineering services, deliverables, and website usage."
          breadcrumbs={[{ label: 'Terms & Conditions' }]}
          darkMode={darkMode}
        />

        <div
          className={`p-8 sm:p-12 rounded-3xl border shadow-xl space-y-6 leading-relaxed ${
            darkMode
              ? 'bg-[#202329] border-[#30343D] text-[#A7ADB8]'
              : 'bg-white border-[#DCE2EC] text-[#4B5565]'
          }`}
        >
          <div className="text-xs font-medium">Last updated: November 2026</div>

          <p>
            Welcome to NEXIFYWEBTECH. By accessing this website or engaging our software engineering services, you agree to comply with and be bound by the following operational terms.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            1. Software Development Engagements
          </h3>
          <p>
            All custom software projects (Android apps, Windows software, web platforms, and digital tools) are governed by agreed milestone scopes. Prior to commencing work, clients receive a written scope document detailing deliverables, timelines, and payment stages.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            2. Deliverables &amp; Intellectual Property
          </h3>
          <p>
            Upon settlement of milestone invoices, the client receives exclusive rights to the customized codebase, compiled assets, and release builds. NEXIFYWEBTECH retains ownership of general proprietary development libraries and generic starter templates.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            3. Post-Delivery Warranty &amp; Support
          </h3>
          <p>
            Every software product delivered by NEXIFYWEBTECH includes our standard bug-fix warranty to ensure delivered features operate according to agreed functional requirements.
          </p>

          <h3 className={`text-lg font-bold pt-2 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
            4. Governing Law
          </h3>
          <p>
            These terms are governed in accordance with the laws of India. For questions, contact us at{' '}
            <a href="mailto:nexifywebtech@gmail.com" className="text-[#2979FF] dark:text-[#55A3FF] font-semibold underline">
              nexifywebtech@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge="Directory & Navigation"
        badgeIcon={<Network className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Complete Website Sitemap"
        description="Index of all official pages, software product catalogs, pricing packages, engineering stack, and direct links across the NEXIFYWEBTECH digital platform."
        breadcrumbs={[{ label: 'Sitemap' }]}
        darkMode={darkMode}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/* Main Pages */}
        <div
          className={`p-7 rounded-3xl border space-y-4 ${
            darkMode ? 'bg-[#202329] border-[#30343D]' : 'bg-white border-[#DCE2EC] shadow-md'
          }`}
        >
          <h3 className="text-lg font-bold text-[#2979FF] dark:text-[#55A3FF]">Main Pages</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/home" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Home (/home)</span></Link></li>
            <li><Link href="/about" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>About Us (/about)</span></Link></li>
            <li><Link href="/services" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Services (/services)</span></Link></li>
            <li><Link href="/projects" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Projects Portfolio (/projects)</span></Link></li>
            <li><Link href="/pricing" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Pricing &amp; Models (/pricing)</span></Link></li>
            <li><Link href="/technologies" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Technologies Stack (/technologies)</span></Link></li>
            <li><Link href="/process" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>6-Step Process (/process)</span></Link></li>
            <li><Link href="/contact" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Contact Us (/contact)</span></Link></li>
            <li><Link href="/inquiry" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Start a Project (/inquiry)</span></Link></li>
          </ul>
        </div>

        {/* Software & Products */}
        <div
          className={`p-7 rounded-3xl border space-y-4 ${
            darkMode ? 'bg-[#202329] border-[#30343D]' : 'bg-white border-[#DCE2EC] shadow-md'
          }`}
        >
          <h3 className="text-lg font-bold text-[#2979FF] dark:text-[#55A3FF]">Products &amp; Solutions</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/products" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>All Products (/products)</span></Link></li>
            <li><Link href="/products?category=windows" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Windows Software</span></Link></li>
            <li><Link href="/products?category=android" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Android Applications</span></Link></li>
            <li><Link href="/products?category=web" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Web Applications</span></Link></li>
            <li><Link href="/products?category=website" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Websites &amp; Platforms</span></Link></li>
            <li><Link href="/products?category=games" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Games &amp; Digital Tools</span></Link></li>
          </ul>
        </div>

        {/* Resources & Legal */}
        <div
          className={`p-7 rounded-3xl border space-y-4 ${
            darkMode ? 'bg-[#202329] border-[#30343D]' : 'bg-white border-[#DCE2EC] shadow-md'
          }`}
        >
          <h3 className="text-lg font-bold text-[#2979FF] dark:text-[#55A3FF]">Resources &amp; Legal</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/tools" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Digital Tools Directory (/tools)</span></Link></li>
            <li><Link href="/blog" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Engineering Blog (/blog)</span></Link></li>
            <li><Link href="/testimonials" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Success Stories (/testimonials)</span></Link></li>
            <li><Link href="/faq" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>FAQ Knowledge Base (/faq)</span></Link></li>
            <li><Link href="/privacy" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Privacy Policy (/privacy)</span></Link></li>
            <li><Link href="/terms" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] shrink-0" /><span>Terms of Service (/terms)</span></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};
