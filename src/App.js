// src/App.js
import React, { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';
import Controlls from './components/Controlls';
import { solveSudoku } from './utils/solver';
import './App.css'; // For overall styling

const App = () => {
  // Initialize a 9x9 grid with nulls
  const [grid, setGrid] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(null))
  );

  const handleChange = (row, col, value) => {
    const newGrid = grid.map(row => row.slice());
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const handleSolve = () => {
    const solution = solveSudoku(grid);
    if (solution) {
      setGrid(solution);
    } else {
      alert('No solution found!');
    }
  };

  const handleClear = () => {
    setGrid(Array.from({ length: 9 }, () => Array(9).fill(null)));
  };

  return (
    <div className="app">
      <h1>Sudoku Solver</h1>
      <div style={{justifyContent: 'center'}}>
      <SudokuGrid grid={grid} onChange={handleChange} />
      </div>
      <Controlls onSolve={handleSolve} onClear={handleClear} />
    </div>
  );
};

export default App;
