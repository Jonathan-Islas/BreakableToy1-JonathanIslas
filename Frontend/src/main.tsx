import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './Theme.tsx';
import './index.css';
import App from './App.tsx';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={themeOptions}>
    <CssBaseline/>
    <App />
  </ThemeProvider>,
)