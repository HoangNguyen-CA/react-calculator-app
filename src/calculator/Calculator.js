import React from 'react';
import Keypad from './Keypad';
import Screen from './Screen';
import Topbar from './Topbar';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.main};
`;

const Calculator = () => {
  return (
    <Container>
      <Topbar></Topbar>
      <Screen>30000</Screen>
      <Keypad></Keypad>
    </Container>
  );
};

export default Calculator;
