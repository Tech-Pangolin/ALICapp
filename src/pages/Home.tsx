import Hero from "../components/homepage/Hero";
import CelebrateSection from "../components/homepage/CelebrateSection";
import GradientBox from "../components/homepage/GradientBox";
import CardsSection from "../components/homepage/CardsSection";
import SolutionsSection from "../components/homepage/SolutionsSection";
import FeaturedStoriesSection from "../components/homepage/FeaturedStoriesSection";

const Home = () => {
  return (
    <>
      {/* ======= Hero Section ======= */}
      <Hero />

      {/* ======= Celebrate Section ======= */}
      <CelebrateSection />

      {/* ======= Gradient Box Section ======= */}
      <GradientBox />

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
