import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import GlobalStyles from './globalStyles';
import GlobalContext from './data/contexts/GlobalContext';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <GlobalContext>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </GlobalContext>
  </BrowserRouter>,
  document.getElementById('root')
);