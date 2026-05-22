import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/learnwithanjali-logo.png";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className={`glass border-gradient rounded-2xl px-5 py-3 flex items-center justify-between ${scrolled ? "glow-shadow" : ""}`}>
          <Link to="/" className="flex items-center gap-2.5 font-display font-bold">
            <img src={logo} alt="LearnWithAnjali logo" width={32} height={32} className="w-8 h-8 rounded-lg object-contain" />
            <span className="text-foreground">LearnWithAnjali<span className="text-[var(--brand)]">.</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>Home</Link>
            <Link to="/blog1" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Blog 1</Link>
            <Link to="/blog2" className="hover:text-foreground transition-colors" activeProps={{ className: "text-foreground" }}>Blog 2</Link>
          </nav>
          <Link
            to="/blog1"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl text-white hover:opacity-95 transition-opacity"
            style={{ background: "var(--gradient-text)" }}
          >
            Start reading <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
