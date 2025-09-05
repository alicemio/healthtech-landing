const quotes = [
  {
    quote:
      "Our no-shows dropped 28% in two months. Patients love the reminders and video visits.",
    name: "Dr. Patel",
    role: "Medical Director, Bayview Clinic",
  },
  {
    quote: "Setup was fast and the analytics finally give us clarity on throughput.",
    name: "Lauren Kim",
    role: "COO, CityCare Network",
  },
  {
    quote: "Secure messaging cut phone volume in half. The team moves faster.",
    name: "Marcus Nguyen",
    role: "Practice Manager, River Health",
  },
];

export default function Testimonials() {
  return (
    <section className="section-y" id="testimonials">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">Results</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>What customers say</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="p-6 rounded-xl border border-black/5 dark:border-white/10 bg-surface">
              <blockquote className="text-sm">“{q.quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-muted">
                <span className="font-medium text-foreground">{q.name}</span> — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}




