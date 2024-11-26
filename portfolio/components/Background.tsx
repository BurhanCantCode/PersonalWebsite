"use client";
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
});

export default function Background() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black/90 z-10"></div>
      <div className="relative z-0">
        <Spline 
          scene="https://prod.spline.design/RclBwPQhANhTdFMm/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </div>
  );
} 