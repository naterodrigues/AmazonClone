import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom" // Adding support for multiple page URLs
import Header from './Header.js';

function App() {
    return (
        <Router>
            <div className="app">

                <Switch>
                  <Route path ="/checkout">
                    <h1>Checkout</h1>
                  </Route>
                  <Route path="/login">
                    <h1>Login Page</h1>
                  </Route>
                  <Route path ="/"> 
                  <Header /> 
                    <h1>Home Page</h1>
                  </Route>

                </Switch>

                {/*we need react-Router for the below */}
                {/* localhost.com/*/}
                {/* localhost.com/checkout/*/}
                {/* localhost.com/login*/} </div>
        </Router>
    );
}

export default App;
