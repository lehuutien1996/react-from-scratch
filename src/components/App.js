import React, { Component } from 'react'
import styled from 'styled-components'
import Header from 'components/shared/header';
import 'fonts';

const Root = styled.div`
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 16px;
  font-family: Roboto, Helvetica, 'Helvetica Neue', Arial, sans-serif;
`
const Heading = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 2em;
`

export default class App extends Component {
  render() {
    return (
      <Root>
        <Header></Header>
      </Root>
    );
  }
}
