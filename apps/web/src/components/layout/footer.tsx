"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    shop: false,
    support: false,
    company: false,
    legal: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const shopLinks = ["Buy a Car", "Sell Your Car", "Finance Options", "Trade-In Value"].map((label) => ({ label, href: "#" }));
  const supportLinks = ["Contact Us", "FAQs", "Financing Help", "Returns & Exchanges"].map((label) => ({ label, href: "#" }));
  const companyLinks = ["About Arrow", "Press", "Partnerships", "Locations"].map((label) => ({ label, href: "#" }));
  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility", "Sitemap"].map((label) => ({ label, href: "#" }));

  const sections = [
    { key: "shop", title: "Shop", links: shopLinks },
    { key: "support", title: "Support", links: supportLinks },
    { key: "company", title: "Company", links: companyLinks },
    { key: "legal", title: "Legal", links: legalLinks },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Mobile Footer */}
      <div className="md:hidden px-6 py-[50px] space-y-8">
        {/* Logo and Tagline */}
        <div className="space-y-4">
          <h2 className="text-[40px] font-bold text-[#eb0a1e]">Arrow</h2>
          <p className="text-sm text-[#99a1af]">Your trusted partner for quality pre-owned vehicles.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="#" className="w-[56px] h-[56px] rounded-lg bg-transparent border border-[#58595b] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" className="w-[56px] h-[56px] rounded-lg bg-transparent border border-[#58595b] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" className="w-[56px] h-[56px] rounded-lg bg-transparent border border-[#58595b] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.818c-5.41 0-9.818-4.408-9.818-9.818s4.408-9.818 9.818-9.818 9.818 4.408 9.818 9.818-4.408 9.818-9.818 9.818zm3.639-15.454c.847 0 1.528-.681 1.528-1.528s-.681-1.528-1.528-1.528-1.528.681-1.528 1.528.681 1.528 1.528 1.528zm-6.639 2.636c1.823-2.456 5.683-2.456 7.506 0 1.823 2.456.728 6.364-2.753 7.546-3.481 1.182-7.387-.728-8.569-4.209-1.182-3.481.728-7.387 4.209-8.569.728-.274 1.456-.228 2.107.182-.546.728-.818 1.519-.818 2.401 0 2.548 2.093 4.641 4.641 4.641.882 0 1.673-.273 2.342-.728-.546 1.274-1.639 2.22-2.931 2.548-1.946.456-3.984-.273-5.001-1.75-.728-.910-1.093-2.003-.910-3.096 0-.682.164-1.365.546-1.946z" />
            </svg>
          </a>
          <a href="#" className="w-[56px] h-[56px] rounded-lg bg-transparent border border-[#58595b] flex items-center justify-center hover:bg-[#2a2a2a] transition-colors" aria-label="YouTube">
            <svg className="w-8 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>

        {/* Collapsible Sections */}
        <div className="space-y-0">
          {sections.map((section) => (
            <div key={section.key}>
              <button
                onClick={() => toggleSection(section.key)}
                className="w-full flex items-center justify-between py-6 border-b border-[#58595b] text-left hover:bg-[#242424] transition-colors"
              >
                <span className="text-base font-bold text-white">{section.title}</span>
                <svg
                  className={`w-6 h-6 text-white transition-transform ${openSections[section.key] ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {openSections[section.key] && (
                <div className="bg-[#242424] px-0">
                  <ul className="space-y-3 py-4 px-0">
                    {section.links.map((l) => (
                      <li key={l.label}>
                        <Link href={l.href} className="text-sm text-[#99a1af] hover:text-white transition-colors block pl-6">
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-[#58595b] pt-8 space-y-4">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#eb0a1e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm text-[#99a1af]">Call Us</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#eb0a1e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm text-[#99a1af]">Email Us</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-[#eb0a1e]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm text-[#99a1af]">Find a Location</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#58595b] pt-8 text-center space-y-2">
          <p className="text-xs text-[#99a1af]">© 2026 Toyota Financial Services. All rights reserved.</p>
          <p className="text-xs text-[#99a1af]">Project ARROW (331) • R1 Launch: March 31, 2026</p>
        </div>
      </div>

      <div className="hidden md:block px-[var(--container-padding-desktop)] py-[var(--spacing-3xl)]">
        <div className="space-y-[var(--spacing-2xl)] max-w-[var(--breakpoint-container)] mx-auto">
          <div className="grid grid-cols-5 gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[color:var(--color-brand-primary)]">Arrow</h2>
              <p className="text-sm text-[color:var(--color-text-light)]">Your trusted partner for quality pre-owned vehicles.</p>
            </div>

            {sections.map((section) => (
              <div key={section.key}>
                <h3 className="text-base font-bold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="text-sm text-[color:var(--color-text-light)] hover:text-[color:var(--color-text-white)] transition-colors">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[color:var(--color-border-dark)] pt-[var(--spacing-2xl)] flex items-center justify-between text-xs text-[color:var(--color-text-light)]">
            <p>© 2026 Toyota Financial Services. All rights reserved.</p>
            <p>Project ARROW (331) • R1 Launch: March 31, 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
