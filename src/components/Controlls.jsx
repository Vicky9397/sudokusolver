// src/components/Controls.js
import React from 'react';

const Controls = ({ onSolve, onClear, onDifficultyChange }) => {
  return (
    <div className="controls">
      <button onClick={onSolve}>Solve</button>
      <button onClick={onClear}>Clear</button>
      <select onChange={(e) => onDifficultyChange(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
};

export default Controls;
