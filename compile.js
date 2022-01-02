// compile code will go here
const path = require("path");
const fs = require("fs");
const solc = require("solc");

// creates a path to contract (sol file)
const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");

// add # of contracts to compile
console.log(solc.compile(source, 1));

// export bytecode and interface 
module.exports = solc.compile(source, 1).contracts[":Inbox"];