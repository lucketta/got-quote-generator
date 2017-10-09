import React, { Component } from 'react';
import LikeCounter from './LikeCounter';
import { Jumbotron, Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';



class CharacterCard extends Component {

  render() {
    return (
      <Col xs={6} md={4}>
        <Thumbnail className="thumbnails" alt={this.props.character.name} onClick={(event) => this.handleOnClick(event)} src={this.props.character.photo_url}  >{this.props.character.name}</Thumbnail>
      </Col>

    )
  }
}

export default CharacterCard;
