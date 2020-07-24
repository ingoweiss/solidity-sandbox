# start ganache
truffle console
truffle(ganache)> const accounts = await web3.eth.getAccounts()
truffle(ganache)> const account1 = accounts[0]
truffle(ganache)> const sandbox = await Sandbox.deployed()
truffle(ganache)> sandbox.message()
truffle(ganache)> sandbox.setMessage('Blub', {from: account1})