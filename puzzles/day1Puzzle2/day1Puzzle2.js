'use strict';

const fs = require('fs');
const readline = require('readline');

const day1Puzzle2 = async () => {
  const EXPECTED_SUM = 2020;
  const expensesSet = new Set();
  const expensesArray = [];
  const readInterface = readline.createInterface({
    input: fs.createReadStream('puzzles/day1Puzzle1/puzzleInput.txt')
  });

  for await (const line of readInterface) {
    let isAnswerFound = false;
    const numericLine = parseInt(line.trim());
    const difference1 = EXPECTED_SUM - numericLine;

    expensesArray.some(value => {
      const difference2 = difference1 - value;
      const hasMatch = expensesSet.has(difference2);

      if (hasMatch) {
        const product = numericLine * value * difference2;
        console.log(`${numericLine} * ${value} * ${difference2} = ${product}`);
        isAnswerFound = true;
        return true;
      }
    });

    if (isAnswerFound) {
      break;
    }
    expensesSet.add(numericLine);
    expensesArray.push(numericLine);
  }
};

module.exports = {
  day1Puzzle2
};
