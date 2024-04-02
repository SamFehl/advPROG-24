import React, { Component } from 'react';
import './TicTacToe.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count1: 0, count2: 0};
  }

  render() {
    return (
      <div>
        <p className='text'>Player 1: {this.state.count1}</p>
        <button className='counters' onClick={() => this.setState({ count1: this.state.count1 + 1})}>Add</button>
        <button className='counters' onClick={() => this.setState({ count1: this.state.count1 - 1})}>Subtract</button>
        <p className='text'>Player 2: {this.state.count2}</p>
        <button className='counters' onClick={() => this.setState({ count2: this.state.count2 + 1})}>Add</button>
        <button className='counters' onClick={() => this.setState({ count2: this.state.count2 - 1})}>Subtract</button>
      </div>
    );
  }
}

export default Counter;