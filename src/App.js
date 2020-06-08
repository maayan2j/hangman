//import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Letters from './components/Letters';
import Score from './components/Score';
import Solution from './components/Solution';
import EndGame from './components/EndGame';

//this.state.letterStatus[A] true\false

class App extends Component {
  constructor() {
    super()
    this.state = {
      letterStatus: this.generateLetterStatuses(),

      solution: {
        word: "MUSE",
        hint: "Rock-Band"
      },

      score: 100
    }

  }

  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }


  selectLetter = (l) => {
    const currentLetterStatus = { ...this.state.letterStatus }
    currentLetterStatus[l] = true
    let setScore = this.state.score
    
    if(this.state.solution.word.includes(l))
        {      
        setScore += 5
        }
          else 
          {
          setScore -= 20
          }

    this.setState({
      letterStatus: currentLetterStatus,
      score : setScore
    })

  }

  

  render() {
    return (
      <div >

        <Score score={this.state.score} />
        <Solution solution={this.state.solution} letterStatus={this.state.letterStatus} />
        <Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} />
        <EndGame score={this.state.score} word={this.state.solution.word} letterStatus={this.state.letterStatus}/>

      </div>

    );
  }

}


export default App;
