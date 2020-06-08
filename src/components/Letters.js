import React, { Component } from 'react';
import Letter from './Letter'


class Letters extends Component {
  
  render() {
    const letterStatus = this.props.letterStatus
    
    return (
    <div>Available Letters<div>
     
    {Object.keys(letterStatus).map(l => letterStatus[l] ? <Letter className='crossed' letter={l} selectLetter={this.props.selectLetter} /> :
     <Letter className='not-crossed' letter={l}  selectLetter={this.props.selectLetter}/>) }
     </div>
    </div>
)

  }
}

export default Letters