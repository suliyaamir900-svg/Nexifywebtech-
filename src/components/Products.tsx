import React, { useState, useEffect } from 'react';
import { PRODUCTS_DATA } from '../data/portfolioData';
import { ProductItem } from '../types';
import { Search, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { Link, useRouter } from '../router/Router';

interface ProductsProps {
  darkMode: boolean;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedProduct: ProductItem | null;
  setSelectedProduct: (product: ProductItem | null) => void;
  onStartProject: (productTitle?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({
  darkMode,
  selectedCategory,
  setSelectedCategory,
  selectedProduct: _selectedProduct,
  setSelectedProduct,
  onStartProject: _onStartProject,
}) => {
  const { queryParams, navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const catParam = queryParams.get('category');
    if (catParam) {
      setSelectedCategory(catParam);
    }

    const idParam = queryParams.get('id');
    if (idParam) {
      const found = PRODUCTS_DATA.find((p) => p.id === idParam);
      if (found) {
        setSelectedProduct(found);
      }
    }
  }, [queryParams, setSelectedCategory, setSelectedProduct]);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'windows', label: 'Windows Software' },
    { id: 'android', label: 'Android Applications' },
    { id: 'web', label: 'Web Applications' },
    { id: 'website', label: 'Websites and Digital Platforms' },
    { id: 'games', label: 'Games & Digital Tools' },
  ];

  const handleCategorySelect = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      navigate('/products', { scroll: false });
    } else {
      navigate(`/products?category=${catId}`, { scroll: false });
    }
  };

  const handleOpenProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    const currentCat = selectedCategory !== 'all' ? `&category=${selectedCategory}` : '';
    navigate(`/products?id=${product.id}${currentCat}`, { scroll: false });
  };

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    let matchesCategory = false;
    if (selectedCategory === 'all') {
      matchesCategory = true;
    } else if (selectedCategory === 'games') {
      matchesCategory = item.category === 'games' || item.category === 'tools';
    } else {
      matchesCategory = item.category === selectedCategory;
    }

    const q = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      item.fullDesc.toLowerCase().includes(q) ||
      item.targetAudience.toLowerCase().includes(q) ||
      item.platform.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
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
        badge="Our Developed Software & Products"
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title="Digital Solutions Built for Real Needs"
        description="Explore our proprietary portfolio of software applications, business management suites, digital tools, and custom technology solutions engineered by NEXIFYWEBTECH."
        breadcrumbs={[{ label: 'Products & Software' }]}
        darkMode={darkMode}
      />

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
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
            placeholder="Search software or feature..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="nexify-input w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 space-y-3">
          <p className={`text-base ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            No software products found matching your search.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              navigate('/products', { scroll: false });
            }}
            className="text-xs text-[#2979FF] dark:text-[#55A3FF] font-semibold hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                darkMode
                  ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_20px_42px_-16px_rgba(41,121,255,0.30)]'
                  : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
              }`}
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-[#181A20]">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg text-xs font-semibold bg-[#101114]/88 text-[#55A3FF] border border-[#2979FF]/40 backdrop-blur-md">
                    {product.platform}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF]">
                      NEXIFYWEBTECH
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border ${getStatusBadge(product.status)}`}>
                      {product.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold group-hover:text-[#2979FF] dark:group-hover:text-[#55A3FF] transition-colors leading-snug">
                    {product.title}
                  </h3>
                  <p className={`text-sm line-clamp-2 leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    {product.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <div className={`text-[11px] font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                      Key Capabilities
                    </div>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feat, fIdx) => (
                        <li key={fIdx} className={`text-xs flex items-center space-x-2 ${darkMode ? 'text-white/85' : 'text-[#101114]'}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2979FF] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`p-6 pt-0 border-t mt-4 ${darkMode ? 'border-[#30343D]/70' : 'border-[#DCE2EC]'}`}>
                <div className="flex items-center gap-2.5 pt-4">
                  <button
                    type="button"
                    onClick={() => handleOpenProduct(product)}
                    className="nexify-btn-primary flex-1 py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {product.liveWebsiteUrl && (
                    <a
                      href={product.liveWebsiteUrl}
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
        <h3 className="text-2xl sm:text-3xl font-extrabold">Need Custom Software Engineered for Your Business?</h3>
        <p className={`text-sm sm:text-base max-w-xl mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          We build tailored Windows systems, Android apps, and web management platforms suited to your exact business workflow.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link href="/inquiry" className="nexify-btn-primary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2">
            <span>Request Custom Software</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/process" className="nexify-btn-secondary px-6 py-3 rounded-xl font-bold text-xs sm:text-sm">
            See How We Build &amp; Deliver
          </Link>
        </div>
      </div>
    </div>
  );
};
