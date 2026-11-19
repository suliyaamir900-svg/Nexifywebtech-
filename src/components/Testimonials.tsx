import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, Quote, Sparkles, ArrowRight } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link, useRouter } from '../router/Router';

interface TestimonialsProps {
  darkMode: boolean;
  isFeaturedOnly?: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ darkMode, isFeaturedOnly = false }) => {
  const { path } = useRouter();
  const showHeader = !isFeaturedOnly || path === '/testimonials';
  const displayList = isFeaturedOnly ? TESTIMONIALS_DATA.slice(0, 3) : TESTIMONIALS_DATA;

  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${
        showHeader ? 'py-12 sm:py-16' : 'py-0'
      } space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}
    >
      {showHeader ? (
        <PageHeader
          badge="Client Success Stories"
          badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
          title="Trusted by Businesses & Professionals"
          description="Read authentic experiences and reviews from retail store owners, clinic managers, contractors, and founders who rely on NEXIFYWEBTECH solutions."
          breadcrumbs={[{ label: 'Client Success Stories' }]}
          darkMode={darkMode}
        />
      ) : (
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 text-xs font-semibold uppercase tracking-wider">
              Client Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">What Our Clients Say</h2>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
              Authentic feedback from businesses using our software and applications.
            </p>
          </div>
          <Link
            href="/testimonials"
            className="nexify-btn-secondary px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap"
          >
            View All Success Stories
          </Link>
        </div>
      )}

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {displayList.map((item) => (
          <div
            key={item.id}
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 group relative overflow-hidden ${
              darkMode
                ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.28)]'
                : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
            }`}
          >
            <div className="absolute top-6 right-6 text-[#2979FF]/18 group-hover:text-[#2979FF]/35 transition-colors pointer-events-none">
              <Quote className="w-10 h-10" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < item.rating ? 'text-[#2979FF] fill-[#2979FF] dark:text-[#55A3FF] dark:fill-[#55A3FF]' : 'text-[#30343D]'
                    }`}
                  />
                ))}
              </div>

              <p className={`text-sm leading-relaxed italic ${darkMode ? 'text-white/90' : 'text-[#101114]'}`}>
                "{item.quote}"
              </p>
            </div>

            <div className={`pt-6 border-t mt-6 relative z-10 flex items-center space-x-3.5 ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
              <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${item.avatarBg} flex items-center justify-center font-bold text-xs text-white shadow-md shrink-0`}>
                {item.clientName.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-sm group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors">
                  {item.clientName}
                </div>
                <div className="text-xs text-[#2979FF] dark:text-[#55A3FF] font-medium">
                  {item.role} · {item.company}
                </div>
                <div className={`text-[11px] ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  Delivered: {item.projectType}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Standalone Bottom CTA */}
      {showHeader && (
        <div
          className={`text-center p-10 rounded-3xl border space-y-6 mt-16 ${
            darkMode
              ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
              : 'bg-white border-[#DCE2EC] shadow-xl'
          }`}
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Become Our Next Success Story?</h3>
          <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Join businesses and professionals running on dependable NEXIFYWEBTECH software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/products" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
              Explore Products
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
