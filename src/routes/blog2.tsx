import { createFileRoute } from "@tanstack/react-router";
import {
  Calendar, Clock, Sparkles, Target, GitBranch, Wrench,
  Terminal, Lightbulb, Github, Twitter, Linkedin, ArrowRight,
} from "lucide-react";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TableOfContents, type TocItem } from "@/components/TableOfContents";
import { MockScreenshot } from "@/components/MockScreenshot";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/blog2")({
  head: () => ({
    meta: [
      { title: "Code Break Analysis — The useDebounce React Hook Explained" },
      { name: "description", content: "A line-by-line breakdown of a useDebounce React hook: objective, logic flow, function explanation, debugging notes, output, and reflection." },
      { property: "og:title", content: "Code Break Analysis — The useDebounce React Hook Explained" },
      { property: "og:description", content: "A line-by-line breakdown of a useDebounce React hook: objective, logic flow, function explanation, debugging notes, output, and reflection." },
    ],
  }),
  component: Blog2,
});

const toc: TocItem[] = [
  { number: "01", id: "objective", title: "Objective of the Code" },
  { number: "02", id: "source", title: "The Source Code" },
  { number: "03", id: "logic-flow", title: "Logic Flow & Working" },
  { number: "04", id: "explanation", title: "Function & Module Explanation" },
  { number: "05", id: "debugging", title: "Debugging & Optimization" },
  { number: "06", id: "output", title: "Output & Results" },
  { number: "07", id: "reflection", title: "Personal Learning Reflection" },
  { number: "08", id: "references", title: "References" },
];

function SectionHeading({ number, id, children }: { number: string; id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="flex items-baseline gap-4 !mt-16">
      <span className="font-mono text-sm text-[var(--brand)] tracking-widest">{number}</span>
      <span className="text-gradient">{children}</span>
    </h2>
  );
}

