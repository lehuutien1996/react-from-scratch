import React, { Component } from 'react';
import styled from 'styled-components';

// Styling
const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.2em;
  text-align: center;
`

const Heading = styled.h1`
  font-size: 2em;
  font-weight: 900;
  font-family: Ramaraja;
  margin: 0;
`

const Paragraph = styled.p`
  font-size: 1em;
  font-weight: 400;
  line-height: 1em;
  margin-bottom: 0.6em;
`

export default ({
  title = 'Travel Thirsty',
  subtitle = 'Traveling Blog'
}) => (
  <Wrapper>
    <Heading>{title}</Heading>
    <Paragraph>{subtitle}</Paragraph>
  </Wrapper>
)
