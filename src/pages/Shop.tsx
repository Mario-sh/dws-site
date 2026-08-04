import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { products } from "../data/products";

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

export function Shop() {
  useEffect(() => {
    document.title = "Shop — DylaneWebStudio";
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, []);

  return (
    <main className="pt-28 md:pt-36 pb-24 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16 md:mb-20">
          <motion.div variants={fadeInUp} className="text-sm text-gray-400 font-medium tracking-wide uppercase mb-4">
            Shop
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.15] tracking-tight">
            Soignez votre image,{" "}
            <span className="text-primary italic font-normal">sans attendre le sur-mesure</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Templates, guides et kits tirés de ma pratique — les mêmes méthodes que pour mes clients, en version accessible immédiatement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {products.map((product) => (
            <motion.div key={product.slug} variants={fadeInUp}>
              <Link
                to={`/shop/${product.slug}`}
                className="group flex flex-col h-full bg-bg-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <div className="h-40 flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-transparent text-primary">
                  {product.icon}
                </div>

                <div className="p-7 flex flex-col flex-grow">
                  <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {product.tagline}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5">
                    <span className="text-white font-bold text-lg">{product.price}</span>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold">
                      Voir le produit
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p variants={fadeInUp} className="text-center text-gray-500 text-sm md:text-base font-light mt-14">
          Vous préférez du sur-mesure ?{" "}
          <Link to="/" className="text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors">
            Découvrez mes offres
          </Link>.
        </motion.p>
      </motion.div>
    </main>
  );
}
