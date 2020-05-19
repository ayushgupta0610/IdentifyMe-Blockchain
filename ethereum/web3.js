import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  //We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://kovan.infura.io/v3/0cea9188cb7241d4a47c9b226e2c2451'
  );
  web3 = new Web3(provider);
}

export default web3;
