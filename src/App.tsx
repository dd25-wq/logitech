import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Cart from './components/Cart';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Cart />
    </ThemeProvider>
  );
}

export default App;
