"use client";

import { useEffect, useRef, useState } from "react";

const reasons = [
  { icon: "timer_off",      title: "Less distraction = faster learning",   description: "Without the heavy academic pressure of higher education, teens can focus deeply on mastering core tech concepts." },
  { icon: "emoji_objects",  title: "Curiosity is high → learning sticks",  description: "The teenage years are the peak for neuroplasticity, making it the perfect time to absorb complex logic and new languages." },
  { icon: "rocket_launch",  title: "Early exposure builds confidence",      description: "Gaining practical skills early turns technology from a mystery into a tool for self-reliance and creative problem solving." },
  { icon: "school",         title: "University Ready",                      description: "By the time university starts, our students already have a professional portfolio of real-world projects and industry experience." },
];

export default function WhyEarly() {
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
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXGa9nUpWIKnIdXIWc8Hl0JRz8BNeKqr11hlJn1n64MASoQ11h9njs5FPT1pDEzu3Gjc1evXQ7zPfmC7ieodnV3BAxbQWYzzPXocXVnrnr_byDw6xZ8CPj0LyS9KCRCQcbDPS1H4yVn9FmUz99WwnVIagYZ3ti6Jj_y9Vkz3ZK_0cvkOmvx2DTztTxyWQiY9MCKp00yjSapueIZ75NOt4f9a0osP-T9RASV8MgtxpG82BtObfRopBku3oJeWDn16twq2qndajzU_Yw"
              alt="Students collaborating on a project"
              className="rounded-2xl shadow-xl w-full hover:shadow-2xl hover:scale-[1.01] transition-all duration-500" />
          </div>

          <div className={`space-y-8 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h2 className="text-3xl lg:text-4xl font-bold">Why Teens Should Start Tech Early</h2>
            <div className="space-y-6">
              {reasons.map((reason, i) => (
                <div key={reason.title} style={{ transitionDelay: `${200 + i * 100}ms` }}
                  className={`flex gap-4 group transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  <span className="material-symbols-outlined text-[#137fec] flex-shrink-0 group-hover:scale-125 transition-transform duration-300">{reason.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg mb-1 group-hover:text-[#137fec] transition-colors duration-200">{reason.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}