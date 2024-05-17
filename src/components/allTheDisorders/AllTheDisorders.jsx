// import React, { useContext } from "react";
import { SingleCard } from "../card/Card";
// import { SearchContext } from "../provider/SearchContext";
import disorders from "../../assets/disorders.json";

import "./allTheDisorders.css";
const AllDisorders = () => {
  // const { searchQuery, arrayFiltered, isFilter, disorders } =
  //   useContext(SearchContext);
  for (let i = 0; i < disorders.length; i++) {
    const disorder = disorders[i];
    console.log(disorder.id, disorder.name, disorder.desc);
  }

  return (
    <div>
      <div className="row justify-content-around mt-5"></div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {"ciao"}
        {/* {(isFilter && searchQuery.length > 0 && arrayFiltered.length > 0
          ? arrayFiltered
          : disorders
        ) */}

        <div className="col" key={disorder.id}>
          <SingleCard name={disorder.name} desc={disorder.desc} />
        </div>
      </div>
    </div>
  );
};

export default AllDisorders;
