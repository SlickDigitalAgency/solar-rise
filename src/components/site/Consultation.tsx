import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { buildConsultationMessage, buildWhatsAppUrl, type ConsultationData } from "@/lib/whatsapp";
import { propertyTypes, contactTimes, services, images } from "@/data/site";

const initial: ConsultationData = {
  fullName: "", phone: "", email: "", propertyType: "", city: "",
  bill: "", service: "", contactTime: "", notes: "",
};

const required: (keyof ConsultationData)[] = ["fullName", "phone", "propertyType", "city", "service"];

export function Consultation() {
  const [data, setData] = useState<ConsultationData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationData, string>>>({});
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");

  const set = <K extends keyof ConsultationData>(k: K) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    required.forEach((k) => { if (!data[k]?.trim()) next[k] = "Required"; });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) next.email = "Invalid email";
    if (Object.keys(next).length) { setErrors(next); return; }

    setState("loading");
    const url = buildWhatsAppUrl(buildConsultationMessage(data));
    setTimeout(() => {
      window.open(url, "_blank", "noopener");
      setState("success");
      setTimeout(() => { setState("idle"); setData(initial); }, 4000);
    }, 700);
  };

  const field = "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:border-ink focus:outline-none focus:ring-2 focus:ring-ink/10 transition";

  return (
    <section id="consultation" className="bg-surface px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--whatsapp)]" />
              Free WhatsApp Consultation
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink text-balance sm:text-4xl lg:text-5xl">
              Get a custom solar plan, sent straight to WhatsApp.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tell us about your property and we'll prepare an engineering-led recommendation —
              with expected yield, savings, and an itemized quote. Zero obligation.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <img src={images.installation} alt="" className="h-44 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--whatsapp)] text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-display text-base font-semibold text-ink">Reply within 24 hours</div>
                    <div className="text-xs text-muted-foreground">A real solar engineer, not a chatbot.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-[2rem] border border-border bg-card p-6 shadow-elegant sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name *" error={errors.fullName}>
                <input className={field} value={data.fullName} onChange={set("fullName")} placeholder="Your full name" />
              </Field>
              <Field label="Phone Number *" error={errors.phone}>
                <input className={field} value={data.phone} onChange={set("phone")} placeholder="+92 300 1234567" />
              </Field>
              <Field label="Email Address" error={errors.email}>
                <input type="email" className={field} value={data.email} onChange={set("email")} placeholder="you@email.com" />
              </Field>
              <Field label="City *" error={errors.city}>
                <input className={field} value={data.city} onChange={set("city")} placeholder="Karachi" />
              </Field>
              <Field label="Property Type *" error={errors.propertyType}>
                <select className={field} value={data.propertyType} onChange={set("propertyType")}>
                  <option value="">Select type</option>
                  {propertyTypes.map((p) => <option key={p}>{p}</option>)}
                </select>
              </Field>
              <Field label="Monthly Electricity Bill">
                <input className={field} value={data.bill} onChange={set("bill")} placeholder="e.g. ₨ 35,000" />
              </Field>
              <Field label="Interested Service *" error={errors.service} full>
                <select className={field} value={data.service} onChange={set("service")}>
                  <option value="">Choose a service</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </Field>
              <Field label="Preferred Contact Time" full>
                <select className={field} value={data.contactTime} onChange={set("contactTime")}>
                  <option value="">Anytime</option>
                  {contactTimes.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Additional Notes" full>
                <textarea rows={4} className={field + " resize-none"} value={data.notes} onChange={set("notes")}
                  placeholder="Roof type, shading, goals, anything we should know..." />
              </Field>
            </div>

            <motion.button
              type="submit"
              disabled={state === "loading"}
              whileTap={{ scale: 0.98 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-4 font-semibold text-white shadow-elegant transition hover:opacity-95 disabled:opacity-70"
            >
              {state === "loading" && <><Loader2 className="h-5 w-5 animate-spin" /> Preparing your message...</>}
              {state === "success" && <><CheckCircle2 className="h-5 w-5" /> WhatsApp opened — check your tab!</>}
              {state === "idle" && <><MessageCircle className="h-5 w-5" /> Send via WhatsApp</>}
            </motion.button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              We open WhatsApp with your details pre-filled. No data is stored on our servers.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, full, children }: { label: string; error?: string; full?: boolean; children: React.ReactNode }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
