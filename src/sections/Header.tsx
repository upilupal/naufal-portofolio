'use client'
import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";

let tabs = [
  {id: "heroSection", label: "Home"},
  {id: "projectsSection", label: "Projects"},
  {id: "contactSection", label: "Contact"},
];

export const Header = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const scrollToSection = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveTab(id);
    }
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-6 w-full z-50"> 
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:text-white/50 "
            } relative rounded-full px-2 py-0.5 md:px-3 md:py-1 text-sm md:font-medium text-white transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="menubar-bubble"
                className="absolute inset-0 z-10 mix-blend-difference rounded-full bg-white"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};