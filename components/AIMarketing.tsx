import React, { useState } from 'react';
import { Sparkles, Send, Copy, Check, FileText } from 'lucide-react';
import { generateMarketingCopy } from '../services/geminiService';

export const AIMarketing: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState<'caption' | 'email' | 'ad' | 'description'>('description');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setResult('');
    const text = await generateMarketingCopy(topic, type);
    setResult(text);
    setLoading(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-purple-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">مساعد ڤيلورا الذكي</h2>
        <p className="text-gray-500 mt-2">أنشئ محتوى تسويقي احترافي بلمسة زر باستخدام Gemini AI</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-50">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">نوع المحتوى</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-50 p-2 rounded-xl">
              <button 
                onClick={() => setType('description')}
                className={`flex items-center justify-center gap-2 py-2 px-3 text-xs md:text-sm rounded-lg transition-all ${type === 'description' ? 'bg-white shadow-md text-purple-700 font-bold ring-1 ring-purple-100' : 'text-gray-500 hover:bg-gray-200'}`}
              >
                <FileText className="w-4 h-4" />
                وصف منتج
              </button>
              <button 
                onClick={() => setType('caption')}
                className={`py-2 px-3 text-xs md:text-sm rounded-lg transition-all ${type === 'caption' ? 'bg-white shadow-md text-purple-700 font-bold ring-1 ring-purple-100' : 'text-gray-500 hover:bg-gray-200'}`}
              >
                منشور انستغرام
              </button>
              <button 
                onClick={() => setType('email')}
                className={`py-2 px-3 text-xs md:text-sm rounded-lg transition-all ${type === 'email' ? 'bg-white shadow-md text-purple-700 font-bold ring-1 ring-purple-100' : 'text-gray-500 hover:bg-gray-200'}`}
              >
                ايميل تسويقي
              </button>
              <button 
                onClick={() => setType('ad')}
                className={`py-2 px-3 text-xs md:text-sm rounded-lg transition-all ${type === 'ad' ? 'bg-white shadow-md text-purple-700 font-bold ring-1 ring-purple-100' : 'text-gray-500 hover:bg-gray-200'}`}
              >
                إعلان قصير
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {type === 'description' ? 'اسم المنتج أو تفاصيله' : 'عن ماذا تريد التحدث؟'}
            </label>
            <textarea
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={type === 'description' ? "مثال: طقم عقد وأقراط مرصع بالزركون، تصميم ناعم مطلي ذهب..." : "مثال: خصم 20% على مجموعة الصيف، أو وصول كوليكشن العيد..."}
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none h-32 resize-none bg-gray-50 focus:bg-white transition-colors"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !topic}
            className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white transition-all transform hover:scale-[1.01] active:scale-[0.99] ${loading || !topic ? 'bg-gray-300 cursor-not-allowed' : 'bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg hover:shadow-xl'}`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                جاري الكتابة...
              </span>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                توليد المحتوى
              </>
            )}
          </button>
        </div>

        {result && (
          <div className="mt-8 border-t border-gray-100 pt-6 animate-fade-in">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-500" />
                النتيجة المقترحة:
              </h3>
              <button 
                onClick={handleCopy} 
                className={`flex items-center gap-1 text-sm transition-colors ${copied ? 'text-green-600 font-bold' : 'text-gray-400 hover:text-purple-600'}`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> تم النسخ
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> نسخ النص
                  </>
                )}
              </button>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl text-gray-700 whitespace-pre-wrap leading-relaxed border border-gray-200 shadow-inner font-serif text-sm md:text-base">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};