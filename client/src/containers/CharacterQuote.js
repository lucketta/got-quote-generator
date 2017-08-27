import React, { Component } from 'react';
import { Jumbotron, Button, Thumbnail, Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import * as quotes from '../actions/quoteCreators'
import {connect} from 'react-redux'


class RandomQuote extends Component {
  componentDidMount() {
    }

    render() {
      return (
        <Jumbotron>
          <Grid>
            <Row>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
            </Col>
            </Row>
          </Grid>
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
