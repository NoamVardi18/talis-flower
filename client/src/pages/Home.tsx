import React, { useEffect, useRef } from "react";
import { Phone, MapPin, Heart, Gift, Leaf, Star, MessageCircle, Instagram, ChevronDown } from "lucide-react";
import { OWNER_PHONE, OWNER_PHONE_DISPLAY, OWNER_WHATSAPP, OWNER_LOCATION, SHOP_NAME, REVIEWS, SERVICES } from "@shared/const";

// Images
const HERO_IMG = "/hero.jpg";
const ABOUT_IMG = "/about.jpg";
const GALLERY_IMG = "/gallery.jpg";

const serviceIcons: Record<string, React.ReactNode> = {
  Flower: <span className="text-3xl">🌸</span>,
  Heart: <Heart className="h-7 w-7" />,
  Gift: <Gift className="h-7 w-7" />,
  Leaf: <Leaf className="h-7 w-7" />,
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans bg-[#FDFAF7] text-[#2C1810] overflow-x-hidden" dir="rtl">

      {/* ── NAV ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F2D9C8]/40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌷</span>
            <span style={{ fontFamily: "'Playfair Display', serif" }} className="text-lg font-semibold text-[#2C1810] tracking-wide">
              Tali's Flower
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#6B4226]">
            <a href="#about" className="hover:text-[#C9A96E] transition-colors">עלינו</a>
            <a href="#services" className="hover:text-[#C9A96E] transition-colors">שירותים</a>
            <a href="#gallery" className="hover:text-[#C9A96E] transition-colors">גלריה</a>
            <a href="#contact" className="hover:text-[#C9A96E] transition-colors">צור קשר</a>
          </nav>
          <a
            href={`https://wa.me/${OWNER_WHATSAPP}`}
            target="_blank"
            rel="noreferrer"
            className="bg-[#C9A96E] hover:bg-[#B8944F] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            הזמיני עכשיו
          </a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <div ref={heroRef} className="absolute inset-0 scale-110">
          <img
            src={HERO_IMG}
            alt="Tali's Flower"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <p
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="text-2xl text-[#F2D9C8] mb-4 tracking-wider"
          >
            בוטיק פרחים יוקרתי באילת
          </p>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
          >
            כל רגע מיוחד
            <br />
            <span className="italic text-[#F2D9C8]">מגיע לפרחים יפים</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-xl mx-auto leading-relaxed">
            פרחים טריים, זרים מעוצבים ועיצוב פרחוני מותאם אישית לכל אירוע
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${OWNER_WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#C9A96E] hover:bg-[#B8944F] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              שלחי לנו וואצאפ
            </a>
            <a
              href={`tel:${OWNER_PHONE}`}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/40 font-semibold px-8 py-4 rounded-full text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {OWNER_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-[#C9A96E]/30" />
            <img
              src={ABOUT_IMG}
              alt="טלי בעבודה"
              className="relative rounded-3xl w-full object-cover shadow-2xl"
              style={{ maxHeight: "500px" }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
              <div className="text-3xl">🌸</div>
              <div>
                <p className="font-bold text-[#2C1810] text-sm">10+ שנות ניסיון</p>
                <p className="text-[#9B7B5E] text-xs">עיצוב פרחוני מקצועי</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-right">
            <p
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-[#C9A96E] text-2xl mb-3"
            >
              קצת עלי
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl font-bold text-[#2C1810] mb-6 leading-tight"
            >
              שלום, אני טלי 🌷
            </h2>
            <div className="space-y-4 text-[#6B4226] leading-relaxed">
              <p>
                אני טלי, ואני חיה ונושמת פרחים. כבר יותר מ-10 שנים אני מעצבת זרים ויוצרת חוויות פרחוניות מיוחדות לתושבי אילת והסביבה.
              </p>
              <p>
                כל זר שיוצא מהסטודיו שלי מקבל את כל הלב שלי — אני בוחרת כל פרח בקפידה, מתאימה את הצבעים לאירוע ולאדם, ומוודאת שהתוצאה תגרום לאדם שמקבל אותה לחייך.
              </p>
              <p>
                מזרי חתונה שעצרו נשימות ועד זר ספונטני ל"סתם כי בא לי לשמח אותך" — כל הזמנה מקבלת יחס אישי ומיוחד.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href={`https://wa.me/${OWNER_WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="bg-[#C9A96E] hover:bg-[#B8944F] text-white font-semibold px-7 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                דברי איתי
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-[#FDF6EE] to-[#FDFAF7]">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <p
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="text-[#C9A96E] text-2xl mb-3"
          >
            מה אנחנו מציעות
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl font-bold text-[#2C1810]"
          >
            השירותים שלנו
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#F2D9C8]/40 group"
            >
              <div className="w-16 h-16 bg-[#FDF6EE] rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-white transition-all">
                {serviceIcons[service.icon] || <span className="text-3xl">🌸</span>}
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="font-bold text-[#2C1810] text-lg mb-3"
              >
                {service.title}
              </h3>
              <p className="text-[#9B7B5E] text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-[#C9A96E] text-2xl mb-3"
            >
              עבודות שלנו
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl font-bold text-[#2C1810]"
            >
              קצת השראה
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.01]">
              <img src={HERO_IMG} alt="זר פרחים יוקרתי" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.01]">
              <img src={GALLERY_IMG} alt="סידור פרחים" className="w-full h-80 object-cover" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-[1.01] md:col-span-3">
              <img src={ABOUT_IMG} alt="טלי בעבודה" className="w-full h-64 object-cover object-top" />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 px-6 bg-[#FDF6EE]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              style={{ fontFamily: "'Dancing Script', cursive" }}
              className="text-[#C9A96E] text-2xl mb-3"
            >
              מה אומרות הלקוחות
            </p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl font-bold text-[#2C1810]"
            >
              ⭐⭐⭐⭐⭐
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white rounded-3xl p-8 shadow-sm border border-[#F2D9C8]/40">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
                <p className="text-[#6B4226] leading-relaxed mb-6 text-sm">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F2D9C8] rounded-full flex items-center justify-center text-[#C9A96E] font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C1810] text-sm">{review.name}</p>
                    <p className="text-[#9B7B5E] text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section id="contact" className="py-24 px-6 bg-[#2C1810] text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A96E]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A96E]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-2xl mx-auto text-center">
          <p
            style={{ fontFamily: "'Dancing Script', cursive" }}
            className="text-[#C9A96E] text-2xl mb-4"
          >
            בואי נדבר
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            מה הרגע המיוחד
            <br />
            <span className="italic text-[#F2D9C8]">שלך?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            שלחי לי וואצאפ עם הפרטים ואחזור אלייך עם הצעה אישית. אני כאן בשבילך!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href={`https://wa.me/${OWNER_WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="bg-[#C9A96E] hover:bg-[#B8944F] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              וואצאפ
            </a>
            <a
              href={`tel:${OWNER_PHONE}`}
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              {OWNER_PHONE_DISPLAY}
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/50">
            <MapPin className="h-4 w-4" />
            <span>{OWNER_LOCATION}</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1A0F08] text-white/40 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Tali's Flower. כל הזכויות שמורות.</p>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${OWNER_WHATSAPP}`}
        target="_blank"
        rel="noreferrer"
        aria-label="פתחי וואצאפ"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-400 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
