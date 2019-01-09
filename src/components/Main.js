import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from 'components/SearchBar';
import ContactList from 'components/ContactList';

export default class Main extends Component {

  state = {
    filterText: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        thumbnail: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string,
      })
    ).isRequired,
  };

  handleUserInput = (terms) => {
    this.setState({ filterText: terms })
  }

  render() {
    console.log(this.state.filterText);
    return (
      <div className="contactApp">
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}
        />
        <ContactList
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
      </div>
    )
  }

}
