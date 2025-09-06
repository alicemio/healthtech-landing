const steps = [
  {
    step: "01",
    title: "Apply Online",
    desc: "Begin with our simple online application form—fast, user-friendly, and designed to get you started quickly.",
  },
  { 
    step: "02", 
    title: "Get Matched & Credentialed", 
    desc: "We help place you in hospitals, pediatric centers, and nursing homes, while also handling documentation and verifying your credentials." 
  },
  { 
    step: "03", 
    title: "Enjoy Great Benefits", 
    desc: "Receive competitive pay and benefits that rival larger agencies, with the added advantage of our personalized service." 
  },
  { 
    step: "04", 
    title: "Receive Ongoing Support", 
    desc: "Throughout your employment, you'll have access to one-on-one consultation and continuous guidance whenever you need it." 
  },
];

export default function HowItWorks() {
  return (
    <section className="section-y" id="how">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">How it works</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>Your path to healthcare success</h2>
          <p className="mt-3 text-muted">From application to ongoing support, we're with you every step of the way.</p>
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




