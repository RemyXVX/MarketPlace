'use client'
import React, { useState } from 'react';
import Navigation from './Navigation/page';
import SearchBar from './SearchBar/page';

function Header() {
  const handleSearch = (searchTerm) => {
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <Navigation />
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default Header;
