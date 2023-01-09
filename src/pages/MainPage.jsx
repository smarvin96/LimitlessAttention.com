import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import Faqs from "../components/Faqs";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import { useEffect } from "react";

const MainPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <Contact />
      <Faqs />
    </>
  );
};

export default MainPage;
