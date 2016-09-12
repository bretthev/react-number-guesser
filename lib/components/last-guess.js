import React from 'react';

class LastGuess extends React.Component {

  render() {
    return (
      <section>
        <h1 className="last-guess">You guessed {this.props.lastGuess}.</h1>
        <h2 className="guess-reaction">{this.props.guessReaction}</h2>
      </section>
    )
  }
}

export default LastGuess;
