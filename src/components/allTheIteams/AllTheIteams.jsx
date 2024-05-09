import React, { useContext } from "react";
import { SingleCard } from "../card/Card";
import { CustomSpinner } from "../loader/Spinner";
import { SearchContext } from "../provider/SearchContext";

import "./allTheIteams.css";
const Alliteams = () => {
  const { loading, searchQuery, arrayFiltered, isFilter, iteams } =
    useContext(SearchContext);

  return (
    <div>
      <div className="row justify-content-around mt-5"></div>
      {loading ? (
        <div className="spinner d-flex justify-content-center my-5">
          {CustomSpinner()}
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {(isFilter && searchQuery.length > 0 && arrayFiltered.length > 0
            ? arrayFiltered
            : iteams
          )
            .slice(0, 20)
            .map((iteam) => (
              <div className="col" key={iteam.id}>
                <SingleCard id={iteam.id} name={iteam.name} desc={iteam.desc} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Alliteams;
