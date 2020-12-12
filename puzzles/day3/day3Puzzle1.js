'use strict';
const { readInterface } = require('../../utils/fileReader');

const day3Puzzle1 = async () => {
  const readFile = readInterface('puzzles/day3/puzzleInput.txt');
  let lineCount = 0;
  let treesIWillHit = 0;

  for await (const line of readFile) {
    const indexInLine = lineCount * 3;
    let newLine = line;
    while (indexInLine >= newLine.length) {
      newLine += line;
    }
    if (newLine.charAt(indexInLine) === '#') {
      ++treesIWillHit;
    }
    ++lineCount;
  }
  console.log(treesIWillHit);
};

module.exports = {
  day3Puzzle1
};
