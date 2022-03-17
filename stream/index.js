const fs = require('fs');
const { resolve } = require('path');

const readableStream = fs.createReadStream('input.txt', {
  highWaterMark: 15,
});

const writableStream = fs.createWriteStream('output.txt');

readableStream.on('readable', () => {
  try {
    //process.stdout.write(`[${readableStream.read()}]`);
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on('end', () => {
  writableStream.end();
});