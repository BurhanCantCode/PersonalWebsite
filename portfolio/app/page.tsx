"use client";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Recommendations from "@/components/Recommendations";
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className="relative">
      {/* Spline Background with Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black/90 z-10"></div>
        <Spline 
          scene="https://prod.spline.design/RclBwPQhANhTdFMm/scene.splinecode"
          className="w-full h-full"
        />
      </div>

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