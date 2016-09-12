import React from 'react';

class GuessInput extends React.Component {
  render() {
    return (
      <section>
        <input
        onChange={this.props.getGuess}
        type="number"
        placeholder="guess"/>

        <button
        className="submit-guess"
        onClick={this.props.updateLastGuess}>
        Submit Guess
        </button>

        <button
        className="start-game"
        onClick={this.props.setRandomNumber}>
        Restart game
        </button>
      </section>
    )
  }
}


export default GuessInput
