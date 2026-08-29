export type PlanName = "Basic" | "Pro" | "Business";

export type Plan = {
  name: PlanName;
  summary: string;
  monthly: number;
  yearly: number;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Basic",
    summary:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    monthly: 19,
    yearly: 190,
  },
  {
    name: "Pro",
    summary:
      "More advanced features available. Recommended for photography veterans and professionals.",
    monthly: 39,
    yearly: 390,
    featured: true,
  },
  {
    name: "Business",
    summary:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    monthly: 99,
    yearly: 990,
  },
];
