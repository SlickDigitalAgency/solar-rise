import { company } from "@/data/site";

export type ConsultationData = {
  fullName: string;
  phone: string;
  email: string;
  propertyType: string;
  city: string;
  bill: string;
  service: string;
  contactTime: string;
  notes: string;
};

export function buildConsultationMessage(d: Partial<ConsultationData>) {
  return `Hello ${company.full},

I would like to request a solar consultation.

Name: ${d.fullName ?? ""}
Phone: ${d.phone ?? ""}
Email: ${d.email ?? ""}

Property Type: ${d.propertyType ?? ""}
City: ${d.city ?? ""}

Interested Service:
${d.service ?? ""}

Monthly Electricity Bill:
${d.bill ?? ""}

Preferred Contact Time:
${d.contactTime ?? ""}

Additional Notes:
${d.notes ?? "—"}

Please contact me regarding a solar solution.

Thank you.`;
}

export function buildWhatsAppUrl(message?: string) {
  const text = message ?? `Hello ${company.full}, I'd like to learn more about going solar.`;
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}
