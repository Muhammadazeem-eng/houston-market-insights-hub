
import React from 'react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface ExpertComment {
  name: string;
  role: string;
  comment: string;
  date: string;
}

const expertComments: ExpertComment[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Economist",
    comment: "Houston's housing market is showing remarkable resilience despite national economic pressures. We expect continued growth through 2025, though at a more moderate pace than the previous two years.",
    date: "May 5, 2025"
  },
  {
    name: "Michael Torres",
    role: "Real Estate Market Analyst",
    comment: "Inventory constraints will remain the biggest challenge for Houston buyers in 2025. New construction is increasing but still lags behind demand in most desirable neighborhoods.",
    date: "May 3, 2025"
  },
  {
    name: "Lisa Chen",
    role: "Housing Policy Director",
    comment: "Recent zoning changes in Houston's inner loop should gradually increase housing density and help moderate price increases in these high-demand areas by late 2025.",
    date: "April 28, 2025"
  }
];

const Forecast: React.FC = () => {
  return (
    <section id="forecast" className="py-16 bg-market-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">2025 Market Forecast & Expert Commentary</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Get insights from industry experts on where the Houston housing market is heading in the coming months.
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          <Card className="p-8 bg-white shadow-md">
            <h3 className="text-2xl font-bold mb-6">Q2 2025 Forecast Highlights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-market-lightgray rounded-lg">
                <h4 className="font-medium text-gray-600">Median Price Forecast</h4>
                <p className="text-2xl font-bold text-market-blue mt-2">$440K - $455K</p>
                <p className="text-sm text-gray-500 mt-1">+3.5% expected by Q3</p>
              </div>
              <div className="text-center p-4 bg-market-lightgray rounded-lg">
                <h4 className="font-medium text-gray-600">Inventory Forecast</h4>
                <p className="text-2xl font-bold text-market-blue mt-2">1,100 - 1,300</p>
                <p className="text-sm text-gray-500 mt-1">Slight seasonal increase</p>
              </div>
              <div className="text-center p-4 bg-market-lightgray rounded-lg">
                <h4 className="font-medium text-gray-600">Mortgage Rate Forecast</h4>
                <p className="text-2xl font-bold text-market-blue mt-2">5.8% - 6.2%</p>
                <p className="text-sm text-gray-500 mt-1">Stabilizing after Q1 volatility</p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4 mt-8">Expert Insights</h3>
            <Separator className="mb-6" />
            
            <div className="space-y-8">
              {expertComments.map((comment, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-semibold text-lg">{comment.name}, <span className="font-normal text-gray-600">{comment.role}</span></h4>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700">{comment.comment}</p>
                  {index < expertComments.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Forecast;
