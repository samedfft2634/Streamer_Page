import React from "react";
import Header from "./components/Header";
import Vaves from "./components/Vaves";
import Platforms from "./components/Platform";
import WhyUs from "./components/WhyUs";
import Secret from "./components/Secret";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <Vaves />
      <Platforms />
      <WhyUs />
      <Secret />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
