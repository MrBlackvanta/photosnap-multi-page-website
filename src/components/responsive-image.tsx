import type { StaticImageData } from "next/image";

type ResponsiveImageProps = {
  mobile: StaticImageData;
  tablet: StaticImageData;
  desktop: StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function ResponsiveImage({
  mobile,
  tablet,
  desktop,
  alt,
  className,
  priority,
}: ResponsiveImageProps) {
  return (
    <picture className="contents">
      <source
        media="(min-width: 64rem)"
        srcSet={desktop.src}
        width={desktop.width}
        height={desktop.height}
      />
      <source
        media="(min-width: 48rem)"
        srcSet={tablet.src}
        width={tablet.width}
        height={tablet.height}
      />
      <img
        src={mobile.src}
        width={mobile.width}
        height={mobile.height}
        alt={alt}
        decoding="async"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
      />
    </picture>
  );
}
