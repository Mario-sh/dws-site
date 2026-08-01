import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const DEFAULT_TITLE = "DylaneWebStudio - Création de sites web professionnels par Dylane LOKOSSOU";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export function NotFound() {
  useEffect(() => {
    document.title = "Page introuvable — DylaneWebStudio";
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="text-center max-w-xl"
      >
        <motion.div variants={fadeInUp} className="font-signature text-8xl md:text-9xl font-bold text-primary leading-none mb-6 select-none">
          404
        </motion.div>

        <motion.h1 variants={fadeInUp} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.15] tracking-tight">
          Cette page n'existe pas.
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10">
          Le lien est peut-être cassé, ou la page a été déplacée. Rien de grave — votre première impression ne se joue pas ici.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="group relative overflow-hidden flex justify-center items-center w-full sm:w-auto px-8 py-3.5 text-sm md:text-base font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.3)]">
            <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
              Retour à l'accueil
            </span>
            <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
              Retour à l'accueil
            </span>
          </Link>
          <Link to="/realisations" className="group relative overflow-hidden flex justify-center items-center w-full sm:w-auto px-8 py-3.5 text-sm md:text-base font-medium text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 rounded-full transition-all">
            <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
              Voir les réalisations
              <ArrowUpRight className="w-4 h-4" />
            </span>
            <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
              Voir les réalisations
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
