"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
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
          <MessageSquare className="h-4 w-4" />
          Contact Techron Integrated Services
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s discuss your next engineering, energy, or infrastructure project.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              Reach our team for enquiries, project conversations, partnership requests, or
              technical support. We are ready to respond with clarity, speed, and dependable
              guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@techronintegrated.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white"
              >
                Send Email
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+2348037892618"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F5A800] hover:text-[#F5A800]"
              >
                Call Us
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800] text-[#0B1F3A]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">Response Standard</p>
                <p className="text-xl font-bold">Clear. Direct. Dependable.</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Project enquiries and consultation requests",
                "Engineering, marine, oil and gas support",
                "Partnership, procurement and service discussions",
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

function ContactCards() {
  const contacts = [
    {
      title: "Email Address",
      value: "info@techronintegrated.com",
      href: "mailto:info@techronintegrated.com",
      icon: Mail,
      detail: "Send enquiries and project details directly to our team.",
    },
    {
      title: "Office Location",
      value: "7C Bourdillon Court, Chevron Drive, Lekki, Lagos",
      href: "https://www.google.com/maps/search/?api=1&query=7C%20Bourdillon%20Court%2C%20Chevron%20Drive%2C%20Lekki%2C%20Lagos",
      icon: MapPin,
      detail: "Visit or locate our office in Lekki, Lagos.",
    },
    {
      title: "Phone Number",
      value: "+234 803 789 2618",
      href: "tel:+2348037892618",
      icon: Phone,
      detail: "Call us for quick support and business conversations.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <FadeUp className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Reach Us</p>
        <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
          Get in Touch With <span className="text-[#F5A800]">Our Team</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
          Use any of the contact channels below and a member of our team will respond as soon as possible.
        </p>
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {contacts.map((item, index) => {
          const Icon = item.icon;
          return (
            <FadeUp key={item.title} delay={index * 0.08}>
              <a
                href={item.href}
                target={item.title === "Office Location" ? "_blank" : undefined}
                rel={item.title === "Office Location" ? "noreferrer" : undefined}
                className="group block h-full rounded-[28px] border border-[#E6EAF2] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F5A800]/50 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-[#F5A800] transition group-hover:bg-[#F5A800] group-hover:text-[#0B1F3A]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">{item.title}</h3>
                <p className="mt-3 text-base font-semibold leading-7 text-[#0B1F3A]/80">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-[#0B1F3A]/60">{item.detail}</p>
              </a>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      } else {
        setStatus("success");
        setFields({ name: "", email: "", phone: "", service: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-2xl border border-[#E6EAF2] bg-[#F7F9FC] px-4 py-3 text-sm text-[#0B1F3A] outline-none transition placeholder:text-[#0B1F3A]/40 focus:border-[#F5A800] focus:bg-white";

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-[32px] border border-[#E6EAF2] bg-white p-6 shadow-sm sm:p-8"
    >
      {status === "success" && (
        <div className="mb-6 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 px-5 py-4">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
          <div>
            <p className="text-sm font-semibold text-green-800">Message sent successfully!</p>
            <p className="mt-0.5 text-sm text-green-700">
              Our team will review your enquiry and get back to you shortly.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4">
          <p className="text-sm font-semibold text-red-800">Failed to send message</p>
          <p className="mt-0.5 text-sm text-red-700">{errorMsg}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-[#0B1F3A]">
            Full Name <span className="text-[#F5A800]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            value={fields.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-[#0B1F3A]">
            Email Address <span className="text-[#F5A800]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            value={fields.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-[#0B1F3A]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234"
            value={fields.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-semibold text-[#0B1F3A]">
            Service Interest
          </label>
          <select
            id="service"
            name="service"
            value={fields.service}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            <option value="epcic">EPCIC</option>
            <option value="imr">Inspection, Maintenance and Repairs</option>
            <option value="subsea">Subsea Services</option>
            <option value="marine">Marine Support</option>
            <option value="construction">Construction and Infrastructure</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-semibold text-[#0B1F3A]">
          Message <span className="text-[#F5A800]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Tell us about your enquiry or project..."
          value={fields.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function ContactSection() {
  const projectTypes = [
    "EPCIC projects",
    "Inspection, maintenance and repairs",
    "Marine and subsea support",
    "Construction and infrastructure",
  ];

  return (
    <section className="bg-[#F7F9FC] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-8">
        <FadeIn delay={0.1}>
          <div className="rounded-[32px] border border-[#E6EAF2] bg-white p-6 shadow-sm">
            <div
              className="h-[360px] rounded-[24px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=75)",
              }}
            />

            <div className="mt-6 rounded-[24px] border border-[#F5A800]/20 bg-[#F5A800]/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F5A800] text-[#0B1F3A]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F5A800]">Office</p>
                  <p className="text-lg font-bold text-[#0B1F3A]">Lekki, Lagos</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#0B1F3A]/70">
                7C Bourdillon Court, Chevron Drive, Lekki, Lagos
              </p>
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeUp delay={0.1}>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Send a Message</p>
            <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
              Tell us what you need and we&apos;ll get back to you.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#0B1F3A]/70">
              Share your enquiry, project scope, or service request. Our team will review your
              message and respond with the next practical step.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <ContactForm />
          </FadeUp>

          <FadeUp delay={0.3}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectTypes.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-2xl border border-[#E6EAF2] bg-white px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#F5A800]" />
                  <span className="text-sm text-[#0B1F3A]/75">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function VisitInfo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-6 md:grid-cols-3">
        <FadeUp delay={0.05}>
          <div className="h-full rounded-[28px] border border-[#E6EAF2] bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-[#F5A800]">
              <Clock3 className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">Business Hours</h3>
            <p className="mt-3 text-base leading-7 text-[#0B1F3A]/70">
              Monday to Friday, 9:00 AM - 5:00 PM. Contact us ahead for scheduled visits and
              project meetings.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.12}>
          <div className="h-full rounded-[28px] border border-[#E6EAF2] bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-[#F5A800]">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">Email Support</h3>
            <p className="mt-3 text-base leading-7 text-[#0B1F3A]/70">
              Send documents, RFQs, project briefs, and partnership requests to
              info@techronintegrated.com.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.19}>
          <div className="h-full rounded-[28px] border border-[#E6EAF2] bg-white p-8 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F5A800]/10 text-[#F5A800]">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-[#0B1F3A]">Direct Call</h3>
            <p className="mt-3 text-base leading-7 text-[#0B1F3A]/70">
              For urgent enquiries or quick business conversations, call +234 803 789 2618.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function MapBanner() {
  return (
    <section className="bg-[#F7F9FC] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Find Us</p>
          <h2 className="mt-3 text-3xl font-black text-[#0B1F3A] sm:text-4xl">
            Our Office <span className="text-[#F5A800]">Location</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#0B1F3A]/70">
            7C Bourdillon Court, Chevron Drive, Lekki, Lagos.
          </p>
        </FadeUp>

        <FadeIn delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-[32px] border border-[#E6EAF2] bg-white p-3 shadow-sm">
            <iframe
              title="Techron Integrated Services Office Location"
              src="https://www.google.com/maps?q=7C%20Bourdillon%20Court%2C%20Chevron%20Drive%2C%20Lekki%2C%20Lagos&output=embed"
              className="h-[420px] w-full rounded-[24px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="rounded-[36px] bg-[#0B1F3A] px-8 py-10 text-white shadow-2xl sm:px-10 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F5A800]">Ready to Start?</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Let&apos;s move your project forward with the right technical partner.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Speak with Techron Integrated Services about reliable solutions across engineering,
            oil and gas, marine, construction, and infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:info@techronintegrated.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5A800] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-white"
            >
              Email Us
              <ArrowRight className="h-4 w-4" />
            </a>
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

export default function ContactPage() {
  return (
    <main className="bg-[#F7F9FC] text-[#0B1F3A]">
      <TopBar />
      <Navbar active="Contact" />
      <PageHero />
      <ContactCards />
      <ContactSection />
      <VisitInfo />
      <MapBanner />
      <CTABanner />
      <Footer />
    </main>
  );
}
