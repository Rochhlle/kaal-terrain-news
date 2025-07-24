import React from 'react';

const Header = () => {
  return (
    <header className="bg-article-bg border-b border-border shadow-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="font-headline font-black text-4xl md:text-5xl lg:text-6xl text-headline tracking-tight leading-tight">
            KAAL: Revolutionizing Military Training with AI-Powered Simulation
          </h1>
          <div className="mt-4 w-32 h-1 bg-accent mx-auto"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;