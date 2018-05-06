'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _ContractABI = require('./ContractABI.json');

var _ContractABI2 = _interopRequireDefault(_ContractABI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const magicID = require('./ContractABI');

var instance = new _web2.default.eth.Contract(_ContractABI2.default.interface, '0x651855667cbbffbf6e148e8ab17c5a71cd31466d');

// The above instance is for Kovan
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxNYWdpY0lEQ29udHJhY3QuanMiXSwibmFtZXMiOlsid2ViMyIsIm1hZ2ljSUQiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEI7Ozs7OztBQUNBOztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZCxzQkFBUSxBQURNLFdBRWYsQUFGZSxBQUFqQjs7QUFLQSxBQUNBO2tCQUFlLEFBQWYiLCJmaWxlIjoiTWFnaWNJRENvbnRyYWN0LmpzIiwic291cmNlUm9vdCI6IkU6L0Nvb2wgU3R1ZmYvUHJvamVjdHMvQWljdW1lbi1UYXNrIn0=