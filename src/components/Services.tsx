import { Layout, UserRound, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

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

export function Services() {
  const services = [
    {
      title: "Site vitrine premium",
      description: "Votre activité présentée pour inspirer confiance dès la première visite : positionnement, design sur-mesure et textes pensés pour convertir.",
      icon: <Layout className="w-8 h-8 text-primary mb-4" />,
    },
    {
      title: "Portfolio & site personnel",
      description: "Votre parcours, vos travaux et vos preuves rassemblés dans une vitrine qui pose votre autorité et donne envie de travailler avec vous.",
      icon: <UserRound className="w-8 h-8 text-primary mb-4" />,
    },
    {
      title: "Landing page de lancement",
      description: "Une page unique construite pour vendre — formation, offre, événement. Chaque section guide votre visiteur vers l'action.",
      icon: <TrendingUp className="w-8 h-8 text-primary mb-4" />,
    },
  ];

  return (
    <motion.section 
      id="services"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold mb-4">Ce que je crée pour vous</motion.h2>
      <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base mb-16 max-w-lg">
        Trois offres claires, un même niveau d'exigence — et toujours du sur-mesure.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
        {services.map((service, index) => (
          <motion.div variants={fadeInUp} key={index} className="bg-bg-card p-8 rounded-2xl border border-white/5 text-left flex flex-col hover:border-white/10 transition-colors">
            {service.icon}
            <h3 className="font-semibold text-xl leading-tight mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <motion.div variants={fadeInUp} className="max-w-3xl mb-12 px-2">
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">
          <span className="text-white font-semibold">Chaque projet inclut :</span>{" "}
          stratégie et positionnement · maquette sur-mesure validée par vous · développement complet · optimisation Google · mise en ligne · formation à la prise en main
        </p>
      </motion.div>

      <motion.a
        href="https://wa.me/2290194118320?text=Bonjour%20Dylane%2C%20je%20viens%20de%20voir%20votre%20site%20et%20j'aimerais%20%C3%A9changer%20sur%20mon%20image%20en%20ligne." target="_blank" rel="noopener noreferrer"
        variants={fadeInUp} 
        className="group relative overflow-hidden px-8 py-3 text-base font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.3)] flex items-center justify-center"
      >
        <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
          Parlons de votre image
        </span>
        <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
          Parlons de votre image
        </span>
      </motion.a>
    </motion.section>
  );
}
