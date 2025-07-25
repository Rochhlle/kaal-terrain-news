import React from 'react';

const ArticleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Article - Left Column (8/12) */}
        <article className="lg:col-span-8 bg-article-bg rounded-xl shadow-card p-8 md:p-12 animate-fade-in">
          <div className="border-b-2 border-accent pb-3 mb-6">
            <span className="font-body text-sm font-semibold uppercase tracking-wider text-tech-accent">DEFENSE INNOVATION</span>
          </div>
          
          <h2 className="font-headline font-black text-4xl md:text-5xl text-headline mb-4 leading-tight">
            Revolutionary AI System Transforms Military Infrastructure
          </h2>
          
          <div className="text-sm text-subtext mb-8 font-body flex items-center space-x-4">
            <span>By Defense Technology Correspondent</span>
            <span>•</span>
            <span>Military Innovation Division</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="font-body text-lg leading-relaxed mb-6 text-justify first-letter:text-7xl first-letter:font-headline first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:text-accent">
              KAAL represents a paradigm shift in military training infrastructure, introducing an AI-driven terrain simulation system that fundamentally revolutionizes traditional static war room methodologies. This groundbreaking platform establishes immersive, dynamic training environments that prepare military personnel for real-world operational scenarios with unprecedented authenticity and tactical effectiveness.
            </p>
            
            <p className="font-body text-lg leading-relaxed mb-8 text-justify">
              The implementation of this cutting-edge technology marks a significant departure from conventional training protocols, offering military commanders and personnel access to sophisticated simulation capabilities that mirror actual battlefield conditions with remarkable precision and strategic depth.
            </p>

            {/* Enhanced Impact Statistics */}
            <div className="bg-gradient-to-br from-secondary to-muted rounded-xl p-8 mb-8 border border-border shadow-elegant animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-headline font-bold text-2xl text-headline mb-6 text-center">
                Operational Impact Assessment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-article-bg rounded-lg shadow-button hover:shadow-hover transition-all duration-300 hover:scale-105">
                  <div className="font-headline text-4xl font-black text-primary mb-2">25%</div>
                  <div className="font-body text-sm font-medium text-subtext uppercase tracking-wide">Mission Success Increase</div>
                  <div className="w-16 h-1 bg-accent mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center p-4 bg-article-bg rounded-lg shadow-button hover:shadow-hover transition-all duration-300 hover:scale-105">
                  <div className="font-headline text-4xl font-black text-tech-accent mb-2">40%</div>
                  <div className="font-body text-sm font-medium text-subtext uppercase tracking-wide">Faster Decision Making</div>
                  <div className="w-16 h-1 bg-tech-accent mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="text-center p-4 bg-article-bg rounded-lg shadow-button hover:shadow-hover transition-all duration-300 hover:scale-105">
                  <div className="font-headline text-4xl font-black text-destructive mb-2">₹30Cr</div>
                  <div className="font-body text-sm font-medium text-subtext uppercase tracking-wide">Annual Cost Savings</div>
                  <div className="w-16 h-1 bg-destructive mx-auto mt-2 rounded-full"></div>
                </div>
              </div>
            </div>

            <p className="font-body text-lg leading-relaxed text-justify">
              This revolutionary approach to military preparedness not only enhances operational readiness but also demonstrates a commitment to leveraging advanced technology for national defense. The system's multi-sensory feedback mechanisms and real-time adaptation capabilities ensure that training scenarios remain relevant and challenging.
            </p>
          </div>
        </article>

        {/* Enhanced Sidebar - Right Column (4/12) */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Key Features Box */}
          <div className="bg-article-bg rounded-xl shadow-card p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="border-b-2 border-tech-accent pb-3 mb-6">
              <span className="font-body text-sm font-semibold uppercase tracking-wider text-tech-accent">Technical Advantages</span>
            </div>
            
            <div className="space-y-4">
              <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-body font-semibold text-headline mb-1">Enhanced Tactical Readiness</h4>
                  <p className="font-body text-sm text-subtext leading-relaxed">Immersive simulation enhances cognitive response under high-pressure scenarios</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-tech-accent rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-body font-semibold text-headline mb-1">Accelerated Training Cycles</h4>
                  <p className="font-body text-sm text-subtext leading-relaxed">Multi-sensory feedback reduces traditional training timeframes significantly</p>
                </div>
              </div>
              
              <div className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors duration-300">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                <div>
                  <h4 className="font-body font-semibold text-headline mb-1">Cost-Effective Infrastructure</h4>
                  <p className="font-body text-sm text-subtext leading-relaxed">Substantial reduction in physical training facility requirements</p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="bg-gradient-to-br from-primary/5 to-tech-accent/5 rounded-xl p-6 border border-border animate-slide-in-right" style={{ animationDelay: '0.9s' }}>
            <h4 className="font-headline font-bold text-xl text-headline mb-4">Implementation Roadmap</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full"></div>
                <div className="font-body text-sm"><strong>Q1 2024:</strong> System Integration & Testing</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-tech-accent rounded-full"></div>
                <div className="font-body text-sm"><strong>Q2 2024:</strong> Personnel Training & Certification</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="font-body text-sm"><strong>Q3 2024:</strong> Full Operational Deployment</div>
              </div>
            </div>
          </div>

          {/* Quote Box */}
          <div className="bg-article-bg rounded-xl shadow-elegant p-6 border-l-4 border-accent animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <blockquote className="font-elegant text-lg italic text-headline mb-4 leading-relaxed">
              "This revolutionary training platform will redefine how our forces prepare for modern warfare challenges."
            </blockquote>
            <cite className="font-body text-sm text-subtext">— Founder's Words</cite>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ArticleSection;
