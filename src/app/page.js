"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col stripe-bg">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 relative">
        <div className="text-center animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 text-center">
            Rhyme Rubayet
          </h1>
          <h2 className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider sm:tracking-widest text-white/80 mb-8 sm:mb-12 text-center px-2">
            SOFTWARE ENGINEER + WEB DEVELOPER
          </h2>
          <Link href="/about" className="inline-flex items-center space-x-2 button-outline text-sm sm:text-base">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
