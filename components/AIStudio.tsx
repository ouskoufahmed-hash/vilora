import React, { useState } from 'react';
import { Camera, Image as ImageIcon, User, Layers, Download, RefreshCw, Sparkles } from 'lucide-react';
import { generateProductImage } from '../services/geminiService';

export const AIStudio: React.FC = () => {
  const [description, setDescription] = useState('');
  const [style, setStyle] = useState<'studio' | 'lifestyle' | 'flatlay'>('studio');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setImage(null);
    const result = await generateProductImage(description, style);
    setImage(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A2E35] text-white rounded-full mb-4 shadow-lg">
          <Camera className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 font-serif">استوديو ڤيلورا الرقمي</h2>
        <p className="text-gray-500 mt-2">حوّلي أفكارك إلى صور احترافية للمتجر باستخدام الذكاء الاصطناعي</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-gray-700 mb-3">نمط التصوير</label>
            <div className="space-y-3">
              <button
                onClick={() => setStyle('studio')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${style === 'studio' ? 'border-[#D4AF37] bg-yellow-50 text-[#1A2E35]' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-full ${style === 'studio' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Camera className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">تصوير منتجات (Studio)</div>
                  <div className="text-xs opacity-70">خلفية بيج ناعمة، إضاءة استوديو</div>
                </div>
              </button>

              <button
                onClick={() => setStyle('lifestyle')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${style === 'lifestyle' ? 'border-[#D4AF37] bg-yellow-50 text-[#1A2E35]' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-full ${style === 'lifestyle' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <User className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">لايف ستايل (Model)</div>
                  <div className="text-xs opacity-70">فتاة أنيقة، تركيز على المنتج</div>
                </div>
              </button>

              <button
                onClick={() => setStyle('flatlay')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${style === 'flatlay' ? 'border-[#D4AF37] bg-yellow-50 text-[#1A2E35]' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-full ${style === 'flatlay' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">مسطح (Flat Lay)</div>
                  <div className="text-xs opacity-70">خلفية رخامية، ترتيب فني</div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-gray-700 mb-3">وصف القطعة</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="مثال: عقد ذهبي ناعم مع تعليقة لؤلؤ صغيرة..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none h-32 resize-none text-sm"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !description}
              className={`w-full mt-4 py-3 rounded-lg flex items-center justify-center gap-2 font-bold text-white transition-all ${loading || !description ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#1A2E35] hover:bg-[#122126] shadow-md'}`}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  جاري المعالجة...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  توليد الصورة
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-full min-h-[500px] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {image ? (
              <div className="relative w-full h-full flex flex-col items-center">
                <img src={image} alt="Generated Product" className="max-h-[500px] w-auto object-contain rounded-lg shadow-sm" />
                <a 
                  href={image} 
                  download={`velora-${style}-${Date.now()}.png`}
                  className="mt-4 flex items-center gap-2 bg-[#D4AF37] text-white px-6 py-2 rounded-full hover:bg-[#b8952b] transition-colors shadow-md font-bold"
                >
                  <Download className="w-4 h-4" />
                  تحميل الصورة عالية الدقة
                </a>
              </div>
            ) : (
              <div className="text-center text-gray-400">
                {loading ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                    <p className="animate-pulse">جاري تحضير الاستوديو وضبط الإضاءة...</p>
                  </div>
                ) : (
                  <>
                    <ImageIcon className="w-20 h-20 mx-auto mb-4 opacity-20" />
                    <p>أدخلي وصف المنتج واختاري النمط لتبدئي</p>
                  </>
                )}
              </div>
            )}
            
            {/* Aesthetic Decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4EBE8] rounded-bl-full -z-0 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D4AF37] rounded-tr-full -z-0 opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};