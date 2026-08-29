export const brandGradientId = "brand-gradient";

export default function BrandGradient() {
  return (
    <svg
      width="0"
      height="0"
      aria-hidden="true"
      focusable="false"
      className="absolute"
    >
      <defs>
        <linearGradient
          id={brandGradientId}
          x1="0%"
          y1="85.457%"
          x2="50%"
          y2="14.543%"
        >
          <stop offset="0%" stopColor="#ffc593" />
          <stop offset="51.945%" stopColor="#bc7198" />
          <stop offset="100%" stopColor="#5a77ff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
