import React from 'react';
import { Search, Compass, Palette, Code, CheckCircle2, Truck, Sparkles, ArrowRight } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link, useRouter } from '../router/Router';

interface ProcessProps {
  darkMode: boolean;
  isStandalonePage?: boolean;
}

export const Process: React.FC<ProcessProps> = ({ darkMode, isStandalonePage = false }) => {
  const { path } = useRouter();
  const showHeader = isStandalonePage || path === '/process';

  const steps = [
    {
      num: '01',
      title: 'Requirement & Discovery',
      desc: 'We begin by thoroughly analyzing your idea, business model, and specific operational needs. We scope features, target users, and key performance benchmarks to define a rock-solid project foundation.',
      icon: Search,
      deliverables: ['Detailed Scope Document', 'Architecture Assessment', 'Feature Roadmap'],
    },
    {
      num: '02',
      title: 'Planning & Architecture',
      desc: 'We map technical workflows, select the optimal tech stack (Android, Windows, React/Node, or Cloud), structure databases, and establish transparent milestone delivery schedules.',
      icon: Compass,
      deliverables: ['System Architecture Diagram', 'Database Schema Plan', 'Milestone Schedule'],
    },
    {
      num: '03',
      title: 'UI/UX & Prototyping',
      desc: 'We craft modern, user-friendly UI/UX mockups adhering to clean glassmorphism, responsive grids, and intuitive navigation. You review and approve every screen before coding begins.',
      icon: Palette,
      deliverables: ['Interactive Wireframes', 'Design System & Style Guide', 'Approved Screen Mockups'],
    },
    {
      num: '04',
      title: 'Engineering & Development',
      desc: 'Our senior developers write clean, maintainable, and modular code. We implement business logic, offline caching, database indexing, and external APIs with continuous integration.',
      icon: Code,
      deliverables: ['Working Modular Codebase', 'Backend API Integrations', 'Staging Previews'],
    },
    {
      num: '05',
      title: 'Testing & Optimization',
      desc: 'Rigorous functional, stress, and security testing across multiple devices, OS versions, and network speeds. We eliminate bugs and optimize load times and memory footprint.',
      icon: CheckCircle2,
      deliverables: ['Cross-Device QA Reports', 'Performance Optimization', 'Security Hardening'],
    },
    {
      num: '06',
      title: 'Delivery, Deployment & Support',
      desc: 'We deploy to live servers, deliver signed installers or store packages, transfer complete source code, and provide documentation alongside ongoing technical maintenance.',
      icon: Truck,
      deliverables: ['Production Release & Store Setup', 'Source Code Handover', 'Dedicated Post-Launch Support'],
    },
  ];

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        showHeader ? 'py-12 sm:py-16' : 'py-4'
      } space-y-14 ${darkMode ? 'text-white' : 'text-[#101114]'}`}
    >
      {showHeader ? (
        <PageHeader
          badge="Development Process"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
          title="From Idea to Reality – Our 6-Step Methodology"
          description="A structured, predictable, and transparent engineering workflow that guarantees on-time delivery, clean code, and zero surprises."
          breadcrumbs={[{ label: 'Development Process' }]}
          darkMode={darkMode}
        />
      ) : (
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 text-xs font-semibold uppercase tracking-wider">
            Development Process
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            From Idea to Reality – Our Development Process.
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            A clear, structured, and transparent process ensures every project is delivered on time, within scope, and to the highest quality standards.
          </p>
        </div>
      )}

      {/* Process Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {steps.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div
              key={idx}
              className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 group ${
                darkMode
                  ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.28)]'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/12 border border-[#2979FF]/30 text-[#2979FF] dark:text-[#55A3FF] flex items-center justify-center group-hover:bg-[#2979FF] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-[#2979FF]/45 group-hover:text-[#55A3FF] transition-colors font-mono tabular-nums">
                    {st.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors">
                  {st.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  {st.desc}
                </p>

                {st.deliverables && (
                  <div className={`pt-4 border-t space-y-2 ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
                    <div className={`text-[11px] font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                      Deliverables
                    </div>
                    <ul className="space-y-1.5">
                      {st.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className={`text-xs flex items-center space-x-2 ${darkMode ? 'text-white/85' : 'text-[#101114]'}`}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF] shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Standalone Bottom Callout */}
      {showHeader && (
        <div
          className={`text-center p-10 rounded-3xl border space-y-6 mt-12 ${
            darkMode
              ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
              : 'bg-white border-[#DCE2EC] shadow-xl'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Kick Off Step 01?</h3>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Share your concept with us today. We’ll schedule a free discovery call and prepare a written scope breakdown.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
              <span>Start Discovery Phase</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/projects" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
              View Completed Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
