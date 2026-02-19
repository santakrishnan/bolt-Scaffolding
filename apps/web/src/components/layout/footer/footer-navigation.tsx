'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@tfs-ucmp/ui'
import Link from 'next/link'
import { footerSections } from '~/lib/data/footer/footer-links'

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
            <h3 className="mb-4 font-bold text-sm text-white uppercase tracking-wide">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-[#99A1AF] text-sm transition-colors hover:text-[#b3b9c4]"
                    href={link.href}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    target={link.external ? '_blank' : undefined}
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
        <Accordion className="w-full" type="multiple">
          {footerSections.map((section, index) => (
            <AccordionItem
              className="border-[#333333] border-b"
              key={section.title}
              value={`section-${index}`}
            >
              <AccordionTrigger className="py-4 text-left font-bold text-sm text-white uppercase tracking-wide hover:no-underline">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        className="text-[#99A1AF] text-sm transition-colors hover:text-[#b3b9c4]"
                        href={link.href}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        target={link.external ? '_blank' : undefined}
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
  )
}
