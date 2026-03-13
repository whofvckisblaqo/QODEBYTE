"use client";

import { useEffect, useRef, useState } from "react";

const programs = ["Web Development", "UI/UX Design", "Digital Marketing", "Data Science"];
const company  = ["About Us", "Alumni", "Careers", "Contact"];

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          <div className="col-span-1 space-y-4">
            <div className="flex items-center group">
              <span className="text-xl font-bold tracking-tight group-hover:text-[#137fec] transition-colors duration-300">Qodebyte Academy</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">Empowering the next generation with future-ready tech skills. Innovation starts here.</p>
          </div>

          <div>
            <h5 className="font-bold mb-6">Programs</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              {programs.map((item, i) => (
                <li key={item} style={{ transitionDelay: `${i * 50}ms` }}>
                  <a href="#" className="hover:text-[#137fec] transition-colors duration-200 no-underline hover:translate-x-1 inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Company</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              {company.map((item, i) => (
                <li key={item} style={{ transitionDelay: `${i * 50}ms` }}>
                  <a href="#" className="hover:text-[#137fec] transition-colors duration-200 no-underline hover:translate-x-1 inline-block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Location</h5>
            <p className="text-sm text-slate-500 mb-4">123 Tech Avenue, Victoria Island, Lagos, Nigeria.</p>
            <div className="flex gap-4">
              {["public", "groups", "videocam"].map((icon) => (
                <a key={icon} href="#" className="size-8 rounded-full bg-slate-200 flex items-center justify-center hover:bg-[#137fec] hover:text-white transition-all duration-300 hover:scale-110">
                  <span className="material-symbols-outlined text-sm">{icon}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
        <div className={`pt-8 border-t border-slate-200 text-center text-sm text-slate-500 transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p>© 2024 Qodebyte Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}