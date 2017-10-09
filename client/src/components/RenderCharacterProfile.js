import React, { Component } from 'react';
import { Jumbotron, Thumbnail, Grid, Row, Col, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteProfile} from '../actions/profiles';
import {connect} from 'react-redux';
import LikeCounter from './LikeCounter';
import CharacterCard from './CharacterCard';


class RenderCharacterProfile extends Component {



  handleOnClick(event) {
    event.preventDefault();
    this.props.history.state = event.target.alt;
    this.props.history.push(`/character_quote/character`);
    }

  handleDelete(event) {
    console.log(this);
    event.preventDefault();
    this.props.deleteProfile(event.target.value, this.props.history);
}


  render(){
    return (
      <div>
      <Jumbotron>
      <Grid>
      <Row>
        {this.props.profiles.map((character, index) => (
          <div key={index}>
            <CharacterCard character={character}/>
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
    profiles: state.profiles
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteProfile: bindActionCreators(deleteProfile, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCharacterProfile);
