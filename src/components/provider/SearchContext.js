import React, { createContext, useEffect, useState } from "react";
import disorders from "../../assets/disorders.json";

// Creating a context object
const SearchContext = createContext();
const trie = [];
// Creating a provider component to wrap the application and provide context values
const SearchProvider = ({ children }) => {
  // State variables for search functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [arrayFiltered, setArrayFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [disorders, setDisorders] = useState([]);

  for (let i = 0; i < disorders.length; i++) {
    const element = disorders[i];
    console.log(element);
  }
  // Fetching data using useEffect hook when component mounts
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      for (let i = 0; i < disorders.length; i++) {
        const elements = disorders[i];
        console.log(elements);
      }
    };

    fetchData();
  }, []);

  // Providing context values to the children components
  return (
    <SearchContext.Provider
      value={{
        disorders,
        setDisorders,
        searchQuery,
        setSearchQuery,
        arrayFiltered,
        setArrayFiltered,
        isFilter,
        setIsFilter,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };
