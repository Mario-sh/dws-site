import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function PrivacyPolicy() {
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
            Politique de Confidentialité
          </motion.h1>
          
          <div className="space-y-10 text-gray-300 font-light leading-relaxed">
            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">1. Collecte des données personnelles</h2>
              <p>
                Nous collectons les données que vous nous communiquez directement, par exemple lorsque vous nous contactez (notamment via WhatsApp ou par email). Les données collectées peuvent inclure votre nom, numéro de téléphone, adresse e-mail, ainsi que les informations relatives à votre projet.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">2. Utilisation des données</h2>
              <p className="mb-2">Les informations que nous recueillons sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Répondre à vos demandes de renseignements et devis</li>
                <li>Gérer la relation client et le suivi de vos projets</li>
                <li>Améliorer nos services et notre site web</li>
              </ul>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">3. Protection des données</h2>
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Seul l'éditeur du site a accès aux informations identifiables.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
              <p>
                Notre site est conçu pour respecter votre vie privée. Nous n'utilisons que les cookies strictement nécessaires au fonctionnement technique du site. Aucun cookie de ciblage publicitaire intrusif n'est utilisé sans votre consentement préalable.
              </p>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-white mb-4">5. Vos droits</h2>
              <p>
                Conformément à la réglementation applicable (notamment le RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Vous pouvez exercer ce droit en nous contactant à : <a href="mailto:dylanlokossou@gmail.com" className="text-primary hover:underline">dylanlokossou@gmail.com</a>.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
