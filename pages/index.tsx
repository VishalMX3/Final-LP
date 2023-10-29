import HeroJ from "@/components/HeroJ";
import AboutWorkshop from "@/components/AboutWorkshop";
import Mentor from "@/components/Mentor";
import Head from "next/head";
import CoursestructureJ from "@/components/CoursestructureJ";
import PriceDisplaySection from "@/components/PriceDisplaySection";
import DropDown from "@/components/DropDown";

export default function Home() {
  return (
    <main className="w-full bg-black flex flex-col items-center">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroJ />
      <CoursestructureJ />
      <AboutWorkshop />
      <Mentor />
      <PriceDisplaySection />
      <DropDown />
    </main>
  );
}
