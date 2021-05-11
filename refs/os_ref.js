const os = require('os');

// Platform
console.log(os.platform());

// Architecture of the operating system CPU
console.log(os.arch());

// Information about each logical CPU core
// console.log(os.cpus());

// Free system memory
console.log(os.freemem());

// Total amount of system memory
console.log(os.totalmem());

// The string path of the current user's home directory
console.log(os.homedir());

// The system uptime in number of seconds
console.log(os.uptime());
