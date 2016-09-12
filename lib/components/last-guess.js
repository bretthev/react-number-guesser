import React from 'react';

class LastGuess extends React.Component {

  render() {
    return (
      <section>
        <h1>You guessed {this.props.lastGuess}.</h1>
        <h2>{this.props.guessReaction}</h2>
      </section>
    )
  }


}

export default LastGuess;
