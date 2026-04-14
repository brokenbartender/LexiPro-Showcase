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
          href="mailto:admin@lexipro.online?subject=Early Access Request - LexiPro Online"
          className="bg-primary-container text-white px-5 py-2 font-display font-bold text-[10px] tracking-widest uppercase hover:opacity-90 transition-all rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary inline-block text-center cursor-pointer"
        >
          Get Early Access
        </a>
      </div>
    </nav>
  );
}
