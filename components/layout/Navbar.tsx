"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { SERVICE_LINKS } from "@/components/layout/serviceLinks";

const SERVICES = SERVICE_LINKS;

type NavLink =
  | { label: string; href: string; dropdown?: false }
  | { label: string; href: string; dropdown: true };

const NAV_LINKS: NavLink[] = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Services",   href: "/services/engineering-construction", dropdown: true },
  { label: "Contact Us", href: "/contact" },
  { label: "News",       href: "/#news" },
];

function ServicesDropdown({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 mt-2 w-[min(90vw,640px)] bg-white shadow-2xl border-t-2 border-[#F5A800] z-[60]"
        >
          <div className="bg-[#0B1F3A] px-6 py-3 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A800]">
              Our Services
            </p>
            <Link
              href="/services"
              className="text-xs text-white/50 hover:text-[#F5A800] transition-colors font-medium"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 divide-y divide-gray-100">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.label}
                  href={svc.href}
                  className="group flex items-center gap-4 px-6 py-4 hover:bg-[#F5A800]/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#F5A800]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5A800] transition-colors">
                    <Icon className="h-4 w-4 text-[#F5A800] group-hover:text-[#0B1F3A] transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-poppins font-bold text-sm text-[#0B1F3A] group-hover:text-[#F5A800] transition-colors leading-snug">
                      {svc.label}
                    </p>
                    <p className="text-xs text-[#0B1F3A]/50 mt-0.5">{svc.desc}</p>
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 text-[#0B1F3A]/20 -rotate-90 shrink-0 group-hover:text-[#F5A800] transition-colors" />
                </Link>
              );
            })}
          </div>

          <div className="bg-[#F5F7FA] px-6 py-3 flex items-center justify-between border-t border-gray-100">
            <p className="text-xs text-[#0B1F3A]/50">Need a tailored solution?</p>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#F5A800] hover:text-[#0B1F3A] transition-colors uppercase tracking-wide"
            >
              Talk to Us
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

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
    return () => {
      document.removeEventListener("mousedown", handler);
      if (hoverTimeoutRef.current) {
        window.clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const openServicesMenu = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const closeServicesMenu = () => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = window.setTimeout(() => setServicesOpen(false), 140);
  };

  const isServicesActive =
    active === "Services" || SERVICES.some((s) => s.label === active);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1F3A] shadow-2xl" : "bg-[#0B1F3A]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center shrink-0">
          <div className="relative h-[70px] w-[250px] overflow-hidden rounded-md bg-transparent shadow-none sm:h-[75px] sm:w-[250px]">
            <Image
              src="/techronlogo.png"
              alt="Techron Integrated Services logo"
              fill
              sizes="(max-width: 640px) 250px, 250px"
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive =
              active === link.label ||
              (link.label === "Services" && isServicesActive);

            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  className="relative pb-2"
                  ref={dropdownRef}
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                >
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    onFocus={openServicesMenu}
                    onBlur={closeServicesMenu}
                    className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm ${
                      isActive || servicesOpen
                        ? "bg-[#F5A800] text-[#0B1F3A]"
                        : "text-white/80 hover:text-[#F5A800]"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </motion.span>
                  </button>
                  <ServicesDropdown visible={servicesOpen} />
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold tracking-wide transition-colors rounded-sm ${
                  isActive
                    ? "bg-[#F5A800] text-[#0B1F3A]"
                    : "text-white/80 hover:text-[#F5A800]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0B1F3A] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServices((v) => !v)}
                        className={`w-full flex items-center justify-between py-3 text-sm font-semibold transition-colors border-b border-white/5 ${
                          isServicesActive ? "text-[#F5A800]" : "text-white/80"
                        }`}
                      >
                        {link.label}
                        <motion.span
                          animate={{ rotate: mobileServices ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>

                      <AnimatePresence>
                        {mobileServices && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 py-2 flex flex-col gap-1 border-l-2 border-[#F5A800]/40 ml-2 mb-2">
                              {SERVICES.map((svc) => {
                                const Icon = svc.icon;
                                return (
                                  <Link
                                    key={svc.label}
                                    href={svc.href}
                                    className="flex items-center gap-3 py-2.5 group"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <div className="w-7 h-7 bg-[#F5A800]/10 flex items-center justify-center shrink-0">
                                      <Icon className="h-3.5 w-3.5 text-[#F5A800]" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-semibold text-white/80 group-hover:text-[#F5A800] transition-colors leading-snug">
                                        {svc.label}
                                      </p>
                                      <p className="text-[10px] text-white/35 mt-0.5">
                                        {svc.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                              <Link
                                href="/services"
                                className="mt-1 text-xs font-bold text-[#F5A800] uppercase tracking-wide py-1"
                                onClick={() => setMobileOpen(false)}
                              >
                                View All Services
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`py-3 text-sm font-semibold transition-colors border-b border-white/5 ${
                      active === link.label
                        ? "text-[#F5A800]"
                        : "text-white/80 hover:text-[#F5A800]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
