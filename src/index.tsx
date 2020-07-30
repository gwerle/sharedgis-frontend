import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import App from './App';
import store from './store/config';

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
    <Provider store={store}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        <App />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
