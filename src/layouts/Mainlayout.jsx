import React from "react";
import MyNav from "../components/myNav/MyNav";
import MyFoot from "../components/myFoot/MyFoot";
import "bootstrap";
import "./mainLayout.css";
const MainPlan = ({ children }) => {
  console.log(children);
  return (
    <div>
      <MyNav
        site={"Tidy Caos"}
        link1={"Home"}
        link2={"About"}
        link3={"Browse"}
      />
      <div className="container">{children}</div>
      <MyFoot />
    </div>
  );
};

export default MainPlan;
