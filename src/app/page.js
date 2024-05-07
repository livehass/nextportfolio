import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col bg-[#121212] ">
      <div className="container  mx-auto py-4 px-12" >
        <NavBar />
        <HeroSection />
      </div>
    </main>
  );
}
