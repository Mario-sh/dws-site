import { motion } from "motion/react";
import dylanePhoto from "../assets/images/dylane_mon_approche.jpeg";
import { CheckCircle2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

export function About() {
  return (
    <motion.section 
      className="py-14 md:py-18 px-4 md:px-6 max-w-5xl mx-auto" 
      id="a-propos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="bg-bg-card/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/10 shadow-xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 relative z-10">
          
          {/* Photo Column - Compact & Refined */}
          <motion.div variants={fadeInUp} className="shrink-0 relative group">
            <div className="w-44 h-56 sm:w-48 sm:h-60 rounded-xl overflow-hidden border border-white/15 shadow-lg relative bg-bg-dark">
              <img 
                src={dylanePhoto} 
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = '/dylane_mon_approche.jpeg';
                  }
                }}
                alt="Dylane - Web Designer" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/75 via-transparent to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Content Column - Airy & Legible */}
          <div className="flex-1 text-left">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-3">
              <span>Mon Approche</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white leading-snug">
              Les gens ne choisissent pas toujours le meilleur professionnel. Ils choisissent celui qui leur inspire le plus confiance.
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-gray-300 text-sm md:text-base leading-relaxed mb-5 font-normal">
              Votre site web joue un rôle essentiel dans cette première impression. Je conçois des expériences web qui mettent en valeur votre expertise, rassurent vos visiteurs et vous aident à laisser une empreinte durable.
            </motion.p>
            
            {/* Mini Pillars */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Design Sur-Mesure</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Expérience Fluide</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Haute Conversion</span>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </motion.section>
  );
}
