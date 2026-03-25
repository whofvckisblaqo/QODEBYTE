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
  { icon: "language", title: "How websites work from scratch", desc: "Understanding the core architecture of the web, HTTP, and browser rendering." },
  { icon: "code", title: "HTML, CSS & JavaScript fundamentals", desc: "Mastering the building blocks of web development with modern syntax." },
  { icon: "devices", title: "Building responsive websites", desc: "Creating seamless experiences across mobile, tablet, and desktop screens." },
  { icon: "terminal", title: "Git & modern dev tools", desc: "Version control and industry-standard workflows for software teams." },
  { icon: "database", title: "Backend & database basics", desc: "Learning how to store data and build servers to power your apps." },
  { icon: "auto_awesome", title: "Using AI to code smarter", desc: "Leveraging AI assistants to boost productivity and solve problems." },
  { icon: "rocket_launch", title: "Hands-on real project development", desc: "Applying everything to build portfolio-ready applications." },
];

const projects = [
  { title: "Personal Portfolio Website", desc: "A stunning personal brand showcase featuring projects, skills, and contact info.", tags: ["HTML/CSS", "JavaScript", "Responsive"] },
  { title: "Business Landing Page", desc: "High-converting marketing site with lead capture forms and service sections.", tags: ["Tailwind CSS", "React", "SEO"] },
  { title: "Interactive Web App", desc: "Dynamic apps with real-time state management and user authentication.", tags: ["Next.js", "Firebase", "APIs"] },
  { title: "Team Project", desc: "Large-scale projects built using Git workflows and professional collaboration tools.", tags: ["Git/GitHub", "Agile", "DevOps"] },
];

const whyItems = [
  { icon: "foundation", title: "Strong fundamentals before advanced tools", desc: "We ensure a deep understanding of core concepts so you can master any tool that comes next." },
  { icon: "architecture", title: "Hands-on, project-based learning", desc: "You won't just watch videos. You'll build real software from day one." },
  { icon: "auto_awesome", title: "AI tools integrated to accelerate learning", desc: "We leverage AI to help you debug faster and understand complex logic." },
  { icon: "groups", title: "Small, focused classes with personal guidance", desc: "Direct access to mentors ensures no student gets left behind." },
  { icon: "rocket_launch", title: "Early exposure to real-world projects", desc: "Bridge the gap between academic theory and the tech industry." },
];

const faqs = [
  { q: "Do I need prior coding experience?", a: "No, this course is designed for absolute beginners. We start with HTML, CSS, and logic before moving into advanced topics." },
  { q: "What is the time commitment?", a: "We recommend 10-15 hours per week including live sessions, project work, and independent study." },
  { q: "Will I get a certificate?", a: "Yes! Upon completing the capstone project, you'll receive a verified digital certificate you can share on LinkedIn." },
];

