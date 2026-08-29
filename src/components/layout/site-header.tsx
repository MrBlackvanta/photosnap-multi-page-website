import Link from "next/link";

import { Logo } from "@/components/icons";

import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function SiteHeader() {
  return (
    <header className="relative z-50">
      <div className="v-shell-header relative z-20 flex h-18 items-center justify-between bg-white md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" aria-label="Photosnap, home" className="inline-flex">
          <Logo className="h-4 w-42.5" />
        </Link>
        <NavLinks variant="header" />
        <Link
          href="#"
          className="v-btn v-btn-sm v-btn-dark ml-auto hidden md:inline-flex"
        >
          Get an invite
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}
