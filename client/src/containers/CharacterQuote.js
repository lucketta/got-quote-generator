import React, { Component } from 'react';
import { Jumbotron, Button, Thumbnail, Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import * as quotes from '../actions/quoteCreators'
import {connect} from 'react-redux'
import { characters } from '../data/characters'
import { withRouter } from 'react-router';


class CharacterQuote extends Component {
  handleOnClick(event) {
    this.props.quotes.fetchQuote(event.target.alt);
    }

    render() {
      return (
        <div>
          <Jumbotron>
          <Grid>
          <Row>
            {characters.map((character, index) => (
              <div key={index}>
                <Col xs={6} md={4}>
                  <Thumbnail  alt={character.name} onClick={(event) => this.handleOnClick(event)} src={character.img}  >{character.name}</Thumbnail>
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
