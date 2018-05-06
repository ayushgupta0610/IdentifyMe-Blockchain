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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Cool Stuff\\Projects\\Aicumen-Task\\components\\Layout.js';


var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    console.log(_this.props.activePage);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      })), _react2.default.createElement(_Header2.default, { activePage: this.props.activePage, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), this.props.children);
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkZXIiLCJMYXlvdXQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJhY3RpdmVQYWdlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFFYixBO2tDQUNKOztrQkFBQSxBQUFZLE9BQU07d0NBQUE7O3NJQUFBLEFBQ1YsQUFDTjs7WUFBQSxBQUFRLElBQUksTUFBQSxBQUFLLE1BRkQsQUFFaEIsQUFBdUI7V0FDeEI7Ozs7OzZCQUVPLEFBQ047NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixBQUFDLGtDQUFPLFlBQVksS0FBQSxBQUFLLE1BQXpCLEFBQStCO29CQUEvQjtzQkFKRixBQUlFLEFBRUM7QUFGRDtlQUVDLEFBQUssTUFQVixBQUNFLEFBTWMsQUFHakI7Ozs7O0FBakJrQixBLEFBb0JyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiRTovQ29vbCBTdHVmZi9Qcm9qZWN0cy9BaWN1bWVuLVRhc2sifQ==