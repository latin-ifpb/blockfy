const path = require("path");
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "stock lyrics eternal spin balcony snack before board choose region balance clinic";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/6fd14f882465477eb2c2ebe25369703f");
      },
      develop: {
        port: 8545
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
}
