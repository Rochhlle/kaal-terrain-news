import React from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "25%",
      label: "Mission Success Increase",
      description: "Enhanced tactical readiness through immersive simulation",
      color: "brand-gold"
    },
    {
      icon: Clock,
      value: "40%",
      label: "Faster Decision Making",
      description: "Multi-sensory feedback accelerates cognitive response",
      color: "brand-teal"
    },
    {
      icon: DollarSign,
      value: "₹30Cr",
      label: "Annual Cost Savings",
      description: "Reduced infrastructure and training expenses",
      color: "destructive"
    },
    {
      icon: Users,
      value: "500+",
      label: "Personnel Trained",
      description: "Military experts certified on KAAL systems",
      color: "brand-navy"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-masthead font-black text-4xl md:text-5xl text-headline mb-4 animate-fade-in">
            Operational Impact Assessment
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-gold via-brand-teal to-brand-gold mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
          <p className="font-body text-lg text-subtext mt-6 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
            Measurable results from KAAL implementation across defense training facilities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="group bg-article-bg rounded-2xl p-8 text-center shadow-card hover:shadow-hover transition-all duration-500 hover:scale-105 border border-border/50 animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${0.9 + index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-muted/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/10 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <IconComponent className={`w-8 h-8 text-${stat.color}`} />
                </div>

                {/* Value */}
                <div className={`font-masthead font-black text-4xl md:text-5xl text-${stat.color} mb-3 group-hover:scale-105 transition-transform duration-300 relative z-10`}>
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="font-headline font-bold text-lg text-headline mb-3 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-subtext leading-relaxed relative z-10">
                  {stat.description}
                </p>

                {/* Hover Accent Line */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-navy to-brand-teal text-white rounded-xl font-body font-medium hover:shadow-hover transition-all duration-300 hover:scale-105">
            <span>Request Detailed Performance Analytics</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;