import desktop from "@/assets/home/desktop/create-and-share.webp";
import mobile from "@/assets/home/mobile/create-and-share.webp";
import tablet from "@/assets/home/tablet/create-and-share.webp";
import SplitSection from "@/components/split-section";

export default function Hero() {
  return (
    <SplitSection
      id="hero"
      as="h1"
      headline="Create and share your photo stories."
      body="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      link={{ href: "#", label: "Get an invite" }}
      image={{
        mobile,
        tablet,
        desktop,
        alt: "A hiker at the end of a wooden pier, facing a lake ringed by mountains.",
      }}
      photoSide="right"
      tone="dark"
      height="hero"
      accent
      priority
    />
  );
}
