import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground">
      {/* Newspaper Masthead */}
      <div className="text-center py-4 border-b-4 border-primary-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="font-masthead text-3xl md:text-5xl font-black tracking-wider">
            THE MILITARY HERALD
          </h1>
          <div className="flex justify-center items-center space-x-8 mt-2 text-sm font-body">
            <span>ESTABLISHED 1947</span>
            <span>•</span>
            <span>NEW DELHI, INDIA</span>
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
      
      {/* Main Headline */}
      <div className="bg-background text-foreground py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-headline font-black text-4xl md:text-6xl lg:text-7xl text-headline leading-tight tracking-tight">
            KAAL: REVOLUTIONIZING MILITARY TRAINING
          </h2>
          <h3 className="font-headline text-2xl md:text-3xl font-bold mt-2 text-subtext">
            AI-Powered Simulation System Transforms Defense Preparedness
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;