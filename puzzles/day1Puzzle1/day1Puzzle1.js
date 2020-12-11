'use strict';
const { readInterface } = require('../../utils/fileReader');

const day1Puzzle1 = async () => {
  const EXPECTED_SUM = 2020;
  const expenseValues = new Set();
  const readFile = readInterface('puzzles/day1Puzzle1/puzzleInput.txt');

  for await (const line of readFile) {
    const numericLine = parseInt(line.trim());
    const differenceFromExpectedSum = EXPECTED_SUM - numericLine;
    const hasMatch = expenseValues.has(differenceFromExpectedSum);

    if (hasMatch) {
      const product = numericLine * differenceFromExpectedSum;
      console.log(`${numericLine} * ${differenceFromExpectedSum} = ${product}`);
      break;
    }
    expenseValues.add(numericLine);
  }
};

module.exports = {
  day1Puzzle1
};
