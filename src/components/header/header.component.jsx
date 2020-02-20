import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIconComponent from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {currentUser ?
                <div className='option' onClick={() => auth.signOut()}> Sign Out </div>
                :
                <Link to='/signin' className='option'>
                    Sign In
                </Link>
            }
            <CartIconComponent/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
);

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
});

export default connect(mapStateToProps, null)(Header);
