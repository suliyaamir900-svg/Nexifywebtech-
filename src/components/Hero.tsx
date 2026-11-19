import React from 'react';
import {
  ArrowRight,
  Code2,
  FileText,
  Monitor,
  Smartphone,
  Globe,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { VIDEO_PATH } from '../data/portfolioData';
import { Link, useRouter } from '../router/Router';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const { navigate } = useRouter();

  const handleGetQuote = () => {
    const contactEl = document.getElementById('connect-section');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/inquiry');
    }
  };

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 bg-[#101114]">
      {/* Background Looping Video with Deep Black + Electric Blue Gradient Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.42] contrast-110"
        >
          <source src={VIDEO_PATH} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 75% 28%, rgba(41, 121, 255, 0.20) 0%, rgba(16, 17, 20, 0.88) 48%, #101114 95%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(48, 52, 61, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(48, 52, 61, 0.45) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-14">
        {/* Split 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-lg border border-[#2979FF]/35 bg-[#2979FF]/12 text-[#55A3FF] text-xs font-semibold tracking-wider uppercase">
              <span>NEXIFYWEBTECH</span>
              <span className="text-[#30343D]">·</span>
              <span className="text-white">Ideas Into Digital Reality</span>
            </div>

            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Turning Ideas Into{' '}
              <span className="bg-gradient-to-r from-white via-[#55A3FF] to-[#2979FF] bg-clip-text text-transparent">
                Powerful Digital Experiences.
              </span>
            </h1>

            <p className="hero-description max-w-2xl text-base sm:text-lg text-[#A7ADB8] leading-relaxed">
              From native Android mobile applications and offline-ready Windows desktop software to modern websites and intelligent web platforms, NEXIFYWEBTECH builds dependable software engineered for everyday business growth.
            </p>

            {/* Primary & Secondary Action Group */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="/products"
                className="nexify-btn-primary px-7 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2.5 group whitespace-nowrap"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                type="button"
                onClick={handleGetQuote}
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-white border border-[#2979FF]/70 bg-[#181A20]/85 hover:bg-[#2979FF]/15 hover:border-[#55A3FF] hover:shadow-[0_0_24px_rgba(41,121,255,0.30)] transition-all flex items-center justify-center space-x-2 group cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-[#55A3FF]" />
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 text-[#55A3FF] group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/inquiry"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-[#A7ADB8] hover:text-white border border-[#30343D] bg-[#202329]/75 hover:border-[#2979FF]/60 transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <Code2 className="w-4 h-4 text-[#55A3FF]" />
                <span>Start Your Project</span>
              </Link>
            </div>

            <div className="pt-1 text-xs sm:text-sm tracking-wider uppercase font-semibold text-[#55A3FF]">
              Your Ideas · Our Technology · Limitless Possibilities
            </div>
          </div>

          {/* Right Column: Subtle Floating Tech Preview Cards */}
          <div className="lg:col-span-5 relative">
            {/* Soft Electric Blue Backlight */}
            <div
              className="absolute -inset-6 rounded-3xl blur-3xl pointer-events-none opacity-60"
              style={{ background: 'radial-gradient(circle at center, rgba(41, 121, 255, 0.25), transparent 70%)' }}
            />

            <div className="relative space-y-4">
              {/* Floating Card 1: Windows Desktop & POS */}
              <div
                onClick={() => navigate('/products?category=windows')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/products?category=windows')}
                className="animate-float-slow p-5 rounded-2xl border border-[#30343D] bg-[#202329]/90 backdrop-blur-xl shadow-2xl hover:border-[#2979FF] hover:shadow-[0_16px_38px_-10px_rgba(41,121,255,0.35)] transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#2979FF]/15 border border-[#2979FF]/35 text-[#55A3FF] flex items-center justify-center shrink-0">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#55A3FF]">
                        Windows Desktop Suite
                      </div>
                      <h2 className="text-base font-bold text-white group-hover:text-[#55A3FF] transition-colors">
                        Store POS, Medical &amp; Hotel Systems
                      </h2>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A7ADB8] group-hover:text-[#55A3FF] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
                <div className="mt-4 pt-3 border-t border-[#30343D]/80 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A7ADB8]">
                  <span className="inline-flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF]" />
                    <span>C# .NET · WPF · Offline SQLite</span>
                  </span>
                  <span className="text-white font-semibold tabular-nums">10+ Desktop Suites</span>
                </div>
              </div>

              {/* Floating Card 2: Android Mobile Applications */}
              <div
                onClick={() => navigate('/products?category=android')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/products?category=android')}
                className="animate-float-medium sm:ml-6 p-5 rounded-2xl border border-[#2979FF]/45 bg-[#181A20]/95 backdrop-blur-xl shadow-2xl hover:border-[#55A3FF] hover:shadow-[0_16px_38px_-10px_rgba(41,121,255,0.35)] transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#2979FF] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#2979FF]/30">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#55A3FF]">
                        Android Engineering
                      </div>
                      <h2 className="text-base font-bold text-white group-hover:text-[#55A3FF] transition-colors">
                        WorkKhata &amp; HaazriPro Field Apps
                      </h2>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#A7ADB8] group-hover:text-[#55A3FF] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </div>
                <div className="mt-4 pt-3 border-t border-[#30343D]/80 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A7ADB8]">
                  <span className="inline-flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF]" />
                    <span>Kotlin · Jetpack Compose · Room DB</span>
                  </span>
                  <span className="text-white font-semibold tabular-nums">20+ Mobile Apps</span>
                </div>
              </div>

              {/* Floating Card 3: Web Platforms & PDFLove */}
              <div
                onClick={() => navigate('/products?category=website')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate('/products?category=website')}
                className="animate-float-reverse p-5 rounded-2xl border border-[#30343D] bg-[#202329]/90 backdrop-blur-xl shadow-2xl hover:border-[#2979FF] hover:shadow-[0_16px_38px_-10px_rgba(41,121,255,0.35)] transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#2979FF]/15 border border-[#2979FF]/35 text-[#55A3FF] flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-[#55A3FF]">
                        Web &amp; SaaS Platforms
                      </div>
                      <h2 className="text-base font-bold text-white group-hover:text-[#55A3FF] transition-colors">
                        PDFLove.store &amp; Custom Portals
                      </h2>
                    </div>
                  </div>
                  <a
                    href="https://www.pdflove.store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg border border-[#30343D] bg-[#181A20] text-[#55A3FF] hover:border-[#2979FF] transition-colors shrink-0"
                    title="Visit PDFLove.store"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="mt-4 pt-3 border-t border-[#30343D]/80 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A7ADB8]">
                  <span className="inline-flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2979FF]" />
                    <span>React · TypeScript · Node.js</span>
                  </span>
                  <span className="text-white font-semibold tabular-nums">50+ Web Launches</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Track Record Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          <div className="p-5 rounded-2xl border border-[#30343D] bg-[#181A20]/90 backdrop-blur-xl hover:border-[#2979FF] hover:shadow-[0_12px_28px_-10px_rgba(41,121,255,0.30)] transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#2979FF] tabular-nums">4+</div>
            <div className="text-xs sm:text-sm text-[#A7ADB8] mt-1 font-medium">Years Experience</div>
          </div>
          <div className="p-5 rounded-2xl border border-[#30343D] bg-[#181A20]/90 backdrop-blur-xl hover:border-[#2979FF] hover:shadow-[0_12px_28px_-10px_rgba(41,121,255,0.30)] transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">50+</div>
            <div className="text-xs sm:text-sm text-[#A7ADB8] mt-1 font-medium">Websites &amp; Web Apps</div>
          </div>
          <div className="p-5 rounded-2xl border border-[#30343D] bg-[#181A20]/90 backdrop-blur-xl hover:border-[#2979FF] hover:shadow-[0_12px_28px_-10px_rgba(41,121,255,0.30)] transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#55A3FF] tabular-nums">20+</div>
            <div className="text-xs sm:text-sm text-[#A7ADB8] mt-1 font-medium">Android Apps</div>
          </div>
          <div className="p-5 rounded-2xl border border-[#30343D] bg-[#181A20]/90 backdrop-blur-xl hover:border-[#2979FF] hover:shadow-[0_12px_28px_-10px_rgba(41,121,255,0.30)] transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">10+</div>
            <div className="text-xs sm:text-sm text-[#A7ADB8] mt-1 font-medium">Windows Desktop Apps</div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Fade Divider into Page Canvas */}
      {!darkMode && (
        <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-[#F6F8FC] to-transparent pointer-events-none" />
      )}
    </section>
  );
};
