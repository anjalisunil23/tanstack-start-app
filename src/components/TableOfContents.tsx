import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  title: string;
  number: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="glass rounded-2xl p-5 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
        Table of contents
      </div>
      <ol className="space-y-1.5">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-start gap-3 text-sm rounded-lg px-2 py-1.5 transition-all"
                style={{
                  color: isActive ? "var(--brand)" : "oklch(0.45 0.02 260)",
                  background: isActive ? "oklch(0.68 0.18 45 / 0.10)" : "transparent",
                }}
              >
                <span
                  className="font-mono text-[11px] mt-0.5 shrink-0 w-6"
                  style={{ color: isActive ? "var(--brand)" : "oklch(0.60 0.02 260)" }}
                >
                  {item.number}
                </span>
                <span className="leading-snug group-hover:text-foreground transition-colors">
                  {item.title}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
