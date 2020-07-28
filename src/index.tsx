import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';

const theme = {
  palette: {
    primary: {
      main: '#27AD5F',
    },
    secondary: {
      main: '#4284F5',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
