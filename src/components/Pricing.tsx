const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/mo",
    features: ["Up to 3 providers", "Scheduling", "Telehealth", "Messaging"],
    cta: "Start free",
  },
  {
    name: "Growth",
    price: "$199",
    period: "/mo",
    features: ["Unlimited providers", "E-prescriptions", "Analytics", "Priority support"],
    cta: "Book a demo",
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section className="section-y" id="pricing">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">Pricing</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent plans</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`p-6 rounded-xl border border-black/5 dark:border-white/10 bg-surface ${p.highlight ? "ring-2 ring-brand" : ""}`}
            >
              <div className="flex items-baseline justify-between">
                <div className="font-semibold">{p.name}</div>
                <div className="text-2xl font-semibold">
                  {p.price}
                  <span className="text-sm text-muted">{p.period}</span>
                </div>
              </div>
              <ul className="mt-4 grid gap-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-brand/15 text-brand flex items-center justify-center text-[10px]">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#cta" className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold ${p.highlight ? "bg-brand text-white hover:bg-brand-600" : "border border-black/10 dark:border-white/15 hover:bg-surface"}`}>
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




