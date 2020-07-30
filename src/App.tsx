import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import Snackbar from './components/Snackbar';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
      <Snackbar />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
