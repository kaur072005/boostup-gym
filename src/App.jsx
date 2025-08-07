import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import WhyChooseUs from "./components/WhyChooseUs";
import TrainersSection from "./components/TrainersSection";
import Testimonials from "./components/Testimonials";
import PricingSection from "./components/PricingSection"
import Footer from "./components/Footer";
import GetInTouch from "./components/GetInTouch";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <WhyChooseUs/>
      <TrainersSection />
      <Testimonials />
      <PricingSection />
      <GetInTouch />
      <Footer />
      
    </>
  );
}

export default App;
