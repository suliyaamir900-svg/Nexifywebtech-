import React, { useState } from 'react';
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Monitor,
  Smartphone,
  Globe,
  ShoppingBag,
  Cpu,
  CreditCard,
  ArrowRight,
  Gamepad2,
} from 'lucide-react';
import { LOGO_PATH } from '../data/portfolioData';
import { Link, useRouter } from '../router/Router';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onSelectCategory?: (cat: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onSelectCategory }) => {
  const { path } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleDropdownSelect = (cat: string) => {
    closeMenus();
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
  };

  const isCurrent = (route: string) => {
    const cleanRoute = route.replace(/\/+$/, '') || '/home';
    const cleanPath = path.replace(/\/+$/, '') || '/home';
    return cleanPath === cleanRoute || (cleanRoute === '/home' && cleanPath === '/');
  };

  const linkClass = (route: string) =>
    `px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shrink-0 transition-colors ${
      isCurrent(route)
        ? darkMode
          ? 'text-[#55A3FF] bg-[#2979FF]/15 font-semibold border border-[#2979FF]/30'
          : 'text-[#2979FF] bg-[#2979FF]/10 font-semibold border border-[#2979FF]/25'
        : darkMode
          ? 'text-[#A7ADB8] hover:text-white hover:bg-[#202329]'
          : 'text-[#4B5565] hover:text-[#101114] hover:bg-[#EEF2F9]'
    }`;

  const mobileLinkClass = (route: string) =>
    `flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
      isCurrent(route)
        ? darkMode
          ? 'text-[#55A3FF] bg-[#2979FF]/15 border border-[#2979FF]/30'
          : 'text-[#2979FF] bg-[#2979FF]/10 border border-[#2979FF]/25'
        : darkMode
          ? 'text-[#A7ADB8] hover:text-white hover:bg-[#202329]'
          : 'text-[#4B5565] hover:text-[#101114] hover:bg-[#F2F5FB]'
    }`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-colors duration-200 backdrop-blur-xl border-b ${
          darkMode
            ? 'bg-[#101114]/90 border-[#30343D] text-white'
            : 'bg-white/92 border-[#DCE2EC] text-[#101114] shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo & Brand Link */}
            <Link href="/home" onClick={closeMenus} className="flex items-center space-x-3 cursor-pointer group shrink-0">
              <div className="relative w-10 h-10 rounded-xl p-[1px] bg-gradient-to-br from-[#2979FF] to-[#55A3FF] shadow-lg shadow-[#2979FF]/25 group-hover:scale-105 transition-transform">
                <div className={`w-full h-full rounded-[11px] flex items-center justify-center overflow-hidden ${darkMode ? 'bg-[#181A20]' : 'bg-white'}`}>
                  <img src={LOGO_PATH} alt="NEXIFYWEBTECH Logo" className="w-7 h-7 object-contain" />
                </div>
              </div>
              <div>
                <span className={`font-extrabold text-lg sm:text-xl tracking-tight ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
                  NEXIFY<span className="text-[#2979FF]">WEBTECH</span>
                </span>
                <span className={`block text-[10px] font-medium tracking-widest uppercase ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  Ideas Into Digital Reality
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
              <Link href="/home" className={linkClass('/home')}>
                Home
              </Link>

              <Link href="/about" className={linkClass('/about')}>
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative" onMouseLeave={() => setServicesDropdownOpen(false)}>
                <div className="flex items-center">
                  <Link
                    href="/services"
                    className={linkClass('/services')}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                  >
                    <span>Services</span>
                  </Link>
                  <button
                    type="button"
                    aria-label="Toggle Services Menu"
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`p-1 -ml-1 transition-colors cursor-pointer ${darkMode ? 'text-[#A7ADB8] hover:text-[#55A3FF]' : 'text-[#4B5565] hover:text-[#2979FF]'}`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                {servicesDropdownOpen && (
                  <div
                    className={`absolute top-full left-0 w-68 p-2 rounded-2xl shadow-2xl border backdrop-blur-2xl z-50 ${
                      darkMode ? 'bg-[#181A20]/98 border-[#30343D] text-white' : 'bg-white/98 border-[#DCE2EC] text-[#101114]'
                    }`}
                  >
                    <div className="space-y-1">
                      <Link
                        href="/services"
                        onClick={closeMenus}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Monitor className="w-4 h-4 text-[#2979FF]" />
                        <span>All Services Overview</span>
                      </Link>
                      <Link
                        href="/technologies"
                        onClick={closeMenus}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Cpu className="w-4 h-4 text-[#55A3FF]" />
                        <span>Technologies & Stack</span>
                      </Link>
                      <Link
                        href="/products?category=windows"
                        onClick={() => handleDropdownSelect('windows')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Monitor className="w-4 h-4 text-[#55A3FF]" />
                        <span>Windows Software Development</span>
                      </Link>
                      <Link
                        href="/products?category=android"
                        onClick={() => handleDropdownSelect('android')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Smartphone className="w-4 h-4 text-[#2979FF]" />
                        <span>Android App Development</span>
                      </Link>
                      <Link
                        href="/products?category=website"
                        onClick={() => handleDropdownSelect('website')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Globe className="w-4 h-4 text-[#55A3FF]" />
                        <span>Websites & Web Apps</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div className="relative" onMouseLeave={() => setProductsDropdownOpen(false)}>
                <div className="flex items-center">
                  <Link
                    href="/products"
                    className={linkClass('/products')}
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                  >
                    <span>Products</span>
                  </Link>
                  <button
                    type="button"
                    aria-label="Toggle Products Menu"
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    className={`p-1 -ml-1 transition-colors cursor-pointer ${darkMode ? 'text-[#A7ADB8] hover:text-[#55A3FF]' : 'text-[#4B5565] hover:text-[#2979FF]'}`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>

                {productsDropdownOpen && (
                  <div
                    className={`absolute top-full left-0 w-72 p-2 rounded-2xl shadow-2xl border backdrop-blur-2xl z-50 ${
                      darkMode ? 'bg-[#181A20]/98 border-[#30343D] text-white' : 'bg-white/98 border-[#DCE2EC] text-[#101114]'
                    }`}
                  >
                    <div className="space-y-1">
                      <Link
                        href="/products"
                        onClick={closeMenus}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#2979FF]" />
                        <span>All Products & Catalog</span>
                      </Link>
                      <Link
                        href="/products?category=windows"
                        onClick={() => handleDropdownSelect('windows')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Monitor className="w-4 h-4 text-[#55A3FF]" />
                        <span>Windows POS & Software</span>
                      </Link>
                      <Link
                        href="/products?category=android"
                        onClick={() => handleDropdownSelect('android')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Smartphone className="w-4 h-4 text-[#2979FF]" />
                        <span>Android Business Apps</span>
                      </Link>
                      <Link
                        href="/products?category=web"
                        onClick={() => handleDropdownSelect('web')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Globe className="w-4 h-4 text-[#55A3FF]" />
                        <span>Web Applications & SaaS</span>
                      </Link>
                      <Link
                        href="/products?category=games"
                        onClick={() => handleDropdownSelect('games')}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5"
                      >
                        <Gamepad2 className="w-4 h-4 text-[#2979FF]" />
                        <span>Games & Digital Tools</span>
                      </Link>
                      <Link
                        href="/pricing"
                        onClick={closeMenus}
                        className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold hover:bg-[#2979FF]/12 hover:text-[#55A3FF] transition-colors flex items-center space-x-2.5 border-t border-[#30343D]/40 mt-1 pt-2.5"
                      >
                        <CreditCard className="w-4 h-4 text-[#55A3FF]" />
                        <span>Pricing & Models</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/projects" className={linkClass('/projects')}>
                Projects
              </Link>

              <Link href="/pricing" className={linkClass('/pricing')}>
                Pricing
              </Link>

              <Link href="/process" className={linkClass('/process')}>
                Process
              </Link>

              <Link href="/tools" className={linkClass('/tools')}>
                Tools
              </Link>

              <Link href="/blog" className={linkClass('/blog')}>
                Blog
              </Link>

              <Link href="/faq" className={linkClass('/faq')}>
                FAQ
              </Link>

              <Link href="/contact" className={linkClass('/contact')}>
                Contact
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="hidden xl:flex items-center space-x-3 shrink-0">
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  darkMode
                    ? 'bg-[#181A20] border-[#30343D] text-[#55A3FF] hover:border-[#2979FF]'
                    : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#2979FF] hover:border-[#2979FF]'
                }`}
                title={darkMode ? 'Switch to Electric Blue Light Mode' : 'Switch to Black + Electric Blue Mode'}
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <Link
                href="/inquiry"
                className="nexify-btn-primary px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap inline-flex items-center space-x-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile / Tablet Menu Controls */}
            <div className="flex items-center space-x-3 xl:hidden">
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-colors ${
                  darkMode
                    ? 'bg-[#181A20] border-[#30343D] text-[#55A3FF] hover:border-[#2979FF]'
                    : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#2979FF] hover:border-[#2979FF]'
                }`}
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className={`p-2.5 rounded-xl border cursor-pointer transition-colors ${
                  darkMode
                    ? 'bg-[#181A20] border-[#30343D] text-white hover:border-[#2979FF]'
                    : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#101114] hover:border-[#2979FF]'
                }`}
                aria-label="Open sidebar menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sliding Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden flex justify-end">
          <div
            className="fixed inset-0 bg-[#101114]/80 backdrop-blur-sm transition-opacity"
            onClick={closeMenus}
            aria-hidden="true"
          />

          <div
            className={`relative w-80 max-w-[85vw] h-full border-l shadow-2xl flex flex-col justify-between p-6 overflow-y-auto z-10 ${
              darkMode
                ? 'bg-[#101114] border-[#30343D] text-white'
                : 'bg-white border-[#DCE2EC] text-[#101114]'
            }`}
          >
            <div className="space-y-6">
              <div className={`flex items-center justify-between pb-4 border-b ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl p-[1px] bg-gradient-to-br from-[#2979FF] to-[#55A3FF] flex items-center justify-center">
                    <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${darkMode ? 'bg-[#181A20]' : 'bg-white'}`}>
                      <img src={LOGO_PATH} alt="NEXIFYWEBTECH" className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                  <div>
                    <div className="font-extrabold text-sm tracking-tight">
                      NEXIFY<span className="text-[#2979FF]">WEBTECH</span>
                    </div>
                    <div className={`text-[10px] uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                      Navigation
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeMenus}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    darkMode
                      ? 'bg-[#202329] border-[#30343D] text-[#A7ADB8] hover:text-white'
                      : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#4B5565] hover:text-[#101114]'
                  }`}
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1.5" aria-label="Sidebar Navigation">
                <Link href="/home" onClick={closeMenus} className={mobileLinkClass('/home')}>
                  Home
                </Link>
                <Link href="/about" onClick={closeMenus} className={mobileLinkClass('/about')}>
                  About Us
                </Link>
                <Link href="/services" onClick={closeMenus} className={mobileLinkClass('/services')}>
                  Services
                </Link>
                <Link href="/products" onClick={closeMenus} className={mobileLinkClass('/products')}>
                  Products Catalog
                </Link>
                <Link href="/projects" onClick={closeMenus} className={mobileLinkClass('/projects')}>
                  Projects Portfolio
                </Link>
                <Link href="/pricing" onClick={closeMenus} className={mobileLinkClass('/pricing')}>
                  Pricing & Models
                </Link>
                <Link href="/technologies" onClick={closeMenus} className={mobileLinkClass('/technologies')}>
                  Technologies & Stack
                </Link>
                <Link href="/process" onClick={closeMenus} className={mobileLinkClass('/process')}>
                  Development Process
                </Link>
                <Link href="/tools" onClick={closeMenus} className={mobileLinkClass('/tools')}>
                  Digital Tools
                </Link>
                <Link href="/blog" onClick={closeMenus} className={mobileLinkClass('/blog')}>
                  Engineering Blog
                </Link>
                <Link href="/testimonials" onClick={closeMenus} className={mobileLinkClass('/testimonials')}>
                  Success Stories
                </Link>
                <Link href="/faq" onClick={closeMenus} className={mobileLinkClass('/faq')}>
                  FAQ
                </Link>
                <Link href="/contact" onClick={closeMenus} className={mobileLinkClass('/contact')}>
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className={`pt-6 border-t space-y-3 mt-6 ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
              <Link
                href="/inquiry"
                onClick={closeMenus}
                className="nexify-btn-primary w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className={`text-center text-[10px] ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                © 2026 NEXIFYWEBTECH · Ideas Into Digital Reality.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
