"use client";
import Image from "next/image";
import StarsCanvas from "./components/StarsCanvas";
import Rocket from "./components/Rocket";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>

    <Navbar />
    <Rocket />
    <StarsCanvas />

    </>
  );
}
