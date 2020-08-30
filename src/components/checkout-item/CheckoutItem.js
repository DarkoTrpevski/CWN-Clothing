import React from 'react';
//Redux
import { connect } from 'react-redux';
//Redux actions
import { addCartItem, removeCartItem, clearItemFromCart } from '../../redux/cart/cartActions';
//CSS
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, addCartItem, removeCartItem, clearItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className = "checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick = {() => removeCartItem(cartItem)}>&#10094;</div>
        <span className="value">
          {quantity}
        </span>
        <div className="arrow" onClick = {() => addCartItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick = {() => clearItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}

export default connect(null, { addCartItem, removeCartItem, clearItemFromCart})(CheckoutItem);