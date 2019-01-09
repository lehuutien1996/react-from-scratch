import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ contact }) => {
  return (
    <div>
      <img src={contact.thumbnail}/>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
    </div>
  )
}

Item.propTypes = {
  contact: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
}

Item.defaultProps = {
  email: ''
}

export default Item
