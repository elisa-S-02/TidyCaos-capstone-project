import React from "react";
import AllBooks from "../components/allTheBooks/AllTheBooks";
import Mainlayout from "../layouts/Mainlayout";

const Homepage = () => {
  return (
    <Mainlayout>
      <AllBooks />
    </Mainlayout>
  );
};

export default Homepage;
