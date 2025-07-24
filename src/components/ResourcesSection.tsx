import React from 'react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "KAAL Introduction Video",
      url: "https://drive.google.com/file/d/11gNAnd5bxeQN1AkiIQwxcJBQZcCb_Qvy/view?usp=sharing",
      category: "DOCUMENTATION"
    },
    {
      title: "KAAL Mock UI",
      url: "https://tactical-terrain-command-system-fck5.vercel.app",
      category: "DEMONSTRATION"
    },
    {
      title: "KAAL Master Link (architecture and other important things)",
      url: "https://kaal-digital-dominance-web.vercel.app",
      category: "TECHNICAL"
    },
    {
      title: "KAAL Intro Poster",
      url: "https://drive.google.com/file/d/1t7CBodtWnz2yUhIhyLst2ZFLTsxDK0Tz/view?usp=sharing",
      category: "DOCUMENTATION"
    },
    {
      title: "KAAL Wiring Layout",
      url: "https://drive.google.com/file/d/1VKb_k6uDcX_BmARV0pe3YYyf0uRIivzP/view?usp=sharing",
      category: "TECHNICAL"
    },
    {
      title: "KAAL Important Technical Data",
      url: "https://drive.google.com/file/d/1eOUWXI3dKX_ZO7QzIsE6yzNHuF9Nbpc3/view?usp=sharing",
      category: "TECHNICAL"
    },
    {
      title: "KAAL Script Show Game",
      url: "https://kaal-ops-command-sim.vercel.app",
      category: "DEMONSTRATION"
    },
    {
      title: "My Future Plan ASRSH (KAAL is just a starting of something big)",
      url: "https://future-smoky-gamma.vercel.app",
      category: "FUTURE PLANS"
    }
  ];

  return (
    <section className="bg-secondary border-t-4 border-primary py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 border-b-2 border-primary pb-4">
          <h2 className="font-masthead font-black text-3xl md:text-4xl text-headline uppercase tracking-wider">
            KAAL RESOURCES & INTELLIGENCE
          </h2>
          <p className="font-body text-sm uppercase tracking-wider mt-2 text-subtext">
            Classified Documents • Technical Specifications • Strategic Analysis
          </p>
        </div>
        
        {/* Resources Grid - Newspaper Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <div key={index} className="border border-border bg-background p-4 hover:bg-muted transition-colors">
              <div className="text-xs font-body font-bold uppercase tracking-wider text-subtext mb-2 border-b border-border pb-1">
                {resource.category}
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <h3 className="font-headline font-bold text-sm leading-tight text-headline group-hover:text-primary transition-colors uppercase mb-2">
                  {resource.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="font-body text-xs text-subtext uppercase">CLICK TO ACCESS</span>
                  <span className="text-xs text-subtext">➤</span>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        {/* Bottom Notice */}
        <div className="mt-8 text-center border-t border-border pt-4">
          <p className="font-body text-xs uppercase tracking-wider text-subtext">
            All resources open in new window • For official use only • Defense Technology Division
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;