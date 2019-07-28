import React, { Component } from 'react';
import styled from 'styled-components';
import Counter from './counter';

const Container = styled.div`
  margin: 0 4rem;

  button {
    padding: 0.3rem 0.5rem;
    background: #aaa;
    border: none;
    outline: none;
    border-radius: 0.3rem;
    cursor: pointer;
  }
`;
export class counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <Container>
        <button onClick={onReset}>Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </Container>
    );
  }
}

export default counters;
