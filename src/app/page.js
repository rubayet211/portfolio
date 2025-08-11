"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col stripe-bg">
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        <div className="text-center animate-fade-in">
          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl font-bold mb-4">
            Rhyme Rubayet
          </h1>
          <h2 className="font-sans text-xl md:text-2xl tracking-widest text-white/80 mb-12">
            SOFTWARE ENGINEER + WEB DEVELOPER
          </h2>
          <Link href="/about" className="inline-flex items-center space-x-2 button-outline">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
