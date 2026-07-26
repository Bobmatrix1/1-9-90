import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import AudioSection from "./sections/AudioSection";
import VideoSection from "./sections/VideoSection";
import DoubleXSection from "./sections/DoubleXSection";
import TetraXSection from "./sections/TetraXSection";
import EarningsCalculator from "./sections/EarningsCalculator";
import ImageGallery from "./sections/ImageGallery";
import WhyChooseUs from "./sections/WhyChooseUs";
import Faq from "./sections/Faq";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import ActivationModal from "./components/ActivationModal";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappUrl = "https://wa.me/2347068886985?text=hi%20please%20i'm%20interested%20,would%20like%20to%20know%20more";

  const handleActivate = () => {
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 font-sans selection:bg-[#F7931A] selection:text-black">
      <Navbar onOpenActivate={handleActivate} />
      
      <main>
        <Hero onOpenActivate={handleActivate} />
        <AudioSection />
        <VideoSection />
        <DoubleXSection onOpenActivate={handleActivate} />
        <TetraXSection onOpenActivate={handleActivate} />
        <EarningsCalculator onOpenActivate={handleActivate} />
        <ImageGallery />
        <WhyChooseUs onOpenActivate={handleActivate} />
        <Faq onOpenActivate={handleActivate} />
        <CallToAction onOpenActivate={handleActivate} />
      </main>

      <Footer onOpenActivate={handleActivate} />

      <ActivationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <BackToTop />
    </div>
  );
}
