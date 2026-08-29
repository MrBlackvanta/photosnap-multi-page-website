import StoryGrid from "@/components/story-grid";
import { featuredStories } from "@/data";
import { Hero, Highlights, Showcase } from "@/views/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showcase />
      <StoryGrid
        id="featured-stories"
        heading="Featured stories"
        stories={featuredStories}
      />
      <Highlights />
    </>
  );
}
