import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value:'',
    counter: 0
  }
  
  handleChange = (event) => {
    
    this.setState({
      value: event.target.value,
      counter: event.target.value.length
    })
    
  }
  render() {
    return (
      <div className="container">
        <textarea onChange={this.handleChange} rows="3"></textarea>
        <div className="counter">{ this.state.counter }</div>
      </div>
    );
  }
}

export default App;
