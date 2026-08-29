import type { Metadata } from "next";

import StoryGrid from "@/components/story-grid";
import { stories } from "@/data";
import { pageMetadata } from "@/lib/metadata";
import { Hero } from "@/views/stories";

export const metadata: Metadata = pageMetadata({
  title: "Stories",
  shareTitle: "Photosnap stories",
  description:
    "Read photo stories from around the world — mountain ranges, sunset cityscapes, long voyages and the Milky Way, told by the photographers who were there.",
  path: "/stories",
});

export default function StoriesPage() {
  return (
    <>
      <Hero />
      <StoryGrid
        id="all-stories"
        heading="All stories"
        stories={stories}
        showDates
      />
    </>
  );
}
