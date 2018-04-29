// var Migrations = artifacts.require("E:/Cool Stuff/Projects/Aicumen-Task/contracts/Migrations.sol");
var MagicContract = artifacts.require("E:/Cool Stuff/Projects/Aicumen-Task/contracts/MagicContract.sol");

module.exports = function(deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(MagicContract);
};
