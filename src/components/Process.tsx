import { motion } from "motion/react";
import { PhoneCall, PenTool, Code2, Rocket } from "lucide-react";

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

const steps = [
  {
    number: "01",
    title: "On parle de vous",
    description: "Un appel pour comprendre votre métier, vos clients et l'image que vous voulez projeter. Sans jargon, sans engagement.",
    icon: <PhoneCall className="w-6 h-6 text-black" />
  },
  {
    number: "02",
    title: "Je dessine votre image",
    description: "Une maquette sur-mesure, alignée sur votre positionnement. Vous validez chaque direction avant la moindre ligne de code.",
    icon: <PenTool className="w-6 h-6 text-black" />
  },
  {
    number: "03",
    title: "Je construis",
    description: "Un site rapide, soigné, impeccable sur tous les écrans. Vous suivez l'avancement sans avoir à vous en occuper.",
    icon: <Code2 className="w-6 h-6 text-black" />
  },
  {
    number: "04",
    title: "Vous êtes en ligne",
    description: "Après une série de tests, votre nouvelle image est publiée. Je vous montre comment la prendre en main, et je reste là pour la suite.",
    icon: <Rocket className="w-6 h-6 text-black" />
  }
];

export function Process() {
  return (
    <motion.section 
      id="processus"
      className="py-24 px-6 bg-bg-dark scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Quatre étapes. Aucune complexité.
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Votre seule mission : parler de votre métier. Je m'occupe du reste.
        </motion.p>
      </div>

      <div className="relative">
        {/* Ligne de connexion (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/10 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div variants={fadeInUp} key={index} className="flex flex-col items-center text-center relative group">
              
              {/* Cercle avec Icône */}
              <div className="w-24 h-24 rounded-full bg-bg-dark border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:border-primary/50 transition-colors duration-500 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
                  {step.icon}
                </div>
                {/* Numéro flottant */}
                <div className="absolute -top-2 -right-2 font-serif text-3xl font-black text-white/20 select-none">
                  {step.number}
                </div>
              </div>

              {/* Contenu */}
              <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-2">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </motion.section>
  );
}
