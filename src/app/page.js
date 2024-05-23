import HeroSection from "./components/hero/HeroSection";
import NavBar from "./components/navBar/NavBar";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import EmailSection from "./components/emailSection/EmailSection";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
