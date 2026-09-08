import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

const title = "Thank You — Mohamed Ramadan, Cybersecurity Engineer";
const description =
  "Thank you for reviewing the cybersecurity portfolio of Mohamed Ramadan Mohamed Sayed.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-24 text-center">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl">
        <p className="eyebrow">14 — Closing</p>
        <h1 className="mt-6 text-4xl font-bold uppercase leading-tight sm:text-6xl">
          Thank you for your time.
        </h1>
        <p className="mx-auto mt-7 max-w-xl font-display text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Every system has weaknesses. The goal is to understand them before they become a problem.
        </p>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-lg font-semibold">{profile.name}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {profile.title}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="size-4" /> Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-border px-4 py-2.5 text-sm font-medium text-muted-foreground">
            <Github className="size-4" /> {profile.githubLabel}
          </span>
        </div>

        <Link
          to="/"
          className="mt-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-primary hover:underline"
        >
          <ArrowLeft className="size-4" /> Back to portfolio
        </Link>
      </div>
    </main>
  );
}
