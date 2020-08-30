import { SET_CURRENT_USER } from '../actionTypes';

export const setCurrentUser = (user) => dispatch => {
  try {
    dispatch({
      type: SET_CURRENT_USER,
      payload: user
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
  }
};