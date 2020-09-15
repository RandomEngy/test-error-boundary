import './App.css';

import React from 'react';

class App extends React.Component {
  render() {
    if (this.props.test) {
      return <h1>Hello!</h1>;
    } else {
      throw new Error("uh oh");
    }
  }
}

export default App;
