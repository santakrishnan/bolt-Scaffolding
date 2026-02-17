import { FooterTop } from './footer/footer-top';
import { FooterNavigation } from './footer/footer-navigation';
import { FooterBottom } from './footer/footer-bottom';

/**
 * Footer - Main footer component
 * Combines all footer sections with dark theme
 */
export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#99A1AF]">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Desktop: Brand on left, Navigation on right */}
        <div className="py-4 sm:grid sm:border-b sm:border-[#333333] sm:grid-cols-[200px_1fr] sm:gap-8 lg:grid-cols-[240px_1fr] lg:gap-16">
          {/* Left: Brand + Social */}
          <div className="mb-8 sm:mb-0">
            <FooterTop />
          </div>

          {/* Right: Navigation Links */}
          <div>
            <FooterNavigation />
          </div>
        </div>

        {/* Bottom Section: Contact + Copyright */}
        <FooterBottom />
      </div>
    </footer>
  );
}