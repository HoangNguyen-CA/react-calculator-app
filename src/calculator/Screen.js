import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 8em;

  background-color: ${({ theme }) => theme.bg.screen};

  padding: 1em;
  margin-bottom: 1.3em;
  border-radius: ${({ theme }) => theme.radius.normal};
  color: ${({ theme }) => theme.clr.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainDisplay = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  font-weight: 700;
  font-size: 2.5rem;

  overflow: auto;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

const SecondDisplay = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  opacity: 0.7;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1em;

  overflow: auto;
`;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const Screen = ({ operand1, operand2, operator }) => {
  return (
    <Container>
      <SecondDisplay>
        {numberWithCommas(operand2)} {operator}
      </SecondDisplay>
      <MainDisplay>{numberWithCommas(operand1)}</MainDisplay>
    </Container>
  );
};

export default Screen;
