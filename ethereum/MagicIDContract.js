import web3 from './web3';
import magicID from './ContractABI.json';
// const magicID = require('./ContractABI');

const instance = new web3.eth.Contract(
   magicID.interface,
  '0xede744f30c8518768594545c1c8acddab4b39afd'
);

// const instance = new web3.eth.contract(magicID.interface).at('0x651855667cbbffbf6e148e8ab17c5a71cd31466d');

// The above instance is for Kovan
export default instance;
