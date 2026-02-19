'use client'

import Link from 'next/link'
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from '~/components/shared/icons'
import { socialLinks } from '~/lib/data/footer/footer-links'

const iconMap = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  youtube: YouTubeIcon,
} as const

/**
 * FooterTop - Brand section with social media links
 * Client Component for interactive social links
 */
export function FooterTop() {
  return (
    <div>
      {/* Brand Section */}
      <div className="mb-4">
        <h2 className="mb-4 font-bold text-[#EB0A1E] text-[40px] leading-8 tracking-tight sm:text-2xl">
          Arrow
        </h2>
        <p className="text-[#99A1AF] text-xs sm:text-sm">
          Your trusted partner for quality pre-owned vehicles
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center justify-around">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon]
          return (
            <Link
              aria-label={link.label}
              className="text-white transition-colors hover:text-white/80"
              href={link.href}
              key={link.label}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="block sm:hidden">
                <Icon size={24} />
              </span>
              <span className="hidden sm:block">
                <Icon size={16} />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
