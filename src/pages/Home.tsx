import Hero from "../components/Home/Hero";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import TechStack from "../components/Home/TechStack";
import Journey from "../components/About/Journey";
import FunFacts from "../components/About/Facts";

export default function Home() {
  return (
    <>
      <Hero/>   
      <Journey/>
      <TechStack/>
      <FeaturedProjects/>
      <FunFacts/>
    </>
);
} 