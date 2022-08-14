// FILE SYSTEM MODULE - ASYNCHRONOUS (NON-BLOCKING), SYNCHRONOUS (BLOCKING)
// THIS MODULE IS FOR THE SYNCHRONOUS ONE
import { readFileSync, writeFileSync } from 'fs';
console.log('start');

// You will get a Buffer if you don't pass in the utf encoding. What is a Buffer?
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// If file does not exists, node will create one. Else, node will overwrite the values in the file
// Add the flag property creates a new line with the content passed in. Node doesn't override
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);
console.log('done with this task');
console.log('starting the next one');
