// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      gas: 8000000,
      network_id: '*' // Match any network id
    },
    kovan: {
      host: '127.0.0.1',
      port: 8545,
      gas: 8000000,
      network_id: 42
    }
  }
}
