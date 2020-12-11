'use strict';

const fs = require('fs');
const readline = require('readline');

const readInterface = filePath => {
  return readline.createInterface({
    input: fs.createReadStream(filePath)
  });
};

module.exports = {
  readInterface
};
