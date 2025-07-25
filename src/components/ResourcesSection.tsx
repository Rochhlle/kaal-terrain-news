import React from 'react';
import { Play, Monitor, Building2, Image, Zap, FileText, Gamepad2, Rocket } from 'lucide-react';

const ResourcesSection = () => {
  const resources = [
    {
      title: "KAAL Introduction Video",
      url: "https://drive.google.com/file/d/11gNAnd5bxeQN1AkiIQwxcJBQZcCb_Qvy/view?usp=sharing",
      category: "VIDEO CONTENT",
      icon: Play,
      description: "Comprehensive overview of KAAL capabilities"
    },
    {
      title: "KAAL Mock UI",
      url: "https://tactical-terrain-command-system-fck5.vercel.app",
      category: "INTERACTIVE DEMO",
      icon: Monitor,
      description: "Live demonstration interface"
    },
    {
      title: "KAAL Master Architecture",
      url: "https://kaal-digital-dominance-web.vercel.app",
      category: "TECHNICAL SPECS",
      icon: Building2,
      description: "Complete system architecture and documentation"
    },
    {
      title: "KAAL Intro Poster",
      url: "https://drive.google.com/file/d/1t7CBodtWnz2yUhIhyLst2ZFLTsxDK0Tz/view?usp=sharing",
      category: "VISUAL ASSETS",
      icon: Image,
      description: "Official promotional materials"
    },
    {
      title: "KAAL Wiring Layout",
      url: "https://drive.google.com/file/d/1VKb_k6uDcX_BmARV0pe3YYyf0uRIivzP/view?usp=sharing",
      category: "TECHNICAL SPECS",
      icon: Zap,
      description: "System wiring and connections"
    },
    {
      title: "Technical Data Package",
      url: "https://drive.google.com/file/d/1eOUWXI3dKX_ZO7QzIsE6yzNHuF9Nbpc3/view?usp=sharing",
      category: "DOCUMENTATION",
      icon: FileText,
      description: "Comprehensive technical specifications"
    },
    {
      title: "KAAL Script Show Game",
      url: "https://kaal-ops-command-sim.vercel.app",
      category: "SIMULATION",
      icon: Gamepad2,
      description: "Interactive training simulation"
    },
    {
      title: "Future Vision: ASRSH",
      url: "https://future-smoky-gamma.vercel.app",
      category: "ROADMAP",
      icon: Rocket,
      description: "Next-generation defense initiatives"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h-2zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="font-masthead font-black text-4xl md:text-5xl text-headline mb-4 animate-fade-in">
              KAAL Resource Intelligence
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent via-tech-accent to-accent mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
          </div>
          <p className="font-body text-lg text-subtext mt-6 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            Access comprehensive documentation, technical specifications, and interactive demonstrations of the KAAL military training simulation system.
          </p>
        </div>
        
        {/* Enhanced Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div 
                key={index} 
                className="group bg-article-bg rounded-xl shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105 border border-border/50 hover:border-accent/50 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${0.9 + index * 0.1}s` }}
              >
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-tech-accent bg-tech-accent/10 px-2 py-1 rounded-full">
                      {resource.category}
                    </span>
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent 
                        size={20} 
                        className="text-accent group-hover:text-accent group-hover:scale-110 transition-all duration-300" 
                      />
                    </div>
                  </div>
                  
                  {/* Resource Content */}
                  <h3 className="font-headline font-bold text-lg text-headline mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
                    {resource.title}
                  </h3>
                  
                  <p className="font-body text-sm text-subtext mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  {/* Action Button */}
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-body font-medium text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-button group-hover:scale-105"
                  >
                    <span>Access Resource</span>
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                {/* Hover Effect Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-tech-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default ResourcesSection;
