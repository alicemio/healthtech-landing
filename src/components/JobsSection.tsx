import Image from "next/image";

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
        <div className="p-8 rounded-xl border border-black/5 dark:border-white/10 bg-surface hover:shadow-lg transition-shadow flex flex-col h-full">
          <div className="h-64 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="https://workforce.ahu.edu/wp-content/uploads/2022/12/woman_young_sterile_processing_technician_cleaning_medical_supplies-scaled-1-1536x1024-1.webp"
              alt="Young sterile processing technician cleaning medical supplies"
              width={400}
              height={256}
              className="object-cover w-full h-full"
            />
          </div>
            <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>Find Jobs</h3>
            <p className="text-muted mb-6 flex-grow">
              Discover healthcare opportunities that match your skills and career goals. Browse positions from top healthcare facilities.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                <span><strong>Licensed Practical Nurse</strong> positions</span>
              </div>
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                <span><strong>Travel Sterile Processing Technicians</strong></span>
              </div>
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Flexible scheduling options
              </div>
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Competitive compensation packages
              </div>
            </div>
            <button className="w-full h-11 rounded-md bg-brand text-white font-semibold hover:bg-brand/90 transition-colors">
              Browse Jobs
            </button>
          </div>

          {/* Hire Healthcare Professionals Card */}
          <div className="p-8 rounded-xl border border-black/5 dark:border-white/10 bg-surface hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="h-64 w-full rounded-lg overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Healthcare professional using laptop with stethoscope nearby"
                width={400}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'var(--font-poppins)' }}>Hire Healthcare Professionals</h3>
            <p className="text-muted mb-6 flex-grow">
              Find qualified healthcare professionals to join your team. Access a network of skilled LPNs and Sterile Processing Technicians ready to make a difference.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                <span><strong>Licensed Practical Nurses</strong></span>
              </div>
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                <span><strong>Travel Sterile Processing Technicians</strong></span>
              </div>
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Pre-screened and verified candidates
              </div>
              <div className="flex items-center text-base text-muted">
                <span className="w-2 h-2 bg-brand rounded-full mr-3"></span>
                Quick placement process
              </div>
            </div>
            <button className="w-full h-11 rounded-md bg-brand text-white font-semibold hover:bg-brand/90 transition-colors">
              Post Job
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
