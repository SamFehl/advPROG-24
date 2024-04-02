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
      if (squares[a] && squares[a] === squares[b] && squares[c] === squares[a]) {
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
        <div className="game-status">{getStatus()}</div>
        <button onClick={resetGame} className="game-reset">Reset Game</button>
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
        <button className='counters' onClick={() => this.setState({ count1: this.state.count1 + 1})}>Add</button>
        <button className='counters' onClick={() => this.setState({ count1: this.state.count1 - 1})}>Subtract</button>
        <p className='text'>Player 2: {this.state.count2}</p>
        <button className='counters' onClick={() => this.setState({ count2: this.state.count2 + 1})}>Add</button>
        <button className='counters' onClick={() => this.setState({ count2: this.state.count2 - 1})}>Subtract</button>
      </div>
    );
  }
}

//export default TicTacToe;
export default Counter;