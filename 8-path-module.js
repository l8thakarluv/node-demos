const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log('filepath----------', filePath);

const basename = path.basename(filePath);
console.log('basename', basename);

const absolutePath = path.resolve(__dirname, filePath);
console.log(absolutePath);