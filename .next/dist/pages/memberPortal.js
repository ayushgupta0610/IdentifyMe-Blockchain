'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _MagicIDContract = require('../ethereum/MagicIDContract');

var _MagicIDContract2 = _interopRequireDefault(_MagicIDContract);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _bignumber = require('bignumber.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Cool Stuff\\Projects\\Aicumen-Task\\pages\\MemberPortal.js?entry';


// Work under progress. This might/will break the UI.

var MemberPortal = function (_Component) {
  (0, _inherits3.default)(MemberPortal, _Component);

  function MemberPortal() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MemberPortal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MemberPortal.__proto__ || (0, _getPrototypeOf2.default)(MemberPortal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      uin: '',
      name: '',
      gender: '',
      dob: '',
      parentName: '',
      personalAddress: '',
      mobile: '',
      email: '',
      iris_left: '',
      iris_right: '',
      face: '',
      right_finger_1: '',
      right_finger_2: '',
      right_finger_3: '',
      right_finger_4: '',
      right_finger_5: '',
      left_finger_1: '',
      left_finger_2: '',
      left_finger_3: '',
      left_finger_4: '',
      left_finger_5: '',
      agencyID: '',
      time_fence: '',
      location_fence: '',
      submitButton: false,
      authButton: false,
      authErrorMessage: '',
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var personal, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ submitButton: true, errorMessage: '' });

                personal = [_web2.default.utils.fromAscii(_this.state.name), _web2.default.utils.fromAscii(_this.state.gender), _web2.default.utils.fromAscii(_this.state.dob), _web2.default.utils.fromAscii(_this.state.parentName), _web2.default.utils.fromAscii(_this.state.personalAddress), _web2.default.utils.fromAscii(_this.state.mobile), _web2.default.utils.fromAscii(_this.state.email), _web2.default.utils.fromAscii(_this.state.iris_left), _web2.default.utils.fromAscii(_this.state.iris_right), _web2.default.utils.fromAscii(_this.state.face), _web2.default.utils.fromAscii(_this.state.right_finger_1), _web2.default.utils.fromAscii(_this.state.right_finger_2), _web2.default.utils.fromAscii(_this.state.right_finger_3), _web2.default.utils.fromAscii(_this.state.right_finger_4), _web2.default.utils.fromAscii(_this.state.right_finger_5), _web2.default.utils.fromAscii(_this.state.left_finger_1), _web2.default.utils.fromAscii(_this.state.left_finger_2), _web2.default.utils.fromAscii(_this.state.left_finger_3), _web2.default.utils.fromAscii(_this.state.left_finger_4), _web2.default.utils.fromAscii(_this.state.left_finger_5)];
                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return _MagicIDContract2.default.methods.createMagicID(_web2.default.utils.fromAscii(_this.state.uin), personal).send({ from: accounts[0] });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });

              case 14:
                _this.setState({ submitButton: false, uin: '',
                  name: '',
                  gender: '',
                  dob: '',
                  parentName: '',
                  personalAddress: '',
                  mobile: '',
                  email: '',
                  iris_left: '',
                  iris_right: '',
                  face: '',
                  right_finger_1: '',
                  right_finger_2: '',
                  right_finger_3: '',
                  right_finger_4: '',
                  right_finger_5: '',
                  left_finger_1: '',
                  left_finger_2: '',
                  left_finger_3: '',
                  left_finger_4: '',
                  left_finger_5: '',
                  agencyID: '',
                  time_fence: '',
                  location_fence: '' });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.authenticate = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var accounts, bigNumberTimeFence, locationFenceBytesArray;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault();
                _this.setState({ authButton: true, errorMessage: '' });
                _context2.prev = 2;
                _context2.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context2.sent;
                bigNumberTimeFence = new _bignumber.BigNumber(_this.state.time_fence);
                locationFenceBytesArray = _this.convertStringToBytesArray(_this.state.location_fence);

                console.log((0, _typeof3.default)(bigNumberTimeFence.toNumber()) + bigNumberTimeFence.toNumber());
                _context2.next = 11;
                return _MagicIDContract2.default.methods.authID(_web2.default.utils.fromAscii(_this.state.agencyID), bigNumberTimeFence.toNumber(), locationFenceBytesArray).send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei('0.01', 'ether')
                });

              case 11:
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2['catch'](2);

                _this.setState({ authErrorMessage: _context2.t0.message });

              case 16:
                _this.setState({ authButton: false });

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[2, 13]]);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MemberPortal, [{
    key: 'convertStringToBytesArray',
    value: function convertStringToBytesArray(str) {
      var stringArray = str.split(',');
      var bytesArray = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(stringArray), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          // console.log(element.replace(/^\s\s*/, '').replace(/\s\s*$/, ''));
          bytesArray.push(_web2.default.utils.fromAscii(element.replace(/^\s\s*/, '').replace(/\s\s*$/, '')));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return bytesArray;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, { activePage: 'MemberPortal', __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'Create your ID'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 9, __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, 'Unique Identity Number'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.uin,
        onChange: function onChange(event) {
          return _this3.setState({ uin: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, 'Name'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, 'Gender'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.gender,
        onChange: function onChange(event) {
          return _this3.setState({ gender: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, 'Date of birth'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.dob,
        onChange: function onChange(event) {
          return _this3.setState({ dob: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, 'Parent Name'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.parentName,
        onChange: function onChange(event) {
          return _this3.setState({ parentName: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, 'Personal Address'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.personalAddress,
        onChange: function onChange(event) {
          return _this3.setState({ personalAddress: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, 'Mobile'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.mobile,
        onChange: function onChange(event) {
          return _this3.setState({ mobile: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, 'Email'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.email,
        onChange: function onChange(event) {
          return _this3.setState({ email: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, 'Left iris'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.iris_left,
        onChange: function onChange(event) {
          return _this3.setState({ iris_left: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'Right iris'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.iris_right,
        onChange: function onChange(event) {
          return _this3.setState({ iris_right: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, 'Face'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.face,
        onChange: function onChange(event) {
          return _this3.setState({ face: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, 'Right Finger 1'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.right_finger_1,
        onChange: function onChange(event) {
          return _this3.setState({ right_finger_1: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, 'Right Finger 2'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.right_finger_2,
        onChange: function onChange(event) {
          return _this3.setState({ right_finger_2: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, 'Right Finger 3'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.right_finger_3,
        onChange: function onChange(event) {
          return _this3.setState({ right_finger_3: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, 'Right Finger 4'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.right_finger_4,
        onChange: function onChange(event) {
          return _this3.setState({ right_finger_4: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, 'Right Finger 5'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.right_finger_5,
        onChange: function onChange(event) {
          return _this3.setState({ right_finger_5: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, 'Left Finger 1'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.left_finger_1,
        onChange: function onChange(event) {
          return _this3.setState({ left_finger_1: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, 'Left Finger 2'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.left_finger_2,
        onChange: function onChange(event) {
          return _this3.setState({ left_finger_2: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, 'Left Finger 3'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.left_finger_3,
        onChange: function onChange(event) {
          return _this3.setState({ left_finger_3: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, 'Left Finger 4'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.left_finger_4,
        onChange: function onChange(event) {
          return _this3.setState({ left_finger_4: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, 'Left Finger 5'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.left_finger_5,
        onChange: function onChange(event) {
          return _this3.setState({ left_finger_5: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.submitButton, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, 'Create ID'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 7, __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, 'Authenticate your ID'), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.authenticate, error: !!this.state.authErrorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, 'Agency ID you want to authenticate to'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.agencyID,
        onChange: function onChange(event) {
          return _this3.setState({ agencyID: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        }
      }, 'Time(in seconds) your id should be accessible'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.time_fence,
        onChange: function onChange(event) {
          return _this3.setState({ time_fence: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }, 'Locations where your id can be accessed ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        }
      }), ' (Enter in comma seperated format)'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "40%" },
        value: this.state.location_fence,
        onChange: function onChange(event) {
          return _this3.setState({ location_fence: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.authErrorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.authButton, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, 'Authenticate'))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, 'To be decided')))));
    }
  }]);

  return MemberPortal;
}(_react.Component);

exports.default = MemberPortal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxNZW1iZXJQb3J0YWwuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkdyaWQiLCJMYXlvdXQiLCJMaW5rIiwiY29udHJhY3QiLCJ3ZWIzIiwiQmlnTnVtYmVyIiwiTWVtYmVyUG9ydGFsIiwic3RhdGUiLCJ1aW4iLCJuYW1lIiwiZ2VuZGVyIiwiZG9iIiwicGFyZW50TmFtZSIsInBlcnNvbmFsQWRkcmVzcyIsIm1vYmlsZSIsImVtYWlsIiwiaXJpc19sZWZ0IiwiaXJpc19yaWdodCIsImZhY2UiLCJyaWdodF9maW5nZXJfMSIsInJpZ2h0X2Zpbmdlcl8yIiwicmlnaHRfZmluZ2VyXzMiLCJyaWdodF9maW5nZXJfNCIsInJpZ2h0X2Zpbmdlcl81IiwibGVmdF9maW5nZXJfMSIsImxlZnRfZmluZ2VyXzIiLCJsZWZ0X2Zpbmdlcl8zIiwibGVmdF9maW5nZXJfNCIsImxlZnRfZmluZ2VyXzUiLCJhZ2VuY3lJRCIsInRpbWVfZmVuY2UiLCJsb2NhdGlvbl9mZW5jZSIsInN1Ym1pdEJ1dHRvbiIsImF1dGhCdXR0b24iLCJhdXRoRXJyb3JNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJwZXJzb25hbCIsInV0aWxzIiwiZnJvbUFzY2lpIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVNYWdpY0lEIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiYXV0aGVudGljYXRlIiwiYmlnTnVtYmVyVGltZUZlbmNlIiwibG9jYXRpb25GZW5jZUJ5dGVzQXJyYXkiLCJjb252ZXJ0U3RyaW5nVG9CeXRlc0FycmF5IiwiY29uc29sZSIsImxvZyIsInRvTnVtYmVyIiwiYXV0aElEIiwidmFsdWUiLCJ0b1dlaSIsInN0ciIsInN0cmluZ0FycmF5Iiwic3BsaXQi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QTJCO0FBRjVEOztvQkFBQTtzQkFWSixBQVFFLEFBRUUsQUFLRjtBQUxFOzJCQUtELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQStDOztvQkFBQTtzQkFBL0MsQUFBK0M7QUFBQTtBQUFBLFVBRGpELEFBQ0UsQUFDQSx1REFBQSxBQUFDLHdDQUFNLE9BQU8sRUFBRSxPQUFoQixBQUFjLEFBQVMsQUFDckI7ZUFBTyxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjtrQkFBVSx5QkFBQTtpQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGdCQUFnQixNQUFBLEFBQU0sT0FBL0MsQUFBUyxBQUFjLEFBQStCO0FBRmxFOztvQkFBQTtzQkFqQkosQUFlRSxBQUVFLEFBS0Y7QUFMRTsyQkFLRixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQXRCRixBQXNCRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixZQUFZLFNBQXhDO29CQUFBO3NCQUFBO0FBQUE7U0ExQkosQUFFRSxBQUNBLEFBdUJFLEFBR0YsbUNBQUMsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQTtBQUFBO0FBQUEsU0E1TE4sQUFDRSxBQUVBLEFBQ0UsQUEySkEsQUE2QkUsQUFVVDs7Ozs7QUE5U3dCLEEsQUFrVDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik1lbWJlclBvcnRhbC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi9Db29sIFN0dWZmL1Byb2plY3RzL0FpY3VtZW4tVGFzayJ9