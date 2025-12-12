import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketingCopy = async (topic: string, type: 'caption' | 'email' | 'ad' | 'description'): Promise<string> => {
  if (!apiKey) {
    return "الرجاء إدخال مفتاح API الخاص بـ Gemini لتفعيل هذه الميزة.";
  }

  let prompt = '';

  if (type === 'description') {
    prompt = `
      أنت خبير كتابة محتوى (Copywriter) لمتجر إكسسوارات نسائية فاخر "ڤيلورا" (Velora).
      
      المهمة: اكتب وصف منتج احترافي وشامل للمنتج التالي: "${topic}".
      
      يجب أن يكون الرد منسقاً ويحتوي على الأقسام التالية بوضوح:
      1. **مقدمة تسويقية قصيرة**: (أسلوب عاطفي وجذاب).
      2. **مميزات المنتج**: (قائمة نقطية لأبرز الجماليات).
      3. **مواد الصنع والجودة**: (الطلاء، المعدن، الأحجار، المتانة).
      4. **مناسب لمن؟**: (الاستخدام اليومي، المناسبات، الهدايا).
      5. **لماذا تقتنيه الآن؟**: (سبب مقنع للشراء الفوري).
      6. **ضمان وخدمات**: (أذكر: ضمان ذهبي، دفع عند الاستلام، توصيل سريع).
      7. **عنوان SEO جذاب + كلمات مفتاحية**: (عنوان يبحث عنه الناس + هاشتاقات).

      الأسلوب: فخم، مقنع، ويخاطب مشاعر الأنثى. استخدم الإيموجي بشكل أنيق.
    `;
  } else {
    prompt = `
      أنت خبير تسويق لعلامة تجارية فاخرة للإكسسوارات النسائية تسمى "ڤيلورا" (Velora).
      
      الهوية البصرية: ألوان ذهبية وعميقة، طابع ملكي، فخم، وحديث.
      الجمهور المستهدف: نساء مهتمات بالموضة، العمر 18-35، يبحثن عن التميز.
      
      المهمة: اكتب ${type === 'caption' ? 'منشور انستغرام جذاب' : type === 'email' ? 'نص بريد إلكتروني ترويجي' : 'إعلان قصير وقوي'} 
      عن الموضوع التالي: "${topic}".
      
      القيود:
      - استخدم لغة عربية فصحى ممزوجة بلمسة عصرية.
      - استخدم الإيموجي المناسب (ألماس، بريق).
      - أضف نداء للشراء (CTA) في النهاية.
      - لا تضع مقدمات، ادخل في النص مباشرة.
    `;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "عذراً، لم أتمكن من إنشاء النص حالياً.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "حدث خطأ أثناء الاتصال بالذكاء الاصطناعي.";
  }
};

export const generateProductImage = async (description: string, style: 'studio' | 'lifestyle' | 'flatlay'): Promise<string | null> => {
  if (!apiKey) return null;

  let prompt = "";
  switch(style) {
    case 'studio':
      prompt = `High quality professional product photography of ${description}. Studio lighting, soft uniform beige background, light shadows and reflections, sharp focus on details, 8k resolution, luxury aesthetic, minimalist.`;
      break;
    case 'lifestyle':
      prompt = `High quality lifestyle photography of an elegant woman wearing ${description}. Face partially hidden or out of focus, focus on the jewelry, luxury fashion style, natural soft lighting, beige tones, 8k resolution.`;
      break;
    case 'flatlay':
      prompt = `High quality flat lay photography of ${description} arranged on a white marble background. Elegant composition, soft natural lighting, sharp details, luxury aesthetic, 8k resolution, top down view.`;
      break;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }]
      }
    });

    if (response.candidates && response.candidates.length > 0 && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini Image Error:", error);
    return null;
  }
};

export const generateProductVideo = async (description: string, scenario: 'unboxing' | 'ring_hand' | 'necklace_360' | 'lifestyle'): Promise<string | null> => {
  if (!apiKey) return null;

  let prompt = "";
  switch (scenario) {
    case 'unboxing':
      prompt = `Cinematic slow motion top-down shot. A pair of elegant female hands with manicured nails slowly opening a luxury white leather jewelry box. Inside reveals ${description}. The jewelry sparkles under studio soft box lighting. Clean beige background. High resolution, 4k, photorealistic, commercial aesthetic.`;
      break;
    case 'ring_hand':
      prompt = `Close-up macro video shot of a woman's hand wearing ${description}. The hand moves gracefully, fingers extended, catching the light. Professional studio lighting, soft focus background in warm beige tones. Luxury jewelry advertisement style. 4k, highly detailed.`;
      break;
    case 'necklace_360':
      prompt = `Studio product showcase video. ${description} displayed on a black velvet necklace bust stand. The camera slowly orbits around the product giving a 360 degree view effect. Sharp focus on the jewelry details, diamonds sparkling. Dark moody background, dramatic rim lighting. 4k, cinematic.`;
      break;
    case 'lifestyle':
      prompt = `Cinematic lifestyle fashion video. A beautiful elegant woman wearing ${description} laughing at a high-end dinner party. Soft candle light, bokeh background. She touches the jewelry gently. High end luxury vibe, golden hour lighting. 4k.`;
      break;
  }

  try {
    let operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    // Polling for video completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      operation = await ai.operations.getVideosOperation({operation: operation});
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (videoUri) {
      // Append API key to fetch the content
      return `${videoUri}&key=${apiKey}`;
    }
    return null;

  } catch (error) {
    console.error("Gemini Video Error:", error);
    return null;
  }
};