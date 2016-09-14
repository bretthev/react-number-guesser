import React from 'react';
// import LastGuess from './last-guess'
import Game from './Game'
import WelcomeScreen from './WelcomeScreen'
class Application extends React.Component {

  constructor() {

    super();
    this.state = {
      min: null,
      max: null,
      randomNumber: false,
    }

    this.getRangeMin = this.getRangeMin.bind(this)
    this.getRangeMax = this.getRangeMax.bind(this)
    this.setGame = this.setGame.bind(this)
    this.resetGameAfterWin = this.resetGameAfterWin.bind(this)
    this.clearGame = this.clearGame.bind(this)
  }

  setGame() {
    const { min, max } = this.state
    let random = Math.floor(Math.random()* (max - min + 1)) + min;
    this.setState({ randomNumber: random })
  }

  resetGameAfterWin() {
    const { min, max } = this.state;
    let newMin = min - 10;
    let newMax = max + 10;
    let random = Math.floor(Math.random()* (newMax - newMin + 1)) + newMin;
    this.setState({ min: newMin, max: newMax, randomNumber: random })
  }

  clearGame() {
    this.setState({ randomNumber: null })
  }

  getRangeMin(event) {
    let min = event.target.value
    this.state.min = +min
  }

  getRangeMax(event) {
    let max =  event.target.value
    this.state.max = +max
  }

  render() {

    if (!this.state.randomNumber) {
      return (
        <WelcomeScreen
        setGame = {this.setGame}
        getRangeMin = {this.getRangeMin}
        getRangeMax = {this.getRangeMax}
        />
      )
    }

    if (this.state.randomNumber) {
      return (
        <Game
          min = {this.state.min}
          max = {this.state.max}
          randomNumber = {this.state.randomNumber}
          resetGameAfterWin = {this.resetGameAfterWin}
          clearGame = {this.clearGame}
        />
      )
    }
  }

}

export default Application;
