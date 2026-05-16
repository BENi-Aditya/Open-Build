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
  Code2,
  Star,
  MessageCircle,
  GitBranch,
  Cpu,
  FileText,
  Layers,
  Flame,
  ArrowRight,
  Plus,
  Play,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OpenBuilder: The internet home for student builders" },
      {
        name: "description",
        content:
          "OpenBuilder is in active development: a home for student builders to showcase hardware and software projects, find collaborators, and ship in public.",
      },
      { property: "og:title", content: "OpenBuilder: Build publicly. Collaborate openly." },
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

/* ---------------- CUSTOM CURSOR ---------------- */
/** Classic arrow + stem on a 12×12 pixel grid (hotspot top-left = tip). */
function pixelPointerDataUrl(): string {
  const ink = "#0a0a0a";
  const fill = "#FFD600";
  const cells = new Set<string>();
  for (let y = 0; y <= 9; y++) for (let x = 0; x <= y; x++) cells.add(`${x},${y}`);
  for (let y = 10; y <= 11; y++) for (let x = 0; x <= 1; x++) cells.add(`${x},${y}`);
  const inCell = (x: number, y: number) => cells.has(`${x},${y}`);
  const rects: string[] = [];
  for (const key of cells) {
    const [x, y] = key.split(",").map(Number);
    const edge = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([dx, dy]) => !inCell(x + dx, y + dy));
    rects.push(`<rect x="${x}" y="${y}" width="1" height="1" fill="${edge ? ink : fill}"/>`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" shape-rendering="crispEdges">${rects.join("")}</svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const PIXEL_ARROW = pixelPointerDataUrl();

function NeoCursor() {
  const cursorRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const enter = () => cursor.classList.add("hovering");
    const leave = () => cursor.classList.remove("hovering");

    const click = (e: MouseEvent) => {
      cursor.classList.remove("click-pop");
      void cursor.offsetWidth;
      cursor.classList.add("click-pop");
      const onAnimEnd = () => {
        cursor.classList.remove("click-pop");
        cursor.removeEventListener("animationend", onAnimEnd);
      };
      cursor.addEventListener("animationend", onAnimEnd);

      for (let i = 0; i < 8; i++) {
        const p = document.createElement("div");
        p.className = "pixel-particle";
        const angle = (Math.PI * 2 * i) / 8;
        const dist = 14 + Math.random() * 10;
        p.style.cssText = `left:${e.clientX}px;top:${e.clientY}px;width:4px;height:4px;background:${i % 2 === 0 ? "#FFD600" : "#0a0a0a"};--px:${Math.cos(angle) * dist}px;--py:${Math.sin(angle) * dist}px;animation:pixel-burst 0.28s ease-out forwards;`;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 300);
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", click);

    const interactives = document.querySelectorAll("a, button, [role=\"button\"], input, textarea, select, summary, [tabindex]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", click);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <img
      ref={cursorRef}
      src={PIXEL_ARROW}
      alt=""
      width="24"
      height="24"
      className="pixel-cursor"
      draggable={false}
    />
  );
}

function Index() {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden bg-background">
      <NeoCursor />
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
          <img src="/logo.png" alt="OpenBuilder" className="size-9 rounded-lg border-2 border-foreground shadow-[3px_3px_0_0_var(--color-foreground)] object-cover" />
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
              <Hammer className="size-3.5" />
              In active development — shipping soon
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tight mb-10">
              Build publicly.<br />
              Find <span className="bg-mint text-mint-foreground px-2 -rotate-1 inline-block">builders.</span><br />
              Launch faster.
            </h1>

            <div className="flex flex-wrap gap-4">
              <button className="group inline-flex items-center gap-2 bg-mint text-mint-foreground font-bold px-7 py-4 border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_var(--color-foreground)] transition">
                Start Building
                <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </button>
              <button className="inline-flex items-center gap-2 bg-card text-foreground font-bold px-7 py-4 border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0_0_var(--color-foreground)] transition">
                Explore Projects
              </button>
            </div>
          </div>

          {/* RIGHT — floating cards collage */}
          <div className="lg:col-span-6 relative h-[560px] hidden lg:block">
            {/* Project card 1 — HornBill */}
            <div className="absolute top-0 left-4 w-72 float-a">
              <a
                href="https://github.com/BENi-Aditya/Drone_Brain"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-grape text-white border-2 border-foreground shadow-[8px_8px_0_0_var(--color-foreground)] overflow-hidden hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_var(--color-foreground)] transition no-underline text-inherit"
              >
                <div className="p-5 pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-foreground text-background px-2 py-1">Robotics</span>
                    <Cpu className="size-4 shrink-0 opacity-90" />
                  </div>
                  <div className="font-display text-2xl font-bold leading-tight mt-2">HornBill</div>
                  <div className="text-[11px] opacity-90 mt-1.5 leading-snug">by @BENiAditya · +1 builder</div>
                </div>
                <img
                  src="/projects/Drone.png"
                  alt=""
                  className="w-full aspect-[4/3] object-cover border-t-2 border-foreground"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </a>
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
                <div className="text-xs mb-4 opacity-80">"AI cofounder that drafts your deck overnight." by @arnav.zero</div>
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

/** Local file is gitignored (>100MB); set VITE_MOCK_DEMO_VIDEO in Vercel for production. */
const MOCK_DEMO_VIDEO =
  import.meta.env.VITE_MOCK_DEMO_VIDEO ||
  `/projects/${encodeURIComponent("Mock copy.mov")}`;

/** HornBill demo reel: defers `<video>` mount until the tile is near viewport. */
function FeatureMockVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setLoad(true);
      },
      { rootMargin: "80px", threshold: 0.02 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 bg-black">
      {load ? (
        <video
          className="absolute inset-0 size-full object-cover object-center"
          src={MOCK_DEMO_VIDEO}
          muted
          playsInline
          loop
          autoPlay
          preload="none"
          aria-label="HornBill demo preview"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-grape/40 to-black" aria-hidden />
      )}
    </div>
  );
}

