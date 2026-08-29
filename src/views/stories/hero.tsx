import ArrowLink from "@/components/arrow-link";
import ResponsiveImage from "@/components/responsive-image";
import { featuredStory } from "@/data";

export default function Hero() {
  const { eyebrow, title, author, date, datetime, body, image } = featuredStory;

  return (
    <section aria-labelledby="featured-story" className="grid text-white">
      <ResponsiveImage
        {...image}
        alt=""
        priority
        className="col-start-1 row-start-1 h-79.25 w-full object-cover md:h-162.5"
      />
      <span className="v-hero-scrim col-start-1 row-start-1 hidden h-162.5 md:block" />

      <div className="col-start-1 row-start-2 flex h-123.75 items-center bg-black pr-6 pl-8.25 md:row-start-1 md:h-162.5 md:bg-transparent md:px-9.75 lg:pl-28">
        <div className="flex w-full flex-col items-start md:max-w-96.75">
          <p className="text-label uppercase">{eyebrow}</p>
          <h1
            id="featured-story"
            className="text-display-sm mt-4 uppercase md:text-display md:mt-6"
          >
            {title}
          </h1>
          <p className="text-meta mt-4 flex gap-2.25">
            <time dateTime={datetime} className="text-white/75">
              {date}
            </time>
            <span>by {author}</span>
          </p>
          <p className="mt-6 text-white/60">{body}</p>
          <ArrowLink href="#" className="mt-6">
            Read the story
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
