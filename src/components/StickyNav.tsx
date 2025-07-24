import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const StickyNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
    }`}>
      <nav className="bg-primary/95 backdrop-blur-md border-b border-primary-foreground/20 shadow-elegant">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="font-masthead text-xl font-bold text-primary-foreground">
                KAAL
              </h1>
              <span className="font-body text-sm text-primary-foreground/80">
                Military Herald
              </span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 hover:scale-105 shadow-button hover:shadow-hover"
            >
              <ArrowUp size={16} />
              <span className="font-body text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StickyNav;