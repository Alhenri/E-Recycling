import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyles from './globalStyles';
import GlobalContext from './data/contexts/GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalContext>
      <Home />
    </GlobalContext>
  </React.StrictMode>,
  document.getElementById('root')
);