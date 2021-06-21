import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
    <Link to='/'>Back</Link> 
    <br/>
    <Link to='/hats/1'>Details</Link>
  </div>
)
const HatsDetailPage = () => (
  <div>
    <h1>HATS Detail PAGE</h1>
    <Link to='/hats'>Back</Link>
  </div>
)

function App() {
  return (
    <div>
        {/* <HomePage className="App"/> */}
        
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop/hats' component={HatsPage} />
          <Route path='/shop/hats/:hatId' component={HatsDetailPage} />

        </Switch>

    

    </div>
  );
}

export default App;
