import React from 'react';
import StickyNav from '../components/StickyNav';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import StatsSection from '../components/StatsSection';
import ArticleSection from '../components/ArticleSection';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StickyNav />
      <HeroSection />
      <Header />
      <div id="main-content">
        <StatsSection />
        <ArticleSection />
        <ResourcesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
