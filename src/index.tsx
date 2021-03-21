import 'antd/dist/antd.css';

import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import GlobalStyles from './globalStyles';
import GlobalContext from './data/contexts/GlobalContext';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <GlobalContext>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route component={NotFound} />
      </Switch>
    </GlobalContext>
  </BrowserRouter>,
  document.getElementById('root')
);