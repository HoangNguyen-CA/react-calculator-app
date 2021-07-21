import React, { useContext } from 'react';
import styled from 'styled-components';
import { themeContext } from '../context/themeContext';

const Container = styled.div`
  margin-bottom: 1.9em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.clr.primary};
`;

const Logo = styled.h1`
  font-size: 1.9rem;
`;

const ToggleContainer = styled.div`
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const ToggleHeader = styled.p`
  font-size: 0.7rem;
  margin-right: 1em;
  letter-spacing: 1px;

  flex: 0 0;
`;

const Toggle = styled.div`
  background-color: ${({ theme }) => theme.bg.keypad};
  display: flex;
  padding: 4px;
  border-radius: 100em;
`;

const ToggleButton = styled.div.attrs((props) => ({
  n: props.n || '1',
}))`
  height: 15px;
  width: 15px;
  border-radius: 100em;

  cursor: pointer;
  position: relative;

  background-color: ${(props) =>
    props.active ? props.theme.key.accent.background : 'transparent'};

  & + & {
    margin-left: 5px;
  }

  &::after {
    content: '${(props) => props.n}';

    position: absolute;
    color: ${({ theme }) => theme.clr.primary};
    font-weight: 700;

    top: -150%;
    left: 0;
    width: 100%;
  }
`;

const Topbar = () => {
  const { setTheme1, setTheme2, setTheme3, themeNumber, setThemeNumber } =
    useContext(themeContext);

  const handleTheme1 = (e) => {
    localStorage.setItem('theme', 1);

    setTheme1();
    setThemeNumber(1);
  };

  const handleTheme2 = (e) => {
    localStorage.setItem('theme', 2);

    setTheme2();
    setThemeNumber(2);
  };
  const handleTheme3 = (e) => {
    localStorage.setItem('theme', 3);

    setTheme3();
    setThemeNumber(3);
  };
  return (
    <Container>
      <Logo>calc</Logo>
      <ToggleContainer>
        <ToggleHeader>Theme</ToggleHeader>
        <Toggle>
          <ToggleButton
            n='1'
            active={themeNumber === 1}
            onClick={handleTheme1}
          ></ToggleButton>
          <ToggleButton
            n='2'
            active={themeNumber === 2}
            onClick={handleTheme2}
          ></ToggleButton>
          <ToggleButton
            n='3'
            active={themeNumber === 3}
            onClick={handleTheme3}
          ></ToggleButton>
        </Toggle>
      </ToggleContainer>
    </Container>
  );
};

export default Topbar;
