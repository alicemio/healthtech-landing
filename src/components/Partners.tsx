const partners = ["MediCore", "Clinixa", "WellGrid", "PharmaLink", "CareOps", "VitalsIQ"];

export default function Partners() {
  return (
    <section className="section-y" id="about">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center text-muted text-sm">Trusted by forward-looking providers</div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {partners.map((name) => (
            <div
              key={name}
              className="h-12 rounded-md border border-black/5 dark:border-white/10 bg-surface text-muted flex items-center justify-center text-sm"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


