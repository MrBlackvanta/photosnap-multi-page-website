import everyoneDesktop from "@/assets/home/desktop/designed-for-everyone.webp";
import everyoneMobile from "@/assets/home/mobile/designed-for-everyone.webp";
import everyoneTablet from "@/assets/home/tablet/designed-for-everyone.webp";
import storiesDesktop from "@/assets/home/desktop/beautiful-stories.webp";
import storiesMobile from "@/assets/home/mobile/beautiful-stories.webp";
import storiesTablet from "@/assets/home/tablet/beautiful-stories.webp";
import SplitSection from "@/components/split-section";

export default function Showcase() {
  return (
    <>
      <SplitSection
        id="beautiful-stories"
        headline={
          <>
            Beautiful
            <br />
            stories
            <br />
            every time
          </>
        }
        body="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        link={{ href: "/stories", label: "View the stories" }}
        image={{
          mobile: storiesMobile,
          tablet: storiesTablet,
          desktop: storiesDesktop,
          alt: "A laptop on a wooden desk showing a photo story being edited.",
        }}
        photoSide="left"
      />

      <SplitSection
        id="designed-for-everyone"
        headline="Designed for everyone"
        body="Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it."
        link={{ href: "/stories", label: "View the stories" }}
        image={{
          mobile: everyoneMobile,
          tablet: everyoneTablet,
          desktop: everyoneDesktop,
          alt: "A photographer holding a camera mounted on a handheld gimbal.",
        }}
        photoSide="right"
      />
    </>
  );
}
