import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left border-b border-primary-foreground pb-4 mb-4">
          <div>
            <h4 className="font-headline font-bold text-sm uppercase tracking-wider mb-2">THE MILITARY HERALD</h4>
            <p className="font-body text-xs">Defense Technology Division</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-wider">Established 1947</p>
            <p className="font-body text-xs">New Delhi, India</p>
          </div>
          <div>
            <p className="font-body text-xs uppercase tracking-wider">All Rights Reserved</p>
            <p className="font-body text-xs">© 2024 Military Herald Publications</p>
          </div>
        </div>
        <div className="text-center">
          <p className="font-body text-xs uppercase tracking-wider opacity-75">
            "Truth in Defense • Progress through Innovation"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;