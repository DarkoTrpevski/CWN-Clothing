import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const initialState = {};

const middlewares = [loggerMiddleware, thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers);

export const store = createStore(rootReducer, initialState, composedEnhancers);
export const persistor = persistStore(store);

export default { store, persistor };