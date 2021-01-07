import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Navbar/>
      <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
)

export default App;
