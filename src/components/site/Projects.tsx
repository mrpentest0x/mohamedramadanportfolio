import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./Reveal";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="projects">
      <SectionHeading
        index="07"
        title="Projects"
        lead="Lab work, done end to end: scope, tooling, execution, and documentation."
      />
      <div className="mt-10 space-y-4">
        {projects.map((p, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={p.title} delay={i * 0.04}>
              <article className="glass overflow-hidden rounded-xl">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 p-6 text-left transition-colors hover:bg-primary/5 sm:p-7"
                >
                  <span className="font-mono text-xs tracking-widest text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <h3 className="text-lg font-semibold sm:text-2xl">{p.title}</h3>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {p.overview}
                    </span>
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-8 border-t border-border p-6 sm:p-7 lg:grid-cols-2">
                        <div className="space-y-6">
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                              Objective
                            </p>
                            <p className="mt-2 leading-relaxed text-foreground/85">{p.objective}</p>
                          </div>
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                              What I did
                            </p>
                            <ul className="mt-3 space-y-2">
                              {p.did.map((d) => (
                                <li
                                  key={d}
                                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                                >
                                  <span
                                    className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan"
                                    aria-hidden="true"
                                  />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                              Technologies
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {p.tech.map((t) => (
                                <li
                                  key={t}
                                  className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                              Skills demonstrated
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {p.skills.map((t) => (
                                <li
                                  key={t}
                                  className="rounded-full border border-cyan/30 bg-cyan/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan"
                                >
                                  {t}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="group/gh inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/20 hover:shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--primary)_60%,transparent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <Github className="size-4" aria-hidden="true" />
                            View on GitHub
                            <ExternalLink
                              className="size-3.5 transition-transform duration-300 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
