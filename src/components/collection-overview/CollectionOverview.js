import React from 'react';
import CollectionPreview from '../collection-preview/CollectionPreview'
//Redux
import { connect } from 'react-redux';
//Redux selectors
import { createStructuredSelector } from 'reselect';
import { selectCollectionConvertObjectToArray } from '../../redux/shop/shopSelectors';

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className = "collections-overview">
      {
        collections.map(({id , ...otherProps}) => (
          <CollectionPreview key = {id} {...otherProps}/>
        ))
      }
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   collections: selectCollectionConvertObjectToArray(state)
// })

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionConvertObjectToArray
})

export default connect(mapStateToProps)(CollectionOverview)