import React from 'react';
import { ProductItem } from '../types';
import {
  X,
  Sparkles,
  Shield,
  Layers,
  CheckCircle2,
  Users,
  Monitor,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface ProjectDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onStartProject: (title?: string) => void;
  darkMode: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  product,
  onClose,
  onStartProject,
  darkMode,
}) => {
  if (!product) return null;

  const getStatusBadge = (status: ProductItem['status']) => {
    switch (status) {
      case 'Available':
        return 'bg-[#2979FF]/20 text-[#55A3FF] border-[#2979FF]/40';
      case 'In Development':
        return 'bg-[#55A3FF]/15 text-[#55A3FF] border-[#55A3FF]/35';
      case 'Custom Development':
        return 'bg-white/10 text-white border-[#30343D]';
      default:
        return 'bg-[#181A20] text-[#A7ADB8] border-[#30343D]';
    }
  };

  return (
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
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#101114]/80 hover:bg-[#2979FF] text-white border border-[#30343D] transition-colors z-10 cursor-pointer"
          title="Close Modal"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Image */}
        <div className="relative h-64 rounded-2xl overflow-hidden bg-[#181A20] border border-[#30343D]">
          <img
            src={product.image}
            alt={product.title}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/55 to-transparent flex items-end p-6">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#2979FF] text-white">
                  {product.platform}
                </span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${getStatusBadge(product.status)}`}>
                  {product.status}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">{product.title}</h2>
            </div>
          </div>
        </div>

        {/* 1. Project Overview */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>1. Project Overview</span>
          </h3>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            {product.shortDesc}
          </p>
        </div>

        {/* 2. About This Software */}
        <div
          className={`space-y-2 p-5 rounded-2xl border ${
            darkMode ? 'bg-[#181A20] border-[#2979FF]/30' : 'bg-[#F6F8FC] border-[#2979FF]/25'
          }`}
        >
          <h3 className="text-sm font-bold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>2. About This Software</span>
          </h3>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-white/90' : 'text-[#101114]'}`}>
            {product.aboutSoftware}
          </p>
        </div>

        {/* 3. Detailed Description */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider flex items-center space-x-2">
            <Layers className="w-4 h-4" />
            <span>3. Detailed Description</span>
          </h3>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            {product.fullDesc}
          </p>
        </div>

        {/* 4. Main Features */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>4. Main Features</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2.5 text-sm p-3 rounded-xl border ${
                  darkMode ? 'bg-[#181A20] border-[#30343D] text-white/90' : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#101114]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-[#2979FF] dark:text-[#55A3FF] mt-0.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Who Can Use It & 6. Supported Platform */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-2xl border space-y-1.5 ${darkMode ? 'bg-[#181A20] border-[#30343D]' : 'bg-[#F6F8FC] border-[#DCE2EC]'}`}>
            <div className="text-xs font-semibold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>5. Who Can Use It</span>
            </div>
            <div className="text-sm font-medium">{product.targetAudience}</div>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1.5 ${darkMode ? 'bg-[#181A20] border-[#30343D]' : 'bg-[#F6F8FC] border-[#DCE2EC]'}`}>
            <div className="text-xs font-semibold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider flex items-center space-x-1.5">
              <Monitor className="w-3.5 h-3.5" />
              <span>6. Supported Platform</span>
            </div>
            <div className="text-sm font-medium">{product.platform}</div>
          </div>
        </div>

        {/* 7. Actual Screenshots Gallery */}
        {product.screenshots && product.screenshots.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#2979FF] dark:text-[#55A3FF] uppercase tracking-wider">
              7. Project Screenshots Gallery
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {product.screenshots.map((s, idx) => (
                <div
                  key={idx}
                  className={`relative h-40 rounded-xl overflow-hidden border group ${
                    darkMode ? 'border-[#30343D] bg-[#181A20]' : 'border-[#DCE2EC] bg-[#F6F8FC]'
                  }`}
                >
                  <img
                    src={s}
                    alt={`${product.title} screenshot ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Contact for Similar Software & Live Website CTA */}
        <div className={`pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'}`}>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => {
                const title = product.title;
                onClose();
                onStartProject(title);
              }}
              className="nexify-btn-primary w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Request Similar Software</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {product.liveWebsiteUrl && (
              <a
                href={product.liveWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nexify-btn-secondary w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
              >
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4 text-[#2979FF] dark:text-[#55A3FF]" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm border transition-colors cursor-pointer ${
              darkMode
                ? 'border-[#30343D] text-[#A7ADB8] hover:text-white hover:bg-[#181A20]'
                : 'border-[#DCE2EC] text-[#4B5565] hover:text-[#101114] hover:bg-[#F6F8FC]'
            }`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
