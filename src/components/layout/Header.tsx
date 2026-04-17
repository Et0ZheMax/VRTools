"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MobileNav } from "@/components/layout/MobileNav";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/heroes", label: "Heroes" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" }
];

export const Header = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold text-accent">Viking Rise Tools</Link>
        <nav className="hidden gap-5 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-slate-300 hover:text-accent active:text-accentSoft">
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-slate-700 p-2 text-slate-200 hover:border-accent hover:text-accent md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <MobileNav open={open} navItems={navItems} onNavigate={() => setOpen(false)} />
    </header>
  );
};
