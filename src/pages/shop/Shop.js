import React from 'react';
import { Route } from 'react-router-dom';
import Collection from '../collection/Collection';
import CollectionOverview from '../../components/collection-overview/CollectionOverview';

//We get the match prop through our Shop page Route in App component
const Shop = ({ match }) => {
  return (
    <div className = "shop-page">
      <Route exact path = {`${match.path}`} component = {CollectionOverview} />
      <Route path = {`${match.path}/:collectionId`} component = {Collection}/>
    </div>
  )
}

export default Shop;