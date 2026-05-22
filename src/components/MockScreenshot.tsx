import type { ReactNode } from "react";

export function MockScreenshot({
  title,
  url,
  caption,
  children,
}: {
  title: string;
  url?: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <figure className="my-8">
      <div className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-muted border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[oklch(0.70_0.20_25)]" />
            <span className="w-3 h-3 rounded-full bg-[oklch(0.82_0.15_85)]" />
            <span className="w-3 h-3 rounded-full bg-[oklch(0.72_0.18_150)]" />
          </div>
          <div className="mx-auto px-3 py-1 rounded-md bg-background border border-border text-xs font-mono text-muted-foreground truncate max-w-[60%]">
            {url ?? title}
          </div>
        </div>
        <div className="bg-background p-6 min-h-[260px]">
          {children}
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-muted-foreground text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}
