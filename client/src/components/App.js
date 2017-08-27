import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom'
import { Nav, Navbar, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import RandomQuote from '../containers/RandomQuote';
import CharacterQuote from '../containers/CharacterQuote';

import '../App.css';

const App = () =>
    <Router>
      <div className="App">
        <div className="App-header">
          <h1>Game of Thrones</h1>
          <h2>Quote Generator</h2>
        </div>
          <h3>Click below for the chance of an inappropriate GoT quote:</h3>
            <ButtonToolbar className="button-link">
              <Button href="/random_quote" >Random Quote</Button>
              <Button href="/character_quote" >Character Quote</Button>
            </ButtonToolbar>
        <Route path="/random_quote" component={RandomQuote} />
        <Route path="/character_quote" component={CharacterQuote} />

      </div>
    </Router>

export default App;
