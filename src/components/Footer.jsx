import { useState } from "react";
import { Email, LinkedIn, GitHub, Send, CheckCircle } from "@mui/icons-material";
import { personalInfo } from "../data/portfolio";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactLinks = [
    {
      icon: Email,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: LinkedIn,
      label: "LinkedIn",
      value: "kumarankit1218",
      href: personalInfo.social.linkedin,
    },
    {
      icon: GitHub,
      label: "GitHub",
      value: "ankitkumar910",
      href: personalInfo.social.github,
    },
  ];

  const inputClasses =
    "w-full border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:outline-none";

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12 text-center">
          <p className="section-tag">Get in touch</p>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group border border-[var(--line)] bg-[var(--paper)] p-5 transition-colors hover:border-[var(--accent)]"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--accent)]">
                  <Icon fontSize="small" />
                </div>
                <div className="text-sm font-medium text-[var(--text)]">{label}</div>
                <div className="mt-1 break-all text-xs text-[var(--muted)]">{value}</div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border border-[var(--line)] bg-[var(--paper)] p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-[var(--muted)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-[var(--muted)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-[var(--muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition-colors hover:opacity-90"
              >
                {submitted ? (
                  <>
                    <CheckCircle fontSize="small" />
                    Opening email client...
                  </>
                ) : (
                  <>
                    <Send fontSize="small" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
