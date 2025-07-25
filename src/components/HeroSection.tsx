import React from 'react';
import { ChevronDown, Shield, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    contentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-brand-navy via-brand-navy/95 to-brand-charcoal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          
          {/* Logo Section */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 mb-6">
              <img 
                src="/lovable-uploads/ded11918-8b96-493c-9a95-5d0d8cd6fdb0.png" 
                alt="KAAL Logo" 
                className="w-full h-full object-contain filter invert drop-shadow-logo animate-float"
              />
            </div>
            <div className="flex items-center justify-center space-x-4 mb-2">
              <div className="w-16 h-0.5 bg-brand-gold"></div>
              <span className="font-body text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Defense Innovation</span>
              <div className="w-16 h-0.5 bg-brand-gold"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-masthead font-black text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-8 animate-scale-in">
            KAAL
            <span className="block text-brand-gold mt-2">REVOLUTIONIZING</span>
            <span className="block text-brand-teal">MILITARY TRAINING</span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            Advanced AI-Powered Simulation System Transforms Defense Preparedness with Revolutionary Technology
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-12 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-white/20 transition-colors duration-300">
                <Shield className="w-8 h-8 text-brand-gold" />
              </div>
              <span className="font-body text-sm text-white/80 uppercase tracking-wider">Defense Ready</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-white/20 transition-colors duration-300">
                <Zap className="w-8 h-8 text-brand-teal" />
              </div>
              <span className="font-body text-sm text-white/80 uppercase tracking-wider">AI Powered</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 hover:bg-white/20 transition-colors duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <span className="font-body text-sm text-white/80 uppercase tracking-wider">Mission Critical</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={scrollToContent}
              className="group inline-flex items-center px-12 py-4 bg-brand-gold text-brand-charcoal rounded-xl font-body font-semibold text-lg hover:bg-brand-gold/90 transition-all duration-300 hover:shadow-hover hover:scale-105"
            >
              <span>Explore KAAL Innovation</span>
              <ChevronDown className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;