"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { siteContent } from "@/content/site";

export default function ResumeLink({ className, children }) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      {open ? createPortal(<ResumeDialog onClose={close} />, document.body) : null}
    </>
  );
}

function ResumeDialog({ onClose }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const { name, resumePath, resumeDownloadName } = siteContent.person;

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = [...dialogRef.current.querySelectorAll("a, button")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!first || !last) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-black/75 p-3 sm:items-center sm:p-6"
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="flex h-[min(92vh,52rem)] w-full max-w-4xl flex-col border border-line bg-background"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-4 py-3">
          <h2 id={titleId} className="text-base font-semibold text-foreground">
            Résumé
          </h2>
          <div className="flex items-center gap-2">
            <a href={resumePath} download={resumeDownloadName} className="secondary-button">
              Download
            </a>
            <button ref={closeRef} type="button" className="secondary-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
        <iframe title={`${name} résumé`} src={resumePath} className="min-h-0 w-full flex-1 bg-white" />
      </div>
    </div>
  );
}
