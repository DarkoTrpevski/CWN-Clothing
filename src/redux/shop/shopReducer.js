import shopData from '../../assets/shop-data';

const initialState = {
  collections: shopData
}

const shopReducer = (state = initialState, action) => {
  // eslint-disable-next-line
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default shopReducer;