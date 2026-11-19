import React, { useState } from 'react';
import { TOOLS_DATA } from '../data/portfolioData';
import { Search, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link } from '../router/Router';

interface ToolsDirectoryProps {
  darkMode: boolean;
  onStartProject: (toolName?: string) => void;
}

export const ToolsDirectory: React.FC<ToolsDirectoryProps> = ({ darkMode, onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'PDF', 'Image', 'Text', 'Calculator', 'Business', 'Developer'];

  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesCat = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge="Digital Tools & Utilities"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Useful Utilities & Micro-Tools"
        description="Fast, browser-based utilities designed to simplify everyday tasks, document processing, calculations, and developer workflows."
        breadcrumbs={[{ label: 'Digital Tools' }]}
        darkMode={darkMode}
      />

      {/* Featured Tool Spotlight: PDFLove */}
      <div
        className={`p-8 sm:p-10 rounded-3xl border shadow-2xl relative overflow-hidden ${
          darkMode
            ? 'bg-[#181A20] border-[#2979FF]/50 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.30)]'
            : 'bg-white border-[#2979FF]/40'
        }`}
      >
        <div
          className="absolute -right-16 -top-16 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(41, 121, 255, 0.22), transparent 70%)' }}
        />
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#2979FF]/15 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Online Platform</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">PDFLove – Free Online PDF Tools Suite</h3>
            <p className={`text-sm sm:text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
              Merge, split, compress, convert, rotate, and secure PDF files directly in your web browser with zero file size limits and complete privacy.
            </p>
          </div>
          <a
            href="https://www.pdflove.store/"
            target="_blank"
            rel="noopener noreferrer"
            className="nexify-btn-primary px-6 py-3.5 rounded-xl font-bold text-sm flex items-center space-x-2 shrink-0 whitespace-nowrap"
          >
            <span>Launch PDFLove.store</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'nexify-btn-primary'
                  : darkMode
                    ? 'bg-[#202329] border border-[#30343D] text-[#A7ADB8] hover:text-white hover:border-[#2979FF]/60'
                    : 'bg-white border border-[#DCE2EC] text-[#4B5565] hover:text-[#101114] hover:border-[#2979FF]/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72 shrink-0">
          <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`} />
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="nexify-input w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <div
            key={tool.id}
            className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 group ${
              darkMode
                ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_38px_-14px_rgba(41,121,255,0.28)]'
                : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-md'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF] bg-[#2979FF]/12 px-2.5 py-1 rounded-lg border border-[#2979FF]/30">
                  {tool.category}
                </span>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border ${
                    tool.status === 'Available'
                      ? darkMode
                        ? 'bg-[#2979FF]/15 text-[#55A3FF] border-[#2979FF]/35'
                        : 'bg-[#2979FF]/10 text-[#2979FF] border-[#2979FF]/30'
                      : darkMode
                        ? 'bg-[#181A20] text-[#A7ADB8] border-[#30343D]'
                        : 'bg-[#F6F8FC] text-[#4B5565] border-[#DCE2EC]'
                  }`}
                >
                  {tool.status}
                </span>
              </div>

              <h4 className="text-lg font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors">
                {tool.name}
              </h4>
              <p className={`text-xs leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                {tool.description}
              </p>
            </div>

            <div className={`pt-5 border-t mt-5 ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
              {tool.status === 'Available' ? (
                <button
                  type="button"
                  onClick={() => onStartProject(`Custom Utility: ${tool.name}`)}
                  className="nexify-btn-secondary w-full py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center space-x-1.5 cursor-pointer"
                >
                  <span>Request Custom Version</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />
                </button>
              ) : (
                <div className={`text-center text-xs font-medium py-1 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  In Development
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className={`text-center p-10 rounded-3xl border space-y-6 mt-16 ${
          darkMode
            ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
            : 'bg-white border-[#DCE2EC] shadow-xl'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold">Need a Dedicated Utility Built for Your Team?</h3>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          We build custom internal tools, batch document processors, conversion scripts, and private calculation engines.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
            <span>Request Custom Tool</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/services" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};
