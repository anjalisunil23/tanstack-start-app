import { createFileRoute } from "@tanstack/react-router";

import {
  Flame, Shield, Zap, Clock, Calendar, User, ArrowRight,
  CheckCircle2, XCircle, Github, Twitter, Linkedin, Sparkles,
  Lock, Mail, Smartphone, UserCheck, Globe, KeyRound,
} from "lucide-react";
// note: User icon retained for diagrams
import heroImg from "@/assets/hero-firebase-auth.jpg";
import stepProviders from "@/assets/step-firebase-providers.jpg";
import stepSignup from "@/assets/step-signup-ui.jpg";
import stepDashboard from "@/assets/step-dashboard.jpg";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CodeBlock } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import { TableOfContents, type TocItem } from "@/components/TableOfContents";
import { MockScreenshot } from "@/components/MockScreenshot";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/blog1")({
  component: BlogPost,
});

const toc: TocItem[] = [
  { number: "01", id: "introduction", title: "Introduction" },
  { number: "02", id: "what-is-firebase-auth", title: "What is Firebase Authentication?" },
  { number: "03", id: "features", title: "Features of Firebase Auth" },
  { number: "04", id: "setup", title: "Project Setup Guide" },
  { number: "05", id: "implementation", title: "Complete Implementation Tutorial" },
  { number: "06", id: "folder-structure", title: "Folder Structure" },
  { number: "07", id: "security", title: "Security Best Practices" },
  { number: "08", id: "performance", title: "Performance Optimization" },
  { number: "09", id: "use-cases", title: "Real-World Use Cases" },
  { number: "10", id: "errors", title: "Common Errors & Fixes" },
  { number: "11", id: "pros-cons", title: "Advantages & Disadvantages" },
  { number: "12", id: "comparison", title: "Firebase Auth vs Alternatives" },
  { number: "13", id: "applications", title: "Applications & Benefits" },
  { number: "14", id: "challenges", title: "Challenges Faced" },
  { number: "15", id: "future-scope", title: "Trends & Future Scope" },
  { number: "16", id: "references", title: "References & Resources" },
  { number: "17", id: "faqs", title: "FAQs" },
  { number: "18", id: "conclusion", title: "Conclusion" },
];

