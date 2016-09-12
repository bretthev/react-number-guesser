import React from 'react';

class WelcomeScreen extends React.Component {
  render() {
    return (
    <section>
      <h1>Welcome to Number Guesser...in REACT</h1>
      <input
      className="min-range-input"
      type="number"
      placeholder="Minimum Number Here"
      onChange={this.props.getMinInput}
      />

      <input
      className="max-range-input"
      type="number"
      placeholder="Maximum Number Here"
      onChange={this.props.getMaxInput}
      />

      <button
      className="submit-range-button"
      onClick={this.props.setRandomNumber}>
      Submit Range
      </button>
    </section>
    )
  }
}

export default WelcomeScreen
