import type { Feature } from "@/data";

type FeatureGridProps = {
  features: Feature[];
  as?: "h2" | "h3";
  className?: string;
};

export default function FeatureGrid({
  features,
  as: Heading = "h3",
  className,
}: FeatureGridProps) {
  return (
    <ul className={`grid text-center ${className ?? ""}`}>
      {features.map(({ title, body, icon: Icon }) => (
        <li key={title} className="v-rise">
          <div className="flex h-18 items-center justify-center">
            <Icon />
          </div>
          <Heading className="text-subheading mt-12">{title}</Heading>
          <p className="mt-4 text-black/60">{body}</p>
        </li>
      ))}
    </ul>
  );
}
