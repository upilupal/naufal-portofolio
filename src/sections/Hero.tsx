'use client'
import memojiImage from "@/assets/images/naufal-memoji.png";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { FaArrowDown } from "react-icons/fa6";

export const HeroSection = () => {
  const scrollToProjects = useCallback(() => {
    const projectSection = document.getElementById('projectsSection');
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="py-32 xl:py-60 relative z-0 overflow-x-clip" id="heroSection">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className="size-[500px] hero-ring"></div>
        <div className="size-[700px] hero-ring"></div>
        <div className="size-[900px] hero-ring"></div>
        <div className="size-[1100px] hero-ring"></div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="profile image" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-xs md:text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="mx-auto mt-4 md:mt-6">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide">Naufal Hanif Cipta Darmara</h1>
          <div className="max-w-lg mt-4 md:mt-6 mx-auto">
          <h1 className="font-serif text-3xl text-center tracking-wide">Fullstack Web Developer</h1>
          <p className="mt-2 md:mt-3 text-center text-white/60 md:text-base">I specialize in transforming designs into functional, high-performance web applications. Let&apos;s discuss your next project.</p>

          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-6 md:mt-8 gap-3 md:gap-4">
          <button onClick={scrollToProjects} className="inline-flex items-center gap-2 border border-white/15 px-5 h-10 md:px-6 md:h-12 rounded-xl z-10">
            <span className="font-semibold text-sm md:text-base">Explore my work</span>
            <FaArrowDown />
          </button>
          <Link 
            href="https://www.linkedin.com/in/naufalhanifcipta/"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-10 md:h-12 px-5 md:px-6 rounded-xl z-10 text-sm md:text-base"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
