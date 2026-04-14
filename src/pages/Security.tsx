import { Lock } from "lucide-react";

export default function Security() {
  return (
    <section className="py-32 px-8 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <Lock className="w-16 h-16 text-primary mx-auto" />
        <h2 className="text-4xl font-bold text-white uppercase">Security Policy</h2>
        <p className="text-tertiary max-w-md mx-auto">
          Access to our full security protocols requires SL5 clearance. Please contact your administrator for the encrypted policy document.
        </p>
        <a 
          href="mailto:admin@lexipro.online?subject=SL5 Clearance Request - External Audit"
          className="border border-primary text-primary px-8 py-3 rounded-lg font-display text-xs tracking-widest uppercase hover:bg-primary/10 transition-all inline-block cursor-pointer text-center"
        >
          Request Clearance
        </a>
      </div>
    </section>
  );
}
