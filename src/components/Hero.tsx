
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-market-blue to-market-lightblue text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Houston Housing Market Trends & Insights – 2025
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Stay ahead of market shifts with real-time analytics and forecasts. Make informed decisions with our comprehensive market analysis.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-market-blue hover:bg-gray-100">
              Download Full Report
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
