import { useState, useRef } from "react";
import { ChevronUp, ChevronDown, ChevronRight, Layout, MonitorPlay, Sparkles, ChevronLeft, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    id: 1,
    title: "ARC144",
    tags: [
      { icon: <Layout className="w-3.5 h-3.5" />, label: "Onepage" },
      { icon: <MonitorPlay className="w-3.5 h-3.5" />, label: "Infoproduit" },
      { icon: <Sparkles className="w-3.5 h-3.5" />, label: "Animé" }
    ],
    description: "ARC144 vendait une formation e-commerce premium — avec une image qui ne le disait pas. J'ai construit un univers visuel à part, loin des codes du marché, pour que le positionnement haut de gamme se ressente avant même la page de vente.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Nova Dashboard",
    tags: [
      { icon: <Layout className="w-3.5 h-3.5" />, label: "Dashboard" },
      { icon: <MonitorPlay className="w-3.5 h-3.5" />, label: "SaaS" },
    ],
    description: "Nova aide des équipes à piloter des données financières complexes. J'ai repensé l'interface pour que la clarté du produit se voie dès le premier écran — et inspire confiance avant même la démo.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const project = projects[currentIndex];

  return (
    <motion.section 
      className="py-24 px-6 w-full relative overflow-hidden" id="realisations"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-20">
        <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold mb-6">Ils avaient l'expertise. Il leur manquait l'image.</motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Découvrez comment ces professionnels ont repris le contrôle de leur première impression.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
        {/* Image (Left) */}
        <motion.div variants={fadeInUp} className="w-full lg:w-[55%] xl:w-[60%]">
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={nextProject}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-bg-card aspect-[16/10] group cursor-none"
          >
            {/* Custom Cursor */}
            <motion.div 
              className="absolute z-50 flex items-center justify-center w-20 h-20 rounded-full bg-primary text-black font-semibold uppercase tracking-wider text-xs pointer-events-none shadow-lg"
              animate={{ 
                x: cursorPos.x - 40, 
                y: cursorPos.y - 40,
                scale: isHovering ? 1 : 0,
                opacity: isHovering ? 0.9 : 0
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            >
              Suivant
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.img 
                key={project.id}
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                initial={{ opacity: 0, x: 100, scale: 1.1 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
              />
            </AnimatePresence>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex lg:hidden justify-center gap-4 mt-8 mb-4">
            <button 
              onClick={prevProject}
              className="p-3.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all shadow-sm bg-bg-card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextProject}
              className="p-3.5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all shadow-sm bg-bg-card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Desktop Carousel Navigation (Center) */}
        <motion.div variants={fadeInUp} className="hidden lg:flex flex-col justify-center gap-4 shrink-0">
          <button 
            onClick={prevProject}
            className="p-4 rounded-full border border-white/10 text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all shadow-sm bg-black/20 backdrop-blur-sm"
            aria-label="Projet précédent"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
          <button 
            onClick={nextProject}
            className="p-4 rounded-full border border-white/10 text-gray-500 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all shadow-sm bg-black/20 backdrop-blur-sm"
            aria-label="Projet suivant"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Content (Right) */}
        <motion.div variants={fadeInUp} className="w-full lg:w-[40%] xl:w-[35%] flex flex-col">
          {/* Text & Details */}
          <AnimatePresence mode="wait">
            <motion.div 
              className="flex-1 flex flex-col justify-center" 
              key={project.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Logo & Title */}
              <div className="flex items-center gap-5 mb-8">
                <h3 className="text-4xl md:text-5xl font-bold font-sans tracking-tight text-white">{project.title}</h3>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-transparent text-gray-300 text-sm font-medium border border-white/10 hover:border-primary/50 transition-colors">
                    {tag.icon}
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-10 text-lg md:text-xl font-light">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <button className="group relative overflow-hidden flex justify-center items-center px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 rounded-full transition-all text-sm font-medium text-white">
                  <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
                    Voir la transformation <ChevronRight className="w-4 h-4 text-gray-400" />
                  </span>
                  <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                    Voir la transformation <ChevronRight className="w-4 h-4 text-white" />
                  </span>
                </button>
                <button className="group relative overflow-hidden flex justify-center items-center px-6 py-3 bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 rounded-full transition-all text-sm font-medium text-white">
                  <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
                    Visiter le site <ChevronRight className="w-4 h-4 text-gray-400" />
                  </span>
                  <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                    Visiter le site <ChevronRight className="w-4 h-4 text-white" />
                  </span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
    </motion.section>
  );
}
