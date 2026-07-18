import { useState } from "react";
import { Email, LinkedIn, Phone, GitHub, Send, CheckCircle } from "@mui/icons-material";
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
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:+91${personalInfo.phone}`,
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
    "w-full px-4 py-3 rounded-xl border border-amber-200 dark:border-amber-800/40 bg-white dark:bg-[#1a1814] text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-amber-500 ubuntu-regular text-sm transition-colors";

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 bg-white dark:bg-[#242019] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="ubuntu-regular text-amber-600 dark:text-amber-400 text-sm tracking-widest uppercase mb-2">
            Get in touch
          </p>
          <h2 className="stack-sans-headline-500 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Contact Me
          </h2>
          <p className="noto-serif-oriya-400 text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto">
            Have a project in mind or want to connect? I&apos;d love to hear from
            you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center justify-center gap-2 p-6 border border-amber-200 dark:border-amber-800/40 rounded-2xl hover:border-amber-500 dark:hover:border-amber-600 hover:bg-[#F8F1E4] dark:hover:bg-[#1a1814] transition-all duration-200 group"
              >
                <Icon className="text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="ubuntu-medium text-sm text-gray-900 dark:text-gray-100">
                  {label}
                </span>
                <span className="ubuntu-regular text-xs text-gray-500 dark:text-gray-400 text-center break-all">
                  {value}
                </span>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-[#F8F1E4] dark:bg-[#1a1814] rounded-2xl p-6 sm:p-8 border border-amber-100 dark:border-amber-900/40"
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="ubuntu-regular text-sm text-gray-700 dark:text-gray-300 block mb-1"
                >
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
                <label
                  htmlFor="email"
                  className="ubuntu-regular text-sm text-gray-700 dark:text-gray-300 block mb-1"
                >
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
                <label
                  htmlFor="message"
                  className="ubuntu-regular text-sm text-gray-700 dark:text-gray-300 block mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl transition-colors ubuntu-medium"
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
