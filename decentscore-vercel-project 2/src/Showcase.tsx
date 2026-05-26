import React, { useMemo, useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  Bell,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CloudUpload,
  Database,
  Download,
  FileCheck,
  FileSearch,
  FileText,
  Fingerprint,
  Gauge,
  History,
  LayoutDashboard,
  LockKeyhole,
  MessageSquareText,
  Network,
  PlayCircle,
  Scale,
  ShieldAlert,
  Sparkles,
  Target,
  Users,
  WandSparkles,
  Wrench,
  Zap,
} from "lucide-react";

type EngineStep = "input" | "scan" | "map" | "output";

const navItems = [
  ["Problem", "#problem"],
  ["Workflow", "#workflow"],
  ["AI Engine", "#engine"],
  ["Dashboard", "#dashboard"],
  ["Impact", "#impact"],
];

const engineSteps: { key: EngineStep; label: string; title: string; icon: React.ReactNode }[] = [
  { key: "input", label: "01", title: "Input clause", icon: <FileText size={18} /> },
  { key: "scan", label: "02", title: "Clause scan", icon: <BrainCircuit size={18} /> },
  { key: "map", label: "03", title: "Risk mapping", icon: <Network size={18} /> },
  { key: "output", label: "04", title: "Dashboard output", icon: <LayoutDashboard size={18} /> },
];

const flaggedTerms = [
  { term: "manager's discretion", risk: "Flexibility risk", severity: "High" },
  { term: "does not affect productivity", risk: "Working conditions risk", severity: "Medium" },
  { term: "Repeated requests", risk: "Work stress risk", severity: "High" },
  { term: "performance reviews", risk: "Job security risk", severity: "Medium" },
];

const workflow = [
  {
    title: "Upload documents",
    desc: "Policy drafts, business-unit manager guides and grievance procedures are uploaded into the review workspace.",
    icon: <CloudUpload size={22} />,
  },
  {
    title: "Clause-level scan",
    desc: "The system breaks long HR documents into clauses so risk can be traced back to exact source wording.",
    icon: <FileSearch size={22} />,
  },
  {
    title: "Risk diagnosis",
    desc: "Each clause is mapped against decent-work dimensions such as flexibility, stress, conditions and job security.",
    icon: <ShieldAlert size={22} />,
  },
  {
    title: "Fix Pack",
    desc: "HR receives revised wording, a manager checklist and worker-facing explanations for human review.",
    icon: <Wrench size={22} />,
  },
  {
    title: "Audit trail",
    desc: "Every automated finding and human decision is retained for transparent governance and disclosure.",
    icon: <History size={22} />,
  },
];

