import React from 'react';
import { PRICING_DATA } from '../data/portfolioData';
import { CheckCircle2, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link, useRouter } from '../router/Router';

interface PricingProps {
  darkMode: boolean;
  isStandalonePage?: boolean;
  onStartProject?: (projectTitle?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  darkMode,
  isStandalonePage = false,
  onStartProject,
}) => {
  const { path, navigate } = useRouter();
  const showHeader = isStandalonePage || path === '/pricing';

  const handleSelectTier = (queryValue: string) => {
    if (onStartProject) {
      onStartProject(queryValue);
    } else {
      navigate(`/inquiry?project=${encodeURIComponent(queryValue)}`);
    }
  };

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        showHeader ? 'py-12 sm:py-16' : 'py-4'
      } space-y-14 ${darkMode ? 'text-white' : 'text-[#101114]'}`}
    >
      {showHeader ? (
        <PageHeader
          badge="Pricing & Engagement Models"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
          title="Transparent Pricing Built Around Clear Milestones"
          description="Every software build is scoped upfront with milestone payments, zero hidden retainers, and full source code ownership upon completion."
          breadcrumbs={[{ label: 'Pricing & Models' }]}
          darkMode={darkMode}
        />
      ) : (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 text-xs font-semibold uppercase tracking-wider">
              <span>Pricing &amp; Engagement Models</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Transparent Estimates. Full Code Ownership.
            </h2>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
              Start from a proven package or define your own custom budget and scope on our Project Inquiry page.
            </p>
          </div>

          <Link
            href="/pricing"
            className="nexify-btn-secondary px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap inline-flex items-center space-x-2 self-start md:self-auto"
          >
            <span>Compare All Packages</span>
            <ArrowRight className="w-4 h-4 text-[#2979FF] dark:text-[#55A3FF]" />
          </Link>
        </div>
      )}

      {/* 3-Column Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
        {PRICING_DATA.map((tier) => (
          <div
            key={tier.id}
            className={`rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 relative ${
              tier.highlighted
                ? darkMode
                  ? 'bg-[#202329] border-[#2979FF] shadow-[0_24px_48px_-16px_rgba(41,121,255,0.32)]'
                  : 'bg-white border-[#2979FF] shadow-[0_24px_48px_-16px_rgba(41,121,255,0.20)]'
                : darkMode
                  ? 'bg-[#181A20] border-[#30343D] hover:border-[#2979FF]/60 hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.22)]'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF]/60 shadow-lg'
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold leading-snug">{tier.name}</h3>
                  <p className={`text-xs mt-1.5 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    {tier.tagline}
                  </p>
                </div>
                {tier.badgeText && (
                  <span className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-[#2979FF] text-white shrink-0">
                    {tier.badgeText}
                  </span>
                )}
              </div>

              <div className={`pb-6 border-b ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight tabular-nums text-[#2979FF] dark:text-[#55A3FF]">
                  {tier.priceLabel}
                </div>
                <div className={`text-xs mt-1.5 font-medium ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  {tier.billingNote}
                </div>
              </div>

              <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 pt-1">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#2979FF] dark:text-[#55A3FF] shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-white/90' : 'text-[#101114]'}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-6 space-y-4">
              <div
                className={`flex items-center justify-between text-xs px-3.5 py-2 rounded-xl border ${
                  darkMode ? 'bg-[#101114]/80 border-[#30343D] text-[#A7ADB8]' : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#4B5565]'
                }`}
              >
                <span className="inline-flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />
                  <span>Typical Delivery</span>
                </span>
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
                  {tier.deliveryTimeline}
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleSelectTier(tier.projectQueryValue)}
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 cursor-pointer transition-all ${
                  tier.highlighted ? 'nexify-btn-primary' : 'nexify-btn-secondary'
                }`}
              >
                <span>{tier.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Quote Note on Standalone Page */}
      {showHeader && (
        <div
          className={`p-8 sm:p-10 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
            darkMode
              ? 'bg-[#181A20] border-[#30343D]'
              : 'bg-white border-[#DCE2EC] shadow-lg'
          }`}
        >
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-extrabold">Have a Specific Budget or Custom Scope?</h3>
            <p className={`text-sm ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
              Enter your custom budget directly in our Project Inquiry form. We structure milestones cleanly to align with your priorities without rigid retainers.
            </p>
          </div>
          <Link
            href="/inquiry"
            className="nexify-btn-primary px-7 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap inline-flex items-center space-x-2 shrink-0"
          >
            <span>Submit Custom Budget</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};
