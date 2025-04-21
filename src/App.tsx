import Hero from "./components/Hero";
import Herobg from "./components/Herobg";
import About from "./components/About";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

const App = () => {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis only if it doesn't interfere with other animations
    lenis.current = new Lenis({
      duration: 0.6, // Control the duration of the scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing for smooth stop
      smooth: true,
      smoothTouch: true, // Enable smooth scrolling on touch devices
    });

    const animate = (time) => {
      lenis.current.raf(time); // This is required to keep the smooth scroll in sync
      requestAnimationFrame(animate);
    };

    // Start the animation loop
    requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      lenis.current.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      lenis.current.scrollTo(element); // Smooth scroll to the specific section
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <Herobg />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
