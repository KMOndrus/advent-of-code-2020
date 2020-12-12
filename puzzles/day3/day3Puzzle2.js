'use strict';
const { readInterface } = require('../../utils/fileReader');

const day3Puzzle2 = async arrayOfSlopes => {
  const readFile = readInterface('puzzles/day3/puzzleInput.txt');
  let lineCount = 0;
  const treesIWillHitArray = new Array(arrayOfSlopes.length).fill(0);

  for await (const line of readFile) {
    for (let i = 0; i < arrayOfSlopes.length; ++i) {
      const horizontalChange = arrayOfSlopes[i][0];
      const verticalChange = arrayOfSlopes[i][1];
      if (lineCount % verticalChange !== 0){
        break;
      }
      const indexInLine = (lineCount * horizontalChange) / verticalChange;
      let newLine = line;
      while (indexInLine >= newLine.length) {
        newLine += line;
      }
      if (newLine.charAt(indexInLine) === '#') {
        ++treesIWillHitArray[i];
      }
    }
    ++lineCount;
  }
  const result = treesIWillHitArray.reduce((accum, curVal) => accum * curVal );
  console.log(result);
};

module.exports = {
  day3Puzzle2
};
