export default function CTA() {
  return (
    <section className="section-y" id="cta">
      <div className="container-px mx-auto max-w-content">
        <div className="rounded-2xl text-white p-8 md:p-12" style={{ backgroundColor: '#8BCFD9' }}>
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                Ready for the next step?
              </h2>
              <p className="mt-2 text-white/90 max-w-[60ch]">
                Connect with a dedicated professional who understands your journey. Together, we&apos;ll explore your options and help you take the next step in your nursing career.
              </p>
            </div>
            <button
              className="h-11 rounded-md px-5 bg-white text-brand font-semibold hover:bg-white/90"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




