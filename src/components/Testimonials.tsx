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
      className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20"
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
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-8 md:p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
          >
            {/* Reflets liquid glass */}
            <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_35%,transparent_65%)] pointer-events-none"></div>
            <div aria-hidden="true" className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none"></div>
            <div aria-hidden="true" className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent -left-1/2 group-hover:left-[130%] transition-[left] duration-1000 ease-in-out"></div>
            </div>

            <div className="relative z-10">
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
            </div>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}
