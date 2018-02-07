import React from 'react';

const SearchBar = (props) => (
    <input
        className="header-input"
        placeholder="Search..."
        onChange={(e) => props.onChange(e.target.value)} />
);

export default SearchBar;