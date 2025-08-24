"use client";
import { Mail, Check } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isCopied, setIsCopied] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState({ success: false, message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText("rubayet211@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus({ success: false, message: "" });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSendStatus({
            success: true,
            message: "Message sent successfully!",
          });
          form.current.reset();
        },
        (error) => {
          setSendStatus({
            success: false,
            message: "Failed to send message. Please try again.",
          });
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => {
        setIsSending(false);
        setTimeout(() => setSendStatus({ success: false, message: "" }), 5000);
      });
  };

  return (
    <div className="flex flex-1 pb-6 pt-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 sm:mb-8 text-center">
          Contact
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 sm:mb-6">
              Get in Touch
            </h2>
            <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 mt-1 text-accent" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <button
                    onClick={copyEmail}
                    className="flex items-center group py-2 pr-2 min-h-[44px]"
                  >
                    <span className="text-white/70 group-hover:text-accent transition-colors">
                      rubayet211@gmail.com
                    </span>
                    {isCopied ? (
                      <Check className="ml-2 h-4 w-4 text-green-500" />
                    ) : (
                      <span className="ml-3 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to copy
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary/30 p-4 sm:p-6 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-serif mb-4">Send a Message</h2>
            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label htmlFor="from_name" className="block mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-md text-sm sm:text-base min-h-[44px]"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block mb-2 text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-md text-sm sm:text-base min-h-[44px]"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-md text-sm sm:text-base min-h-[44px]"
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-md text-sm sm:text-base min-h-[44px]"
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>

              {sendStatus.message && (
                <div
                  className={`p-3 rounded-md ${
                    sendStatus.success
                      ? "bg-green-500/10 text-green-500"
                      : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {sendStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-3.5 bg-accent text-white rounded-md hover:bg-accent/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base font-medium min-h-[44px]"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
