import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, MessageCircle } from "lucide-react";
import { navLinks, company } from "@/data/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`flex items-center justify-between gap-4 rounded-full border border-border/60 px-3 py-2 transition-all duration-300 ${
          scrolled ? "glass shadow-soft" : "bg-background/80 backdrop-blur-md"
        }`}>
          <button onClick={() => scrollTo("#home")} className="flex shrink-0 items-center gap-2 pl-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-sun shadow-gold">
              <Sun className="h-5 w-5 text-gold-foreground" strokeWidth={2.5} />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-ink">{company.name}</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-ink"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:bg-secondary"
            >
              <MessageCircle className="h-4 w-4 text-[color:var(--whatsapp)]" />
              WhatsApp
            </a>
            <button
              onClick={() => scrollTo("#consultation")}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink/90"
            >
              Get Free Consultation
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full bg-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-3xl border border-border bg-background p-4 shadow-elegant lg:hidden"
            >
              <div className="flex flex-col">
                {navLinks.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => scrollTo(l.href)}
                    className="rounded-xl px-4 py-3 text-left text-base font-medium hover:bg-secondary"
                  >
                    {l.label}
                  </button>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold"
                  >
                    <MessageCircle className="h-4 w-4 text-[color:var(--whatsapp)]" /> WhatsApp
                  </a>
                  <button
                    onClick={() => scrollTo("#consultation")}
                    className="rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white"
                  >
                    Free Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
