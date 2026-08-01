import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
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
      className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative" 
      id="a-propos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Decorative large quote mark in background */}
      <div className="absolute -top-10 left-0 md:left-10 text-[150px] md:text-[250px] text-white/[0.03] font-serif pointer-events-none select-none leading-none">
        "
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-20 relative z-10">
        
        {/* Text Side - More Airy */}
        <div className="flex-1 text-left order-2 md:order-1 relative z-10">
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-[1.15] tracking-tight">
            On ne choisit pas toujours le <span className="text-primary italic font-normal">meilleur professionnel.</span><br />
            On choisit celui qui inspire le plus confiance.
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed font-light max-w-2xl">
            Votre site est souvent ce tout premier contact. Je le conçois pour qu'il dise, sans un mot, ce que vos clients mettent des mois à découvrir : qu'on peut compter sur vous.
          </motion.p>
        </div>

        {/* Photo Side - More Editorial */}
        <motion.div variants={fadeInUp} className="shrink-0 relative group order-1 md:order-2">
          {/* Decorative elements around image */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full"></div>
          
          <div className="w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-[400px] lg:w-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl relative bg-bg-dark border border-white/5">
            <img 
              src="/dylane.jpeg" 
              alt="Dylane - Web Designer" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 filter grayscale-[30%] brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-700 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-bg-dark/10 to-transparent pointer-events-none"></div>
          </div>
          
          {/* Small floating badge */}
          <div className="absolute -bottom-5 -left-5 md:-left-8 bg-white text-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm shadow-xl flex items-center gap-2 md:gap-3 transform -rotate-3 transition-transform duration-500 group-hover:rotate-0">
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-primary"></span>
            </span>
            Fondateur & Designer
          </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
}
