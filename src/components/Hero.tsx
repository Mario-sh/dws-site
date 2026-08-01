import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, MonitorPlay, Star } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";
import workspacePoster from "../assets/images/workspace_website_1785572646973.jpg";

const reviews = [
  { text: `"Site exceptionnel, le travail est de la bombe atomique..."`, author: "Yoan Drahy", avatar: "https://i.pravatar.cc/150?img=11" },
  { text: `"Un travail remarquable et un professionnalisme exemplaire."`, author: "Marie Dubois", avatar: "https://i.pravatar.cc/150?img=5" },
  { text: `"Mon nouveau site a explosé mon taux de conversion !"`, author: "Thomas Leroy", avatar: "https://i.pravatar.cc/150?img=33" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        videoRef.current.muted = false;
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.section 
      className="pt-20 pb-12 px-6 max-w-5xl mx-auto text-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      <div className="font-serif text-[2.5rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 flex flex-col items-center relative z-20">
        <BlurText
          text="Vous êtes excellent."
          delay={60}
          animateBy="words"
          direction="top"
          className="justify-center"
        />
        <BlurText
          text="Votre site devrait le dire à votre place."
          delay={60}
          initialDelay={0.3}
          animateBy="words"
          direction="top"
          className="text-primary italic font-medium justify-center mt-1 sm:mt-2"
        />
      </div>
      
      <motion.p variants={fadeInUp} className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed px-2">
        Chaque jour, des gens vous découvrent en ligne et se font une opinion en quelques secondes. Mon travail : faire en sorte qu'elle soit à la hauteur de ce que vous valez vraiment.
      </motion.p>
      
      <motion.div variants={fadeInUp} className="relative flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 w-full max-w-[280px] sm:max-w-none mx-auto relative z-20">
        {/* Flèche gauche — guide l'œil vers les CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -18 }}
          animate={{ opacity: 1, scale: 1, rotate: -10 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" as const }}
          className="hidden lg:block absolute left-[calc(50%-380px)] -top-32 xl:-top-36 pointer-events-none select-none"
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 xl:w-40 xl:h-40 text-primary filter drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">
              <path d="M 40 20 C 25 60 20 100 60 115 C 95 128 110 92 92 64 C 74 36 56 70 80 100 C 100 126 135 138 160 146" fill="none" stroke="currentColor" strokeWidth="5.5" strokeDasharray="9 7" strokeLinecap="round" />
              <polygon points="155,130 178,150 148,153" fill="currentColor" />
            </svg>
          </motion.div>
        </motion.div>

        <a href="https://wa.me/2290194118320?text=Bonjour%20Dylane%2C%20je%20viens%20de%20voir%20votre%20site%20et%20j'aimerais%20%C3%A9changer%20sur%20mon%20image%20en%20ligne." target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden flex justify-center items-center w-full sm:w-auto px-6 py-3.5 text-sm md:text-base font-semibold text-white bg-[#2A2A2A] rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-black/20">
          <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
            Réserver un appel
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
            Réserver un appel
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </span>
        </a>
        <a href="#realisations" className="group relative overflow-hidden flex justify-center items-center w-full sm:w-auto px-6 py-3.5 text-sm md:text-base font-semibold text-black bg-white rounded-full hover:bg-gray-50 transition-colors shadow-lg shadow-black/10">
          <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]">
            <MonitorPlay className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            Voir mon travail
          </span>
          <span className="absolute flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0">
            <MonitorPlay className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
            Voir mon travail
          </span>
        </a>
      </motion.div>

      <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center mb-16 h-36">
        <div className="relative w-full max-w-lg h-20 mb-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out ${
                index === currentReviewIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <p className="text-gray-300 text-sm md:text-base mb-3 text-center">
                {review.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src={review.avatar}
                  alt={review.author}
                />
                <span className="text-white text-sm font-medium">{review.author}</span>
                <span className="text-gray-600 text-sm font-light">|</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="inline-flex items-center gap-3 px-4 py-2 mt-4 bg-white/5 rounded-full border border-white/10">
          <span className="text-sm font-medium text-white">Avis clients</span>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-white rounded-full">
            <Star className="w-3.5 h-3.5 fill-black text-black" />
            <span className="text-sm font-bold text-black leading-none">4.9</span>
          </div>
        </div>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Flèche droite — guide l'œil vers la vidéo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 18 }}
          animate={{ opacity: 1, scale: 1, rotate: 10 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" as const }}
          className="hidden lg:block absolute -right-14 xl:-right-20 -top-24 xl:-top-28 z-10 pointer-events-none select-none"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
            <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 xl:w-40 xl:h-40 -scale-x-100 text-primary filter drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]">
              <path d="M 40 20 C 25 60 20 100 60 115 C 95 128 110 92 92 64 C 74 36 56 70 80 100 C 100 126 135 138 160 146" fill="none" stroke="currentColor" strokeWidth="5.5" strokeDasharray="9 7" strokeLinecap="round" />
              <polygon points="155,130 178,150 148,153" fill="currentColor" />
            </svg>
          </motion.div>
        </motion.div>

      <motion.div
        variants={fadeInUp}
        className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 aspect-video bg-gray-900 cursor-pointer group"
        onClick={togglePlay}
      >
        <video 
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-50'}`}
          loop
          playsInline
          poster={workspacePoster}
        >
          <source src="https://videos.pexels.com/video-files/3163534/3163534-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
        
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="relative">
              {/* Play Button */}
              <div className="w-16 h-10 md:w-24 md:h-16 bg-primary rounded-xl md:rounded-2xl flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                <svg viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8">
                  <path d="M6 4L20 12L6 20V4Z" />
                </svg>
              </div>
              
              {/* Arrow and Text */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 md:left-[50%] md:-translate-x-0 pointer-events-none flex flex-col items-center z-10 mb-1 md:mb-2">
                <span className="font-sans text-[10px] sm:text-xs md:text-3xl font-medium text-white leading-tight drop-shadow-lg text-center whitespace-nowrap">
                  Clique ici pour<br />regarder la vidéo
                </span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4 md:hidden text-white mt-0.5 animate-bounce">
                  <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 md:w-20 md:h-20 hidden md:block md:-ml-16 mt-2 text-white drop-shadow-lg">
                  <path d="M45 5 Q 20 20 15 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="transparent"/>
                  <path d="M5 40 L 15 50 L 25 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="transparent"/>
                </svg>
              </div>
            </div>
          </div>
        )}
        
        <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none"></div>
      </motion.div>
      </div>
    </motion.section>
  );
}
