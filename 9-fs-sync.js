const { readFileSync, writeFileSync } = require('fs');

///////////////or//////////////////

// const fs = require('fs'); 
// fs.readFileSync();

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/merged-files-result.txt', `Here is the result: ${first} ${second}`);

// by default writefilesync overrides old with new content

writeFileSync('./content/merged-files-result.txt', `New Content appended`, { flag: 'a' }); // flag a stands for 'append'