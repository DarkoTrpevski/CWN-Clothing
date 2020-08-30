import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './CollectionPreview.scss';

const CollectionList = ({ title, items }) => {
  return (
    <div className = "collection-preview">
      <h1 className = "title">{title.toUpperCase()}</h1>
      <div className = "preview">
        {
          //Filter the items array so only 4 of them are showing in the collection page (non-detail)
          items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key = {item.id}  item = {item} />
          ))
        }
      </div>
    </div>
  )
}

export default CollectionList;