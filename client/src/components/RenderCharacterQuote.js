import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as quotes from '../actions/quoteCreators';
import {connect} from 'react-redux';

class RenderCharacterQuote extends Component {
  componentWillMount () {
    this.props.quotes.fetchQuote(this.props.history.state);
  }

  render(){
    console.log("TEST",this.props.history.state);
    return (
      <Jumbotron>
      <h2>"{this.props.quote.quote}"</h2>
      <h3>- {this.props.quote.character}</h3>
      </Jumbotron>
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
