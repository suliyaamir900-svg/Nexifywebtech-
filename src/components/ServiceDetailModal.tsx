import React from 'react';
import { ServiceItem } from '../types';
import {
  X,
  CheckCircle2,
  ArrowRight,
  Clock,
  Cpu,
  Layers,
  Smartphone,
  Monitor,
  Globe,
  Layout,
  ShoppingBag,
  Palette,
  Wrench,
  Gamepad2,
  Headphones,
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onStartProject: (serviceTitle: string) => void;
  darkMode: boolean;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onStartProject,
  darkMode,
}) => {
  if (!service) return null;

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Smartphone,
    Monitor,
    Globe,
    Layout,
    ShoppingBag,
    Cpu,
    Palette,
    Wrench,
    Gamepad2,
    Headphones,
  };

  const Icon = iconMap[service.iconName] || Monitor;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101114]/85 backdrop-blur-xl">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-9 shadow-2xl space-y-6 ${
          darkMode
            ? 'bg-[#202329] border-[#30343D] text-white'
            : 'bg-white border-[#DCE2EC] text-[#101114]'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className={`absolute top-6 right-6 p-2 rounded-xl border transition-colors cursor-pointer ${
            darkMode
              ? 'bg-[#181A20] border-[#30343D] text-[#A7ADB8] hover:text-white hover:border-[#2979FF]'
              : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#4B5565] hover:text-[#101114] hover:border-[#2979FF]'
          }`}
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start space-x-4 pr-10">
          <div className="w-14 h-14 rounded-2xl bg-[#2979FF]/15 border border-[#2979FF]/35 text-[#2979FF] dark:text-[#55A3FF] flex items-center justify-center shrink-0">
            <Icon className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF]">
              <span>Service Specification</span>
              <span>·</span>
              <span className="inline-flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{service.timeline}</span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">{service.title}</h2>
          </div>
        </div>

        {/* Overview */}
        <div
          className={`p-5 rounded-2xl border space-y-2 ${
            darkMode ? 'bg-[#181A20] border-[#30343D]' : 'bg-[#F6F8FC] border-[#DCE2EC]'
          }`}
        >
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF] flex items-center space-x-2">
            <Layers className="w-4 h-4" />
            <span>Engineering Overview</span>
          </h3>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            {service.overview}
          </p>
        </div>

        {/* Deliverables & Use Cases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF]">
              Key Deliverables
            </h3>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#2979FF] dark:text-[#55A3FF] shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-white/90' : 'text-[#101114]'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF]">
              Ideal Use Cases
            </h3>
            <ul className="space-y-2">
              {service.useCases.map((uc, idx) => (
                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#55A3FF] shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}>{uc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Used */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#2979FF] dark:text-[#55A3FF] flex items-center space-x-2">
            <Cpu className="w-4 h-4" />
            <span>Core Technologies Used</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.techUsed.map((tech, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                  darkMode
                    ? 'bg-[#181A20] border-[#30343D] text-white'
                    : 'bg-[#F6F8FC] border-[#DCE2EC] text-[#101114]'
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div
          className={`pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3 ${
            darkMode ? 'border-[#30343D]' : 'border-[#DCE2EC]'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              const title = service.title;
              onClose();
              onStartProject(title);
            }}
            className="nexify-btn-primary w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClose}
            className={`w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm border cursor-pointer transition-colors ${
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
