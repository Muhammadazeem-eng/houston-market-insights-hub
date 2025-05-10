
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would connect to a newsletter service
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail('');
    } else {
      toast.error("Please enter a valid email address.");
    }
  };
  
  return (
    <section className="py-12 bg-gradient-to-r from-market-gradient1 to-market-gradient2 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-2 gradient-text">Stay Updated with Market Trends</h2>
            <p className="text-white/90">
              Subscribe to our newsletter for the latest Houston housing market insights and forecasts.
            </p>
          </div>
          <form 
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col sm:flex-row gap-2"
          >
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/10 placeholder:text-white/60 text-white border-white/20 flex-grow"
            />
            <Button 
              type="submit" 
              className="bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-white/25"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
