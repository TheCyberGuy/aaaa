import React from "react";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Newsletter from "./components/Newsletter";

import dpm from "./assets/dpm.png";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      {/* <Newsletter /> */}
      <div className="w-full py-[10rem] px-4 bg-[#edede9]">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
          <Cards title="aaa" desc="aaaa" img={dpm} />
          <Cards title="aaa" desc="aaaa" img={dpm} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
