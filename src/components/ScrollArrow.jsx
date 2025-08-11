"use client";
import { ArrowDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

const ScrollArrow = ({ position = "center" }) => {
  const { navigateToNextPage } = useScrollNavigation();
  const pathname = usePathname();

  return (
    <div
      className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-10"
    >
      <button
        onClick={navigateToNextPage}
        className="animate-bounce bg-secondary/50 p-2 rounded-full transition-all duration-300 hover:bg-accent/50"
        aria-label="Scroll to next page"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ScrollArrow;
