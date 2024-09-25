// app/page.tsx
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

