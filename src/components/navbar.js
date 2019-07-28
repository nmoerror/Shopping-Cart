import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin-bottom: 1rem;
  padding: 0 2rem;
  color: white;
  font-size: 2rem;
  background: #333;
`;

//Stateless Functional Component

const Navvie = ({ total }) => {
  return <Section>Items in Cart: {total}</Section>;
};

export default Navvie;
