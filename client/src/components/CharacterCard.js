import React, { Component } from 'react';
import {Thumbnail, Col } from 'react-bootstrap';



class CharacterCard extends Component {

  render() {
    return (
      <Col xs={6} md={4}>
        <Thumbnail className="thumbnails" alt={this.props.character.name} onClick={this.props.handleClick} src={this.props.character.photo_url}  >{this.props.character.name}</Thumbnail>
      </Col>

    )
  }
}

export default CharacterCard;
