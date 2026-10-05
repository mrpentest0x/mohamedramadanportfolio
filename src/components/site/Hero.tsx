import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import portraitAsset from "@/assets/mohamed-ramadan.png.asset.json";

export function Hero() {
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
          <h1 className="text-4xl leading-[0.95] font-bold uppercase sm:text-6xl lg:text-7xl">
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
            className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary sm:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Cybersecurity Engineer
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            I&apos;m Mohamed Ramadan, a cybersecurity-focused professional exploring penetration
            testing, network security, and vulnerability assessment.
          </motion.p>

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
              mohamed-ramadan — profile
            </span>
          </div>
          <div className="relative mt-4 overflow-hidden rounded-lg border border-border">
            <img
              src={portraitAsset.url}
              alt="Portrait of Mohamed Ramadan"
              className="aspect-square w-full object-cover object-top"
              loading="eager"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, color-mix(in oklab, var(--background) 45%, transparent), transparent 40%)",
              }}
              aria-hidden="true"
            />
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3 font-mono text-[11px] tracking-widest text-muted-foreground">
            <span>$ whoami</span>
            <span className="text-primary">mohamed.ramadan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
