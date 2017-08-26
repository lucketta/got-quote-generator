import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Nav, NavItem, Navbar, Jumbotron, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import RandomQuote from '../containers/RandomQuote';


import '../App.css';

const App = (props) =>
  <Router>
    <div className="App">
      <div className="App-header">
        <h2>Game of Thrones Quote Generator</h2>
      </div>
      <p className="App-intro">
        Click a button below to get a quote:
        <Nav bsStyle="tabs" bsStyle="primary" >
          <NavItem eventKey={1} href="/random_quote">Random Quote</NavItem>
          <NavItem eventKey={2} href="/character_quote">Character Quote</NavItem>
        </Nav>
      </p>
      <Switch>
        <Route path="/random_quote" component={RandomQuote} />
        </ Switch>
    </div>
  </Router>

export default App;
