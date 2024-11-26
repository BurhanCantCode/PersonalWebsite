"use client";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Recommendations from "@/components/Recommendations";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className="relative">
      <Background />
      
      {/* Content */}
      <div className="relative z-20">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Recommendations />
      </div>
    </main>
  );
} 