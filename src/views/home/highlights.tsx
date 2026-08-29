import FeatureGrid from "@/components/feature-grid";
import { homeFeatures } from "@/data";

export default function Highlights() {
  return (
    <section aria-labelledby="highlights" className="v-shell py-20 md:py-30">
      <h2 id="highlights" className="sr-only">
        What Photosnap gives you
      </h2>
      <FeatureGrid
        features={homeFeatures}
        className="gap-y-12 md:mx-auto md:max-w-114.25 md:gap-y-18 lg:max-w-none lg:grid-cols-3 lg:gap-x-7.5"
      />
    </section>
  );
}
