import React from 'react';
import CustomButton from '../button/CustomButton';
//Redux
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cartActions';
//CSS
import './CollectionItem.scss';

const CollectionItem = ({ item, addCartItem }) => {
  const{ name, price, imageUrl } = item;
  return (
    <div className = "collection-item">

      <div className="image" style = {{
        background: `url(${imageUrl})`
      }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick = {() => addCartItem(item)} inverted>Add to cart</CustomButton>
    </div>
  )
}

export default connect(null, { addCartItem })(CollectionItem);