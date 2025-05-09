import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-4 px-8 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-muted-foreground mb-3 md:mb-0">
          Copyright © {currentYear} Rhyme Rubayet. All rights reserved.
        </div>

        <div className="flex items-center space-x-2">
          <a href="https://github.com/rubayet211" className="social-icon">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://x.com/RhymeTheDev" className="social-icon">
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rhymerubayet/"
            className="social-icon"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
