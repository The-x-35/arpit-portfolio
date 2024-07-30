import Image from "next/image";
import StarsCanvas from "./components/StarsCanvas";
import Rocket from "./components/Rocket";

export default function Home() {
  return (
    <>
    <Rocket />
    <StarsCanvas />
    </>
  );
}
