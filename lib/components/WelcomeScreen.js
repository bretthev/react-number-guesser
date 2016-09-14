import React from 'react';

class WelcomeScreen extends React.Component {

  render() {
    return (
      <section>
        <h1>Welcome to Number Guesser...IN REACT</h1>
        <h2>Pick two numbers, please.</h2>
        
        <input
          className='.min-input'
          type='number'
          onChange={this.props.getRangeMin}
        />

        <input
          className='.max-input'
          type='number'
          onChange={this.props.getRangeMax}
        />

        <button
          className='submit-range'
          onClick={this.props.setGame}
          >
            Submit Numbers
        </button>
      </section>
    )
  }
}

export default WelcomeScreen
