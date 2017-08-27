import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom'
import { Nav, Navbar, Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import RandomQuote from '../containers/RandomQuote';

import '../App.css';

const App = () =>
    <Router>
      <div className="App">
        <div className="App-header">
          <h1>Game of Thrones Quote Generator</h1>
        </div>
          <h3>Click a button below for an inappropriate GoT quote:</h3>
            <ButtonToolbar className="button-link">
              <Button href="/random_quote" >Random Quote</Button>
              <Button href="/character_quote" >Character Quote</Button>
            </ButtonToolbar>
        <Route path="/random_quote" component={RandomQuote} />
      </div>
    </Router>

export default App;