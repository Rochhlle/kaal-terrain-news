import React from 'react';
import Header from '../components/Header';
import ArticleSection from '../components/ArticleSection';
import ResourcesSection from '../components/ResourcesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ArticleSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
