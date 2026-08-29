import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons";

import type { NavLink, SocialLink } from "./types";

export const navLinks: NavLink[] = [
  { href: "/stories", label: "Stories" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

export const footerLinks: NavLink[] = [
  { href: "/", label: "Home" },
  ...navLinks,
];

export const socialLinks: SocialLink[] = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "YouTube", href: "#", icon: YouTubeIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Pinterest", href: "#", icon: PinterestIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
];
