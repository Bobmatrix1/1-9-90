import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Products from "./sections/Products";
import WhyChooseUs from "./sections/WhyChooseUs";
import Statistics from "./sections/Statistics";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import CallToAction from "./sections/CallToAction";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import BackToTop from "./components/BackToTop";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);
    if (document.readyState === "complete") {
      ScrollTrigger.refresh();
    }

    const timer = setTimeout(() => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    }, 250);

    const intervals = [1000, 2000, 3000].map(delay =>
      setTimeout(() => ScrollTrigger.refresh(), delay)
    );

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
      intervals.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream font-body">
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <WhyChooseUs />
        <Statistics />
        <Testimonials />
        <Faq />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
