import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './main/components/Header';
import Footer from './main/components/Footer';
import Home from './main/Home';
import ProductNew from './main/ProductNew';

import './App.css';

class App extends Component {
   render() {
      return (
        <Router>  
                      
          <div>
            
            <Header />          
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/product/:any' component={ProductNew} />
            </Switch>
            <Footer />
            
          </div>
      </Router>
      );
   }
}
export default App;