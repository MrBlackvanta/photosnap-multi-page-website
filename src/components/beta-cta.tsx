import desktop from "@/assets/shared/desktop/bg-beta.webp";
import mobile from "@/assets/shared/mobile/bg-beta.webp";
import tablet from "@/assets/shared/tablet/bg-beta.webp";

import ArrowLink from "./arrow-link";
import ResponsiveImage from "./responsive-image";

export default function BetaCta() {
  return (
    <section aria-labelledby="beta-invite" className="relative grid text-white">
      <ResponsiveImage
        mobile={mobile}
        tablet={tablet}
        desktop={desktop}
        alt=""
        className="col-start-1 row-start-1 h-72 w-full object-cover md:h-70"
      />
      <span className="col-start-1 row-start-1 bg-black/50" />

      <div className="v-shell col-start-1 row-start-1 flex h-72 flex-col justify-center md:h-70 md:flex-row md:items-center md:justify-between">
        <h2
          id="beta-invite"
          className="text-display-sm md:text-display max-w-100 uppercase"
        >
          We’re in beta.
          <br />
          Get your invite today!
        </h2>
        <ArrowLink href="#" className="mt-6 md:mt-0">
          Get an invite
        </ArrowLink>
      </div>

      <span className="v-brand-gradient absolute top-0 left-8.25 h-1.5 w-32 md:left-0 md:h-full md:w-1.5" />
    </section>
  );
}
