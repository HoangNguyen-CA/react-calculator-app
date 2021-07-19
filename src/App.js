import { ThemeProvider } from 'styled-components';
import { theme1 } from './themes';

import Calculator from './calculator/Calculator';
import styled from 'styled-components';

const Body = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em;
  min-width: 320px;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 2em 1em;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <Body>
        <Calculator />
      </Body>
    </ThemeProvider>
  );
}

export default App;
