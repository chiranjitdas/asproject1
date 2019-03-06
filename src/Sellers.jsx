import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './main/components/Header';
import Footer from './main/components/Footer';
import Home from './main/Home';
import Product from './main/Product';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';
import './App.css';

class Sellers extends Component {
   render() {
      return (
         <Router>            
            <div>
              
              <Header />          
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/product' component={Product} />
               </Switch>
               <Footer />
            </div>
         </Router>
      );
   }
}
export default Sellers;