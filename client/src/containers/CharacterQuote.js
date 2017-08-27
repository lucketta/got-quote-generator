import React, { Component } from 'react';
import { Jumbotron, Button, Thumbnail, Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import * as quotes from '../actions/quoteCreators'
import {connect} from 'react-redux'
import { characters } from '../data/characters'


class CharacterQuote extends Component {
  componentDidMount() {
    }

    render() {
      return (
        <div>
          <Jumbotron>
          <Grid>
          <Row>
            {characters.map((character, index) => (
              <div key={index}>
                <Col xs={6} md={3}>
                  <Thumbnail href="#" alt="171x180" src={character.img} >{character.name}</Thumbnail>
                </Col>
              </div>
            ))}
          </Row>
          </Grid>
        </Jumbotron>
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

export default connect(mapStateToProps, mapDispatchToProps)(CharacterQuote);
