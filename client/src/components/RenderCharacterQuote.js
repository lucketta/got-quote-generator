import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as quotes from '../actions/quoteCreators';
import {connect} from 'react-redux';

class RenderCharacterQuote extends Component {
  componentWillMount () {
    this.props.quotes.fetchQuote(this.props.history.state);
  }

  onBackButtonEvent = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  render(){
    return (
      <div>
        <Jumbotron>
        <h2>"{this.props.quote.quote}"</h2>
        <h3>- {this.props.quote.character}</h3>
        </Jumbotron>

        <Link to="/character_quote" >Back</Link>
      </div>

    )
  }
}
function mapStateToProps(state) {
  return {
    quote: state.quote
  }
}

function mapDispatchToProps(dispatch) {
  return {
    quotes: bindActionCreators(quotes, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCharacterQuote);