function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden hero-bg">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(circle, var(--brand), transparent 60%)" }} />
      </div>
      <div className="mx-auto max-w-4xl px-4 text-center anim-fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[var(--brand)]" />
          Updated for Firebase v10 · React 19 · 2026
        </div>
        <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
          Firebase Authentication: <br />
          <span className="text-gradient">The Complete Guide</span> <br />
          <span className="text-foreground/90">for Modern Developers</span>
        </h1>
        <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A production-grade walkthrough of Firebase Auth — from your first <code className="font-mono text-[var(--brand)]">createUserWithEmailAndPassword</code> call to protected routes, session persistence, and security rules you can ship with confidence.
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[var(--brand)]" /> May 21, 2026</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--brand)]" /> 22 min read</span>
        </div>

        <div className="mt-12 relative rounded-2xl overflow-hidden border border-border shadow-sm">
          <img
            src={heroImg}
            alt="Firebase Authentication shield emblem floating over a futuristic developer environment"
            width={1536}
            height={1024}
            className="w-full h-auto"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
          {["#Firebase", "#Authentication", "#React", "#WebDev", "#Tutorial", "#Security"].map((t) => (
            <span key={t} className="px-3 py-1 rounded-full glass font-mono text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ number, id, children }: { number: string; id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="flex items-baseline gap-4 !mt-16">
      <span className="font-mono text-sm text-[var(--brand)] tracking-widest">{number}</span>
      <span className="text-gradient">{children}</span>
    </h2>
  );
}

// ---- Mock screenshot inner UIs --------------------------------------------

function ConsoleScreenshot() {
  const providers = [
    { name: "Email/Password", enabled: true, icon: Mail },
    { name: "Google", enabled: true, icon: Globe },
    { name: "GitHub", enabled: true, icon: Github },
    { name: "Phone", enabled: false, icon: Smartphone },
    { name: "Anonymous", enabled: true, icon: UserCheck },
    { name: "Twitter", enabled: false, icon: Twitter },
  ];
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <Flame className="w-6 h-6 text-[var(--brand)]" />
        <div>
          <div className="text-sm text-muted-foreground">Project · my-saas-app</div>
          <div className="font-display font-semibold text-lg">Authentication → Sign-in method</div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {providers.map((p) => (
          <div key={p.name} className="flex items-center justify-between bg-muted border border-border rounded-lg px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <p.icon className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm">{p.name}</span>
            </div>
            <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${
              p.enabled ? "bg-[oklch(0.30_0.12_145/0.3)] text-[oklch(0.85_0.16_145)]" : "bg-muted text-muted-foreground"
            }`}>{p.enabled ? "Enabled" : "Disabled"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LoginScreenshot() {
  return (
    <div className="max-w-sm mx-auto">
      <div className="text-center mb-5">
        <div className="w-12 h-12 mx-auto rounded-2xl grid place-items-center mb-3" style={{ background: "var(--gradient-text)" }}>
          <Lock className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-display font-semibold text-xl">Welcome back</h3>
        <p className="text-sm text-muted-foreground">Sign in to continue to your dashboard</p>
      </div>
      <div className="space-y-3">
        <input readOnly value="alex@devforge.io" className="w-full bg-muted border border-border rounded-lg px-3 py-2.5 text-sm font-mono" />
        <input readOnly value="••••••••••" className="w-full bg-muted border border-border rounded-lg px-3 py-2.5 text-sm font-mono" />
        <button className="w-full py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: "var(--gradient-text)" }}>
          Sign in
        </button>
        <div className="relative text-center text-xs text-muted-foreground my-3">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
          <span className="relative bg-background px-2">or continue with</span>
        </div>
        <button className="w-full py-2.5 rounded-lg text-sm font-medium bg-muted border border-border flex items-center justify-center gap-2">
          <Globe className="w-4 h-4" /> Google
        </button>
      </div>
    </div>
  );
}

function DashboardScreenshot() {
  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-xs text-muted-foreground font-mono">/dashboard</div>
          <div className="font-display font-semibold text-lg">Welcome back, Alex 👋</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full grid place-items-center text-xs font-bold text-white" style={{ background: "var(--gradient-text)" }}>AM</div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Sessions", value: "1,284", change: "+12%" },
          { label: "API calls", value: "84.2k", change: "+8%" },
          { label: "Latency", value: "92ms", change: "-3%" },
        ].map((s) => (
          <div key={s.label} className="bg-muted border border-border rounded-lg p-3">
            <div className="text-xs text-muted-foreground">{s.label}</div>
            <div className="text-xl font-display font-semibold mt-1">{s.value}</div>
            <div className="text-xs text-[oklch(0.80_0.16_145)] mt-1 font-mono">{s.change}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-muted border border-border rounded-lg p-3">
        <div className="text-xs text-muted-foreground mb-2">Authenticated user (onAuthStateChanged)</div>
        <pre className="text-xs font-mono text-[oklch(0.85_0.14_220)] overflow-x-auto">{`{ uid: "u_8j2k…", email: "alex@devforge.io", emailVerified: true }`}</pre>
      </div>
    </div>
  );
}

function FlowDiagram() {
  return (
    <div className="my-8 glass rounded-2xl p-6 border-gradient">
      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 text-center">
        Authentication Flow
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-3 text-sm">
        {[
          { icon: User, label: "User", sub: "Enters credentials" },
          { icon: Zap, label: "Client SDK", sub: "Validates input" },
          { icon: Flame, label: "Firebase Auth", sub: "Issues JWT" },
          { icon: KeyRound, label: "Token", sub: "Stored locally" },
          { icon: Shield, label: "App", sub: "Grants access" },
        ].map((step, i, arr) => (
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

// ---- Page ------------------------------------------------------------------

function BlogPost() {
  return (
    <div id="top" className="relative min-h-screen">
      <ReadingProgress />
      <SiteNav />
      <Hero />

      <div className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <TableOfContents items={toc} />
          </aside>

          {/* Article */}
          <article className="prose-blog max-w-3xl">
            {/* Meta description hint */}
            <div className="glass border-gradient rounded-xl p-4 mb-8 text-sm">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--brand)] mb-1">Meta description</div>
              <p className="!my-0 text-muted-foreground">
                Learn how to implement Firebase Authentication in React with email/password, Google Sign-In, protected routes, security rules, and production best practices — complete code included.
              </p>
            </div>

            {/* 1. Intro */}
            <SectionHeading number="01" id="introduction">Introduction</SectionHeading>
            <p>
              Every app eventually faces the same wall: <strong>"who is this user, and what are they allowed to do?"</strong> You can spend two months building your own auth system — sessions, password resets, refresh tokens, OAuth flows, rate limiting — or you can bolt on a battle-tested service in an afternoon and ship the features your users actually care about.
            </p>
            <p>
              <strong>Firebase Authentication</strong> is Google's managed identity service. It hands you registration, login, password reset, social providers, and session management behind a clean SDK, and it scales from a side-project to millions of users without you changing a line of code.
            </p>
            <p>
              In this guide, we'll go from <em>zero</em> to a working production-ready auth system in React, using the Firebase v9+ modular SDK. You'll get full code, real architectural decisions, security checklists, and the kind of details engineers usually learn the hard way.
            </p>

            <Callout variant="tip" title="Who this guide is for">
              Web developers comfortable with JavaScript and basic React. You don't need prior Firebase experience — we'll build everything from scratch.
            </Callout>

            {/* 2. What is Firebase Auth */}
            <SectionHeading number="02" id="what-is-firebase-auth">What is Firebase Authentication?</SectionHeading>
            <p>
              Firebase Authentication is a backend-as-a-service that handles user identity. Instead of running your own auth servers, you call SDK methods like <code>signInWithEmailAndPassword</code>, and Firebase returns a signed <strong>JWT (ID token)</strong> you can use to authorize requests across your stack.
            </p>

            <h3>Authentication vs Authorization</h3>
            <p>
              These get confused constantly. <strong>Authentication</strong> answers <em>"who are you?"</em>. <strong>Authorization</strong> answers <em>"what are you allowed to do?"</em>. Firebase Auth handles the first. The second is your job — typically via Firestore Security Rules or your own API checks.
            </p>

            <h3>Supported sign-in methods</h3>
            <ul>
              <li><strong>Email / Password</strong> — the classic.</li>
              <li><strong>Google Sign-In</strong> — one-tap OAuth, no UI required.</li>
              <li><strong>Phone (OTP)</strong> — SMS-based, ideal for mobile-first apps.</li>
              <li><strong>Anonymous</strong> — give a guest a real <code>uid</code> they can later link to a real account.</li>
              <li><strong>GitHub, Twitter, Apple, Microsoft, Facebook</strong> — OAuth one-liners.</li>
              <li><strong>Custom tokens</strong> — mint your own JWTs server-side for SSO bridges.</li>
            </ul>

            <FlowDiagram />

            {/* 3. Features */}
            <SectionHeading number="03" id="features">Features of Firebase Authentication</SectionHeading>
            <ul>
              <li><strong>Drop-in SDK</strong> — install one package, get web, iOS, Android, and Flutter support.</li>
              <li><strong>Secure token handling</strong> — short-lived ID tokens, automatic refresh, RSA-signed JWTs.</li>
              <li><strong>OAuth providers out of the box</strong> — no need to register callback URLs across services.</li>
              <li><strong>Session management</strong> — choose <code>local</code>, <code>session</code>, or <code>none</code> persistence.</li>
              <li><strong>Scales transparently</strong> — Google operates the infrastructure; you don't.</li>
              <li><strong>Backendless</strong> — you can ship a full SaaS prototype without standing up a server.</li>
              <li><strong>Multi-tenant ready</strong> — supports tenancy and custom claims for role-based access.</li>
            </ul>

            {/* 4. Setup */}
            <SectionHeading number="04" id="setup">Project Setup Guide</SectionHeading>
            <p>
              Let's wire everything up. We'll create a Firebase project, enable two providers, install the SDK, and initialize it inside a React app.
            </p>

            <h3>Step 1 — Create a Firebase project</h3>
            <p>
              Head to the <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer">Firebase Console</a> and click <strong>Add project</strong>. Give it a name, skip Google Analytics if you don't need it, and create the project.
            </p>

            <h3>Step 2 — Enable Authentication providers</h3>
            <p>
              In the sidebar choose <strong>Build → Authentication → Get started</strong>. Under <strong>Sign-in method</strong>, enable Email/Password and Google.
            </p>

            <MockScreenshot
              title="Firebase Console — Sign-in providers"
              url="console.firebase.google.com/project/my-saas-app/authentication/providers"
              caption="Firebase Console showing enabled authentication providers for our project."
            >
              <img src={stepProviders} alt="Firebase Console with Email/Password and Google providers enabled" loading="lazy" className="w-full h-auto rounded-md" />
            </MockScreenshot>

            <h3>Step 3 — Register a web app</h3>
            <p>
              In <strong>Project settings → General</strong>, click the <strong>&lt;/&gt;</strong> icon to register a web app. Firebase will hand you a config object — keep it open.
            </p>

            <h3>Step 4 — Install the SDK</h3>
            <CodeBlock
              language="bash"
              filename="terminal"
              code={`$ npm install firebase
# or
$ pnpm add firebase
$ bun add firebase`}
            />

            <h3>Step 5 — Environment variables</h3>
            <p>
              Firebase web config is technically public — Firebase Auth security comes from your project rules and authorized domains, not from hiding keys. But keeping it in <code>.env</code> makes it easy to swap between dev and prod.
            </p>
            <CodeBlock
              language="bash"
              filename=".env.local"
              code={`VITE_FIREBASE_API_KEY=AIzaSy...your-key
VITE_FIREBASE_AUTH_DOMAIN=my-saas-app.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=my-saas-app
VITE_FIREBASE_STORAGE_BUCKET=my-saas-app.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=1023948572019
VITE_FIREBASE_APP_ID=1:1023948572019:web:abc123def456`}
            />

            <h3>Step 6 — Initialize Firebase</h3>
            <CodeBlock
              language="tsx"
              filename="src/lib/firebase.ts"
              code={`import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Avoid re-initializing during HMR
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);`}
            />

            <Callout variant="warning" title="Don't ship to production yet">
              By default Firebase allows sign-ins from <em>any</em> domain. In Authentication → Settings → Authorized domains, remove <code>localhost</code> and add only the domains you actually serve from in production.
            </Callout>

            {/* 5. Implementation */}
            <SectionHeading number="05" id="implementation">Complete Implementation Tutorial</SectionHeading>
            <p>
              We'll build a typed <code>AuthContext</code>, then wire up registration, login, logout, password reset, Google Sign-In, and protected routes.
            </p>

            <h3>The AuthContext</h3>
            <p>
              <code>onAuthStateChanged</code> is the single source of truth. Subscribe once at the root and expose the user via context.
            </p>
            <CodeBlock
              language="tsx"
              filename="src/context/AuthContext.tsx"
              code={`import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthState {
  user: User | null;
  loading: boolean;
}

const AuthContext = createContext<AuthState>({ user: null, loading: true });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({ user: null, loading: true });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setState({ user, loading: false });
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);`}
            />

            <h3>User registration</h3>
            <CodeBlock
              language="tsx"
              filename="src/lib/auth.ts"
              code={`import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function registerUser(email: string, password: string, name: string) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName: name });
  await sendEmailVerification(cred.user);
  return cred.user;
}`}
            />

            <MockScreenshot
              title="Signup UI"
              url="https://app.devforge.io/signup"
              caption="A minimal signup screen wired to registerUser — note the verification email is sent in the same call."
            >
              <img src={stepSignup} alt="Minimal signup screen UI" loading="lazy" className="w-full h-auto rounded-md" />
            </MockScreenshot>

            <h3>Login</h3>
            <CodeBlock
              language="tsx"
              filename="src/lib/auth.ts"
              code={`import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function loginUser(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}`}
            />

            <h3>Logout</h3>
            <CodeBlock
              language="tsx"
              filename="src/lib/auth.ts"
              code={`import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const logoutUser = () => signOut(auth);`}
            />

            <h3>Password reset</h3>
            <CodeBlock
              language="tsx"
              filename="src/lib/auth.ts"
              code={`import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function resetPassword(email: string) {
  return sendPasswordResetEmail(auth, email, {
    url: "https://app.devforge.io/login",
    handleCodeInApp: false,
  });
}`}
            />

            <h3>Google Sign-In</h3>
            <CodeBlock
              language="tsx"
              filename="src/lib/auth.ts"
              code={`import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebase";

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  // First-time user? result.user.metadata.creationTime === lastSignInTime
  return result.user;
}`}
            />

            <h3>Protected routes</h3>
            <p>
              We gate routes on the auth state. While loading, show a skeleton — never flash the login page to an authenticated user.
            </p>
            <CodeBlock
              language="tsx"
              filename="src/components/ProtectedRoute.tsx"
              code={`import { Navigate, useLocation } from "@tanstack/react-router";
