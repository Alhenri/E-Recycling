import 'antd/dist/antd.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import GlobalStyles from './globalStyles';
import GlobalContext from './data/contexts/GlobalContext';
import LocationContext from './data/contexts/CollectionPoint';

import Home from './pages/Home';
import ColletionPoints from './pages/CollectionPoints';
import NotFound from './pages/NotFound';
import AddCollectionPoint from './pages/AddCollectPoint';

ReactDOM.render(
  <BrowserRouter>
    <GlobalStyles />
    <GlobalContext>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search-point" exact>
          <LocationContext>
            <ColletionPoints />
          </LocationContext>
        </Route>
        <Route path="/create-point" exact>
          <AddCollectionPoint />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </GlobalContext>
  </BrowserRouter>,
  document.getElementById('root')
);
