import {
  HeroSection,
  OurServices,
  OurTeams,
  SeoSection,
  SponsorAndBrand,
} from "Components";

import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSection />
      <SponsorAndBrand />
      <SeoSection />
      <OurServices />
      <OurTeams />
    </div>
  );
};

export default Home;
