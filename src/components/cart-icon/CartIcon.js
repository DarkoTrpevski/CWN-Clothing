import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
//Redux
import { connect } from 'react-redux';
//Redux Actions
import { toggleCartHidden } from '../../redux/cart/cartActions';
//Redux Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
//CSS
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className = "cart-icon" onClick = {toggleCartHidden}>
      <ShoppingIcon className = "shopping-icon"/>
      <span className = "item-count">{itemCount}</span>
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   itemCount: selectCartItemsCount(state)
// })


const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);