import { useAuth } from "@/context/AuthContext";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="grid place-items-center h-screen">Loading…</div>;
  if (!user) return <Navigate to="/login" search={{ from: location.pathname }} replace />;

  return <>{children}</>;
}`}
            />

            <MockScreenshot
              title="Authenticated dashboard"
              url="https://app.devforge.io/dashboard"
              caption="The /dashboard route guarded by <ProtectedRoute>. The user object comes straight from onAuthStateChanged."
            >
              <img src={stepDashboard} alt="Authenticated dashboard after login" loading="lazy" className="w-full h-auto rounded-md" />
            </MockScreenshot>

            <h3>Auth state persistence</h3>
            <p>
              Firebase defaults to <code>local</code> persistence (survives reloads and browser restarts). You can downgrade to <code>session</code> for shared computers, or <code>none</code> for in-memory only.
            </p>
            <CodeBlock
              language="tsx"
              filename="src/lib/firebase.ts"
              code={`import { browserLocalPersistence, setPersistence } from "firebase/auth";
import { auth } from "@/lib/firebase";

// Call once at app start — before any sign-in attempt.
await setPersistence(auth, browserLocalPersistence);`}
            />

            {/* 6. Folder structure */}
            <SectionHeading number="06" id="folder-structure">Folder Structure</SectionHeading>
            <p>A pragmatic structure that scales with your app:</p>
            <CodeBlock
              language="bash"
              filename="project tree"
              code={`src/
