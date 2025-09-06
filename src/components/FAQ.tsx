const faqs = [
  {
    q: "What do I need to apply?",
    a: "You'll need your personal information, contact details, work experience, and any relevant certifications. Our online application form will guide you through all the required information step by step.",
  },
  { 
    q: "Does this cost money?", 
    a: "No, our application process is completely free. We don't charge any fees for job placement, credentialing, or ongoing support. Our services are funded by the healthcare facilities we partner with." 
  },
  { 
    q: "How much will I get paid as an LPN or TSPT?", 
    a: "Compensation varies by location, experience, and facility type. LPNs typically earn $25-35/hour, while Travel Sterile Processing Technicians earn $20-30/hour. We provide competitive packages that often exceed larger agencies, plus comprehensive benefits." 
  },
  { 
    q: "Where are the jobs located?", 
    a: "We have opportunities nationwide across the United States. Our positions are available in hospitals, pediatric centers, nursing homes, and other healthcare facilities in major cities and rural areas. We'll work with you to find the best location match for your preferences." 
  },
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




