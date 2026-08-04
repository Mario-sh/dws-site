import { BookOpen, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

export interface Product {
  /** Utilisé dans l'URL : /shop/<slug> */
  slug: string;
  name: string;
  tagline: string;
  /** Prix affiché — à définir par toi (ex: "29 €", "15 000 FCFA") */
  price: string;
  icon: ReactNode;
  /** Paragraphes de la page de vente */
  description: string[];
  /** Liste "Ce que vous obtenez" */
  features: string[];
  /** Optionnel : "Pensé pour..." */
  targetNote?: string;
  /** Optionnel : lien de paiement (Gumroad, FedaPay, KkiaPay...). Sans lien, le bouton renvoie vers WhatsApp. */
  paymentUrl?: string;
}

// ⚠️ PRODUITS D'EXEMPLE — à remplacer par tes vrais produits (noms, prix, contenus).
export const products: Product[] = [
  {
    slug: "guide-image-qui-vend",
    name: "Guide : une image qui vend",
    tagline: "La méthode pour auditer et corriger votre présence en ligne en 7 jours.",
    price: "19 €",
    icon: <BookOpen className="w-10 h-10" />,
    description: [
      "La plupart des professionnels perdent des clients avant même le premier échange — à cause d'une présence en ligne qui ne reflète pas leur niveau. Ce guide vous montre exactement quoi corriger, dans quel ordre.",
      "Sept jours, sept chantiers concrets : votre photo, votre accroche, vos preuves, votre appel à l'action... À la fin, votre image travaille pour vous."
    ],
    features: [
      "Guide PDF complet, étape par étape",
      "Grille d'audit de votre présence en ligne",
      "Exemples avant / après commentés",
      "Checklists prêtes à l'emploi",
      "Accessible même sans site web"
    ],
    targetNote: "Pensé pour les indépendants qui veulent progresser seuls avant d'investir dans du sur-mesure.",
  },
  {
    slug: "kit-landing-page",
    name: "Kit Landing Page",
    tagline: "La structure complète d'une page qui vend, section par section.",
    price: "39 €",
    icon: <TrendingUp className="w-10 h-10" />,
    description: [
      "Une landing page qui convertit n'est pas une question d'inspiration : c'est une structure. Ce kit vous donne la mienne — celle que j'utilise pour les lancements de formations et d'offres.",
      "Chaque section est expliquée : son rôle, son texte, ses pièges. Vous suivez le plan, vous remplissez, vous lancez."
    ],
    features: [
      "Structure complète section par section",
      "Formules de titres et d'appels à l'action",
      "Exemples réels annotés",
      "Checklist de lancement",
      "Template de page prêt à adapter"
    ],
    targetNote: "Pensé pour les formateurs et créateurs qui préparent un lancement.",
  }
];
