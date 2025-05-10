
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MarketStats from '@/components/MarketStats';
import ChartSection from '@/components/ChartSection';
import Forecast from '@/components/Forecast';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-market-dark text-foreground">
      <Header />
      <Hero />
      <MarketStats />
      <ChartSection />
      <Forecast />
      <Newsletter />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
