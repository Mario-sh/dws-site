import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { products } from "../data/products";
import { NotFound } from "./NotFound";

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
      staggerChildren: 0.12
    }
  }
};

export function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — DylaneWebStudio`;
      return () => {
        document.title = DEFAULT_TITLE;
      };
    }
  }, [product]);

  if (!product) {
    return <NotFound />;
  }

  const buyUrl =
    product.paymentUrl ??
    `https://wa.me/2290194118320?text=${encodeURIComponent(`Bonjour Dylane, je souhaite acheter "${product.name}".`)}`;

  return (
    <main className="pt-28 md:pt-36 pb-24 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <motion.div variants={fadeInUp}>
          <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" />
            Retour au shop
          </Link>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contenu (gauche) */}
          <div className="flex-1">
            <motion.div variants={fadeInUp} className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 text-primary mb-8">
              {product.icon}
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-4">
              {product.name}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-primary text-lg md:text-xl font-medium mb-8">
              {product.tagline}
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-5 mb-10">
              {product.description.map((paragraph, idx) => (
                <p key={idx} className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-10">
              <h2 className="text-xl font-bold text-white mb-5">Ce que vous obtenez</h2>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300 font-light">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {product.targetNote && (
              <motion.p variants={fadeInUp} className="text-gray-500 text-sm md:text-base font-light italic border-l-2 border-primary/40 pl-4">
                {product.targetNote}
              </motion.p>
            )}
          </div>

          {/* Carte d'achat (droite, sticky) */}
          <motion.div variants={fadeInUp} className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-28 bg-bg-card border border-white/10 rounded-2xl p-7 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <div className="text-3xl font-bold text-white mb-1">{product.price}</div>
              <div className="text-gray-500 text-sm mb-6">Produit digital · Livraison immédiate</div>

              <a
                href={buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex justify-center items-center w-full px-6 py-3.5 text-base font-semibold text-black bg-primary rounded-full hover:bg-primary-hover transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
              >
                <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
                  Obtenir maintenant
                  <ArrowUpRight className="w-5 h-5" />
                </span>
                <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                  Obtenir maintenant
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>

              <p className="text-gray-500 text-xs text-center mt-5 leading-relaxed">
                Une question avant d'acheter ?{" "}
                <a
                  href={`https://wa.me/2290194118320?text=${encodeURIComponent(`Bonjour Dylane, j'ai une question sur "${product.name}".`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-hover underline underline-offset-2"
                >
                  Écrivez-moi
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
