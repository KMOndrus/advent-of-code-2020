/*****************************************************************
 * This project compiles all work to solve 2020 Advent of Code
 * puzzles.  Each puzzle is in it's own file and can be run by
 * uncommenting the function call below and using npm run start
 ****************************************************************/
'use strict';
const { day1Puzzle1 } = require('./puzzles/day1/day1Puzzle1');
const { day1Puzzle2 } = require('./puzzles/day1/day1Puzzle2');
const { day2Puzzle1 } = require('./puzzles/day2/day2Puzzle1');
const { day2Puzzle2 } = require('./puzzles/day2/day2Puzzle2');
const { day3Puzzle1 } = require('./puzzles/day3/day3Puzzle1');
const { day3Puzzle2 } = require('./puzzles/day3/day3Puzzle2');

// day1Puzzle1();
// Your puzzle answer was 972576

// day1Puzzle2();
// Your puzzle answer was 199300880

// day2Puzzle1();
// Your puzzle answer was 546

// day2Puzzle2();
// Your puzzle answer was 275

// day3Puzzle1();
// Your puzzle answer was 254

const arrayOfSlopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];
// day3Puzzle2(arrayOfSlopes);
// Your puzzle answer was 1666768320
