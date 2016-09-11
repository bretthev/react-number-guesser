import React from 'react';
import LastGuess from './last-guess'

class Application extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className="application">
      <LastGuess />
      </section>
    )
  }


}


export default Application;
