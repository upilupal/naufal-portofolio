// ./sections/Projects.tsx
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { TapeSection } from "./Tape";

import { portfolioProjects } from "@/data/projects";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section className="py-24" id="projectsSection">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-200 to-sky-400 text-transparent bg-clip-text">Real-world Projects</p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center text-white/60 md:text-lg lg:text-xl mt-4 max-w-md mx-auto">See how I transformed concepts into engaging digital experiences.</p>
        <div className="mt-10">

        <TapeSection/>
        </div>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.slug}
              className="bg-gray-800 rounded-3xl z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none sticky top-20"
              style={{
                top: `calc(64px + ${index * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="inline-flex bg-gradient-to-r from-emerald-300 to-sky-400 font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.month}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <Link href={`/projects/${project.slug}`}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex justify-center items-center gap-2 mt-6">
                      <span>View project detail</span>
                      <FiArrowUpRight size={18} />
                    </button>
                  </Link>
                </div>
                <div className="relative">
                  <Image src={project.image} alt={project.title} className="mt-6 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
