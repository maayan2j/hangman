import React, { Component } from 'react';

class Letter extends Component {

  selectLetter = () =>{
    if (this.props.className===`not-crossed`){
    this.props.selectLetter(this.props.letter)
    }
  }

  render() {
    return (<span onClick={this.selectLetter} className={this.props.className}>{this.props.letter}</span>)
  }
}

export default Letter