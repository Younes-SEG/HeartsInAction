"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useScrollSpy } from "./ScrollSpy";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isHomePage = pathname === "/";
  
  // Only use scroll spy after component mounts (client-side only)
  const sectionIds = mounted && isHomePage ? ["home", "stats", "about", "contact"] : [];
  const activeSection = useScrollSpy(sectionIds);
  
  // Track when component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const navLinks = [
    { href: "/", label: "Home", sectionId: "home" },
    { href: "/about", label: "About", sectionId: "about" },
    { href: "/events", label: "Events", sectionId: null },
    { href: "/fundraising", label: "Fundraising", sectionId: null },
    { href: "/members", label: "Members", sectionId: null },
    { href: "/contact", label: "Contact", sectionId: "contact" },
  ];

  const handleNavClick = (href: string, sectionId: string | null) => {
    setIsOpen(false);
    if (typeof window !== "undefined" && isHomePage && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string, sectionId: string | null) => {
    if (isHomePage && sectionId) {
      return activeSection === sectionId;
    }
    return pathname === href;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Hearts in Action
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (isHomePage && link.sectionId) {
                    e.preventDefault();
                    handleNavClick(link.href, link.sectionId);
                  }
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href, link.sectionId)
                    ? "text-primary-600 bg-red-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (isHomePage && link.sectionId) {
                    e.preventDefault();
                    handleNavClick(link.href, link.sectionId);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.href, link.sectionId)
                    ? "text-primary-600 bg-red-50"
                    : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
