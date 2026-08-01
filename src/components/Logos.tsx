import { Star } from "lucide-react";

export function Logos() {
  const logos = (
    <>
      <div className="text-2xl md:text-3xl font-signature font-semibold tracking-wide whitespace-nowrap">Cécile Goudou</div>
      <Star className="w-5 h-5 opacity-40 shrink-0" fill="currentColor" />
      <div className="text-2xl md:text-3xl font-signature font-medium tracking-wide whitespace-nowrap">Mario Lokossou</div>
      <Star className="w-5 h-5 opacity-40 shrink-0" fill="currentColor" />
      <div className="text-2xl md:text-3xl font-signature font-semibold tracking-wide whitespace-nowrap">Sarah Jenkins</div>
      <Star className="w-5 h-5 opacity-40 shrink-0" fill="currentColor" />
      <div className="text-2xl md:text-3xl font-signature font-medium tracking-wide whitespace-nowrap">Amadou Diallo</div>
      <Star className="w-5 h-5 opacity-40 shrink-0" fill="currentColor" />
      <div className="text-2xl md:text-3xl font-signature font-semibold tracking-wide whitespace-nowrap">François Dubois</div>
      <Star className="w-5 h-5 opacity-40 shrink-0" fill="currentColor" />
      <div className="text-2xl md:text-3xl font-signature font-medium tracking-wide whitespace-nowrap">Michael Sterling</div>
      <Star className="w-5 h-5 opacity-40 shrink-0" fill="currentColor" />
      <div className="text-2xl md:text-3xl font-signature font-semibold tracking-wide whitespace-nowrap">Aminata Tall</div>
      <Star className="w-5 h-5 opacity-40 shrink-0" fill="currentColor" />
    </>
  );

  return (
    <section className="pt-8 pb-16 overflow-hidden px-4">
      <div className="text-center mb-8 text-sm text-gray-400 font-medium tracking-wide uppercase">
        Ils m'ont confié leur image
      </div>
      
      <div className="w-full max-w-6xl mx-auto bg-primary py-4 md:py-5 flex overflow-hidden rounded-2xl md:rounded-full shadow-[0_0_40px_rgba(250,204,21,0.15)] relative">
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee w-max text-bg-dark items-center">
          {/* First Half */}
          <div className="flex items-center gap-6 md:gap-10 pr-6 md:pr-10">
            {logos}
            {logos}
          </div>
          {/* Second Half (Identical) */}
          <div className="flex items-center gap-6 md:gap-10 pr-6 md:pr-10">
            {logos}
            {logos}
          </div>
        </div>
      </div>
    </section>
  );
}

