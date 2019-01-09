import React, { Component } from 'react';

const withLoader = (WrappedComponent) => {
  return class LoaderHOC extends Component {
    render () {
      return this.props.contacts.length === 0
        ? <div className="loader">Loading...</div>
        : <WrappedComponent {...this.props} />
    }
  }
}

export default withLoader;
