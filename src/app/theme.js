import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: 1.75,
      fontWeight: 600,
      margin: 0,
      marginBottom: 5,
    },
    h2: {
      fontSize: 0.75,
      fontWeight: 'normal',
    },
    h3: {
      fontSize: 0.75,
      fontWeight: 300,
    },
    body1: {
      fontSize: 0.75,
    },
  },
  palette: {
    primary: {
      main: '#FFFFFF', 
    },
    secondary: {
      main: '#000000', 
    },
    
  },
});

export default theme;
