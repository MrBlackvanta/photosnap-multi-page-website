import { CheckIcon } from "@/components/icons";
import { comparisonPlans, comparisonRows } from "@/data";

export default function Compare() {
  return (
    <section
      aria-labelledby="compare"
      className="v-shell py-16 md:py-28 lg:py-40"
    >
      <h2
        id="compare"
        className="text-display sr-only uppercase md:not-sr-only md:mb-16 md:text-center lg:mb-14"
      >
        Compare
      </h2>

      <table
        role="table"
        className="block w-full table-fixed border-collapse md:table lg:mx-auto lg:max-w-182.5"
      >
        <caption className="sr-only">
          Features included in each Photosnap plan
        </caption>
        <colgroup>
          <col />
          <col className="w-35" />
          <col className="w-35" />
          <col className="w-35" />
        </colgroup>
        <thead role="rowgroup" className="block md:table-header-group">
          <tr role="row" className="block border-b border-black md:table-row">
            <th
              role="columnheader"
              scope="col"
              className="text-label block pb-5.75 text-left uppercase md:table-cell md:pl-6"
            >
              The features
            </th>
            {comparisonPlans.map((plan) => (
              <th
                key={plan}
                role="columnheader"
                scope="col"
                className="text-label sr-only uppercase md:not-sr-only md:table-cell md:text-center"
              >
                {plan}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup" className="block md:table-row-group">
          {comparisonRows.map(({ feature, includedIn }) => (
            <tr
              key={feature}
              role="row"
              className="block border-b border-grey-200 pt-6 pb-5.5 md:table-row md:h-16 md:p-0"
            >
              <th
                role="rowheader"
                scope="row"
                className="text-label block text-left uppercase md:table-cell md:pl-6"
              >
                {feature}
              </th>
              {comparisonPlans.map((plan) => (
                <td
                  key={plan}
                  role="cell"
                  className="inline-block w-1/3 pt-4 align-top md:table-cell md:p-0 md:text-center md:align-middle"
                >
                  <span className="text-label-sm block uppercase md:hidden">
                    {plan}
                  </span>
                  {includedIn.includes(plan) && (
                    <>
                      <CheckIcon className="mt-1.75 block h-3.75 w-4.5 md:mt-0 md:inline-block" />
                      <span className="sr-only">Included</span>
                    </>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
