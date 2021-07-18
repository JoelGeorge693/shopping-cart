import React, { useState } from 'react';
import './App.css';
import BasketIcon from './components/basket-icon/basket-icon.components';
import { connect } from 'react-redux';
import BasketDropDown from './components/basket-dropdown/basket-dropdown.components';
import GroceryList from './components/grocery/grocery-list.component';
import SearchBar from './components/search-bar/search-bar.component';


function App({ hidden, groceryList }) {
	const [searchField, changeSearch] = useState("");

	const handleChange = (e) => {
		changeSearch(e.target.value)
	};
	const filteredGrocery = groceryList.filter((grocery) =>
		grocery.name.toLowerCase().includes(searchField.toLowerCase()
	));

	return (
		<div className="App">

			<BasketIcon />

			{hidden ? null : <BasketDropDown />}
			<SearchBar handleChange={handleChange} />

			<GroceryList grocery={filteredGrocery} />

		</div>
	);
}

const mapStateToProps = (state) => ({
	hidden: state.basket.hidden,
	groceryList: state.basket.item,
});

export default connect(mapStateToProps)(App);
