import { Share2, Terminal as TerminalIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { LexiProLogo } from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest px-12 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <LexiProLogo className="w-8 h-8" />
            <div className="text-lg font-bold text-white uppercase">LexiPro<span className="text-primary">.Online</span></div>
          </div>
          <p className="text-tertiary text-[10px] leading-relaxed uppercase tracking-tight">
            Broken Arrow Entertainment LLC.<br/>
            Sovereign Intelligence Systems Group.
          </p>
          <p className="text-tertiary text-[10px] mt-8 uppercase tracking-widest">
            Â© 2026 Broken Arrow Entertainment LLC. All Rights Reserved.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-display text-[10px] tracking-widest text-primary uppercase">Contractor Data</h4>
          <ul className="font-mono text-[10px] space-y-2 text-tertiary">
            <li className="hover:text-white transition-colors cursor-pointer">UEI: KVQGXWECZCF2</li>
            <li className="hover:text-white transition-colors cursor-pointer">CAGE: 9K6S5</li>
            <li className="hover:text-white transition-colors cursor-pointer">DUNS: 119047285</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-[10px] tracking-widest text-primary uppercase">Operational</h4>
          <ul className="font-mono text-[10px] space-y-2 text-tertiary flex flex-col">
            <Link to="/" className="hover:text-white transition-colors cursor-pointer w-fit">Operational Logs</Link>
            <Link to="/compliance" className="hover:text-white transition-colors cursor-pointer w-fit">Privacy Protocol</Link>
            <Link to="/security" className="hover:text-white transition-colors cursor-pointer w-fit">SCAM WARNING MITIGATION</Link>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-display text-[10px] tracking-widest text-primary uppercase">Connectivity</h4>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/brokenbartender/LexiPro-Showcase" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="GitHub Profile"
            >
              <Share2 className="w-4 h-4" />
            </a>
            <a 
              href="mailto:admin@lexipro.online"
              className="w-10 h-10 border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Terminal Access / Contact"
            >
              <TerminalIcon className="w-4 h-4" />
            </a>
          </div>
          <div className="font-mono text-[10px] text-tertiary">
            SECURE_CONNECTION: ESTABLISHED [V27.0-ALPHA-9]<br/>
            ENCRYPTION: AES-256-GCM
          </div>
        </div>
      </div>
    </footer>
  );
}

