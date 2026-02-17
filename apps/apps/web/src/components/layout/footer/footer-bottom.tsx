import Link from 'next/link';
import { PhoneIcon, EmailIcon, LocationIcon } from 'ui';
import { contactInfo } from '@/lib/footer/footer-links';

/**
 * FooterBottom - Contact information and copyright
 * Server Component
 */
export function FooterBottom() {
  return (
    <div className="pt-6">
      {/* Contact Info Grid */}
      <div className="mb-6 flex flex-row justify-between gap-4 sm:justify-between">
        {/* Call Us */}
        <Link
          href={contactInfo.phone.href}
          className="group flex items-center gap-2 transition-colors hover:text-[#b3b9c4]"
        >
          <div className="text-[#EB0A1E]">
            <PhoneIcon size={20} />
          </div>
          <div>
            <p className="text-sm text-[#99A1AF] sm:hidden">
              {contactInfo.phone.label}
            </p>
            <p className="hidden text-xs text-[#99A1AF] sm:block sm:text-sm">
              {contactInfo.phone.label}
            </p>
            <p className="hidden text-sm font-semibold text-white sm:block sm:text-base">
              {contactInfo.phone.value}
            </p>
          </div>
        </Link>

        {/* Email Us */}
        <Link
          href={contactInfo.email.href}
          className="group flex items-center gap-2 transition-colors hover:text-[#b3b9c4]"
        >
          <div className="text-[#EB0A1E]">
            <EmailIcon size={20} />
          </div>
          <div>
            <p className="text-sm text-[#99A1AF] sm:hidden">
              {contactInfo.email.label}
            </p>
            <p className="hidden text-xs text-[#99A1AF] sm:block sm:text-sm">
              {contactInfo.email.label}
            </p>
            <p className="hidden text-sm font-semibold text-white sm:block sm:text-base">
              {contactInfo.email.value}
            </p>
          </div>
        </Link>

        {/* Find a Location */}
        <Link
          href={contactInfo.location.href}
          className="group flex items-center gap-2 transition-colors hover:text-[#b3b9c4]"
        >
          <div className="text-[#EB0A1E]">
            <LocationIcon size={20} />
          </div>
          <div>
            <p className="text-sm text-[#99A1AF] sm:hidden">
              {contactInfo.location.label}
            </p>
            <p className="hidden text-xs text-[#99A1AF] sm:block sm:text-sm">
              {contactInfo.location.label}
            </p>
            <p className="hidden text-sm font-semibold text-white sm:block sm:text-base">
              {contactInfo.location.value}
            </p>
          </div>
        </Link>
      </div>

      {/* Copyright and Project Info */}
      <div className="flex flex-col gap-2 border-t border-[#333333] pt-6 text-xs text-[#99A1AF] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <p>&copy; 2026 Toyota Financial Services. All rights reserved.</p>
        <p className="text-[#7a8291]">
          Project ARROW (331) &bull; R1 Launch: March 31, 2026
        </p>
      </div>
    </div>
  );
}
