'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _MagicIDContract = require('./build/MagicIDContract.json');

var _MagicIDContract2 = _interopRequireDefault(_MagicIDContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_MagicIDContract2.default.interface), '0x26576ea0a832FF86124ce0f10aC64aC89d0A5cBf');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxNYWdpY0lEQ29udHJhY3QuanMiXSwibmFtZXMiOlsid2ViMyIsIm1hZ2ljSUQiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEI7Ozs7OztBQUVBLElBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDZixLQUFLLEFBQUwsTUFBVywwQkFBUSxBQUFuQixBQURlLFlBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6Ik1hZ2ljSURDb250cmFjdC5qcyIsInNvdXJjZVJvb3QiOiJFOi9Db29sIFN0dWZmL1Byb2plY3RzL0FpY3VtZW4tVGFzayJ9