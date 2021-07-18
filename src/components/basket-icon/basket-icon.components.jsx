import React from 'react';
import { connect } from 'react-redux';
import { toggleBasketHidden } from '../../redux/basket/basket.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/basket-6.svg';
import './basket-icon.styles.css';


const BasketIcon = ({ toggleBasketHidden }) => (
    <div className="App-header" onClick={toggleBasketHidden}>
        <ShoppingIcon className="shopping-icon" aria-hidden="true" />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleBasketHidden: () => dispatch(toggleBasketHidden()),
});

export default connect(null, mapDispatchToProps)(BasketIcon);
