import desktop from "@/assets/pricing/desktop/hero.webp";
import mobile from "@/assets/pricing/mobile/hero.webp";
import tablet from "@/assets/pricing/tablet/hero.webp";
import SplitSection from "@/components/split-section";

export default function Hero() {
  return (
    <SplitSection
      id="hero"
      as="h1"
      headline="Pricing"
      body="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      image={{
        mobile,
        tablet,
        desktop,
        alt: "A photographer silhouetted against an orange sunset, adjusting a tripod-mounted camera.",
      }}
      photoSide="right"
      tone="dark"
      height="compact"
      accent
      priority
    />
  );
}
