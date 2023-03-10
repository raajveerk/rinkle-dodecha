import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Images } from "./components/Images";

const App = () => {
  return (
    <>
    <div className="sticky top-0 z-10">
      <Navbar />
    </div>
    <Hero />
    <Images />
    <div className="sticky bottom-0 z-10 mt-[200px]">
      <Footer />
    </div>
    </>
  );
}

export default App;
