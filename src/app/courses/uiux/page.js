"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const learnItems = [
  { icon: "brush", title: "Fundamentals of graphic design", desc: "Composition, layout, and the principles every designer must know." },
  { icon: "format_color_fill", title: "Color theory & branding", desc: "How to use color to communicate mood, brand, and emotion." },
  { icon: "font_download", title: "Typography & visual hierarchy", desc: "Font pairing, sizing, and making text beautiful and readable." },
  { icon: "image", title: "Photo editing & manipulation", desc: "Using AI and professional tools to edit and enhance images." },
  { icon: "movie", title: "Motion graphics & video", desc: "Creating short animations and social media video content." },
  { icon: "campaign", title: "Social media content design", desc: "Designing for Instagram, TikTok, and other platforms." },
  { icon: "rocket_launch", title: "Real portfolio projects", desc: "A finished portfolio of creative work to showcase your skills." },
];

const projects = [
  { icon: "badge", title: "Brand Identity Kit", desc: "Logo, color palette, typography, and brand guidelines for a real or fictional company." },
  { icon: "campaign", title: "Social Media Campaign", desc: "A full set of designed posts, stories, and banners for a product launch." },
  { icon: "movie", title: "Motion Graphics Reel", desc: "Short animated videos and intro sequences for YouTube or TikTok." },
  { icon: "auto_awesome", title: "AI Art & Digital Illustration", desc: "Using AI tools alongside manual design to create unique digital art." },
];

const faqs = [
  { q: "What software will I learn?", a: "You'll learn Adobe Express, Canva Pro, and AI design tools like Adobe Firefly. No expensive software required." },
  { q: "Is this only for artistic people?", a: "Not at all! Creative design is a learnable skill. We teach you the principles and tools that make anyone a confident designer." },
  { q: "Can I make money from this skill?", a: "Absolutely. Graphic designers and content creators are in high demand. Many of our students take on freelance work before they even finish the course." },
];

export default function CreativePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [learnRef, learnVisible] = useVisible();
  const [projRef, projVisible] = useVisible();

  return (
    <div className="bg-[#f6f7f8] text-slate-900">

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0f172a 0%, #2d1b69 50%, #1a0533 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#137fec] text-xs font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm">brush</span> Creative Design for Teens (14–20)
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight">Learn to Create <span className="text-[#137fec] italic">Stunning</span> Graphics, Brands & Content</h1>
              <p className="text-lg text-slate-300 max-w-xl">From logos to social media campaigns — master the visual tools that power modern brands and businesses.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/signup" className="bg-[#137fec] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-lg shadow-[#137fec]/20 hover:-translate-y-0.5 transition-transform">
                  👉 Apply Now
                </Link>
                <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/20 px-8 py-4 rounded-xl font-bold text-lg text-white hover:bg-white/20 transition-colors">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20 bg-slate-900 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-[#137fec]/10" />
                <div className="relative z-10 flex flex-col items-center gap-4 text-center p-8">
                  <span className="material-symbols-outlined text-purple-400 text-8xl">brush</span>
                  <p className="text-white font-bold text-lg">Design. Brand. Create.</p>
                  <div className="flex gap-3">
                    {["Canva Pro", "Adobe", "AI Tools"].map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-black mb-4">Why Creative Design Matters</h2>
            <p className="text-slate-600 max-w-2xl">Every brand, business, and creator needs great visuals. Teens who master graphic design and content creation can freelance, work for agencies, or build their own brands — skills that translate directly to income.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: "badge", title: "Build Real Brands" }, { icon: "campaign", title: "Create Viral Content" }, { icon: "attach_money", title: "Earn as a Freelancer" }].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-[#f6f7f8] border border-slate-200 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="size-12 rounded-xl bg-[#137fec]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#137fec] text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-600 text-sm">Creative skills open doors to freelance income, agency jobs, and building your own brand from scratch.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Students Learn */}
      <section className="py-20" ref={learnRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">What Students Will Learn</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learnItems.map((item, i) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#137fec] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group" style={{ transitionDelay: `${i * 80}ms`, opacity: learnVisible ? 1 : 0, transform: learnVisible ? "translateY(0)" : "translateY(24px)" }}>
                <span className="material-symbols-outlined text-[#137fec] text-3xl mb-4 group-hover:scale-110 transition-transform block">{item.icon}</span>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#137fec]/5" ref={projRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-4 text-center">Real Projects Students Will Build</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-center mb-12">Every project goes straight into your portfolio.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <div key={p.title} className="bg-white p-6 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 100}ms`, opacity: projVisible ? 1 : 0, transform: projVisible ? "translateY(0)" : "translateY(24px)" }}>
                <div className="h-40 bg-slate-100 rounded-xl mb-4 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-[#137fec]/40">{p.icon}</span>
                </div>
                <h4 className="font-bold mb-2">{p.title}</h4>
                <p className="text-sm text-slate-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12 text-center">Class Plans & Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[{ label: "Physical Classes (Enugu)", price: "₦200,000", sub: "Payable in 2 installments", badge: null }, { label: "Online Classes", price: "₦120,000", sub: "or ₦20,000 monthly", badge: "MOST FLEXIBLE" }].map((plan) => (
              <div key={plan.label} className={`rounded-3xl flex flex-col relative pb-8 px-8 pt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${plan.badge ? "border-2 border-[#137fec] bg-white" : "border border-slate-200 bg-white"}`}>
                {plan.badge && <div className="absolute top-0 right-0 bg-[#137fec] text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">{plan.badge}</div>}
                <div className="h-1 w-full bg-gradient-to-r from-[#137fec] to-blue-400 -mx-8 -mt-6 w-[calc(100%+4rem)] mb-6 rounded-t-3xl" />
                <h3 className="text-xl font-bold mb-2">{plan.label}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <p className="text-sm text-slate-500 mt-1">{plan.sub}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {["3 Months • 2 times per week", "Small focused group", "Canva Pro + Adobe access", "Real portfolio projects"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#137fec] text-lg">check</span> {f}</li>
                  ))}
                </ul>
                <Link href="/auth/signup" className="w-full py-3 rounded-xl bg-[#137fec] text-white font-bold text-center hover:bg-[#137fec]/90 transition-colors">Enroll Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-black mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex justify-between items-center p-6 text-left font-bold text-lg">
                  {faq.q}
                  <span className={`material-symbols-outlined transition-transform ${openFaq === i ? "rotate-180" : ""}`}>expand_more</span>
                </button>
                {openFaq === i && <p className="px-6 pb-6 text-slate-600">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#137fec] rounded-[3rem] p-12 lg:p-20 text-center text-white overflow-hidden relative shadow-2xl">
            <div className="absolute -top-24 -left-24 size-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl" />
            <h2 className="text-4xl lg:text-6xl font-black mb-6 relative z-10">Unleash Your Creative Potential</h2>
            <p className="text-lg font-bold mb-10 relative z-10 opacity-90">📍 Enugu &nbsp;&nbsp; 👨‍🎓 Ages 14–20</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer" className="bg-white text-[#137fec] px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-colors">
                💬 Chat With Us on WhatsApp
              </a>
              <Link href="/auth/signup" className="bg-transparent border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-colors">
                👉 Apply for the Next Batch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}