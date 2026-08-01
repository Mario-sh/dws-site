import { useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { FinalCTA } from "../components/FinalCTA";

const DEFAULT_TITLE = "DylaneWebStudio - Création de sites web professionnels par Dylane LOKOSSOU";

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

export function Realisations() {
  useEffect(() => {
    document.title = "Réalisations — DylaneWebStudio";
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <main className="pt-28 md:pt-36 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16 md:mb-20">
          <motion.div variants={fadeInUp} className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-4">
            Réalisations
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.15] tracking-tight">
            Des expertises <span className="text-primary italic font-normal">mises en lumière</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Chaque projet part du même point : un professionnel excellent, une image qui ne le montrait pas encore.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              className="group bg-bg-card border border-white/5 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-gray-300 text-xs font-medium border border-white/10">
                      {tag.icon}
                      {tag.label}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light flex-grow">
                  {project.description}
                </p>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-primary hover:text-primary-hover text-sm font-semibold mt-6 w-fit"
                  >
                    Visiter le site
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <FinalCTA />
    </main>
  );
}
