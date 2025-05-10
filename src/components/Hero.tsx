
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-market-gradient1 to-market-gradient2 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-float"></div>
        <div className="absolute top-[30%] right-[15%] w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 gradient-text">
            real estate market trends & insights
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 text-gray-200">
            Stay ahead of market shifts with real-time analytics and forecasts. Make informed decisions with our comprehensive market analysis.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
