import { motion } from "motion/react";
import maPhoto from "../assets/images/maphoto.jpeg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

export function About() {
  return (
    <motion.section 
      className="py-20 px-6 max-w-7xl mx-auto" id="a-propos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center bg-bg-card rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="lg:w-1/3 relative z-10">
          <motion.div variants={fadeInUp} className="mb-8 rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-2xl border border-white/10 relative group">
            {/* Remplacez ce src par le chemin de la photo que vous uploadez via l'explorateur de fichiers */}
            <img 
              src={maPhoto} 
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallback) {
                  target.dataset.fallback = 'true';
                  target.src = '/maphoto.jpeg';
                }
              }}
              alt="Dylane - Web Designer" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-60"></div>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Mon approche
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 font-medium text-lg">
            Transformer votre expertise en une expérience digitale mémorable.
          </motion.p>
        </div>
        
        <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12 relative z-10">
          <motion.svg variants={fadeInUp} className="w-10 h-10 text-primary/40 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </motion.svg>
          <motion.p variants={fadeInUp} className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic">
            J'accompagne les professionnels, comme les coachs, consultants, créateurs de contenu, auteurs ou autres experts, dans la création d'une présence en ligne qui reflète leur valeur. Je conçois des sites web modernes, rapides et élégants qui racontent leur histoire, mettent en avant leur expertise et donnent confiance dès les premières secondes. L'idée est que lorsqu'une personne visite leur site, elle comprenne immédiatement qui ils sont, ce qu'ils font et pourquoi ils méritent son attention.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
