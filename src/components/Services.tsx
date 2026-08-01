import { Layout, Smartphone, Search } from "lucide-react";
import { motion } from "motion/react";

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

export function Services() {
  const services = [
    {
      title: "Site Vitrine Sur-Mesure",
      description: "Un site web unique qui reflète votre identité de marque et présente vos services de manière professionnelle et engageante.",
      icon: <Layout className="w-8 h-8 text-primary mb-4" />,
    },
    {
      title: "Design Responsive",
      description: "Votre site s'adaptera parfaitement à tous les écrans (ordinateurs, tablettes, smartphones) pour une expérience utilisateur optimale.",
      icon: <Smartphone className="w-8 h-8 text-primary mb-4" />,
    },
    {
      title: "Optimisation SEO",
      description: "Je structure votre site pour les moteurs de recherche afin de maximiser votre visibilité organique et attirer plus de trafic qualifié.",
      icon: <Search className="w-8 h-8 text-primary mb-4" />,
    },
  ];

  return (
    <motion.section 
      id="services"
      className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl font-bold mb-4">Mes Domaines d'Expertise</motion.h2>
      <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base mb-16 max-w-lg">
        Je vous accompagne de A à Z dans la création de votre présence en ligne, avec des solutions adaptées à vos besoins.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
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
      
      <motion.a 
        href="https://wa.me/2290194118320?text=Bonjour%20je%20vous%20contacte%20depuis%20votre%20site.%20J'aimerais%20en%20savoir%20plus" target="_blank" rel="noopener noreferrer"
        variants={fadeInUp} 
        className="group relative overflow-hidden px-8 py-3 text-base font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(250,204,21,0.3)] flex items-center justify-center"
      >
        <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
          Discutons de votre projet
        </span>
        <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
          Discutons de votre projet
        </span>
      </motion.a>
    </motion.section>
  );
}
