import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';
import { Search, Clock, Calendar, ArrowRight, X, CheckCircle2, Sparkles } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link } from '../router/Router';

interface BlogProps {
  darkMode: boolean;
  onStartProject: (topic?: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ darkMode, onStartProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = ['All', 'POS Software', 'Windows Apps', 'Mobile Development', 'Web & SaaS', 'Business Systems'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge="Knowledge Center & Engineering Blog"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Insights on Software Engineering & IT Solutions"
        description="Practical engineering articles, architectural case studies, and guides on building performant Android apps, Windows desktop systems, and scalable web platforms."
        breadcrumbs={[{ label: 'Engineering Blog' }]}
        darkMode={darkMode}
      />

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
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="nexify-input w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
              darkMode
                ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.28)]'
                : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
            }`}
          >
            <div className="p-7 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30">
                  {post.category}
                </span>
                <div className={`flex items-center space-x-1.5 text-xs ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  <Clock className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className={`text-sm line-clamp-3 leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  {post.excerpt}
                </p>
              </div>

              <div className={`pt-2 flex items-center space-x-2 text-xs ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                <Calendar className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />
                <span>Published: {post.publishDate}</span>
              </div>
            </div>

            <div className={`px-7 py-4 border-t ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
              <button
                type="button"
                onClick={() => setActivePost(post)}
                className="w-full font-semibold text-xs text-[#2979FF] dark:text-[#55A3FF] hover:underline transition-colors flex items-center justify-between cursor-pointer"
              >
                <span>Read Full Article &amp; Takeaways</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Reading Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101114]/88 backdrop-blur-xl">
          <div
            className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 shadow-2xl space-y-6 ${
              darkMode
                ? 'bg-[#202329] border-[#30343D] text-white'
                : 'bg-white border-[#DCE2EC] text-[#101114]'
            }`}
          >
            <button
              type="button"
              onClick={() => setActivePost(null)}
              className={`absolute top-6 right-6 p-2 rounded-xl border transition-colors cursor-pointer ${
                darkMode
                  ? 'bg-[#181A20] border-[#30343D] text-[#A7ADB8] hover:text-white hover:border-[#2979FF]'
                  : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#4B5565] hover:text-[#101114] hover:border-[#2979FF]'
              }`}
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3 pr-10">
              <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-[#2979FF]/15 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30">
                {activePost.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">{activePost.title}</h2>
              <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                <span>By NEXIFYWEBTECH Engineering Team</span>
                <span>·</span>
                <span>{activePost.publishDate}</span>
                <span>·</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>

            <div
              className={`space-y-4 text-sm sm:text-base leading-relaxed border-t border-b py-5 ${
                darkMode ? 'border-[#30343D] text-white/90' : 'border-[#DCE2EC] text-[#101114]'
              }`}
            >
              {activePost.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div
              className={`p-6 rounded-2xl border space-y-3 ${
                darkMode ? 'bg-[#181A20] border-[#2979FF]/35' : 'bg-[#F6F8FC] border-[#2979FF]/30'
              }`}
            >
              <h4 className="text-sm font-bold text-[#2979FF] dark:text-[#55A3FF] flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Engineering Takeaways</span>
              </h4>
              <ul className="space-y-2">
                {activePost.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className={`text-xs sm:text-sm flex items-start space-x-2.5 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2979FF] mt-2 shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
              <span className={`text-xs ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                Need expert assistance implementing these solutions?
              </span>
              <button
                type="button"
                onClick={() => {
                  const topic = activePost.title;
                  setActivePost(null);
                  onStartProject(topic);
                }}
                className="nexify-btn-primary px-5 py-2.5 rounded-xl font-bold text-xs cursor-pointer"
              >
                Inquire With Engineering
              </button>
            </div>
          </div>
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
        <h3 className="text-2xl sm:text-3xl font-extrabold">Need an Engineering Partner for Your Stack?</h3>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          We turn technical insights into dependable, production-ready software systems built for scale and security.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
            <span>Start a Project</span>
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
