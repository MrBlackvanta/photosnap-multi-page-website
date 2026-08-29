type BillingToggleProps = {
  yearly: boolean;
  onChange: (yearly: boolean) => void;
};

export default function BillingToggle({
  yearly,
  onChange,
}: BillingToggleProps) {
  return (
    <div className="text-subheading flex items-center justify-center gap-8">
      <span className={yearly ? "text-ink-muted" : undefined}>Monthly</span>
      <button
        type="button"
        role="switch"
        aria-checked={yearly}
        aria-label="Bill yearly"
        onClick={() => onChange(!yearly)}
        className="relative h-8 w-16 rounded-full bg-grey-200 hover:bg-black/20 motion-safe:transition-colors"
      >
        <span
          className={`absolute top-1 left-1 size-6 rounded-full bg-black motion-safe:transition-transform ${
            yearly ? "translate-x-8" : ""
          }`}
        />
      </button>
      <span className={yearly ? undefined : "text-ink-muted"}>Yearly</span>
    </div>
  );
}
