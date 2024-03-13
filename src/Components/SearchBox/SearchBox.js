import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className="search__block">
            <input
                className="search__input"
                type='search'
                placeholder='Search Robots'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;