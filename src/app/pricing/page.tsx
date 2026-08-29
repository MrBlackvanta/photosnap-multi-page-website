import type { Metadata } from "next";

import BetaCta from "@/components/beta-cta";
import { pageMetadata } from "@/lib/metadata";
import { Compare, Hero, Plans } from "@/views/pricing";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  shareTitle: "Photosnap pricing",
  description:
    "Three Photosnap plans, billed monthly or yearly: Basic at $19, Pro at $39 and Business at $99 a month, compared feature by feature.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Hero />
      <Plans />
      <Compare />
      <BetaCta />
    </>
  );
}
