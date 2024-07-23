import Image from "next/image";
import StarsCanvas from "./components/StarsCanvas";
import Cursor from "./Cursor";

export default function Home() {
  return (
    <>
    <Cursor />
    <StarsCanvas />
    </>
  );
}
