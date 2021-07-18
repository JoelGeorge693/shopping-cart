import React from "react";
import { ImCross } from 'react-icons/im'
import { connect } from "react-redux";
import { clearItem } from "../../redux/basket/basket.actions";
import "./basket-items.styles.css";

const BasketItems = ({ item, clearItem }) => (
  <div className="cart-item">
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className='quantity'>{item.quantity}</span>
      <span className='remove' onClick={() => clearItem(item)}><ImCross /></span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item))
});

export default connect(null, mapDispatchToProps)(BasketItems);
