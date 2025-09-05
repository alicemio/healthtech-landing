const steps = [
  {
    step: "01",
    title: "Intake",
    desc: "Patients self-onboard and complete forms digitally with e-signature.",
  },
  { step: "02", title: "Schedule", desc: "Smart scheduling with reminders and waitlists." },
  { step: "03", title: "Visit", desc: "In-person or telehealth with charting and e-prescriptions." },
  { step: "04", title: "Follow-up", desc: "Automated care plans, surveys, and messaging." },
];

export default function HowItWorks() {
  return (
    <section className="section-y" id="how">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">How it works</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>Streamlined care delivery</h2>
          <p className="mt-3 text-muted">A simple workflow from intake to outcomes.</p>
        </div>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.step} className="p-6 rounded-xl border border-black/5 dark:border-white/10 bg-surface">
              <div className="text-brand font-semibold">{s.step}</div>
              <div className="mt-1 font-semibold" style={{ fontFamily: 'var(--font-poppins)' }}>{s.title}</div>
              <p className="mt-1 text-sm text-muted">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}




