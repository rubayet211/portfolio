import ContactForm from "@/components/ContactForm";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Rhyme Rubayet about engineering roles, freelance product work, or technical collaboration.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="container-shell">
        <ContactForm />
      </div>
    </div>
  );
}
