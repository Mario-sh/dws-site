import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const WA_LINK = "https://wa.me/2290194118320?text=Bonjour%20Dylane%2C%20je%20viens%20de%20voir%20votre%20site%20et%20j'aimerais%20%C3%A9changer%20sur%20mon%20image%20en%20ligne.";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const profiles = [
  {
    number: "01",
    title: "Coachs & thérapeutes",
    hook: "On vous confie une transformation. Votre image doit inspirer cette confiance-là."
  },
  {
    number: "02",
    title: "Consultants & experts",
    hook: "Vos recommandations valent cher. Votre présence en ligne doit le laisser deviner."
  },
  {
    number: "03",
    title: "Formateurs",
    hook: "On apprend de ceux qu'on admire. Votre site doit donner envie d'être votre élève."
  },
  {
    number: "04",
    title: "Conférenciers",
    hook: "Avant de vous inviter sur scène, on tape votre nom sur Google."
  },
  {
    number: "05",
    title: "Journalistes & créateurs de contenu",
    hook: "Votre nom est votre média. Il mérite sa propre vitrine."
  },
  {
    number: "06",
    title: "Indépendants & marques personnelles",
    hook: "Vous êtes l'entreprise. Votre site est votre poignée de main."
  }
];

export function ForWho() {
  return (
    <motion.section
      id="pour-qui"
      className="py-24 px-6 bg-bg-dark"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.div variants={fadeInUp} className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-4">
            Pour qui
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-[1.15] tracking-tight">
            Conçu pour ceux dont le métier<br className="hidden md:block" />{" "}
            repose sur <span className="text-primary italic font-normal">la confiance</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Si votre nom est votre marque, votre présence en ligne est votre premier argument.
          </motion.p>
        </div>

        <div className="border-t border-white/5">
          {profiles.map((profile) => (
            <motion.a
              key={profile.number}
              variants={fadeInUp}
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-6 py-7 md:py-8 border-b border-white/5 transition-all duration-300 hover:border-primary/20 hover:pl-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <div className="flex items-start gap-5 md:gap-8">
                <span className="font-serif text-lg md:text-xl font-black text-white/20 group-hover:text-primary/60 transition-colors select-none pt-1">
                  {profile.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                    {profile.title}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-400 text-sm md:text-base font-light leading-relaxed mt-2 max-w-xl transition-colors">
                    {profile.hook}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="shrink-0 w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 mt-2" />
            </motion.a>
          ))}
        </div>

        <motion.p variants={fadeInUp} className="text-center text-gray-500 text-sm md:text-base font-light mt-12">
          Vous ne vous reconnaissez pas dans la liste ? Si votre nom est votre marque,{" "}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors">
            parlons-en quand même
          </a>.
        </motion.p>
      </div>
    </motion.section>
  );
}
