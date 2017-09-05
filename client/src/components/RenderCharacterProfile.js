import React, { Component } from 'react';
import { Jumbotron, Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as profiles from '../actions/profiles';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import RenderCharacterQuote from '../components/RenderCharacterQuote';
import axios from 'axios';


class RenderCharacterProfile extends Component {
  constructor(props) {
        super(props);

        this.state = {
          char: "",
          showComponent: false,
        }
      }

  handleOnClick(event) {
    event.preventDefault();
    this.props.history.state = event.target.alt;
    this.props.history.push(`/character_quote/character`);
    }

  handleDelete(event) {
    event.preventDefault();
    var that = this.props.history;
    axios.get('/character_quote/'+event.target.value+'/delete')
  .then(function (response) {
    window.location.reload();
    that.push(`/character_quote`);
  })
}

  render(){
    return (
      <div>
      <Jumbotron>
      <Grid>
      <Row>
        {this.props.profile.map((character, index) => (
          <div key={index}>
            <Col xs={6} md={4}>
              <Button className="delete" onClick={event => this.handleDelete(event)} value={character.name} >Delete</Button>

              <Thumbnail className="thumbnails" alt={character.name} onClick={(event) => this.handleOnClick(event)} src={character.photo_url}  >{character.name}</Thumbnail>
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
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    profiles: bindActionCreators(profiles, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCharacterProfile);
