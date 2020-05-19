module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleItemClick", (e, {
      name
    }) => this.setState({
      activeItem: name
    }));
  }

  render() {
    const activeItem = this.props.activePage;
    return __jsx("div", null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      style: {
        marginTop: '10px'
      }
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "/"
    }, __jsx("a", {
      className: "item"
    }, "Republic Of Decentraland")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
      position: "right"
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "/MemberPortal"
    }, __jsx("a", {
      className: "item"
    }, "Member Portal")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "/AgencyPortal"
    }, __jsx("a", {
      className: "item"
    }, "Agency Portal")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Layout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    console.log(this.props.activePage);
  }

  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
    })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activePage: this.props.activePage
    }), this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./ethereum/ContractABI.json":
/*!***********************************!*\
  !*** ./ethereum/ContractABI.json ***!
  \***********************************/
/*! exports provided: interface, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"interface\":[{\"constant\":false,\"inputs\":[{\"name\":\"oraclizeID\",\"type\":\"bytes32\"},{\"name\":\"_result\",\"type\":\"string\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"myid\",\"type\":\"bytes32\"},{\"name\":\"result\",\"type\":\"string\"},{\"name\":\"proof\",\"type\":\"bytes\"}],\"name\":\"__callback\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"agency_id\",\"type\":\"bytes32\"},{\"name\":\"_time_fence\",\"type\":\"uint256\"},{\"name\":\"_location_fence\",\"type\":\"bytes32[]\"}],\"name\":\"authID\",\"outputs\":[{\"name\":\"authIDStatus\",\"type\":\"bool\"}],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"agency_id\",\"type\":\"bytes32\"},{\"name\":\"_agency_name\",\"type\":\"bytes32\"},{\"name\":\"_agency_domain\",\"type\":\"bytes32\"},{\"name\":\"_features\",\"type\":\"bool[]\"}],\"name\":\"createAccessAgency\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"},{\"name\":\"_personal\",\"type\":\"bytes32[]\"}],\"name\":\"createMagicID\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getAgencyCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"getMemberCount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_agencyAddress\",\"type\":\"address\"}],\"name\":\"nameResolveAgency\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_agency_id\",\"type\":\"bytes32\"},{\"name\":\"_isActive\",\"type\":\"bool\"}],\"name\":\"setAgencyAccess\",\"outputs\":[{\"name\":\"setAgencyAccessStatus\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"source\",\"type\":\"string\"}],\"name\":\"stringToBytes32\",\"outputs\":[{\"name\":\"result\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"AccessAgencyArray\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"agencyID\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"agencyIDOraclizeID\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"x\",\"type\":\"bytes32\"}],\"name\":\"bytes32ToString\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"contractOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getBioFace\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_face\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getBioIRIS\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_iris_left\",\"type\":\"string\"},{\"name\":\"ret_iris_right\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getBioLeftFingers\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_left_finger_1\",\"type\":\"string\"},{\"name\":\"ret_left_finger_2\",\"type\":\"string\"},{\"name\":\"ret_left_finger_3\",\"type\":\"string\"},{\"name\":\"ret_left_finger_4\",\"type\":\"string\"},{\"name\":\"ret_left_finger_5\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getBioRightFingers\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_right_finger_1\",\"type\":\"string\"},{\"name\":\"ret_right_finger_2\",\"type\":\"string\"},{\"name\":\"ret_right_finger_3\",\"type\":\"string\"},{\"name\":\"ret_right_finger_4\",\"type\":\"string\"},{\"name\":\"ret_right_finger_5\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDAccessors\",\"outputs\":[{\"name\":\"accessorsArray\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDaddress\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_personalAddress\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDdob\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_dob\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDemail\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_email\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDGender\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_gender\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDmobile\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_mobile\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDName\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_name\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDParentName\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_parentName\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"uin\",\"type\":\"bytes32\"}],\"name\":\"getIDUIN\",\"outputs\":[{\"name\":\"isRet\",\"type\":\"bool\"},{\"name\":\"ret_uin\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"uin\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"uinArray\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"uinOraclizeID\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]}");

/***/ }),

/***/ "./ethereum/MagicIDContract.js":
/*!*************************************!*\
  !*** ./ethereum/MagicIDContract.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _ContractABI_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContractABI.json */ "./ethereum/ContractABI.json");