├── lib/
│   ├── firebase.ts        # SDK init
│   └── auth.ts            # register, login, logout, reset
├── context/
│   └── AuthContext.tsx    # global auth state
├── components/
│   ├── ProtectedRoute.tsx
│   └── ui/                # buttons, inputs, etc.
├── routes/
│   ├── login.tsx
│   ├── signup.tsx
│   ├── reset-password.tsx
│   └── dashboard.tsx      # guarded
├── hooks/
│   └── useRequireAuth.ts
└── styles.css`}
            />

            {/* 7. Security */}
            <SectionHeading number="07" id="security">Security Best Practices</SectionHeading>
            <ul>
              <li><strong>Lock authorized domains</strong> — remove <code>localhost</code> from production projects.</li>
              <li><strong>Enforce email verification</strong> before granting access to sensitive routes.</li>
              <li><strong>Validate ID tokens server-side</strong> with the Firebase Admin SDK; never trust client claims.</li>
              <li><strong>Write Firestore Security Rules</strong> — Auth alone doesn't protect your data.</li>
              <li><strong>Use custom claims</strong> for roles (<code>admin</code>, <code>pro</code>) instead of role flags in Firestore documents.</li>
              <li><strong>Enable App Check</strong> to block traffic from unauthorized apps and bots.</li>
              <li><strong>Rate-limit password reset</strong> requests via Cloud Functions if you see abuse.</li>
            </ul>

            <CodeBlock
              language="js"
              filename="firestore.rules"
              code={`rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    match /admin/{doc=**} {
      allow read, write: if request.auth.token.admin == true;
    }
  }
}`}
            />

            <Callout variant="danger" title="The most common mistake">
              Storing the user's role in a Firestore document (e.g. <code>users/uid.role = "admin"</code>) and trusting it client-side. A malicious user can modify their own document if rules allow it. Use <strong>custom claims</strong> set by a privileged backend instead.
            </Callout>

            {/* 8. Performance */}
            <SectionHeading number="08" id="performance">Performance Optimization</SectionHeading>
            <ul>
              <li><strong>Tree-shake aggressively</strong> — the modular SDK only ships what you import. Don't <code>import * from "firebase/auth"</code>.</li>
              <li><strong>Lazy-load auth UI</strong> — most visitors never sign in. Load the login bundle only on <code>/login</code>.</li>
              <li><strong>One <code>onAuthStateChanged</code> subscription</strong> at the root. Multiple listeners cause duplicated re-renders.</li>
              <li><strong>Cache the ID token</strong> — <code>user.getIdToken()</code> is cached for an hour; only call <code>getIdToken(true)</code> when you need a fresh one.</li>
              <li><strong>Memoize the context value</strong> if you add helper functions, or every consumer re-renders.</li>
            </ul>

            <CodeBlock
              language="tsx"
              filename="src/routes/login.tsx"
              code={`import { lazy, Suspense } from "react";

