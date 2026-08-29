import desktop from "@/assets/features/desktop/hero.webp";
import mobile from "@/assets/features/mobile/hero.webp";
import tablet from "@/assets/features/tablet/hero.webp";
import SplitSection from "@/components/split-section";

export default function Hero() {
  return (
    <SplitSection
      id="hero"
      as="h1"
      headline="Features"
      body="We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories."
      image={{
        mobile,
        tablet,
        desktop,
        alt: "A photographer on a rock ledge at dusk, holding a DSLR at their side.",
      }}
      photoSide="right"
      tone="dark"
      height="compact"
      accent
      priority
    />
  );
}
