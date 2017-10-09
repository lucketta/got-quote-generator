import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ButtonToolbar } from 'react-bootstrap';
import RandomQuote from '../containers/RandomQuote';
import CharacterQuote from '../containers/CharacterQuote';
import RenderCharacterQuote from '../components/RenderCharacterQuote';
import '../App.css';



class App extends Component {
render() {
  return (
  <Router>
      <div className="App">
        <div className="App-header">
          <h1>Game of Thrones</h1>
          <h2>Quote Generator</h2>
        </div>
          <div className="Home">
            <h3>Click below for the chance of an inappropriate GoT quote:</h3>
            </div>

            <ButtonToolbar className="button-link">
              <Link to="/random_quote" className="link">Random Quote</Link>
              <Link to="/character_quote" >Character Quote</Link>
            </ButtonToolbar>

        <Switch>
          <Route path="/character_quote/character" component={RenderCharacterQuote} />
          <Route path="/random_quote" component={RandomQuote} />
          <Route path="/character_quote" component={CharacterQuote} />
        </Switch>
      </div>
    </Router>
)}
}

export default App;
