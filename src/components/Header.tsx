import React from 'react';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-brand-navy">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Professional Masthead */}
      <div className="relative text-center py-8 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <img 
              src="/lovable-uploads/ded11918-8b96-493c-9a95-5d0d8cd6fdb0.png" 
              alt="KAAL Logo" 
              className="w-16 h-16 object-contain filter invert animate-fade-in"
            />
            <div className="text-left">
              <h1 className="font-masthead text-3xl md:text-5xl font-black tracking-wider text-white animate-fade-in">
                THE MILITARY HERALD
              </h1>
              <div className="flex items-center space-x-4 mt-2 text-xs font-body text-white/80 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <span>DEFENSE TECHNOLOGY DIVISION</span>
                <span>•</span>
                <span>{new Date().toLocaleDateString('en-GB', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Headline Section */}
      <div className="relative bg-background text-foreground py-16 shadow-elegant">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-brand-gold/10 text-brand-gold rounded-full font-body text-sm font-semibold uppercase tracking-wider animate-fade-in">
              Breaking: Defense Innovation
            </span>
          </div>
          
          <h2 className="font-masthead font-black text-4xl md:text-6xl lg:text-7xl text-headline leading-tight tracking-tight animate-scale-in">
            KAAL: REVOLUTIONIZING
            <br />
            <span className="text-brand-gold">MILITARY TRAINING</span>
          </h2>
          
          <h3 className="font-body text-lg md:text-xl font-medium mt-8 text-subtext max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Advanced AI-Powered Simulation System Transforms Defense Preparedness with Revolutionary Technology
          </h3>
          
          {/* Enhanced decorative elements */}
          <div className="mt-10 flex justify-center items-center space-x-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-brand-gold"></div>
            <div className="w-3 h-3 bg-brand-gold rounded-full"></div>
            <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-brand-gold"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;