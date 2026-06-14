"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock,
  ChevronLeft, ChevronRight, Menu, X,
  ArrowRight, CheckCircle2,
  Wrench, ShoppingCart, Settings, Anchor, Users,
  Send,
} from "lucide-react";
import { SERVICE_LINKS } from "@/components/layout/serviceLinks";

// ─── Social Icons ──────────────────────────────────────────────────────────────
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M4 4l16 16M4 20L20 4" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

// ─── Types ─────────────────────────────────────────────────────────────────────
interface Slide { bg: string; headline: string; sub: string; }
interface Service { icon: React.ElementType; title: string; desc: string; img: string; }
interface NewsItem { tag: string; date: string; title: string; excerpt: string; img: string; }

// ─── Data ──────────────────────────────────────────────────────────────────────
const SLIDES: Slide[] = [
  {
    bg: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80",
    headline: "Foremost Oil & Gas Engineering Company",
    sub: "Techron Integrated Services delivers world-class engineering, procurement, construction, and installation solutions to the oil & gas, marine, and infrastructure sectors.",
  },
  {
    bg: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1600&q=80",
    headline: "Engineering Excellence. Trusted Delivery.",
    sub: "From concept design to project execution, our multidisciplinary team drives sustainable, high-impact outcomes across every engagement.",
  },
  {
    bg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
    headline: "Sustainable Solutions. Proven Results.",
    sub: "With an unwavering commitment to HSE standards, quality, and innovation, Techron is the preferred indigenous partner for leading energy organisations.",
  },
];

const STATS = [
  { end: 10,  suffix: "+", label: "Years of Experience" },
  { end: 80,  suffix: "+", label: "Satisfied Clients" },
  { end: 150, suffix: "+", label: "Finished Projects" },
  { end: 120, suffix: "+", label: "Employees Nationwide" },
];

const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Engineering & Construction",
    desc: "Mechanical, electrical, civil & structural engineering; concept design, FEED, fabrication, structural steelworks, and pipeline laying.",
    img: "https://images.unsplash.com/photo-1581092921461-7031e4f1adfe?w=600&q=70",
  },
  {
    icon: ShoppingCart,
    title: "Procurement & Supply Chain",
    desc: "Global sourcing of oilfield equipment, valves, pumps, piping systems, wellhead tools, and industrial materials with timely delivery.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=70",
  },
  {
    icon: Settings,
    title: "Installation, Inspection & Maintenance",
    desc: "EPCIC, commissioning, integrity management, preventive & corrective maintenance, IMR services, and CMMS-based asset & facility management.",
    img: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?w=600&q=70",
  },
  {
    icon: Anchor,
    title: "Subsea & Marine Services",
    desc: "Underwater inspections, ROV operations, diving support, pipeline surveys, vessel supply, crew change, and offshore logistics coordination.",
    img: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=600&q=70",
  },
  {
    icon: Users,
    title: "Manpower Development",
    desc: "Training and supply of certified engineers, technicians, HSE officers, and project managers — scalable to client requirements.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=70",
  },
];

const NEWS: NewsItem[] = [
  {
    tag: "Industry",
    date: "April 10, 2025",
    title: "Techron Completes Major Pipeline Commissioning Project in Delta State",
    excerpt: "Our engineering team successfully commissioned a 12-km trunkline, delivering the project ahead of schedule.",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=70",
  },
  {
    tag: "Safety",
    date: "March 22, 2025",
    title: "Techron Achieves 500,000 Man-Hours Without Lost Time Incident",
    excerpt: "A landmark HSE milestone reaffirming our commitment to zero-harm operations across all project sites.",
    img: "https://images.unsplash.com/photo-1581092921461-7031e4f1adfe?w=600&q=70",
  },
  {
    tag: "News",
    date: "February 15, 2025",
    title: "Expanding Marine Logistics Capacity with New Vessel Partnership",
    excerpt: "Techron announces a strategic partnership to strengthen offshore project support along Nigeria's coastline.",
    img: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?w=600&q=70",
  },
];

const CLIENTS = ["Chevron", "Shell", "TotalEnergies", "Mobil", "NNPC", "SLB"];

// ─── Animation helpers ─────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}

// ─── Animated Counter ──────────────────────────────────────────────────────────
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref} className="font-poppins font-black text-4xl md:text-5xl text-[#0B1F3A] leading-none tabular-nums">
      {count}{suffix}
    </span>
  );
}

