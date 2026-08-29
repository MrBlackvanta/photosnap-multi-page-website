import type { Story } from "@/data";

import StoryCard from "./story-card";

type StoryGridProps = {
  id: string;
  heading: string;
  stories: Story[];
  showDates?: boolean;
};

export default function StoryGrid({
  id,
  heading,
  stories,
  showDates = false,
}: StoryGridProps) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="sr-only">
        {heading}
      </h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4">
        {stories.map((story) => (
          <li key={story.title} className="v-rise">
            <StoryCard story={story} showDate={showDates} />
          </li>
        ))}
      </ul>
    </section>
  );
}
