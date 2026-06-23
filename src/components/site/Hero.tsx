import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Zap, Leaf } from "lucide-react";
import { images } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const floats = [
  { label: "Green Energy", icon: Leaf, pos: "top-[22%] right-[8%] md:top-[24%] md:right-[10%] lg:top-[20%] lg:right-[12%]", delay: 0.6 },
  { label: "SOL Bright", icon: Sparkles, pos: "top-[42%] left-[8%]", delay: 0.9 },
  { label: "80 kW Output", icon: Zap, pos: "top-[36%] right-[6%]", delay: 1.1 },
];

export function Hero() {
  return (
    <section id="home" className="relative px-3 pt-24 sm:px-4 lg:pt-28">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
        <img
          src={images.hero}
          alt="Modern home with rooftop solar panels at sunset"
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative flex min-h-[640px] flex-col justify-between p-6 sm:min-h-[720px] sm:p-10 lg:min-h-[780px] lg:p-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white mb-1 sm:mb-2 sm:text-sm lg:hidden">
              <span className="h-2 w-2 rounded-full bg-[color:var(--leaf)]" />
              Trusted by 500+ homes &amp; businesses
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] text-white text-balance sm:text-7xl lg:-mt-4 lg:text-[7.5rem]">
              Solar Solutions
            </h1>
          </motion.div>

          {/* Floating cards */}
          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {floats.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: f.delay, duration: 0.6 }}
                className={`pointer-events-auto absolute ${f.pos} inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm text-white shadow-soft`}
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15">
                  <f.icon className="h-3.5 w-3.5" />
                </span>
                {f.label}
              </motion.div>
            ))}
          </div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[1fr_auto_1fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="rounded-2xl glass-dark p-5 text-white sm:p-6"
            >
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                Take control of your energy needs with engineered solar systems designed
                around your home, your roof and your budget.
              </p>
              <a
                href="#consultation"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-white/90"
              >
                Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <div className="hidden lg:block" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="rounded-2xl glass-dark p-5 text-white sm:p-6 lg:ml-auto lg:max-w-md"
            >
              <div className="flex items-start gap-3">
                <img
                  src={images.cta}
                  alt=""
                  className="h-16 w-20 shrink-0 rounded-xl object-cover"
                  loading="lazy"
                />
                <p className="text-sm leading-relaxed text-white/90">
                  Solar energy is clean, renewable, and can dramatically reduce your
                  electricity bills — for decades.
                </p>
              </div>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stat bar */}
      <div className="mx-auto mt-6 grid max-w-[1400px] grid-cols-2 gap-3 px-1 sm:grid-cols-4">
        {[
          { v: "500+", l: "Projects" },
          { v: "10+", l: "Years" },
          { v: "12M+", l: "Saved (₨)" },
          { v: "98%", l: "Satisfaction" },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded-2xl border border-border bg-card px-5 py-4 shadow-soft"
          >
            <div className="font-display text-2xl font-bold text-ink sm:text-3xl">{s.v}</div>
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
