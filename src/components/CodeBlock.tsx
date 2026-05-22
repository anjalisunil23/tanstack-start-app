import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface Props {
  code: string;
  language?: string;
  filename?: string;
}

// Lightweight token highlighter — no external deps, dev-blog aesthetic.
function highlight(code: string, lang: string) {
  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  if (lang === "bash" || lang === "sh") {
    return escape(code)
      .replace(/(^|\n)(\$\s.*)/g, (_m, p, l) => `${p}<span class="tok-cmd">${l}</span>`)
      .replace(/(#.*)/g, '<span class="tok-com">$1</span>');
  }

  let out = escape(code);
  // strings
  out = out.replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;|`[^`]*`)/g, '<span class="tok-str">$1</span>');
  // comments
  out = out.replace(/(\/\/.*?$)/gm, '<span class="tok-com">$1</span>');
  out = out.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="tok-com">$1</span>');
  // keywords
  const kw =
    "\\b(import|from|export|default|const|let|var|function|return|if|else|await|async|new|class|extends|try|catch|finally|throw|for|while|of|in|switch|case|break|null|undefined|true|false|this|typeof)\\b";
  out = out.replace(new RegExp(kw, "g"), '<span class="tok-kw">$1</span>');
  // numbers
  out = out.replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="tok-num">$1</span>');
  // functions
  out = out.replace(/([A-Za-z_$][\w$]*)(?=\s*\()/g, '<span class="tok-fn">$1</span>');
  // JSX tags
  out = out.replace(/(&lt;\/?[A-Za-z][\w-]*)/g, '<span class="tok-tag">$1</span>');
  return out;
}

export function CodeBlock({ code, language = "tsx", filename }: Props) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="my-6 group">
      <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-[oklch(0.18_0.02_270)]">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-[oklch(1_0_0/0.08)]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[oklch(0.65_0.20_25)]" />
              <span className="w-3 h-3 rounded-full bg-[oklch(0.80_0.15_85)]" />
              <span className="w-3 h-3 rounded-full bg-[oklch(0.70_0.18_150)]" />
            </div>
            <span className="ml-3 text-xs font-mono text-[oklch(0.70_0.02_260)]">
              {filename ?? language}
            </span>
          </div>
          <button
            onClick={onCopy}
            className="flex items-center gap-1.5 text-xs font-mono text-[oklch(0.70_0.02_260)] hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-[oklch(1_0_0/0.08)]"
            aria-label="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[var(--brand)]" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="overflow-x-auto p-4 text-[13.5px] leading-relaxed font-mono text-[oklch(0.92_0.01_250)]">
          <code
            dangerouslySetInnerHTML={{ __html: highlight(code, language) }}
          />
        </pre>
      </div>
      <style>{`
        .tok-kw { color: oklch(0.72 0.20 295); }
        .tok-str { color: oklch(0.80 0.16 145); }
        .tok-num { color: oklch(0.82 0.15 60); }
        .tok-com { color: oklch(0.55 0.03 260); font-style: italic; }
        .tok-fn { color: oklch(0.85 0.14 220); }
        .tok-tag { color: oklch(0.75 0.18 25); }
        .tok-cmd { color: oklch(0.85 0.14 145); }
      `}</style>
    </div>
  );
}
