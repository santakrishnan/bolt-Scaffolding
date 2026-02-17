'use client';

import Link from 'next/link';
import { FacebookIcon, TwitterIcon, InstagramIcon, YouTubeIcon } from 'ui';
import { socialLinks } from '@/lib/footer/footer-links';

const iconMap = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
} as const;

/**
 * FooterTop - Brand section with social media links
 * Client Component for interactive social links
 */
export function FooterTop() {
  return (
    <div>
      {/* Brand Section */}
      <div className="mb-4">
        <h2 
          className="mb-4 text-[#EB0A1E] font-bold  text-[40px] sm:text-2xl leading-8 tracking-tight "
        >
          Arrow
        </h2>
        <p className="text-xs text-[#99A1AF] sm:text-sm">
          Your trusted partner for quality pre-owned vehicles
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center justify-around">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-white/80"
              aria-label={link.label}
            >
              <span className="block sm:hidden">
                <Icon size={24} />
              </span>
              <span className="hidden sm:block">
                <Icon size={16} />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
