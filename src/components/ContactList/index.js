import React from 'react';
import PropTypes from 'prop-types';
import withLoader from 'HOC/withLoader';
import Item from './Item';

const ContactList = ({ contacts }) => {
  return (
    <div className="contact__wrapper">
      <header>Contacts</header>
      <ul>
        { contacts.map((item, index) => (
            <li key={index}>
              <Item contact={item}/>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string,
    })
  ).isRequired,
};

export default withLoader(ContactList)
