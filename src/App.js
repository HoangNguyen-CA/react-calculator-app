import { ThemeProvider } from 'styled-components';
import { theme1 } from './themes';

import Calculator from './calculator/Calculator';

function App() {
  return (
    <ThemeProvider theme={theme1}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
