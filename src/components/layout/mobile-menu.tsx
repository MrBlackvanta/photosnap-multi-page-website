"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/icons";

import NavLinks from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const tablet = window.matchMedia("(min-width: 48rem)");
    const closeOnTablet = () => {
      if (tablet.matches) setOpen(false);
    };
    tablet.addEventListener("change", closeOnTablet);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);

    const toggle = toggleRef.current;
    const behind = document.querySelectorAll("main, footer");
    behind.forEach((element) => element.setAttribute("inert", ""));

    const { style } = document.documentElement;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";

    return () => {
      tablet.removeEventListener("change", closeOnTablet);
      document.removeEventListener("keydown", closeOnEscape);
      behind.forEach((element) => element.removeAttribute("inert"));
      style.overflow = previousOverflow;
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label="Menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="-mr-3 flex size-11 items-center justify-center"
      >
        {open ? <CloseIcon className="w-4" /> : <MenuIcon className="w-5" />}
      </button>

      <div
        id="mobile-menu"
        className={`invisible opacity-0 motion-safe:transition-[opacity,visibility] motion-safe:duration-300 ${
          open ? "visible opacity-100" : ""
        }`}
      >
        <div
          aria-hidden="true"
          onClick={close}
          className="fixed inset-x-0 top-18 bottom-0 z-0 bg-black/50"
        />
        <div className="v-shell fixed inset-x-0 top-18 z-10 flex flex-col gap-5 bg-white py-8">
          <NavLinks variant="menu" onNavigate={close} />
          <hr className="border-black/25" />
          <Link
            href="#"
            onClick={close}
            className="v-btn v-btn-lg v-btn-dark w-full"
          >
            Get an invite
          </Link>
        </div>
      </div>
    </div>
  );
}
