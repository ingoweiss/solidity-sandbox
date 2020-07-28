const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())

let { abi, bytecode } = require('../build/contracts/Sandbox.json');
let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  sandbox = await new web3.eth.Contract(abi)
    .deploy({
      data: bytecode,
      arguments: ['Hi there!']
    })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Sandbox', () => {
  it('deploys a contract', () => {
    assert.ok(sandbox.options.address);
  });

  it('has a default message', async () => {
    const message = await sandbox.methods.message().call();
    assert.equal(message, 'Hi there!');
  });

  it('can change the message', async () => {
    await sandbox.methods.setMessage('Bye!').send({ from: accounts[0] });
    const message = await sandbox.methods.message().call();
    assert.equal(message, 'Bye!');
  });
});
