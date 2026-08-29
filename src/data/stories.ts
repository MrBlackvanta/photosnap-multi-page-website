import type { StaticImageData } from "next/image";

import daysVoyageDesktop from "@/assets/stories/desktop/18-days-voyage.webp";
import architecturalsDesktop from "@/assets/stories/desktop/architecturals.webp";
import behindTheWavesDesktop from "@/assets/stories/desktop/behind-the-waves.webp";
import calmWatersDesktop from "@/assets/stories/desktop/calm-waters.webp";
import cityscapesDesktop from "@/assets/stories/desktop/cityscapes.webp";
import darkForestDesktop from "@/assets/stories/desktop/dark-forest.webp";
import kingOnAfricaDesktop from "@/assets/stories/desktop/king-on-africa.webp";
import landOfDreamsDesktop from "@/assets/stories/desktop/land-of-dreams.webp";
import milkyWayDesktop from "@/assets/stories/desktop/milky-way.webp";
import moonDesktop from "@/assets/stories/desktop/moon-of-appalacia.webp";
import mountainsDesktop from "@/assets/stories/desktop/mountains.webp";
import rageOfTheSeaDesktop from "@/assets/stories/desktop/rage-of-the-sea.webp";
import runningFreeDesktop from "@/assets/stories/desktop/running-free.webp";
import somwarpetDesktop from "@/assets/stories/desktop/somwarpet.webp";
import tripToNowhereDesktop from "@/assets/stories/desktop/trip-to-nowhere.webp";
import unforeseenCornersDesktop from "@/assets/stories/desktop/unforeseen-corners.webp";
import worldTourDesktop from "@/assets/stories/desktop/world-tour.webp";
import daysVoyageMobile from "@/assets/stories/mobile/18-days-voyage.webp";
import architecturalsMobile from "@/assets/stories/mobile/architecturals.webp";
import behindTheWavesMobile from "@/assets/stories/mobile/behind-the-waves.webp";
import calmWatersMobile from "@/assets/stories/mobile/calm-waters.webp";
import cityscapesMobile from "@/assets/stories/mobile/cityscapes.webp";
import darkForestMobile from "@/assets/stories/mobile/dark-forest.webp";
import kingOnAfricaMobile from "@/assets/stories/mobile/king-on-africa.webp";
import landOfDreamsMobile from "@/assets/stories/mobile/land-of-dreams.webp";
import milkyWayMobile from "@/assets/stories/mobile/milky-way.webp";
import moonMobile from "@/assets/stories/mobile/moon-of-appalacia.webp";
import mountainsMobile from "@/assets/stories/mobile/mountains.webp";
import rageOfTheSeaMobile from "@/assets/stories/mobile/rage-of-the-sea.webp";
import runningFreeMobile from "@/assets/stories/mobile/running-free.webp";
import somwarpetMobile from "@/assets/stories/mobile/somwarpet.webp";
import tripToNowhereMobile from "@/assets/stories/mobile/trip-to-nowhere.webp";
import unforeseenCornersMobile from "@/assets/stories/mobile/unforeseen-corners.webp";
import worldTourMobile from "@/assets/stories/mobile/world-tour.webp";
import moonTablet from "@/assets/stories/tablet/moon-of-appalacia.webp";

export type Story = {
  title: string;
  author: string;
  date: string;
  datetime: string;
  image: {
    mobile: StaticImageData;
    tablet: StaticImageData;
    desktop: StaticImageData;
  };
};

const shot = (mobile: StaticImageData, desktop: StaticImageData) => ({
  mobile,
  tablet: desktop,
  desktop,
});

export const stories: Story[] = [
  {
    title: "The Mountains",
    author: "John Appleseed",
    date: "April 16th 2020",
    datetime: "2020-04-16",
    image: shot(mountainsMobile, mountainsDesktop),
  },
  {
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    date: "April 14th 2020",
    datetime: "2020-04-14",
    image: shot(cityscapesMobile, cityscapesDesktop),
  },
  {
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    date: "April 11th 2020",
    datetime: "2020-04-11",
    image: shot(daysVoyageMobile, daysVoyageDesktop),
  },
  {
    title: "Architecturals",
    author: "Samantha Brooke",
    date: "April 9th 2020",
    datetime: "2020-04-09",
    image: shot(architecturalsMobile, architecturalsDesktop),
  },
  {
    title: "World Tour 2019",
    author: "Timothy Wagner",
    date: "April 7th 2020",
    datetime: "2020-04-07",
    image: shot(worldTourMobile, worldTourDesktop),
  },
  {
    title: "Unforeseen Corners",
    author: "William Malcolm",
    date: "April 3rd 2020",
    datetime: "2020-04-03",
    image: shot(unforeseenCornersMobile, unforeseenCornersDesktop),
  },
  {
    title: "King on Africa: Part II",
    author: "Tim Hillenburg",
    date: "March 29th 2020",
    datetime: "2020-03-29",
    image: shot(kingOnAfricaMobile, kingOnAfricaDesktop),
  },
  {
    title: "The Trip to Nowhere",
    author: "Felicia Rourke",
    date: "March 21st 2020",
    datetime: "2020-03-21",
    image: shot(tripToNowhereMobile, tripToNowhereDesktop),
  },
  {
    title: "Rage of The Sea",
    author: "Mohammed Abdul",
    date: "March 19th 2020",
    datetime: "2020-03-19",
    image: shot(rageOfTheSeaMobile, rageOfTheSeaDesktop),
  },
  {
    title: "Running Free",
    author: "Michelle",
    date: "March 16th 2020",
    datetime: "2020-03-16",
    image: shot(runningFreeMobile, runningFreeDesktop),
  },
  {
    title: "Behind the Waves",
    author: "Lamarr Wilson",
    date: "March 11th 2020",
    datetime: "2020-03-11",
    image: shot(behindTheWavesMobile, behindTheWavesDesktop),
  },
  {
    title: "Calm Waters",
    author: "Samantha Brooke",
    date: "March 9th 2020",
    datetime: "2020-03-09",
    image: shot(calmWatersMobile, calmWatersDesktop),
  },
  {
    title: "The Milky Way",
    author: "Benjamin Cruz",
    date: "March 5th 2020",
    datetime: "2020-03-05",
    image: shot(milkyWayMobile, milkyWayDesktop),
  },
  {
    title: "Night at The Dark Forest",
    author: "Mohammed Abdul",
    date: "March 4th 2020",
    datetime: "2020-03-04",
    image: shot(darkForestMobile, darkForestDesktop),
  },
  {
    title: "Somwarpet’s Beauty",
    author: "Michelle",
    date: "March 1st 2020",
    datetime: "2020-03-01",
    image: shot(somwarpetMobile, somwarpetDesktop),
  },
  {
    title: "Land of Dreams",
    author: "William Malcolm",
    date: "February 25th 2020",
    datetime: "2020-02-25",
    image: shot(landOfDreamsMobile, landOfDreamsDesktop),
  },
];

export const featuredStories = stories.slice(0, 4);

export const featuredStory: Story & { eyebrow: string; body: string } = {
  eyebrow: "Last month’s featured story",
  title: "Hazy full moon of Appalachia",
  author: "John Appleseed",
  date: "March 2nd 2020",
  datetime: "2020-03-02",
  body: "The dissected plateau area, while not actually made up of geological mountains, is popularly called “mountains,” especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
  image: { mobile: moonMobile, tablet: moonTablet, desktop: moonDesktop },
};
