"use client";

import { useEffect, useRef, useState } from "react";

export default function WhyTeens() {
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
    <section id="why-teens" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className={`space-y-8 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black tracking-tight">Why We Focus on Teens</h2>
              <div className={`h-1.5 bg-[#137fec] rounded-full transition-all duration-700 delay-300 ${visible ? "w-20" : "w-0"}`} />
            </div>
            <div className="relative">
              <span className="material-symbols-outlined text-[#137fec]/20 text-7xl absolute -top-8 -left-6 -z-10">format_quote</span>
              <p className="text-xl lg:text-2xl font-medium text-slate-700 leading-relaxed italic">
                "Many students discover tech too late. At Qodebyte Academy, we focus on helping teens start early — before university distractions begin. The earlier they start, the faster they grow."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-8 bg-[#137fec]" />
                <p className="font-bold text-[#137fec] tracking-wide uppercase text-sm">— Founder, Qodebyte Academy</p>
              </div>
            </div>
            <a href="https://wa.me/2349125771177" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-[#137fec] text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-[#137fec]/20 hover:scale-[1.02] hover:brightness-95 transition-all duration-300 no-underline">
              Join the Next Cohort
            </a>
          </div>

          <div className={`relative group transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#137fec] to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
            <div className="relative aspect-video rounded-2xl bg-slate-900 overflow-hidden border border-slate-800 flex items-center justify-center shadow-2xl">
              <div className="flex flex-col items-center gap-4 text-center px-6">
                <div className="size-20 rounded-full bg-[#137fec] flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 cursor-pointer hover:brightness-110">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </div>
                <p className="text-white font-bold tracking-wide">Founder's Message (1-2 minutes)</p>
                <p className="text-slate-400 text-sm">Discover our vision for the next generation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}