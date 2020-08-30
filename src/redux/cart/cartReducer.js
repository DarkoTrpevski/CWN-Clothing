import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, CLEAR_ITEM_FORM_CART, REMOVE_CART_ITEM } from '../actionTypes';
import { addItemToCart, removeItemFromCart } from '../utils/cartUtils';

const initialState = {
  hidden: true,
  cartItems: []
}
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      }
    case CLEAR_ITEM_FORM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id)
      }
  
    default:
      return state;
  }
}

export default cartReducer;