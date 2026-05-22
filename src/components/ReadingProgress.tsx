import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <div
        className="h-full transition-[width] duration-150"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--brand), var(--brand-3))",
          boxShadow: "0 0 12px var(--brand)",
        }}
      />
    </div>
  );
}
