const LAYOUTS = [
  ["w-2/3", "w-full", "w-5/6", "w-1/2"],
  ["w-1/2", "w-full", "w-full", "w-2/3"],
  ["w-3/4", "w-1/2", "w-full", "w-3/4"],
];

export function ProjectMockup({ index = 0 }: { index?: number }) {
  const bars = LAYOUTS[index % LAYOUTS.length];

  return (
    <div className="aspect-video w-full overflow-hidden rounded-t-xl border-b border-border bg-muted">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>
      <div className="flex h-[calc(100%-2rem)] flex-col justify-center gap-3 px-6">
        <div className={`h-3 rounded-full bg-accent/70 ${bars[0]}`} />
        <div className={`h-2 rounded-full bg-primary/15 ${bars[1]}`} />
        <div className={`h-2 rounded-full bg-primary/15 ${bars[2]}`} />
        <div className={`h-2 rounded-full bg-primary/10 ${bars[3]}`} />
      </div>
    </div>
  );
}
