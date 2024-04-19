
const fs = require('fs');
require("@nomicfoundation/hardhat-toolbox");

const privateKey = fs.readFileSync('.secret').toString().trim();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

netwoorks: {
  hardhat: {
    chainId: 11155111,
  }

},

  solidity: "0.8.24",
};


//11155111  1337