const faqs = [
  {
    q: "Is AG Health Pro HIPAA compliant?",
    a: "We build with privacy and security controls aligned to HIPAA. BAA available on request.",
  },
  { q: "Can we migrate from our current system?", a: "Yes, we offer assisted onboarding and data import services." },
  { q: "Do you support e-prescriptions?", a: "Yes, secure eRx is included on Growth and above." },
];

export default function FAQ() {
  return (
    <section className="section-y" id="faq">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">FAQ</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>Common questions</h2>
        </div>
        <div className="mt-8 grid gap-4 max-w-3xl mx-auto">
          {faqs.map((f) => (
            <details key={f.q} className="group border border-black/5 dark:border-white/10 rounded-lg p-4 bg-surface">
              <summary className="cursor-pointer font-medium marker:hidden flex items-center justify-between" style={{ fontFamily: 'var(--font-poppins)' }}>
                {f.q}
                <span className="text-muted group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}




