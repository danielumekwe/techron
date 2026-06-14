"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  Users,
  Star,
  TrendingUp,
  Award,
  Globe,
} from "lucide-react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function PageHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,168,0,0.2),_transparent_45%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 lg:px-8 lg:py-28">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#F5A800] backdrop-blur-sm">
          <Shield className="h-4 w-4" />
          About Techron Integrated Services
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Delivering excellence across engineering, energy, and infrastructure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Techron Integrated Services is a fully indigenous, multi-disciplinary company
              committed to safe, efficient, and future-ready solutions for clients in the oil
              and gas, marine, construction, and infrastructure sectors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F5A800] hover:text-[#F5A800]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800] text-[#0B1F3A]">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">Our Standard</p>
                <p className="text-xl font-bold">Safe. Reliable. Future-ready.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Integrated EPCIC, IMR and subsea support",
                "Strong HSE culture and operational discipline",
                "Local content development with global standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F5A800]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const capabilities = [
    "Oil & Gas Sector",
    "Marine Industry",
    "Construction",
    "Infrastructure",
    "Upstream Projects",
    "Downstream Projects",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <FadeIn delay={0.1}>
          <div className="rounded-[32px] border border-[#E6EAF2] bg-white p-4 shadow-sm sm:p-5">
            <div className="overflow-hidden rounded-[24px]">
              <div
                className="h-[420px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1581092921461-7031e4f1adfe?w=900&q=75)",
                }}
              />
            </div>
            <div className="mt-5 rounded-[24px] border border-[#F5A800]/20 bg-[#F5A800]/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">Experience</p>
              <p className="mt-2 text-3xl font-black text-[#0B1F3A]">10+ years</p>
              <p className="mt-2 text-sm leading-7 text-[#0B1F3A]/70">
                Supporting complex projects with strong technical depth, disciplined delivery, and dependable leadership.
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeUp delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Who We Are</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              A fully indigenous company built on expertise, discipline, and reliable delivery.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#0B1F3A]/70">
              Techron Integrated Services is a fully indigenous, multi-disciplinary company with a strategic focus on providing world-class services to clients in the oil and gas, marine, construction, and infrastructure industries.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/70">
              From engineering and procurement to construction, installation, maintenance, and manpower development, our teams deliver highly specialized solutions that meet the complex demands of today&apos;s energy and engineering sectors.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-[#E6EAF2] bg-[#F7F9FC] px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F5A800]" />
                  <span className="text-sm text-[#0B1F3A]/75">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "80+", label: "Satisfied Clients" },
    { value: "150+", label: "Finished Projects" },
    { value: "120+", label: "Employees Nationwide" },
  ];

  return (
    <section className="bg-[#F7F9FC] px-6 py-4">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {stats.map((item, index) => (
          <FadeUp key={item.label} delay={index * 0.08}>
            <div className="rounded-[24px] border border-[#E6EAF2] bg-white p-6 text-center shadow-sm">
              <p className="text-3xl font-black text-[#0B1F3A]">{item.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0B1F3A]/60">
                {item.label}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function VisionMissionValues() {
  const cards = [
    {
      title: "Our Vision",
      body: "To be the most preferred and trusted partner for innovative, cost-efficient solutions in the oil and gas industry — promoting sustainability, efficiency, and delivering a complete portfolio of onshore and offshore assets integrity solutions across Nigeria and the West African sub-region.",
      icon: Eye,
      accent: "bg-[#0B1F3A] text-white",
      border: "border-[#0B1F3A]",
    },
    {
      title: "Our Mission",
      body: "To provide value through the deployment of innovative, cost-efficient Engineering, Procurement, Construction, Installation and Commissioning (EPCIC), Inspection, Maintenance and Repairs (IMR), and Subsea services — delivering quality with top-notch leadership to achieve every client goal.",
      icon: Target,
      accent: "bg-[#F5A800] text-[#0B1F3A]",
      border: "border-[#F5A800]",
    },
    {
      title: "Values & Ethics",
      body: "Excellence in every deliverable, integrity and transparency, innovation and continuous improvement, safety through a zero-harm culture, and respect for people and the planet.",
      icon: Heart,
      accent: "bg-white text-[#0B1F3A]",
      border: "border-[#E6EAF2]",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <FadeUp className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Our Foundation</p>
        <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
          Vision, Mission &amp; <span className="text-[#F5A800]">Values</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
          Our direction is shaped by a clear purpose, disciplined delivery, and a commitment to doing work that matters.
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <FadeUp key={card.title} delay={index * 0.08}>
              <div className={`h-full rounded-[28px] border p-8 shadow-sm ${card.border} ${card.accent}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1F3A]/10 text-[#F5A800]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold">{card.title}</h3>
                <p className="mt-4 text-base leading-7 opacity-80">{card.body}</p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

function CorePillars() {
  const pillars = [
    {
      icon: Shield,
      title: "Health, Safety & Environment",
      body: "Our HSE-first culture is non-negotiable. Every project, task, and decision is made with the safety of our team, clients, and the environment as the primary consideration.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      body: "We adhere to international standards and industry best practices, ensuring every deliverable meets or exceeds client expectations for technical quality and compliance.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      body: "By leveraging modern digital workflows, cutting-edge engineering tools, and industry innovations, we consistently improve service delivery and offer solutions that keep our clients competitive.",
    },
    {
      icon: Globe,
      title: "Local Content & Sustainability",
      body: "As a fully indigenous company, we are committed to growing local capacity, developing Nigerian talent, and delivering solutions that contribute positively to the communities we serve.",
    },
    {
      icon: Users,
      title: "People & Expertise",
      body: "Our team comprises seasoned professionals with decades of combined experience across engineering, procurement, construction, marine logistics, and oilfield operations.",
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence",
      body: "Our project management systems and skilled workforce enable on-schedule delivery without compromising quality — protecting our clients&apos; time and investment at every stage.",
    },
  ];

  return (
    <section className="bg-[#F7F9FC] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">What Drives Us</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Our Core <span className="text-[#F5A800]">Pillars</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
            Every engagement is shaped by a clear set of principles that guide our work and strengthen our partnerships.
          </p>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <FadeUp key={pillar.title} delay={index * 0.06}>
                <div className="rounded-[28px] border border-[#E6EAF2] bg-white p-8 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-[#F5A800]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-[#0B1F3A]">{pillar.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#0B1F3A]/70">{pillar.body}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const reasons = [
    "Proven industry expertise across complex engineering and energy projects",
    "End-to-end solutions that reduce handoff friction and improve efficiency",
    "A firm commitment to quality, safety, and compliance",
    "Client-first delivery with transparent communication and dependable execution",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[36px] bg-[#0B1F3A] px-8 py-10 text-white shadow-2xl sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              The confidence to deliver challenging work with clarity and consistency.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Techron brings together technical depth, disciplined execution, and a strong local presence to support clients through every stage of delivery.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A800] text-[#0B1F3A]">
                    <Star className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-7 text-white/80">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectorsWeServe() {
  const sectors = [
    {
      title: "Oil & Gas",
      desc: "Upstream, midstream, and downstream operations across Nigeria and the West African sub-region.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=70",
    },
    {
      title: "Marine",
      desc: "Offshore installations, vessel logistics, subsea services, and marine construction support.",
      img: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=600&q=70",
    },
    {
      title: "Construction",
      desc: "Civil works, structural steelworks, fabrication, and facility build-out from foundation to commissioning.",
      img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=70",
    },
    {
      title: "Infrastructure",
      desc: "Roads, utilities, power systems, and public infrastructure delivery for government and private clients.",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <FadeUp className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Industries</p>
        <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
          Sectors We <span className="text-[#F5A800]">Serve</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
          Our capabilities span the sectors that demand the most discipline, resilience, and technical precision.
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {sectors.map((sector, index) => (
          <FadeUp key={sector.title} delay={index * 0.08}>
            <div className="group overflow-hidden rounded-[28px] border border-[#E6EAF2] bg-white shadow-sm">
              <div
                className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${sector.img})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1F3A]">{sector.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#0B1F3A]/70">{sector.desc}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="bg-[#F7F9FC] py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <FadeUp delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Our Commitment</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              Your trusted partner for <span className="text-[#F5A800]">long-term value</span>.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#0B1F3A]/70">
              Techron Integrated Services is your trusted partner for delivering innovative, efficient, and high-quality solutions across engineering, oil and gas, marine, and infrastructure sectors.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/70">
              With a client-focused approach and a team of seasoned professionals, we consistently exceed expectations through timely delivery, technical expertise, and unwavering integrity.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Excellence', 'Integrity', 'Innovation'].map((word) => (
                <div key={word} className="flex items-center gap-2 rounded-full border border-[#F5A800]/30 bg-[#F5A800]/10 px-4 py-2">
                  <Star className="h-3.5 w-3.5 text-[#F5A800]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B1F3A]">{word}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>

        <FadeIn delay={0.2}>
          <div className="grid h-[430px] grid-cols-2 gap-3">
            <div
              className="row-span-2 rounded-[28px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=75)",
              }}
            />
            <div
              className="rounded-[28px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1581092921461-7031e4f1adfe?w=700&q=75)",
              }}
            />
            <div
              className="rounded-[28px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=75)",
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
      <div className="rounded-[36px] bg-[#0B1F3A] px-8 py-10 text-white shadow-2xl sm:px-10 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Ready to Work With Us?</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Let&apos;s build the next phase of your project with confidence.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Whether you have a project in mind or want to learn more about our capabilities, our team is ready to provide tailored support.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F5A800] hover:text-[#F5A800]"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="bg-[#F7F9FC] text-[#0B1F3A]">
      <TopBar />
      <Navbar active="About Us" />
      <PageHero />
      <WhoWeAre />
      <StatsBar />
      <VisionMissionValues />
      <CorePillars />
      <WhyChooseUs />
      <SectorsWeServe />
      <Commitment />
      <CTABanner />
      <Footer />
    </main>
  );
}