const LoginForm = lazy(() => import("@/components/LoginForm"));

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <LoginForm />
    </Suspense>
  );
}`}
            />

            {/* 9. Use cases */}
            <SectionHeading number="09" id="use-cases">Real-World Use Cases</SectionHeading>
            <div className="grid sm:grid-cols-2 gap-3 my-6 not-prose">
              {[
                { title: "SaaS platforms", desc: "Multi-tenant auth with custom claims and per-org isolation." },
                { title: "E-commerce", desc: "Guest checkout via anonymous auth, upgradeable to a full account." },
                { title: "Chat apps", desc: "Realtime sessions with revocable tokens and presence." },
                { title: "EdTech / LMS", desc: "Google Sign-In for schools using Workspace accounts." },
                { title: "Admin dashboards", desc: "Role-gated access via custom claims and App Check." },
                { title: "Mobile-first", desc: "Phone OTP auth without managing an SMS provider." },
              ].map((u) => (
                <div key={u.title} className="glass border-gradient rounded-xl p-4">
                  <div className="font-display font-semibold mb-1 text-foreground">{u.title}</div>
                  <div className="text-sm text-muted-foreground">{u.desc}</div>
                </div>
              ))}
            </div>

            {/* 10. Errors */}
            <SectionHeading number="10" id="errors">Common Errors & Fixes</SectionHeading>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm glass border-gradient rounded-xl overflow-hidden">
                <thead className="text-left bg-muted">
                  <tr>
                    <th className="px-4 py-3 font-display">Error</th>
                    <th className="px-4 py-3 font-display">Cause</th>
                    <th className="px-4 py-3 font-display">Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  {[
                    ["auth/invalid-api-key", "Wrong or missing env var", "Re-copy config from Firebase Console; restart dev server"],
                    ["auth/popup-blocked", "Browser blocked the popup", "Trigger signInWithPopup from a user gesture, or fall back to signInWithRedirect"],
                    ["auth/unauthorized-domain", "Domain not whitelisted", "Add it under Authentication → Settings → Authorized domains"],
                    ["auth/network-request-failed", "Offline or CORS issue", "Check connectivity and that authDomain matches Console"],
                    ["Persistence not working", "Browser in private mode or storage cleared", "Surface a warning; fall back to in-memory"],
                    ["auth/email-already-in-use", "Account exists with that email", "Direct user to login or password reset"],
                  ].map(([e, c, f]) => (
                    <tr key={e}>
                      <td className="px-4 py-3 font-mono text-[var(--brand)]">{e}</td>
                      <td className="px-4 py-3 text-muted-foreground">{c}</td>
                      <td className="px-4 py-3">{f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 11. Pros / cons */}
            <SectionHeading number="11" id="pros-cons">Advantages & Disadvantages</SectionHeading>
            <div className="grid sm:grid-cols-2 gap-4 my-6 not-prose">
              <div className="glass rounded-xl p-5 border border-[oklch(0.30_0.12_145/0.4)]">
                <div className="flex items-center gap-2 mb-3 font-display font-semibold text-[oklch(0.85_0.16_145)]">
                  <CheckCircle2 className="w-5 h-5" /> Advantages
                </div>
                <ul className="space-y-2 text-sm text-foreground/85">
                  <li>• Zero infrastructure to manage</li>
                  <li>• Generous free tier (50k MAU)</li>
                  <li>• Tight integration with Firestore & Functions</li>
                  <li>• First-class SDKs for every major platform</li>
                  <li>• Battle-tested OAuth flows</li>
                </ul>
              </div>
              <div className="glass rounded-xl p-5 border border-[oklch(0.30_0.12_25/0.4)]">
                <div className="flex items-center gap-2 mb-3 font-display font-semibold text-[oklch(0.85_0.16_25)]">
                  <XCircle className="w-5 h-5" /> Disadvantages
                </div>
                <ul className="space-y-2 text-sm text-foreground/85">
                  <li>• Vendor lock-in to Google Cloud</li>
                  <li>• Limited customization of email templates</li>
                  <li>• No fine-grained role system out of the box</li>
                  <li>• Self-hosting is not an option</li>
                  <li>• Costs at scale can climb (esp. phone auth)</li>
                </ul>
              </div>
            </div>

            {/* 12. Comparison */}
            <SectionHeading number="12" id="comparison">Firebase Auth vs Alternatives</SectionHeading>
            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-sm glass border-gradient rounded-xl overflow-hidden">
                <thead className="text-left bg-muted">
                  <tr>
                    <th className="px-4 py-3 font-display">Feature</th>
                    <th className="px-4 py-3 font-display">Firebase Auth</th>
                    <th className="px-4 py-3 font-display">Auth0</th>
                    <th className="px-4 py-3 font-display">Supabase Auth</th>
                    <th className="px-4 py-3 font-display">NextAuth</th>
                    <th className="px-4 py-3 font-display">Custom JWT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  {[
                    ["Setup time", "Minutes", "Hours", "Minutes", "Hours", "Days+"],
                    ["Free tier", "50k MAU", "7.5k MAU", "50k MAU", "Self-host", "Free"],
                    ["Self-hostable", "No", "Limited", "Yes", "Yes (Next.js)", "Yes"],
                    ["OAuth providers", "10+", "30+", "15+", "60+", "DIY"],
                    ["Vendor lock-in", "High", "High", "Low", "Low", "None"],
                    ["Best for", "Mobile + web apps", "Enterprise SSO", "Postgres apps", "Next.js apps", "Full control"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="px-4 py-3 font-medium">{row[0]}</td>
                      {row.slice(1).map((c, i) => (
                        <td key={i} className="px-4 py-3 text-muted-foreground">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 13. Applications & Benefits */}
            <SectionHeading number="13" id="applications">Applications & Benefits</SectionHeading>
            <p>
              Firebase Authentication powers identity for products you use every day — from indie SaaS dashboards to top-100 mobile apps. A few representative deployments:
            </p>
            <ul>
              <li><strong>SaaS dashboards</strong> — quick onboarding with email/password plus Google Workspace SSO.</li>
              <li><strong>E-commerce storefronts</strong> — anonymous carts that convert to full accounts at checkout, no data loss.</li>
              <li><strong>EdTech platforms</strong> — schools sign students in with Google Workspace, no separate password to manage.</li>
              <li><strong>Mobile-first social apps</strong> — phone-number OTP authentication without running an SMS gateway.</li>
              <li><strong>Internal admin tools</strong> — role-gated access using custom claims plus App Check to block bots.</li>
            </ul>
            <h3>Key benefits</h3>
            <ul>
              <li><strong>Time-to-market</strong> — a full auth system in an afternoon instead of a sprint.</li>
              <li><strong>Security by default</strong> — RSA-signed JWTs, refresh-token rotation, secure persistence, all managed for you.</li>
              <li><strong>Multi-platform</strong> — the same identity works across Web, iOS, Android, and Flutter.</li>
              <li><strong>Operational savings</strong> — no servers to patch, no incident response for auth outages.</li>
              <li><strong>Ecosystem fit</strong> — first-class integration with Firestore Security Rules, Cloud Functions, and Analytics.</li>
            </ul>

            {/* 14. Challenges Faced */}
            <SectionHeading number="14" id="challenges">Challenges Faced</SectionHeading>
            <p>
              Implementing Firebase Authentication end-to-end isn't friction-free. A short, honest log of the issues encountered while building the reference app:
            </p>
            <ul>
              <li><strong>Hydration mismatches in SSR</strong> — the client SDK reads <code>localStorage</code>, which the server can't access. The fix is server-side session cookies via the Admin SDK.</li>
              <li><strong>Popup blockers on mobile Safari</strong> — <code>signInWithPopup</code> silently fails. We added a fallback to <code>signInWithRedirect</code>.</li>
              <li><strong>Race condition on first render</strong> — guarding routes before <code>onAuthStateChanged</code> resolved flashed the login page. A <code>loading</code> flag on the context solved it.</li>
              <li><strong>Custom claims propagation</strong> — claims only update on token refresh. Forcing <code>getIdToken(true)</code> after a role change avoids stale UI.</li>
              <li><strong>Quota limits in development</strong> — daily email-verification quotas on the Spark plan hit during testing; we moved staging to Blaze.</li>
              <li><strong>Vendor lock-in anxiety</strong> — mitigated by exporting users regularly via <code>firebase auth:export</code> with the scrypt hash format.</li>
            </ul>
            <Callout variant="info" title="Lesson learned">
              Auth code is mostly <em>error handling</em>. Spend more time on the unhappy paths (expired tokens, blocked popups, revoked accounts) than on the happy path.
            </Callout>

            {/* 15. Future Scope */}
            <SectionHeading number="15" id="future-scope">Trends & Future Scope</SectionHeading>
            <p>
              Identity in 2026 is moving from passwords toward <strong>passwordless</strong> and <strong>device-bound</strong> credentials. Firebase Auth is tracking these shifts:
            </p>
            <ul>
              <li><strong>Passkeys (WebAuthn)</strong> — phishing-resistant device-bound credentials are landing in mainstream SDKs.</li>
              <li><strong>Identity Platform (GCP)</strong> — Firebase Auth's enterprise tier adds SAML, OIDC, multi-tenancy, and MFA enforcement policies.</li>
              <li><strong>Edge-rendered auth</strong> — session cookies validated at the CDN edge for sub-50ms gated pages.</li>
              <li><strong>Zero-trust architecture</strong> — short-lived tokens, continuous re-authentication, device posture checks.</li>
              <li><strong>AI-assisted abuse detection</strong> — credential stuffing and bot signups flagged automatically by App Check + reCAPTCHA Enterprise.</li>
            </ul>
            <p>
              For students entering the field today, identity is no longer an undifferentiated commodity — it's a moving target where security, UX, and compliance intersect. Becoming fluent in a managed identity platform is one of the highest-leverage skills you can pick up.
            </p>

            {/* 16. References */}
            <SectionHeading number="16" id="references">References & Learning Resources</SectionHeading>
            <ul>
              <li><a href="https://firebase.google.com/docs/auth" target="_blank" rel="noreferrer">Firebase Authentication — Official Documentation</a></li>
              <li><a href="https://firebase.google.com/docs/auth/web/start" target="_blank" rel="noreferrer">Get Started with Firebase Auth on the Web (v9+ Modular SDK)</a></li>
              <li><a href="https://firebase.google.com/docs/auth/admin" target="_blank" rel="noreferrer">Firebase Admin SDK — Server-side Auth & Custom Claims</a></li>
              <li><a href="https://firebase.google.com/docs/firestore/security/rules-conditions" target="_blank" rel="noreferrer">Firestore Security Rules — Auth Conditions Reference</a></li>
              <li><a href="https://firebase.google.com/docs/app-check" target="_blank" rel="noreferrer">Firebase App Check — Bot & Abuse Protection</a></li>
              <li><a href="https://cloud.google.com/identity-platform" target="_blank" rel="noreferrer">Google Cloud Identity Platform — Enterprise Tier</a></li>
              <li><a href="https://webauthn.guide/" target="_blank" rel="noreferrer">WebAuthn Guide — Passkeys Primer</a></li>
              <li><a href="https://jwt.io/introduction" target="_blank" rel="noreferrer">JWT.io — JSON Web Tokens Explained</a></li>
              <li><a href="https://www.youtube.com/c/Firebase" target="_blank" rel="noreferrer">Firebase on YouTube — Official channel & tutorials</a></li>
            </ul>

            {/* 17. FAQs */}
            <SectionHeading number="17" id="faqs">Frequently Asked Questions</SectionHeading>
            <div className="my-6 space-y-3 not-prose">
              {[
                {
                  q: "Is Firebase Authentication free?",
                  a: "Yes for most providers — email/password, Google, GitHub, anonymous, and others are free for unlimited users. Phone authentication costs after a small free tier (10 verifications/day on Spark; pay-per-SMS on Blaze).",
                },
                {
                  q: "Can I use Firebase Auth without Firestore?",
                  a: "Absolutely. Firebase Auth is a standalone service. You can pair it with your own backend, a different database, or any framework — it just hands you a verified JWT.",
                },
                {
                  q: "Is the Firebase web API key a secret?",
                  a: "No. The web API key is a public identifier, like a Stripe publishable key. Security comes from authorized domains, security rules, and App Check — not from hiding the key.",
                },
                {
                  q: "How do I add roles like admin or pro?",
                  a: "Use custom claims set via the Admin SDK from a trusted backend, then check them in your security rules and your UI via user.getIdTokenResult().",
                },
                {
                  q: "Does Firebase Auth work with SSR (Next.js / TanStack Start)?",
                  a: "Yes, but you'll need server-side session cookies (createSessionCookie via the Admin SDK) since the client SDK uses localStorage, which the server can't read.",
                },
                {
                  q: "How long do ID tokens last?",
                  a: "One hour. The SDK refreshes them automatically in the background using a long-lived refresh token. You rarely have to think about it.",
                },
                {
                  q: "How do I sign out a user from all devices?",
                  a: "Call revokeRefreshTokens(uid) from the Admin SDK and verify the auth_time claim on each request to detect revocation.",
                },
                {
                  q: "What's the difference between signInWithPopup and signInWithRedirect?",
                  a: "Popup is faster UX but can be blocked by browsers (especially in iframes and on mobile Safari). Redirect is more reliable but loses in-memory state. Try popup first, fall back to redirect.",
                },
                {
                  q: "Can users link multiple sign-in methods to one account?",
                  a: "Yes — linkWithPopup or linkWithCredential lets a user attach Google to their email/password account, sharing a single uid.",
                },
                {
                  q: "How do I migrate away from Firebase Auth later?",
                  a: "Export users via firebase auth:export — passwords are hashed with scrypt and importable into Auth0, Supabase, or your own system using the same algorithm.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="glass border-gradient rounded-xl p-4 group"
                >
                  <summary className="font-display font-semibold cursor-pointer list-none flex items-start justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-[var(--brand)] transition-transform group-open:rotate-45 shrink-0 text-xl leading-none mt-0.5">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-3 leading-relaxed text-[15px]">{item.a}</p>
                </details>
              ))}
            </div>

            {/* 14. Conclusion */}
            <SectionHeading number="18" id="conclusion">Conclusion</SectionHeading>
            <p>
              You now have everything you need to ship a production-grade auth system: a typed <code>AuthContext</code>, six sign-in flows, protected routes, security rules, and a clear list of pitfalls to avoid. Firebase Authentication won't be the right tool forever — at some point you may outgrow the lock-in or need self-hosting — but it's almost always the right tool to start with.
            </p>
            <p>
              The goal of auth is to <em>disappear</em>. Your users shouldn't think about it, and neither should you. Spend the saved time on the actual product.
            </p>

            <div className="my-10 p-6 rounded-2xl glass border-gradient text-center glow-shadow">
              <div className="font-display text-xl font-semibold mb-2">Found this useful?</div>
              <p className="text-muted-foreground !my-2 max-w-md mx-auto">
                Share it with another developer who's about to build their own login form from scratch.
              </p>
              <div className="flex justify-center gap-3 mt-5">
                <a className="px-4 py-2 rounded-lg text-sm font-medium text-white" style={{ background: "var(--gradient-text)" }} href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer">
                  Share on Twitter
                </a>
                <a className="px-4 py-2 rounded-lg text-sm font-medium glass" href="#top">
                  Back to top
                </a>
              </div>
            </div>

            {/* Footer share links */}
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
