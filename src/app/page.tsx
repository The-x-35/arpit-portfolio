import Image from "next/image";
import StarsCanvas from "./components/StarsCanvas";
import Rocket from "./Rocket";

export default function Home() {
  return (
    <>
    <Rocket />
    <StarsCanvas />
    </>
  );
}
