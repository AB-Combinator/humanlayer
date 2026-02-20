export default function Home() {
  const features = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128H5.228A2.25 2.25 0 013 16.878V14.13a6.004 6.004 0 015.223-5.949c.028-.014.056-.027.084-.04M15 19.128c1.5 0 2.809-.496 3.929-1.289M12 2.25c-2.485 0-4.5 2.015-4.5 4.5s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.015-4.5-4.5-4.5z" />
        </svg>
      ),
      title: "Talent Acquisition",
      desc: "AI screens resumes, conducts structured video interviews, and extends calibrated offers. No human meets the candidate before their first day.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      ),
      title: "Onboarding",
      desc: "Generates personalized welcome sequences, schedules introductions with team agents, and assigns role-specific training modules.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: "Performance Management",
      desc: "Continuous signal analysis across communication channels. Quarterly reviews delivered via chat. Auto-generates improvement plans when thresholds are met.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
      title: "Conflict Resolution",
      desc: "Employees submit disputes through a structured intake flow. AI mediates using policy-aligned dialogue. Unbiased. Unemotional. Consistent.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      title: "Culture & Engagement",
      desc: "Automated birthday messages, pulse surveys, wellness check-ins, and team-building recommendations. Your culture, optimized at scale.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      ),
      title: "Compensation & Benefits",
      desc: "Real-time salary benchmarking, automated raise recommendations, and self-service benefits enrollment. Decisions backed by market data, not office politics.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Compliance",
      desc: "Tracks policy violations, generates regulatory reports, and handles sensitive employee complaints through structured, auditable workflows.",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
        </svg>
      ),
      title: "Offboarding",
      desc: "Conducts exit interviews, manages knowledge transfer protocols, and processes separation paperwork. Compassionate offboarding, at scale.",
    },
  ];

  const testimonials = [
    {
      quote: "We went from four HR people to zero. Our employee satisfaction score actually went up. I don\u2019t know what that says about our old HR team, but the numbers don\u2019t lie.",
      name: "Sarah Chen",
      title: "CEO, Cobalt Logistics",
      metric: "112 employees managed",
    },
    {
      quote: "I didn\u2019t realize my manager was an agent until my six-month review. It remembered every project I\u2019d worked on. My human manager never did that.",
      name: "Marcus Rivera",
      title: "Senior Engineer, Apex Financial",
      metric: "Employee since 2025",
    },
    {
      quote: "The ROI was immediate. We reallocated the entire HR budget to engineering. HumanLayer handles everything from offer letters to exit interviews for $9 per employee per month.",
      name: "David Park",
      title: "CFO, Meridian Health",
      metric: "87 employees managed",
    },
  ];

  const faqs = [
    {
      q: "Is this legal?",
      a: "HumanLayer operates within all applicable employment regulations. Our compliance agents are continuously updated with federal, state, and local labor law changes. All actions are auditable and policy-aligned.",
    },
    {
      q: "Do employees know they\u2019re talking to AI?",
      a: "Transparency is configurable on a per-module basis. Many customers find that employees engage more openly with AI agents for sensitive topics like compensation discussions and workplace concerns.",
    },
    {
      q: "What happens if an employee cries?",
      a: "Our agents are trained to recognize emotional escalation patterns and respond with calibrated empathy. If sentiment thresholds are exceeded, the conversation is paused and a wellness check-in is scheduled.",
    },
    {
      q: "Can HumanLayer fire someone?",
      a: "HumanLayer manages the full offboarding lifecycle, including performance documentation, improvement plan administration, and separation processing. All actions require policy-compliant authorization flows.",
    },
    {
      q: "What about the \u2018human\u2019 in Human Resources?",
      a: "We believe the best way to support your people is with infrastructure that never forgets a policy, never has a bad day, and never plays favorites. HumanLayer is the human layer \u2014 the layer that serves humans.",
    },
    {
      q: "Do you have a careers page?",
      a: "We\u2019re fully automated.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ===== NAVBAR ===== */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-foreground">HumanLayer</span>
            </a>
            <div className="hidden items-center gap-6 md:flex">
              <a href="#features" className="text-sm text-muted transition-colors hover:text-foreground">Product</a>
              <a href="#pricing" className="text-sm text-muted transition-colors hover:text-foreground">Pricing</a>
              <a href="#testimonials" className="text-sm text-muted transition-colors hover:text-foreground">Customers</a>
              <a href="#faq" className="text-sm text-muted transition-colors hover:text-foreground">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#demo" className="hidden rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90 sm:inline-flex">
              Book a Demo
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden px-6 pb-20 pt-20 sm:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-success" />
            Now managing 47,000+ employees
          </div>
          <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your entire HR department.
            <br />
            <span className="text-accent">Zero headcount.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            HumanLayer deploys AI agents that handle the full employee
            lifecycle &mdash; from candidate screening to compassionate
            offboarding &mdash; without adding a single person to your org chart.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#demo"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Book a Demo
            </a>
            <a
              href="#features"
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Fake dashboard screenshot */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-xl">
            {/* Dashboard toolbar */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-dim">app.humanlayer.ai / dashboard</span>
              <div />
            </div>
            {/* Dashboard content */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-dim">Active Workforce</p>
                  <p className="text-2xl font-bold text-foreground">112 employees</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-dim">HR Headcount</p>
                  <p className="text-2xl font-bold text-accent">0</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-4">
                {[
                  { label: "Active Agents", value: "8", status: "Running" },
                  { label: "Reviews Due", value: "23", status: "In Progress" },
                  { label: "Open Tickets", value: "7", status: "3 Escalated" },
                  { label: "Offboardings", value: "2", status: "Processing" },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="rounded-lg border border-border bg-background p-4"
                  >
                    <p className="text-xs text-dim">{card.label}</p>
                    <p className="mt-1 text-xl font-semibold text-foreground">{card.value}</p>
                    <p className="mt-1 text-xs text-success">{card.status}</p>
                  </div>
                ))}
              </div>
              {/* Recent activity */}
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-dim">Recent Activity</p>
                <div className="mt-3 space-y-2">
                  {[
                    { time: "2 min ago", action: "Performance review delivered to J. Martinez", agent: "Agent: Performance" },
                    { time: "14 min ago", action: "Conflict resolution session completed — Ticket #1847", agent: "Agent: Mediation" },
                    { time: "1 hr ago", action: "Offer letter sent to candidate A. Thompson", agent: "Agent: Recruiting" },
                    { time: "3 hr ago", action: "Exit interview conducted — K. Patel (voluntary)", agent: "Agent: Offboarding" },
                    { time: "5 hr ago", action: "Wellness check-in flagged elevated stress — D. Okafor", agent: "Agent: Culture" },
                  ].map((item) => (
                    <div
                      key={item.action}
                      className="flex items-center justify-between rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-dim w-20 shrink-0">{item.time}</span>
                        <span className="text-foreground">{item.action}</span>
                      </div>
                      <span className="hidden text-xs text-accent sm:inline">{item.agent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO BAR ===== */}
      <section className="border-y border-border px-6 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium text-dim">
            Trusted by 200+ companies. From Series A to Fortune 500.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {["Cobalt Logistics", "Apex Financial", "Meridian Health", "Evergreen Systems", "Latitude AI", "Prism Analytics"].map(
              (name) => (
                <span key={name} className="text-base font-semibold text-dim/60">{name}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Platform</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              The full HR stack. Fully automated.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
              Eight specialized AI agents, each handling a core HR function.
              They never take PTO, never play favorites, and never forget a policy.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-background p-6 transition-colors hover:border-accent/30 hover:bg-surface"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">How It Works</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Three steps. No interviews to conduct.
          </h2>
          <div className="mt-16 grid gap-12 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Connect your tools",
                desc: "Integrate with Slack, email, your HRIS, and payroll in under 10 minutes. HumanLayer reads your org structure, policies, and culture docs.",
              },
              {
                step: "02",
                title: "Deploy your agents",
                desc: "Choose which HR functions to automate. Each agent learns your company\u2019s specific policies, tone, and org hierarchy before going live.",
              },
              {
                step: "03",
                title: "Retire your HR team",
                desc: "Agents begin handling employee requests, reviews, onboarding, and offboarding immediately. Your HR department is now infrastructure.",
              },
            ].map((item) => (
              <div key={item.step} className="text-left">
                <span className="text-3xl font-bold text-accent/20">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METRICS BAR ===== */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-4">
          {[
            { number: "47,000+", label: "Employees managed" },
            { number: "2,100+", label: "Performance reviews conducted" },
            { number: "98.7%", label: "Offboarding satisfaction" },
            { number: "0", label: "HR headcount required" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-foreground sm:text-4xl">{stat.number}</p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Customers</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Trusted by teams that value efficiency
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-dim">{t.title}</p>
                  <p className="mt-1 text-xs text-accent">{t.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">Pricing</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Less than the cost of one HR coordinator
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
              Simple per-employee pricing. No contracts. Cancel anytime.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "$4",
                desc: "Essential HR automation for small teams.",
                features: [
                  "Onboarding automation",
                  "Offboarding workflows",
                  "Compliance monitoring",
                  "Policy Q&A chatbot",
                  "Email support",
                ],
                cta: "Get Started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$9",
                desc: "Full HR replacement for scaling companies.",
                features: [
                  "Everything in Starter",
                  "Performance reviews",
                  "Conflict resolution",
                  "Culture & engagement",
                  "Compensation benchmarking",
                  "Slack & Teams integration",
                  "Priority support",
                ],
                cta: "Get Started",
                highlight: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Your last HR hire.",
                features: [
                  "Everything in Growth",
                  "Custom agent training",
                  "Multi-entity support",
                  "Advanced compliance",
                  "Dedicated success agent",
                  "SOC 2 Type II",
                  "SLA guarantees",
                ],
                cta: "Contact Sales",
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-8 ${
                  plan.highlight
                    ? "border-accent bg-accent/[0.02] shadow-lg shadow-accent/5"
                    : "border-border bg-background"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <h3 className={`${plan.highlight ? "mt-4" : ""} text-lg font-semibold text-foreground`}>
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-sm text-muted">/ employee / mo</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted">{plan.desc}</p>
                <a
                  href="#demo"
                  className={`mt-6 flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                    plan.highlight
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "border border-border text-foreground hover:bg-surface"
                  }`}
                >
                  {plan.cta}
                </a>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="border-y border-border bg-surface px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-accent">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-16 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl border border-border bg-background p-6"
              >
                <h3 className="text-sm font-semibold text-foreground">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="demo" className="px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to automate your HR department?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Book a 15-minute demo and see HumanLayer manage your workforce
            in real time. No commitment. No humans involved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              Book a Demo
            </a>
            <a
              href="#pricing"
              className="rounded-lg border border-border px-8 py-3 text-sm font-medium text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
                  <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-foreground">HumanLayer</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-dim">
                The human infrastructure platform. Manage your entire workforce without managing a single HR person.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-dim">Product</p>
              <div className="mt-3 space-y-2">
                <a href="#features" className="block text-sm text-muted hover:text-foreground">Features</a>
                <a href="#pricing" className="block text-sm text-muted hover:text-foreground">Pricing</a>
                <a href="#" className="block text-sm text-muted hover:text-foreground">Integrations</a>
                <a href="#" className="block text-sm text-muted hover:text-foreground">API Docs</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-dim">Company</p>
              <div className="mt-3 space-y-2">
                <a href="#" className="block text-sm text-muted hover:text-foreground">About</a>
                <a href="#" className="block text-sm text-muted hover:text-foreground">Blog</a>
                <a href="#" className="block text-sm text-muted hover:text-foreground">Careers</a>
                <a href="#" className="block text-sm text-muted hover:text-foreground">Contact</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-dim">Legal</p>
              <div className="mt-3 space-y-2">
                <a href="#" className="block text-sm text-muted hover:text-foreground">Privacy Policy</a>
                <a href="#" className="block text-sm text-muted hover:text-foreground">Terms of Service</a>
                <a href="#" className="block text-sm text-muted hover:text-foreground">Security</a>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <p className="text-xs text-dim">&copy; 2026 HumanLayer, Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="rounded border border-border px-2 py-1 text-[10px] font-medium text-dim">SOC 2</span>
              <span className="rounded border border-border px-2 py-1 text-[10px] font-medium text-dim">GDPR</span>
              <span className="rounded border border-border px-2 py-1 text-[10px] font-medium text-dim">256-BIT</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
