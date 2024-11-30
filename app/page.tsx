import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Background from "@/components/background";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen m-1 md:m-8 flex flex-col items-center bg-sky-50">
      <Navbar />
      <Hero />
      <span className="animate-bloom text-blue-600 hover:text-blue-800 inline-block text-xs">SCROLL</span>
      <Background />
      <Skills />
      <Experience />
      <Link href="/files/khir-hadi-resume.pdf" target="_blank" className="animate-pulse flex items-center justify-end space-x-2 hover:text-blue-500 transition-colors self-end m-24">
        <span className="text-xl">View Full Resume</span>
        <FaArrowRight className="text-xl" />
      </Link>
      <Footer />
    </div>
  );
}
