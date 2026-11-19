import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export interface RouterContextType {
  path: string;
  pathname: string;
  search: string;
  queryParams: URLSearchParams;
  navigate: (to: string, options?: { replace?: boolean; scroll?: boolean }) => void;
  goBack: () => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

const parseCurrentLocation = (): { pathname: string; search: string; queryParams: URLSearchParams } => {
  // Check hash first for environments using hash routing fallback (e.g. #/services?id=123)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/')) {
    const hashContent = hash.slice(1); // remove '#' -> '/services?id=123'
    const qIndex = hashContent.indexOf('?');
    if (qIndex !== -1) {
      const pathname = hashContent.slice(0, qIndex) || '/';
      const search = hashContent.slice(qIndex);
      return { pathname, search, queryParams: new URLSearchParams(search) };
    }
    return { pathname: hashContent || '/', search: '', queryParams: new URLSearchParams() };
  }

  // Fallback or standard HTML5 path
  let pathname = window.location.pathname || '/';
  if (pathname === '/index.html' || pathname === '') {
    pathname = '/';
  }
  const search = window.location.search || '';
  return {
    pathname,
    search,
    queryParams: new URLSearchParams(search),
  };
};

const getPageTitle = (pathname: string): string => {
  const clean = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  switch (clean) {
    case '':
    case 'home':
      return 'NEXIFYWEBTECH – We Build Digital Experiences';
    case 'about':
      return 'About Us | NEXIFYWEBTECH';
    case 'services':
      return 'Services & IT Solutions | NEXIFYWEBTECH';
    case 'products':
      return 'Our Products & Software | NEXIFYWEBTECH';
    case 'projects':
      return 'Our Projects Portfolio | NEXIFYWEBTECH';
    case 'process':
      return 'Development Process | NEXIFYWEBTECH';
    case 'pricing':
      return 'Pricing & Engagement Models | NEXIFYWEBTECH';
    case 'technologies':
      return 'Technologies & Engineering Stack | NEXIFYWEBTECH';
    case 'tools':
      return 'Digital Tools & Utilities | NEXIFYWEBTECH';
    case 'blog':
      return 'Engineering Blog & Articles | NEXIFYWEBTECH';
    case 'testimonials':
      return 'Client Success Stories | NEXIFYWEBTECH';
    case 'faq':
      return 'Frequently Asked Questions | NEXIFYWEBTECH';
    case 'contact':
      return 'Contact Us | NEXIFYWEBTECH';
    case 'inquiry':
      return 'Start a Project | NEXIFYWEBTECH';
    case 'privacy':
      return 'Privacy Policy | NEXIFYWEBTECH';
    case 'terms':
      return 'Terms & Conditions | NEXIFYWEBTECH';
    case 'sitemap':
      return 'Sitemap & Directory | NEXIFYWEBTECH';
    default:
      return `${clean.charAt(0).toUpperCase() + clean.slice(1)} | NEXIFYWEBTECH`;
  }
};

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locationState, setLocationState] = useState(parseCurrentLocation);

  const updateLocation = useCallback(() => {
    const parsed = parseCurrentLocation();
    setLocationState(parsed);
    const title = getPageTitle(parsed.pathname);
    document.title = title;
  }, []);

  useEffect(() => {
    // Initial sync
    updateLocation();

    // Listen to browser navigation (back / forward buttons)
    const handlePopState = () => {
      updateLocation();
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, [updateLocation]);

  const navigate = useCallback((to: string, options?: { replace?: boolean; scroll?: boolean }) => {
    if (!to) return;

    // Normalize target
    let target = to;
    if (!target.startsWith('/') && !target.startsWith('#')) {
      target = '/' + target;
    }

    if (options?.replace) {
      window.history.replaceState({}, '', target);
    } else {
      window.history.pushState({}, '', target);
    }

    const parsed = parseCurrentLocation();
    setLocationState(parsed);
    document.title = getPageTitle(parsed.pathname);

    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  const normalizedPath = locationState.pathname === '/' ? '/home' : locationState.pathname;

  return (
    <RouterContext.Provider
      value={{
        path: normalizedPath,
        pathname: locationState.pathname,
        search: locationState.search,
        queryParams: locationState.queryParams,
        navigate,
        goBack,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  scroll?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  scroll = true,
  onClick,
  ...rest
}) => {
  const { path, navigate } = useRouter();

  const targetPath = href.split('?')[0].replace(/\/+$/, '') || '/home';
  const currentCleanPath = path.replace(/\/+$/, '') || '/home';
  const isActive = currentCleanPath === targetPath || (targetPath === '/home' && currentCleanPath === '/');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser handle modifier clicks (cmd/ctrl click, middle click, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    // If external link, don't intercept
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return;
    }

    e.preventDefault();
    navigate(href, { scroll });
    if (onClick) {
      onClick(e);
    }
  };

  const finalClassName = `${className} ${isActive && activeClassName ? activeClassName : ''}`.trim();

  return (
    <a href={href} onClick={handleClick} className={finalClassName} {...rest}>
      {children}
    </a>
  );
};