function FlowDiagram() {
  const steps = [
    { icon: Terminal, label: "User types", sub: "value changes" },
    { icon: Clock, label: "Timer set", sub: "wait Xms" },
    { icon: GitBranch, label: "Change?", sub: "reset timer" },
    { icon: Sparkles, label: "Settle", sub: "fire effect" },
  ];
  return (
    <div className="my-8 glass rounded-2xl p-6 border-gradient">
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 text-center">
        useDebounce — execution flow
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 text-sm">
        {steps.map((step, i, arr) => (
          <div key={step.label} className="flex md:flex-col items-center md:items-stretch gap-3 flex-1">
            <div className="flex-1 rounded-xl bg-muted border border-border p-4 text-center">
              <step.icon className="w-5 h-5 mx-auto mb-2 text-[var(--brand)]" />
              <div className="font-display font-semibold">{step.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{step.sub}</div>
            </div>
            {i < arr.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted-foreground self-center rotate-90 md:rotate-0 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ConsoleOutput() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <div className="text-muted-foreground"># typed "react" quickly in 300ms</div>
      <div><span className="text-[var(--brand)]">value</span> = "r"</div>
      <div><span className="text-[var(--brand)]">value</span> = "re"</div>
      <div><span className="text-[var(--brand)]">value</span> = "rea"</div>
      <div><span className="text-[var(--brand)]">value</span> = "reac"</div>
      <div><span className="text-[var(--brand)]">value</span> = "react"</div>
      <div className="text-muted-foreground mt-3"># 500ms later, debounced value settles</div>
      <div><span className="text-[oklch(0.55_0.18_145)]">debounced</span> = "react"</div>
      <div className="text-muted-foreground mt-3"># single API call fires</div>
      <div><span className="text-[oklch(0.50_0.18_240)]">GET</span> /api/search?q=react → <span className="text-[oklch(0.55_0.18_145)]">200 OK</span></div>
    </div>
  );
}

function Blog2() {
  return (
    <div id="top" className="relative min-h-screen">
      <ReadingProgress />
      <SiteNav />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 hero-bg">
        <div className="mx-auto max-w-4xl px-4 text-center anim-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[var(--brand)]" />
            Code Break Analysis · Seminar Series · Blog 2
          </div>
          <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            <span className="text-foreground">Code Break Analysis:</span>
            <br />
            <span className="text-gradient">The useDebounce React Hook</span>
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A line-by-line walkthrough of a small but high-impact module discussed in our seminar — what it does, how it works, where it breaks, and what we learned from rebuilding it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--brand)]" /> May 22, 2026</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--brand)]" /> 9 min read</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          <aside className="hidden lg:block">
            <TableOfContents items={toc} />
          </aside>

          <article className="prose-blog max-w-3xl">
            <div className="glass border-gradient rounded-xl p-4 mb-8 text-sm">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--brand)] mb-1">Meta description</div>
              <p className="!my-0 text-muted-foreground">
                A complete code break analysis of the <code>useDebounce</code> React hook — objective, logic flow, line-by-line function explanation, debugging notes, observed output, and personal reflection.
              </p>
            </div>

            {/* 01. Objective */}
            <SectionHeading number="01" id="objective">
              <span className="inline-flex items-center gap-2"><Target className="w-5 h-5" /> Objective of the Code</span>
            </SectionHeading>
            <p>
              The module under analysis is <code>useDebounce</code> — a tiny custom React hook (under 15 lines) that takes a frequently-changing value and returns a delayed copy that only updates after the input has been <em>stable</em> for a given duration.
            </p>
            <p>
              The objective is to <strong>reduce wasteful work</strong>. Without debouncing, an autocomplete search box would fire an API call on every keystroke — typing "react" sends five requests, four of which are immediately stale. With debouncing, only the final settled value triggers the call.
            </p>
            <ul>
              <li>Cut backend load and API quota usage.</li>
              <li>Avoid race conditions where stale responses overwrite fresh ones.</li>
              <li>Smooth out UI updates tied to expensive computations.</li>
            </ul>

            {/* 02. Source */}
            <SectionHeading number="02" id="source">The Source Code</SectionHeading>
            <p>This is the exact module we dissected during the seminar:</p>
            <CodeBlock
              language="tsx"
              filename="src/hooks/useDebounce.ts"
              code={`import { useEffect, useState } from "react";

/**
 * Returns a debounced copy of \`value\` that only updates
 * after \`delay\` milliseconds of no further changes.
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}`}
            />

            {/* 03. Logic Flow */}
            <SectionHeading number="03" id="logic-flow">
              <span className="inline-flex items-center gap-2"><GitBranch className="w-5 h-5" /> Logic Flow & Working</span>
            </SectionHeading>
            <p>
              The hook is built on a classic primitive: <strong>set a timer, cancel it if a new event arrives before it fires</strong>. Only the <em>last</em> timer ever completes.
            </p>
            <FlowDiagram />
            <ol className="list-decimal pl-6 space-y-2 text-[oklch(0.35_0.01_260)]">
              <li>A parent component calls <code>const q = useDebounce(query, 500)</code>.</li>
              <li>On first render, <code>debounced</code> is initialized to the current <code>value</code>.</li>
              <li>The <code>useEffect</code> schedules a 500&nbsp;ms timer that will copy <code>value</code> into <code>debounced</code>.</li>
              <li>If <code>value</code> changes again before 500&nbsp;ms elapse, React re-runs the effect — the <em>cleanup</em> function clears the pending timer and a brand-new one is scheduled.</li>
              <li>Once the user stops typing, no new render happens, the timer completes, and <code>debounced</code> finally updates.</li>
              <li>Components consuming <code>debounced</code> re-render exactly <strong>once</strong> with the settled value.</li>
            </ol>

            {/* 04. Explanation */}
            <SectionHeading number="04" id="explanation">Function & Module Explanation</SectionHeading>
            <p>Breaking the hook into its three meaningful parts:</p>

            <h3>1. The generic signature</h3>
            <CodeBlock
              language="tsx"
              code={`export function useDebounce<T>(value: T, delay = 300): T`}
            />
            <p>
              <code>&lt;T&gt;</code> makes the hook reusable for <em>any</em> type — strings, numbers, objects, even arrays. TypeScript guarantees that the returned value has the same shape as the input. The default <code>delay = 300</code> is a sensible UX baseline used by Google, Algolia, and most major search UIs.
            </p>

            <h3>2. The internal state</h3>
            <CodeBlock
              language="tsx"
              code={`const [debounced, setDebounced] = useState<T>(value);`}
            />
            <p>
              We seed local state with the <em>current</em> value so the very first render is correct. If we initialized with <code>undefined</code>, consumers would have to handle a transient <code>undefined</code> state — a common bug in naive implementations.
            </p>

            <h3>3. The effect + cleanup</h3>
            <CodeBlock
              language="tsx"
              code={`useEffect(() => {
  const timer = setTimeout(() => setDebounced(value), delay);
  return () => clearTimeout(timer);
}, [value, delay]);`}
            />
            <p>
              This is the heart of the hook. The cleanup function is the secret — React runs it <strong>before</strong> the next effect, which cancels the previous pending timer. So even if the user types 20 characters in a second, only the final 300&nbsp;ms-of-silence timer ever fires.
            </p>

            <Callout variant="tip" title="Why the dependency array matters">
              Listing <code>[value, delay]</code> ensures the timer resets whenever either changes. Forgetting <code>delay</code> would make runtime changes to the delay silently ignored — a subtle bug we'll cover next.
            </Callout>

            {/* 05. Debugging */}
            <SectionHeading number="05" id="debugging">
              <span className="inline-flex items-center gap-2"><Wrench className="w-5 h-5" /> Debugging & Optimization Analysis</span>
            </SectionHeading>

            <h3>Bug 1 — Object identity churn</h3>
            <p>
              Passing an inline object (<code>useDebounce({"{ q: query }"})</code>) makes <code>value</code> a new reference on every render. The effect runs every time, the timer resets every time, and the debounced value <em>never settles</em>. Fix: debounce a primitive or wrap the object in <code>useMemo</code>.
            </p>

            <h3>Bug 2 — Missing <code>delay</code> in deps</h3>
            <p>
              An earlier version of this hook used <code>[value]</code> only. When a parent component changed the delay (e.g. via a settings slider), the change was ignored until the value changed again. The exhaustive-deps ESLint rule catches this — keep it enabled.
            </p>

            <h3>Optimization — stale closures and React 18 strict mode</h3>
            <p>
              React 18's StrictMode invokes effects twice in development. Our cleanup is symmetric (every <code>setTimeout</code> has a matching <code>clearTimeout</code>), so the hook is StrictMode-safe. If we had used <code>setInterval</code> or shared a ref across renders, we'd see ghost timers — a classic source of flaky tests.
            </p>

            <Callout variant="warning" title="Don't reach for lodash">
              <code>lodash.debounce</code> is excellent, but using it inside a React component forces you to memoize the debounced function with <code>useMemo</code>/<code>useCallback</code> <em>and</em> handle cleanup manually. The custom hook above is 10× smaller and idiomatic to React's effect lifecycle.
            </Callout>

            {/* 06. Output */}
            <SectionHeading number="06" id="output">Output & Results</SectionHeading>
            <p>
              We wired the hook into a search box and logged both the raw and debounced values to the console while typing "react" in roughly 300&nbsp;ms:
            </p>

            <MockScreenshot
              title="DevTools console"
              url="localhost:5173 — console"
              caption="Raw value re-renders on every keystroke; the debounced value settles once and fires a single API call."
            >
              <ConsoleOutput />
            </MockScreenshot>

            <h3>Measured impact</h3>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm glass border-gradient rounded-xl overflow-hidden">
                <thead className="text-left bg-muted">
                  <tr>
                    <th className="px-4 py-3 font-display">Metric</th>
                    <th className="px-4 py-3 font-display">Without debounce</th>
                    <th className="px-4 py-3 font-display">With debounce (300ms)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["API calls for one query", "5", "1"],
                    ["Network bytes transferred", "~12 KB", "~2.4 KB"],
                    ["Avg. render count", "5", "1"],
                    ["Perceived latency", "Janky", "Smooth"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                      <td className="px-4 py-3 text-[oklch(0.45_0.18_145)] font-medium">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 07. Reflection */}
            <SectionHeading number="07" id="reflection">
              <span className="inline-flex items-center gap-2"><Lightbulb className="w-5 h-5" /> Personal Learning Reflection</span>
            </SectionHeading>
            <p>
              Before this seminar, I would have reached for <code>lodash.debounce</code> without thinking twice. Breaking down the 12-line version forced me to actually <em>understand</em> the React effect lifecycle — particularly the cleanup phase, which I had been mentally treating as "the part where you cancel subscriptions."
            </p>
            <p>
              The biggest takeaway: <strong>cleanup is not optional or defensive — it's how React expresses cancellation</strong>. The same pattern shows up in <code>AbortController</code> for fetch, event listeners, intersection observers, and WebSocket connections. Once it clicks, an entire class of bugs (stale data, ghost timers, memory leaks) disappears from your code.
            </p>
            <p>
              I also learned the value of <em>reading small modules carefully</em>. A 12-line file taught me more about React's mental model than the last three tutorials I skimmed. I plan to make "code break" sessions a weekly habit for the rest of the semester.
            </p>

            <Callout variant="tip" title="Three things I'd do differently next time">
              <ul>
                <li>Write the hook from a failing test first — TDD makes the StrictMode behavior explicit.</li>
                <li>Add a <code>useDebouncedCallback</code> variant for non-state inputs like event handlers.</li>
                <li>Profile with the React DevTools to confirm the re-render reduction visually, not just in logs.</li>
              </ul>
            </Callout>

            {/* 08. References */}
            <SectionHeading number="08" id="references">References</SectionHeading>
            <ul>
              <li><a href="https://react.dev/reference/react/useEffect" target="_blank" rel="noreferrer">React Docs — useEffect (cleanup semantics)</a></li>
              <li><a href="https://react.dev/learn/synchronizing-with-effects" target="_blank" rel="noreferrer">React Docs — Synchronizing with Effects</a></li>
              <li><a href="https://usehooks.com/usedebounce" target="_blank" rel="noreferrer">useHooks — useDebounce reference implementation</a></li>
              <li><a href="https://css-tricks.com/the-difference-between-throttling-and-debouncing/" target="_blank" rel="noreferrer">CSS-Tricks — Throttling vs Debouncing</a></li>
              <li><a href="https://lodash.com/docs/4.17.15#debounce" target="_blank" rel="noreferrer">Lodash — _.debounce reference</a></li>
            </ul>

            <div className="my-10 p-6 rounded-2xl glass border-gradient text-center glow-shadow">
              <div className="font-display text-xl font-semibold mb-2">Continue exploring</div>
              <p className="text-muted-foreground !my-2 max-w-md mx-auto">
                Read Blog 1 for a full implementation guide on Firebase Authentication.
              </p>
              <div className="flex justify-center gap-3 mt-5">
                <a className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ background: "var(--gradient-text)" }} href="/blog1">
                  Read Blog 1
                </a>
                <a className="px-4 py-2 rounded-lg text-sm font-medium glass" href="#top">
                  Back to top
                </a>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-border flex items-center justify-end gap-3 text-muted-foreground">
              <a href="#" className="hover:text-foreground"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-foreground"><Github className="w-5 h-5" /></a>
              <a href="#" className="hover:text-foreground"><Linkedin className="w-5 h-5" /></a>
            </div>
          </article>
        </div>
      </div>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4">
          © 2026 LearnWithAnjali · Built for developers, by developers.
        </div>
      </footer>
    </div>
  );
}
