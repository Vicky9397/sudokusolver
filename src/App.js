// src/App.js
import React, { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';
import Controlls from './components/Controlls';
import { animateSolveSudoku } from './utils/solver';
import { puzzles } from './utils/puzzles'; // Import predefined puzzles
import './App.css';

const App = () => {
  const [grid, setGrid] = useState(
    Array.from({ length: 9 }, () => Array(9).fill(null))
  );

  const handleChange = (row, col, value) => {
    const newGrid = grid.map(row => row.slice());
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  const handleSolve = () => {
    animateSolveSudoku(grid, setGrid, 50); // 100ms delay for animation
  };

  const handleClear = () => {
    setGrid(Array.from({ length: 9 }, () => Array(9).fill(null)));
  };

  const handleDifficultyChange = (difficulty) => {
    const selectedPuzzle = puzzles[difficulty];
    setGrid(selectedPuzzle);
  };

  return (
    <div className="app">
      <h1>Sudoku Solver</h1>
      <SudokuGrid grid={grid} onChange={handleChange} />
      <Controlls
        onSolve={handleSolve}
        onClear={handleClear}
        onDifficultyChange={handleDifficultyChange}
      />
    </div>
  );
};

export default App;
