export const CONTACT_INITIAL_VALUES = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeContactValues(values) {
  return {
    from_name: values.from_name.trim(),
    from_email: values.from_email.trim(),
    subject: values.subject.trim(),
    message: values.message.trim(),
  };
}

export function validateContactForm(values) {
  const normalizedValues = normalizeContactValues(values);
  const errors = {};

  if (!normalizedValues.from_name) {
    errors.from_name = "Please enter your name.";
  } else if (normalizedValues.from_name.length < 2) {
    errors.from_name = "Your name should be at least 2 characters.";
  }

  if (!normalizedValues.from_email) {
    errors.from_email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(normalizedValues.from_email)) {
    errors.from_email = "Please enter a valid email address.";
  }

  if (!normalizedValues.subject) {
    errors.subject = "Please add a short subject.";
  } else if (normalizedValues.subject.length < 3) {
    errors.subject = "The subject should be at least 3 characters.";
  }

  if (!normalizedValues.message) {
    errors.message = "Please include a message.";
  } else if (normalizedValues.message.length < 10) {
    errors.message = "The message should be at least 10 characters.";
  }

  return {
    values: normalizedValues,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

export function hasEmailJsConfig(env) {
  return Boolean(
    env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );
}

export function getContactSubmissionState({ values, isSending, env }) {
  const validation = validateContactForm(values);
  const hasConfig = hasEmailJsConfig(env);

  return {
    ...validation,
    hasConfig,
    canSubmit: validation.isValid && hasConfig && !isSending,
  };
}
