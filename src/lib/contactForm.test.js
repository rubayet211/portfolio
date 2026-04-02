import { describe, expect, it } from "vitest";
import {
  CONTACT_INITIAL_VALUES,
  getContactSubmissionState,
  hasEmailJsConfig,
  validateContactForm,
} from "@/lib/contactForm";

const validEnv = {
  NEXT_PUBLIC_EMAILJS_SERVICE_ID: "service_123",
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: "template_123",
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: "public_123",
};

describe("contact form helpers", () => {
  it("accepts a valid submission", () => {
    const result = validateContactForm({
      from_name: "Rhyme Rubayet",
      from_email: "rubayet211@gmail.com",
      subject: "Freelance project",
      message: "I would like to discuss a new build for our product.",
    });

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("rejects missing required fields", () => {
    const result = validateContactForm(CONTACT_INITIAL_VALUES);

    expect(result.isValid).toBe(false);
    expect(result.errors).toMatchObject({
      from_name: expect.any(String),
      from_email: expect.any(String),
      subject: expect.any(String),
      message: expect.any(String),
    });
  });

  it("rejects an invalid email address", () => {
    const result = validateContactForm({
      from_name: "Rhyme Rubayet",
      from_email: "not-an-email",
      subject: "Test",
      message: "This message is long enough.",
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.from_email).toBe("Please enter a valid email address.");
  });

  it("prevents duplicate submits while sending", () => {
    const result = getContactSubmissionState({
      values: {
        from_name: "Rhyme Rubayet",
        from_email: "rubayet211@gmail.com",
        subject: "Product support",
        message: "This message is long enough to pass validation.",
      },
      isSending: true,
      env: validEnv,
    });

    expect(result.canSubmit).toBe(false);
    expect(result.hasConfig).toBe(true);
  });

  it("requires EmailJS configuration to submit", () => {
    expect(hasEmailJsConfig({})).toBe(false);
    expect(hasEmailJsConfig(validEnv)).toBe(true);
  });
});
