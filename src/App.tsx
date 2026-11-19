import React, { useState, useEffect } from 'react';
import { RouterProvider, useRouter } from './router/Router';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { Technologies } from './components/Technologies';
import { ToolsDirectory } from './components/ToolsDirectory';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { LegalPage } from './components/LegalPages';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Footer } from './components/Footer';
import { ProductItem } from './types';
import { PRODUCTS_DATA } from './data/portfolioData';

function AppContent() {
  const { path, queryParams, navigate } = useRouter();
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('nexify_theme');
      return saved ? saved === 'dark' : true;
    } catch {
      return true;
    }
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  useEffect(() => {
    const themeName = darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeName);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('nexify_theme', themeName);
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [darkMode]);

  useEffect(() => {
    const cat = queryParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
    const productId = queryParams.get('id');
    if (productId) {
      const match = PRODUCTS_DATA.find((p) => p.id === productId);
      if (match) {
        setSelectedProduct(match);
      }
    }
  }, [queryParams]);

  const handleStartProject = (title?: string) => {
    if (title) {
      navigate(`/inquiry?project=${encodeURIComponent(title)}`);
    } else {
      navigate('/inquiry');
    }
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
    if (queryParams.has('id')) {
      const newParams = new URLSearchParams(queryParams.toString());
      newParams.delete('id');
      const searchStr = newParams.toString() ? `?${newParams.toString()}` : '';
      navigate(`${path}${searchStr}`, { replace: true, scroll: false });
    }
  };

  const normalized = path.replace(/^\/+|\/+$/g, '').toLowerCase();

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-200 ${
        darkMode ? 'bg-[#101114] text-white' : 'bg-[#F6F8FC] text-[#101114]'
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      <main className="transition-all duration-200 min-h-[calc(100vh-160px)]">
        {(normalized === '' || normalized === 'home') && (
          <Home
            darkMode={darkMode}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onStartProject={handleStartProject}
          />
        )}

        {normalized === 'about' && <About darkMode={darkMode} />}

        {normalized === 'services' && (
          <Services darkMode={darkMode} onStartProject={handleStartProject} />
        )}

        {normalized === 'products' && (
          <Products
            darkMode={darkMode}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            onStartProject={handleStartProject}
          />
        )}

        {normalized === 'projects' && (
          <Projects
            darkMode={darkMode}
            onSelectProduct={(prod) => setSelectedProduct(prod)}
            onStartProject={handleStartProject}
          />
        )}

        {normalized === 'pricing' && (
          <Pricing
            darkMode={darkMode}
            isStandalonePage={true}
            onStartProject={handleStartProject}
          />
        )}

        {normalized === 'technologies' && (
          <Technologies darkMode={darkMode} isStandalonePage={true} />
        )}

        {normalized === 'process' && (
          <Process darkMode={darkMode} isStandalonePage={true} />
        )}

        {normalized === 'tools' && (
          <ToolsDirectory darkMode={darkMode} onStartProject={handleStartProject} />
        )}

        {normalized === 'testimonials' && (
          <Testimonials darkMode={darkMode} isFeaturedOnly={false} />
        )}

        {normalized === 'blog' && (
          <Blog darkMode={darkMode} onStartProject={handleStartProject} />
        )}

        {normalized === 'faq' && <FAQ darkMode={darkMode} />}

        {(normalized === 'contact' || normalized === 'inquiry') && (
          <Contact darkMode={darkMode} />
        )}

        {normalized === 'privacy' && <LegalPage type="privacy" darkMode={darkMode} />}

        {normalized === 'terms' && <LegalPage type="terms" darkMode={darkMode} />}

        {normalized === 'sitemap' && <LegalPage type="sitemap" darkMode={darkMode} />}
      </main>

      <ProjectDetailModal
        product={selectedProduct}
        onClose={handleCloseProductModal}
        onStartProject={handleStartProject}
        darkMode={darkMode}
      />

      <Footer darkMode={darkMode} onSelectCategory={(cat) => setSelectedCategory(cat)} />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
