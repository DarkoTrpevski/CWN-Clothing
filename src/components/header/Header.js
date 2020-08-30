import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
//Import firebase auth
import { auth } from '../../firebase/firebase.utils';
//Redux
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
//Redux Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cartSelectors'
import { selectCurrentUser } from '../../redux/user/userSelectors'
//CSS
import './Header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className = "Header">

      <Link to = "/" className = "logo-container">
        <Logo className = "logo"/>
      </Link>
      <div className="options">
        <Link to = "/shop" className = "option">Shop</Link>
        <Link to = "/contact" className = "option">Contact</Link>
        {
          currentUser
          ? (<div className = "option" onClick = {() => auth.signOut()}>SIGN OUT</div>)
          : (<Link className = "option" to = "/signin">SIGN IN</Link>)
        }
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
      
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);