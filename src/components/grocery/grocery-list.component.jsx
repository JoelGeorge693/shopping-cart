import React from 'react';
import {connect} from 'react-redux';
import GroceryItem from './grocery-items.component';
import {addItem} from '../../redux/basket/basket.actions';
import {FaSeedling} from 'react-icons/fa'

const GroceryList = ({groceryItems,grocery})=>(
    <div>
		  <header>
			  <h3><FaSeedling/> Groceries</h3>
		  </header>
		  <ul className="Groceries">
			  {grocery.map(listItem => (
				<GroceryItem key={listItem.id} listItem={listItem} />
			  ))}
		  </ul>
	  </div>
);

const mapStateToProps = (state)=>({
        groceryItems:state.basket.item
});

const mapDispatchToProps = (dispatch)=>({
	addItemToBasket:()=>dispatch(addItem())
});

export default connect(mapStateToProps,mapDispatchToProps)(GroceryList);

