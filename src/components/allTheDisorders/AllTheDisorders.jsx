// import React, { useContext } from "react";
import SingleCard from "../card/Card";
// import { SearchContext } from "../provider/SearchContext";
import data from "../../assets/disorders.json";

import "./allTheDisorders.css";
const AllDisorders = () => {
  // const { searchQuery, arrayFiltered, isFilter, disorders } =
  //   useContext(SearchContext);

  // console.log(disorder);

  {
    /* {(isFilter && searchQuery.length > 0 && arrayFiltered.length > 0
    ? arrayFiltered
    : disorders
  ) */
  }

  return (
    <div>
      {/* <div className="row justify-content-around mt-5"></div> */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {data.map((disorder) => (
          <div className="col" key={disorder.id}>
            <SingleCard title={disorder.name} desc={disorder.desc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDisorders;
