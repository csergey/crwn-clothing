import React from 'react';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{

// console.log(userAuth.displayName);
// console.log(userAuth.emailVerified);
// console.log(userAuth.email);

    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {

        // console.log(snapshot.displayName);
        // console.log(snapshot.emailVerified);
         //console.log(snapshot.uid);


        this.setState({
          currentUser:
          {
            id:           snapshot.id,
            displayName:  snapshot.displayName, 
            email:        snapshot.email,
            createAt:     snapshot.createAt,
                        ...snapshot.data()
          }
        }, () => {console.log(this.state);        });
      });
    }
    else{
      this.setState({currentUser: userAuth});
    }


  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}


  render (){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

}

export default App;
