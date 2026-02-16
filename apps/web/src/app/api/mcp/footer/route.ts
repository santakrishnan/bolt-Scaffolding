import { NextResponse } from 'next/server';

// MCP-style endpoint returning footer design tokens parsed from Figma (stubbed)
export async function GET() {
  // In a real integration this would proxy the Figma MCP API and extract tokens
  const tokens = {
    brandPrimary: '#EB0A1E',
    brandForeground: '#111111',
    footerBg: '#FFFFFF',
    footerMuted: '#6B7280',
    footerLink: '#EB0A1E',
    footerPadding: '32px',
    footerColumns: '3'
  };

  return NextResponse.json(tokens, { status: 200 });
}
