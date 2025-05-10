
import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change,
  trend = 'neutral',
  description
}) => {
  return (
    <Card className="stat-card glass-card hover-card-animation">
      <h3 className="card-heading">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-gray-100">{value}</span>
        {change && (
          <div className={`flex items-center ${
            trend === 'up' ? 'text-green-400' : 
            trend === 'down' ? 'text-red-400' : 
            'text-gray-400'
          }`}>
            {trend === 'up' && <ArrowUp className="h-4 w-4 mr-1" />}
            {trend === 'down' && <ArrowDown className="h-4 w-4 mr-1" />}
            <span className="text-sm font-medium">{change}%</span>
          </div>
        )}
      </div>
      {description && <p className="text-sm text-gray-300 mt-2">{description}</p>}
    </Card>
  );
};

export default StatsCard;
