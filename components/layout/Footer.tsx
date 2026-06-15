"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { SERVICE_LINKS } from "@/components/layout/serviceLinks";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-8 overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=40)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0B1F3A]/95" />
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Logo + social */}
        <div className="flex flex-col items-center mb-12">
          <div className="mb-4 flex items-center justify-center">
            <div className="relative h-[70px] w-[200px] overflow-hidden rounded-md bg-transparent sm:h-[84px] sm:w-[200px]">
              <Image
                src="/techronlogo.png"
                alt="Techron Integrated Services logo"
                fill
                sizes="200px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-white/60 text-sm text-center max-w-sm mb-5 leading-relaxed">
            Engineering Excellence. Sustainable Solutions. Trusted Delivery.
          </p>
          <div className="flex gap-3">
            {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:bg-[#F5A800] hover:border-[#F5A800] hover:text-[#0B1F3A] transition-all"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
          {/* Company */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-[0.18em] text-[#F5A800] mb-5">
              Our Company
            </h4>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Techron Integrated Services is a fully indigenous, multi-disciplinary company
              providing world-class services to the oil and gas, marine, construction, and
              infrastructure industries.
            </p>
            <div className="flex flex-col gap-2">
              {["Latest News", "About Us", "Careers"].map((l) => (
                <a key={l} href="#" className="text-sm text-white/70 hover:text-[#F5A800] transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" /> {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-[0.18em] text-[#F5A800] mb-5">
              Our Services
            </h4>
            <div className="flex flex-col gap-2">
              {SERVICE_LINKS.map((service) => (
                <Link key={service.label} href={service.href} className="text-sm text-white/70 hover:text-[#F5A800] transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" /> {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-bold text-xs uppercase tracking-[0.18em] text-[#F5A800] mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: MapPin, text: "7C Bourdillon Court, Chevron Drive, Lekki, Lagos" },
                { icon: Phone, text: "+234 803 789 2618" },
                { icon: Mail,  text: "info@techronintegrated.com" },
                { icon: Clock, text: "Monday–Friday: 8:00am – 6:00pm" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="h-3.5 w-3.5 text-[#F5A800] shrink-0 mt-0.5" />
                  <p className="text-sm text-white/70 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Techron Integrated Services Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
