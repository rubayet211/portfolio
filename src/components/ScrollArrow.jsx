"use client";

import { ArrowDown } from "lucide-react";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

export default function ScrollArrow() {
  const { canNavigateForward, isEnabled, navigateToNextPage } = useScrollNavigation();

  if (!isEnabled || !canNavigateForward) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden lg:flex">
      <button
        type="button"
        onClick={navigateToNextPage}
        className="scroll-arrow-button pointer-events-auto"
        aria-label="Go to the next page"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </div>
  );
}