export default function Showcase() {
  const [activeStep, setActiveStep] = useState<EngineStep>("scan");
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const particles = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        top: `${(i * 53) % 100}%`,
        size: 3 + ((i * 7) % 12),
        x: `${((i % 7) - 3) * 14}px`,
        y: `${(((i * 2) % 9) - 4) * 12}px`,
        duration: `${3 + (i % 5)}s`,
        delay: `${(i % 8) * -0.4}s`,
      })),
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/15">
              <Fingerprint size={21} />
            </div>
            <div>
              <div className="text-sm font-black tracking-tight">DecentScore™</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Showcase prototype</div>
            </div>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section
          className="relative overflow-hidden bg-slate-950 px-5 py-16 text-white md:py-24"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            setCursor({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
          }}
        >
          <div
            className="absolute inset-0 opacity-80"
            style={{
              background: `radial-gradient(circle at ${cursor.x}% ${cursor.y}%, rgba(99,102,241,0.35), transparent 28%), radial-gradient(circle at 80% 20%, rgba(20,184,166,0.22), transparent 32%), linear-gradient(135deg,#020617,#0f172a 55%,#111827)`,
            }}
          />
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((p) => (
              <span
                key={p.id}
                className="particle absolute rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(125,211,252,0.75)]"
                style={{
                  left: p.left,
                  top: p.top,
                  width: p.size,
                  height: p.size,
                  "--x": p.x,
                  "--y": p.y,
                  "--duration": p.duration,
                  "--delay": p.delay,
                } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-100">
                <Sparkles size={15} /> Product showcase for RAI board
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                AI-assisted decent-work risk diagnosis before policy rollout.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                DecentScore™ helps HR teams scan policy clauses, identify hidden decent-work risks and generate review-ready fixes before employees are exposed to unclear or harmful wording.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#engine" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-50">
                  Show product in action <PlayCircle size={18} />
                </a>
                <a href="#/dashboard" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/15">
                  View client dashboard <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative min-h-[460px]">
              <div className="pulse-ring absolute left-8 top-12 h-72 w-72 rounded-full border border-cyan-300/25" />
              <div className="pulse-ring absolute bottom-4 right-0 h-80 w-80 rounded-full border border-indigo-300/20 [animation-delay:-1.2s]" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-200">
                    <BrainCircuit size={18} className="text-cyan-200" /> AI Clause Intelligence Engine
                  </div>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">Live scan</span>
                </div>
                <div className="relative overflow-hidden rounded-3xl bg-slate-950/80 p-5 ring-1 ring-white/10">
                  <div className="scan-line absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-cyan-300/0 via-cyan-300/20 to-cyan-300/0 blur-sm" />
                  <div className="space-y-4 font-mono text-sm leading-7 text-slate-300">
                    <p>
                      Flexible work requests may be approved or rejected at the <span className="rounded bg-rose-400/20 px-1 text-rose-100 ring-1 ring-rose-300/30">manager's discretion</span>.
                    </p>
                    <p>
                      Employees must ensure that flexible work <span className="rounded bg-amber-300/20 px-1 text-amber-100 ring-1 ring-amber-200/30">does not affect productivity</span>.
                    </p>
                    <p>
                      <span className="rounded bg-rose-400/20 px-1 text-rose-100 ring-1 ring-rose-300/30">Repeated requests</span> may be considered during <span className="rounded bg-orange-300/20 px-1 text-orange-100 ring-1 ring-orange-200/30">performance reviews</span>.
                    </p>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {flaggedTerms.map((item) => (
                      <div key={item.term} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                        <div className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">{item.severity} signal</div>
                        <div className="mt-1 text-sm font-bold text-white">{item.risk}</div>
                        <div className="mt-1 truncate text-xs text-slate-400">“{item.term}”</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="problem" eyebrow="Client problem" title="Flexible-work policies can look neutral while quietly creating decent-work risks.">
          <div className="grid gap-5 md:grid-cols-3">
            <ProblemCard icon={<Users />} title="Inconsistent access" desc="Approval can depend on which manager an employee has rather than transparent criteria." />
            <ProblemCard icon={<AlertCircle />} title="Hidden work stress" desc="Employees may avoid support if requests are linked to performance consequences." />
            <ProblemCard icon={<FileCheck />} title="Weak governance evidence" desc="HR teams need a clear trail showing what was flagged, fixed and reviewed." />
          </div>
        </Section>

        <Section id="workflow" eyebrow="Product workflow" title="One product story: backend analysis logic, client-facing dashboard output.">
          <div className="grid gap-4 lg:grid-cols-5">
            {workflow.map((item, idx) => (
              <div key={item.title} className="group relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">{item.icon}</div>
                  <span className="text-xs font-black text-slate-300">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                {idx !== workflow.length - 1 && <ChevronRight className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-slate-300 lg:block" />}
              </div>
            ))}
          </div>
        </Section>

        <Section id="engine" eyebrow="Product in action" title="AI-assisted clause analysis without showing the audience a raw prompt conversation.">
          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-white"><WandSparkles size={21} /></div>
                <div>
                  <h3 className="font-black">LLM-assisted backend logic</h3>
                  <p className="text-sm text-slate-500">A visual substitute for the long chat box.</p>
                </div>
              </div>
              <div className="space-y-3">
                {engineSteps.map((step) => (
                  <button
                    key={step.key}
                    onClick={() => setActiveStep(step.key)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${activeStep === step.key ? "border-indigo-300 bg-indigo-50 shadow-md" : "border-slate-200 bg-slate-50 hover:border-slate-300"}`}
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${activeStep === step.key ? "bg-indigo-600 text-white" : "bg-white text-slate-500"}`}>{step.icon}</span>
                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{step.label}</span>
                      <span className="block font-bold text-slate-800">{step.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <EngineVisual activeStep={activeStep} />
          </div>
        </Section>

        <Section id="dashboard" eyebrow="Client-facing output" title="The HR team does not see a prompt. They see a structured risk dashboard.">
          <DashboardMock />
        </Section>

        <Section id="impact" eyebrow="SDG impact and board recommendation" title="DecentScore™ supports preventive governance, but keeps humans accountable.">
          <div className="grid gap-6 lg:grid-cols-3">
            <ImpactCard icon={<Target />} title="SDG 8 alignment" desc="Supports decent work by helping organisations identify unfair, stressful or inconsistent policy wording before rollout." />
            <ImpactCard icon={<LockKeyhole />} title="Responsible AI boundary" desc="The tool supports HR review; it does not replace legal advice, worker consultation or human judgement." />
            <ImpactCard icon={<Zap />} title="Pilot recommendation" desc="Launch a focused HR pilot, review one flexible-work policy end to end, then scale the workflow after legal and employee feedback." />
          </div>
        </Section>

      </main>
    </div>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="showcase-section px-5 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-4xl">
          <div className="text-sm font-black uppercase tracking-[0.24em] text-indigo-600">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProblemCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-rose-50 p-3 text-rose-600">{icon}</div>
      <h3 className="text-xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

function ImpactCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
      <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-900 p-3 text-white">{icon}</div>
      <h3 className="text-xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

function EngineVisual({ activeStep }: { activeStep: EngineStep }) {
  const stepText = {
    input: {
      label: "Input clause",
      title: "The client uploads the risky flexible-work wording.",
      desc: "The tool starts from exact source text, not a generic HR interpretation.",
    },
    scan: {
      label: "Clause scan",
      title: "Risk phrases are detected and highlighted.",
      desc: "The clause is broken into traceable wording units: discretion, productivity, repeated requests and performance reviews.",
    },
    map: {
      label: "Risk mapping",
      title: "Each phrase is mapped to a decent-work dimension.",
      desc: "This creates the bridge between raw wording and the report's decent-work logic.",
    },
    output: {
      label: "Dashboard output",
      title: "The results are converted into a client-facing decision screen.",
      desc: "HR sees risk explanations, score changes and Fix Pack drafts instead of a raw LLM chat box.",
    },
  }[activeStep];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.22),transparent_35%)]" />
      <div className="relative grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-3xl bg-white/8 p-5 ring-1 ring-white/10">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{stepText.label}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-slate-300">backend simulation</span>
          </div>
          <h3 className="text-2xl font-black leading-tight">{stepText.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{stepText.desc}</p>
          <div className="mt-6 rounded-2xl bg-slate-950/70 p-4 font-mono text-sm leading-7 text-slate-300 ring-1 ring-white/10">
            <p>Clause 4.2</p>
            <p className="mt-2">
              Flexible work requests may be approved or rejected at the <span className={activeStep !== "input" ? "rounded bg-rose-400/20 px-1 text-rose-100" : ""}>manager's discretion</span>.
            </p>
            <p>
              <span className={activeStep === "scan" || activeStep === "map" || activeStep === "output" ? "rounded bg-amber-400/20 px-1 text-amber-100" : ""}>Repeated requests</span> may be considered during <span className={activeStep === "scan" || activeStep === "map" || activeStep === "output" ? "rounded bg-orange-400/20 px-1 text-orange-100" : ""}>performance reviews</span>.
            </p>
          </div>
        </div>

        <div className="relative min-h-[380px] rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 420 380" fill="none">
            <path className="draw-path" d="M80 85 C190 40 245 105 330 70" stroke="rgba(125,211,252,0.7)" strokeWidth="2" />
            <path className="draw-path" d="M78 190 C160 170 230 210 330 185" stroke="rgba(196,181,253,0.7)" strokeWidth="2" />
            <path className="draw-path" d="M78 300 C170 250 255 315 330 285" stroke="rgba(251,191,36,0.7)" strokeWidth="2" />
          </svg>
          <Node className="left-6 top-10" title="Risk wording" subtitle="manager's discretion" active={activeStep !== "input"} />
          <Node className="right-4 top-8" title="Flexibility" subtitle="High risk" active={activeStep === "map" || activeStep === "output"} />
          <Node className="left-4 top-[165px]" title="Trigger" subtitle="performance reviews" active={activeStep === "scan" || activeStep === "map" || activeStep === "output"} />
          <Node className="right-6 top-[160px]" title="Work stress" subtitle="High risk" active={activeStep === "map" || activeStep === "output"} />
          <Node className="left-6 bottom-8" title="Fix Pack" subtitle="revised wording" active={activeStep === "output"} />
          <Node className="right-8 bottom-10" title="Dashboard" subtitle="client output" active={activeStep === "output"} />
        </div>
      </div>
    </div>
  );
}

function Node({ title, subtitle, active, className }: { title: string; subtitle: string; active: boolean; className: string }) {
  return (
    <div className={`absolute w-36 rounded-2xl border p-3 text-sm transition ${className} ${active ? "border-cyan-200/40 bg-cyan-200/15 shadow-[0_0_24px_rgba(125,211,252,0.22)]" : "border-white/10 bg-white/[0.06]"}`}>
      <div className="font-black text-white">{title}</div>
      <div className="mt-1 text-xs text-slate-300">{subtitle}</div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white"><LayoutDashboard size={20} /></div>
          <div>
            <h3 className="font-black text-slate-900">Client Demo – Flexible Work Policy Review</h3>
            <p className="text-xs text-slate-500">Wenjing Xu · HR Compliance Lead</p>
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Bell size={18} className="text-slate-400" />
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">Review ready</span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[230px_1fr_300px]">
        <aside className="hidden border-r border-slate-200 bg-slate-950 p-4 text-white lg:block">
          {[
            [LayoutDashboard, "Dashboard"],
            [CloudUpload, "Uploads"],
            [FileSearch, "Clause Scan"],
            [ShieldAlert, "Risk Diagnosis"],
            [Wrench, "Fix Pack"],
            [History, "Audit Trail"],
          ].map(([Icon, label]: any, i) => (
            <div key={label} className={`mb-2 flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-semibold ${i === 2 ? "bg-white/12 text-white" : "text-slate-400"}`}>
              <Icon size={17} /> {label}
            </div>
          ))}
        </aside>

        <div className="p-5">
          <div className="mb-5 flex flex-wrap items-center gap-2 text-sm font-bold">
            {['Upload', 'Clause Scan', 'Risk Diagnosis', 'Fix Pack', 'Audit Trail'].map((s, i) => (
              <span key={s} className={`rounded-full px-3 py-1 ${i < 2 ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'}`}>{s}</span>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h4 className="font-black text-slate-900">Clause Analysis</h4>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-500 ring-1 ring-slate-200">Clause 4.2</span>
            </div>
            <p className="rounded-2xl border-l-4 border-slate-300 bg-white p-4 font-serif text-lg leading-8 text-slate-700">
              Flexible work requests may be approved or rejected at the <mark className="rounded bg-rose-100 px-1 text-rose-900">manager's discretion</mark>. Employees must ensure that flexible work <mark className="rounded bg-amber-100 px-1 text-amber-900">does not affect productivity</mark>. <mark className="rounded bg-rose-100 px-1 text-rose-900">Repeated requests</mark> may be considered during <mark className="rounded bg-orange-100 px-1 text-orange-900">performance reviews</mark>.
            </p>
          </div>

          <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                <tr><th className="p-3">Dimension</th><th className="p-3">Flagged phrase</th><th className="p-3">Risk</th><th className="p-3">Severity</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <RiskRow dim="Flexibility" phrase="manager's discretion" risk="Access depends on individual managers" sev="High" />
                <RiskRow dim="Work stress" phrase="repeated requests" risk="Discourages support-seeking behaviour" sev="High" />
                <RiskRow dim="Work conditions" phrase="productivity" risk="Missing wellbeing safeguards" sev="Medium" />
              </tbody>
            </table>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <FixMini title="Legal/HR Draft" desc="Fair and consistent review criteria." />
            <FixMini title="Plain English" desc="Asking will not be held against you." />
            <FixMini title="Manager Checklist" desc="Document reasons and review pathway." />
          </div>
        </div>

        <aside className="border-t border-slate-200 bg-slate-50 p-5 lg:border-l lg:border-t-0">
          <h4 className="mb-4 font-black text-slate-900">Score Summary</h4>
          <div className="mb-5 rounded-3xl bg-white p-4 ring-1 ring-slate-200">
            <div className="text-xs font-black uppercase tracking-wider text-slate-400">Before scan</div>
            <div className="mt-2 flex items-end gap-2"><span className="text-4xl font-black text-rose-600">42</span><span className="pb-1 text-slate-400">/100</span></div>
            <ScoreLine label="Flexibility" score={35} tone="rose" />
            <ScoreLine label="Work stress" score={40} tone="rose" />
            <ScoreLine label="Conditions" score={45} tone="amber" />
          </div>
          <div className="mb-5 rounded-3xl bg-white p-4 ring-1 ring-slate-200">
            <div className="text-xs font-black uppercase tracking-wider text-slate-400">After Fix Pack</div>
            <div className="mt-2 flex items-end gap-2"><span className="text-4xl font-black text-slate-900">78</span><span className="pb-1 text-slate-400">/100</span></div>
            <ScoreLine label="Flexibility" score={82} tone="slate" />
            <ScoreLine label="Work stress" score={75} tone="slate" />
            <ScoreLine label="Conditions" score={78} tone="slate" />
          </div>
          <div className="rounded-3xl bg-white p-4 ring-1 ring-slate-200">
            <div className="mb-3 flex items-center gap-2 font-black text-slate-900"><Database size={17} /> Audit trail</div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between"><span>v1.0 AI scan</span><span className="font-bold text-amber-700">Review</span></div>
              <div className="flex justify-between"><span>v1.1 HR review</span><span className="font-bold text-amber-700">Review</span></div>
              <div className="flex justify-between"><span>v1.3 Approved</span><span className="font-bold text-emerald-700">Approved</span></div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function RiskRow({ dim, phrase, risk, sev }: { dim: string; phrase: string; risk: string; sev: string }) {
  return (
    <tr>
      <td className="p-3 font-bold text-slate-800">{dim}</td>
      <td className="p-3 font-mono text-xs text-rose-600">“{phrase}”</td>
      <td className="p-3 text-slate-600">{risk}</td>
      <td className="p-3"><span className={`rounded-full px-2 py-1 text-[10px] font-black ${sev === "High" ? "bg-rose-100 text-rose-700" : "bg-amber-100 text-amber-700"}`}>{sev}</span></td>
    </tr>
  );
}

function FixMini({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-2 flex items-center gap-2 font-black text-slate-900"><Scale size={16} />{title}</div>
      <p className="text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function ScoreLine({ label, score, tone }: { label: string; score: number; tone: "rose" | "amber" | "slate" }) {
  const color = tone === "rose" ? "bg-rose-500" : tone === "amber" ? "bg-amber-500" : "bg-slate-800";
  return (
    <div className="mt-3">
      <div className="mb-1 flex justify-between text-xs font-bold text-slate-500"><span>{label}</span><span>{score}</span></div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-100"><div className={`h-full rounded-full ${color}`} style={{ width: `${score}%` }} /></div>
    </div>
  );
}
