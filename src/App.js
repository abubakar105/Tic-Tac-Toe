import React, { useState } from 'react'
import Board from './components/Board'
import './App.css'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const winnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  const checkWinner = (board) => {
    for (let i = 0; i < winnerCondition.length; i++) {
      const [a, b, c] = winnerCondition[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const winner = checkWinner(board);
  const isBoardFull = board.every((cell) => cell !== null);

  const clickHandle = (index) => {
    const updatedBoard = [...board];
    if (winner === null && updatedBoard[index] === null) {
      updatedBoard[index] = isX ? "X" : "O";
    }
    setIsX(!isX);
    setBoard(updatedBoard);
  };
  const restart = () => {
    setBoard(Array(9).fill(null))
  }
  return (
    <div className='container'>
      <Board board={board} clickHandle={clickHandle} />
      <button className='button' onClick={restart}>Restart</button>
      {winner && <h1 className='winner'>Player " {winner} " is the winner</h1>}
      {!winner && isBoardFull && <h1 className='winner'>It's a draw!</h1>}

    </div>
  );
};

export default App;
