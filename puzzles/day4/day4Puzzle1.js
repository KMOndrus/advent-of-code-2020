'use strict';
const { readInterface } = require('../../utils/fileReader');

const day4Puzzle1 = async () => {
  const passports = await getPassports();
  const numValidPassports = validatePassports(passports);
  console.log(numValidPassports)
};

const getPassports = async () => {
  const readFile = readInterface('puzzles/day4/puzzleInput.txt');
  const rawPassports = [];
  let currentPassportNumber = 0;

  for await (const line of readFile) {
    if (line !== '' && rawPassports[currentPassportNumber]) {
      rawPassports[currentPassportNumber] += ' ' + line;
    } else if (line !== '') {
      rawPassports[currentPassportNumber] = line;
    } else {
      ++currentPassportNumber
    }
  }

  return formatPassports(rawPassports);
};

const formatPassports = passports => {
  return passports.map(curInfo => {
    const passportParts = curInfo.split(' ');
    const passportObject = {};

    for (let i = 0; i < passportParts.length; ++i) {
      const curField = passportParts[i];
      const fieldParts = curField.split(':');
      passportObject[fieldParts[0]] = fieldParts[1];
    }
    return passportObject;
  })
};

const validatePassports = passports => {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  let numberValidPassports = 0;

  for (let i = 0; i < passports.length; ++i) {
    const passportHasField = requiredFields.map(field => {
      return passports[i].hasOwnProperty(field);
    });

    if (!passportHasField.includes(false)) {
      ++numberValidPassports;
    }
  }
  return numberValidPassports;
};

module.exports = {
  day4Puzzle1
};
