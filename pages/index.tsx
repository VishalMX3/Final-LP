import HeroJ from "@/components/HeroJ";
import AboutWorkshop from "@/components/AboutWorkshop";
import Mentor from "@/components/Mentor";
import Head from "next/head";
import CoursestructureJ from "@/components/CoursestructureJ";
import BestTimeToJoinJ from "@/components/BestTimeToJoinJ";

export default function Home() {
  return (
    <main className="w-full ">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroJ />
      <CoursestructureJ />
      <AboutWorkshop />
      <Mentor />
      <BestTimeToJoinJ />
    </main>
  );
}
