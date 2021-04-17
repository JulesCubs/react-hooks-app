import React, { Component } from "react";

const Search = ({ search, searchInput, handleSearch }) => {
	return (
		<div className='Search'>
			<input type='text' value={search} ref={searchInput} onChange={handleSearch}></input>
		</div>
	);
};

export default Search;
