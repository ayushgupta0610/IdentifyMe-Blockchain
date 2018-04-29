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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _MagicIDContract = require('../ethereum/MagicIDContract');

var _MagicIDContract2 = _interopRequireDefault(_MagicIDContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Cool Stuff\\Projects\\Aicumen-Task\\pages\\index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement(_routes.Link, { route: '/registerIdentity', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'teal', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Register your identity'))), _react2.default.createElement(_routes.Link, { route: '/registerAgency', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'red', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, 'Register as agency'))), _react2.default.createElement(_routes.Link, { route: '/memberPortal', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'blue', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'Enter user portal'))), _react2.default.createElement(_routes.Link, { route: '/agencyPortal', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'yellow', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Enter agency portal'))));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiY29udHJhY3QiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7OzZCQUVJLEFBQ0o7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsY0FBQTs7b0JBQUE7c0JBQUEsQUFDOUI7QUFEOEI7QUFBQSx5QkFDOUIsQUFBQyx5Q0FBUSxPQUFULE1BQWUsT0FBZixBQUFxQjtvQkFBckI7c0JBQUE7QUFBQTtTQUZGLEFBQ0EsQUFBZ0MsQUFDOUIsQUFFRiw2Q0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUE4QjtBQUE5Qjt5QkFBOEIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDOUI7QUFEOEI7QUFBQSx5QkFDOUIsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQjtvQkFBcEI7c0JBQUE7QUFBQTtTQUxBLEFBSUEsQUFBOEIsQUFDOUIsQUFFQSx5Q0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUE0QjtBQUE1Qjt5QkFBNEIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDNUI7QUFENEI7QUFBQSx5QkFDNUIsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQjtvQkFBcEI7c0JBQUE7QUFBQTtTQVJBLEFBT0EsQUFBNEIsQUFDNUIsQUFFQSx3Q0FBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUE0QjtBQUE1Qjt5QkFBNEIsY0FBQTs7b0JBQUE7c0JBQUEsQUFDNUI7QUFENEI7QUFBQSx5QkFDNUIsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQjtvQkFBcEI7c0JBQUE7QUFBQTtTQVpGLEFBQ0UsQUFVQSxBQUE0QixBQUM1QixBQUlMOzs7OztBQW5CZ0IsQSxBQXVCbkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovQ29vbCBTdHVmZi9Qcm9qZWN0cy9BaWN1bWVuLVRhc2sifQ==