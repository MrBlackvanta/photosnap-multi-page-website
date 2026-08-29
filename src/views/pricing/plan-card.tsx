import type { Plan } from "@/data";

type PlanCardProps = {
  plan: Plan;
  yearly: boolean;
};

export default function PlanCard({ plan, yearly }: PlanCardProps) {
  const { name, summary, featured } = plan;
  const price = yearly ? plan.yearly : plan.monthly;
  const muted = featured ? "text-white/60" : "text-black/60";

  return (
    <li
      className={`relative px-4.25 pt-14 pb-10 text-center md:px-10 md:pt-10 md:text-left lg:pt-14 lg:text-center ${
        featured
          ? "bg-black text-white lg:pt-22 lg:pb-17.75"
          : "bg-grey-100 text-black"
      }`}
    >
      {featured && (
        <span className="v-brand-gradient absolute top-0 left-0 h-1.5 w-full md:h-full md:w-1.5 lg:h-1.5 lg:w-full" />
      )}

      <div className="md:flex md:items-start md:justify-between lg:block">
        <div className="md:w-67.5 lg:w-auto">
          <h3 className="text-heading">{name}</h3>
          <p className={`mt-4.5 ${muted}`}>{summary}</p>
        </div>
        <p className="mt-10 md:mt-0 md:pt-0.5 md:text-right lg:mt-10 lg:pt-0 lg:text-center">
          <span className="text-display v-trim-display block">
            ${price.toFixed(2)}
          </span>
          <span className={muted}>per {yearly ? "year" : "month"}</span>
        </p>
      </div>

      <a
        href="#"
        className={`v-btn v-btn-sm mt-10 w-full max-w-61.25 md:mt-8 md:max-w-67.5 lg:mt-10 lg:max-w-none ${
          featured ? "v-btn-light" : "v-btn-dark"
        }`}
      >
        Pick plan<span className="sr-only"> {name}</span>
      </a>
    </li>
  );
}
