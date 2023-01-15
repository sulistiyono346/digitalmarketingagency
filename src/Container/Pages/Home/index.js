import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  HeroSection,
  OurServices,
  OurTeams,
  SeoSection,
  SponsorAndBrand,
} from "Components";
import { actionGetUser } from "Redux/Actions/Home";

const Home = () => {
  const dispatch = useDispatch();
  const { users } = useSelector(
    ({ home }) => ({
      users: home.users,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actionGetUser());
  }, [dispatch]);

  return (
    <div className="home-container">
      <HeroSection />
      <SponsorAndBrand />
      <SeoSection />
      <OurServices />
      <OurTeams users={users} />
    </div>
  );
};

export default Home;
