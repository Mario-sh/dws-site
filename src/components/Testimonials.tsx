import { motion } from "motion/react";
import { Star } from "lucide-react";

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

const testimonials = [
  {
    quote: "Site exceptionnel, le travail est de la bombe atomique. Dylane a su capter exactement l'univers que je voulais pour ma marque.",
    author: "Yoan Drahy",
    role: "Entrepreneur e-commerce",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "Un travail remarquable et un professionnalisme exemplaire. Je savais où on en était à chaque étape, sans jamais avoir à gérer la technique.",
    author: "Marie Dubois",
    role: "Consultante indépendante",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "Mon nouveau site a explosé mon taux de conversion ! Mes prospects arrivent au premier appel déjà convaincus.",
    author: "Thomas Leroy",
    role: "Coach business",
    avatar: "https://i.pravatar.cc/150?img=33"
  }
];

export function Testimonials() {
  return (
    <motion.section
      id="temoignages"
      className="py-24 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="text-center mb-16">
        <motion.div variants={fadeInUp} className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-4">
          Témoignages
        </motion.div>
        <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-[1.15] tracking-tight">
          Ils ont changé d'image.{" "}
          <span className="text-primary italic font-normal">Voici ce que ça change.</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Des mots de clients, pas des arguments de vente.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <motion.figure
            key={testimonial.author}
            variants={fadeInUp}
            className="group relative bg-bg-card border border-white/5 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="font-serif text-6xl leading-[0.5] text-primary/25 select-none pointer-events-none mb-5" aria-hidden="true">
              "
            </div>

            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-gray-300 text-sm md:text-base leading-relaxed font-light flex-grow">
              {testimonial.quote}
            </blockquote>

            <figcaption className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                loading="lazy"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all"
              />
              <div>
                <div className="font-signature text-2xl text-white leading-none">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm mt-1.5">{testimonial.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div variants={fadeInUp} className="flex justify-center mt-12">
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <span className="text-sm font-medium text-white">Note moyenne</span>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full">
            <Star className="w-3.5 h-3.5 fill-black text-black" />
            <span className="text-sm font-bold text-black leading-none">4.9</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
