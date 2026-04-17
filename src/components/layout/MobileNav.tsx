"use client";

import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
};

type MobileNavProps = {
  open: boolean;
  navItems: NavItem[];
  onNavigate: () => void;
};

export const MobileNav = ({ open, navItems, onNavigate }: MobileNavProps): JSX.Element | null => {
  if (!open) {
    return null;
  }

  return (
    <nav className="border-t border-slate-800 bg-panel px-4 py-3 md:hidden">
      <ul className="grid gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-slate-800 hover:text-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
