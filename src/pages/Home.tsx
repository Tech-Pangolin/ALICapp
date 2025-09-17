import Timeline from "../components/homepage/Timeline";
import Hero from "../components/homepage/Hero";
import CelebrateSection from "../components/homepage/CelebrateSection";
import GradientBox from "../components/shared/GradientBox";
import CardsSection from "../components/homepage/CardsSection";
import { useState } from "react";
import SolutionsSection from "../components/homepage/SolutionsSection";
import FeaturedStoriesSection from "../components/shared/FeaturedStoriesSection";


const Home = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      {/* ======= Hero Section ======= */}
      <Hero />

      {/* ======= Celebrate Section ======= */}
      <CelebrateSection setExpanded={setExpanded} expanded={expanded} />

      {/* ======= Timeline Section ======= */}
      {expanded && <Timeline setExpanded={setExpanded} expanded={expanded} />}

      {/* ======= Gradient Box Section ======= */}
      <GradientBox line1Text="BUILT ON RESILIENCE," line2Text="ANCHORED BY PROGRESS."/>

      {/* ======= Cards Section ======= */}
      <CardsSection />

      {/* ======= Solutions Section ======= */}
      <SolutionsSection />

      {/* ======= Featured Stories Section ======= */}
      <FeaturedStoriesSection />

      
    </>
  );
};

export default Home;
