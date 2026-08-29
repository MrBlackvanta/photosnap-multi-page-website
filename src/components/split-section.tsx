import type { StaticImageData } from "next/image";

import ArrowLink from "./arrow-link";
import ResponsiveImage from "./responsive-image";

type SplitSectionProps = {
  id: string;
  as?: "h1" | "h2";
  headline: React.ReactNode;
  body: string;
  link: { href: string; label: string };
  image: {
    mobile: StaticImageData;
    tablet: StaticImageData;
    desktop: StaticImageData;
    alt: string;
  };
  photoSide: "left" | "right";
  tone?: "dark" | "light";
  height?: "hero" | "standard";
  accent?: boolean;
  priority?: boolean;
};

const columns = {
  left: "md:grid-cols-[1fr_30.9375rem] lg:grid-cols-[1fr_38.125rem]",
  right: "md:grid-cols-[30.9375rem_1fr] lg:grid-cols-[38.125rem_1fr]",
};

const panelHeight = {
  hero: "h-104.75 md:h-162.5",
  standard: "h-104.75 md:h-150",
};

const photoHeight = {
  hero: "h-73.5 md:h-162.5",
  standard: "h-67.75 md:h-150",
};

export default function SplitSection({
  id,
  as: Headline = "h2",
  headline,
  body,
  link,
  image,
  photoSide,
  tone = "light",
  height = "standard",
  accent = false,
  priority = false,
}: SplitSectionProps) {
  const photoFirst = photoSide === "left";

  return (
    <section aria-labelledby={id} className={`grid ${columns[photoSide]}`}>
      <div
        className={`relative row-start-2 flex items-center pr-6 pl-8.25 md:row-start-1 ${panelHeight[height]} ${
          tone === "dark" ? "bg-black text-white" : "bg-white text-black"
        } ${accent ? "md:px-0" : "md:px-13.5 lg:px-28"} ${
          photoFirst ? "md:col-start-2" : "md:col-start-1"
        }`}
      >
        <div className="flex w-full items-stretch">
          {accent && (
            <span className="v-brand-gradient absolute top-0 left-8.25 h-1.5 w-32 md:static md:h-auto md:w-1.5 md:shrink-0" />
          )}
          <div
            className={`flex w-full flex-col items-start md:max-w-96.75 ${accent ? "md:ml-12 lg:ml-26.5" : ""}`}
          >
            <Headline
              id={id}
              className="text-display-sm md:text-display uppercase"
            >
              {headline}
            </Headline>
            <p
              className={`mt-4 md:mt-5.25 ${tone === "dark" ? "text-white/60" : "text-black/60"}`}
            >
              {body}
            </p>
            <ArrowLink href={link.href} className="mt-5.75 md:mt-12">
              {link.label}
            </ArrowLink>
          </div>
        </div>
      </div>

      <ResponsiveImage
        {...image}
        priority={priority}
        className={`row-start-1 w-full object-cover ${photoHeight[height]} ${
          photoFirst ? "md:col-start-1" : "md:col-start-2"
        }`}
      />
    </section>
  );
}
