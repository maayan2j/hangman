import React, { Component } from 'react';

class EndGame extends Component {


  gameEnded = () => {

    const score = this.props.score
    const letterStatus = this.props.letterStatus

    if (score <= 0){
      return true
    }
    for (let letter of this.props.word)
    {
      if (!letterStatus[letter])
      {
        return false
      }
    }
    return true

  }



  render() {

    return (
    <div>{ this.gameEnded() ?  ( (this.props.score > 0) ? alert("Congratulations"): alert(this.props.word)) :  null }</div>
    )
  }
}

export default EndGame
