import React from 'react';

class LastGuess extends React.Component {
  constructor() {
    super();
  }

  getGuessInput() {
    return document.querySelector('.guess-input').value;
  }

  updateLastGuessDisplay(guess) {
    document.querySelector('.last-guess-display').textContent = guess;
  }

  sendGuessToStorage() {
    let lastGuess = parseInt(this.getGuessInput());
    this.updateLastGuessDisplay(lastGuess);
    localStorage.setItem('lastGuess', lastGuess)
  }

  render() {
    return (
      <section>
        <div className="last-guess-display">{localStorage.getItem('lastGuess')}
        </div>
          <p>Enter your guess.</p>
          <input type="number" className="guess-input" />
          <button className = "guess-submit"
          onClick={() => this.sendGuessToStorage()}>
          Submit Guess
          </button>
      </section>
    )
  }


}

export default LastGuess;
