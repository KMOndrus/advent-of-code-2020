'use strict';
const { readInterface } = require('../../utils/fileReader');

const day2Puzzle1 = async () => {
  const readFile = readInterface('puzzles/day2Puzzle1/puzzleInput.txt');
  let numberOfValidPasswords = 0;

  for await (const line of readFile){
    const lineParts = line.split(' ');
    const characterRange = getCharacterRange(lineParts[0]);
    const requiredCharacter = getRequiredCharacter(lineParts[1]);
    const passwordCharacters = getPasswordCharacters(lineParts[2]);

    if (passwordCharacters.hasOwnProperty(requiredCharacter) && inBetween(passwordCharacters[requiredCharacter], characterRange)) {
      ++ numberOfValidPasswords
    }
  }
  console.log(numberOfValidPasswords)
};

const getCharacterRange = inputString => {
  const characterRange = inputString.split('-');
  return characterRange.map(num => parseInt(num));
};

const getRequiredCharacter = inputString => {
  const colonIndex = inputString.indexOf(":");
  return inputString.substring(0, colonIndex);
};

const getPasswordCharacters = inputString => {
  const passwordCharacters = {};
  for (let i = 0; i < inputString.length; ++i){
    if (!passwordCharacters.hasOwnProperty(inputString[i])) {
      passwordCharacters[inputString[i]] = 1;
    } else {
      passwordCharacters[inputString[i]] += 1;
    }
  }
  return passwordCharacters;
};

const inBetween = (value, rangeArray) => {
  return value >= rangeArray[0] && value <= rangeArray[1];
};

module.exports = {
  day2Puzzle1
};
