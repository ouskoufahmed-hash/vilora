import React from 'react';
import { Palette, Layers, Users, ShoppingBag, MessageSquare, Gem, Target, Calculator, CreditCard, Smartphone, Video, Calendar, Percent } from 'lucide-react';
import { BRAND_COLORS } from '../types';

export const StrategyBoard: React.FC = () => {
  const sections = [
    {
      title: "1. الهوية التجارية والبصرية",
      icon: <Palette className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold font-serif text-gray-900">Velora | ڤيلورا</h3>
              <p className="text-sm text-gray-500">مشتق من "Velvet" (المخمل) و "Aura" (الهالة)</p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full shadow-md" style={{ backgroundColor: BRAND_COLORS.primary }} title="Royal Charcoal"></div>
              <div className="w-12 h-12 rounded-full shadow-md" style={{ backgroundColor: BRAND_COLORS.secondary }} title="Luxury Gold"></div>
              <div className="w-12 h-12 rounded-full shadow-md" style={{ backgroundColor: BRAND_COLORS.accent }} title="Soft Rose"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="bg-white p-3 rounded">
              <strong>الشعار المقترح:</strong> تداخل حرف V مع خطوط انسيابية ذهبية تشبه العقد.
            </div>
            <div className="bg-white p-3 rounded">
              <strong>الخطوط:</strong> "Noto Kufi Arabic" للنصوص، وخطوط "Serif" للعناوين الإنجليزية للفخامة.
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2. استراتيجية التسعير النفسي",
      icon: <Calculator className="w-6 h-6" />,
      content: (
        <div className="space-y-3">
          <div className="bg-white p-3 rounded border-r-4 border-green-500 shadow-sm">
            <strong className="block text-gray-800 mb-1">قاعدة الرقم 9 (Charm Pricing):</strong>
            <p className="text-sm text-gray-600">بدلاً من 100 ر.س، نستخدم <span className="font-bold text-green-700">99 ر.س</span>. بدلاً من 250، نستخدم <span className="font-bold text-green-700">249 ر.س</span>. هذا يجعل السعر يبدو أقل بكثير نفسياً.</p>
          </div>
          <div className="bg-white p-3 rounded border-r-4 border-blue-500 shadow-sm">
            <strong className="block text-gray-800 mb-1">تسعير القيمة المدركة (Perceived Value):</strong>
            <p className="text-sm text-gray-600">إذا كانت تكلفة المنتج 30 ر.س، لا نبيعه بـ 60 ر.س. نبيعه بـ <span className="font-bold text-blue-700">129 ر.س</span> مع التركيز على التغليف الفاخر والضمان. العميل يشتري "تجربة" وليس مجرد معدن.</p>
          </div>
          <div className="bg-white p-3 rounded border-r-4 border-purple-500 shadow-sm">
            <strong className="block text-gray-800 mb-1">استراتيجية التفكيك (Anchor Pricing):</strong>
            <p className="text-sm text-gray-600">وضع منتج بسعر مرتفع جداً (مثلاً 599 ر.س) بجوار المنتج المستهدف (249 ر.س) ليبدو الثاني صفقة لا تعوض.</p>
          </div>
        </div>
      )
    },
    {
      title: "3. العروض القاتلة (Killer Offers)",
      icon: <Percent className="w-6 h-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
            <h4 className="font-bold text-rose-800 mb-2">💎 عرض الصديقات</h4>
            <p className="text-sm text-rose-700">"اشتري قطعتين واحصلي على الثالثة هدية لأعز صديقة لديكِ". (يزيد متوسط قيمة السلة).</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h4 className="font-bold text-amber-800 mb-2">📦 عرض الشحن المجاني الذكي</h4>
            <p className="text-sm text-amber-700">الشحن مجاني للطلبات فوق 299 ر.س. (يجبر العميلة على إضافة قطعة صغيرة للوصول للحد).</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
            <h4 className="font-bold text-indigo-800 mb-2">🎁 بكج المناسبات</h4>
            <p className="text-sm text-indigo-700">طقم كامل (عقد + حلق + سوار) بسعر 399 بدلاً من 550 ر.س + تغليف مجاني.</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
            <h4 className="font-bold text-teal-800 mb-2">⏳ عرض اللحظة الأخيرة</h4>
            <p className="text-sm text-teal-700">خصم 10% إضافي عند الدفع الإلكتروني (لتقليل الدفع عند الاستلام).</p>
          </div>
        </div>
      )
    },
    {
      title: "4. الدفع عند الاستلام (COD Strategy)",
      icon: <CreditCard className="w-6 h-6" />,
      content: (
        <ul className="space-y-2 text-sm text-gray-700 bg-white p-4 rounded-lg border border-gray-100">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">•</span>
            <span><strong>رسوم تأكيد الجدية:</strong> إضافة رسوم رمزية (15-20 ر.س) لخدمة الدفع عند الاستلام لتشجيع الدفع الإلكتروني.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold">•</span>
            <span><strong>تأكيد الواتساب الآلي:</strong> فور الطلب، ترسل رسالة واتساب: "أهلاً جميلة، لتأكيد شحن طلبك المميز يرجى الرد بـ (نعم)". بدون تأكيد لا يتم الشحن.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 font-bold">•</span>
            <span><strong>محفزات الدفع المسبق:</strong> "ادفعي ببطاقة مدى/فيزا واحصلي على هدية (إسورة خيط) مجاناً مع طلبك".</span>
          </li>
        </ul>
      )
    },
    {
      title: "5. نصوص الإعلانات (Ad Copy)",
      icon: <Target className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <div className="text-xs font-bold text-gray-400 uppercase mb-1">إعلان انستغرام (عاطفي)</div>
            <p className="text-sm text-gray-800 font-medium">"مو بس إكسسوار.. هذي لمستك الخاصة ✨<br/>تألقي بأحدث تشكيلة من ڤيلورا. تفاصيل صُنعت بكل حب لتكمل أناقتك.<br/>📦 توصيل سريع | 💳 دفع عند الاستلام<br/>اطلبي الآن قبل نفاد الكمية 👇"</p>
          </div>
          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <div className="text-xs font-bold text-gray-400 uppercase mb-1">إعلان سناب شات (سريع)</div>
            <p className="text-sm text-gray-800 font-medium">"بنات! 🚨 لا يفوتكم كوليكشن العيد من ڤيلورا. فخامة، جودة، وسعر يجنن! 😍<br/>ضمان ذهبي لمدة سنة + تغليف يواجه للهدايا 🎁<br/>ارفعي الشاشة وتألقي الحين!"</p>
          </div>
        </div>
      )
    },
    {
      title: "6. نصوص واتساب (Customer Service)",
      icon: <Smartphone className="w-6 h-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-3 rounded border border-green-100">
            <div className="text-xs font-bold text-green-800 mb-1">رسالة ترحيبية / استفسار</div>
            <p className="text-xs text-gray-700">"أهلاً بكِ في ڤيلورا 💎<br/>سعيدين بتواصلك معنا يا جميلة.<br/>تفضلي، كيف نقدر نساعدك اليوم لتختاري قطعتك المميزة؟ ✨"</p>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-100">
            <div className="text-xs font-bold text-green-800 mb-1">رسالة متابعة السلة المتروكة</div>
            <p className="text-xs text-gray-700">"مرحباً! لاحظنا إنك تركتي قطع جميلة في سلتك وتنتظر تكون لك 👀✨<br/>كملي طلبك الحين واستخدمي كود (MISSYOU) لخصم 10% 💖<br/>الرابط: [رابط السلة]"</p>
          </div>
        </div>
      )
    },
    {
      title: "7. خطة محتوى (TikTok & Reels)",
      icon: <Video className="w-6 h-6" />,
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-right">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-2 rounded-r">نوع الفيديو</th>
                <th className="p-2">الفكرة</th>
                <th className="p-2 rounded-l">الصوت (Sound)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-2 font-bold text-gray-800">خلف الكواليس</td>
                <td className="p-2 text-gray-600">فيديو سريع لتغليف طلب عميلة مع رش العطر ووضع كرت الشكر.</td>
                <td className="p-2 text-gray-500">موسيقى هادئة (ASMR)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-gray-800">تعليمي</td>
                <td className="p-2 text-gray-600">كيف تنسقين عقد اللؤلؤ مع 3 إطلالات مختلفة (دوام، سهرة، طلعة).</td>
                <td className="p-2 text-gray-500">أغنية ترند سريعة</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-gray-800">استعراض منتج</td>
                <td className="p-2 text-gray-600">تصوير ماكرو للخاتم تحت الشمس لإظهار اللمعة والتفاصيل.</td>
                <td className="p-2 text-gray-500">Shine / Sparkle sound</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-gray-800">مشكلة وحل</td>
                <td className="p-2 text-gray-600">"تعانين إن الإكسسوار يتغير لونه؟" -> عرض ميزة الطلاء المقاوم للصدأ في ڤيلورا.</td>
                <td className="p-2 text-gray-500">Voiceover شرح</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    },
    {
      title: "8. سلوك الجمهور المستهدف",
      icon: <Users className="w-6 h-6" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <h4 className="font-bold text-blue-900 mb-2">الفئة</h4>
            <p className="text-sm text-blue-800">إناث (18 - 35 سنة)، طالبات جامعيات، موظفات، ومحبات للموضة.</p>
          </div>
          <div className="bg-pink-50 p-3 rounded-lg">
            <h4 className="font-bold text-pink-900 mb-2">الاهتمامات</h4>
            <p className="text-sm text-pink-800">التصوير (Instagram/TikTok)، تنسيق الملابس، الهدايا، العناية بالجمال.</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-2">سلوك الشراء</h4>
            <p className="text-sm text-purple-800">شراء عاطفي، يبحثن عن التغليف الفاخر، يتأثرن بآراء المؤثرين.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 font-serif mb-2">استراتيجية متجر ڤيلورا الشاملة</h2>
        <p className="text-gray-500">خارطة طريق متكاملة من الهوية إلى المبيعات</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sections.map((section, idx) => (
          <div key={idx} className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 ${idx === 6 || idx === 3 ? 'lg:col-span-2' : ''}`}>
            <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center gap-3">
              <div className="text-indigo-600">{section.icon}</div>
              <h3 className="font-bold text-lg text-gray-800">{section.title}</h3>
            </div>
            <div className="p-6">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};