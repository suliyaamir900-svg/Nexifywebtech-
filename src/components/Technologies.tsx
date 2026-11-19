import React from 'react';
import { TECHNOLOGIES_DATA } from '../data/portfolioData';
import { Globe, Monitor, Smartphone, Database, Sparkles, ArrowRight, Layers } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link, useRouter } from '../router/Router';

interface TechnologiesProps {
  darkMode: boolean;
  isStandalonePage?: boolean;
}

export const Technologies: React.FC<TechnologiesProps> = ({ darkMode, isStandalonePage = false }) => {
  const { path } = useRouter();
  const showHeader = isStandalonePage || path === '/technologies';

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Globe,
    Monitor,
    Smartphone,
    Database,
  };

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        showHeader ? 'py-12 sm:py-16' : 'py-4'
      } space-y-14 ${darkMode ? 'text-white' : 'text-[#101114]'}`}
    >
      {showHeader ? (
        <PageHeader
          badge="Technologies & Engineering Stack"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
          title="Reliable Technologies Engineered for Long-Term Stability"
          description="We choose proven, well-supported stacks across Windows desktop, native Android, cloud web platforms, and local/relational databases."
          breadcrumbs={[{ label: 'Technologies' }]}
          darkMode={darkMode}
        />
      ) : (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies &amp; Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Modern Stack Across Desktop, Mobile &amp; Web.
            </h2>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
              Every product is built on clean, maintainable architectures tailored for speed, offline dependability, and future scalability.
            </p>
          </div>

          <Link
            href="/technologies"
            className="nexify-btn-secondary px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap inline-flex items-center space-x-2 self-start md:self-auto"
          >
            <span>Explore Full Tech Stack</span>
            <ArrowRight className="w-4 h-4 text-[#2979FF] dark:text-[#55A3FF]" />
          </Link>
        </div>
      )}

      {/* 2x2 Architectural Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECHNOLOGIES_DATA.map((group) => {
          const Icon = iconMap[group.iconName] || Globe;
          return (
            <div
              key={group.id}
              className={`p-7 sm:p-8 rounded-3xl border transition-all duration-300 group ${
                darkMode
                  ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.28)]'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
              }`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/12 border border-[#2979FF]/30 text-[#2979FF] dark:text-[#55A3FF] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors">
                    {group.title}
                  </h3>
                  <p className={`text-xs sm:text-sm mt-1 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    {group.subtitle}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-colors ${
                      darkMode
                        ? 'bg-[#181A20] border-[#30343D] hover:border-[#2979FF]/50'
                        : 'bg-[#F6F8FC] border-[#DCE2EC] hover:border-[#2979FF]/50'
                    }`}
                  >
                    <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
                      {tech.name}
                    </div>
                    <div className={`text-xs mt-0.5 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                      {tech.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showHeader && (
        <div
          className={`text-center p-10 rounded-3xl border space-y-5 ${
            darkMode
              ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
              : 'bg-white border-[#DCE2EC] shadow-xl'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Not Sure Which Stack Fits Your Product?
          </h3>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Share your operational goals and we will recommend the most cost-effective, maintainable platform architecture for your team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
            <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center space-x-2">
              <span>Discuss Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-sm">
              View All Services
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
