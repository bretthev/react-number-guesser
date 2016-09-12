import React from 'react';

class GuessInput extends React.Component {
  render() {
    return (
      <section>
        <input
        className="guess-input"
        onChange={this.props.getGuess}
        type="number"
        placeholder="guess"/>

        <button
        className="submit-guess"
        onClick={this.props.updateLastGuess}>
        Submit Guess
        </button>

        <button
        className="restart-game"
        onClick={this.props.resetGame}>
        Restart game
        </button>
      </section>
    )
  }
}


export default GuessInput
