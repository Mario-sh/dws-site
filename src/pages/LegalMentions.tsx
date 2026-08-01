import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function LegalMentions() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold mb-12 text-white">
            Mentions Légales
          </motion.h1>
          
          <div className="space-y-10 text-gray-300 font-light leading-relaxed">
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
              <p className="mb-2">Le présent site web est édité par :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Nom :</strong> Dylane LOKOSSOU</li>
                <li><strong>Statut :</strong> Développeur Web Indépendant</li>
                <li><strong>Email :</strong> dylanlokossou@gmail.com</li>
                <li><strong>Téléphone :</strong> +229 01 94 11 83 20</li>
              </ul>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">2. Hébergement</h2>
              <p>Ce site est hébergé par :</p>
              <p className="mt-2">
                Google Cloud Run (via Google LLC)<br/>
                1600 Amphitheatre Parkway<br/>
                Mountain View, CA 94043, USA
              </p>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">3. Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève des législations françaises et internationales sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents iconographiques et photographiques.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'auteur.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation de responsabilité</h2>
              <p>
                DylaneWebStudio s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
