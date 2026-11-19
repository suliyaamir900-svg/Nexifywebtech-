import React from 'react';
import { LOGO_PATH } from '../data/portfolioData';
import { Mail, ArrowUp } from 'lucide-react';
import { Link } from '../router/Router';

interface FooterProps {
  darkMode: boolean;
  onSelectCategory?: (cat: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (cat: string) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    scrollToTop();
  };

  return (
    <footer
      className={`border-t pt-16 pb-12 transition-colors ${
        darkMode
          ? 'bg-[#101114] border-[#30343D] text-[#A7ADB8]'
          : 'bg-[#101114] border-[#30343D] text-[#A7ADB8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/home" className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative w-10 h-10 rounded-xl p-[1px] bg-gradient-to-br from-[#2979FF] to-[#55A3FF] group-hover:scale-105 transition-transform shadow-md shadow-[#2979FF]/20">
                <div className="w-full h-full rounded-[11px] bg-[#181A20] flex items-center justify-center overflow-hidden">
                  <img src={LOGO_PATH} alt="NEXIFYWEBTECH" className="w-7 h-7 object-contain" />
                </div>
              </div>
              <span className="font-extrabold text-lg text-white">
                NEXIFY<span className="text-[#2979FF]">WEBTECH</span>
              </span>
            </Link>
            <p className="text-xs font-semibold text-[#55A3FF]">Ideas Into Digital Reality.</p>
            <p className="text-xs text-[#A7ADB8] leading-relaxed">
              Transforming ideas into modern digital solutions through custom software, Android apps, Windows desktop systems, and scalable web technology.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/home" className="hover:text-[#55A3FF] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#55A3FF] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#55A3FF] transition-colors">Our Services</Link></li>
              <li><Link href="/projects" className="hover:text-[#55A3FF] transition-colors">Our Projects</Link></li>
              <li><Link href="/pricing" className="hover:text-[#55A3FF] transition-colors">Pricing & Models</Link></li>
              <li><Link href="/technologies" className="hover:text-[#55A3FF] transition-colors">Technologies Stack</Link></li>
              <li><Link href="/process" className="hover:text-[#55A3FF] transition-colors">Our Process</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/products?category=android" onClick={() => handleCategoryClick('android')} className="hover:text-[#55A3FF] transition-colors">
                  Android Apps
                </Link>
              </li>
              <li>
                <Link href="/products?category=windows" onClick={() => handleCategoryClick('windows')} className="hover:text-[#55A3FF] transition-colors">
                  Windows Software
                </Link>
              </li>
              <li>
                <Link href="/products?category=website" onClick={() => handleCategoryClick('website')} className="hover:text-[#55A3FF] transition-colors">
                  Websites & Platforms
                </Link>
              </li>
              <li>
                <Link href="/products?category=web" onClick={() => handleCategoryClick('web')} className="hover:text-[#55A3FF] transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/products?category=windows" onClick={() => handleCategoryClick('windows')} className="hover:text-[#55A3FF] transition-colors">
                  POS Systems
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#55A3FF] transition-colors">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/tools" className="hover:text-[#55A3FF] transition-colors">Digital Tools</Link></li>
              <li><Link href="/blog" className="hover:text-[#55A3FF] transition-colors">Engineering Blog</Link></li>
              <li><Link href="/testimonials" className="hover:text-[#55A3FF] transition-colors">Success Stories</Link></li>
              <li>
                <Link href="/products?category=games" onClick={() => handleCategoryClick('games')} className="hover:text-[#55A3FF] transition-colors">
                  Games
                </Link>
              </li>
              <li><Link href="/services" className="hover:text-[#55A3FF] transition-colors">Business Solutions</Link></li>
              <li><Link href="/inquiry" className="hover:text-[#55A3FF] transition-colors">Project Inquiry</Link></li>
              <li><Link href="/faq" className="hover:text-[#55A3FF] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 5: Support */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="mailto:nexifywebtech@gmail.com" className="hover:text-[#55A3FF] transition-colors flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#2979FF] shrink-0" />
                  <span>nexifywebtech@gmail.com</span>
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-[#55A3FF] transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-[#55A3FF] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#55A3FF] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/sitemap" className="hover:text-[#55A3FF] transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#30343D] pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A7ADB8] gap-4">
          <div>
            © 2026 NEXIFYWEBTECH. All Rights Reserved. · Ideas Into Digital Reality. · We Build Digital Experiences.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#181A20] border border-[#30343D] text-[#A7ADB8] hover:text-white hover:border-[#2979FF] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#55A3FF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
