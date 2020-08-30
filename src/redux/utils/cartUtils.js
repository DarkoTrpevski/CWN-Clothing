//Util function used in the cartReducer to "Group/Add" multiple items of same type, which increases the quantity property instead
//cartItems is the current state.cartItems, while cartItemToAdd is the item contained in the payload
export const addItemToCart = (cartItems, cartItemToAdd) =>  {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  //If there is an existing item, instead of adding multiple instances of it, increase its quantity by 1
  if(existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    )
  }

  //If there is not an existing item, simply add the item, along with default quantity value of 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

//cartItems is the current state.cartItems, while cartItemToRemove is the item contained in the payload
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

  //If the quantity of a selected item is 1, then if user clicks the button remove the whole product from the array
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  //If the quantity of a selected item is more than 1, map through the cartItems, find the product and decrease its quantity by 1
  return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  )
}