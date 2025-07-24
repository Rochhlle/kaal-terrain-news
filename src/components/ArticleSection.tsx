import React from 'react';

const ArticleSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="bg-article-bg shadow-card rounded-lg p-8 md:p-12">
        <h2 className="font-headline font-bold text-3xl md:text-4xl text-headline mb-6 leading-tight">
          AI-Driven Innovation Transforms Military Training Infrastructure
        </h2>
        
        <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-8 first-letter:text-5xl first-letter:font-headline first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          KAAL represents a groundbreaking leap in military training technology, serving as an AI-driven terrain simulation system that revolutionizes traditional static war rooms. This cutting-edge platform creates immersive, dynamic training environments that prepare military personnel for real-world scenarios with unprecedented realism and effectiveness.
        </p>

        <div className="border-l-4 border-accent pl-6 mb-8">
          <h3 className="font-headline font-bold text-2xl md:text-3xl text-headline mb-6">
            Transformative Impact
          </h3>
          
          <ul className="space-y-4 font-body text-lg text-foreground">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3 mr-4"></span>
              <div>
                <strong className="text-headline">Improved Mission Success:</strong> The immersive experience enhances soldiers' ability to think and act under pressure, leading to a <strong className="text-accent">25% increase</strong> in mission success rates.
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3 mr-4"></span>
              <div>
                <strong className="text-headline">Faster Decision-Making:</strong> The multi-sensory feedback system accelerates decision-making processes, reducing reaction times by up to <strong className="text-accent">40%</strong>.
              </div>
            </li>
            
            <li className="flex items-start">
              <span className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3 mr-4"></span>
              <div>
                <strong className="text-headline">Significant Cost Savings:</strong> KAAL offers up to a <strong className="text-accent">60-70% reduction</strong> in infrastructure costs, resulting in savings of <strong className="text-accent">₹25–30 crore annually</strong>.
              </div>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default ArticleSection;