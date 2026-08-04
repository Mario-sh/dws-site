import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

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

export function FinalCTA() {
  return (
    <motion.section
      id="contact"
      className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-white">
        La prochaine personne qui tapera votre nom —<br className="hidden md:block" />{" "}
        <span className="text-primary italic font-normal">que verra-t-elle ?</span>
      </motion.h2>

      <motion.p variants={fadeInUp} className="text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
        Un échange de quelques minutes suffit pour le savoir. Sans jargon, sans engagement.
      </motion.p>

      <motion.div variants={fadeInUp} className="flex justify-center">
        <a
          href="https://wa.me/2290194118320?text=Bonjour%20Dylane%2C%20je%20viens%20de%20voir%20votre%20site%20et%20j'aimerais%20%C3%A9changer%20sur%20mon%20image%20en%20ligne."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative overflow-hidden flex justify-center items-center px-8 py-4 text-base font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-all hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(250,204,21,0.35)]"
        >
          <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
            Parlons-en
            <ArrowUpRight className="w-5 h-5" />
          </span>
          <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
            Parlons-en
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </a>
      </motion.div>
    </motion.section>
  );
}
