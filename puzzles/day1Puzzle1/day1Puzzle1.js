'use strict';

const fs = require('fs');
const readline = require('readline');

const day1Puzzle1 = async () => {
  const EXPECTED_SUM = 2020;
  const expenseValues = new Set();
  const readInterface = readline.createInterface({
    input: fs.createReadStream('puzzles/day1Puzzle1/puzzleInput.txt')
  });

  for await (const line of readInterface) {
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
