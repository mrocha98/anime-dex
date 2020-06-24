import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Nav from './components/nav';
import './styles/bulma.scss';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
