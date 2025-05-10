
import React, { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  priceHistoryData,
  inventoryData, 
  salesVolumeData, 
  regionComparisonData 
} from '@/data/chartData';

const ChartSection: React.FC = () => {
  const priceChartRef = useRef<HTMLCanvasElement>(null);
  const inventoryChartRef = useRef<HTMLCanvasElement>(null);
  const salesChartRef = useRef<HTMLCanvasElement>(null);
  const regionChartRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    // Dynamically import Chart.js to avoid SSR issues
    const loadCharts = async () => {
      const Chart = await import('chart.js/auto');
      
      // Price History Chart
      if (priceChartRef.current) {
        const priceChart = new Chart.default(priceChartRef.current, {
          type: 'line',
          data: priceHistoryData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                mode: 'index',
                intersect: false
              },
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Houston Median Home Price Trends'
              }
            }
          }
        });
        
        return () => {
          priceChart.destroy();
        };
      }
    };
    
    loadCharts();
    
    // Inventory Chart - load when tab selected to improve performance
    const loadInventoryChart = async () => {
      const Chart = await import('chart.js/auto');
      
      if (inventoryChartRef.current) {
        const inventoryChart = new Chart.default(inventoryChartRef.current, {
          type: 'line',
          data: inventoryData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                mode: 'index',
                intersect: false
              },
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Housing Inventory Levels'
              }
            }
          }
        });
        
        return () => {
          inventoryChart.destroy();
        };
      }
    };
    
    // Sales Volume Chart
    const loadSalesChart = async () => {
      const Chart = await import('chart.js/auto');
      
      if (salesChartRef.current) {
        const salesChart = new Chart.default(salesChartRef.current, {
          type: 'line',
          data: salesVolumeData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                mode: 'index',
                intersect: false
              },
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Monthly Sales Volume'
              }
            }
          }
        });
        
        return () => {
          salesChart.destroy();
        };
      }
    };
    
    // Region Comparison Chart
    const loadRegionChart = async () => {
      const Chart = await import('chart.js/auto');
      
      if (regionChartRef.current) {
        const regionChart = new Chart.default(regionChartRef.current, {
          type: 'bar',
          data: regionComparisonData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Price Comparison by Houston Region'
              }
            }
          }
        });
        
        return () => {
          regionChart.destroy();
        };
      }
    };
  
    // Add event listeners for tab changes
    const tabsList = document.querySelectorAll('[role="tab"]');
    tabsList.forEach(tab => {
      tab.addEventListener('click', () => {
        const value = tab.getAttribute('data-value');
        if (value === 'inventory') {
          loadInventoryChart();
        } else if (value === 'sales') {
          loadSalesChart();
        } else if (value === 'regions') {
          loadRegionChart();
        }
      });
    });
    
  }, []);
  
  return (
    <section id="trends" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Market Trends & Analysis</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore interactive charts showing the latest Houston housing market trends. 
          Toggle between different metrics to understand market dynamics.
        </p>
        
        <Card className="p-6">
          <Tabs defaultValue="price">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="price" data-value="price">Price Trends</TabsTrigger>
              <TabsTrigger value="inventory" data-value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="sales" data-value="sales">Sales Volume</TabsTrigger>
              <TabsTrigger value="regions" data-value="regions">Region Comparison</TabsTrigger>
            </TabsList>
            <TabsContent value="price" className="chart-container">
              <canvas ref={priceChartRef}></canvas>
            </TabsContent>
            <TabsContent value="inventory" className="chart-container">
              <canvas ref={inventoryChartRef}></canvas>
            </TabsContent>
            <TabsContent value="sales" className="chart-container">
              <canvas ref={salesChartRef}></canvas>
            </TabsContent>
            <TabsContent value="regions" className="chart-container">
              <canvas ref={regionChartRef}></canvas>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </section>
  );
};

export default ChartSection;
