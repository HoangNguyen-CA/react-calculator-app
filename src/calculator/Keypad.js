import React from 'react';
import Key from './Key';
import styled from 'styled-components';

import { operators } from './enums';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.keypad};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 1.5em;
  padding: 1.5em;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.normal};

  @media ${({ theme }) => theme.breakpoints.mobile} {
    gap: 1em;
    padding: 1em;
  }
`;

const Keypad = ({
  addToOperand,
  addOperator,
  reset,
  deleteFromOperand,
  equals,
}) => {
  return (
    <Container>
      <Key onClick={() => addToOperand(7)}>7</Key>
      <Key onClick={() => addToOperand(8)}>8</Key>
      <Key onClick={() => addToOperand(9)}>9</Key>
      <Key $keyType='secondary' onClick={deleteFromOperand}>
        DEL
      </Key>
      <Key onClick={() => addToOperand(4)}>4</Key>
      <Key onClick={() => addToOperand(5)}>5</Key>
      <Key onClick={() => addToOperand(6)}>6</Key>
      <Key onClick={() => addOperator(operators.add)}>+</Key>
      <Key onClick={() => addToOperand(1)}>1</Key>
      <Key onClick={() => addToOperand(2)}>2</Key>
      <Key onClick={() => addToOperand(3)}>3</Key>
      <Key onClick={() => addOperator(operators.subtract)}>-</Key>
      <Key onClick={() => addToOperand('.')}>.</Key>
      <Key onClick={() => addToOperand(0)}>0</Key>
      <Key onClick={() => addOperator(operators.divide)}>/</Key>
      <Key onClick={() => addOperator(operators.multiply)}>x</Key>
      <Key $span='2' $keyType='secondary' onClick={reset}>
        RESET
      </Key>
      <Key $span='2' $keyType='accent' onClick={equals}>
        =
      </Key>
    </Container>
  );
};

export default Keypad;
