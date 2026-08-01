import { motion } from "motion/react";
import { Star } from "lucide-react";
import cecileAvatar from "../assets/images/temoignage-cecile-goudou.jpg";

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

// ⚠️ Citation rédigée à partir du projet réel — à faire valider par la cliente avant mise en ligne.
const testimonials = [
  {
    quote: "Dylane a rassemblé quinze ans de carrière, d'engagements et de distinctions en une vitrine qui me ressemble. Sobre, élégante, professionnelle — exactement l'image que je voulais donner. Aujourd'hui, je n'ai plus qu'un lien à partager.",
    author: "Cécile Goudou",
    role: "Journaliste · France Médias Monde",
    avatar: cecileAvatar
  }
];

const gridClass =
  testimonials.length >= 3
    ? "grid grid-cols-1 md:grid-cols-3 gap-6"
    : testimonials.length === 2
      ? "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      : "grid grid-cols-1 max-w-3xl mx-auto";

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

      <div className={gridClass}>
        {testimonials.map((testimonial) => (
          <motion.figure
            key={testimonial.author}
            variants={fadeInUp}
            className="group relative bg-bg-card border border-white/5 rounded-2xl p-8 md:p-12 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
          >
            <div className="font-serif text-6xl leading-[0.5] text-primary/25 select-none pointer-events-none mb-6" aria-hidden="true">
              "
            </div>

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-gray-200 text-base md:text-lg lg:text-xl leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              {testimonial.quote}
            </blockquote>

            <figcaption className="flex flex-col items-center gap-4 pt-8 border-t border-white/5">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                loading="lazy"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover object-top ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all"
              />
              <div>
                <div className="font-signature text-3xl text-white leading-none">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm mt-2">{testimonial.role}</div>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}
