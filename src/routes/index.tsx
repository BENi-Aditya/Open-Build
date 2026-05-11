import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Sparkles,
  Rocket,
  Users,
  Github,
  Hammer,
  Zap,
  Trophy,
  Bot,
  Heart,
  Code2,
  Star,
  MessageCircle,
  GitBranch,
  Eye,
  Bookmark,
  Cpu,
  FileText,
  Layers,
  Flame,
  ArrowRight,
  Plus,
  Play,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OpenBuilder — The internet home for student builders" },
      {
        name: "description",
        content:
          "Showcase projects, find collaborators, form hackathon teams, and build your builder identity — all in one AI-powered platform for student innovators.",
      },
      { property: "og:title", content: "OpenBuilder — Build publicly. Collaborate openly." },
      {
        property: "og:description",
        content: "Where the next generation of student builders ship cool things, together.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden bg-background">
      <Nav />
      <Hero />
      <LiveShowcase />
      <WhyExists />
      <FeatureShowcase />
      <BuilderProfileFeature />
      <TeamMatching />
      <AIAssistant />
      <BuildFeed />
      <SocialProof />
      <HowItWorks />
      <Categories />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b-2 border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-lg bg-mint grid place-items-center text-mint-foreground font-black border-2 border-foreground shadow-[3px_3px_0_0_var(--color-foreground)]">
            ◆
          </div>
          <span className="font-display font-bold text-lg tracking-tight">OpenBuilder</span>
          <span className="hidden sm:inline-flex ml-2 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest bg-tangerine text-tangerine-foreground border-2 border-foreground">
            beta
          </span>
        </div>
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-muted-foreground">
          <a href="#explore" className="hover:text-foreground transition">Explore</a>
          <a href="#feed" className="hover:text-foreground transition">Feed</a>
          <a href="#teams" className="hover:text-foreground transition">Teams</a>
          <a href="#ai" className="hover:text-foreground transition">AI Mentor</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition hidden sm:block">
            Sign in
          </button>
          <button className="text-sm font-bold bg-mint text-mint-foreground px-4 py-2 border-2 border-foreground shadow-[3px_3px_0_0_var(--color-foreground)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0_0_var(--color-foreground)] transition">
            Start building
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative starfield">
      <div className="grid-bg">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-28 lg:pt-28 grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-mint text-mint-foreground border-2 border-foreground shadow-[3px_3px_0_0_var(--color-foreground)] text-xs font-black tracking-wide uppercase mb-8">
              <Flame className="size-3.5" />
              1,248 builders shipping right now
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tight mb-6">
              Build publicly.<br />
              Find <span className="bg-mint text-mint-foreground px-2 -rotate-1 inline-block">builders.</span><br />
              Launch faster.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Showcase projects, discover collaborators, form hackathon teams, and grow your builder identity — all in one AI-powered platform built for students.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 bg-mint text-mint-foreground font-bold px-7 py-4 border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_var(--color-foreground)] transition">
                Start Building
                <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </button>
              <button className="inline-flex items-center gap-2 bg-card text-foreground font-bold px-7 py-4 border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_var(--color-foreground)] transition">
                Explore Projects
              </button>
            </div>

            <div className="flex items-center gap-6 mt-12 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[
                  "oklch(0.92 0.19 95)",
                  "oklch(0.75 0.20 55)",
                  "oklch(0.72 0.22 330)",
                  "oklch(0.75 0.15 250)",
                  "oklch(0.63 0.26 29)",
                ].map((c, i) => (
                  <div
                    key={i}
                    className="size-9 rounded-full border-2 border-foreground"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <span>From <b className="text-foreground">200+ schools</b> worldwide</span>
            </div>
          </div>

          {/* RIGHT — floating cards collage */}
          <div className="lg:col-span-6 relative h-[560px] hidden lg:block">
            {/* Project card 1 */}
            <div className="absolute top-0 left-4 w-72 float-a">
              <div className="bg-grape text-white p-5 border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-foreground text-background px-2 py-1">Robotics</span>
                  <Cpu className="size-4" />
                </div>
                <div className="font-display text-2xl font-bold leading-tight mb-2">Mars Rover Mk.II</div>
                <div className="text-xs opacity-80 mb-4">Autonomous terrain mapping with ROS2.</div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5"><Heart className="size-3.5 fill-current" /> 1.2K</div>
                  <div className="flex items-center gap-1.5"><Eye className="size-3.5" /> 8.4K</div>
                </div>
              </div>
            </div>

            {/* Profile card */}
            <div className="absolute top-12 right-0 w-64 float-b">
              <div className="bg-card text-foreground p-5 border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="size-12 rounded-full bg-gradient-to-br from-mint to-tangerine border-2 border-foreground" />
                  
                  <div>
                    <div className="font-bold text-sm">@BENi-Aditya</div>
                    <div className="text-[11px] text-muted-foreground">RVCE · 1st Year</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["Python", "ROS2", "PCB"].map((t) => (
                    <span key={t} className="text-[10px] font-mono font-bold px-2 py-0.5 bg-background border border-foreground/40">{t}</span>
                  ))}
                </div>
                <div className="text-xs font-bold text-mint flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-mint animate-pulse" /> Open for hackathon team
                </div>
              </div>
            </div>

            {/* Live feed item */}
            <div className="absolute top-[260px] left-0 w-80 float-c">
              <div className="bg-mint text-mint-foreground p-5 border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)]">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-3">
                  <Rocket className="size-3.5" /> Just launched · 2m ago
                </div>
                <div className="font-display text-xl font-bold leading-tight mb-2">PitchPal v1.0 is live</div>
                <div className="text-xs mb-4 opacity-80">"AI cofounder that drafts your deck overnight." — by @arnav.zero</div>
                <div className="flex gap-2">
                  <button className="text-[11px] font-bold px-3 py-1.5 bg-mint-foreground text-mint">View launch</button>
                  <button className="text-[11px] font-bold px-3 py-1.5 border-2 border-mint-foreground">Save</button>
                </div>
              </div>
            </div>

            {/* Collab request */}
            <div className="absolute top-[300px] right-4 w-60 float-a">
              <div className="bg-tangerine text-white p-4 border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)]">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="size-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Collab request</span>
                </div>
                <div className="text-sm font-bold mb-1">@kai_neural wants to join</div>
                <div className="text-xs opacity-80 mb-3">"AI Tutor" project</div>
                <div className="flex gap-2">
                  <button className="text-[11px] font-bold flex-1 py-1.5 bg-white/20 backdrop-blur">Accept</button>
                  <button className="text-[11px] font-bold flex-1 py-1.5 border-2 border-white/50">Later</button>
                </div>
              </div>
            </div>

            {/* Trending pill */}
            <div className="absolute bottom-4 left-16 float-b">
              <div className="bg-tangerine text-tangerine-foreground px-4 py-2 border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] text-xs font-black uppercase tracking-widest flex items-center gap-2">
                <Flame className="size-3.5" /> Trending: ClimateOS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LIVE SHOWCASE ---------------- */
function LiveShowcase() {
  const projects = [
    { title: "StudyAI", tagline: "Adaptive flashcards that actually work.", tag: "EdTech", author: "@kai_neural", bg: "bg-mint", stack: ["Next.js", "OpenAI", "Postgres"], stat: "2.3K", help: "Looking for designer" },
    { title: "AeroDrone", tagline: "Open-source delivery drone for campuses.", tag: "Robotics", author: "@maya.builds", bg: "bg-tangerine", stack: ["Python", "ROS2", "C++"], stat: "1.2K", help: "Need ROS dev" },
    { title: "FinPulse", tagline: "Personal finance dashboard for Gen Z.", tag: "FinTech", author: "@leo_codes", bg: "bg-grape", stack: ["React", "Plaid", "Supabase"], stat: "2.9K", help: "Open for collab" },
    { title: "ClimateOS", tagline: "Open data layer for climate action.", tag: "Climate", author: "@sarah.green", bg: "bg-sky", stack: ["TypeScript", "D3", "Mapbox"], stat: "1.8K", help: "Seeking cofounder" },
    { title: "PulseHealth", tagline: "AI triage for student health centers.", tag: "HealthTech", author: "@aryan.dev", bg: "bg-tangerine", stack: ["FastAPI", "GPT-4", "Vue"], stat: "3.4K", help: "Beta testers wanted" },
    { title: "DevSpace", tagline: "Collaborative IDE for student dev teams.", tag: "DevTools", author: "@riya.exe", bg: "bg-grape", stack: ["Rust", "WASM", "Tauri"], stat: "1.6K", help: "Hackathon ready" },
  ];

  return (
    <section id="explore" className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-4">
            01 / Live community
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Real builders.<br />
            <span className="text-muted-foreground">Real projects. Shipping now.</span>
          </h2>
        </div>
        <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold bg-card border-2 border-foreground px-4 py-2 shadow-[4px_4px_0_0_var(--color-foreground)] w-fit">
          View all <ArrowUpRight className="size-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard(p: {
  title: string; tagline: string; tag: string; author: string; bg: string; stack: string[]; stat: string; help: string;
}) {
  return (
    <div className="group bg-card border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_var(--color-foreground)] transition">
      <div className={`${p.bg} p-6 aspect-[4/3] flex flex-col justify-between text-white relative overflow-hidden border-b-2 border-foreground`}>
        <div className="flex items-start justify-between">
          <span className="px-2.5 py-1 bg-foreground text-background text-[10px] font-black uppercase tracking-widest">{p.tag}</span>
          <button className="size-9 bg-foreground text-background grid place-items-center group-hover:rotate-12 transition">
            <ArrowUpRight className="size-4" />
          </button>
        </div>
        <div>
          <h3 className="font-display text-3xl font-bold leading-tight">{p.title}</h3>
          <p className="text-sm font-medium opacity-80 mt-1.5 line-clamp-2">{p.tagline}</p>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="size-7 rounded-full bg-gradient-to-br from-mint to-citrus border-2 border-foreground" />
            <span className="text-sm font-bold">{p.author}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Heart className="size-3.5" /> {p.stat}</span>
            <span className="flex items-center gap-1"><Bookmark className="size-3.5" /></span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="text-[10px] font-mono font-bold px-2 py-0.5 bg-background border border-foreground/40">{s}</span>
          ))}
        </div>
        <div className="px-3 py-2 bg-background border-2 border-foreground text-xs font-bold flex items-center gap-2 text-mint">
          <span className="size-1.5 rounded-full bg-mint animate-pulse" /> {p.help}
        </div>
      </div>
    </div>
  );
}