export default function FullstackPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [learnRef, learnVisible] = useVisible();
  const [projRef, projVisible] = useVisible();
  const [whyRef, whyVisible] = useVisible();

  return (
    <div className="bg-[#f6f7f8] text-slate-900">

      {/* Hero */}
      <section className="relative pt-12 pb-20 overflow-hidden text-white" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #020617 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#137fec] text-xs font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm">rocket_launch</span> Fullstack Development for Teens (14–20)
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight tracking-tight">Learn to Build Real Websites & Apps From Scratch</h1>
              <p className="text-lg text-slate-300 max-w-xl">Hands-on coding, problem-solving, and real-world projects using modern tools and AI assistance.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/signup" className="bg-[#137fec] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 shadow-lg shadow-[#137fec]/20 hover:-translate-y-0.5 transition-transform">
                  👉 Apply Now
                </Link>
                <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer" className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg text-slate-900 hover:bg-slate-50 transition-colors">
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#137fec]/20 bg-slate-900 aspect-video flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-[#137fec]/20 to-transparent" />
                <div className="p-6 w-full font-mono text-sm text-slate-300 relative z-10">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <p className="text-blue-400">const <span className="text-yellow-400">Qodebyte</span> = () =&gt; {"{"}</p>
                  <p className="pl-4">return (</p>
                  <p className="pl-8 text-green-400">&lt;div className=&quot;future-developer&quot;&gt;</p>
                  <p className="pl-12 text-slate-100">Building amazing software...</p>
                  <p className="pl-8 text-green-400">&lt;/div&gt;</p>
                  <p className="pl-4">);</p>
                  <p className="text-blue-400">{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Skill Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-black mb-4">Why This Skill Matters Today</h2>
            <p className="text-slate-600 max-w-2xl">Technology is shaping every industry today. Teens who understand software early gain an advantage — not only in tech careers but in problem-solving, creativity, and digital confidence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{ icon: "psychology", title: "Logical Thinking" }, { icon: "lightbulb", title: "Problem Solving" }, { icon: "work", title: "Future-Proof Careers" }].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-[#f6f7f8] border border-slate-200 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="size-12 rounded-xl bg-[#137fec]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#137fec] text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-slate-600">Teens who master this skill early gain a competitive edge in their careers, problem-solving abilities, and digital confidence.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-[#f6f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-black mb-8">Who This Course Is For</h2>
              <div className="grid gap-4">
                {["Teens curious about technology", "Students who enjoy building things", "Beginners with no coding experience", "Teens who want future-proof digital skills"].map((item) => (
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
            <div className="lg:w-1/2 mt-12 lg:mt-0 rounded-3xl bg-slate-200 h-64 lg:h-80 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-400 text-8xl">groups</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Learn */}
      <section className="py-20" id="curriculum" ref={learnRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">What Students Will Learn</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We cover the entire stack using modern industry tools that tech companies actually use.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {learnItems.map((item, i) => (
              <div key={item.title} className="group p-6 rounded-2xl border border-slate-200 hover:border-[#137fec] bg-white overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300" style={{ transitionDelay: `${i * 80}ms`, opacity: learnVisible ? 1 : 0, transform: learnVisible ? "translateY(0)" : "translateY(24px)" }}>
                <div className="h-1 w-full bg-gradient-to-r from-[#137fec] to-blue-400 rounded-t-2xl mb-4 -mx-6 -mt-6 w-[calc(100%+3rem)]" />
                <span className="material-symbols-outlined text-[#137fec] text-3xl mb-4 group-hover:scale-110 transition-transform block">{item.icon}</span>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#137fec]/5" id="projects" ref={projRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-4 text-center">Real Projects Students Will Build</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-center mb-12">Students leave the program with real projects they can showcase.</p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {projects.map((p, i) => (
              <div key={p.title} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col hover:-translate-y-2 hover:shadow-2xl transition-all duration-300" style={{ transitionDelay: `${i * 100}ms`, opacity: projVisible ? 1 : 0, transform: projVisible ? "translateY(0)" : "translateY(24px)" }}>
                <div className="h-1 w-full bg-gradient-to-r from-[#137fec] to-blue-400" />
                <div className="h-48 bg-slate-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-300 text-6xl">web_asset</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-slate-600 mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => <span key={t} className="px-2 py-1 bg-slate-100 rounded-full text-[10px] font-semibold">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Qodebyte */}
      <section className="py-20 border-y border-slate-200" ref={whyRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-[#137fec] font-bold mb-4 uppercase tracking-wider text-sm">
              <span className="material-symbols-outlined text-xl">stars</span> The Qodebyte Advantage
            </div>
            <h2 className="text-4xl font-black mb-6">Why Qodebyte Is Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyItems.map((item, i) => (
              <div key={item.title} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#137fec]/50 hover:shadow-xl transition-all duration-300 group" style={{ transitionDelay: `${i * 100}ms`, opacity: whyVisible ? 1 : 0, transform: whyVisible ? "translateY(0)" : "translateY(24px)" }}>
                <div className="size-14 rounded-2xl bg-[#137fec]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#137fec] text-3xl">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="p-8 rounded-3xl bg-[#137fec]/5 border-2 border-dashed border-[#137fec]/30 flex items-center gap-6">
              <div className="hidden sm:flex size-16 rounded-full bg-[#137fec] text-white items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">work</span>
              </div>
              <p className="text-slate-800 font-medium italic">&quot;Some of our best teens even contribute to supervised startup projects as they grow.&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black mb-12 text-center">Class Plans & Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="rounded-3xl border border-slate-200 bg-white flex flex-col pb-8 px-8 pt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-[#137fec] to-blue-400 rounded-t-3xl -mx-8 -mt-6 w-[calc(100%+4rem)] mb-6" />
              <h3 className="text-xl font-bold mb-2">Physical Classes (Enugu)</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">₦300,000</span>
                <p className="text-sm text-slate-500 mt-1">Payable in 2 installments</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {["6 Months • 2 times per week", "Small focused classroom", "Hands-on guidance", "Real-time collaboration", "Access to recordings & AI tools"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#137fec] text-lg">check</span> {f}</li>
                ))}
              </ul>
              <Link href="/auth/signup" className="w-full py-3 rounded-xl bg-[#137fec] text-white font-bold text-center hover:bg-[#137fec]/90 transition-colors">Enroll in Physical Class</Link>
            </div>
            <div className="rounded-3xl border-2 border-[#137fec] bg-white flex flex-col relative pb-8 px-8 pt-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[#137fec] text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">MOST FLEXIBLE</div>
              <div className="h-1 w-full bg-gradient-to-r from-[#137fec] to-blue-400 rounded-t-3xl -mx-8 -mt-6 w-[calc(100%+4rem)] mb-6" />
              <h3 className="text-xl font-bold mb-2">Online Classes</h3>
              <div className="mb-6">
                <span className="text-4xl font-black">₦180,000</span>
                <p className="text-sm text-slate-500 mt-1">or ₦30,000 monthly</p>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {["6 Months • 2 times per week", "Small online group", "Interactive live sessions", "Virtual collaboration", "Access to recordings & AI tools"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-[#137fec] text-lg">check</span> {f}</li>
                ))}
              </ul>
              <Link href="/auth/signup" className="w-full py-3 rounded-xl bg-[#137fec] text-white font-bold text-center hover:bg-[#137fec]/90 transition-colors">Enroll in Online Class</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl lg:text-6xl font-black mb-6 relative z-10">Give Your Teen a Head Start in Tech</h2>
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