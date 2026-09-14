import { motion } from "motion/react";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { CV_URL, profile } from "@/lib/portfolio-data";

const nodes = [
  { x: 18, y: 22 },
  { x: 52, y: 12 },
  { x: 84, y: 28 },
  { x: 30, y: 55 },
  { x: 66, y: 48 },
  { x: 46, y: 80 },
  { x: 86, y: 70 },
  { x: 12, y: 78 },
];
const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [1, 4],
  [4, 6],
  [3, 5],
  [5, 6],
  [3, 7],
  [5, 7],
  [2, 6],
];

function NetworkVisual() {
  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Abstract network graph">
      {links.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a]!.x}
          y1={nodes[a]!.y}
          x2={nodes[b]!.x}
          y2={nodes[b]!.y}
          stroke="currentColor"
          strokeWidth="0.25"
          className="text-primary/40"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={i % 3 === 0 ? 5 : 3.5}
            className="fill-primary/10 stroke-primary/50"
            strokeWidth="0.3"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [1, 1.12, 1], opacity: 1 }}
            transition={{
              scale: { duration: 3.6, repeat: Infinity, delay: i * 0.4 },
              opacity: { duration: 0.6, delay: 0.2 + i * 0.06 },
            }}
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <circle cx={n.x} cy={n.y} r="1" className="fill-primary" />
        </g>
      ))}
      <motion.circle
        r="1.6"
        className="fill-cyan"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        style={{ offsetPath: "none" }}
        cx={nodes[4]!.x}
        cy={nodes[4]!.y}
      />
    </svg>
  );
}

export function Hero() {
  const tags = ["Cybersecurity Engineer", "Penetration Testing", "Network Security"];
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--primary), transparent)" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.location} · Available for security work
          </motion.p>

          <h1 className="mt-6 text-4xl leading-[0.95] font-bold uppercase sm:text-6xl lg:text-7xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              Mohamed <span className="text-primary">Ramadan</span>
            </motion.span>
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I&apos;m Mohamed Ramadan, a cybersecurity-focused professional exploring penetration
            testing, network security, and vulnerability assessment.
          </motion.p>

          <motion.ul
            className="mt-7 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
              >
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a
              href="#projects"
              className="glow-primary inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore My Work <ArrowRight className="size-4" />
            </a>
            <a
              href={CV_URL}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="size-4" /> Download CV
            </a>
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-md border border-border p-3 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="rounded-md border border-border p-3 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="glass relative rounded-xl p-4"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 border-b border-border pb-3">
            <span className="size-2.5 rounded-full bg-primary/70" />
            <span className="size-2.5 rounded-full bg-cyan/60" />
            <span className="size-2.5 rounded-full bg-muted-foreground/40" />
            <span className="ml-2 font-mono text-[11px] tracking-widest text-muted-foreground">
              attack-surface — map
            </span>
          </div>
          <div className="aspect-square">
            <NetworkVisual />
          </div>
          <pre className="overflow-x-auto border-t border-border pt-3 font-mono text-[11px] leading-relaxed text-muted-foreground">
            <code>
              {`$ nmap -sV lab.internal
[+] mapping hosts and services
[+] enumerating exposed surface
[*] documenting findings`}
            </code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}
