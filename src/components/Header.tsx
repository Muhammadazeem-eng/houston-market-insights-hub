
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-market-dark/90 backdrop-blur-md shadow-md py-4 sticky top-0 z-40">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold gradient-text">Mark Demo Site</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
          <a href="#market-stats" className="text-gray-300 hover:text-blue-400 transition-colors">Market Stats</a>
          <a href="#trends" className="text-gray-300 hover:text-blue-400 transition-colors">Trends</a>
          <a href="#forecast" className="text-gray-300 hover:text-blue-400 transition-colors">Forecast</a>
        </nav>
        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">Contact Us</Button>
        </div>
        <button className="md:hidden text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
