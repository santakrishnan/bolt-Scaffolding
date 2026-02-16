"use client";

import React, { useState } from 'react';

interface FooterSection {
  title: string;
  links: string[];
}

interface MobileFooterProps {
  sections: FooterSection[];
  className?: string;
}

export function MobileFooter({ sections, className = "" }: MobileFooterProps) {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <footer className={`bg-[color:var(--color-bg-secondary)] text-white py-8 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="border-b border-gray-700 last:border-b-0">
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="font-semibold text-base">{section.title}</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform ${expandedSections.includes(index) ? 'rotate-180' : ''}`}
              >
                <path 
                  d="M5 7.5L10 12.5L15 7.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {expandedSections.includes(index) && (
              <ul className="pb-4 space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-sm text-gray-300 hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2025 Arrow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
