"use client"
import HeroSection from "./components/hero/HeroSection";
import NavBar from "./components/navBar/NavBar";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import EmailSection from "./components/emailSection/EmailSection";
import Footer from "./components/footer/Footer";
import ParticlesComponent from "./components/particles/particlesreact";
import TechnologiesSection from "./components/technologies/TechnologiesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col z-0 bg-[#121212] scrollbar-hide md:scrollbar-default overflow-x-hidden w-full ">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <TechnologiesSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
      <ParticlesComponent id="particles" />
    </main >

  );
}
