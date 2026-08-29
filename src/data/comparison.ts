import type { PlanName } from "./plans";

export type ComparisonRow = {
  feature: string;
  includedIn: PlanName[];
};

export const comparisonPlans: PlanName[] = ["Basic", "Pro", "Business"];

export const comparisonRows: ComparisonRow[] = [
  { feature: "Unlimited story posting", includedIn: comparisonPlans },
  { feature: "Unlimited photo upload", includedIn: comparisonPlans },
  { feature: "Embedding custom content", includedIn: comparisonPlans },
  { feature: "Customize metadata", includedIn: comparisonPlans },
  { feature: "Advanced metrics", includedIn: comparisonPlans },
  { feature: "Photo downloads", includedIn: comparisonPlans },
  { feature: "Search engine indexing", includedIn: comparisonPlans },
  { feature: "Custom analytics", includedIn: comparisonPlans },
];
