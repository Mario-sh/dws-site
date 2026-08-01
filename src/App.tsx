import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Logos } from "./components/Logos";
import { About } from "./components/About";
import { ForWho } from "./components/ForWho";
import { Testimonials } from "./components/Testimonials";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { FinalCTA } from "./components/FinalCTA";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Footer } from "./components/Footer";
import { LegalMentions } from "./pages/LegalMentions";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

function Home() {
  return (
    <main>
      <Hero />
      <Logos />
      <About />
      <ForWho />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-grid flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentions-legales" element={<LegalMentions />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}


