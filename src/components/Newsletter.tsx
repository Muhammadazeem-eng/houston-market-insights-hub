
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
    <section className="py-12 bg-market-blue text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold mb-2">Stay Updated with Market Trends</h2>
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
              className="bg-white text-market-blue hover:bg-white/90"
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
