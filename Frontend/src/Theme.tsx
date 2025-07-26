import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5f9c5e',
      light: '#7faf7e',
      dark: '#426d41',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#46cfb2',
      light: '#6bd8c1',
      dark: '#31907c',
      contrastText: 'rgba(0,0,0,0.87)',
    },
    text: {
      primary: '#f2f7f2',
      secondary: '#dcedc8',
      disabled: '#9ccc65',
      // hint: '#76ff03',
    },
    divider: '#dcedc8',
    background: {
      default: '#090e09',
      paper: '#131613',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      }
    },
  },
});