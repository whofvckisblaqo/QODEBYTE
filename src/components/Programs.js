"use client";

import { useEffect, useRef, useState } from "react";

const programs = [
  { icon: "code",     title: "Fullstack Development", description: "Build end-to-end web applications using modern frameworks like React and Node.js." },
  { icon: "palette",  title: "UI/UX Design",          description: "Master user research, wireframing, and interactive prototyping with Figma." },
  { icon: "brush",    title: "Creative Design",        description: "Digital illustration, branding, and motion graphics for modern brands." },
  { icon: "computer", title: "Basic Computer",         description: "Foundational digital literacy for absolute beginners entering the tech world." },
];

export default function Programs() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="programs" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 space-y-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl font-bold tracking-tight">Professional Programs</h2>
          <p className="text-slate-600">Industry-aligned curriculum designed for fast-paced learning.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <div key={program.title} style={{ transitionDelay: `${i * 100}ms` }}
              className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-[#137fec] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="h-2 w-full bg-gradient-to-r from-[#137fec] to-blue-600" />
              <div className="p-6">
                <div className="size-12 rounded-lg bg-[#137fec]/10 flex items-center justify-center text-[#137fec] group-hover:bg-[#137fec] group-hover:text-white transition-colors duration-300 mb-6">
                  <span className="material-symbols-outlined">{program.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-slate-500 mb-6">{program.description}</p>
                <a href="#" className="text-[#137fec] text-sm font-bold flex items-center gap-1 hover:gap-3 transition-all duration-300 no-underline">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}