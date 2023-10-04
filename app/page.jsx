"use client";
import { useState } from "react";
import Barbers from "./components/layout-components/Barbers";
import Services from "./components/layout-components/Services";
import Navbar from "./components/layout-components/Navbar";
import Payments from "./components/layout-components/Payments";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };





  return (
    <>
      <section>
        <div>
          <Navbar />
        </div>
        <div className="flex">
          <Services toggleVisibility={toggleVisibility} />
          <Barbers isVisible={isVisible}/>
          <Payments />
        </div>
      </section>
    </>
  );
}
