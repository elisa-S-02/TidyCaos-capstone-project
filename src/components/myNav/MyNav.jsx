// MyNav.jsx
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Form, FormControl, Button } from "react-bootstrap";
import { SearchContext } from "../provider/SearchContext";
import { Link } from "react-router-dom";
import disorders from "../../assets/disorders.json";

const MyNav = (props) => {
  // Destructuring props
  const site = props.site;
  const home = props.link1;
  const about = props.link2;
  const browse = props.link3;

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

  return (
    <div>
      {/* Navbar component */}
      <Navbar>
        <Container>
          {/* Navbar brand */}
          <Navbar.Brand href="#home">{site}</Navbar.Brand>
          {/* Navbar links */}
          <Nav className="me-auto">
            <Link to="/">{home}</Link>
            <Nav.Link href="#">{about}</Nav.Link>
            <Nav.Link href="#">{browse}</Nav.Link>
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
              placeholder="Search disorder..."
              required
            />
            {/* Search button */}
            <Button
              // Handling click for search
              onClick={clickForFilter}
              type="button"
              variant="outline-success"
            >
              Search
            </Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
