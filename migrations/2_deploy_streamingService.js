var StreamingService = artifacts.require("StreamingService");
module.exports = function(deployer, network, accounts) {
 deployer.deploy(StreamingService,{from: accounts[0]});
};