import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, Heart, Star, ArrowRight, Truck, ShieldCheck, Gift, Clock, CreditCard, RefreshCw, CheckCircle, HelpCircle, ArrowLeft, Gem, Feather, Smile } from 'lucide-react';
import { Product } from '../types';

// صور مجوهرات واقعية وعالية الجودة
const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: "عقد اللؤلؤ الملكي", price: 249, category: "عقود", image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "خاتم سوليتير ألماس", price: 189, category: "خواتم", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "أقراط الذهب المتدلية", price: 129, category: "أقراط", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "سوار التنس الكلاسيكي", price: 340, category: "أساور", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "طقم الزفاف الفاخر", price: 599, category: "أطقم كاملة", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "عقد تشوكر عصري", price: 95, category: "عقود", image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "خاتم فينتاج مرصع", price: 110, category: "خواتم", image: "https://images.unsplash.com/photo-1600003014755-ba545333dd72?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "أقراط اللؤلؤ الصغيرة", price: 75, category: "أقراط", image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&w=800&q=80" },
];

const REVIEWS = [
  { id: 1, name: "سارة الأحمد", comment: "الجودة خيالية! التغليف لوحده حكاية ثانية، حسيت إني أميرة وأنا أفتح البوكس.", rating: 5 },
  { id: 2, name: "نورة المالكي", comment: "التوصيل سريع جداً خلال يومين وصلني، والقطعة في الطبيعة أجمل بكثير من الصور.", rating: 5 },
  { id: 3, name: "ريم العتيبي", comment: "تعامل راقي ومنتجات مميزة. هذي ثالث مرة أطلب منهم وما خيبوا ظني.", rating: 5 },
];

const CATEGORIES = ["الكل", "عقود", "خواتم", "أساور", "أقراط", "أطقم كاملة"];

