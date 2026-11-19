import React from 'react';
import { Mail, Send } from 'lucide-react';
import { Link } from '../router/Router';

interface ConnectWithUsProps {
  darkMode: boolean;
  onStartProject?: () => void;
}

export const ConnectWithUs: React.FC<ConnectWithUsProps> = ({ darkMode, onStartProject }) => {
  return (
    <section
      id="connect-section"
      className={`scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${
        darkMode ? 'text-white' : 'text-[#101114]'
      }`}
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/25 text-xs font-semibold uppercase tracking-wider">
          Connect With NEXIFYWEBTECH
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Let's Connect and Build Something Great.
        </h2>
        <p className={`text-base sm:text-lg leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
          Have a project idea, need custom software or looking for the right digital solution for your business? Connect with NEXIFYWEBTECH and let's turn your ideas into digital reality.
        </p>
      </div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
        {/* Email Support Card */}
        <div
          className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 group ${
            darkMode
              ? 'bg-[#202329] border-[#30343D] hover:border-[#2979FF] hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.28)]'
              : 'bg-white border-[#DCE2EC] hover:border-[#2979FF] shadow-lg'
          }`}
        >
          <div className="space-y-4">
            <div className="w-13 h-13 rounded-2xl bg-[#2979FF]/12 border border-[#2979FF]/30 text-[#2979FF] dark:text-[#55A3FF] flex items-center justify-center group-hover:bg-[#2979FF] group-hover:text-white transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Email Support</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
              Send us your questions, project details, software requirements or business inquiries through email.
            </p>
            <div className="text-xs font-semibold text-[#2979FF] dark:text-[#55A3FF] break-all">
              nexifywebtech@gmail.com
            </div>
          </div>
          <div className="pt-7">
            <a
              href="mailto:nexifywebtech@gmail.com"
              className="nexify-btn-secondary w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2"
            >
              <span>Send Email</span>
            </a>
          </div>
        </div>

        {/* Direct Project Inquiry Card */}
        <div
          className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 group ${
            darkMode
              ? 'bg-[#202329] border-[#2979FF]/50 hover:border-[#2979FF] hover:shadow-[0_18px_40px_-14px_rgba(41,121,255,0.32)]'
              : 'bg-white border-[#2979FF]/40 hover:border-[#2979FF] shadow-lg'
          }`}
        >
          <div className="space-y-4">
            <div className="w-13 h-13 rounded-2xl bg-[#2979FF] text-white flex items-center justify-center shadow-md shadow-[#2979FF]/30">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Direct Inquiry</h3>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
              Have a specific software, application or website requirement? Submit your project details directly through our project inquiry form.
            </p>
          </div>
          <div className="pt-7">
            <Link
              href="/inquiry"
              onClick={() => onStartProject?.()}
              className="nexify-btn-primary w-full py-3 rounded-xl font-semibold text-xs flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Company Details Banner */}
      <div
        className={`p-7 sm:p-8 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left ${
          darkMode ? 'bg-[#181A20] border-[#30343D]' : 'bg-white border-[#DCE2EC] shadow-md'
        }`}
      >
        <div className="space-y-1">
          <div className="text-lg font-extrabold">
            NEXIFY<span className="text-[#2979FF]">WEBTECH</span>
          </div>
          <div className={`text-xs ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
            Ideas Into Digital Reality. · Software Development &amp; IT Solutions
          </div>
        </div>
        <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
          Support Email:{' '}
          <a href="mailto:nexifywebtech@gmail.com" className="text-[#2979FF] dark:text-[#55A3FF] hover:underline">
            nexifywebtech@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
