import React from 'react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "KAAL Introduction Video",
      url: "https://drive.google.com/file/d/11gNAnd5bxeQN1AkiIQwxcJBQZcCb_Qvy/view?usp=sharing"
    },
    {
      title: "KAAL Mock UI",
      url: "https://tactical-terrain-command-system-fck5.vercel.app"
    },
    {
      title: "KAAL Master Link (architecture and other important things)",
      url: "https://kaal-digital-dominance-web.vercel.app"
    },
    {
      title: "KAAL Intro Poster",
      url: "https://drive.google.com/file/d/1t7CBodtWnz2yUhIhyLst2ZFLTsxDK0Tz/view?usp=sharing"
    },
    {
      title: "KAAL Wiring Layout",
      url: "https://drive.google.com/file/d/1VKb_k6uDcX_BmARV0pe3YYyf0uRIivzP/view?usp=sharing"
    },
    {
      title: "KAAL Important Technical Data",
      url: "https://drive.google.com/file/d/1eOUWXI3dKX_ZO7QzIsE6yzNHuF9Nbpc3/view?usp=sharing"
    },
    {
      title: "KAAL Script Show Game",
      url: "https://kaal-ops-command-sim.vercel.app"
    },
    {
      title: "My Future Plan ASRSH (KAAL is just a starting of something big)",
      url: "https://future-smoky-gamma.vercel.app"
    }
  ];

  return (
    <section className="bg-secondary/50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-headline mb-4">
            Explore KAAL Resources
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-article-bg border border-border rounded-lg p-6 shadow-subtle hover:shadow-card transition-all duration-300 hover:scale-[1.02] hover:border-accent/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-body font-semibold text-lg text-headline group-hover:text-accent transition-colors duration-300 leading-tight">
                  {resource.title}
                </h3>
                <svg 
                  className="w-5 h-5 text-subtext group-hover:text-accent transition-colors duration-300 flex-shrink-0 ml-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-subtext mt-2 group-hover:text-muted-foreground transition-colors duration-300">
                Click to open in new tab
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;