import React, { createContext, useState } from "react";
import disorders from "../../assets/disorders.json";

// Creating a context object
const SearchContext = createContext();
const internalArray = [];
internalArray.concat(disorders);

const SearchProvider = ({ children }) => {
  // State variables for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [disorder, setDisorder] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredDisorders = disorder.filter((disorder) => {
    // Filtrare in base al nome o altri criteri di ricerca
    return disorders.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  const ogdDisorder = () => {
    internalArray.map(() => console.log(internalArray));
  };
  // Providing context values to the children components
  return (
    <SearchContext.Provider
      value={{
        disorder,
        filteredDisorders,
        searchQuery,
        handleSearchChange,
        ogdDisorder,
        // arrayFiltered,
        // setArrayFiltered,
        // isFilter,
        // setIsFilter,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };

// useContext
