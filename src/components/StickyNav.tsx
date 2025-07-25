import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-article-bg/98 backdrop-blur-md shadow-elegant border-b border-border/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/ded11918-8b96-493c-9a95-5d0d8cd6fdb0.png" 
                alt="KAAL Logo" 
                className="w-10 h-10 object-contain filter brightness-0 hover:brightness-100 transition-all duration-300 drop-shadow-logo"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-masthead font-black text-xl text-headline tracking-wider">KAAL</span>
              <span className="font-body text-xs text-subtext uppercase tracking-widest">Military Innovation</span>
            </div>
          </div>
          
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-6 py-3 bg-brand-navy text-white rounded-xl font-body font-medium text-sm hover:bg-brand-navy/90 transition-all duration-300 hover:shadow-button hover:scale-105"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default StickyNav;