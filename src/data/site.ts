import hero from "@/assets/hero-solar.jpg";
import installation from "@/assets/installation.jpg";
import commercial from "@/assets/commercial.jpg";
import battery from "@/assets/battery.jpg";
import farm from "@/assets/solar-farm.jpg";
import family from "@/assets/family.jpg";
import assessment from "@/assets/assessment.jpg";
import villa from "@/assets/villa.jpg";
import panels from "@/assets/panels-closeup.jpg";
import cta from "@/assets/cta-banner.jpg";

export const images = { hero, installation, commercial, battery, farm, family, assessment, villa, panels, cta };

export const company = {
  name: "SolarRise",
  full: "SolarRise Energy Solutions",
  tagline: "Power Your Future With Clean Energy",
  phone: "+92 347 2788527",
  whatsapp: "923472788527",
  email: "info@solarrise.energy",
  address: "Sector 24, Energy Park, Karachi, Pakistan",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Benefits", href: "#benefits" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Residential Solar Installation",
    description: "Custom-designed rooftop systems engineered for your home's energy profile and architecture.",
    benefits: ["Up to 90% lower bills", "25-year panel warranty", "Tier-1 mono panels"],
    image: installation,
  },
  {
    title: "Commercial Solar Installation",
    description: "Industrial-grade installations that reduce operating costs and reinforce your sustainability story.",
    benefits: ["Faster payback period", "Bulk pricing", "Net-metering ready"],
    image: commercial,
  },
  {
    title: "Solar Site Assessment",
    description: "Engineering-led property audits with shading, load and orientation analysis before you commit.",
    benefits: ["Free 60-min audit", "Detailed PDF report", "No-obligation quote"],
    image: assessment,
  },
  {
    title: "Solar Battery Storage",
    description: "Modern lithium battery systems that keep the lights on during outages and peak tariffs.",
    benefits: ["Backup power", "Smart app monitoring", "Modular capacity"],
    image: battery,
  },
  {
    title: "Solar Maintenance",
    description: "Quarterly performance servicing, panel cleaning and inverter health checks.",
    benefits: ["10-yr service plan", "Yield optimization", "Priority support"],
    image: panels,
  },
  {
    title: "Energy Efficiency Consultation",
    description: "Reduce demand before generation. We audit your loads and recommend low-cost wins.",
    benefits: ["Load profiling", "LED & HVAC review", "ROI roadmap"],
    image: villa,
  },
  {
    title: "Solar Expansion Planning",
    description: "Grow your array as your needs scale, without overpaying for hardware you don't need yet.",
    benefits: ["Future-proof design", "Hybrid-ready", "Phased rollout"],
    image: farm,
  },
  {
    title: "System Upgrades",
    description: "Boost legacy systems with modern inverters, optimizers and monitoring.",
    benefits: ["Higher yield", "Real-time data", "Warranty extension"],
    image: family,
  },
];

export const benefits = [
  { title: "Lower Energy Costs", desc: "Cut your monthly electricity bill by up to 90% with the right solar design.", icon: "Wallet" },
  { title: "Sustainable Living", desc: "Power your life with clean energy that respects the planet you live on.", icon: "Leaf" },
  { title: "Property Value", desc: "Solar-equipped homes sell faster and at a measurable premium.", icon: "TrendingUp" },
  { title: "Energy Independence", desc: "Stay powered through outages and decouple from rising tariffs.", icon: "ShieldCheck" },
  { title: "Lower Carbon Footprint", desc: "A typical 6kW system offsets ~7 tons of CO₂ each year.", icon: "Sprout" },
  { title: "Long-Term Savings", desc: "25+ year warranties turn your roof into a compounding asset.", icon: "PiggyBank" },
];

export const reasons = [
  { title: "Certified Installers", desc: "NABCEP-equivalent certified technicians on every project.", icon: "BadgeCheck" },
  { title: "Premium Equipment", desc: "Only Tier-1 panels, hybrid inverters and LFP batteries.", icon: "Cpu" },
  { title: "10+ Years Experience", desc: "Over a decade designing systems across 4 climate zones.", icon: "Award" },
  { title: "Transparent Pricing", desc: "Itemized quotes — no hidden fees, no surprise add-ons.", icon: "FileText" },
  { title: "Local Expertise", desc: "We know your grid, your weather and your regulators.", icon: "MapPin" },
  { title: "Ongoing Support", desc: "Real humans, monitored systems, lifetime customer line.", icon: "Headphones" },
];

export const process = [
  { step: "01", title: "Free Consultation", desc: "We start with a conversation — your goals, your bills, your roof." },
  { step: "02", title: "Property Assessment", desc: "On-site engineering audit of structure, shading and electrical." },
  { step: "03", title: "Custom Solar Design", desc: "A made-for-you system with simulated yield and savings model." },
  { step: "04", title: "Professional Installation", desc: "Certified crews complete most homes in 1–3 days, safely." },
  { step: "05", title: "Activation & Support", desc: "We commission, train and monitor — for the life of the system." },
];

export const projects = [
  { title: "Hillside Villa", type: "Residential — 12kW", image: villa, span: "md:row-span-2" },
  { title: "Tech Park HQ", type: "Commercial — 240kW", image: commercial, span: "" },
  { title: "Coastal Retreat", type: "Residential — 8kW", image: hero, span: "" },
  { title: "Logistics Warehouse", type: "Commercial — 500kW", image: farm, span: "md:col-span-2" },
  { title: "Family Bungalow", type: "Residential + Battery", image: family, span: "" },
  { title: "Boutique Office", type: "Commercial — 60kW", image: panels, span: "" },
];

export const testimonials = [
  {
    name: "David R.", role: "Small Business Owner", location: "Lahore",
    quote: "Our warehouse bill dropped 78% in the first month. SolarRise handled the paperwork, the install, even the net-metering. Effortless.",
  },
  {
    name: "Jane D.", role: "Homeowner", location: "Karachi",
    quote: "Switching to solar was the best decision we made for our home. The savings are real, the service was flawless, and the app is genuinely useful.",
  },
  {
    name: "Amira K.", role: "Eco Enthusiast", location: "Islamabad",
    quote: "I interviewed four installers. SolarRise was the only team that engineered, not just quoted. They earned every star.",
  },
  {
    name: "Bilal M.", role: "Restaurant Owner", location: "Multan",
    quote: "Zero downtime during install, and our backup battery kept the freezers running through three outages this summer alone.",
  },
];

export const stats = [
  { value: 500, suffix: "+", label: "Installations Delivered" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Customer Satisfaction" },
  { value: 12, suffix: "M+", label: "Saved in Energy Costs (₨)" },
];

export const faqs = [
  { q: "How much can solar actually save me?", a: "Most homeowners see 70–90% reductions in their monthly bill. We model your exact savings during the free consultation, based on your real usage and tariff." },
  { q: "How long does installation take?", a: "Residential systems are usually fully installed in 1 to 3 days. Commercial projects depend on size but we provide a firm schedule before signing." },
  { q: "Do I need batteries to go solar?", a: "Not necessarily. Grid-tied systems work great without batteries via net-metering. Batteries are essential if you want backup power during outages." },
  { q: "What maintenance is required?", a: "Very little — a panel rinse twice a year and an annual inverter check. Our maintenance plan covers everything for total peace of mind." },
  { q: "How do I get started?", a: "Send us your details via WhatsApp or the form below. A solar expert will reach out within 24 hours to schedule your free consultation." },
];

export const propertyTypes = ["Residential", "Commercial", "Industrial"];
export const contactTimes = ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 7 PM)", "Anytime"];