function LazyLoopVideo({ src, className }: { src: string; className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setActive(true);
      },
      { rootMargin: "160px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      {active ? (
        <video
          className="absolute inset-0 size-full object-cover object-center"
          src={src}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-label="Project preview video"
        />
      ) : (
        <div
          className="absolute inset-0 bg-gradient-to-br from-tangerine/50 via-foreground/20 to-background"
          aria-hidden
        />
      )}
    </div>
  );
}

function ProjectCardMedia({ media }: { media: { kind: "image" | "video"; src: string } }) {
  if (media.kind === "video") {
    return <LazyLoopVideo src={media.src} className="absolute inset-0 size-full" />;
  }
  return (
    <img
      src={media.src}
      alt=""
      loading="lazy"
      decoding="async"
      className="absolute inset-0 size-full object-cover object-center"
      draggable={false}
    />
  );
}

/* ---------------- LIVE SHOWCASE ---------------- */
function LiveShowcase() {
  const projects = [
    {
      title: "HornBill",
      tagline: "Long-range FPV wing with onboard sensing and clean telemetry downlink.",
      tag: "Robotics",
      author: "Aerial robotics lab",
      bg: "bg-sky",
      stack: ["KiCad", "ESP32", "ArduPilot", "Fusion 360"],
      help: "Looking for RF / antenna design help",
      media: { kind: "image" as const, src: "/projects/Drone.png" },
      href: "https://github.com/BENi-Aditya/Drone_Brain",
    },
    {
      title: "Drift Car",
      tagline: "Rear-wheel drift rig tuned for tight lines — chassis, powertrain, and control in one loop.",
      tag: "Automotive",
      author: "Mechatronics bench",
      bg: "bg-tangerine",
      stack: ["CAD", "3D print", "BLDC", "STM32"],
      help: "Want a CAD partner for body shells",
      media: { kind: "video" as const, src: "/projects/car.mp4" },
      href: "https://github.com/BENi-Aditya/Arduino_RC_Car",
    },
    {
      title: "BENi AI TalkBot",
      tagline: "Low-latency desk and kiosk assistant with speech-in, structured answers out.",
      tag: "AI",
      author: "@BENi-Aditya",
      bg: "bg-mint",
      stack: ["TypeScript", "Whisper", "WebRTC", "Edge inference"],
      help: "Looking for prompt / UX writing",
      media: { kind: "image" as const, src: "/projects/ai-talkbot.png" },
      href: "https://github.com/BENi-Aditya/BENi_AI_TalkBOT",
    },
    {
      title: "BlindSight",
      tagline: "Sensor-driven spatial cues for safer navigation in busy, low-visibility environments.",
      tag: "Assistive",
      author: "HCI + CV lab",
      bg: "bg-grape",
      stack: ["Python", "OpenCV", "Raspberry Pi", "Depth cam"],
      help: "Seeking campus field testers",
      media: { kind: "image" as const, src: "/projects/Blindsight.png" },
      href: "https://github.com/BENi-Aditya/Blind-Accesibility-Device",
    },
    {
      title: "Climate Satellite",
      tagline: "Ground station toolkit and mission dashboards for student cubesat and weather payloads.",
      tag: "Climate",
      author: "Satellite club",
      bg: "bg-mint",
      stack: ["Python", "Grafana", "SDR", "TLE tools"],
      help: "Open for data viz collaborator",
      media: { kind: "image" as const, src: "/projects/satellite.png" },
      href: "https://adityabeni.vercel.app/",
    },
    {
      title: "Jatayu",
      tagline: "Student-built flight controller stack: IMU fusion, PID loops, and clean failsafes for small UAVs.",
      tag: "Avionics",
      author: "UAV firmware team",
      bg: "bg-grape",
      stack: ["C++", "FreeRTOS", "MAVLink", "Sensor fusion"],
      help: "Need a careful firmware review pass",
      media: { kind: "image" as const, src: "/projects/Jatayu.png" },
      href: "https://github.com/BENi-Aditya/thequadcoach-refine-",
    },
  ];

  return (
    <section id="explore" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <div>
          <div className="inline-block text-xs font-mono uppercase tracking-widest bg-foreground text-background px-2 py-1 mb-4">
            01 / Project lab
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] tracking-tight max-w-4xl">
            <span className="block">Real builders making real projects</span>
            <span className="mt-3 md:mt-4 block text-xl md:text-2xl font-semibold text-muted-foreground leading-snug">
              and sharing on{" "}
              <span className="inline-block align-middle bg-mint text-mint-foreground px-2.5 py-1 -rotate-1 border-2 border-foreground shadow-[4px_4px_0_0_var(--color-foreground)] font-bold font-display tracking-tight text-2xl md:text-3xl">
                OpenBuilder
              </span>
            </span>
          </h2>
        </div>
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
  title: string;
  tagline: string;
  tag: string;
  author: string;
  bg: string;
  stack: string[];
  help: string;
  media: { kind: "image" | "video"; src: string };
  href: string;
}) {
  return (
    <a
      href={p.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${p.title} — opens project link`}
      className="group block bg-card border-2 border-foreground shadow-[6px_6px_0_0_var(--color-foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_var(--color-foreground)] transition no-underline text-inherit cursor-pointer"
    >
      <div
        className={`${p.bg} relative aspect-[4/3] overflow-hidden border-b-2 border-foreground text-white isolate`}
      >
        <ProjectCardMedia media={p.media} />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25 pointer-events-none"
          aria-hidden
        />
        <div className="relative z-10 flex h-full flex-col justify-between p-6 min-h-0">
          <div className="flex items-start justify-between gap-2">
            <span className="px-2.5 py-1 bg-foreground text-background text-[10px] font-black uppercase tracking-widest shrink-0">
              {p.tag}
            </span>
            <span
              className="size-9 shrink-0 bg-foreground text-background grid place-items-center group-hover:rotate-12 transition pointer-events-none"
              aria-hidden
            >
              <ArrowUpRight className="size-4" />
            </span>
          </div>
          <div>
            <h3 className="font-display text-3xl font-bold leading-tight drop-shadow-sm">{p.title}</h3>
            <p className="text-sm font-medium text-white/90 mt-1.5 line-clamp-2 drop-shadow-sm">{p.tagline}</p>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="size-7 shrink-0 rounded-full bg-gradient-to-br from-mint to-citrus border-2 border-foreground" />
            <span className="text-sm font-bold truncate">{p.author}</span>
          </div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground shrink-0">
            Preview
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="text-[10px] font-mono font-bold px-2 py-0.5 bg-background border border-foreground/40">
              {s}
            </span>
          ))}
        </div>
        <div className="px-3 py-2 bg-background border-2 border-foreground text-xs font-bold flex items-center gap-2 text-mint">
          <span className="size-1.5 rounded-full bg-mint shrink-0 animate-pulse" /> {p.help}
        </div>
      </div>
    </a>
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
            OpenBuilder is the first ecosystem designed specifically for the way students actually build: projects, identity, teams, and AI mentorship in one visual home.
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
              Projects, identity, teams, AI. All visual, all public, all connected.
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
  const repo = "https://github.com/BENi-Aditya/Drone_Brain";

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
            Visual project pages with image galleries, live demos, README previews, build logs, and team credits, all auto-organized.
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
            <div className="bg-grape text-white p-6 sm:p-8 border-b-2 border-foreground">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-widest bg-foreground text-background inline-block px-2 py-0.5 mb-3">Robotics</div>
                  <div className="font-display text-3xl sm:text-4xl font-bold leading-tight">HornBill</div>
                  <div className="text-sm opacity-90 mt-1.5">by @BENiAditya · +1 builder</div>
                </div>
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-12 shrink-0 bg-foreground text-background grid place-items-center border-2 border-background hover:opacity-90 transition"
                  aria-label="View HornBill on GitHub"
                >
                  <Play className="size-5 fill-current" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="relative aspect-square min-w-0 overflow-hidden rounded-sm border-2 border-foreground bg-black">
                  <img
                    src="/projects/Drone.png"
                    alt="HornBill drone"
                    className="absolute inset-0 size-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
                <div className="relative aspect-square min-w-0 overflow-hidden rounded-sm border-2 border-foreground bg-black">
                  <img
                    src="/projects/Payload.png"
                    alt="Payload system"
                    className="absolute inset-0 size-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
                <div className="relative aspect-square min-w-0 overflow-hidden rounded-sm border-2 border-foreground bg-black">
                  <FeatureMockVideo />
                </div>
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
              <div className="flex items-center gap-4 min-w-0">
                <img
                  src="/projects/aditya.png"
                  alt=""
                  className="size-16 rounded-full border-2 border-foreground object-cover shrink-0"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
                <div className="min-w-0">
                  <div className="font-display text-xl font-bold truncate">Aditya Tripathi</div>
                  <div className="text-sm text-muted-foreground">Full stack dev</div>
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
            Every commit, prototype, and collab adds to your reputation. Show the world what you can ship, not just where you study.
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
            <p className="opacity-80 mb-8">Hackathon teams, cofounder searches, OSS. Refreshed live.</p>
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
          <p className="opacity-80 mb-6">Auto-generated docs, decks, READMEs, and launch posts, tuned to your project.</p>
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
            <img src="/logo.png" alt="OpenBuilder" className="size-8 border-2 border-foreground object-cover" />
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
