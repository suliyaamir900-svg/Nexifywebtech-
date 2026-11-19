import React, { useState } from 'react';
import { PRODUCTS_DATA } from '../data/portfolioData';
import { ProductItem } from '../types';
import { Search, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link } from '../router/Router';

interface ProjectsProps {
  darkMode: boolean;
  onSelectProduct: (product: ProductItem) => void;
  onStartProject?: (title?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, onSelectProduct }) => {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'windows', label: 'Windows Software' },
    { id: 'android', label: 'Android Applications' },
    { id: 'web', label: 'Web Applications' },
    { id: 'website', label: 'Websites and Digital Platforms' },
    { id: 'games', label: 'Games & Digital Tools' },
  ];

  const filtered = PRODUCTS_DATA.filter((item) => {
    let matchesCat = false;
    if (filter === 'all') {
      matchesCat = true;
    } else if (filter === 'games') {
      matchesCat = item.category === 'games' || item.category === 'tools';
    } else {
      matchesCat = item.category === filter;
    }

    const q = search.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      item.fullDesc.toLowerCase().includes(q) ||
      item.targetAudience.toLowerCase().includes(q) ||
      item.platform.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const getStatusBadge = (status: ProductItem['status']) => {
    switch (status) {
      case 'Available':
        return darkMode
          ? 'bg-[#2979FF]/15 text-[#55A3FF] border-[#2979FF]/35'
          : 'bg-[#2979FF]/10 text-[#2979FF] border-[#2979FF]/30';
      case 'In Development':
        return darkMode
          ? 'bg-[#55A3FF]/12 text-[#55A3FF] border-[#55A3FF]/30'
          : 'bg-[#2979FF]/8 text-[#1D63DC] border-[#2979FF]/25';
      case 'Custom Development':
        return darkMode
          ? 'bg-white/8 text-white border-[#30343D]'
          : 'bg-[#101114]/5 text-[#101114] border-[#DCE2EC]';
      default:
        return darkMode
          ? 'bg-[#181A20] text-[#A7ADB8] border-[#30343D]'
          : 'bg-[#F6F8FC] text-[#4B5565] border-[#DCE2EC]';
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge="Development Portfolio"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Our Software Engineering Portfolio"
        description="A comprehensive showcase of proprietary desktop applications, Android tools, web systems, and interactive digital experiences crafted by NEXIFYWEBTECH."
        breadcrumbs={[{ label: 'Our Projects' }]}
        darkMode={darkMode}
      />

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                filter === cat.id
                  ? 'nexify-btn-primary'
                  : darkMode
                    ? 'bg-[#202329] border border-[#30343D] text-[#A7ADB8] hover:text-white hover:border-[#2979FF]/60'
                    : 'bg-white border border-[#DCE2EC] text-[#4B5565] hover:text-[#101114] hover:border-[#2979FF]/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full lg:w-72 shrink-0">
          <Search className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`} />
          <input
            type="text"
            placeholder="Search projects by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="nexify-input w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 space-y-3">
          <p className={`text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            No projects found matching your criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setFilter('all');
            }}
            className="text-xs text-[#2979FF] dark:text-[#55A3FF] font-semibold hover:underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                darkMode
                  ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_20px_42px_-16px_rgba(41,121,255,0.30)]'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
              }`}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-[#181A20]">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-semibold bg-[#101114]/88 text-[#55A3FF] border border-[#2979FF]/40 backdrop-blur-md">
                    {item.platform}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF]">
                      NEXIFYWEBTECH
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    {item.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.techStack.slice(0, 3).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-[11px] font-medium px-2.5 py-0.5 rounded-lg border ${
                          darkMode
                            ? 'bg-[#181A20] border-[#30343D] text-[#A7ADB8]'
                            : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#4B5565]'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`p-6 pt-0 border-t mt-4 ${darkMode ? 'border-[#30343D]/70' : 'border-[#DCE2EC]'}`}>
                <div className="flex items-center gap-2.5 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectProduct(item)}
                    className="nexify-btn-primary flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {item.liveWebsiteUrl && (
                    <a
                      href={item.liveWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nexify-btn-secondary px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 whitespace-nowrap"
                      title="Visit Live Website"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />
                      <span>Visit Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA */}
      <div
        className={`text-center p-10 rounded-3xl border space-y-6 mt-16 ${
          darkMode
            ? 'bg-[#181A20] border-[#2979FF]/40 shadow-[0_24px_48px_-20px_rgba(41,121,255,0.28)]'
            : 'bg-white border-[#DCE2EC] shadow-xl'
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-extrabold">Have a Project You'd Like Us to Build?</h3>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          We collaborate closely with clients to build secure, scalable, and responsive software solutions from discovery to deployment.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
            Contact Engineering Team
          </Link>
        </div>
      </div>
    </div>
  );
};
