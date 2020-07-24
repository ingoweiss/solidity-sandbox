const Sandbox = artifacts.require("Sandbox");

module.exports = function(deployer) {
  deployer.deploy(Sandbox);
};
