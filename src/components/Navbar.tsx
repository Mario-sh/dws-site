import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
      <div className="flex items-center justify-between py-4 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/favicon.svg" alt="DylaneWebStudio Logo" className="w-8 h-8 rounded-lg shadow-[0_0_10px_rgba(250,204,21,0.2)]" />
          <span className="font-serif text-2xl font-bold text-primary tracking-tight">DylaneWebStudio</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
          <a href="/#" className="hover:text-primary transition-colors">Accueil</a>
          <a href="/#a-propos" className="hover:text-primary transition-colors">Mon approche</a>
          <a href="/#services" className="hover:text-primary transition-colors">Services</a>
          <a href="/#realisations" className="hover:text-primary transition-colors">Réalisations</a>
        </nav>
        
        <div className="hidden md:flex items-center">
          <a href="https://wa.me/2290194118320?text=Bonjour%20je%20vous%20contacte%20depuis%20votre%20site.%20J'aimerais%20en%20savoir%20plus" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex justify-center items-center px-5 py-2.5 text-sm font-medium text-black bg-primary rounded-full hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
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
          <a href="/#realisations" className="block text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg px-4 py-3 transition-colors font-medium" onClick={() => setIsOpen(false)}>Réalisations</a>
          <div className="pt-4 pb-2">
            <a href="https://wa.me/2290194118320?text=Bonjour%20je%20vous%20contacte%20depuis%20votre%20site.%20J'aimerais%20en%20savoir%20plus" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex justify-center items-center w-full px-5 py-3 text-sm font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-colors" onClick={() => setIsOpen(false)}>
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
