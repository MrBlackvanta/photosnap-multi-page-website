import type { ComponentType, SVGProps } from "react";

import {
  BoostExposureIcon,
  CustomDomainIcon,
  DragDropIcon,
  EmbedIcon,
  NoLimitIcon,
  ResponsiveIcon,
} from "@/components/icons";

export type Feature = {
  title: string;
  body: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const features: Feature[] = [
  {
    title: "100% Responsive",
    body: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    icon: ResponsiveIcon,
  },
  {
    title: "No Photo Upload Limit",
    body: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    icon: NoLimitIcon,
  },
  {
    title: "Available to Embed",
    body: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
    icon: EmbedIcon,
  },
  {
    title: "Custom Domain",
    body: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    icon: CustomDomainIcon,
  },
  {
    title: "Boost Your Exposure",
    body: "Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.",
    icon: BoostExposureIcon,
  },
  {
    title: "Drag & Drop Image",
    body: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    icon: DragDropIcon,
  },
];

export const homeFeatures = features.slice(0, 3);
