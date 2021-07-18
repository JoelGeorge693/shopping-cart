import React from 'react';
import {MdAddCircle} from 'react-icons/md'
import{AiFillMinusCircle} from 'react-icons/ai'
import { connect } from 'react-redux';
import './grocery-list.styles.css';
import { addItem, removeItem } from '../../redux/basket/basket.actions';



const GroceryItem = ({ basketItems,listItem,addItemToBasket,removeItemFromBasket }) => (
    <li>
        <div className='list'>
            <span>{listItem.name}</span>
        <div onClick={()=>removeItemFromBasket(listItem)}><AiFillMinusCircle/></div>
        <div onClick={()=>addItemToBasket(listItem)}><MdAddCircle/></div>
        </div>
    </li>
  );



const mapDispatchToProps=(dispatch)=>({
    addItemToBasket:(item)=>dispatch(addItem(item)),
    removeItemFromBasket:(item)=>dispatch(removeItem(item)),
});

const mapStateToProps = (state)=>({
    basketItems:state.basket.basketItems
})
export default connect(mapStateToProps,mapDispatchToProps)(GroceryItem);