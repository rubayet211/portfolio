"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  canEnableScrollNavigation,
  getAdjacentRoute,
  isAtScrollBoundary,
} from "@/lib/scrollNavigation";

const NAVIGATION_COOLDOWN_MS = 900;

export function useScrollNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isEnabled, setIsEnabled] = useState(false);
  const cooldownRef = useRef(0);
  const navigatingRef = useRef(false);
  const releaseTimeoutRef = useRef(null);

  useEffect(() => {
    const hoverMediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabledState = () => {
      setIsEnabled(
        canEnableScrollNavigation({
          canHover: hoverMediaQuery.matches,
          reducedMotion: reducedMotionMediaQuery.matches,
        })
      );
    };

    updateEnabledState();
    hoverMediaQuery.addEventListener("change", updateEnabledState);
    reducedMotionMediaQuery.addEventListener("change", updateEnabledState);

    return () => {
      hoverMediaQuery.removeEventListener("change", updateEnabledState);
      reducedMotionMediaQuery.removeEventListener("change", updateEnabledState);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (releaseTimeoutRef.current) {
        window.clearTimeout(releaseTimeoutRef.current);
      }
    };
  }, []);

  const attemptNavigation = (direction) => {
    const nextRoute = getAdjacentRoute(pathname, direction);

    if (!nextRoute) {
      return false;
    }

    const now = Date.now();

    if (navigatingRef.current || now - cooldownRef.current < NAVIGATION_COOLDOWN_MS) {
      return false;
    }

    navigatingRef.current = true;
    cooldownRef.current = now;
    router.push(nextRoute);

    if (releaseTimeoutRef.current) {
      window.clearTimeout(releaseTimeoutRef.current);
    }

    releaseTimeoutRef.current = window.setTimeout(() => {
      navigatingRef.current = false;
    }, 420);

    return true;
  };

  useEffect(() => {
    if (!isEnabled) {
      return undefined;
    }

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 28) {
        return;
      }

      const direction = event.deltaY > 0 ? "down" : "up";

      if (
        !isAtScrollBoundary(direction, {
          scrollTop: document.documentElement.scrollTop,
          scrollHeight: document.documentElement.scrollHeight,
          clientHeight: document.documentElement.clientHeight,
        })
      ) {
        return;
      }

      attemptNavigation(direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isEnabled, pathname]);

  return {
    isEnabled,
    canNavigateForward: Boolean(getAdjacentRoute(pathname, "down")),
    canNavigateBackward: Boolean(getAdjacentRoute(pathname, "up")),
    navigateToNextPage: () => attemptNavigation("down"),
    navigateToPrevPage: () => attemptNavigation("up"),
  };
}
