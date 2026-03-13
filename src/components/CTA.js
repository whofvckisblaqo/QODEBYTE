"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
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
    <section ref={ref} className="py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl lg:text-5xl font-black mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Ready to start your journey?
        </h2>
        <p className={`text-slate-600 mb-10 text-lg transition-all duration-700 delay-150 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Next cohort starts in 14 days. Limited seats available.
        </p>
        <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="/auth/signup"
            className="bg-[#137fec] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-[#137fec]/30 hover:scale-[1.02] hover:brightness-95 transition-all duration-300 no-underline">
            Apply for Admission
          </a>
          <a href="#" className="bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 hover:scale-[1.02] transition-all duration-300 no-underline">
            Download Curriculum
          </a>
        </div>
      </div>
    </section>
  );
}