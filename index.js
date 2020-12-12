/*****************************************************************
 * This project compiles all work to solve 2020 Advent of Code
 * puzzles.  Each puzzle is in it's own file and can be run by
 * uncommenting the function call below and using npm run start
 ****************************************************************/
'use strict';
const { day1Puzzle1 } = require('./puzzles/day1Puzzle1/day1Puzzle1');
const { day1Puzzle2 } = require('./puzzles/day1Puzzle2/day1Puzzle2');
const { day2Puzzle1 } = require('./puzzles/day2Puzzle1/day2Puzzle1');
const { day2Puzzle2 } = require('./puzzles/day2Puzzle2/day2Puzzle2');
const { day3Puzzle1 } = require('./puzzles/day3/day3Puzzle1');
const { day3Puzzle2 } = require('./puzzles/day3/day3Puzzle2');

// day1Puzzle1();
// day1Puzzle2();

// day2Puzzle1();
// day2Puzzle2();

// day3Puzzle1();
const arrayOfSlopes = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];
day3Puzzle2(arrayOfSlopes);
