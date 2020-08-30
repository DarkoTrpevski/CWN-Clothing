import { createSelector } from 'reselect';

//Level 1 Deep
const selectUser = (state) => state.user;

//Level 2 Deep
//Selects the cartItems itemCount state slice
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);