import React, { useEffect } from 'react'
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Checkout from "./Checkout"
import Login from "./Login"
import Payment from "./Payment"
import Orders from "./Orders"
import Footer from "./Footer"
import { auth } from "./firebase";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe (
  'pk_test_51ILJbKCgMT0FArHai6pnJGUhYpSR9Pm0E2K09dkMMsV9o66nOVG34tLh4CGxBjIJLqhhKzMSfHw321fcdsr4rHko00AHcATTEq'
);
function App() {
  const [{}, dispatch ] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged (authUser => {
      console.log( "The USer Is >>>" , authUser);
      
      if (authUser) {
        //the user just logged in
        dispatch( {
          type: 'SET USER',
          user: authUser
        })
      } else {
        //the user just logged out
        dispatch ( {
          type: 'SET USER',
          user: null
        })
      }
    })
  }, []) 
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path = "/login" component = {Login}/>
          <Route path = "/orders">
            <Header/>
            <Orders/>
          </Route>
          <Route path = "/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path = "/payment">
            <Header/>
            <Elements stripe = {promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path = "/">
            <Header/>
            <Home/>
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
