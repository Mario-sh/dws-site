import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 max-w-7xl mx-auto">
        <a href="/#" className="flex flex-col group leading-none">
          <span className="font-signature text-2xl md:text-3xl font-bold text-primary tracking-wide transition-colors group-hover:text-amber-300">
            Dylane
          </span>
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-gray-300 transition-colors group-hover:text-amber-200 mt-0.5">
            Web Studio
          </span>
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="/#" className="hover:text-primary transition-colors">Accueil</a>
          <a href="/#a-propos" className="hover:text-primary transition-colors">Mon approche</a>
          <a href="/#services" className="hover:text-primary transition-colors">Services</a>
          <a href="/#processus" className="hover:text-primary transition-colors">Processus</a>
          <Link to="/realisations" className="hover:text-primary transition-colors">Réalisations</Link>
        </nav>
        
        <div className="hidden md:flex items-center">
          <a href="https://wa.me/2290194118320?text=Bonjour%20Dylane%2C%20je%20viens%20de%20voir%20votre%20site%20et%20j'aimerais%20%C3%A9changer%20sur%20mon%20image%20en%20ligne." target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex justify-center items-center px-5 py-2.5 text-sm font-medium text-black bg-primary rounded-full hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
            <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
              Me contacter
            </span>
            <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
              Me contacter
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-card border-b border-white/10 shadow-2xl py-4 px-6 flex flex-col space-y-2 animate-in slide-in-from-top-2 duration-200">
          <a href="/#" className="block text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg px-4 py-3 transition-colors font-medium" onClick={() => setIsOpen(false)}>Accueil</a>
          <a href="/#a-propos" className="block text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg px-4 py-3 transition-colors font-medium" onClick={() => setIsOpen(false)}>Mon approche</a>
          <a href="/#services" className="block text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg px-4 py-3 transition-colors font-medium" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/#processus" className="block text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg px-4 py-3 transition-colors font-medium" onClick={() => setIsOpen(false)}>Processus</a>
          <Link to="/realisations" className="block text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg px-4 py-3 transition-colors font-medium" onClick={() => setIsOpen(false)}>Réalisations</Link>
          <div className="pt-4 pb-2">
            <a href="https://wa.me/2290194118320?text=Bonjour%20Dylane%2C%20je%20viens%20de%20voir%20votre%20site%20et%20j'aimerais%20%C3%A9changer%20sur%20mon%20image%20en%20ligne." target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex justify-center items-center w-full px-5 py-3 text-sm font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-colors" onClick={() => setIsOpen(false)}>
              <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
                Me contacter
              </span>
              <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                Me contacter
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
