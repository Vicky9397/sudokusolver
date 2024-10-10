// src/utils/solver.js

export const animateSolveSudoku = (grid, setGrid, speed = 100) => {
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
  
      // Check 3x3 box
      const boxRow = Math.floor(row / 3) * 3;
      const boxCol = Math.floor(col / 3) * 3;
      for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
          if (grid[r][c] === num) return false;
        }
      }
  
      return true;
    };
  
    const solveWithAnimation = async (grid) => {
      const current = findEmpty(grid);
      if (!current) return true; // Solved
  
      const [row, col] = current;
      for (let num = 1; num <= 9; num++) {
        if (isValid(grid, num, current)) {
          grid[row][col] = num;
          setGrid([...grid]); // Update the state to trigger re-render
          await new Promise((resolve) => setTimeout(resolve, speed)); // Add delay for animation
  
          if (await solveWithAnimation(grid)) return true;
          grid[row][col] = null;
          setGrid([...grid]); // Reset the state if backtracking
          await new Promise((resolve) => setTimeout(resolve, speed)); // Add delay for backtracking
        }
      }
  
      return false;
    };
  
    // Start solving the grid with animation
    solveWithAnimation(grid);
  };
  