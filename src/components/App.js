import React, { Component } from 'react'
import Main from './Main';

export default class App extends Component {

  state = {
    contacts: [],
  };

  componentWillMount() {
    fetch('https://api.randomuser.me/?nat=us&results=50')
      .then(res => res.json())
      .then(res => res.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail,
      })))
      .then(contacts => this.setState({ contacts }));
  }

  render() {
    console.log(this.state.contacts);
    return (
      <div className="app">
        <Main contacts={this.state.contacts}/>
      </div>
    );
  }
}
