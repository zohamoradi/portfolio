import { Card } from "./Card";

type Item = {
  title: string;
  org: string;
  location?: string;
  period?: string; // ⬅️ اختیاری شد
  bullets?: string[]; // اختیاری هم بکنیم بهتره
};

export function Timeline({ items = [] }: { items?: Item[] }) {
  if (!items.length) {
    return (
      <p className="text-sm text-[hsl(var(--muted))]">No items to display.</p>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((it, i) => (
        <Card key={i}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">
                {it.title} —{" "}
                <span className="text-[hsl(var(--brand))]">{it.org}</span>
              </h3>
              {it.location && (
                <p className="text-sm text-[hsl(var(--muted))]">
                  {it.location}
                </p>
              )}
            </div>
            {it.period ? <p className="text-sm">{it.period}</p> : null}
          </div>

          {it.bullets && it.bullets.length ? (
            <ul className="mt-3 list-disc pl-5 space-y-1">
              {it.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
