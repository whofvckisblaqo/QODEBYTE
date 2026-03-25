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
  { icon: "computer", title: "Computer basics & operating systems", desc: "How computers work, navigating Windows/Mac, and file management." },
  { icon: "wifi", title: "Internet & digital safety", desc: "Safe browsing, spotting scams, and protecting your identity online." },
  { icon: "description", title: "Microsoft Word & Google Docs", desc: "Creating professional documents, reports, and formatted text." },
  { icon: "table_chart", title: "Excel & Google Sheets", desc: "Spreadsheets, formulas, and organizing data like a professional." },
  { icon: "slideshow", title: "PowerPoint & Google Slides", desc: "Building beautiful, confident presentations for school or business." },
  { icon: "mail", title: "Email & professional communication", desc: "Writing professional emails and managing inboxes effectively." },
  { icon: "cloud", title: "Cloud tools & collaboration", desc: "Google Drive, sharing files, and working with others online." },
];

const projects = [
  { icon: "description", title: "Professional CV / Resume", desc: "A polished, well-formatted CV ready to submit for jobs or university." },
  { icon: "slideshow", title: "Business Presentation", desc: "A 10-slide PowerPoint pitch for a business idea or school project." },
  { icon: "table_chart", title: "Budget Spreadsheet", desc: "A working Excel sheet with formulas that tracks income and expenses." },
  { icon: "folder", title: "Digital Portfolio", desc: "An organized Google Drive folder showcasing all your completed work." },
];

const faqs = [
  { q: "Is this for complete beginners?", a: "Yes, absolutely. This course starts from zero — we even cover how to turn on a computer properly and navigate the desktop." },
  { q: "What age group is this for?", a: "This course is suitable for teens 14–20 who have little or no computer experience, as well as adults who want to get started." },
  { q: "Will I get a certificate?", a: "Yes! You'll receive a verified Qodebyte Academy certificate of completion that you can add to your CV." },
];

const projectImages = [
  "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop",
];

export default function BasicComputerPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [learnRef, learnVisible] = useVisible();
  const [projRef, projVisible] = useVisible();

  return (
    <div className="bg-[#f6f7f8] text-slate-900">

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0f172a 0%, #064e3b 50%, #022c22 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#137fec] text-xs font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm">computer</span> Basic Computer Skills for Teens (14–20)
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight">Master the Computer Skills Every Job Requires</h1>
              <p className="text-lg text-slate-300 max-w-xl">From typing to spreadsheets to professional emails — build the foundation that every career in today's world demands.</p>
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
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/20 aspect-video">
                <img src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=800&auto=format&fit=crop" alt="Students learning computers" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  {["MS Office", "Google Suite", "Internet"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white border border-white/20">{t}</span>
                  ))}
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
            <h2 className="text-3xl font-black mb-4">Why This Skill Matters Today</h2>
            <p className="text-slate-600 max-w-2xl">Basic computer literacy is now a minimum requirement for almost every job. Teens who learn these skills early are more confident in school, more employable after graduation, and better prepared for the digital world.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: "work", title: "More Employable" }, { icon: "school", title: "Better in School" }, { icon: "lock", title: "Safer Online" }].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-[#f6f7f8] border border-slate-200 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="size-12 rounded-xl bg-[#137fec]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#137fec] text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-600 text-sm">Digital skills are no longer optional — they are the baseline for success in every field and career path today.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-[#f6f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black mb-8">Who This Course Is For</h2>
              <div className="space-y-4">
                {["Teens with little or no computer experience", "Students who want to improve school performance", "Anyone preparing for the job market", "Teens who want to use technology confidently"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#137fec] font-bold">check_circle</span>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-[#137fec]/10 rounded-xl inline-block">
                <p className="font-bold text-[#137fec]">Target Age: 14–20 years old</p>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 rounded-3xl overflow-hidden h-64 lg:h-80">
              <img src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&auto=format&fit=crop" alt="Teen learning on computer" className="w-full h-full object-cover" />
            </div>
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
          <h2 className="text-4xl font-black mb-4 text-center">What Students Will Produce</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-center mb-12">Real deliverables you can use immediately after completing the course.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <div key={p.title} className="bg-white p-6 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 100}ms`, opacity: projVisible ? 1 : 0, transform: projVisible ? "translateY(0)" : "translateY(24px)" }}>
                <div className="h-40 rounded-xl mb-4 overflow-hidden">
                  <img src={projectImages[i]} alt={p.title} className="w-full h-full object-cover" />
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
            {[{ label: "Physical Classes (Enugu)", price: "₦80,000", sub: "One-time payment", badge: null }, { label: "Online Classes", price: "₦50,000", sub: "or ₦15,000 monthly", badge: "MOST FLEXIBLE" }].map((plan) => (
              <div key={plan.label} className={`rounded-3xl flex flex-col relative pb-8 px-8 pt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${plan.badge ? "border-2 border-[#137fec] bg-white" : "border border-slate-200 bg-white"}`}>
                {plan.badge && <div className="absolute top-0 right-0 bg-[#137fec] text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">{plan.badge}</div>}
                <div className="h-1 w-full bg-gradient-to-r from-[#137fec] to-blue-400 -mx-8 -mt-6 w-[calc(100%+4rem)] mb-6 rounded-t-3xl" />
                <h3 className="text-xl font-bold mb-2">{plan.label}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <p className="text-sm text-slate-500 mt-1">{plan.sub}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {["6 Weeks • 3 times per week", "Beginner-friendly environment", "Hands-on practice every class", "Free Microsoft Office access"].map((f) => (
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
            <h2 className="text-4xl lg:text-6xl font-black mb-6 relative z-10">Build Your Digital Confidence Today</h2>
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