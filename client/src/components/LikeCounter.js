import React, { Component } from 'react';
import { Button } from 'react-bootstrap';



class LikeCounter extends Component {
  constructor() {
    super();


    this.state = {
      counter: 0
    }
  }

  handleLike = () => {
    this.setState({counter: this.state.counter + 1});
  }

render() {
  console.log("hey");

  return (
    <div>
    <Button className="like" onClick={this.handleLike}>Like</Button>
    {this.state.counter}

    </div>

)}
}

export default LikeCounter;
