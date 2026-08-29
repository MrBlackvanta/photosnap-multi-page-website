import type { Story } from "@/data";

import ArrowLink from "./arrow-link";
import ResponsiveImage from "./responsive-image";

type StoryCardProps = {
  story: Story;
  showDate?: boolean;
  priority?: boolean;
};

export default function StoryCard({
  story,
  showDate = false,
  priority = false,
}: StoryCardProps) {
  const { title, author, date, image } = story;

  return (
    <article className="group relative h-93.75 text-white md:h-125">
      <ResponsiveImage
        {...image}
        alt=""
        priority={priority}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="v-card-scrim absolute inset-x-0 bottom-0 h-full md:h-87.5" />
      <span className="v-brand-gradient absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col items-start px-8.25 pb-10 md:px-10">
        {showDate && <p className="text-meta mb-1 text-white/75">{date}</p>}
        <h3 className="text-subheading">{title}</h3>
        <p className="text-meta mt-1">by {author}</p>
        <hr className="mt-4 w-full border-white/25" />
        <ArrowLink href="#" className="mt-5 w-full justify-between">
          Read story
          <span className="sr-only">: {title}</span>
        </ArrowLink>
      </div>
    </article>
  );
}
