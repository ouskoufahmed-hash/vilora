import React, { useState } from 'react';
import { StrategyBoard } from './components/StrategyBoard';
import { StoreMockup } from './components/StoreMockup';
import { AIMarketing } from './components/AIMarketing';
import { AIStudio } from './components/AIStudio';
import { AIVideoStudio } from './components/AIVideoStudio';
import { Tab, BRAND_COLORS } from './types';
import { Layout, ShoppingBag, Sparkles, Camera, Film } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.STRATEGY);

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Floating Navigation Switcher */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-white shadow-2xl rounded-full p-2 border border-gray-200 flex gap-2 flex-wrap justify-center max-w-[95vw]">
        <button
          onClick={() => setActiveTab(Tab.STRATEGY)}
          className={`flex items-center gap-2 px-3 md:px-5 py-3 rounded-full transition-all duration-300 font-bold text-xs md:text-sm ${
            activeTab === Tab.STRATEGY 
              ? 'bg-[#1A2E35] text-white shadow-lg transform scale-105' 
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Layout className="w-4 h-4" />
          <span className="hidden sm:inline">الخطة</span>
        </button>
        
        <button
          onClick={() => setActiveTab(Tab.STORE_PREVIEW)}
          className={`flex items-center gap-2 px-3 md:px-5 py-3 rounded-full transition-all duration-300 font-bold text-xs md:text-sm ${
            activeTab === Tab.STORE_PREVIEW 
              ? 'bg-[#D4AF37] text-white shadow-lg transform scale-105' 
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span className="hidden sm:inline">المتجر</span>
        </button>

        <button
          onClick={() => setActiveTab(Tab.AI_STUDIO)}
          className={`flex items-center gap-2 px-3 md:px-5 py-3 rounded-full transition-all duration-300 font-bold text-xs md:text-sm ${
            activeTab === Tab.AI_STUDIO 
              ? 'bg-rose-500 text-white shadow-lg transform scale-105' 
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Camera className="w-4 h-4" />
          <span className="hidden sm:inline">الصور</span>
        </button>

        <button
          onClick={() => setActiveTab(Tab.AI_VIDEO)}
          className={`flex items-center gap-2 px-3 md:px-5 py-3 rounded-full transition-all duration-300 font-bold text-xs md:text-sm ${
            activeTab === Tab.AI_VIDEO 
              ? 'bg-teal-600 text-white shadow-lg transform scale-105' 
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Film className="w-4 h-4" />
          <span className="hidden sm:inline">الفيديو</span>
        </button>

        <button
          onClick={() => setActiveTab(Tab.AI_MARKETING)}
          className={`flex items-center gap-2 px-3 md:px-5 py-3 rounded-full transition-all duration-300 font-bold text-xs md:text-sm ${
            activeTab === Tab.AI_MARKETING 
              ? 'bg-purple-600 text-white shadow-lg transform scale-105' 
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">المسوق</span>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="pb-32">
        {activeTab === Tab.STRATEGY && (
          <div className="animate-fade-in pt-10">
            <StrategyBoard />
          </div>
        )}
        
        {activeTab === Tab.STORE_PREVIEW && (
          <div className="animate-fade-in">
            <StoreMockup />
          </div>
        )}

        {activeTab === Tab.AI_STUDIO && (
          <div className="animate-fade-in pt-10">
            <AIStudio />
          </div>
        )}

        {activeTab === Tab.AI_VIDEO && (
          <div className="animate-fade-in pt-10">
            <AIVideoStudio />
          </div>
        )}

        {activeTab === Tab.AI_MARKETING && (
          <div className="animate-fade-in pt-10">
            <AIMarketing />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;