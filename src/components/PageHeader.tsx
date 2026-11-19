import React, { ReactNode } from 'react';
import { Link } from '../router/Router';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge: string;
  badgeIcon?: ReactNode;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  darkMode: boolean;
  actionButton?: ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  description,
  breadcrumbs = [],
  darkMode,
  actionButton,
}) => {
  return (
    <div className="relative mb-12 sm:mb-16">
      {/* Subtle Electric Blue ambient glow */}
      <div
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-44 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41, 121, 255, 0.16) 0%, rgba(85, 163, 255, 0.04) 60%, transparent 100%)' }}
      />

      {/* Breadcrumb Trail */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center relative z-10">
        <ol
          className={`inline-flex items-center space-x-1.5 sm:space-x-2 text-xs font-medium px-4 py-1.5 rounded-xl border backdrop-blur-md ${
            darkMode
              ? 'bg-[#181A20]/90 border-[#30343D] text-[#A7ADB8]'
              : 'bg-white/95 border-[#DCE2EC] text-[#4B5565]'
          }`}
        >
          <li className="inline-flex items-center">
            <Link href="/home" className="inline-flex items-center space-x-1 hover:text-[#55A3FF] transition-colors">
              <HomeIcon className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>

          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <li key={idx} className="inline-flex items-center space-x-1.5 sm:space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#A7ADB8] shrink-0" />
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="hover:text-[#55A3FF] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-[#2979FF] dark:text-[#55A3FF]" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      {/* Main Header Content */}
      <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10 px-4">
        <div
          className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border ${
            darkMode
              ? 'bg-[#2979FF]/12 text-[#55A3FF] border-[#2979FF]/30'
              : 'bg-[#2979FF]/8 text-[#2979FF] border-[#2979FF]/25'
          }`}
        >
          {badgeIcon}
          <span>{badge}</span>
        </div>

        <h1 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
          {title}
        </h1>

        <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          {description}
        </p>

        {actionButton && (
          <div className="pt-4 flex items-center justify-center">
            {actionButton}
          </div>
        )}
      </div>
    </div>
  );
};
