import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LexiProLogo } from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: '/technology', label: 'Technology' },
    { id: '/compliance', label: 'Compliance' },
    { id: '/domex', label: 'DOMEX Triage' },
    { id: '/security', label: 'Security Policy' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 flex justify-between items-center px-8 h-20 border-b ${ isScrolled ? 'bg-surface/90 backdrop-blur-xl border-outline-variant/20 shadow-2xl' : 'bg-transparent border-transparent' } `}>
      <Link to="/" className="flex items-center space-x-3 group outline-none">
        <LexiProLogo className="w-10 h-10 group-hover:scale-110 transition-transform" />
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-white uppercase font-sans leading-none">
            LexiPro<span className="text-primary">.Online</span>
          </span>
          <span className="text-[8px] tracking-[0.3em] text-tertiary uppercase font-display">Sovereign Architecture</span>
        </div>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8 font-display tracking-widest text-[10px] uppercase">
        {navLinks.map((item) => (
          <Link 
            key={item.id}
            to={item.id}
            className={`transition-all duration-300 pb-1 border-b-2 outline-none focus-visible:ring-2 focus-visible:ring-primary ${ location.pathname === item.id ? 'text-primary border-primary font-bold' : 'text-tertiary border-transparent font-medium hover:text-primary' } `}
          >
            {item.label}
          </Link>
        ))}
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden lg:block font-mono text-[10px] text-tertiary">KERNEL: 4.2.0-SVRN</div>
        <a 
          href="https://github.com/brokenbartender/LexiPro-Showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="text-tertiary hover:text-primary transition-colors cursor-pointer"
          aria-label="GitHub Showcase"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 4.238 9.617 9.634 10.828.576.111.782-.251.782-.554 0-.272-.011-1.171-.016-2.126-3.338.726-4.042-1.41-4.042-1.41-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .311.21.674.793.552C19.762 21.611 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a 
          href="mailto:admin@lexipro.online?subject=Early Access Request - LexiPro Online"
          className="bg-primary-container text-white px-5 py-2 font-display font-bold text-[10px] tracking-widest uppercase hover:opacity-90 transition-all rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary inline-block text-center cursor-pointer"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
