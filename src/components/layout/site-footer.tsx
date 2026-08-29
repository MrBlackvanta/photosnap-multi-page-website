import Link from "next/link";

import ArrowLink from "@/components/arrow-link";
import { Logo } from "@/components/icons";
import { socialLinks } from "@/data";

import NavLinks from "./nav-links";

export default function SiteFooter() {
  return (
    <footer>
      <div className="bg-black text-white">
        <div className="v-shell grid justify-items-center gap-0 pt-14 pb-14 md:grid-cols-2 md:justify-items-start md:pt-16 md:pb-16 lg:grid-cols-[17.8125rem_1fr_auto]">
          <Link
            href="/"
            aria-label="Photosnap, home"
            className="order-1 inline-flex md:order-0 md:col-start-1 md:row-start-1"
          >
            <Logo className="h-4 w-42.5" />
          </Link>

          <NavLinks
            variant="footer"
            className="order-3 mt-12.25 md:order-0 md:col-start-1 md:row-start-2 md:mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0"
          />

          <ul className="order-2 mt-8 flex gap-3.25 md:order-0 md:col-start-1 md:row-start-3 md:mt-18 lg:row-start-2 lg:mt-21.25">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Link href={href} aria-label={label} className="flex v-social">
                  <Icon className="w-5" />
                </Link>
              </li>
            ))}
          </ul>

          <ArrowLink
            href="#"
            className="order-4 mt-29.75 md:order-0 md:col-start-2 md:row-start-1 md:mt-0 md:justify-self-end lg:col-start-3"
          >
            Get an invite
          </ArrowLink>

          <p className="order-5 mt-8.5 text-note text-white/50 md:order-0 md:col-start-2 md:row-start-3 md:mt-18 md:justify-self-end lg:col-start-3 lg:row-start-2 lg:mt-21.25">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>

      <p className="v-shell pt-4 pb-0.5 text-center text-meta text-ink-muted">
        Coded by{" "}
        <a
          href="https://www.linkedin.com/in/abdelrhman-vanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black underline underline-offset-2"
        >
          Abdelrhman Abdelaal
        </a>
        .
      </p>
    </footer>
  );
}
