"use client";
import Image from "next/image";
import StarsCanvas from "./components/StarsCanvas";
import Rocket from "./components/Rocket";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import First from "./components/First";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <StarsCanvas />
        </div>
        <Navbar />
        <Rocket />
        <First />
        <About />
        <Work />
        <Contact />
      </div>
    </>
  );
}
