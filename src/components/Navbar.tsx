import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LexiProLogo } from "./Logo";
import { Menu, X, Send, Loader2, CheckCircle2 } from "lucide-react";

const NAV_LINKS = [
  { id: "/technology",  label: "Technology" },
  { id: "/compliance",  label: "Compliance" },
  { id: "/domex",       label: "DOMEX Triage" },
  { id: "/security",    label: "Security Policy" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setModalOpen(false);
          setStatus("idle");
          setEmail("");
        }, 2500);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-8 h-20 border-b ${
          isScrolled
            ? "bg-surface/90 backdrop-blur-xl border-outline-variant/20 shadow-2xl"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link to="/" className="flex items-center space-x-3 group outline-none">
          <LexiProLogo className="w-10 h-10 group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter text-white uppercase font-sans leading-none">
              LexiPro<span className="text-primary">.Online</span>
            </span>
            <span className="text-[8px] tracking-[0.3em] text-tertiary uppercase font-display">
              Sovereign Architecture
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-display tracking-widest text-[10px] uppercase">      
          {NAV_LINKS.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={`transition-all duration-300 pb-1 border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                location.pathname === item.id
                  ? "text-primary border-primary font-bold"
                  : "text-tertiary border-transparent font-medium hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden lg:block font-mono text-[10px] text-tertiary">
            KERNEL: 4.2.0-SVRN
          </div>
          <a
            href="https://github.com/brokenbartender/LexiPro-Showcase"
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors cursor-pointer"
            aria-label="GitHub Showcase"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 4.238 9.617 9.634 10.828.576.111.782-.251.782-.554 0-.272-.011-1.171-.016-2.126-3.338.726-4.042-1.41-4.042-1.41-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .311.21.674.793.552C19.762 21.611 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-primary-container text-white px-5 py-2 font-display font-bold text-[10px] tracking-widest uppercase hover:opacity-90 transition-all rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary inline-block text-center cursor-pointer"
          >
            Get Early Access
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-tertiary hover:text-white transition-colors p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-surface/95 backdrop-blur-xl flex flex-col pt-24 px-8 pb-8">     
          <nav className="flex flex-col space-y-2 flex-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                className={`py-4 border-b border-outline-variant/20 font-display tracking-widest text-sm uppercase transition-colors ${
                  location.pathname === item.id
                    ? "text-primary font-bold"
                    : "text-tertiary hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-4 pt-8 border-t border-outline-variant/20">
            <button
              onClick={() => { setMobileOpen(false); setModalOpen(true); }}
              className="block w-full text-center bg-primary-container text-white px-5 py-3 font-display font-bold text-[10px] tracking-widest uppercase rounded-lg"
            >
              Get Early Access
            </button>
            <a
              href="https://github.com/brokenbartender/LexiPro-Showcase"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-outline-variant/40 text-tertiary px-5 py-3 font-display font-bold text-[10px] tracking-widest uppercase rounded-lg hover:text-white hover:border-primary transition-colors"     
            >
              Audit Architecture ↗
            </a>
          </div>
        </div>
      )}

      {/* Early Access Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-surface/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-md p-8 rounded-2xl border border-primary/20 relative shadow-2xl">
            <button 
              onClick={() => { setModalOpen(false); setStatus("idle"); }}
              className="absolute top-4 right-4 text-tertiary hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="font-display text-[8px] tracking-[0.3em] text-primary uppercase">Elite Admission</span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Request Early Access</h3>
                <p className="text-tertiary text-xs leading-relaxed">
                  Join the sovereign intelligence network. Request access to the air-gapped forensic runtime and Project TITAN nodes.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-8 space-y-4 animate-in fade-in zoom-in">
                  <CheckCircle2 className="w-16 h-16 text-secondary" />
                  <div className="text-center">
                    <p className="text-white font-bold uppercase tracking-widest text-sm">Access Requested</p>
                    <p className="text-tertiary text-[10px] font-mono mt-1">Check your encrypted logs soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-bold text-tertiary tracking-widest ml-1">Secure Email</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="operator@domain.online"
                      className="w-full bg-surface-container border border-outline-variant/30 rounded-lg px-4 py-3 text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-tertiary/40"
                    />
                  </div>
                  <button 
                    disabled={status === "loading"}
                    className="w-full bg-primary-container text-white py-3 rounded-lg font-display font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center space-x-2 hover:opacity-90 disabled:opacity-50 transition-all cursor-pointer"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Submit Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-[10px] text-center font-mono">Transmission failed. Retry substrate link.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}