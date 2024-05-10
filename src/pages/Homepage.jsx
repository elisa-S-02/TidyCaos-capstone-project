import React from "react";
import AllDisorders from "../components/allTheDisorders/AllTheDisorders";
import MainPlan from "../layouts/MainLayout";
import "./homepage.css";

const Homepage = () => {
  return (
    <MainPlan>
      <AllDisorders />
    </MainPlan>
  );
};

export default Homepage;
