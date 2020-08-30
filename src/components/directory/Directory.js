import React from 'react';
import MenuItem from '../menu-item/MenuItem';
//Redux
import { connect } from 'react-redux';
//Redux selectors
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import './Directory.scss';

const Directory = ({ sections }) => {

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key = {id} { ...otherProps }/>
      ))}        
    </div>
  )
}

// const mapStateToProps = (state) => ({
//   sections: selectDirectorySections(state)
// })

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);