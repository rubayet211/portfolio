import { describe, expect, it } from "vitest";
import {
  SCROLL_ROUTE_ORDER,
  canEnableScrollNavigation,
  getAdjacentRoute,
  getRouteIndex,
  isAtScrollBoundary,
} from "@/lib/scrollNavigation";

describe("scroll navigation helpers", () => {
  it("knows the ordered routes", () => {
    expect(SCROLL_ROUTE_ORDER).toEqual(["/", "/about", "/skill", "/projects", "/contact"]);
    expect(getRouteIndex("/projects")).toBe(3);
  });

  it("finds adjacent routes", () => {
    expect(getAdjacentRoute("/", "down")).toBe("/about");
    expect(getAdjacentRoute("/about", "up")).toBe("/");
    expect(getAdjacentRoute("/contact", "down")).toBeNull();
  });

  it("detects page boundaries for route transitions", () => {
    expect(
      isAtScrollBoundary("down", {
        scrollTop: 776,
        scrollHeight: 1600,
        clientHeight: 800,
      })
    ).toBe(true);

    expect(
      isAtScrollBoundary("up", {
        scrollTop: 12,
        scrollHeight: 1600,
        clientHeight: 800,
      })
    ).toBe(true);

    expect(
      isAtScrollBoundary("down", {
        scrollTop: 220,
        scrollHeight: 1600,
        clientHeight: 800,
      })
    ).toBe(false);
  });

  it("only enables desktop-style scroll mode when hover is available and motion is allowed", () => {
    expect(canEnableScrollNavigation({ canHover: true, reducedMotion: false })).toBe(true);
    expect(canEnableScrollNavigation({ canHover: false, reducedMotion: false })).toBe(false);
    expect(canEnableScrollNavigation({ canHover: true, reducedMotion: true })).toBe(false);
  });
});
