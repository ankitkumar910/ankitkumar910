import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import { personalInfo } from "../data/portfolio";

function Contact() {
  const contactLinks = [
    { icon: Email, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "#d44638", style: "email" },
    { icon: LinkedIn, label: "LinkedIn", value: "kumarankit1218", href: personalInfo.social.linkedin, color: "#0a66c2", style: "linkedin" },
    { icon: GitHub, label: "GitHub", value: "ankitkumar910", href: personalInfo.social.github, color: "#8b5cf6", style: "github" },
  ];

  return (
    <section id="contact" className="bg-[var(--bg-alt)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="mb-12">
          <p className="section-tag">Get in touch</p>
          <h2 className="section-title">Contact</h2>
        </div>
        <div className="grid max-w-2xl content-start gap-3">
          {contactLinks.map(({ icon: Icon, label, value, href, color, style }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`contact-social-link ${style} flex items-center gap-4 border-b border-[var(--line)] py-4 transition-colors hover:text-[var(--accent)]`}
            >
              <span className="contact-social-icon">
                <Icon fontSize="small" style={{ color }} />
              </span>
              <span className="min-w-20 text-base font-medium">{label}</span>
              <span className="break-all text-base text-[var(--muted)]">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
