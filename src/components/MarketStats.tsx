
import React from 'react';
import StatsCard from './StatsCard';

const MarketStats: React.FC = () => {
  return (
    <section id="market-stats" className="py-16 bg-market-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12 gradient-text">Market Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard 
            title="Median Home Price" 
            value="$425,500" 
            change={5.2} 
            trend="up"
            description="Year-over-year increase from 2024"
          />
          <StatsCard 
            title="Days on Market" 
            value="18" 
            change={3.5} 
            trend="down"
            description="Homes are selling faster than last quarter"
          />
          <StatsCard 
            title="Available Inventory" 
            value="1,246" 
            change={7.8} 
            trend="down"
            description="Active listings compared to last year"
          />
          <StatsCard 
            title="Sales-to-List Ratio" 
            value="98.2%" 
            change={0.7} 
            trend="up"
            description="Sellers getting closer to asking price"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketStats;
