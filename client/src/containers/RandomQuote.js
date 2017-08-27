import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import * as quotes from '../actions/quoteCreators'
import {connect} from 'react-redux'


class RandomQuote extends Component {
  componentDidMount() {
      this.props.quotes.fetchQuote();
    }

    render() {
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

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuote);
