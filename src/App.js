import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
          <Route exact path='/signup' component={SignInAndSignUpPage} />
          {/* <Route exact path='/shop/hats' component={HatsPage} />
          <Route path='/shop/hats/:hatId' component={HatsDetailPage} /> */}
        </Switch>
    </div>
  );
}

export default App;
