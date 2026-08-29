"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { footerLinks, navLinks } from "@/data/nav";
import type { NavLink } from "@/data/types";

type NavLinksVariant = "header" | "footer" | "menu";

type Variant = {
  landmark: string;
  links: NavLink[];
  nav: string;
  list: string;
  link: string;
};

const variants: Record<NavLinksVariant, Variant> = {
  header: {
    landmark: "Main",
    links: navLinks,
    nav: "hidden md:block",
    list: "flex gap-8.75",
    link: "text-label block",
  },
  footer: {
    landmark: "Footer",
    links: footerLinks,
    nav: "",
    list:
      "flex flex-col items-center gap-4.75 md:flex-row md:gap-6 lg:flex-col lg:items-start lg:gap-4.75",
    link: "text-label block",
  },
  menu: {
    landmark: "Main",
    links: navLinks,
    nav: "",
    list: "flex flex-col gap-5",
    link: "text-menu block text-center",
  },
};

type NavLinksProps = {
  variant: NavLinksVariant;
  className?: string;
  onNavigate?: () => void;
};

export default function NavLinks({
  variant,
  className,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();
  const current = pathname.replace(/(.)\/$/, "$1");
  const { landmark, links, nav, list, link } = variants[variant];

  return (
    <nav aria-label={landmark} className={`${nav} ${className ?? ""}`}>
      <ul className={list}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={current === href ? "page" : undefined}
              className={`v-link uppercase ${link}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
