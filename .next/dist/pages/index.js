'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Cool Stuff\\Projects\\Aicumen-Task\\pages\\index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      agencyID: '',
      isActive: 'true',
      setAccessMessage: '',
      setAccessButton: false
    }, _this.setAccess = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ setAccessButton: true, setAccessMessage: '' });

                _context.prev = 2;

                debugger;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return _MagicIDContract2.default.methods.setAgencyAccess(_web2.default.utils.fromAscii(_this.state.agencyID), Boolean(_this.state.isActive)).send({ from: accounts[0] });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({ setAccessMessage: _context.t0.message });

              case 14:
                _this.setState({ setAccessButton: false, agencyID: '', isActive: 'true' });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Home, [{
    key: 'renderMemberID',
    value: function renderMemberID() {
      var items = this.props.allMemberID.map(function (uin) {
        return {
          header: uin,
          style: { overflowWrap: 'break-word', border: '1px dashed blue' }
        };
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }, {
    key: 'renderAgencyID',
    value: function renderAgencyID() {
      var items = this.props.allAgencyID.map(function (agencyID) {
        return {
          header: agencyID,
          style: { overflowWrap: 'break-word', border: '1px dashed green' }
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, { activePage: 'index', __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, ' Set Agency Active '), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.setAccess, error: !!this.state.setAccessMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Group, { inline: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, 'Set access to agency'), _react2.default.createElement(_semanticUiReact.Input, { style: { width: "20%" },
        value: this.state.agencyID,
        onChange: function onChange(event) {
          return _this3.setState({ agencyID: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('label', { style: { marginLeft: '10px' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, 'Set(true) or Withdraw(false) Access'), _react2.default.createElement(_semanticUiReact.Form.Radio, { label: 'True', value: 'true', checked: this.state.isActive == 'true', onChange: function onChange(event, _ref3) {
          var value = _ref3.value;
          _this3.setState({ isActive: value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Radio, { label: 'False', value: 'false', checked: this.state.isActive == 'false', onChange: function onChange(event, _ref4) {
          var value = _ref4.value;
          _this3.setState({ isActive: value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.setAccessButton, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Set Access'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.setAccessMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }), ' ', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, ' Member IDs'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, this.renderMemberID())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, ' Agency IDs'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, this.renderAgencyID())))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var memberCount, agencyCount, allMemberID, allAgencyID;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _MagicIDContract2.default.methods.getMemberCount().call();

              case 2:
                memberCount = _context2.sent;
                _context2.next = 5;
                return _MagicIDContract2.default.methods.getAgencyCount().call();

              case 5:
                agencyCount = _context2.sent;
                _context2.next = 8;
                return _promise2.default.all(Array(parseInt(memberCount)).fill().map(function (element, index) {
                  return _MagicIDContract2.default.methods.uinArray(index).call();
                }));

              case 8:
                allMemberID = _context2.sent;
                _context2.next = 11;
                return _promise2.default.all(Array(parseInt(agencyCount)).fill().map(function (element, index) {
                  return _MagicIDContract2.default.methods.AccessAgencyArray(index).call();
                }));

              case 11:
                allAgencyID = _context2.sent;
                return _context2.abrupt('return', { allMemberID: allMemberID, allAgencyID: allAgencyID });

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _ref5.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJNZXNzYWdlIiwiSW5wdXQiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkxheW91dCIsIkxpbmsiLCJjb250cmFjdCIsIndlYjMiLCJIb21lIiwic3RhdGUiLCJhZ2VuY3lJRCIsImlzQWN0aXZlIiwic2V0QWNjZXNzTWVzc2FnZSIsInNldEFjY2Vzc0J1dHRvbiIsInNldEFjY2VzcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwic2V0QWdlbmN5QWNjZXNzIiwidXRpbHMiLCJmcm9tQXNjaWkiLCJCb29sZWFuIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwiaXRlbXMiLCJwcm9wcyIsImFsbE1lbWJlcklEIiwibWFwIiwiaGVhZGVyIiwidWluIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJib3JkZXIiLCJhbGxBZ2VuY3lJRCIsIndpZHRoIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5MZWZ0IiwicmVuZGVyTWVtYmVySUQiLCJyZW5kZXJBZ2VuY3lJRCIsImdldE1lbWJlckNvdW50IiwiY2FsbCIsIm1lbWJlckNvdW50IiwiZ2V0QWdlbmN5Q291bnQiLCJhZ2VuY3lDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImluZGV4IiwidWluQXJyYXkiLCJBY2Nlc3NBZ2VuY3lBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFTLEFBQU0sQUFBUyxBQUFPLEFBQU0sQUFBUTs7QUFDN0MsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDs7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c0JBQUEsQUFDRztBQURIO0FBQUEsY0FISixBQUNFLEFBRUUsQUFDRyxBQUFLLEFBSVYsb0NBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQTdCUixBQUNFLEFBaUJBLEFBQ0UsQUFRRSxBQUVFLEFBQ0csQUFBSyxBQVFuQjs7Ozs7Ozs7Ozs7O3VCQTdGMkIsMEJBQUEsQUFBUyxRQUFULEFBQWlCLGlCQUFqQixBQUFrQyxBOzttQkFBdEQ7QTs7dUJBQ29CLDBCQUFBLEFBQVMsUUFBVCxBQUFpQixpQkFBakIsQUFBa0MsQTs7bUJBQXREO0E7O3lDQUNvQixBQUFRLFVBQzFCLFNBQU4sQUFBTSxBQUFTLGNBQWYsQUFBNkIsT0FBN0IsQUFDQyxJQUNDLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUNsQjt5QkFBTywwQkFBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN6QztBQUpILEEsQUFEd0IsaUJBQ3hCLENBRHdCOzttQkFBcEI7QTs7eUNBT29CLEFBQVEsVUFDMUIsU0FBTixBQUFNLEFBQVMsY0FBZixBQUE2QixPQUE3QixBQUNDLElBQ0MsVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2xCO3lCQUFPLDBCQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQUFBbUMsT0FBMUMsQUFBTyxBQUEwQyxBQUNsRDtBQUxxQixBQUN4QixBLGlCQUFBLENBRHdCOzttQkFBcEI7QTtrREFPQyxFQUFFLGFBQUYsYUFBZSxhLEFBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExQlEsQSxBQTJHbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovQ29vbCBTdHVmZi9Qcm9qZWN0cy9BaWN1bWVuLVRhc2sifQ==