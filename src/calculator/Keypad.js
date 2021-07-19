import React from 'react';
import Key from './Key';
import styled from 'styled-components';

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

const Keypad = () => {
  return (
    <Container>
      <Key>7</Key>
      <Key>8</Key>
      <Key>9</Key>
      <Key keyType='secondary'>DEL</Key>
      <Key>4</Key>
      <Key>5</Key>
      <Key>6</Key>
      <Key>+</Key>
      <Key>1</Key>
      <Key>2</Key>
      <Key>3</Key>
      <Key>-</Key>
      <Key>.</Key>
      <Key>0</Key>
      <Key>/</Key>
      <Key>x</Key>
      <Key span='2' keyType='secondary'>
        RESET
      </Key>
      <Key span='2' keyType='accent'>
        =
      </Key>
    </Container>
  );
};

export default Keypad;
