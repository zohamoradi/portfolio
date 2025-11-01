export function Section({ id, title, eyebrow, children }:{ id?: string; title: string; eyebrow?: string; children: React.ReactNode }){
  return (
    <section id={id} className="scroll-mt-20">
      <div className="container-prose">
        <div className="mb-6">
          {eyebrow && <p className="uppercase tracking-wider text-xs text-[hsl(var(--muted))]">{eyebrow}</p>}
          <h2 className="text-2xl sm:text-3xl font-semibold mt-1">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
