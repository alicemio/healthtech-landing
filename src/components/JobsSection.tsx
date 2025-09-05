export default function JobsSection() {
  return (
    <section className="section-y" id="jobs">
      <div className="container-px mx-auto max-w-content">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow">Career Opportunities</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>Find your next opportunity</h2>
          <p className="mt-3 text-muted">
            Connect with healthcare professionals and find the perfect match for your career or staffing needs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {/* Find Jobs Card */}
          <div className="p-8 rounded-xl border border-black/5 dark:border-white/10 bg-surface hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-brand/15 text-brand flex items-center justify-center mb-6 font-semibold text-xl">
              🔍
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>Find Jobs</h3>
            <p className="text-muted mb-6">
              Discover healthcare opportunities that match your skills and career goals. Browse positions from top healthcare facilities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Licensed Practical Nurse positions
              </div>
              <div className="flex items-center text-sm text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Flexible scheduling options
              </div>
              <div className="flex items-center text-sm text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Competitive compensation packages
              </div>
            </div>
            <button className="mt-6 w-full h-11 rounded-md bg-brand text-white font-semibold hover:bg-brand/90 transition-colors">
              Browse Jobs
            </button>
          </div>

          {/* Hire LPNs Card */}
          <div className="p-8 rounded-xl border border-black/5 dark:border-white/10 bg-surface hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-lg bg-brand/15 text-brand flex items-center justify-center mb-6 font-semibold text-xl">
              👥
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>Hire Licensed Practical Nurses</h3>
            <p className="text-muted mb-6">
              Find qualified Licensed Practical Nurses to join your healthcare team. Access a network of skilled professionals ready to make a difference.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Pre-screened and verified candidates
              </div>
              <div className="flex items-center text-sm text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Quick placement process
              </div>
              <div className="flex items-center text-sm text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Ongoing support and management
              </div>
            </div>
            <button className="mt-6 w-full h-11 rounded-md bg-brand text-white font-semibold hover:bg-brand/90 transition-colors">
              Post Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
