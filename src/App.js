import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInPage from './pages/signin/signin.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currenntUser: null
    }
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
