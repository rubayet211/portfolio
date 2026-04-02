"use client";

import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Check, Copy, Mail, Send, TriangleAlert } from "lucide-react";
import { useMemo, useState } from "react";
import {
  CONTACT_INITIAL_VALUES,
  getContactSubmissionState,
  validateContactForm,
} from "@/lib/contactForm";
import { siteContent } from "@/content/site";

const fieldNames = ["from_name", "from_email", "subject", "message"];

export default function ContactForm() {
  const [values, setValues] = useState(CONTACT_INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [copyState, setCopyState] = useState("idle");
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const submissionState = useMemo(
    () =>
      getContactSubmissionState({
        values,
        isSending,
        env: process.env,
      }),
    [isSending, values]
  );

  const setFieldError = (fieldName, nextValues) => {
    const validation = validateContactForm(nextValues);

    setErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };

      if (validation.errors[fieldName]) {
        nextErrors[fieldName] = validation.errors[fieldName];
      } else {
        delete nextErrors[fieldName];
      }

      return nextErrors;
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };

    setValues(nextValues);

    if (touched[name]) {
      setFieldError(name, nextValues);
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setTouched((currentTouched) => ({
      ...currentTouched,
      [name]: true,
    }));

    setFieldError(name, values);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteContent.person.email);
      setCopyState("copied");
      window.setTimeout(() => setCopyState("idle"), 2000);
    } catch {
      setCopyState("failed");
      window.setTimeout(() => setCopyState("idle"), 2500);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) {
      return;
    }

    const nextTouched = fieldNames.reduce((accumulator, fieldName) => {
      accumulator[fieldName] = true;
      return accumulator;
    }, {});

    setTouched(nextTouched);

    const validation = validateContactForm(values);
    setErrors(validation.errors);

    if (!validation.isValid) {
      setStatus({
        type: "error",
        message: siteContent.contact.validationMessage,
      });
      return;
    }

    if (!submissionState.hasConfig) {
      setStatus({
        type: "error",
        message: siteContent.contact.missingConfigMessage,
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          ...validation.values,
          reply_to: validation.values.from_email,
          to_name: siteContent.person.name,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );

      setValues(CONTACT_INITIAL_VALUES);
      setErrors({});
      setTouched({});
      setStatus({
        type: "success",
        message: siteContent.contact.successMessage,
      });
    } catch {
      setStatus({
        type: "error",
        message: siteContent.contact.errorMessage,
      });
    } finally {
      setIsSending(false);
    }
  };

  const isFormUnavailable = !submissionState.hasConfig;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      <section className="surface-card p-6 sm:p-8">
        <div className="space-y-4">
          <span className="eyebrow">Contact</span>
          <h1 className="section-title text-left">{siteContent.contact.title}</h1>
          <p className="section-copy">{siteContent.contact.intro}</p>
        </div>

        <div className="mt-8 grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-start gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] p-3 text-[var(--color-accent)]">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Direct email</p>
                <a
                  href={`mailto:${siteContent.person.email}`}
                  className="mt-1 inline-flex break-all text-sm text-white/75 transition hover:text-white"
                >
                  {siteContent.person.email}
                </a>
                <div className="mt-3 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="secondary-button inline-flex items-center gap-2"
                  >
                    {copyState === "copied" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    {copyState === "copied" ? "Copied" : "Copy email"}
                  </button>
                  <a
                    href={`mailto:${siteContent.person.email}`}
                    className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] transition hover:text-white"
                  >
                    {siteContent.contact.emailCtaLabel}
                  </a>
                </div>
                {copyState === "failed" ? (
                  <p className="mt-3 text-sm text-amber-200">
                    Copy is unavailable in this browser. Please use the email link instead.
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-semibold text-white">Availability</p>
            <p className="mt-2 text-sm leading-7 text-white/70">
              {siteContent.contact.availabilityCard}
            </p>
            <p className="mt-3 text-sm text-white/[0.55]">
              {siteContent.contact.responseExpectation}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm font-semibold text-white">Prefer a quick review first?</p>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Browse recent work or download my CV before reaching out.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/projects" className="secondary-button">
                View projects
              </Link>
              <a href={siteContent.person.resumePath} download className="secondary-button">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-card p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="eyebrow">Message</span>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
              Send a project brief
            </h2>
          </div>
          {isFormUnavailable ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-100">
              <TriangleAlert className="h-4 w-4" />
              Form unavailable
            </span>
          ) : null}
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/[0.65]">
          {siteContent.contact.responseNote}
        </p>

        <form className="mt-8 space-y-5" noValidate onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="from_name" className="field-label">
                Your name
              </label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                autoComplete="name"
                value={values.from_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="John Doe"
                aria-invalid={Boolean(errors.from_name)}
                aria-describedby={errors.from_name ? "from_name-error" : undefined}
                className={`field-input ${errors.from_name ? "field-input-error" : ""}`}
              />
              {errors.from_name ? (
                <p id="from_name-error" className="field-error">
                  {errors.from_name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="from_email" className="field-label">
                Email address
              </label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                autoComplete="email"
                value={values.from_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.from_email)}
                aria-describedby={errors.from_email ? "from_email-error" : undefined}
                className={`field-input ${errors.from_email ? "field-input-error" : ""}`}
              />
              {errors.from_email ? (
                <p id="from_email-error" className="field-error">
                  {errors.from_email}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="field-label">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="New product build, redesign, or engineering support"
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={`field-input ${errors.subject ? "field-input-error" : ""}`}
            />
            {errors.subject ? (
              <p id="subject-error" className="field-error">
                {errors.subject}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell me what you are building, where you need support, and any timeline or context that matters."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`field-input min-h-40 resize-y ${errors.message ? "field-input-error" : ""}`}
            />
            {errors.message ? (
              <p id="message-error" className="field-error">
                {errors.message}
              </p>
            ) : null}
          </div>

          {status.message ? (
            <div
              role={status.type === "error" ? "alert" : "status"}
              className={`rounded-2xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                  : "border-rose-400/30 bg-rose-400/10 text-rose-100"
              }`}
            >
              {status.message}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/[0.55]">
              {submissionState.hasConfig
                ? "Messages are sent securely through EmailJS from the browser."
                : "This deployment is missing EmailJS configuration, so direct email is currently the reliable path."}
            </p>
            <button
              type="submit"
              disabled={isSending}
              className="primary-button inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSending ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
