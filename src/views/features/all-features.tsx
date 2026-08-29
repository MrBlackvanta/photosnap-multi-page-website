import FeatureGrid from "@/components/feature-grid";
import { features } from "@/data";

export default function AllFeatures() {
  return (
    <section
      aria-labelledby="all-features"
      className="v-shell py-16 md:py-28 lg:py-40"
    >
      <h2 id="all-features" className="sr-only">
        Everything Photosnap gives you
      </h2>
      <FeatureGrid
        features={features}
        className="gap-y-13.75 md:grid-cols-2 md:gap-x-2.5 md:gap-y-19 lg:grid-cols-3 lg:gap-x-7.5 lg:gap-y-26"
      />
    </section>
  );
}
