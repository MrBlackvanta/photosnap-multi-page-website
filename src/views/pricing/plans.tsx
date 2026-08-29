"use client";

import { useState } from "react";

import { plans } from "@/data";

import BillingToggle from "./billing-toggle";
import PlanCard from "./plan-card";

export default function Plans() {
  const [yearly, setYearly] = useState(false);

  return (
    <section
      aria-labelledby="plans"
      className="v-shell pt-16 md:pt-28 lg:pt-30"
    >
      <h2 id="plans" className="sr-only">
        Choose a plan
      </h2>
      <BillingToggle yearly={yearly} onChange={setYearly} />
      <ul className="mt-10 grid gap-y-6 lg:mt-12 lg:grid-cols-3 lg:items-center lg:gap-x-7.5">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} yearly={yearly} />
        ))}
      </ul>
    </section>
  );
}
