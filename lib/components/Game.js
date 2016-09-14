import React from 'react';

class Game extends React.Component {

  constructor() {

    super();
    this.state = {
      lastGuess: null,
      lastGuessMessage: null,
      guessReaction: null
    }

    this.getGuessInput=this.getGuessInput.bind(this)
    this.updateGuess=this.updateGuess.bind(this)
    this.checkGuess=this.checkGuess.bind(this)
    this.clearLastGuess=this.clearLastGuess.bind(this)
  }

    getGuessInput(event) {
      let guess = event.target.value
      this.state.lastGuess = +guess
    }

    clearGuessInput() {
      document.querySelector('.guess-input').value = ''
    }

    updateGuess() {
      const { lastGuess } = this.state
      this.setState({ lastGuessMessage: `Last guess: ${lastGuess}` })
      this.checkGuess();
      this.clearGuessInput();
    }

    clearLastGuess() {
      this.props.resetGameAfterWin();
      this.setState({ lastGuessMessage: null, lastGuess: null});
    }

    checkGuess() {
      const { lastGuess } = this.state;
      if (lastGuess < this.props.min || lastGuess > this.props.max) {
        return this.state.guessReaction = 'That guess is outside the acceptable range'
      }
      if (lastGuess < this.props.randomNumber) {
        this.setState({ guessReaction: 'Too low, try again.' })
      }
      if (lastGuess > this.props.randomNumber) {
        this.setState({ guessReaction: 'Too high, try again.'})
      }
    }

  render() {

    if (this.state.lastGuess === this.props.randomNumber) {
      return (
        <section>
        <h1>You are lord of the number guesser.</h1>
          <button
            className="reset-game"
            onClick={this.clearLastGuess}
            >
            Play again
          </button>
        </section>
      )
    }

    if (this.state.lastGuess !== this.props.randomNumber){
      return (
        <section>

          <h3>Pick a number between {this.props.min} and {this.props.max}</h3>

          <h2>{this.state.lastGuessMessage}</h2>

          <h3>{this.state.guessReaction}</h3>

          <input
            type="number"
            className="guess-input"
            placeholder="Your guess here"
            onChange={this.getGuessInput}
            />

          <button
            className="submit-guess"
            onClick={this.updateGuess}
            >
            Submit guess
          </button>

          <button
            className="reset-game"
            onClick={this.props.clearGame}>
            Clear Game
            </button>
      </section>
      )
    }
  }
}

export default Game
