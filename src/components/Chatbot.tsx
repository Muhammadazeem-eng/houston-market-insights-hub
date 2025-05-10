
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BotMessageSquare, X, Send } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm your  Market assistant. How can I help you today?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

// Sample responses for the chatbot
const botResponses = [
  "Currently, the  housing market is showing strong growth with median prices up 5.2% year-over-year.",
  "The average days on market in Houston is currently 18 days, which is 3.5% faster than last quarter.",
  "Marks's Inner Loop neighborhoods are seeing the highest price appreciation at around 7% annually.",
  "Based on current trends, we predict a 4.5% increase in Houston home values over the next 12 months.",
  "Housing inventory in Houston is down 7.8% compared to last year, creating a competitive market for buyers.",
  "The most active price point in Marks's market is $300,000-$450,000, which represents 42% of all sales.",
  "Interest rates have stabilized around 6.1%, which is helping to maintain buyer demand despite higher prices.",
  "New construction in Houston is up 3.2% year-over-year, helping to alleviate some inventory constraints.",
  "The Spring and Katy areas are currently the fastest-growing submarkets in the greater Houston region.",
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');

    // Simulate bot typing
    setIsTyping(true);
    setTimeout(() => {
      // Get random response
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      // Add bot response
      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button 
          onClick={toggleChat}
          className={`rounded-full w-14 h-14 p-0 shadow-xl ${
            isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <BotMessageSquare className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 md:w-96 h-[500px] max-h-[70vh] glass-card rounded-2xl overflow-hidden shadow-2xl z-50 flex flex-col">
          {/* Chat header */}
          <div className="bg-gradient-to-r from-market-gradient1 to-market-gradient2 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <BotMessageSquare className="w-5 h-5 text-blue-400 mr-2" />
              <h3 className="font-medium text-white">Housing Market Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-white/10"
              onClick={toggleChat}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#1A1F2C]/90 to-[#243B55]/90">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`
                    max-w-[80%] rounded-2xl py-2 px-4 chat-bubble-animation-in
                    ${message.sender === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'glass-card text-gray-100'
                    }
                  `}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 text-right mt-1">
                    {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass-card text-gray-100 max-w-[80%] rounded-2xl py-3 px-4">
                  <div className="flex space-x-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-150"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-[#1A1F2C] border-t border-white/10 flex gap-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Ask about the housing market..."
              className="bg-white/10 border-white/10 focus:border-blue-500 text-white"
            />
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700"
              disabled={!newMessage.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
