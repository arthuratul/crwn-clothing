import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import toggleCartDropdown from '../../redux/reducers/cart/cart.actions';

const CartIconComponent = ({ toggleCartDropdown }) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIconComponent);
