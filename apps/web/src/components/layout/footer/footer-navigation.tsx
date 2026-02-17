'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'ui/primitives/accordion';
import { footerSections } from '@/lib/footer/footer-links';

/**
 * FooterNavigation - Navigation links with accordion for mobile
 * Client Component for accordion interactivity
 */
export function FooterNavigation() {
  return (
    <div>
      {/* Desktop Grid Layout */}
      <div className="hidden grid-cols-4 gap-8 sm:grid lg:gap-12">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-[#99A1AF] transition-colors hover:text-[#b3b9c4]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile Accordion Layout */}
      <div className="sm:hidden">
        <Accordion type="multiple" className="w-full">
          {footerSections.map((section, index) => (
            <AccordionItem
              key={section.title}
              value={`section-${index}`}
              className="border-b border-[#333333]"
            >
              <AccordionTrigger className="py-4 text-left text-sm font-bold uppercase tracking-wide text-white hover:no-underline">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-[#99A1AF] transition-colors hover:text-[#b3b9c4]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