var _ContractABI_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ContractABI.json */ "./ethereum/ContractABI.json", 1);

 // const magicID = require('./ContractABI');

const instance = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(_ContractABI_json__WEBPACK_IMPORTED_MODULE_1__.interface, '0xede744f30c8518768594545c1c8acddab4b39afd'); // const instance = new web3.eth.contract(magicID.interface).at('0x651855667cbbffbf6e148e8ab17c5a71cd31466d');
// The above instance is for Kovan

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./ethereum/web3.js":
/*!**************************!*\
  !*** ./ethereum/web3.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;

if (false) {} else {
  //We are on the server *OR* the user is not running metamask
  const provider = new web3__WEBPACK_IMPORTED_MODULE_0___default.a.providers.HttpProvider('https://kovan.infura.io/v3/0cea9188cb7241d4a47c9b226e2c2451');
  web3 = new web3__WEBPACK_IMPORTED_MODULE_0___default.a(provider);
}

/* harmony default export */ __webpack_exports__["default"] = (web3);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ethereum_MagicIDContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/MagicIDContract */ "./ethereum/MagicIDContract.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      agencyID: '',
      isActive: 'true',
      setAccessMessage: '',
      setAccessButton: false
    });

    _defineProperty(this, "setAccess", async event => {
      event.preventDefault();
      this.setState({
        setAccessButton: true,
        setAccessMessage: ''
      });

      try {
        debugger;
        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_5__["default"].eth.getAccounts();
        await _ethereum_MagicIDContract__WEBPACK_IMPORTED_MODULE_4__["default"].methods.setAgencyAccess(_ethereum_web3__WEBPACK_IMPORTED_MODULE_5__["default"].utils.fromAscii(this.state.agencyID), Boolean(this.state.isActive)).send({
          from: accounts[0]
        });
      } catch (err) {
        this.setState({
          setAccessMessage: err.message
        });
      }

      this.setState({
        setAccessButton: false,
        agencyID: '',
        isActive: 'true'
      });
    });
  }

  static async getInitialProps() {
    const memberCount = await _ethereum_MagicIDContract__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getMemberCount().call();
    const agencyCount = await _ethereum_MagicIDContract__WEBPACK_IMPORTED_MODULE_4__["default"].methods.getAgencyCount().call();
    const allMemberID = await Promise.all(Array(parseInt(memberCount)).fill().map((element, index) => {
      return _ethereum_MagicIDContract__WEBPACK_IMPORTED_MODULE_4__["default"].methods.uinArray(index).call();
    }));
    const allAgencyID = await Promise.all(Array(parseInt(agencyCount)).fill().map((element, index) => {
      return _ethereum_MagicIDContract__WEBPACK_IMPORTED_MODULE_4__["default"].methods.AccessAgencyArray(index).call();
    }));
    return {
      allMemberID,
      allAgencyID
    };
  }

  renderMemberID() {
    const items = this.props.allMemberID.map(uin => {
      return {
        header: uin,
        style: {
          overflowWrap: 'break-word',
          border: '1px dashed blue'
        }
      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
      items: items
    });
  }

  renderAgencyID() {
    const items = this.props.allAgencyID.map(agencyID => {
      return {
        header: agencyID,
        style: {
          overflowWrap: 'break-word',
          border: '1px dashed green'
        }
      };
    });
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
      items: items
    });
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      activePage: "index"
    }, __jsx("h3", null, " Set Agency Active "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.setAccess,
      error: !!this.state.setAccessMessage
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
      inline: true
    }, __jsx("label", null, "Set access to agency"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: "20%"
      },
      value: this.state.agencyID,
      onChange: event => this.setState({
        agencyID: event.target.value
      })
    }), __jsx("label", {
      style: {
        marginLeft: '10px'
      }
    }, "Set(true) or Withdraw(false) Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Radio, {
      label: "True",
      value: "true",
      checked: this.state.isActive == 'true',
      onChange: (event, {
        value
      }) => {
        this.setState({
          isActive: value
        });
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Radio, {
      label: "False",
      value: "false",
      checked: this.state.isActive == 'false',
      onChange: (event, {
        value
      }) => {
        this.setState({
          isActive: value
        });
      }
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      loading: this.state.setAccessButton,
      primary: true
    }, "Set Access"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
      error: true,
      header: "Oops!",
      content: this.state.setAccessMessage
    }), __jsx("br", null), " ", __jsx("br", null)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 8
    }, __jsx("h3", null, " Member IDs"), __jsx("div", null, this.renderMemberID())), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
      width: 8
    }, __jsx("h3", null, " Agency IDs"), __jsx("div", null, this.renderAgencyID())))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/MemberPortal', '/portal/MemberPortal').add('/AgencyPortal', '/portal/AgencyPortal');
