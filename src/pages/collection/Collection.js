import React from 'react';
import CollectionItem from '../../components/collection-item/CollectionItem';
//Redux
import { connect } from 'react-redux';
//Redux selectors
import { selectShopCollection } from '../../redux/shop/shopSelectors';
//CSS
import './Collection.scss';

const Collection = ({ collection }) => {

  const { title, items } = collection;
  console.log(collection);
  
  return (
    <div className = "collection-page">
      <h2 className = "title">{title}</h2>
      <div className="items">
        {
          items.map((item) => (
            <CollectionItem key = {item.id} item = {item}/>
          ))
        }
      </div>
    </div>
  )
}

//(mapStateToProps) has 2 arguments, the entire root state and its own props from the Component it's connected to
const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);