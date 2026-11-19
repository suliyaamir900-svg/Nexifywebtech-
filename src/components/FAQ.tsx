import React, { useState } from 'react';
import { FAQ_DATA } from '../data/portfolioData';
import { ChevronDown, HelpCircle, Search, Sparkles, ArrowRight } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link } from '../router/Router';

interface FAQProps {
  darkMode: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const filteredFaq = FAQ_DATA.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge="FAQ Knowledge Base"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Frequently Asked Questions"
        description="Clear, transparent answers regarding development timelines, pricing models, intellectual property ownership, and post-delivery warranty support."
        breadcrumbs={[{ label: 'FAQ' }]}
        darkMode={darkMode}
      />

      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`} />
        <input
          type="text"
          placeholder="Search questions by topic or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="nexify-input w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm"
        />
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaq.length === 0 ? (
          <div className={`text-center py-12 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            No matching questions found. Try searching for "pricing", "timeline", "ownership", or "support".
          </div>
        ) : (
          filteredFaq.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  darkMode
                    ? isOpen
                      ? 'bg-[#202329] border-[#2979FF]'
                      : 'bg-[#202329] border-[#30343D] hover:border-[#2979FF]/60'
                    : isOpen
                      ? 'bg-white border-[#2979FF] shadow-lg'
                      : 'bg-white border-[#DCE2EC] hover:border-[#2979FF]/60 shadow-sm'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-[#2979FF] dark:text-[#55A3FF] shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#2979FF] dark:text-[#55A3FF] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    className={`faq-answer-lead px-6 pb-6 pt-4 text-sm sm:text-base leading-relaxed border-t ${
                      darkMode ? 'border-[#30343D] text-[#A7ADB8]' : 'border-[#DCE2EC] text-[#4B5565]'
                    }`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Still have questions? Bottom Card */}
      <div
        className={`text-center p-10 rounded-3xl border space-y-6 mt-16 ${
          darkMode
            ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
            : 'bg-white border-[#DCE2EC] shadow-xl'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold">Have a Specific Question About Your Project?</h3>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          Our technical directors and development leads are available to discuss architecture, timelines, and custom quotes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/contact" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
            <span>Ask Us Directly</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/inquiry" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
            Submit Project Inquiry
          </Link>
        </div>
      </div>
    </div>
  );
};
