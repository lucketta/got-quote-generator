import React, { Component } from 'react';
import { Jumbotron, Grid, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as quotes from '../actions/quoteCreators';
import * as profiles from '../actions/profiles';

import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import RenderCharacterQuote from '../components/RenderCharacterQuote';
import RenderCharacterProfile from '../components/RenderCharacterProfile';



class CharacterQuote extends Component {
  componentWillMount () {
    this.props.quotes.fetchQuote(this.props.history.state);
    this.props.profiles.fetchProfiles();
  }

    render() {
      return (
        <div>
          <Jumbotron>
          <Grid>
          <Row>
            {this.props.profile.length > 0 ? <RenderCharacterProfile history={this.props.history} /> : <div>Loading</div>}
          </Row>
          </Grid>
        </Jumbotron>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    quote: state.quote,
    profile: state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    quotes: bindActionCreators(quotes, dispatch),
    profiles: bindActionCreators(profiles, dispatch)
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CharacterQuote,RenderCharacterQuote, RenderCharacterProfile));
