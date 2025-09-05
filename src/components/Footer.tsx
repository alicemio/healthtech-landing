import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-[#0173994D]">
      <div className="container-px mx-auto max-w-content section-y">
        <div className="grid gap-8 md:grid-cols-4 text-sm">
          <div className="space-y-3">
            <div className="text-base font-semibold">AG Health Pro</div>
            <p className="text-muted max-w-[36ch]">
              Digital health platform for clinics and patients.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="font-medium">Product</div>
            <Link href="#product" className="text-muted hover:text-foreground">Overview</Link>
            <Link href="#how" className="text-muted hover:text-foreground">How it works</Link>
            <Link href="#pricing" className="text-muted hover:text-foreground">Pricing</Link>
          </div>
          <div className="grid gap-2">
            <div className="font-medium">Company</div>
            <Link href="#" className="text-muted hover:text-foreground">About</Link>
            <Link href="#" className="text-muted hover:text-foreground">Careers</Link>
            <Link href="#" className="text-muted hover:text-foreground">Contact</Link>
          </div>
          <div className="grid gap-2">
            <div className="font-medium">Legal</div>
            <Link href="#" className="text-muted hover:text-foreground">Privacy</Link>
            <Link href="#" className="text-muted hover:text-foreground">Terms</Link>
            <Link href="#" className="text-muted hover:text-foreground">Security</Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted">
          <p>© {new Date().getFullYear()} AG Health Pro. All rights reserved.</p>
          <p>HIPAA-ready. SOC2-aware. Accessibility-first.</p>
        </div>
      </div>
    </footer>
  );
}




