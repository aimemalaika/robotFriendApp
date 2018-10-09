import React from 'react';
const SearchBox = ({searchField,searchChange}) =>{
    return (
        <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="seach robot ..." onChange={searchChange} />
    );
}

export default SearchBox;