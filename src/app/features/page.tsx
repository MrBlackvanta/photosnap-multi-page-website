import type { Metadata } from "next";

import BetaCta from "@/components/beta-cta";
import { pageMetadata } from "@/lib/metadata";
import { AllFeatures, Hero } from "@/views/features";

export const metadata: Metadata = pageMetadata({
  title: "Features",
  shareTitle: "Photosnap features",
  description:
    "Responsive galleries, unlimited uploads, embeds, a custom domain, a built-in mailing list and drag-and-drop editing — everything Photosnap gives photographers.",
  path: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <Hero />
      <AllFeatures />
      <BetaCta />
    </>
  );
}
