const items = [
  {
    title: "Job Placement & Housing",
    desc: "Get placed in hospitals nationwide in the US in an easy-to-follow process, with professional support.",
  },
  {
    title: "Sponsorship and Visa Support",
    desc: "We provide full green card sponsorship and visa support, guiding you every step of the way.",
  },
  {
    title: "Easy Enrollment",
    desc: "Enroll in just a few steps and begin your journey toward a U.S. nursing career.",
  },
];

export default function ValueProps() {
  return (
    <section className="section-y" id="services">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">Why AG Health Pro</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>Your healthcare job search made easy!</h2>
          <p className="mt-3 text-muted">
            We&apos;ll sponsor your green card and fast-track the process, so you can build your career with confidence and stability.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.title} className="p-6 rounded-xl border border-black/5 dark:border-white/10 bg-surface flex flex-col h-full">
              <div className="h-9 w-9 rounded-md bg-brand/15 text-brand flex items-center justify-center mb-4 font-semibold">
                {index === 0 ? '💼' : index === 1 ? '📁' : '📝'}
              </div>
              <div className="font-semibold">{item.title}</div>
              <p className="text-sm text-muted mt-1 flex-grow">{item.desc}</p>
              {index === 0 && (
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 text-xs font-medium bg-white rounded-md border" style={{ color: '#007299', borderColor: '#e5e7eb' }}>Career match</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white rounded-md border" style={{ color: '#007299', borderColor: '#e5e7eb' }}>Housing support</span>
                </div>
              )}
              {index === 1 && (
                <div className="flex gap-2 mt-3 flex-wrap">
                  <span className="px-2 py-1 text-xs font-medium bg-white rounded-md border" style={{ color: '#007299', borderColor: '#e5e7eb' }}>Sponsorship</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white rounded-md border" style={{ color: '#007299', borderColor: '#e5e7eb' }}>EB-3 Visa</span>
                  <span className="px-2 py-1 text-xs font-medium bg-white rounded-md border" style={{ color: '#007299', borderColor: '#e5e7eb' }}>H-1B Visa</span>
                </div>
              )}
              {index === 2 && (
                <div className="flex gap-2 mt-3">
                  <span className="px-2 py-1 text-xs font-medium bg-white rounded-md border" style={{ color: '#007299', borderColor: '#e5e7eb' }}>Online support</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


