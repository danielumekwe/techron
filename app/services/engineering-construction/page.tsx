import Link from "next/link";
import { ArrowRight, Building2, Wrench, HardHat, Ruler, ShieldCheck, Gauge, ChevronRight } from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const highlights = [
  {
    title: "Concept Design & FEED",
    description: "From feasibility studies to front-end engineering design, we shape practical, cost-effective execution plans.",
    icon: Ruler,
  },
  {
    title: "Fabrication & Installation",
    description: "Our team delivers mechanical, civil, and structural works with strong quality control and site coordination.",
    icon: Wrench,
  },
  {
    title: "Pipeline & Structural Works",
    description: "We support pipeline laying, steel structures, and industrial installations across demanding environments.",
    icon: Building2,
  },
  {
    title: "Safety-First Execution",
    description: "Every project is executed under strict HSE standards, with clear controls and reliable delivery frameworks.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  "Civil, mechanical and structural engineering",
  "Fabrication and installation support",
  "Project planning, execution and supervision",
  "Asset integrity and facility upgrades",
  "Specialized onshore and offshore delivery support",
];

export default function EngineeringConstructionPage() {
  return (
    <main className="bg-[#F7F9FC] text-[#0B1F3A]">
      <TopBar />
      <Navbar active="Services" />

      <section className="relative overflow-hidden bg-[#0B1F3A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,168,0,0.2),_transparent_40%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 lg:px-8 lg:py-28">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#F5A800] backdrop-blur-sm">
            <HardHat className="h-4 w-4" />
            Engineering & Construction
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Building resilient infrastructure with engineering precision.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Techron delivers integrated engineering and construction solutions for industrial, marine, and energy projects with a strong focus on safety, quality, and performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white"
                >
                  Request a Consultation
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
                  <Gauge className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">Delivery Focus</p>
                  <p className="text-xl font-bold">Safe. Efficient. Scalable.</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Engineering Construction</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              We deliver complex engineering and construction solutions with clarity, control, and long-term reliability.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#0B1F3A]/70">
              Our engineering and construction capability spans the full project lifecycle, from early-stage planning and design support to fabrication, installation, and final delivery. We work closely with clients to align technical execution with operational goals, ensuring every project is delivered with strong governance, consistency, and measurable performance.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/70">
              Whether supporting infrastructure upgrades, industrial installations, or large-scale field developments, we bring a practical, safety-led approach that helps reduce risk, improve efficiency, and support sustainable project outcomes across demanding environments.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#E6EAF2] bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-4">
              <div className="flex h-full min-h-[280px] items-center justify-center overflow-hidden rounded-[24px] border border-[#E6EAF2] bg-[#F7F9FC] p-2">
                <img
                  src="/images/service1.png"
                  alt="Engineering and construction project work"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
              <div className="flex h-[180px] items-center justify-center overflow-hidden rounded-[24px] border border-[#E6EAF2] bg-[#F7F9FC] p-2">
                <img
                  src="/images/service2.png"
                  alt="Engineering and construction facility work"
                  className="h-full w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Our Expertise</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Integrated engineering delivery from concept to completion.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/70">
            We support clients with dependable engineering and construction services tailored to complex industrial environments, combining technical depth with disciplined execution.
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
                Strong technical execution, dependable project leadership.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                We bring together planning, field experience, and disciplined execution to support projects that demand precision, reliability, and timely delivery.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A800] text-[#0B1F3A]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Committed to quality and HSE</h3>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    From initial planning to site execution, every phase is managed with strict quality, safety, and compliance controls.
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
