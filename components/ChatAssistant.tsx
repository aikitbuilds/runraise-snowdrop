import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2 } from 'lucide-react';
import { ChatMessage, TrainingLog, Pledge } from '../types';
import { generateSponsorResponse } from '../services/geminiService';

interface ChatAssistantProps {
  logs: TrainingLog[];
  pledges: Pledge[];
}

const ChatAssistant: React.FC<ChatAssistantProps> = ({ logs, pledges }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Cong's AI assistant. Ask me about his training, the Snowdrop 55 race, or how to sponsor!", timestamp: Date.now() }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateSponsorResponse(input, logs, pledges);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText, timestamp: Date.now() }]);
    setIsLoading(false);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-105 z-40 flex items-center gap-2"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-medium">Ask Athlete AI</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm bg-white rounded-2xl shadow-2xl z-50 border border-slate-200 overflow-hidden flex flex-col max-h-[500px]">
      {/* Header */}
      <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <h3 className="font-semibold">Cong's AI Assistant</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1 rounded">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-lg p-3 text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 p-3 rounded-lg rounded-bl-none shadow-sm">
              <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Type your question..."
          className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;
