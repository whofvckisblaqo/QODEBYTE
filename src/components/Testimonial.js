"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonial() {
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
    <section ref={ref} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-[#137fec] rounded-[2rem] p-8 lg:p-16 flex flex-col items-center text-center text-white relative overflow-hidden hover:scale-[1.01] hover:brightness-95 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <span className={`material-symbols-outlined text-5xl mb-8 transition-all duration-700 delay-200 ${visible ? "opacity-50 translate-y-0" : "opacity-0 translate-y-4"}`}>format_quote</span>
          <p className={`text-2xl lg:text-3xl font-medium leading-relaxed max-w-3xl mb-12 italic transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            "Joining Qodebyte was the best decision of my senior year. I went from having zero coding knowledge to building a full-scale landing page for a startup in just 3 months."
          </p>
          <div className={`flex items-center gap-4 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <div className="size-14 rounded-full border-2 border-white/20 overflow-hidden flex-shrink-0">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWGvsjc9T2r6EjwbD5TTZY-opul1HcEFteRoOjw5Ybfz4Afwm-cmhb7m2PZfCg4m849lOjSQOmjocoJLw0IlPto7Hie5oAPYoINVm-UiGYIBsMkvFBrB4lCooPgMZm7PCfRGscDbxh5y8XmI6AgG9ueYdL2Zt1TnfkhTRpqVOzBxR8IQb0dlvizDmf42RJfDpRybq9v0zHJ0ReWSYdgq-0ziyVFakl1hfGKF5EHTGeJi_KWkFTYjdv579lix6KicXtjPhyDZJrp6uG"
                alt="David Johnson" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <h5 className="font-bold">David Johnson</h5>
              <p className="text-sm opacity-80">Fullstack Student, Class of '23</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}