'use strict';
const { readInterface } = require('../../utils/fileReader');

const day2Puzzle2 = async () => {
  const readFile = readInterface('puzzles/day2/puzzleInput.txt');
  let numberOfValidPasswords = 0;

  for await (const line of readFile){
    const lineParts = line.split(' ');
    const characterLocations = getCharacterLocations(lineParts[0]);
    const requiredCharacter = getRequiredCharacter(lineParts[1]);
    const charsAtSpecifiedLocations = getCharsAtSpecifiedLocations(lineParts[2], characterLocations);
    if (isPasswordValid(requiredCharacter, charsAtSpecifiedLocations)){
      ++numberOfValidPasswords;
    }
  }
  console.log(numberOfValidPasswords)
};

const getCharacterLocations = inputString => {
  const characterRange = inputString.split('-');
  return characterRange.map(num => parseInt(num));
};

const getRequiredCharacter = inputString => {
  const colonIndex = inputString.indexOf(":");
  return inputString.substring(0, colonIndex);
};

const getCharsAtSpecifiedLocations = (string, stringLocationsArray) => {
  const char1 = string.charAt(stringLocationsArray[0] - 1);
  const char2 = string.charAt(stringLocationsArray[1] - 1);
  return [char1, char2];
};

const isPasswordValid = (requiredChar, locationCharArray) => {
  if (locationCharArray[0] === locationCharArray[1]){
    return false;
  } else return locationCharArray.includes(requiredChar);
};

module.exports = {
  day2Puzzle2
};
