import { motion } from "motion/react";
import { PhoneCall, PenTool, Code2, Rocket } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    title: "Découverte",
    description: "Nous échangeons lors d'un appel stratégique pour comprendre vos objectifs, votre cible et l'essence de votre projet.",
    icon: <PhoneCall className="w-6 h-6 text-black" />
  },
  {
    number: "02",
    title: "Stratégie & Design",
    description: "Je conçois une maquette sur-mesure (UI/UX) qui reflète votre image de marque et optimise le parcours de vos futurs clients.",
    icon: <PenTool className="w-6 h-6 text-black" />
  },
  {
    number: "03",
    title: "Développement",
    description: "Intégration pixel-perfect avec des technologies modernes. Je m'assure que le site est rapide, sécurisé et responsive.",
    icon: <Code2 className="w-6 h-6 text-black" />
  },
  {
    number: "04",
    title: "Lancement",
    description: "Après une batterie de tests, nous mettons le site en ligne. Je vous accompagne pour sa prise en main et son évolution.",
    icon: <Rocket className="w-6 h-6 text-black" />
  }
];

export function Process() {
  return (
    <motion.section 
      id="processus"
      className="py-24 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="text-center mb-16 md:mb-24">
        <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Comment ça marche ?
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Un processus clair et transparent, pensé pour vous libérer l'esprit et garantir un résultat à la hauteur de vos attentes.
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
    </motion.section>
  );
}
