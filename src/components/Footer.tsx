import { Link } from "react-router-dom";
import { Instagram, Linkedin, Twitter, Facebook, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export function Footer() {
  return (
    <footer className="w-full bg-bg-dark pt-20 pb-8 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <a href="/#" className="flex flex-col mb-6 group leading-none w-fit">
              <span className="font-signature text-4xl font-bold text-primary tracking-wide transition-colors group-hover:text-amber-300">
                Dylane
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mt-1">
                Web Studio
              </span>
            </a>
            <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-8 font-light">
              Je conçois la présence en ligne des coachs, consultants et experts indépendants — pour qu'on perçoive leur valeur dès la première visite.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-medium mb-6 text-lg">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/#" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group">Accueil <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/#a-propos" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group">Mon approche <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
              <li><Link to="/realisations" className="text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group">Réalisations <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" /></Link></li>
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-white font-medium mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:dylanlokossou@gmail.com" className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  dylanlokossou@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/2290194118320?text=Bonjour%20Dylane%2C%20je%20viens%20de%20voir%20votre%20site%20et%20j'aimerais%20%C3%A9changer%20sur%20mon%20image%20en%20ligne." target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden mt-4 flex justify-center items-center px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto">
                  <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
                    Réserver un appel
                  </span>
                  <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
                    Réserver un appel
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-gray-500 text-sm gap-4"
        >
          <p>© {new Date().getFullYear()} DylaneWebStudio. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
