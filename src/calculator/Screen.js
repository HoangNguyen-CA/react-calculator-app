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
  font-weight: 700;
  font-size: 3rem;
  width: 100%;
  text-align: right;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

const SecondDisplay = styled.p`
  opacity: 0.7;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1em;
  width: 100%;
  text-align: right;
`;

const Screen = ({ children }) => {
  return (
    <Container>
      <SecondDisplay>{Number(children).toLocaleString()} x</SecondDisplay>
      <MainDisplay>{Number(children).toLocaleString()}</MainDisplay>
    </Container>
  );
};

export default Screen;
