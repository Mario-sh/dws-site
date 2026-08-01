import { Layout, MonitorPlay, Sparkles, Newspaper, Globe } from "lucide-react";
import type { ReactNode } from "react";
import cecileImage from "../assets/images/projet-cecile-goudou.jpg";
import xpressImage from "../assets/images/projet-ecomm-xpress.jpg";

export interface Project {
  id: number;
  title: string;
  tags: { icon: ReactNode; label: string }[];
  description: string;
  image: string;
  /** Affiché dans le carrousel "à la une" de la page d'accueil */
  featured: boolean;
  /** URL du site en ligne — le bouton "Visiter le site" n'apparaît que si renseignée */
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Cécile Goudou",
    tags: [
      { icon: <Layout className="w-3.5 h-3.5" />, label: "Portfolio" },
      { icon: <Newspaper className="w-3.5 h-3.5" />, label: "Journaliste" },
      { icon: <Globe className="w-3.5 h-3.5" />, label: "Bilingue FR / EN" }
    ],
    description: "Journaliste spécialisée en environnement, présidente du REJI et quatre fois primée, Cécile avait un parcours remarquable — dispersé entre les ondes et les rédactions. Son portfolio rassemble désormais quinze ans de carrière, d'engagements et de distinctions dans une vitrine bilingue à la hauteur de sa voix.",
    image: cecileImage,
    featured: true,
    liveUrl: "https://mvp-portfolio-cecile-goudou.netlify.app/"
  },
  {
    id: 2,
    title: "E-comm Xpress",
    tags: [
      { icon: <Layout className="w-3.5 h-3.5" />, label: "Landing page" },
      { icon: <MonitorPlay className="w-3.5 h-3.5" />, label: "Infoproduit" },
      { icon: <Sparkles className="w-3.5 h-3.5" />, label: "Animé" }
    ],
    description: "Une formation e-commerce qui promet de lancer vite et de scaler fort. Sa landing page devait incarner cette énergie : univers sombre premium, chiffres à l'appui, et un parcours qui guide chaque visiteur de la promesse à l'inscription.",
    image: xpressImage,
    featured: true,
    liveUrl: "https://xpress-ecom-landing-page.vercel.app/"
  }
];
