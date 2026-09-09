import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { profile } from "@/lib/portfolio-data";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Please add a subject").max(150),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const { name, email, subject, message } = parsed.data;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    toast.success("Opening your email app to send the message.");
  };

  const field =
    "w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

  return (
    <Section id="contact">
      <SectionHeading index="13" title="Contact" lead="Tell me what you're working on." />
      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-xl p-7">
            {(
              [
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                { id: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
              ] as const
            ).map((f) => (
              <div key={f.id}>
                <label
                  htmlFor={f.id}
                  className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  maxLength={255}
                  className={`${field} mt-2`}
                  aria-invalid={Boolean(errors[f.id])}
                />
                {errors[f.id] ? (
                  <p className="mt-2 text-xs text-destructive">{errors[f.id]}</p>
                ) : null}
              </div>
            ))}
            <div>
              <label
                htmlFor="message"
                className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Share the details of your project or question."
                className={`${field} mt-2 resize-y`}
                aria-invalid={Boolean(errors["message"])}
              />
              {errors["message"] ? (
                <p className="mt-2 text-xs text-destructive">{errors["message"]}</p>
              ) : null}
            </div>
            <button
              type="submit"
              className="glow-primary w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="card-hover glass flex items-center gap-4 rounded-xl p-5"
              >
                <Mail className="size-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <span className="text-sm">{profile.email}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="card-hover glass flex items-center gap-4 rounded-xl p-5"
              >
                <Phone className="size-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Phone
                  </span>
                  <span className="text-sm">{profile.phone}</span>
                </span>
              </a>
            </li>
            <li className="glass flex items-center gap-4 rounded-xl p-5">
              <MapPin className="size-5 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Location
                </span>
                <span className="text-sm">{profile.location}</span>
              </span>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="card-hover glass flex items-center gap-4 rounded-xl p-5"
              >
                <Linkedin className="size-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    LinkedIn
                  </span>
                  <span className="text-sm">{profile.linkedinLabel}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="card-hover glass flex items-center gap-4 rounded-xl p-5"
              >
                <Github className="size-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    GitHub
                  </span>
                  <span className="text-sm">{profile.githubLabel}</span>
                </span>
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
