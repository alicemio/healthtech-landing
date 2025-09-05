import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-y bg-[#0173994D]">
      <div className="container-px mx-auto max-w-content">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="space-y-5">
            <div className="eyebrow">For modern clinics</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              Start Your Career Path in the U.S
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-[58ch]">
              Connecting healthcare professionals with exceptional opportunities in the US.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#cta"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#017399] text-white font-semibold hover:bg-[#017399]/90"
              >
                Get started
              </a>
            </div>
            <div className="flex items-center gap-6 pt-4 text-xs text-muted">
              <span>HIPAA-ready</span>
              <span>Encryption at rest + in transit</span>
              <span>99.9% uptime</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-lg bg-surface border border-black/5 dark:border-white/10 overflow-hidden w-full max-w-[420px] sm:max-w-[480px] md:max-w-[540px] justify-self-center md:justify-self-end">
            <Image
              src="/hero.png"
              alt="Product preview"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 540px, (min-width: 640px) 480px, 420px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


