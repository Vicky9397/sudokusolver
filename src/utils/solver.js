// src/utils/solver.js

export const solveSudoku = (grid) => {
    const findEmpty = (grid) => {
      for (let row = 0; row < 9; row++)
        for (let col = 0; col < 9; col++)
          if (grid[row][col] === null) return [row, col];
      return null;
    };
  
    const isValid = (grid, num, pos) => {
      const [row, col] = pos;
  
      // Check row
      if (grid[row].includes(num)) return false;
  
      // Check column
      for (let i = 0; i < 9; i++) {
        if (grid[i][col] === num) return false;
      }
  
      // Check box
      const boxRow = Math.floor(row / 3) * 3;
      const boxCol = Math.floor(col / 3) * 3;
      for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
          if (grid[r][c] === num) return false;
        }
      }
  
      return true;
    };
  
    const backtrack = (grid) => {
      const current = findEmpty(grid);
      if (!current) return grid; // Solved
  
      const [row, col] = current;
      for (let num = 1; num <= 9; num++) {
        if (isValid(grid, num, current)) {
          grid[row][col] = num;
          const result = backtrack(grid);
          if (result) return result;
          grid[row][col] = null;
        }
      }
      return null; // Trigger backtracking
    };
  
    // Deep copy the grid to avoid mutating the original
    const gridCopy = grid.map(row => row.slice());
    return backtrack(gridCopy);
  };
  