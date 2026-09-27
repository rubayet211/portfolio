import { describe, expect, it } from "vitest";
import { siteContent } from "@/content/site";

const retiredHosts = [
  "altaaqafoods.com",
  "www.altaaqafoods.com",
  "tuitionibd.com",
  "www.tuitionibd.com",
  "aroseefragnance.com",
  "www.aroseefragnance.com",
  "thinkineed.com",
  "www.thinkineed.com",
];

describe("portfolio content", () => {
  it("does not link retired or hijacked domains", () => {
    for (const project of siteContent.projects) {
      if (project.status === "Live") {
        expect(project.liveUrl).toMatch(/^https:\/\//);
      }

      if (project.liveUrl) {
        expect(retiredHosts).not.toContain(new URL(project.liveUrl).hostname);
      }

      if (project.source === "private") {
        expect(project.repoUrl).toBeUndefined();
      }

      if (project.image) {
        expect(project.image.startsWith("/work/")).toBe(true);
      }
    }
  });

  it("keeps the homepage to four featured case studies", () => {
    expect(siteContent.projects.filter((project) => project.featured)).toHaveLength(4);
  });
});
