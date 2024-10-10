// src/components/SudokuGrid.js
import React from 'react';
import Cell from './Cell';
import './SudokuGrid.css'; // For styling

const SudokuGrid = ({ grid, onChange }) => {
  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onChange={(value) => onChange(rowIndex, colIndex, value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
