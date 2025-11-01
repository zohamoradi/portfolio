"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#extra", label: "More" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-black/5 bg-[hsl(var(--bg))]/70">
      <div className="container-prose flex items-center justify-between h-16">
        <Link href="/" className="font-bold tracking-tight">
          Zoha Moradi
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="btn-ghost text-sm">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
