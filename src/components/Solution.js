import React, { Component } from 'react';
import Letter from './Letter'

class Solution extends Component {
  render() {
    //const letterStatus = this.props.letterStatus
    
    return (
    <div>
       <span> {this.props.solution.word.split("").map(m=><Letter letter={this.props.letterStatus[m]? m : "_ "}/>)}</span>
       <p> Hint :  { this.props.solution.hint}</p>
       
    </div>
    )
  }
}

export default Solution