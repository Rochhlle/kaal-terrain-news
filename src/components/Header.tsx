import React from 'react';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 opacity-95"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Newspaper Masthead */}
      <div className="relative text-center py-6 border-b-4 border-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-masthead text-4xl md:text-6xl font-black tracking-wider text-primary-foreground animate-fade-in">
            THE MILITARY HERALD
          </h1>
          <div className="flex justify-center items-center space-x-6 mt-3 text-sm font-body text-primary-foreground/90 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <span className="hidden sm:inline">{new Date().toLocaleDateString('en-GB', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>
      </div>
      
      {/* Main Headline */}
      <div className="relative bg-background text-foreground py-12 shadow-elegant">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl text-headline leading-none tracking-tight animate-scale-in">
            KAAL: REVOLUTIONIZING
            <br />
            <span className="text-accent">MILITARY TRAINING</span>
          </h2>
          <h3 className="font-body text-xl md:text-2xl font-medium mt-6 text-subtext max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Advanced AI-Powered Simulation System Transforms Defense Preparedness with Revolutionary Technology
          </h3>
          
          {/* Decorative accent line */}
          <div className="mt-8 flex justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="w-32 h-1 bg-gradient-to-r from-accent via-tech-accent to-accent rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;