import React, { useState } from "react";

const Search = ({ items, setCurrentItems }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const search = (value) => {
    setSearchTerm(value);
    // Filter resources based on search term
    const filteredResources = items.filter((resource) =>
      resource.toLowerCase().includes(value.toLowerCase())
    );
    setCurrentItems([...filteredResources]);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(event) => {
        search(event.target.value);
      }}
    />
  );
};

export default Search;
