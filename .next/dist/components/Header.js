'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Cool Stuff\\Projects\\Aicumen-Task\\components\\Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // state = { activeItem: 'index' }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var activeItem = this.props.activePage;
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_semanticUiReact.Menu, { pointing: true, secondary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, _react2.default.createElement(_routes.Link, { route: '/index', __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'republicOfDecentraland', active: activeItem === 'index', onClick: this.handleItemClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      })), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_routes.Link, { route: '/MemberPortal', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'MemberPortal', active: activeItem === 'MemberPortal', onClick: this.handleItemClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      })), _react2.default.createElement(_routes.Link, { route: '/AgencyPortal', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_semanticUiReact.Menu.Item, { name: 'AgencyPortal', active: activeItem === 'AgencyPortal', onClick: this.handleItemClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJTZWdtZW50IiwiQnV0dG9uIiwiTGluayIsIkhlYWRlciIsImhhbmRsZUl0ZW1DbGljayIsImUiLCJuYW1lIiwic2V0U3RhdGUiLCJhY3RpdmVJdGVtIiwicHJvcHMiLCJhY3RpdmVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTSxBQUFTOztBQUN4QixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs0TUFHSixBLGtCQUFrQixVQUFBLEFBQUMsVUFBRDtVQUFBLEFBQU0sYUFBTixBQUFNO2FBQVcsTUFBQSxBQUFLLFNBQVMsRUFBRSxZQUFqQyxBQUFpQixBQUFjLEFBQWM7QTtBQUYvRDs7Ozs7NkJBR1EsQUFDTjtVQUFNLGFBQWEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLEFBQzlCOzZCQUNDLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsQUFBQyx1Q0FBSyxVQUFOLE1BQWUsV0FBZjtvQkFBQTtzQkFBQSxBQUNLO0FBREw7eUJBQ0ssQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDQTtBQURBO3VDQUNBLEFBQUMsc0JBQUQsQUFBTSxRQUFLLE1BQVgsQUFBZ0IsMEJBQXlCLFFBQVEsZUFBakQsQUFBZ0UsU0FBUyxTQUFTLEtBQWxGLEFBQXVGO29CQUF2RjtzQkFGTCxBQUNLLEFBQ0EsQUFFQTtBQUZBOzJCQUVDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNBO0FBREE7dUNBQ0EsQUFBQyxzQkFBRCxBQUFNLFFBQUssTUFBWCxBQUFnQixnQkFBZSxRQUFRLGVBQXZDLEFBQXNELGdCQUFnQixTQUFTLEtBQS9FLEFBQW9GO29CQUFwRjtzQkFGRixBQUNFLEFBQ0EsQUFFQTtBQUZBOzJCQUVBLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0E7QUFEQTt1Q0FDQSxBQUFDLHNCQUFELEFBQU0sUUFBSyxNQUFYLEFBQWdCLGdCQUFlLFFBQVEsZUFBdkMsQUFBc0QsZ0JBQWdCLFNBQVMsS0FBL0UsQUFBb0Y7b0JBQXBGO3NCQVhSLEFBQ0MsQUFDQSxBQUlLLEFBSUUsQUFDQSxBQU1UO0FBTlM7Ozs7OztBQWpCUyxBLEFBMEJyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiRTovQ29vbCBTdHVmZi9Qcm9qZWN0cy9BaWN1bWVuLVRhc2sifQ==