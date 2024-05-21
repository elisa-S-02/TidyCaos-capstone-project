import React from "react";
import AllDisorders from "../components/allTheDisorders/AllTheDisorders";
import MainPlan from "../layouts/MainLayout";
import "./homepage.css";
import MyCarousel from "../components/carosello/MyCarousel";

const Homepage = () => {
  return (
    <MainPlan>
      <MyCarousel />
      <AllDisorders />
    </MainPlan>
  );
};

export default Homepage;
