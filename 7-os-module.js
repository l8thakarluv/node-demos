// GLOBALS - written in the notebook
// console.log(__dirname);
// console.log(__filename);

// require('./6-some-basics'); // executes addValues func inside module (5-some-basics file)

//////////////////////////////////Built in modules/////////////////////////////////

const os = require('os');

// info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(`system data`, currentOS);