// ─── Top Bar ───────────────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="hidden md:block bg-[#0B1F3A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <a href="mailto:info@techronintegrated.com"
          className="flex items-center gap-2 text-xs text-white/70 hover:text-[#F5A800] transition-colors">
          <Mail className="h-3.5 w-3.5" />
          info@techronintegrated.com
        </a>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <MapPin className="h-3.5 w-3.5 text-[#F5A800]" />
            7C Bourdillon Court, Chevron Drive, Lekki, Lagos
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Phone className="h-3.5 w-3.5 text-[#F5A800]" />
            +234 803 789 2618
          </div>
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Clock className="h-3.5 w-3.5 text-[#F5A800]" />
            Mon-Fri: 8:00-18:00
          </div>
          <div className="flex items-center gap-3">
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon].map((Icon, i) => (
              <a key={i} href="#" className="text-white/50 hover:text-[#F5A800] transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0B1F3A] shadow-2xl" : "bg-[#0B1F3A]/95 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-[58px] w-[150px] overflow-hidden rounded-md bg-transparent sm:h-[70px] sm:w-[150px]">
            <Image
              src="/techronlogo.png"
              alt="Techron Integrated Services logo"
              fill
              sizes="(max-width: 640px) 150px, 150px"
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm text-white/80 hover:text-[#F5A800]">
            Home
          </Link>
          <Link href="/about" className="px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm text-white/80 hover:text-[#F5A800]">
            About Us
          </Link>

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm ${
                servicesOpen ? "bg-[#F5A800] text-[#0B1F3A]" : "text-white/80 hover:text-[#F5A800]"
              }`}
            >
              Services
              <ChevronRight className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-90" : "rotate-0"}`} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-[320px] rounded-md border border-[#F5A800]/20 bg-white shadow-2xl z-[60]"
                >
                  <div className="border-b border-gray-100 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5A800]">
                    Our Services
                  </div>
                  <div className="py-2">
                    {SERVICE_LINKS.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-[#0B1F3A] hover:bg-[#F5A800]/5 hover:text-[#F5A800] transition-colors"
                        >
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A800]/10">
                            <Icon className="h-4 w-4 text-[#F5A800]" />
                          </div>
                          <span>{service.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/contact" className="px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm text-white/80 hover:text-[#F5A800]">
            Contact Us
          </Link>
          <Link href="/#news" className="px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm text-white/80 hover:text-[#F5A800]">
            News
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} 
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0B1F3A] border-t border-white/10 overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-2">
              <Link href="/" className="py-2 text-sm font-semibold text-white/80 hover:text-[#F5A800] transition-colors">Home</Link>
              <Link href="/about" className="py-2 text-sm font-semibold text-white/80 hover:text-[#F5A800] transition-colors">About Us</Link>

              <button
                onClick={() => setMobileServices((v) => !v)}
                className="flex items-center justify-between py-2 text-left text-sm font-semibold text-white/80 hover:text-[#F5A800] transition-colors"
              >
                Services
                <ChevronRight className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-90" : "rotate-0"}`} />
              </button>

              <AnimatePresence>
                {mobileServices && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <div className="ml-3 border-l border-white/10 pl-3 py-2 flex flex-col gap-2">
                      {SERVICE_LINKS.map((service) => (
                        <Link key={service.label} href={service.href} className="text-sm text-white/70 hover:text-[#F5A800] transition-colors">
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/contact" className="py-2 text-sm font-semibold text-white/80 hover:text-[#F5A800] transition-colors">Contact Us</Link>
              <Link href="/#news" className="py-2 text-sm font-semibold text-white/80 hover:text-[#F5A800] transition-colors">News</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// ─── Hero Slider ───────────────────────────────────────────────────────────────
function HeroSlider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % SLIDES.length);

  return (
    <section className="relative overflow-hidden bg-[#0B1F3A] text-white min-h-[640px]">
      {SLIDES.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.bg})` }} />
          <div className="absolute inset-0 bg-[#0B1F3A]/70" />
        </div>
      ))}

      {/* Centered content */}
      <div className="relative z-10 flex min-h-[640px] flex-col items-center justify-center px-6 py-20 text-center">
        <AnimatePresence mode="wait">
          <motion.div key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-4xl"
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-[#F5A800] backdrop-blur-sm">
              Engineering Excellence • Trusted Delivery
            </div>
            <h1 className="mb-6 px-2 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {SLIDES[current].headline}
            </h1>
            <p className="mx-auto mb-10 max-w-2xl px-4 text-lg leading-8 text-white/80">
              {SLIDES[current].sub}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 px-4">
              <a href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-7 py-3.5 text-base font-semibold text-[#0B1F3A] transition hover:bg-white">
                Our Services <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition hover:border-[#F5A800] hover:text-[#F5A800]">
                Contact Us
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-[#F5A800] flex items-center justify-center text-white transition-colors"
        aria-label="Previous slide">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-[#F5A800] flex items-center justify-center text-white transition-colors"
        aria-label="Next slide">
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-10 bg-[#F5A800]" : "w-4 bg-white/40"}`}
            aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </section>
  );
}

// ─── Stats Bar (with counter animation) ───────────────────────────────────────
function StatsBar() {
  return (
    <div className="bg-[#F5A800]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label}
            className={`py-8 px-4 text-center ${i < STATS.length - 1 ? "border-r border-[#0B1F3A]/20" : ""}`}>
            <Counter end={s.end} suffix={s.suffix} />
            <p className="text-[#0B1F3A]/70 text-sm md:text-base font-bold uppercase tracking-widest mt-2">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F5A800]">Who We Are</p>
          <h2 className="font-poppins text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Welcome to <span className="text-[#F5A800]">TECHRON</span> INTEGRATED
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-[#F5A800]" />
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
            Techron Integrated Services is a fully indigenous, multi-disciplinary company with a
            strategic focus on providing world-class services to clients in the oil and gas, marine,
            construction, and infrastructure industries.
          </p>
        </FadeUp>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            { title: "Our Vision", body: "To be the most preferred and trusted partner for innovative, cost-efficient solutions in the oil and gas industry — promoting sustainability, efficiency, and a complete portfolio of onshore and offshore assets integrity solutions.", accent: false },
            { title: "Our Mission", body: "To provide value through the deployment of innovative, cost-efficient Engineering, Procurement, Construction, Installation and Commissioning (EPCIC), Inspection, Maintenance and Repairs (IMR), and Subsea services — delivering quality service with top-notch leadership to achieve every client goal.", accent: true },
            { title: "Values & Ethics", body: "Our values and business ethics have ensured our growth, success, and client satisfaction. We uphold integrity, excellence, innovation, and a relentless commitment to health, safety, and environmental standards in everything we do.", accent: false },
          ].map((card, i) => (
            <FadeUp key={card.title} delay={i * 0.12}>
              <div className={`h-full rounded-[24px] p-8 shadow-sm ${card.accent ? "bg-[#F5A800] text-[#0B1F3A]" : "bg-[#0B1F3A] text-white"}`}>
                <h3 className="mb-4 text-xl font-black uppercase tracking-wide">{card.title}</h3>
                <p className={`text-base leading-7 ${card.accent ? "text-[#0B1F3A]/80" : "text-white/70"}`}>{card.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="text-center mt-10" delay={0.3}>
          <a href="/about"
            className="inline-flex items-center gap-2 border-2 border-[#F5A800] text-[#F5A800] font-bold px-7 py-3 text-base tracking-wide hover:bg-[#F5A800] hover:text-[#0B1F3A] transition-colors">
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Services Section (5 consolidated) ────────────────────────────────────────
function ServicesSection() {
  return (
    <section id="services" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F5A800]">What We Do</p>
          <h2 className="font-poppins text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Our <span className="text-[#F5A800]">Services</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-[#F5A800]" />
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
            Led by a dynamic team, Techron delivers integrated end-to-end services across the entire
            oil & gas and infrastructure value chain.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <FadeUp key={svc.title} delay={i * 0.09}
                className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <div className="group relative h-full cursor-pointer overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${svc.img})` }} />
                    <div className="absolute inset-0 bg-[#0B1F3A]/65 group-hover:bg-[#0B1F3A]/45 transition-colors" />
                    {/* Gold top bar */}
                    <div className="absolute top-0 left-0 h-1 w-0 bg-[#F5A800] group-hover:w-full transition-all duration-500" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-5">
                      <div className="w-11 h-11 bg-[#F5A800] flex items-center justify-center shadow-lg">
                        <Icon className="h-5 w-5 text-[#0B1F3A]" />
                      </div>
                    </div>
                  </div>
                  {/* Text */}
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold leading-snug text-[#0B1F3A] transition-colors group-hover:text-[#F5A800]">
                      {svc.title}
                    </h3>
                    <p className="text-base leading-7 text-[#0B1F3A]/70">{svc.desc}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-[#F5A800] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp className="mt-12 text-center">
          <a href="/services"
            className="inline-flex items-center gap-2 bg-[#F5A800] text-[#0B1F3A] font-bold px-10 py-4 text-base tracking-wide hover:bg-[#0B1F3A] hover:text-[#F5A800] transition-colors">
            View All Services <ArrowRight className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
function WhyUsSection() {
  const reasons = [
    { title: "Proven Industry Expertise", body: "Decades of combined experience across engineering, procurement, construction, marine logistics, and oilfield operations — deep technical knowledge on every engagement." },
    { title: "End-to-End Solutions", body: "From project conception to final delivery, our integrated service portfolio streamlines operations, reduces costs, and eliminates the need for multiple vendors." },
    { title: "Quality & Standards", body: "We adhere strictly to international standards and industry best practices, ensuring all deliverables meet or exceed client expectations for quality, safety, and compliance." },
    { title: "Timely Delivery", body: "Our project management systems and skilled workforce consistently deliver on schedule — without compromising on engineering excellence." },
    { title: "HSE Focus", body: "Our operations are guided by robust Health, Safety & Environmental policies, ensuring the safety of our team, clients, and the environment at every stage." },
    { title: "Innovation-Driven", body: "By leveraging modern digital workflows and emerging technologies, we continually raise the bar on service delivery and keep our clients ahead of the curve." },
  ];
  return (
    <section className="relative py-24 overflow-hidden"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=60)", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed" }}>
      <div className="absolute inset-0 bg-[#0B1F3A]/88" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F5A800]">Our Advantage</p>
          <h2 className="font-poppins text-3xl font-black text-white sm:text-4xl">
            Why Choose <span className="text-[#F5A800]">Techron?</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-[#F5A800]" />
        </FadeUp>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} delay={i * 0.08}>
              <div className="flex gap-4 p-6 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#F5A800]/40 hover:bg-white/10 transition-all">
                <CheckCircle2 className="h-5 w-5 text-[#F5A800] shrink-0 mt-0.5" />
                <div>
                  <h3 className="mb-2 text-lg font-bold text-white">{r.title}</h3>
                  <p className="text-base leading-7 text-white/70">{r.body}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ────────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1513828583688-c52646db42da?w=1400&q=60)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-[#0B1F3A]/85" />
      <FadeUp className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-3xl font-black text-white sm:text-4xl">
          Your Closest Partner in Petroleum, Oil &amp; Gas Services.
        </p>
        <p className="mb-8 text-lg leading-8 text-white/70">
          Upstream &nbsp;|&nbsp; Downstream &nbsp;|&nbsp; Exploration &amp; Production
        </p>
        <a href="contact"
          className="inline-flex items-center gap-2 bg-[#F5A800] text-[#0B1F3A] font-bold px-8 py-3.5 text-base tracking-wide hover:bg-white transition-colors">
          Contact Us <ArrowRight className="h-4 w-4" />
        </a>
      </FadeUp>
    </section>
  );
}

// ─── Clients ───────────────────────────────────────────────────────────────────
function ClientsSection() {
  return (
    <section className="border-b border-gray-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#0B1F3A]/40">
            Clients &amp; Partners
          </p>
        </FadeUp>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {CLIENTS.map((name) => (
            <FadeUp key={name}>
              <div className="flex items-center justify-center h-12 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all">
                <span className="font-poppins font-black text-lg text-[#0B1F3A] tracking-tight">{name}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── News ──────────────────────────────────────────────────────────────────────
function NewsSection() {
  return (
    <section id="news" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F5A800]">Stay Informed</p>
          <h2 className="font-poppins text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Latest <span className="text-[#F5A800]">News</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 bg-[#F5A800]" />
        </FadeUp>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <FadeUp key={n.title} delay={i * 0.1}>
              <div className="group overflow-hidden rounded-[24px] bg-white shadow-sm transition-shadow hover:shadow-xl">
                <div className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${n.img})` }}>
                  <div className="absolute inset-0 bg-[#0B1F3A]/30 group-hover:bg-[#0B1F3A]/10 transition-colors" />
                  <span className="absolute top-4 left-4 bg-[#F5A800] text-[#0B1F3A] text-[10px] font-black uppercase px-3 py-1 tracking-wider">
                    {n.tag}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[10px] text-[#0B1F3A]/40 font-semibold uppercase tracking-widest mb-2">{n.date}</p>
                  <h3 className="mb-3 text-lg font-bold leading-snug text-[#0B1F3A] transition-colors group-hover:text-[#F5A800]">{n.title}</h3>
                  <p className="text-base leading-7 text-[#0B1F3A]/70">{n.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-1 mt-4 text-[#F5A800] text-xs font-bold uppercase tracking-wide">
                    Read More <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="text-center mt-10">
          <a href="#"
            className="inline-flex items-center gap-2 border-2 border-[#F5A800] text-[#F5A800] font-bold px-8 py-3 text-base tracking-wide hover:bg-[#F5A800] hover:text-[#0B1F3A] transition-colors">
            See All News <ArrowRight className="h-4 w-4" />
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Newsletter ────────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(""); }
  };
  return (
    <section className="bg-[#F5A800] py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
        <div>
          <h3 className="font-poppins text-3xl font-black text-[#0B1F3A] sm:text-4xl">Newsletter Sign Up</h3>
          <p className="mt-1 text-base leading-7 text-[#0B1F3A]/70">Stay updated with news, project insights, and industry trends.</p>
        </div>
        {sent ? (
          <div className="flex items-center gap-2 text-[#0B1F3A] font-bold">
            <CheckCircle2 className="h-5 w-5" /> Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" required
              className="w-full md:w-72 px-4 py-3 text-sm text-[#0B1F3A] placeholder:text-[#0B1F3A]/40 bg-white outline-none" />
            <button type="submit"
              className="px-5 py-3 bg-[#0B1F3A] text-white text-base font-bold uppercase tracking-wider hover:bg-black transition-colors flex items-center gap-2">
              Subscribe <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden"
      style={{ backgroundImage: "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=40)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="absolute inset-0 bg-[#0B1F3A]/95" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="mb-4 flex items-center justify-center">
            <div className="relative h-[58px] w-[150px] overflow-hidden rounded-md bg-transparent sm:h-[70px] sm:w-[150px]">
              <Image
                src="/techronlogo.png"
                alt="Techron Integrated Services logo"
                fill
                sizes="(max-width: 640px) 150px, 150px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-white/60 text-sm text-center max-w-sm mb-5 leading-relaxed">
            Engineering Excellence. Sustainable Solutions. Trusted Delivery.
          </p>
          <div className="flex gap-3">
            {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
              <a key={i} href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:bg-[#F5A800] hover:border-[#F5A800] hover:text-[#0B1F3A] transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-[0.18em] text-[#F5A800] mb-5">Our Company</h4>
            <p className="text-white/50 text-base leading-relaxed mb-5">
              Techron Integrated Services is a fully indigenous, multi-disciplinary company providing world-class services to the oil and gas, marine, construction, and infrastructure industries.
            </p>
            <div className="flex flex-col gap-2">
              {["Latest News", "About Us", "Careers"].map((l) => (
                <a key={l} href="#" className="text-base text-white/40 hover:text-[#F5A800] transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" /> {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-[0.18em] text-[#F5A800] mb-5">Our Services</h4>
            <div className="flex flex-col gap-2">
              {SERVICE_LINKS.map((service) => (
                <Link key={service.label} href={service.href} className="text-base text-white/40 hover:text-[#F5A800] transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" /> {service.label}
                </Link>
              ))}
            </div>
          </div>
          <div id="contact">
            <h4 className="font-poppins font-bold text-xs uppercase tracking-[0.18em] text-[#F5A800] mb-5">Contact Us</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: MapPin, text: "7C Bourdillon Court, Chevron Drive, Lekki, Lagos" },
                { icon: Phone, text: "+234 803 789 2618" },
                { icon: Mail, text: "info@techronintegrated.com" },
                { icon: Clock, text: "Monday-Friday: 8:00am - 6:00pm" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="h-3.5 w-3.5 text-[#F5A800] shrink-0 mt-0.5" />
                  <p className="text-base text-white/50 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 text-center">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Techron Integrated Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSlider />
      <StatsBar />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <CTABanner />
      <ClientsSection />
      <NewsSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
