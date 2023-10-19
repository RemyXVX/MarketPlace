'use client'
import React, { useState } from 'react';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
