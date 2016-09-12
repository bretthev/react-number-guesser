import React from 'react';
import LastGuess from './last-guess'
import GuessInput from './guess-input'
import WelcomeScreen from './WelcomeScreen'

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: null,
      guessInput: null,
      lastGuess: null,
      guessReaction: null,
      minRange: null,
      maxRange: null
    }
    this.getGuessInput = this.getGuessInput.bind(this);
    this.updateLastGuess = this.updateLastGuess.bind(this);
    this.setRandomNumber = this.setRandomNumber.bind(this);
    this.reactToGuess = this.reactToGuess.bind(this);
    this.clearGuessInputField = this.clearGuessInputField.bind(this);
    this.getMinInput = this.getMinInput.bind(this);
    this.getMaxInput = this.getMaxInput.bind(this);
    this.restartGame = this.resetGame.bind(this);
  }

  getGuessInput(event) {
    let userGuessInput = event.target.value;
    this.setState({guessInput: +userGuessInput})
  }

  getMinInput(event) {
    let userMinInput = event.target.value;
    this.state.minRange = +userMinInput;
  }

  getMaxInput(event) {
    let userMaxInput = event.target.value;
    this.state.maxRange = +userMaxInput;
  }


  updateLastGuess() {
    let userGuess = this.state.guessInput;
    this.state.lastGuess =  userGuess;
    this.reactToGuess();
    this.clearGuessInputField();
  }

  setRandomNumber() {
    let random = this.generateRandomNumber()
    this.setState({ randomNumber: random })
  }

  reactToGuess() {
    if (this.state.lastGuess > this.state.randomNumber) {
      this.setState({ guessReaction: 'That guess is too high. Try again.' })
    }
    if (this.state.lastGuess < this.state.randomNumber) {
      this.setState({ guessReaction: 'That guess is too low. Try again.' })
    }
    if (this.state.lastGuess === this.state.randomNumber) {
      this.setState({ guessReaction: 'Nailed it.' })
      this.state.randomNumber = this.setRandomNumber();
    }
  }

  setRandomNumber() {
    let min = this.state.minRange;
    let max = this.state.maxRange;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    this.state.randomNumber = randomNumber
  }

  resetGame() {
    debugger;
    this.setRandomNumber();
    this.setState({ lastGuess: null })
  }

  clearGuessInputField() {
    <input className="guess-input"
    value=''
    />
  }

  render() {

    if (this.state.lastGuess) {

    return (
      <section className="application">

      <LastGuess
      lastGuess={this.state.lastGuess}
      guessReaction={this.state.guessReaction}
      />

      <GuessInput
      getGuess={this.getGuessInput}
      updateLastGuess={this.updateLastGuess}
      />

      </section>
    )
  }

  else {
    return (
      <section className="application">

      <WelcomeScreen
      getMinInput={this.getMinInput}
      getMaxInput={this.getMaxInput}
      setRandomNumber={this.setRandomNumber}
      getMinInput={this.getMinInput}
      getMaxInput={this.getMaxInput}
      />

      <GuessInput
      getGuess={this.getGuessInput}
      updateLastGuess={this.updateLastGuess}
      resetGame={this.resetGame}
      />

      </section>
    )
  }
}


}


export default Application;
