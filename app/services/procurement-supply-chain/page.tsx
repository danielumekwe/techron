import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  Truck,
  Globe2,
  PackageCheck,
  ShieldCheck,
  ChevronRight,
  Warehouse,
} from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const highlights = [
  {
    title: "Strategic Sourcing",
    description: "We source critical equipment, spare parts, and materials from trusted global and regional suppliers with strong quality oversight.",
    icon: ShoppingCart,
  },
  {
    title: "Logistics & Delivery",
    description: "Our team coordinates timely shipment, customs handling, and project-site delivery for even the most demanding schedules.",
    icon: Truck,
  },
  {
    title: "Vendor Management",
    description: "We manage supplier qualification, negotiations, documentation, and performance tracking to protect project reliability.",
    icon: Warehouse,
  },
  {
    title: "Integrity & Compliance",
    description: "Every procurement workflow is backed by quality assurance, traceability, and HSE-focused controls.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  "Oilfield equipment, valves, pumps, and piping systems",
  "Industrial materials, consumables, and specialist spares",
  "Import coordination, logistics support, and delivery planning",
  "Supplier evaluation, contract compliance, and inventory control",
  "Project-ready procurement for onshore and offshore operations",
];

export default function ProcurementSupplyChainPage() {
  return (
    <main className="bg-[#F7F9FC] text-[#0B1F3A]">
      <TopBar />
      <Navbar active="Services" />

      <section className="relative overflow-hidden bg-[#0B1F3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,168,0,0.2),_transparent_40%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 lg:px-8 lg:py-28">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#F5A800] backdrop-blur-sm">
            <ShoppingCart className="h-4 w-4" />
            Procurement & Supply Chain
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Reliable sourcing and supply chain execution for complex industrial projects.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Techron supports clients with dependable procurement strategies, supplier management, and efficient delivery of critical assets across oil and gas, marine, infrastructure, and industrial sectors.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white"
                >
                  Request Procurement Support
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F5A800] hover:text-[#F5A800]"
                >
                  View Other Services
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800] text-[#0B1F3A]">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">Supply Focus</p>
                  <p className="text-xl font-bold">Fast. Traceable. Project-ready.</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#F5A800]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Procurement & Supply Chain</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              We connect projects with the right equipment, materials, and delivery support at the right time.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#0B1F3A]/70">
              Our procurement team brings together sourcing expertise, supplier networks, and logistics coordination to support critical operations with speed and accountability. From specialty equipment to routine industrial items, we help clients secure what they need while keeping quality and delivery risk under control.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/70">
              We work closely with clients to understand project timelines, technical requirements, and commercial priorities so each procurement decision supports both operational performance and long-term value.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#E6EAF2] bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4">
              <div className="flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-[24px] border border-[#E6EAF2] bg-[#F7F9FC] p-2">
                <img
                  src="/images/service1.png"
                  alt="Procurement and supply chain delivery operations"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
              <div className="flex h-[180px] items-center justify-center overflow-hidden rounded-[24px] border border-[#E6EAF2] bg-[#F7F9FC] p-2">
                <img
                  src="/images/service2.png"
                  alt="Industrial equipment supply and logistics"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">How We Support Clients</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Procurement excellence designed for reliability, speed, and accountability.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/70">
            From initial sourcing to final delivery, we bring discipline and responsiveness to the supply chain so operations stay on track.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-3xl border border-[#E6EAF2] bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-[#F5A800]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#0B1F3A]/70">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[32px] bg-[#0B1F3A] px-8 py-10 text-white shadow-2xl sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Why Clients Choose Us</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Strong sourcing capabilities with practical execution support.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                We combine market insight, supplier discipline, and responsive logistics coordination to keep projects moving with confidence.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A800] text-[#0B1F3A]">
                  <PackageCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Quality-controlled supply delivery</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    Every shipment is managed with clear documentation, vendor oversight, and a focus on dependable project outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
