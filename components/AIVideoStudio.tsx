import React, { useState } from 'react';
import { Video, Gift, Hand, Rotate3d, PartyPopper, Play, RefreshCw, Film } from 'lucide-react';
import { generateProductVideo } from '../services/geminiService';

export const AIVideoStudio: React.FC = () => {
  const [description, setDescription] = useState('');
  const [scenario, setScenario] = useState<'unboxing' | 'ring_hand' | 'necklace_360' | 'lifestyle'>('unboxing');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setVideoUrl(null);
    const result = await generateProductVideo(description, scenario);
    setVideoUrl(result);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A2E35] text-white rounded-full mb-4 shadow-lg">
          <Film className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 font-serif">صانع الفيديو السينمائي</h2>
        <p className="text-gray-500 mt-2">أنشئي مقاطع فيديو ترويجية مذهلة لمنتجاتك باستخدام Veo AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controls */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-gray-700 mb-3">سيناريو الفيديو</label>
            <div className="space-y-3">
              <button
                onClick={() => setScenario('unboxing')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${scenario === 'unboxing' ? 'border-[#D4AF37] bg-yellow-50 text-[#1A2E35]' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-full ${scenario === 'unboxing' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Gift className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">فتح العلبة (Unboxing)</div>
                  <div className="text-xs opacity-70">تشويق، فتح بطيء، فخامة</div>
                </div>
              </button>

              <button
                onClick={() => setScenario('ring_hand')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${scenario === 'ring_hand' ? 'border-[#D4AF37] bg-yellow-50 text-[#1A2E35]' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-full ${scenario === 'ring_hand' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Hand className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">عرض على اليد</div>
                  <div className="text-xs opacity-70">لقطة قريبة، حركة ناعمة</div>
                </div>
              </button>

              <button
                onClick={() => setScenario('necklace_360')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${scenario === 'necklace_360' ? 'border-[#D4AF37] bg-yellow-50 text-[#1A2E35]' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-full ${scenario === 'necklace_360' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <Rotate3d className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">دوران 360°</div>
                  <div className="text-xs opacity-70">استعراض كامل التفاصيل</div>
                </div>
              </button>

              <button
                onClick={() => setScenario('lifestyle')}
                className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all ${scenario === 'lifestyle' ? 'border-[#D4AF37] bg-yellow-50 text-[#1A2E35]' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className={`p-2 rounded-full ${scenario === 'lifestyle' ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-500'}`}>
                  <PartyPopper className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="font-bold text-sm">لايف ستايل (Lifestyle)</div>
                  <div className="text-xs opacity-70">أجواء مناسبات، مودل أنيقة</div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <label className="block text-sm font-bold text-gray-700 mb-3">وصف القطعة</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="مثال: خاتم سوليتير ماسي كلاسيكي..."
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
                  جاري المعالجة (قد يستغرق دقيقة)...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  إنشاء الفيديو
                </>
              )}
            </button>
          </div>
        </div>

        {/* Preview Area */}
        <div className="lg:col-span-2">
          <div className="bg-black rounded-xl shadow-2xl overflow-hidden h-full min-h-[500px] flex flex-col items-center justify-center relative border-4 border-gray-900">
            {videoUrl ? (
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-black">
                <video 
                  src={videoUrl} 
                  controls 
                  autoPlay 
                  loop 
                  className="max-h-[500px] w-full object-contain"
                />
              </div>
            ) : (
              <div className="text-center text-gray-500 p-8">
                {loading ? (
                  <div className="flex flex-col items-center gap-6">
                    <div className="relative w-20 h-20">
                       <div className="absolute inset-0 border-4 border-[#D4AF37]/30 rounded-full"></div>
                       <div className="absolute inset-0 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
                       <Film className="absolute inset-0 m-auto text-[#D4AF37] w-8 h-8 animate-pulse" />
                    </div>
                    <div className="space-y-2">
                       <p className="text-white font-bold animate-pulse">جاري إخراج المشهد السينمائي...</p>
                       <p className="text-xs text-gray-400">نموذج Veo يقوم بمعالجة الفيديو الآن</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="w-24 h-24 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-6">
                       <Video className="w-10 h-10 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-300 mb-2">مساحة العرض</h3>
                    <p className="text-gray-500 max-w-sm mx-auto">
                      اختاري السيناريو المناسب، صفي المنتج، ودعي الذكاء الاصطناعي يخرج لك فيديو احترافي في ثوانٍ.
                    </p>
                  </>
                )}
              </div>
            )}
            
            {/* Cinematic Overlays */}
            {!videoUrl && !loading && (
               <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};