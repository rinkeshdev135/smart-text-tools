type AdSlotProps = {
  zone: "top-banner" | "sidebar" | "below-result";
};

const zoneConfig = {
  "top-banner": {
    label: "Top Banner Ad",
    size: "728 x 90",
    minHeight: "min-h-[96px]"
  },
  sidebar: {
    label: "Sidebar Ad",
    size: "300 x 250",
    minHeight: "min-h-[266px]"
  },
  "below-result": {
    label: "Below Result Ad",
    size: "336 x 280",
    minHeight: "min-h-[296px]"
  }
} as const;

export function AdSlot({ zone }: AdSlotProps) {
  const config = zoneConfig[zone];

  return (
    <div
      className={`rounded-3xl border border-dashed border-brand-300/60 bg-white/70 p-4 text-center shadow-panel backdrop-blur ${config.minHeight} dark:border-brand-500/40 dark:bg-slate-900/60`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">
        {config.label}
      </p>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
        Reserved ad placement for AdSense
      </p>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{config.size}</p>
    </div>
  );
}
