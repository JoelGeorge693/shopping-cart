import React from 'react';


const SearchBar = ({handleChange})=>(
    <nav>
		<form>
			<input onChange={handleChange} placeholder='search groceries' type="text" name="filterIt" />
		</form>
	</nav>
);

export default SearchBar;