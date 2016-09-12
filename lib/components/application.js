import React from 'react';
import LastGuess from './last-guess'
import GuessInput from './guess-input'

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      randomNumber: this.generateRandomNumber(),
      guessInput: null,
      lastGuess: null,
      guessReaction: null
    }
    this.getGuessInput = this.getGuessInput.bind(this);
    this.updateLastGuess = this.updateLastGuess.bind(this);
    this.setRandomNumber = this.setRandomNumber.bind(this);
    this.reactToGuess = this.reactToGuess.bind(this);
  }

  getGuessInput(event) {
    let userGuessInput = event.target.value;
    this.setState({guessInput: +userGuessInput})
    // this.setState({lastGuess: +userGuessInput})
  }

  updateLastGuess() {
    let userGuess = this.state.guessInput;
    this.state.lastGuess =  userGuess;
    this.reactToGuess();
  }

  generateRandomNumber() {
    return Math.ceil(Math.random() * 10)
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
    }
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

      <GuessInput
      getGuess={this.getGuessInput}
      updateLastGuess={this.updateLastGuess}
      setRandomNumber={this.setRandomNumber}
      />

      </section>
    )
  }
}


}


export default Application;