/* ---------------- WHY EXISTS ---------------- */
function WhyExists() {
  const stuck = [
    { icon: <Github className="size-5" />, label: "GitHub", note: "for code" },
    { icon: <MessageCircle className="size-5" />, label: "Discord", note: "for teams" },
    { icon: <Users className="size-5" />, label: "LinkedIn", note: "for identity" },
    { icon: <FileText className="size-5" />, label: "Notion", note: "for projects" },
  ];
  return (
    <section className="bg-card border-y-2 border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-5">
            02 / Why we exist
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] mb-6">
            Student builders are <span className="bg-tangerine text-tangerine-foreground px-2 -rotate-1 inline-block">scattered</span> across five apps.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            OpenBuilder is the first ecosystem designed specifically for the way students actually build — projects, identity, teams, and AI mentorship in one visual home.
          </p>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            {stuck.map((s) => (
              <div key={s.label} className="bg-background p-4 border-2 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)] flex items-center gap-3">
                <div className="text-muted-foreground">{s.icon}</div>
                <div>
                  <div className="font-bold text-sm line-through opacity-70">{s.label}</div>
                  <div className="text-[11px] text-muted-foreground">{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="bg-mint text-mint-foreground p-10 border-2 border-foreground shadow-[10px_10px_0_0_var(--color-foreground)] relative">
            <Layers className="size-10 mb-6" />
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              One home. Built for builders.
            </h3>
            <p className="text-mint-foreground/70 mb-6">
              Projects, identity, teams, AI — all visual, all public, all connected.
            </p>
            <ul className="space-y-2 font-bold text-sm">
              {["Visual project showcases","Verified builder identity","AI-matched teammates","Mentor in your pocket"].map((x) => (
                <li key={x} className="flex items-center gap-2"><Plus className="size-4" /> {x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE: SHOWCASES ---------------- */
function FeatureShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-5">
            03 / Project pages
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your projects deserve more than a <span className="bg-tangerine text-tangerine-foreground px-2 -rotate-1 inline-block">GitHub repo.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Visual project pages with image galleries, live demos, README previews, build logs, and team credits — all auto-organized.
          </p>
          <ul className="space-y-3">
            {[
              "Embed live demos and videos",
              "Auto-import from GitHub",
              "Beautiful README rendering",
              "Public build logs and changelogs",
            ].map((x) => (
              <li key={x} className="flex items-center gap-3 text-sm font-semibold">
                <div className="size-6 bg-mint border-2 border-foreground grid place-items-center"><Plus className="size-3 text-mint-foreground" /></div>
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="bg-card border-2 border-foreground shadow-[10px_10px_0_0_var(--color-foreground)]">
            <div className="bg-grape text-white p-8 border-b-2 border-foreground">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest bg-foreground text-background inline-block px-2 py-0.5 mb-3">Robotics</div>
                  <div className="font-display text-4xl font-bold">Mars Rover Mk.II</div>
                  <div className="text-sm opacity-80 mt-1">by @maya.builds + 3 builders</div>
                </div>
                <button className="size-12 bg-foreground text-background grid place-items-center"><Play className="size-5 fill-current" /></button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="aspect-square bg-mint border-2 border-foreground" />
                <div className="aspect-square bg-tangerine border-2 border-foreground" />
                <div className="aspect-square bg-tangerine border-2 border-foreground" />
              </div>
            </div>
            <div className="p-6 grid grid-cols-3 gap-3 text-center">
              {[["1.2K","Stars"],["340","Forks"],["v2.1","Release"]].map(([n,l]) => (
                <div key={l} className="bg-background border-2 border-foreground p-3">
                  <div className="font-display text-xl font-bold">{n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FEATURE: BUILDER PROFILE ---------------- */
function BuilderProfileFeature() {
  return (
    <section className="bg-card border-y-2 border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <div className="bg-background border-2 border-foreground shadow-[10px_10px_0_0_var(--color-foreground)] p-6 md:p-8">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="size-16 rounded-full bg-gradient-to-br from-mint to-tangerine border-2 border-foreground" />
                <div>
                  <div className="font-display text-xl font-bold">Aryan Sharma</div>
                  <div className="text-sm text-muted-foreground">Builder · Stanford '26</div>
                </div>
              </div>
              <span className="px-3 py-1.5 bg-mint text-mint-foreground text-[10px] font-black uppercase tracking-widest border-2 border-foreground">
                Open for teams
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[["24","Projects"],["3.2K","Followers"],["98%","Reliability"]].map(([n,l]) => (
                <div key={l} className="bg-card border-2 border-foreground p-4 text-center">
                  <div className="font-display text-2xl font-bold">{n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>

            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Skills</div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["TypeScript","React","Postgres","ML","Figma","Solidity"].map((s) => (
                <span key={s} className="text-[11px] font-mono font-bold px-2.5 py-1 bg-card border-2 border-foreground">{s}</span>
              ))}
            </div>

            <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Recent activity</div>
            <div className="space-y-2">
              {[
                { c: "bg-mint", t: "Shipped v2 of AI Vision", time: "2h" },
                { c: "bg-citrus", t: "Joined Mars Rover Squad", time: "1d" },
                { c: "bg-grape", t: "Won 1st at HackTX 2024", time: "3d" },
              ].map((a) => (
                <div key={a.t} className="flex items-center gap-3 p-3 bg-card border-2 border-foreground">
                  <div className={`size-2 rounded-full ${a.c}`} />
                  <span className="text-sm font-bold flex-1">{a.t}</span>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-5">
            04 / Identity
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build your identity as a <span className="bg-grape text-white px-2 -rotate-1 inline-block">creator.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every commit, prototype, and collab adds to your reputation. Show the world what you can ship — not just where you study.
          </p>
          <ul className="space-y-4">
            {[
              ["Verified launches", "Every project timestamped and attributed."],
              ["Skill reputation", "Earn collab scores from teammates."],
              ["Public build logs", "Document the journey from idea to launch."],
            ].map(([t,d]) => (
              <li key={t} className="flex gap-4">
                <div className="size-10 shrink-0 bg-mint border-2 border-foreground grid place-items-center text-mint-foreground"><Sparkles className="size-5" /></div>
                <div>
                  <div className="font-bold">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM MATCHING ---------------- */
function TeamMatching() {
  return (
    <section id="teams" className="max-w-7xl mx-auto px-6 py-24">
      <div className="border-2 border-foreground shadow-[12px_12px_0_0_var(--color-foreground)] grid lg:grid-cols-2 overflow-hidden">
        <div className="p-10 md:p-14 bg-card">
          <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-5">
            05 / Squad up
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find <span className="bg-mint text-mint-foreground px-2 -rotate-1 inline-block">serious</span> collaborators.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            AI matches you with builders whose stack and ambition complement yours.
          </p>
          <div className="space-y-3">
            {[
              ["AI backend + UI design", "98%", "bg-mint"],
              ["Robotics + ROS2 specialist", "84%", "bg-tangerine"],
              ["Smart contract security", "62%", "bg-grape"],
            ].map(([role, pct, c]) => (
              <div key={role} className="flex items-center justify-between p-4 bg-background border-2 border-foreground">
                <div className="flex items-center gap-3">
                  <div className={`size-9 ${c} border-2 border-foreground`} />
                  <span className="font-bold text-sm">{role}</span>
                </div>
                <span className="font-mono text-sm font-black bg-foreground text-background px-2 py-1">{pct}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-mint text-mint-foreground p-10 md:p-14 relative overflow-hidden border-l-2 border-foreground">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <Trophy className="size-12 mb-6" />
            <h3 className="font-display text-3xl font-bold mb-4 leading-tight">204 active opportunities right now</h3>
            <p className="opacity-80 mb-8">Hackathon teams, cofounder searches, OSS — refreshed live.</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { i: <Hammer className="size-4" />, l: "Hackathons", n: "82" },
                { i: <Rocket className="size-4" />, l: "Startups", n: "47" },
                { i: <Code2 className="size-4" />, l: "Open source", n: "61" },
                { i: <Users className="size-4" />, l: "Cofounders", n: "14" },
              ].map((x) => (
                <div key={x.l} className="bg-mint-foreground/10 backdrop-blur border-2 border-mint-foreground p-4">
                  <div className="flex items-center gap-2 text-xs font-bold opacity-80">{x.i} {x.l}</div>
                  <div className="font-display text-2xl font-bold mt-2">{x.n}</div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full bg-mint-foreground text-mint font-bold py-4 border-2 border-mint-foreground hover:brightness-125 transition">
              Browse opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI ASSISTANT ---------------- */
function AIAssistant() {
  return (
    <section id="ai" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-5">
          06 / AI mentor
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
          AI that helps you <span className="bg-tangerine text-tangerine-foreground px-2 -rotate-1 inline-block">actually build.</span>
        </h2>
        <p className="text-lg text-muted-foreground">Trained on thousands of hackathon wins and student startups.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-card border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)] p-8">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-mint mb-4">
            <Bot className="size-4" /> OpenBuilder AI
          </div>
          <p className="text-lg leading-relaxed font-medium">
            "I noticed you're building an AI healthcare tool. Want me to find a cofounder with medical experience and draft your validation roadmap?"
          </p>
          <div className="flex gap-2 mt-6 flex-wrap">
            <button className="text-xs font-bold px-3 py-2 bg-mint text-mint-foreground border-2 border-foreground">Yes, find one</button>
            <button className="text-xs font-bold px-3 py-2 bg-background border-2 border-foreground">Show roadmap</button>
            <button className="text-xs font-bold px-3 py-2 bg-background border-2 border-foreground">Draft pitch</button>
          </div>
        </div>

        <div className="bg-mint text-mint-foreground border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)] p-8">
          <Zap className="size-10 mb-4" />
          <h3 className="font-display text-2xl font-bold mb-3 leading-tight">From idea → MVP → launch</h3>
          <p className="opacity-80 mb-6">Auto-generated docs, decks, READMEs, and launch posts — tuned to your project.</p>
          <ul className="space-y-2 text-sm font-bold">
            {[
              "Auto-write README + landing copy",
              "Generate hackathon submissions",
              "Draft cold outreach to mentors",
              "Validate ideas with market research",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2"><Star className="size-3.5 fill-current" /> {x}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BUILD FEED ---------------- */
function BuildFeed() {
  const feed = [
    { who: "@arnav.zero", action: "just launched", what: "PitchPal v1.0", time: "2m", color: "bg-mint", icon: <Rocket className="size-4" /> },
    { who: "@maya.builds", action: "posted update on", what: "Mars Rover Mk.II", time: "8m", color: "bg-tangerine", icon: <Hammer className="size-4" /> },
    { who: "@kai_neural", action: "is looking for a", what: "Backend dev for StudyAI", time: "14m", color: "bg-tangerine", icon: <Users className="size-4" /> },
    { who: "@sarah.green", action: "shipped milestone", what: "ClimateOS reaches 10K downloads", time: "32m", color: "bg-grape", icon: <Trophy className="size-4" /> },
    { who: "@leo_codes", action: "opened beta for", what: "FinPulse", time: "1h", color: "bg-sky", icon: <Sparkles className="size-4" /> },
    { who: "@riya.exe", action: "merged a PR on", what: "DevSpace", time: "2h", color: "bg-mint", icon: <GitBranch className="size-4" /> },
  ];
  return (
    <section id="feed" className="bg-card border-y-2 border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-4">
              07 / Public build feed
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              The internet's most <span className="bg-mint text-mint-foreground px-2 -rotate-1 inline-block">alive</span> feed.
            </h2>
          </div>
          <div className="text-sm text-muted-foreground font-mono">live · updates every second</div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {feed.map((f, i) => (
            <div key={i} className="bg-background border-2 border-foreground shadow-[5px_5px_0_0_var(--color-foreground)] p-5 flex items-center gap-4">
              <div className={`size-12 shrink-0 ${f.color} border-2 border-foreground grid place-items-center text-white`}>
                {f.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm">
                  <span className="font-bold">{f.who}</span>{" "}
                  <span className="text-muted-foreground">{f.action}</span>{" "}
                  <span className="font-bold">{f.what}</span>
                </div>
                <div className="text-[11px] font-mono text-muted-foreground mt-0.5">{f.time} ago</div>
              </div>
              <button className="text-xs font-bold px-3 py-1.5 border-2 border-foreground hover:bg-mint hover:text-mint-foreground transition">
                <ArrowUpRight className="size-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOCIAL PROOF ---------------- */
function SocialProof() {
  const items = [
    { n: "15K+", l: "Student builders" },
    { n: "200+", l: "Universities" },
    { n: "8.4K", l: "Projects shipped" },
    { n: "1.2K", l: "Hackathon wins" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-5">
          08 / Built for builders
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
          Made for student founders, hackers, and hardware nerds.
        </h2>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((x, i) => {
          const colors = ["bg-mint","bg-tangerine","bg-grape","bg-sky"];
          return (
            <div key={x.l} className={`${colors[i]} p-8 border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] text-white`}>
              <div className="font-display text-5xl font-bold">{x.n}</div>
              <div className="text-sm font-bold uppercase tracking-widest mt-2 opacity-80">{x.l}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Create your builder profile", d: "Skills, school, ambition. Your home base on the internet." },
    { n: "02", t: "Showcase your projects", d: "Visual project pages with demos, READMEs, and build logs." },
    { n: "03", t: "Find collaborators", d: "AI-matched teammates, hackathon squads, and cofounders." },
  ];
  return (
    <section className="bg-card border-y-2 border-foreground/10">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-5">
            09 / How it works
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Three steps. Zero friction.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="bg-background border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)] p-7 relative">
              <div className="font-mono font-black text-6xl text-mint mb-4">{s.n}</div>
              <div className="font-display text-xl font-bold mb-2">{s.t}</div>
              <div className="text-sm text-muted-foreground">{s.d}</div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 size-8 text-mint" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  const cats = [
    "AI/ML","Robotics","SaaS","HealthTech","FinTech","Climate","Education",
    "Gaming","Cybersec","DevTools","Hardware","Web3","Creator","BioTech","AR/VR",
  ];
  return (
    <section className="py-12 border-y-2 border-foreground/10 bg-background overflow-hidden">
      <div className="text-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
        Build in any category
      </div>
      <div className="flex overflow-hidden mb-3">
        <div className="ticker flex gap-3 shrink-0 pr-3">
          {[...cats, ...cats].map((c, i) => (
            <span key={i} className="px-5 py-2.5 bg-card border-2 border-foreground font-display font-bold text-sm whitespace-nowrap">
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="flex overflow-hidden">
        <div className="ticker-rev flex gap-3 shrink-0 pr-3">
          {[...cats.slice().reverse(), ...cats.slice().reverse()].map((c, i) => (
            <span key={i} className="px-5 py-2.5 bg-mint text-mint-foreground border-2 border-foreground font-display font-bold text-sm whitespace-nowrap">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="bg-mint text-mint-foreground border-2 border-foreground shadow-[14px_14px_0_0_var(--color-foreground)] p-10 md:p-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-3xl mx-auto leading-[0.95]">
            The next generation of builders is already creating the future.
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-80 max-w-xl mx-auto">
            Don't build alone. Find your people. Ship in public.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center gap-2 bg-mint-foreground text-mint font-bold px-8 py-4 border-2 border-mint-foreground shadow-[6px_6px_0_0_oklch(0.2_0.03_260)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition">
              Join OpenBuilder <ArrowUpRight className="size-5" />
            </button>
            <button className="inline-flex items-center gap-2 bg-mint text-mint-foreground font-bold px-8 py-4 border-2 border-mint-foreground hover:bg-mint-foreground hover:text-mint transition">
              <Github className="size-4" /> Continue with GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t-2 border-foreground/10 bg-card">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 bg-mint grid place-items-center text-mint-foreground font-black border-2 border-foreground">◆</div>
            <span className="font-display font-bold">OpenBuilder</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Build publicly. Collaborate openly.</p>
          <p className="text-xs text-muted-foreground font-mono">Built by student builders.</p>
        </div>
        {[
          { h: "Product", l: ["Features","Explore","AI Mentor","Hackathons"] },
          { h: "Community", l: ["Discord","X / Twitter","GitHub","Manifesto"] },
          { h: "Company", l: ["About","Contact","Careers","Press"] },
        ].map((col) => (
          <div key={col.h}>
            <div className="font-display font-bold mb-4">{col.h}</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {col.l.map((i) => (
                <li key={i}><a href="#" className="hover:text-foreground transition">{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t-2 border-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 OpenBuilder. Shipping since day one.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
