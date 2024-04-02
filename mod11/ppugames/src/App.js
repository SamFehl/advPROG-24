import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'P' : 'U';
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

const getWinner = () => {
  if (winner) {
    document.getElementById("winnerBoard").style.display = "block";
    return `${winner} wins!`;
  }
  else {
    document.getElementById("winnerBoard").style.display = "none";
  }
}

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'Draw';
    } else {
      return `Next player: ${xIsNext ? 'P' : 'U'}`;
    }
  };

  //ADD CLASS NAMES IN CSS FILE
  return (
    <div className="game">
      <h1 className="title">Pic Pac Uoe - Tic Tac Toe for PPU Students</h1>
      <div className="winnerBoard" id="winnerBoard">{getWinner()}</div>
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

export default TicTacToe;