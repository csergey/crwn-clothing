import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          {/* <Route exact path='/shop/hats' component={HatsPage} />
          <Route path='/shop/hats/:hatId' component={HatsDetailPage} /> */}
        </Switch>
    </div>
  );
}

export default App;
