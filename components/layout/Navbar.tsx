"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { SERVICE_LINKS } from "@/components/layout/serviceLinks";

const SERVICES = SERVICE_LINKS;

type NavLink =
  | { label: string; href: string; dropdown?: false }
  | { label: string; href: string; dropdown: true };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services/engineering-construction", dropdown: true },
  { label: "Contact Us", href: "/contact" },
  { label: "News", href: "/#news" },
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
          className="absolute left-0 top-full z-[60] mt-3 w-[min(90vw,640px)] border-t-2 border-[#F5A800] bg-white shadow-2xl"
        >
          <div className="flex items-center justify-between bg-[#0B1F3A] px-6 py-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F5A800]">
              Our Services
            </p>
            <Link
              href="/services"
              className="text-xs font-medium text-white/50 transition-colors hover:text-[#F5A800]"
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
                  className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-[#F5A800]/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F5A800]/10 transition-colors group-hover:bg-[#F5A800]">
                    <Icon className="h-4 w-4 text-[#F5A800] transition-colors group-hover:text-[#0B1F3A]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-poppins text-sm font-bold leading-snug text-[#0B1F3A] transition-colors group-hover:text-[#F5A800]">
                      {svc.label}
                    </p>
                    <p className="mt-0.5 text-xs text-[#0B1F3A]/50">{svc.desc}</p>
                  </div>
                  <ChevronDown className="h-3.5 w-3.5 shrink-0 -rotate-90 text-[#0B1F3A]/20 transition-colors group-hover:text-[#F5A800]" />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-gray-100 bg-[#F5F7FA] px-6 py-3">
            <p className="text-xs text-[#0B1F3A]/50">Need a tailored solution?</p>
            <Link
              href="/contact"
              className="text-xs font-bold uppercase tracking-wide text-[#F5A800] transition-colors hover:text-[#0B1F3A]"
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <div className="relative h-14 w-[200px] overflow-hidden bg-transparent sm:h-16 sm:w-[200px]">
            <Image
              src="/techronlogo.png"
              alt="Techron Integrated Services logo"
              fill
              priority
              sizes="150px"
              className="object-contain"
            />
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              active === link.label ||
              (link.label === "Services" && isServicesActive);

            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openServicesMenu}
                  onMouseLeave={closeServicesMenu}
                >
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    onFocus={openServicesMenu}
                    onBlur={closeServicesMenu}
                    className={`flex items-center gap-1.5 rounded-sm px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
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
                className={`rounded-sm px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${
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
          className="text-white md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          type="button"
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
            className="overflow-hidden border-t border-white/10 bg-[#0B1F3A] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServices((v) => !v)}
                        className={`flex w-full items-center justify-between border-b border-white/5 py-3 text-sm font-semibold transition-colors ${
                          isServicesActive ? "text-[#F5A800]" : "text-white/80"
                        }`}
                        type="button"
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
                            <div className="mb-2 ml-2 flex flex-col gap-1 border-l-2 border-[#F5A800]/40 py-2 pl-4">
                              {SERVICES.map((svc) => {
                                const Icon = svc.icon;
                                return (
                                  <Link
                                    key={svc.label}
                                    href={svc.href}
                                    className="group flex items-center gap-3 py-2.5"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#F5A800]/10">
                                      <Icon className="h-3.5 w-3.5 text-[#F5A800]" />
                                    </div>
                                    <div>
                                      <p className="text-xs font-semibold leading-snug text-white/80 transition-colors group-hover:text-[#F5A800]">
                                        {svc.label}
                                      </p>
                                      <p className="mt-0.5 text-[10px] text-white/35">
                                        {svc.desc}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                              <Link
                                href="/services"
                                className="mt-1 py-1 text-xs font-bold uppercase tracking-wide text-[#F5A800]"
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
                    className={`border-b border-white/5 py-3 text-sm font-semibold transition-colors ${
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
