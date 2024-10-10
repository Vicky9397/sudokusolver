// src/components/Cell.js
import React from 'react';
import './Cell.css'; // For styling

const Cell = ({ value, onChange }) => {
  const handleChange = (e) => {
    const val = e.target.value;
    if (val === '' || (/^[1-9]$/.test(val))) {
      onChange(val === '' ? null : parseInt(val, 10));
    }
  };

  return (
    <input
      className="sudoku-cell"
      type="text"
      value={value || ''}
      onChange={handleChange}
    />
  );
};

export default Cell;