export const StoreMockup: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [currentView, setCurrentView] = useState<'home' | 'shipping' | 'about'>('home');

  const filteredProducts = activeCategory === "الكل" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  const navigateToHome = () => setCurrentView('home');
  const navigateToShipping = () => setCurrentView('shipping');
  const navigateToAbout = () => setCurrentView('about');

  return (
    <div className="bg-[#FDFBF7] min-h-screen font-sans text-right" dir="rtl">
      {/* Top Bar */}
      <div className="bg-[#1A2E35] text-white text-[10px] md:text-xs py-2 text-center tracking-wide">
        عرض لفترة محدودة: توصيل مجاني للطلبات فوق 299 ر.س | استخدمي كود: VELORA20
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Icons Left */}
            <div className="flex items-center gap-4 text-gray-600">
              <div className="relative cursor-pointer hover:text-[#D4AF37] transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-1 -right-2 bg-[#D4AF37] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
              </div>
              <Heart className="w-6 h-6 cursor-pointer hover:text-[#D4AF37] transition-colors hidden sm:block" />
              <Search className="w-6 h-6 cursor-pointer hover:text-[#D4AF37] transition-colors hidden sm:block" />
            </div>

            {/* Logo Center */}
            <div onClick={navigateToHome} className="text-3xl md:text-4xl font-serif font-bold tracking-widest text-[#1A2E35] cursor-pointer">
              VELORA
            </div>

            {/* Menu Right */}
            <div className="flex items-center gap-4">
              <Menu className="w-6 h-6 text-gray-600 md:hidden cursor-pointer" />
              <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                <button onClick={navigateToHome} className={`hover:text-[#D4AF37] transition-colors ${currentView === 'home' ? 'text-[#D4AF37]' : ''}`}>الرئيسية</button>
                <button onClick={navigateToAbout} className={`hover:text-[#D4AF37] transition-colors ${currentView === 'about' ? 'text-[#D4AF37]' : ''}`}>من نحن</button>
                <button onClick={navigateToHome} className="hover:text-[#D4AF37] transition-colors">المتجر</button>
                <button onClick={navigateToShipping} className={`hover:text-[#D4AF37] transition-colors ${currentView === 'shipping' ? 'text-[#D4AF37]' : ''}`}>الشحن والسياسات</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* VIEW: HOME */}
      {currentView === 'home' && (
        <>
          {/* Hero Section */}
          <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-a1d31e857b97?auto=format&fit=crop&w=1600&q=80" 
              alt="Velora Hero" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2E35]/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-lg text-white space-y-6 animate-fade-in">
                  <span className="text-[#D4AF37] font-bold tracking-wider text-sm md:text-base uppercase">تشكيلة صيف 2025</span>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                    إطلالة تروي <br/> <span className="text-[#D4AF37]">حكايتكِ</span>
                  </h1>
                  <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
                    اكتشفي مجموعتنا الجديدة من المجوهرات المصممة بعناية لتبرز جمالك في كل لحظة. أناقة تدوم، وفخامة تليق بك.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <button className="bg-[#D4AF37] text-white px-8 py-3 rounded-none hover:bg-[#b8952b] transition-all duration-300 font-bold tracking-wide transform hover:translate-y-[-2px]">
                      تسوّقي الآن
                    </button>
                    <button className="border border-white text-white px-8 py-3 rounded-none hover:bg-white hover:text-[#1A2E35] transition-all duration-300 font-bold tracking-wide">
                      مشاهدة العروض
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features / Why Us */}
          <div className="bg-white py-12 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center space-y-3 group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-[#F4EBE8] flex items-center justify-center text-[#1A2E35] group-hover:bg-[#1A2E35] group-hover:text-[#D4AF37] transition-colors duration-300">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#1A2E35]">ضمان ذهبي</h3>
                  <p className="text-gray-500 text-sm">ضمان استبدال واسترجاع شامل لأي عيب مصنعي.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-[#F4EBE8] flex items-center justify-center text-[#1A2E35] group-hover:bg-[#1A2E35] group-hover:text-[#D4AF37] transition-colors duration-300">
                    <Gift className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#1A2E35]">تغليف فاخر</h3>
                  <p className="text-gray-500 text-sm">يصلك كل طلب في بوكس إهداء مميز يليق بك.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-[#F4EBE8] flex items-center justify-center text-[#1A2E35] group-hover:bg-[#1A2E35] group-hover:text-[#D4AF37] transition-colors duration-300">
                    <Truck className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#1A2E35]">شحن سريع</h3>
                  <p className="text-gray-500 text-sm">توصيل لباب بيتك خلال 1-3 أيام عمل.</p>
                </div>
                <div className="flex flex-col items-center space-y-3 group cursor-default">
                  <div className="w-16 h-16 rounded-full bg-[#F4EBE8] flex items-center justify-center text-[#1A2E35] group-hover:bg-[#1A2E35] group-hover:text-[#D4AF37] transition-colors duration-300">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[#1A2E35]">خدمة 24/7</h3>
                  <p className="text-gray-500 text-sm">فريق دعم متواجد دائماً للرد على استفساراتك.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best Sellers Section */}
          <div className="py-20 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 space-y-3">
              <span className="text-[#D4AF37] font-bold text-sm tracking-widest uppercase">الأكثر مبيعاً</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A2E35]">اختيارات العميلات</h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center gap-4 mb-10 overflow-x-auto pb-4 hide-scrollbar">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? 'bg-[#1A2E35] text-white shadow-md' 
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    
                    {/* Overlay Buttons */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 px-4">
                      <button className="flex-1 bg-white text-[#1A2E35] py-2.5 rounded text-xs font-bold hover:bg-[#1A2E35] hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" /> إضافة للسلة
                      </button>
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                       {product.price > 200 && <span className="bg-[#D4AF37] text-white text-[10px] px-2 py-1 font-bold shadow-sm">مميز</span>}
                       {product.id % 3 === 0 && <span className="bg-[#1A2E35] text-white text-[10px] px-2 py-1 font-bold shadow-sm">نفذت الكمية قريباً</span>}
                    </div>
                  </div>
                  
                  <div className="p-4 text-center">
                    <h3 className="text-gray-800 font-bold text-sm md:text-base mb-1 group-hover:text-[#D4AF37] transition-colors">{product.name}</h3>
                    <div className="flex justify-center items-center gap-2 mb-2">
                      <div className="flex text-yellow-400 text-xs">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                      <span className="text-xs text-gray-400">(45)</span>
                    </div>
                    <div className="text-[#1A2E35] font-serif font-bold text-lg">{product.price} ر.س</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
               <button className="inline-flex items-center gap-2 text-[#1A2E35] border-b border-[#1A2E35] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors font-medium">
                 عرض جميع المنتجات <ArrowRight className="w-4 h-4 rotate-180" />
               </button>
            </div>
          </div>

          {/* Promotional Section */}
          <div className="bg-[#F4EBE8] py-20 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
             
             <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
                <div className="flex-1 space-y-6 text-center md:text-right">
                   <span className="bg-white text-[#1A2E35] px-4 py-1 rounded-full text-sm font-bold shadow-sm inline-block mb-2">عرض خاص</span>
                   <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A2E35] leading-tight">
                     تألقي بلمسة من <br/> <span className="text-[#D4AF37]">الفخامة</span>
                   </h2>
                   <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                     احصلي على خصم 25% عند شراء أي طقم كامل من مجموعة "ليالي القمر". العرض ساري حتى نفاذ الكمية.
                   </p>
                   <div className="pt-4">
                      <button className="bg-[#1A2E35] text-white px-10 py-4 rounded shadow-lg hover:bg-[#2C4A52] hover:shadow-xl transition-all duration-300 font-bold">
                        اكتشفي العرض الآن
                      </button>
                   </div>
                </div>
                <div className="flex-1 relative">
                   <div className="relative z-10 grid grid-cols-2 gap-4">
                      <img src="https://images.unsplash.com/photo-1596944924616-b0e890a536cd?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-xl mt-12 transform hover:-translate-y-2 transition-transform duration-500" alt="Promo 1" />
                      <img src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?auto=format&fit=crop&w=600&q=80" className="rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-500" alt="Promo 2" />
                   </div>
                   {/* Decorative border */}
                   <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-2xl transform translate-x-4 translate-y-4 -z-0 opacity-30"></div>
                </div>
             </div>
          </div>

          {/* Customer Reviews */}
          <div className="py-20 max-w-7xl mx-auto px-4 bg-white">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-[#1A2E35] mb-4">ماذا تقول عميلات ڤيلورا؟</h2>
              <p className="text-gray-500">آراء حقيقية من عاشقات الأناقة</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {REVIEWS.map((review) => (
                <div key={review.id} className="bg-[#FDFBF7] p-8 rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute -top-4 right-8 bg-[#D4AF37] text-white p-2 rounded-lg shadow-lg">
                    <Gift className="w-5 h-5" />
                  </div>
                  <div className="flex text-[#D4AF37] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 font-medium">"{review.comment}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                       {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A2E35] text-sm">{review.name}</h4>
                      <span className="text-xs text-green-600 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> عميلة موثقة
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* VIEW: SHIPPING & POLICIES */}
      {currentView === 'shipping' && (
        <div className="animate-fade-in min-h-screen pb-20">
          {/* Header for Policies */}
          <div className="bg-[#1A2E35] text-white py-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <h1 className="text-4xl font-serif font-bold mb-4">الشحن والدفع والسياسات</h1>
              <div className="flex items-center justify-center gap-2 text-gray-300 text-sm">
                <span onClick={navigateToHome} className="cursor-pointer hover:text-white">الرئيسية</span>
                <span>/</span>
                <span className="text-[#D4AF37]">السياسات</span>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
            
            {/* 1. Golden Warranty */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 bg-[#FDFBF7] p-6 rounded-xl text-center border border-[#D4AF37]/20">
                <div className="w-20 h-20 bg-[#1A2E35] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-[#1A2E35] mb-2">الضمان الذهبي</h3>
                <p className="text-sm text-gray-500">ثقة بلا حدود في جودتنا</p>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-[#1A2E35]">نضمن لكِ الجودة 100%</h3>
                <p className="text-gray-600 leading-relaxed">
                  في ڤيلورا، نفخر بتقديم إكسسوارات مُصنعة بأعلى معايير الجودة. نقدم لكِ <span className="text-[#D4AF37] font-bold">ضماناً لمدة سنة كاملة</span> يشمل:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>ثبات اللون وعدم تغيره مع الاستخدام العادي.</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>مقاومة الصدأ والحساسية (خالية من النيكل).</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>سلامة الأحجار والفصوص عند الوصول.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Shipping & Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <Truck className="w-8 h-8 text-[#1A2E35]" />
                  <h3 className="text-xl font-bold text-[#1A2E35]">الشحن والتوصيل</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-[#F9FAFB] rounded-lg">
                    <span className="font-bold text-gray-700">الرياض - جدة - الدمام</span>
                    <span className="text-[#D4AF37] font-bold dir-ltr">1 - 3 أيام عمل</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#F9FAFB] rounded-lg">
                    <span className="font-bold text-gray-700">باقي مدن المملكة</span>
                    <span className="text-[#D4AF37] font-bold dir-ltr">2 - 5 أيام عمل</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-[#F9FAFB] rounded-lg">
                    <span className="font-bold text-gray-700">دول الخليج</span>
                    <span className="text-[#D4AF37] font-bold dir-ltr">5 - 7 أيام عمل</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    يتم تجهيز الطلب خلال 24 ساعة من تأكيده.
                  </p>
                </div>
              </div>

              {/* 3. Payment Methods */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                  <CreditCard className="w-8 h-8 text-[#1A2E35]" />
                  <h3 className="text-xl font-bold text-[#1A2E35]">خيارات الدفع</h3>
                </div>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-bold text-gray-800 text-sm">الدفع الإلكتروني (آمن 100%)</h4>
                    <div className="flex gap-3">
                       <div className="h-10 px-4 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-600 border">Mada</div>
                       <div className="h-10 px-4 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-600 border">Visa</div>
                       <div className="h-10 px-4 bg-gray-100 rounded flex items-center justify-center font-bold text-gray-600 border">Apple Pay</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <h4 className="font-bold text-gray-800 text-sm flex items-center gap-2">
                      الدفع عند الاستلام (COD)
                      <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full">متاح</span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      نوفر خدمة الدفع عند الاستلام لجميع مدن المملكة مقابل رسوم رمزية (15 ر.س).
                      <br/>
                      <span className="text-red-500 text-xs">* يرجى تأكيد الطلب عبر الواتساب لضمان الشحن.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Returns Policy */}
            <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#D4AF37]/30 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37] opacity-5 rounded-br-full"></div>
               <div className="flex flex-col md:flex-row gap-8 relative z-10">
                 <div className="md:w-1/4">
                    <h3 className="text-2xl font-serif font-bold text-[#1A2E35] mb-4">الاستبدال والاسترجاع</h3>
                    <div className="w-12 h-1 bg-[#D4AF37]"></div>
                 </div>
                 <div className="md:w-3/4 space-y-4 text-gray-700">
                    <p>نريدك أن تقعي في حب مجوهراتك! ولكن إذا لم تكن مناسبة لكِ، سياستنا بسيطة:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 bg-white p-3 rounded shadow-sm">
                        <RefreshCw className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-bold">7 أيام للاستبدال</span>
                      </div>
                      <div className="flex items-center gap-3 bg-white p-3 rounded shadow-sm">
                        <RefreshCw className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-sm font-bold">3 أيام للاسترجاع</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 italic mt-2">
                      * يشترط أن يكون المنتج بحالته الأصلية، غير مستخدم، وفي عبوته الأصلية. لا يشمل الاسترجاع رسوم الشحن أو الدفع عند الاستلام.
                    </p>
                 </div>
               </div>
            </div>

            <div className="text-center pt-8">
               <button onClick={navigateToHome} className="bg-[#1A2E35] text-white px-8 py-3 rounded hover:bg-[#2C4A52] transition-colors font-bold inline-flex items-center gap-2">
                 <ArrowRight className="w-4 h-4 rotate-180" />
                 العودة للتسوق
               </button>
            </div>

          </div>
        </div>
      )}

      {/* VIEW: ABOUT US */}
      {currentView === 'about' && (
        <div className="animate-fade-in min-h-screen pb-20">
          {/* Header */}
          <div className="bg-[#1A2E35] text-white py-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
              <span className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase mb-4 block">من نحن</span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">قصة شغف، صُنعت لتبقى</h1>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                في ڤيلورا، لا نبيع مجرد إكسسوارات.. نحن نصوغ لحظاتكِ الجميلة لترافقكِ إلى الأبد.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#F4EBE8] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A2E35]">
                  <Gem className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#1A2E35]">جودة استثنائية</h3>
                <p className="text-gray-500 text-sm">طلاء ذهب عيار 18 مقاوم للماء والصدأ، ليدوم بريقكِ طويلاً.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-[#D4AF37]">
                <div className="w-16 h-16 bg-[#1A2E35] rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
                  <Feather className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#1A2E35]">تفرد بالتصميم</h3>
                <p className="text-gray-500 text-sm">قطع مختارة بعناية تحاكي أحدث صيحات الموضة العالمية.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 bg-[#F4EBE8] rounded-full flex items-center justify-center mx-auto mb-4 text-[#1A2E35]">
                  <Smile className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#1A2E35]">تجربة تدللك</h3>
                <p className="text-gray-500 text-sm">من التصفح السهل وحتى فتح التغليف الفاخر، كل خطوة مصممة لإسعادك.</p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="max-w-7xl mx-auto px-4 py-12">
             <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-serif font-bold text-[#1A2E35]">كيف بدأت الحكاية؟</h2>
                  <div className="w-20 h-1 bg-[#D4AF37]"></div>
                  <p className="text-gray-600 leading-loose text-justify">
                    لم تكن البداية مجرد فكرة متجر، بل كانت ملاحظة بسيطة: "لماذا يصعب العثور على إكسسوارات تجمع بين الفخامة، الجودة العالية، والسعر المناسب؟"
                  </p>
                  <p className="text-gray-600 leading-loose text-justify">
                    تأسست <strong>ڤيلورا</strong> في عام 2024، برؤية واضحة: تمكين كل امرأة من التعبير عن هويتها من خلال قطع فنية صغيرة. نحن نؤمن أن الإكسسوار ليس مجرد زينة، بل هو اللمسة الأخيرة التي تروي قصتكِ دون كلمات.
                  </p>
                  <p className="text-gray-600 leading-loose text-justify">
                    اسمنا مشتق من "Velvet" (المخمل) و "Aura" (الهالة)، لنعكس النعومة التي تحيط بكِ.
                  </p>
                </div>
                <div className="flex-1 relative">
                   <img src="https://images.unsplash.com/photo-1615655406736-b37c4d898e6f?auto=format&fit=crop&w=800&q=80" alt="Velora Story" className="rounded-2xl shadow-xl w-full" />
                   <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-white p-6 rounded-tl-3xl shadow-lg hidden md:block">
                     <p className="font-serif font-bold text-xl">"أنتِ تستحقين البريق"</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Vision & Mission */}
          <div className="bg-[#FDFBF7] py-16">
            <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
               <div>
                  <h2 className="text-3xl font-serif font-bold text-[#1A2E35] mb-4">رؤيتنا</h2>
                  <p className="text-xl text-gray-600 font-light">أن نكون الوجهة الأولى والملهمة لكل امرأة تبحث عن الأناقة العصرية في الشرق الأوسط.</p>
               </div>
               <div className="h-px bg-gray-200 w-1/2 mx-auto"></div>
               <div>
                  <h2 className="text-3xl font-serif font-bold text-[#1A2E35] mb-4">رسالتنا</h2>
                  <p className="text-xl text-gray-600 font-light">تقديم مجوهرات عالية الجودة بتصاميم خالدة، وتجربة تسوق استثنائية تجعلكِ تشعرين بالتميز في كل مرة.</p>
               </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
             <div className="bg-[#1A2E35] rounded-3xl p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                <h2 className="text-3xl font-bold font-serif mb-6 relative z-10">كوني جزءاً من عائلة ڤيلورا</h2>
                <p className="text-gray-300 mb-8 max-w-lg mx-auto relative z-10">
                  انضمي لأكثر من 10,000 عميلة وثقن بنا. اختاري قطعتك المفضلة اليوم واستمتعي بتجربة لا تُنسى.
                </p>
                <button onClick={navigateToHome} className="bg-[#D4AF37] text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#1A2E35] transition-all relative z-10">
                  تصفحي المجموعة الآن
                </button>
             </div>
          </div>

        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1A2E35] text-white pt-16 pb-8 border-t-4 border-[#D4AF37]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <h4 className="text-2xl font-serif font-bold tracking-widest">VELORA</h4>
            <p className="text-gray-400 text-sm leading-loose">
              وجهتك الأولى للأناقة العصرية. نحن نؤمن بأن كل قطعة مجوهرات يجب أن تكون تحفة فنية تروي قصة صاحبتها.
            </p>
            <div className="flex gap-4">
               {/* Social Icons Placeholders */}
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">IG</div>
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">TK</div>
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors cursor-pointer">SC</div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">روابط مهمة</h5>
            <ul className="text-sm text-gray-400 space-y-3">
              <li><button onClick={navigateToAbout} className="hover:text-[#D4AF37] transition-colors">من نحن</button></li>
              <li><button onClick={navigateToHome} className="hover:text-[#D4AF37] transition-colors">المدونة</button></li>
              <li><button onClick={navigateToHome} className="hover:text-[#D4AF37] transition-colors">الشروط والأحكام</button></li>
              <li><button onClick={navigateToHome} className="hover:text-[#D4AF37] transition-colors">سياسة الخصوصية</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">خدمة العملاء</h5>
            <ul className="text-sm text-gray-400 space-y-3">
              <li><button onClick={navigateToShipping} className="hover:text-[#D4AF37] transition-colors">الأسئلة الشائعة</button></li>
              <li><button onClick={navigateToShipping} className="hover:text-[#D4AF37] transition-colors">سياسة الاسترجاع</button></li>
              <li><button onClick={navigateToShipping} className="hover:text-[#D4AF37] transition-colors">طرق الشحن</button></li>
              <li><button onClick={navigateToShipping} className="hover:text-[#D4AF37] transition-colors">تتبع طلبك</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">اشتركي معنا</h5>
            <p className="text-gray-400 text-sm mb-4">كوني أول من يعلم عن العروض الحصرية والتشكيلات الجديدة.</p>
            <div className="flex bg-white/5 p-1 rounded border border-white/10 focus-within:border-[#D4AF37] transition-colors">
              <input type="email" placeholder="بريدك الإلكتروني" className="bg-transparent text-white w-full px-3 text-sm outline-none placeholder-gray-500" />
              <button className="bg-[#D4AF37] px-6 py-2 text-sm text-white font-bold rounded hover:bg-[#b8952b] transition-colors">اشتراك</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 text-center md:flex justify-between items-center text-xs text-gray-500">
           <p>© 2025 ڤيلورا للمجوهرات. جميع الحقوق محفوظة.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <span>الدفع عبر: </span>
             <span>مدى</span> | <span>فيزا</span> | <span>أبل باي</span> | <span>تمارا</span>
           </div>
        </div>
      </footer>
    </div>
  );
};