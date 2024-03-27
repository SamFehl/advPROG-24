import React, { useState, Component } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);

    if(calculateWinner(newBoard)) {
      setWinner(calculateWinner(newBoard));
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'Draw';
    } else {
      return `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
  };

  //ADD CLASS NAMES IN CSS FILE
  return (
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">
        <div>{getStatus()}</div>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
};



class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count1: 0, count2: 0};
  }

  render() {
    return (
      <div>
        <p className='text'>Player 1: {this.state.count1}</p>
        <button className='counters' onClick={() => this.setState({ count1: this.state.count1 + 1})}>Increment</button>
        <p className='text'>Player 2: {this.state.count2}</p>
        <button className='counters' onClick={() => this.setState({ count2: this.state.count2 + 1})}>Increment</button>
      </div>
    );
  }
}

export default TicTacToe;

/*
import React from 'react';

const Greeting = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
};

export default Greeting;

import React from 'react';

const Button = () => {
  const handleClick = () => {
    alert('Button was clicked.');
  };

  return <button onClick={handleClick}>Submit</button>;
};

export default Button;

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count1: 0, count2: 0};
  }

  render() {
    return (
      <div>
        <p>Player 1: {this.state.count1}</p>
        <button onClick={() => this.setState({ count1: this.state.count1 + 1})}>Increment</button>
        <p>Player 2: {this.state.count2}</p>
        <button onClick={() => this.setState({ count2: this.state.count2 + 1})}>Increment</button>
      </div>
    );
  }
}

export default Counter;

import React from 'react';

const Welcome = (props) => {
  return <h1>Welcome, {props.name}!</h1>;
};

export default Welcome;


const Greeting = () => {
  return <h1>Greetings Meat Enjoyers!</h1>
};

export default Greeting;*/

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
