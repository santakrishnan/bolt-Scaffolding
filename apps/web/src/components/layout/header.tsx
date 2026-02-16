"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@arrow-ecommerce/ui";
import { Heart, Menu, ShoppingCart } from "lucide-react";

/**
 * Header - mobile-first responsive header with red branding
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hero height varies by breakpoint
      const heroHeight = window.innerWidth < 768 ? 560 : 900;
      // Header is transparent when at top or over hero section
      setIsOverHero(window.scrollY < heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isOverHero 
        ? "bg-transparent border-transparent" 
        : "bg-[color:var(--color-bg-primary)] border-b border-[color:var(--color-border-primary)]"
    }`}>
      {/* Mobile Header - md:hidden */}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-16 px-[var(--container-padding-mobile)] py-4">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[color:var(--color-brand-primary)] rounded-sm flex items-center justify-center">
              <span className="text-[color:var(--color-text-white)] font-bold text-xs">→</span>
            </div>
            <span className="text-sm font-bold text-[color:var(--color-text-white)] uppercase hidden">Arrow</span>
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Wishlist"
              className={`p-2 rounded-lg transition-colors ${
                isOverHero 
                  ? "hover:bg-white/10" 
                  : "hover:bg-gray-100"
              }`}
            >
              <Heart size={20} className={`${isOverHero ? "text-white" : "text-[color:var(--color-text-muted)]"}`} />
            </button>
            <button
              aria-label="Cart"
              className={`p-2 rounded-lg transition-colors relative ${
                isOverHero 
                  ? "hover:bg-white/10" 
                  : "hover:bg-gray-100"
              }`}
            >
              <ShoppingCart size={20} className={`${isOverHero ? "text-white" : "text-[color:var(--color-text-muted)]"}`} />
              <span className="absolute top-1 right-1 w-4 h-4 bg-[color:var(--color-brand-primary)] rounded-full text-[color:var(--color-text-white)] text-xs flex items-center justify-center">
                0
              </span>
            </button>
            <button
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isOverHero 
                  ? "hover:bg-white/10" 
                  : "hover:bg-gray-100"
              }`}
            >
              <Menu size={20} className={`${isOverHero ? "text-white" : "text-[color:var(--color-text-muted)]"}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[color:var(--color-border-primary)] bg-[color:var(--color-bg-primary)]">
            <div className="px-[var(--container-padding-mobile)] py-4 space-y-3">
              <Link
                href="/used-cars/search"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[color:var(--color-text-primary)] hover:text-[color:var(--color-brand-primary)] transition-colors font-medium"
              >
                Browse Vehicles
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[color:var(--color-text-primary)] hover:text-[color:var(--color-brand-primary)] transition-colors font-medium"
              >
                Sell Your Car
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-[color:var(--color-text-primary)] hover:text-[color:var(--color-brand-primary)] transition-colors font-medium"
              >
                About
              </Link>
              <div className="border-t pt-4 flex flex-col gap-2">
                <Button variant="outline" asChild className="w-full justify-center">
                  <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full justify-center bg-[color:var(--color-brand-primary)] hover:bg-[color:var(--color-brand-primary-dark)]">
                  <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Header - hidden md:flex */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between h-16 px-[var(--container-padding-desktop)] py-4 max-w-[var(--breakpoint-container)] mx-auto">
          {/* Desktop Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-[color:var(--color-brand-primary)] rounded-md flex items-center justify-center">
              <span className="text-[color:var(--color-text-white)] font-bold text-sm">→</span>
            </div>
            <span className="text-lg font-bold text-[color:var(--color-text-primary)] uppercase">Arrow</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={`flex items-center gap-8 text-sm font-medium flex-1 justify-center ${
            isOverHero ? "text-white" : "text-[color:var(--color-text-primary)]"
          }`}>
            <Link
              href="/used-cars/search"
              className={`hover:opacity-70 transition-opacity ${
                isOverHero ? "text-white" : "text-[color:var(--color-text-primary)]"
              }`}
            >
              Buy
            </Link>
            <Link href="#" className={`hover:opacity-70 transition-opacity ${
              isOverHero ? "text-white" : "text-[color:var(--color-text-primary)]"
            }`}>
              Sell
            </Link>
            <Link href="#" className={`hover:opacity-70 transition-opacity ${
              isOverHero ? "text-white" : "text-[color:var(--color-text-primary)]"
            }`}>
              Finance
            </Link>
            <Link href="#" className={`hover:opacity-70 transition-opacity ${
              isOverHero ? "text-white" : "text-[color:var(--color-text-primary)]"
            }`}>
              Why Arrow
            </Link>
          </nav>

          {/* Location */}
          <div className={`text-sm font-book shrink-0 ${
            isOverHero ? "text-[#e8e8e8]" : "text-[color:var(--color-text-muted)]"
          }`}>
            Buffalo, WV 25033
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              aria-label="Wishlist"
              className={`p-2 rounded-lg transition-colors ${
                isOverHero ? "hover:bg-white/10" : "hover:bg-gray-100"
              }`}
            >
              <Heart size={20} className={isOverHero ? "text-white" : "text-[color:var(--color-text-muted)]"} />
            </button>
            <Button 
              variant="outline" 
              asChild 
              className={`${
                isOverHero 
                  ? "border-white text-white hover:bg-white/10" 
                  : "text-[color:var(--color-text-primary)]"
              }`}
            >
              <Link href="#">Sign In</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
