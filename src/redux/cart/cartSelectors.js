import { createSelector } from 'reselect';

//Level 1 Deep
const selectCart = (state) => state.cart;

//Level 2 Deep
//(createSelector) takes 2 arguments.An Array of input selectors, and a function(combiner) that returns the value we want
//Selects the cartItems state slice
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//Level 2 Deep
//Selects the cartItems state slice
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//Level 3 Deep
//Selects the cartItems itemCount state slice
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

//Level 3 Deep
//Selects the cartItems price state slice
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity * cartItem.price, 0)
);