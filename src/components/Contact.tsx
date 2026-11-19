import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PageHeader } from './PageHeader';
import { useRouter } from '../router/Router';

interface ContactProps {
  darkMode: boolean;
  prefillProject?: string;
}

const DEFAULT_PROJECT_TYPES = [
  'Android App',
  'Windows Software',
  'Website Development',
  'Web Application & SaaS',
  'Business Management Software',
  'Tools & Utilities',
  'Game Development',
  'Custom Software',
  'Other',
];

export const Contact: React.FC<ContactProps> = ({ darkMode, prefillProject: propPrefill }) => {
  const { path, queryParams } = useRouter();

  const queryProject = queryParams.get('project') || queryParams.get('service') || '';
  const initialProject = propPrefill || queryProject;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    projectType: initialProject || 'Android App',
    platform: 'Android',
    budget: '',
    timeline: '1-2 Months',
    description: initialProject
      ? `Interested in discussing a project or service related to: ${initialProject}`
      : '',
    referenceLinks: '',
  });

  useEffect(() => {
    if (queryProject) {
      setFormData((prev) => ({
        ...prev,
        projectType: queryProject,
        description:
          prev.description || `Interested in discussing a project or service related to: ${queryProject}`,
      }));
    }
  }, [queryProject]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} from ${formData.fullName}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone/WhatsApp: ${formData.phone}\n` +
        `Business: ${formData.businessName || 'N/A'}\n` +
        `Project Type: ${formData.projectType}\n` +
        `Platform: ${formData.platform}\n` +
        `Budget: ${formData.budget || 'Custom / Not Specified'}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Description:\n${formData.description}\n\n` +
        `References: ${formData.referenceLinks || 'N/A'}`
    );
    window.location.href = `mailto:nexifywebtech@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const isDedicatedInquiry = path === '/inquiry';
  const hasCustomProjectOption =
    formData.projectType && !DEFAULT_PROJECT_TYPES.includes(formData.projectType);

  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 ${darkMode ? 'text-white' : 'text-[#101114]'}`}>
      <PageHeader
        badge={isDedicatedInquiry ? 'Start a Project' : 'Contact & Project Inquiry'}
        badgeIcon={<Sparkles className="w-3.5 h-3.5 text-[#2979FF] dark:text-[#55A3FF]" />}
        title={isDedicatedInquiry ? 'Tell Us About Your Project' : "Let's Build Something Great Together"}
        description={
          isDedicatedInquiry
            ? 'Fill out our discovery form below with your requirements, target platforms, and custom budget. Our development team will review and provide a tailored scope breakdown.'
            : 'Have a new software requirement or looking to modernize your current systems? Our team in India delivers solutions worldwide.'
        }
        breadcrumbs={[{ label: isDedicatedInquiry ? 'Project Inquiry' : 'Contact Us' }]}
        darkMode={darkMode}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Contact Info Column */}
        <div className="space-y-8">
          <div
            className={`p-8 rounded-3xl border space-y-6 shadow-xl ${
              darkMode ? 'bg-[#202329] border-[#30343D]' : 'bg-white border-[#DCE2EC]'
            }`}
          >
            <h3 className="text-xl font-bold">Direct Channels</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Support Email
                  </div>
                  <a
                    href="mailto:nexifywebtech@gmail.com"
                    className="text-sm font-bold text-[#2979FF] dark:text-[#55A3FF] hover:underline break-all"
                  >
                    nexifywebtech@gmail.com
                  </a>
                  <p className={`text-[11px] mt-0.5 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Average response: under 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Operating Base
                  </div>
                  <div className="text-sm font-semibold">India</div>
                  <p className={`text-[11px] mt-0.5 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Remote delivery across global time zones
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2979FF]/12 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-semibold uppercase ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Instagram Community
                  </div>
                  <div className="text-sm font-semibold text-[#2979FF] dark:text-[#55A3FF]">@Nexifywebtech</div>
                  <p className={`text-[11px] mt-0.5 ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Development updates &amp; tech tips
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="mailto:nexifywebtech@gmail.com"
                className="nexify-btn-primary w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Project Inquiry Form Column */}
        <div
          className={`lg:col-span-2 p-8 sm:p-12 rounded-3xl border shadow-2xl ${
            darkMode ? 'bg-[#202329] border-[#30343D]' : 'bg-white border-[#DCE2EC]'
          }`}
        >
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#2979FF]/15 text-[#2979FF] dark:text-[#55A3FF] border border-[#2979FF]/35 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold">Inquiry Ready to Send</h3>
              <p className={`text-sm max-w-md mx-auto ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                Your email client has opened with your prefilled project inquiry addressed to{' '}
                <span className="text-[#2979FF] dark:text-[#55A3FF] font-semibold">nexifywebtech@gmail.com</span>. We will review your requirements and respond promptly!
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="nexify-btn-secondary px-6 py-3 rounded-xl text-xs font-bold cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-2xl font-bold">Project Inquiry Form</h3>
                <span className={`text-xs ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>* Required fields</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    placeholder="+91 / International number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Business / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Business Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  >
                    {hasCustomProjectOption && (
                      <option value={formData.projectType}>{formData.projectType}</option>
                    )}
                    <option value="Android App">Android App</option>
                    <option value="Windows Software">Windows Software / POS</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Web Application & SaaS">Web Application &amp; SaaS</option>
                    <option value="Business Management Software">Business Management Software</option>
                    <option value="Tools & Utilities">Tools &amp; Utilities</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="Other">Other Custom IT Requirement</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Target Platform
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  >
                    <option value="Android">Android Mobile</option>
                    <option value="Windows Desktop">Windows Desktop</option>
                    <option value="Web Browser">Web Platform / Browser</option>
                    <option value="Cross-Platform">Cross-Platform (Mobile &amp; Desktop &amp; Web)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Your Custom Budget
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your budget (e.g., $2,500 or ₹1,50,000)"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                  >
                    <option value="Urgent (2-4 Weeks)">Urgent (2-4 Weeks)</option>
                    <option value="1-2 Months">1-2 Months</option>
                    <option value="2-4 Months">2-4 Months</option>
                    <option value="Flexible">Flexible / Milestone Based</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-[#A7ADB8]' : 'text-[#4B5565]'}`}>
                  Project Requirements &amp; Details *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you want to build, key features, workflows, and any existing references..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="nexify-input w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              <button
                type="submit"
                className="nexify-btn-primary w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Project Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
