import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, CLEAR_ITEM_FORM_CART } from '../actionTypes';

export const toggleCartHidden = () => dispatch => {
  try {
    dispatch({
      type: TOGGLE_CART_HIDDEN
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const addCartItem = (item) => dispatch => {
  try {
    dispatch({
      type: ADD_CART_ITEM,
      payload: item
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const removeCartItem = (item) => dispatch => {
  try {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: item
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};

export const clearItemFromCart = (item) => dispatch => {
  try {
    dispatch({
      type: CLEAR_ITEM_FORM_CART,
      payload: item
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};