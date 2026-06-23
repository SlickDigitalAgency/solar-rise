import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Wallet, Leaf, TrendingUp, ShieldCheck, Sprout, PiggyBank,
  BadgeCheck, Cpu, Award, FileText, MapPin, Headphones, Plus, Minus, Phone, Mail, MapPinned, MessageCircle, Sun,
} from "lucide-react";
import { useState } from "react";
import { services, benefits, reasons, process, projects, testimonials, stats, faqs, company, navLinks, images } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wallet, Leaf, TrendingUp, ShieldCheck, Sprout, PiggyBank, BadgeCheck, Cpu, Award, FileText, MapPin, Headphones,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--leaf)]" />
      {children}
    </span>
  );
}

function Heading({ eyebrow, title, lead, align = "left" }: { eyebrow: string; title: string; lead?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>}
    </div>
  );
}

export function TrustBar() {
  const items = ["Certified Installers", "Tier-1 Panels", "25-Year Warranty", "Net-Metering Ready", "Lifetime Support"];
  return (
    <section className="border-y border-border bg-surface py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-sm font-medium text-muted-foreground">
        {items.map((i) => (
          <span key={i} className="inline-flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-[color:var(--leaf)]" />
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <Heading
            eyebrow="Our Services"
            title="End-to-end solar, engineered for your property"
            lead="From the first site visit to lifetime monitoring, we own the full lifecycle of your solar system."
          />
          <a
            href="#consultation"
            onClick={(e) => { e.preventDefault(); document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" }); }}
            className="hidden items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:bg-secondary md:inline-flex"
          >
            Request Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-ink shadow-soft">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#consultation"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:opacity-70"
                >
                  Request Consultation <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section id="benefits" className="bg-surface px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Heading
              eyebrow="Why Solar"
              title="The benefits compound, year after year"
              lead="Solar isn't just lower bills — it's energy ownership. Here's what you actually unlock."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((b, i) => {
                const Icon = iconMap[b.icon];
                return (
                  <motion.div
                    key={b.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-[color:var(--energy)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink">{b.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img src={images.family} alt="Happy family with solar-powered home" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-4 max-w-xs rounded-2xl border border-border bg-card p-5 shadow-elegant sm:-left-6"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sun text-gold-foreground shadow-gold">
                  <Sun className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="font-display text-2xl font-bold text-ink">90%</div>
                  <div className="text-xs text-muted-foreground">Average bill reduction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={images.assessment} alt="Solar engineer assessing rooftop" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="absolute -right-4 bottom-6 max-w-[14rem] rounded-2xl border border-border bg-card p-4 shadow-elegant sm:-right-6"
          >
            <div className="text-xs uppercase tracking-wide text-muted-foreground">Lifetime monitoring</div>
            <div className="mt-1 font-display text-lg font-bold text-ink">Real-time yield tracking from day one</div>
          </motion.div>
        </div>

        <div>
          <Heading
            eyebrow="Why SolarRise"
            title="Why homeowners choose our solar solutions"
            lead="We bring powerful, smart, and sustainable energy right to your rooftop with unmatched quality and care."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = iconMap[r.icon];
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--leaf)]/12 text-[color:var(--leaf)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-ink px-4 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              Our Process
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-5xl">
              From first call to clean power, in five steps
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/70">A predictable, transparent path. No surprises, no pressure, no fine print.</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {process.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
            >
              <div className="font-display text-5xl font-bold text-[color:var(--gold)]">{s.step}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Heading
          eyebrow="Recent Work"
          title="A portfolio of clean power, beautifully installed"
          lead="From hillside villas to logistics warehouses — every project engineered for maximum yield."
        />

        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${p.span}`}
            >
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-white/75">{p.type}</div>
                  <h3 className="mt-0.5 truncate font-display text-lg font-semibold">{p.title}</h3>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-surface px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <Heading eyebrow="Testimonials" title="What our customers say" lead="Real homeowners and businesses. Real numbers. Real reductions." />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div>
                <div className="font-display text-4xl leading-none text-[color:var(--gold)]">&ldquo;</div>
                <blockquote className="mt-2 text-base leading-relaxed text-ink">{t.quote}</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-sun font-display text-sm font-bold text-gold-foreground">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.location}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] bg-gradient-to-br from-ink to-[color:var(--energy)] p-8 text-white shadow-elegant sm:grid-cols-2 sm:p-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="border-white/10 [&:not(:last-child)]:border-b [&:not(:last-child)]:pb-6 sm:[&:not(:last-child)]:border-b-0 lg:[&:not(:last-child)]:border-r lg:[&:not(:last-child)]:pb-0 lg:[&:not(:last-child)]:pr-6"
          >
            <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
              {s.value}
              <span className="text-[color:var(--gold)]">{s.suffix}</span>
            </div>
            <div className="mt-2 text-sm text-white/75">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-4 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Heading eyebrow="FAQ" title="Answers to questions homeowners ask us most" lead="Still curious? Send us a WhatsApp message and a solar expert will reply personally." />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">{f.q}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-secondary text-ink">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-elegant">
          <div className="grid lg:grid-cols-[1.1fr_1fr]">
            <div className="relative hidden lg:block">
              <img src={images.cta} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-br from-ink/70 to-[color:var(--energy)]/70" />
              <div className="relative flex h-full flex-col justify-between p-10 text-white">
                <div>
                  <SectionLabel>Contact</SectionLabel>
                  <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-balance">
                    Ready to go solar? Let's start the conversation.
                  </h2>
                  <p className="mt-4 max-w-md text-white/80">
                    Make the switch to clean, cost-saving energy today. Our experts are here
                    to guide you every step of the way.
                  </p>
                </div>
                <a
                  href={buildWhatsAppUrl()} target="_blank" rel="noreferrer"
                  className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-4 font-semibold text-white shadow-elegant transition hover:opacity-95"
                >
                  <MessageCircle className="h-5 w-5" /> Contact Us On WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-1">
              {[
                { Icon: MapPinned, label: "Office", value: company.address },
                { Icon: Phone, label: "Phone", value: company.phone },
                { Icon: Mail, label: "Email", value: company.email },
                { Icon: MessageCircle, label: "WhatsApp", value: company.phone },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="bg-card p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-ink">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="mt-1 font-display text-base font-semibold text-ink">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const linkCols = [
    { title: "Services", items: services.slice(0, 5).map((s) => s.title) },
    { title: "Company", items: navLinks.map((l) => l.label) },
    { title: "Contact", items: [company.phone, company.email, "WhatsApp Support", company.address] },
  ];
  return (
    <footer className="bg-ink px-4 pb-10 pt-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-sun shadow-gold">
                <Sun className="h-6 w-6 text-gold-foreground" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl font-bold">{company.name}</span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              {company.full} designs and installs premium solar systems for homes and businesses
              that want energy freedom — without compromising on quality.
            </p>
            <a href={buildWhatsAppUrl()} target="_blank" rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-5 py-3 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {linkCols.map((c) => (
              <div key={c.title}>
                <div className="font-display text-sm font-semibold uppercase tracking-wider text-[color:var(--gold)]">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i} className="text-sm text-white/70 hover:text-white">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <div>© {new Date().getFullYear()} {company.full}. All rights reserved.</div>
          <div>{company.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