module.exports = routes;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ayushgupta/Downloads/Personal/IdentifyMe-Blockchain/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vTWFnaWNJRENvbnRyYWN0LmpzIiwid2VicGFjazovLy8uL2V0aGVyZXVtL3dlYjMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcm91dGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcm91dGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndlYjNcIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJDb21wb25lbnQiLCJlIiwibmFtZSIsInNldFN0YXRlIiwiYWN0aXZlSXRlbSIsInJlbmRlciIsInByb3BzIiwiYWN0aXZlUGFnZSIsIm1hcmdpblRvcCIsIkxheW91dCIsImNvbnN0cnVjdG9yIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwiaW5zdGFuY2UiLCJ3ZWIzIiwiZXRoIiwiQ29udHJhY3QiLCJtYWdpY0lEIiwiaW50ZXJmYWNlIiwicHJvdmlkZXIiLCJXZWIzIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiSG9tZSIsImFnZW5jeUlEIiwiaXNBY3RpdmUiLCJzZXRBY2Nlc3NNZXNzYWdlIiwic2V0QWNjZXNzQnV0dG9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFjY291bnRzIiwiZ2V0QWNjb3VudHMiLCJjb250cmFjdCIsIm1ldGhvZHMiLCJzZXRBZ2VuY3lBY2Nlc3MiLCJ1dGlscyIsImZyb21Bc2NpaSIsInN0YXRlIiwiQm9vbGVhbiIsInNlbmQiLCJmcm9tIiwiZXJyIiwibWVzc2FnZSIsImdldEluaXRpYWxQcm9wcyIsIm1lbWJlckNvdW50IiwiZ2V0TWVtYmVyQ291bnQiLCJjYWxsIiwiYWdlbmN5Q291bnQiLCJnZXRBZ2VuY3lDb3VudCIsImFsbE1lbWJlcklEIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwidWluQXJyYXkiLCJhbGxBZ2VuY3lJRCIsIkFjY2Vzc0FnZW5jeUFycmF5IiwicmVuZGVyTWVtYmVySUQiLCJpdGVtcyIsInVpbiIsImhlYWRlciIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwiYm9yZGVyIiwicmVuZGVyQWdlbmN5SUQiLCJzZXRBY2Nlc3MiLCJ3aWR0aCIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsInJvdXRlcyIsInJlcXVpcmUiLCJhZGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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IiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVudSwgU2VnbWVudCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudHtcbiAgLy8gc3RhdGUgPSB7IGFjdGl2ZUl0ZW06ICdpbmRleCcgfVxuXG4gIGhhbmRsZUl0ZW1DbGljayA9IChlLCB7IG5hbWUgfSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IGFjdGl2ZUl0ZW0gPSB0aGlzLnByb3BzLmFjdGl2ZVBhZ2U7XG4gICAgcmV0dXJuIChcbiAgICAgPGRpdj5cbiAgICAgICAgPE1lbnUgc3R5bGU9e3ttYXJnaW5Ub3A6ICcxMHB4J319PlxuICAgICAgICA8TGluayByb3V0ZT1cIi9cIj48YSBjbGFzc05hbWU9XCJpdGVtXCI+UmVwdWJsaWMgT2YgRGVjZW50cmFsYW5kPC9hPjwvTGluaz5cblxuICAgICAgICA8TWVudS5NZW51IHBvc2l0aW9uPVwicmlnaHRcIj5cbiAgICAgICAgICA8TGluayByb3V0ZT1cIi9NZW1iZXJQb3J0YWxcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5NZW1iZXIgUG9ydGFsPC9hPlxuICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDxMaW5rIHJvdXRlPVwiL0FnZW5jeVBvcnRhbFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIj5BZ2VuY3kgUG9ydGFsPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9NZW51Lk1lbnU+XG4gICAgICA8L01lbnU+XG4gICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzLmFjdGl2ZVBhZ2UpO1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjEyL3NlbWFudGljLm1pbi5jc3NcIj48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPEhlYWRlciBhY3RpdmVQYWdlPXt0aGlzLnByb3BzLmFjdGl2ZVBhZ2V9PlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IHdlYjMgZnJvbSAnLi93ZWIzJztcbmltcG9ydCBtYWdpY0lEIGZyb20gJy4vQ29udHJhY3RBQkkuanNvbic7XG4vLyBjb25zdCBtYWdpY0lEID0gcmVxdWlyZSgnLi9Db250cmFjdEFCSScpO1xuXG5jb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcbiAgIG1hZ2ljSUQuaW50ZXJmYWNlLFxuICAnMHhlZGU3NDRmMzBjODUxODc2ODU5NDU0NWMxYzhhY2RkYWI0YjM5YWZkJ1xuKTtcblxuLy8gY29uc3QgaW5zdGFuY2UgPSBuZXcgd2ViMy5ldGguY29udHJhY3QobWFnaWNJRC5pbnRlcmZhY2UpLmF0KCcweDY1MTg1NTY2N2NiYmZmYmY2ZTE0OGU4YWIxN2M1YTcxY2QzMTQ2NmQnKTtcblxuLy8gVGhlIGFib3ZlIGluc3RhbmNlIGlzIGZvciBLb3ZhblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iLCJpbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcblxubGV0IHdlYjM7XG5cbmlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpe1xuICAvL1dlIGFyZSBpbiB0aGUgYnJvd3NlciBhbmQgbWV0YW1hc2sgaXMgcnVubmluZ1xuICB3ZWIzID0gbmV3IFdlYjMod2luZG93LndlYjMuY3VycmVudFByb3ZpZGVyKTtcbn0gZWxzZSB7XG4gIC8vV2UgYXJlIG9uIHRoZSBzZXJ2ZXIgKk9SKiB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuICBjb25zdCBwcm92aWRlciA9IG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoXG4gICAgJ2h0dHBzOi8va292YW4uaW5mdXJhLmlvL3YzLzBjZWE5MTg4Y2I3MjQxZDRhNDdjOWIyMjZlMmMyNDUxJ1xuICApO1xuICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBNZXNzYWdlLCBJbnB1dCwgQ2FyZCwgQnV0dG9uLCBHcmlkIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcbmltcG9ydCBjb250cmFjdCBmcm9tICcuLi9ldGhlcmV1bS9NYWdpY0lEQ29udHJhY3QnO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnR7XG5cbiAgc3RhdGUgPSB7XG4gICAgICBhZ2VuY3lJRDogJycsXG4gICAgICBpc0FjdGl2ZTogJ3RydWUnLFxuICAgICAgc2V0QWNjZXNzTWVzc2FnZTogJycsXG4gICAgICBzZXRBY2Nlc3NCdXR0b246IGZhbHNlXG4gICAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgbWVtYmVyQ291bnQgPSBhd2FpdCBjb250cmFjdC5tZXRob2RzLmdldE1lbWJlckNvdW50KCkuY2FsbCgpO1xuICAgIGNvbnN0IGFnZW5jeUNvdW50ID0gYXdhaXQgY29udHJhY3QubWV0aG9kcy5nZXRBZ2VuY3lDb3VudCgpLmNhbGwoKTtcbiAgICBjb25zdCBhbGxNZW1iZXJJRCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgICAgQXJyYXkocGFyc2VJbnQobWVtYmVyQ291bnQpKS5maWxsKClcbiAgICAgIC5tYXAoXG4gICAgICAgIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiBjb250cmFjdC5tZXRob2RzLnVpbkFycmF5KGluZGV4KS5jYWxsKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNvbnN0IGFsbEFnZW5jeUlEID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICBBcnJheShwYXJzZUludChhZ2VuY3lDb3VudCkpLmZpbGwoKVxuICAgICAgLm1hcChcbiAgICAgICAgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRyYWN0Lm1ldGhvZHMuQWNjZXNzQWdlbmN5QXJyYXkoaW5kZXgpLmNhbGwoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgcmV0dXJuIHsgYWxsTWVtYmVySUQsIGFsbEFnZW5jeUlEIH07XG4gIH1cblxuICByZW5kZXJNZW1iZXJJRCgpe1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5hbGxNZW1iZXJJRC5tYXAodWluID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjogdWluLFxuICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJywgYm9yZGVyOiAnMXB4IGRhc2hlZCBibHVlJyB9XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICByZW5kZXJBZ2VuY3lJRCgpe1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy5hbGxBZ2VuY3lJRC5tYXAoYWdlbmN5SUQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGVyOiBhZ2VuY3lJRCxcbiAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JlZW4nIH1cbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XG4gIH1cblxuICBzZXRBY2Nlc3MgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NldEFjY2Vzc0J1dHRvbjogdHJ1ZSwgc2V0QWNjZXNzTWVzc2FnZTogJyd9KTtcblxuICAgIHRyeSB7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgICBhd2FpdCBjb250cmFjdC5tZXRob2RzLnNldEFnZW5jeUFjY2Vzcyh3ZWIzLnV0aWxzLmZyb21Bc2NpaSh0aGlzLnN0YXRlLmFnZW5jeUlEKSwgQm9vbGVhbih0aGlzLnN0YXRlLmlzQWN0aXZlKSkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtzZXRBY2Nlc3NNZXNzYWdlOiBlcnIubWVzc2FnZX0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzZXRBY2Nlc3NCdXR0b246IGZhbHNlLCBhZ2VuY3lJRDogJycsIGlzQWN0aXZlOiAndHJ1ZScgfSk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPExheW91dCBhY3RpdmVQYWdlPVwiaW5kZXhcIj5cbiAgICAgICAgPGgzPiBTZXQgQWdlbmN5IEFjdGl2ZSA8L2gzPlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5zZXRBY2Nlc3N9IGVycm9yPXshIXRoaXMuc3RhdGUuc2V0QWNjZXNzTWVzc2FnZX0+XG4gICAgICAgICAgPEZvcm0uR3JvdXAgaW5saW5lPlxuICAgICAgICAgICAgPGxhYmVsPlNldCBhY2Nlc3MgdG8gYWdlbmN5PC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17eyB3aWR0aDogXCIyMCVcIiB9fVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2VuY3lJRH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuc2V0U3RhdGUoeyBhZ2VuY3lJRDogZXZlbnQudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3ttYXJnaW5MZWZ0OicxMHB4J319PlNldCh0cnVlKSBvciBXaXRoZHJhdyhmYWxzZSkgQWNjZXNzPC9sYWJlbD5cbiAgICAgICAgICAgICA8Rm9ybS5SYWRpbyBsYWJlbD0nVHJ1ZScgdmFsdWU9J3RydWUnIGNoZWNrZWQ9e3RoaXMuc3RhdGUuaXNBY3RpdmUgPT0gJ3RydWUnfSBvbkNoYW5nZT17KGV2ZW50LCB7dmFsdWV9KSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBpc0FjdGl2ZTogdmFsdWV9KX0gfSAvPlxuICAgICAgICAgICAgIDxGb3JtLlJhZGlvIGxhYmVsPSdGYWxzZScgdmFsdWU9J2ZhbHNlJyBjaGVja2VkPXt0aGlzLnN0YXRlLmlzQWN0aXZlID09ICdmYWxzZSd9IG9uQ2hhbmdlPXsoZXZlbnQsIHt2YWx1ZX0pID0+IHsgdGhpcy5zZXRTdGF0ZSh7IGlzQWN0aXZlOiB2YWx1ZX0pfSB9IC8+XG4gICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5zZXRBY2Nlc3NCdXR0b259IHByaW1hcnk+U2V0IEFjY2VzczwvQnV0dG9uPlxuICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5zZXRBY2Nlc3NNZXNzYWdlfSAvPlxuICAgICAgICAgIDxici8+IDxici8+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuUm93PlxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgICAgPGgzPiBNZW1iZXIgSURzPC9oMz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJNZW1iZXJJRCgpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XG4gICAgICAgICAgICAgIDxoMz4gQWdlbmN5IElEczwvaDM+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWdlbmN5SUQoKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICAgIDwvR3JpZC5Sb3c+XG5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSgnbmV4dC1yb3V0ZXMnKSgpO1xuXG5yb3V0ZXNcbiAgICAuYWRkKCcvTWVtYmVyUG9ydGFsJywgJy9wb3J0YWwvTWVtYmVyUG9ydGFsJylcbiAgICAuYWRkKCcvQWdlbmN5UG9ydGFsJywgJy9wb3J0YWwvQWdlbmN5UG9ydGFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yb3V0ZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndlYjNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==