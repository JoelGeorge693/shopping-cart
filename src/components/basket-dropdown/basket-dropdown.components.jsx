import React from "react";
import "./basket-dropdown.styles.css";
import BasketItems from "../basket-items/basket-items.components";
import { connect } from "react-redux";
import { clearBasket } from "../../redux/basket/basket.actions";

const BasketDropDown = ({ basketItems, deleteAll }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {basketItems.length ? (
        basketItems.map((basketItem) => (
          <BasketItems key={basketItem.id} item={basketItem} />
        ))
      ) : (
        <span className="empty-message">Your Basket is empty</span>
      )}
    </div>
    <br></br>
    <button onClick={() => deleteAll()} className='button'>Delete All</button>
  </div>
);

const mapStateToProps = (state) => ({
  basketItems: state.basket.basketItems,
});
const mapDispatchToProps = (dispatch) => ({
  deleteAll: () => dispatch(clearBasket())
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketDropDown);
