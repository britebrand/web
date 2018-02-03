import React from 'react';

const SearchBar = () => (
    <input
        className="header-input"
        placeholder="Search..."
        onChange={(e) => console.log('type')} />
);

export default SearchBar;