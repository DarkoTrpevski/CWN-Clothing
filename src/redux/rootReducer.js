import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//Create persistConfig for our modified rootReducer, starting from our most BASE state(the root)
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//Exporting modified rootReducer with persist capabilities
export default persistReducer(persistConfig, rootReducer);