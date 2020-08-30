import React from 'react';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../button/CustomButton';
//Redux
import { connect } from 'react-redux';
//Redux actions
import { toggleCartHidden } from '../../redux/cart/cartActions'
//Redux Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelectors';
//CSS
import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className = "cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length
          ? cartItems.map((cartItem) => (<CartItem key = {cartItem.id} item = {cartItem}/>))
          : <span className = "empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick = {() => {
        history.push("/checkout");
        toggleCartHidden();
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state)
// })
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps, { toggleCartHidden })(CartDropdown));