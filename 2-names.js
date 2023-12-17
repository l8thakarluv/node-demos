// local - not shared
const secret = 'SUPER SECRET';

// shared
const john = 'john';
const peter = 'peter';

// sharing among project files
module.exports = { john, peter }

console.log(module);