import React, { Component } from 'react';
import { Jumbotron, Thumbnail, Grid, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as quotes from '../actions/quoteCreators';
import {connect} from 'react-redux';
import { characters } from '../data/characters';
import { withRouter } from 'react-router';
import RenderCharacterQuote from '../components/RenderCharacterQuote';


class CharacterQuote extends Component {
  handleOnClick(event) {
    this.props.history.state = event.target.alt;
    this.props.history.push(`/character_quote/character`);
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterQuote,RenderCharacterQuote));
