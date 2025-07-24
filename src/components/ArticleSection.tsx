import React from 'react';

const ArticleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* Newspaper Layout with Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Article - Left Column */}
        <article className="lg:col-span-8 border-r border-border pr-8">
          <div className="border-b-2 border-primary pb-2 mb-4">
            <span className="font-body text-sm font-bold uppercase tracking-wider">DEFENSE TECHNOLOGY</span>
          </div>
          
          <h2 className="font-headline font-black text-3xl md:text-4xl text-headline mb-2 leading-tight uppercase">
            Revolutionary AI System Replaces Traditional War Rooms
          </h2>
          
          <div className="text-sm text-subtext mb-4 font-body">
            By Defense Correspondent • Military Technology Division
          </div>
          
          <p className="font-body text-base leading-relaxed mb-4 text-justify first-letter:text-6xl first-letter:font-headline first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:leading-none">
            KAAL represents a groundbreaking advancement in military training infrastructure, introducing an AI-driven terrain simulation system that fundamentally transforms traditional static war room methodologies. This revolutionary platform establishes immersive, dynamic training environments that prepare military personnel for real-world operational scenarios with unprecedented authenticity and tactical effectiveness.
          </p>
          
          <p className="font-body text-base leading-relaxed mb-6 text-justify">
            The implementation of this cutting-edge technology marks a significant departure from conventional training protocols, offering military commanders and personnel access to sophisticated simulation capabilities that mirror actual battlefield conditions with remarkable precision.
          </p>

          {/* Impact Statistics Box */}
          <div className="border-2 border-primary bg-secondary p-6 mb-6">
            <h3 className="font-headline font-bold text-xl text-headline mb-4 uppercase text-center">
              OPERATIONAL IMPACT ASSESSMENT
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="border-r border-border pr-4">
                <div className="font-headline text-3xl font-black text-primary">25%</div>
                <div className="font-body text-sm uppercase">Mission Success Increase</div>
              </div>
              <div className="border-r border-border pr-4">
                <div className="font-headline text-3xl font-black text-primary">40%</div>
                <div className="font-body text-sm uppercase">Faster Decision Making</div>
              </div>
              <div>
                <div className="font-headline text-3xl font-black text-primary">₹30Cr</div>
                <div className="font-body text-sm uppercase">Annual Savings</div>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar - Right Column */}
        <aside className="lg:col-span-4">
          <div className="border-b-2 border-primary pb-2 mb-4">
            <span className="font-body text-sm font-bold uppercase tracking-wider">TECHNICAL BREAKDOWN</span>
          </div>
          
          <div className="space-y-4">
            <div className="border border-border p-4 bg-secondary">
              <h4 className="font-headline font-bold text-lg mb-2 uppercase">Key Advantages</h4>
              <ul className="space-y-2 font-body text-sm">
                <li className="flex items-start">
                  <span className="font-black mr-2">■</span>
                  <span><strong>Enhanced Tactical Readiness:</strong> Immersive simulation enhances soldiers' cognitive response under high-pressure scenarios</span>
                </li>
                <li className="flex items-start">
                  <span className="font-black mr-2">■</span>
                  <span><strong>Accelerated Training Cycles:</strong> Multi-sensory feedback systems reduce traditional training timeframes significantly</span>
                </li>
                <li className="flex items-start">
                  <span className="font-black mr-2">■</span>
                  <span><strong>Cost-Effective Infrastructure:</strong> Substantial reduction in physical training facility requirements</span>
                </li>
              </ul>
            </div>
            
            <div className="border border-border p-4 bg-muted">
              <h4 className="font-headline font-bold text-lg mb-2 uppercase">Implementation Timeline</h4>
              <div className="font-body text-sm space-y-1">
                <div><strong>Phase 1:</strong> System Integration (Q1 2024)</div>
                <div><strong>Phase 2:</strong> Personnel Training (Q2 2024)</div>
                <div><strong>Phase 3:</strong> Full Deployment (Q3 2024)</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ArticleSection;