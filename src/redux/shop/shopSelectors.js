import { createSelector } from 'reselect';

//Level 1 Deep
const selectShop = (state) => state.shop;

//Level 2 Deep
export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

//Level 2 Deep
//(collectionUrlParam) is the URL string param(hats, jackets etc), which we use to find and return the collection with correct id
export const selectShopCollection = (collectionUrlParam) => createSelector(
  [selectShopCollections],
  collections => collections[collectionUrlParam]
)

//Level 2 Deep
//Get an object(shopData collections) and convert it into an array to be used in CollectionOverview
export const selectCollectionConvertObjectToArray = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
)