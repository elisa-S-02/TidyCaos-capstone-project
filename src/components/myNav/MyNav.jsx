// MyNav.jsx

import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl } from "react-bootstrap";
import { SearchContext } from "../provider/SearchContext";
import { Link, useNavigate } from "react-router-dom";
import "./myNav.css";

const MyNav = (props) => {
  // Destructuring props
  const site = props.site;
  const home = props.link1;

  // Accessing context values using useContext hook
  const {
    searchQuery,
    setSearchQuery,
    setArrayFiltered,
    setIsFilter,
    disorders,
  } = useContext(SearchContext);
  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    // Resetting filter when search input changes
    setIsFilter(false);
  };

  // Function to handle search button click
  const clickForFilter = (e) => {
    e.preventDefault();
    // Filtering disorders based on search query
    if (searchQuery.trim() !== "") {
      const filteredDisorders = disorders.filter((disorder) =>
        disorder.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // Updating filtered disorders and filter state
      setArrayFiltered(filteredDisorders);
      setIsFilter(true);
    } else {
      // Resetting filtered disorders and filter state when search query is empty
      setArrayFiltered([]);
      setIsFilter(false);
    }
  };

  const navigate = useNavigate();

  return (
    <div>
      {/* Navbar component */}
      <Navbar>
        <Container>
          {/* Navbar brand */}
          <Navbar.Brand className="site" to="">
            <b>{site}</b>
          </Navbar.Brand>
          {/* Navbar links */}
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>{home}</Nav.Link>
          </Nav>
          {/* Search form */}
          <Form className="d-flex">
            <FormControl
              // Handling search input change
              onChange={handleSearchInputChange}
              // Setting search input value
              value={searchQuery}
              type="search"
              className="form-control"
              placeholder="coming soon"
              required
            />
            {/* Search button */}
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
