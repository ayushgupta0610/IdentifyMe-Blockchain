import web3 from './web3';
import magicID from './build/MagicIDContract.json';

const instance = new web3.eth.Contract(
  JSON.parse(magicID.interface),
  '0x26576ea0a832FF86124ce0f10aC64aC89d0A5cBf'
);

export default instance;
