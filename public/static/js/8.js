(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/blocks/wrapper/index.js":
/*!*************************************!*\
  !*** ./src/blocks/wrapper/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"Wrapper\", {\n  enumerable: true,\n  get: function get() {\n    return _wrapper.default;\n  }\n});\n\nvar _wrapper = _interopRequireDefault(__webpack_require__(/*! ./wrapper */ \"./src/blocks/wrapper/wrapper.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/blocks/wrapper/index.js?");

/***/ }),

/***/ "./src/blocks/wrapper/wrapper.js":
/*!***************************************!*\
  !*** ./src/blocks/wrapper/wrapper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\blocks\\\\wrapper\\\\wrapper.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//margin wrapper for any element, for avoid redundance styles\nvar WrapperStyle = function WrapperStyle(_ref) {\n  var _ref$marginTop = _ref.marginTop,\n      marginTop = _ref$marginTop === void 0 ? 'auto' : _ref$marginTop,\n      _ref$marginRight = _ref.marginRight,\n      marginRight = _ref$marginRight === void 0 ? 'auto' : _ref$marginRight,\n      _ref$marginBottom = _ref.marginBottom,\n      marginBottom = _ref$marginBottom === void 0 ? 'auto' : _ref$marginBottom,\n      _ref$marginLeft = _ref.marginLeft,\n      marginLeft = _ref$marginLeft === void 0 ? 'auto' : _ref$marginLeft,\n      _ref$minHeight = _ref.minHeight,\n      minHeight = _ref$minHeight === void 0 ? '0' : _ref$minHeight,\n      _ref$textAlign = _ref.textAlign,\n      textAlign = _ref$textAlign === void 0 ? 'right' : _ref$textAlign,\n      styles = _ref.styles;\n  return _objectSpread({\n    position: 'relative',\n    marginTop: marginTop,\n    marginRight: marginRight,\n    marginBottom: marginBottom,\n    marginLeft: marginLeft,\n    minHeight: minHeight,\n    textAlign: textAlign\n  }, styles);\n};\n\nvar Wrapper = function Wrapper(_ref2) {\n  var className = _ref2.className,\n      children = _ref2.children;\n  return _react.default.createElement(\"div\", {\n    className: className,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26\n    },\n    __self: this\n  }, children);\n};\n\nvar _default = (0, _reactFela.createComponentWithProxy)(WrapperStyle, Wrapper);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/blocks/wrapper/wrapper.js?");

/***/ }),

/***/ "./src/components/decorate/decorate_dots.js":
/*!**************************************************!*\
  !*** ./src/components/decorate/decorate_dots.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\components\\\\decorate\\\\decorate_dots.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nvar DecorateDots = function DecorateDots(_ref) {\n  var styles = _ref.styles;\n  return _react.default.createElement(\"div\", {\n    className: styles.wrapper,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7\n    },\n    __self: this\n  }, _react.default.createElement(\"div\", {\n    className: styles.dot,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8\n    },\n    __self: this\n  }), _react.default.createElement(\"div\", {\n    className: styles.dot,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9\n    },\n    __self: this\n  }), _react.default.createElement(\"div\", {\n    className: styles.dot,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10\n    },\n    __self: this\n  }));\n};\n\nvar STYLE = function STYLE(_ref2) {\n  var theme = _ref2.theme;\n  return {\n    wrapper: {\n      fontSize: 0,\n      display: 'inline-block',\n      lineHeight: '0.75rem',\n      whiteSpace: 'nowrap',\n      margin: 'auto'\n    },\n    dot: {\n      display: 'inline-block',\n      width: '0.75rem',\n      height: '0.75rem',\n      margin: '0 0.1875rem',\n      verticalAlign: 'middle',\n      borderRadius: '50%',\n      backgroundColor: theme.palette.secondary.light,\n      ':nth-child(2n)': {\n        backgroundColor: theme.palette.secondary.main\n      },\n      ':nth-child(3n)': {\n        backgroundColor: theme.palette.secondary.dark\n      }\n    }\n  };\n};\n\nvar _default = (0, _reactFela.connect)(STYLE)(DecorateDots);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/decorate/decorate_dots.js?");

/***/ }),

/***/ "./src/components/decorate/index.js":
/*!******************************************!*\
  !*** ./src/components/decorate/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"DecorateDots\", {\n  enumerable: true,\n  get: function get() {\n    return _decorate_dots.default;\n  }\n});\n\nvar _decorate_dots = _interopRequireDefault(__webpack_require__(/*! ./decorate_dots */ \"./src/components/decorate/decorate_dots.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/components/decorate/index.js?");

/***/ }),

/***/ "./src/components/top/index.js":
/*!*************************************!*\
  !*** ./src/components/top/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"Top\", {\n  enumerable: true,\n  get: function get() {\n    return _top.default;\n  }\n});\n\nvar _top = _interopRequireDefault(__webpack_require__(/*! ./top */ \"./src/components/top/top.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/components/top/index.js?");

/***/ }),

/***/ "./src/components/top/top.js":
/*!***********************************!*\
  !*** ./src/components/top/top.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../../blocks/column/index */ \"./src/blocks/column/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\components\\\\top\\\\top.js\";\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Top =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Top, _Component);\n\n  function Top(props) {\n    var _this;\n\n    _classCallCheck(this, Top);\n\n    _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));\n    _this.state = _this.initialState;\n    return _this;\n  }\n\n  _createClass(Top, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          styles = _props.styles,\n          children = _props.children;\n      if (!styles) return null;\n      return _react.default.createElement(\"div\", {\n        className: styles.wrapper,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25\n        },\n        __self: this\n      }, _react.default.createElement(_index2.Column, {\n        grid: [[425, 80, '%'], [768, 60, '%']],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26\n        },\n        __self: this\n      }, _react.default.createElement(_index.Typography, {\n        styles: {\n          margin: '3.125rem 0 5.625rem',\n          fontSize: '2rem'\n        },\n        as: \"h1\",\n        size: 'medium',\n        textAlign: 'center',\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 30\n        },\n        __self: this\n      }, children)));\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return Top;\n}(_react.Component);\n\nObject.defineProperty(Top, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(Top, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar style = function style(_ref) {\n  var theme = _ref.theme,\n      marginBottom = _ref.marginBottom,\n      paddingBottom = _ref.paddingBottom;\n  return {\n    wrapper: _objectSpread({\n      paddingTop: '1px',\n      verticalAlign: 'top',\n      textAlign: 'center',\n      position: 'relative',\n      maxWeight: '1200px'\n    }, theme ? _objectSpread({}, theme.top) : null, marginBottom ? {\n      marginBottom: marginBottom\n    } : null, paddingBottom ? {\n      paddingBottom: paddingBottom\n    } : {\n      paddingBottom: '1px'\n    })\n  };\n};\n\nvar _default = (0, _reactFela.connect)(style)(Top);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/top/top.js?");

/***/ }),

/***/ "./src/components/topLabel/index.js":
/*!******************************************!*\
  !*** ./src/components/topLabel/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"TopLabel\", {\n  enumerable: true,\n  get: function get() {\n    return _top_label.default;\n  }\n});\nObject.defineProperty(exports, \"TopLabelRow\", {\n  enumerable: true,\n  get: function get() {\n    return _top_labelRow.default;\n  }\n});\n\nvar _top_label = _interopRequireDefault(__webpack_require__(/*! ./top_label */ \"./src/components/topLabel/top_label.js\"));\n\nvar _top_labelRow = _interopRequireDefault(__webpack_require__(/*! ./top_label-row */ \"./src/components/topLabel/top_label-row.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/components/topLabel/index.js?");

/***/ }),

/***/ "./src/components/topLabel/top_label-row.js":
/*!**************************************************!*\
  !*** ./src/components/topLabel/top_label-row.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../../blocks/image/index */ \"./src/blocks/image/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\components\\\\topLabel\\\\top_label-row.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TopLabelRow =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TopLabelRow, _Component);\n\n  function TopLabelRow(props) {\n    var _this;\n\n    _classCallCheck(this, TopLabelRow);\n\n    _this = _possibleConstructorReturn(this, (TopLabelRow.__proto__ || Object.getPrototypeOf(TopLabelRow)).call(this, props));\n    _this.state = _this.initialState;\n    return _this;\n  }\n\n  _createClass(TopLabelRow, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          styles = _props.styles,\n          children = _props.children;\n      return _react.default.createElement(\"div\", {\n        className: styles && styles.wrapper,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25\n        },\n        __self: this\n      }, children);\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return TopLabelRow;\n}(_react.Component);\n\nObject.defineProperty(TopLabelRow, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(TopLabelRow, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar style = function style(_ref) {\n  var children = _ref.children;\n  return {\n    wrapper: _objectSpread({\n      marginRight: '-1rem',\n      marginLeft: '-1rem'\n    }, children && children.length ? {\n      display: 'flex',\n      justifyContent: 'space-around',\n      flexDirection: 'row'\n    } : {\n      display: 'flex',\n      justifyContent: 'center',\n      flexDirection: 'row'\n    })\n  };\n};\n\nvar _default = (0, _reactFela.connect)(style)(TopLabelRow);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/topLabel/top_label-row.js?");

/***/ }),

/***/ "./src/components/topLabel/top_label.js":
/*!**********************************************!*\
  !*** ./src/components/topLabel/top_label.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\components\\\\topLabel\\\\top_label.js\";\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TopLabel =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TopLabel, _Component);\n\n  function TopLabel(props) {\n    var _this;\n\n    _classCallCheck(this, TopLabel);\n\n    _this = _possibleConstructorReturn(this, (TopLabel.__proto__ || Object.getPrototypeOf(TopLabel)).call(this, props));\n    _this.state = _this.initialState;\n    return _this;\n  }\n\n  _createClass(TopLabel, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          styles = _props.styles,\n          toggleTab = _props.toggleTab,\n          children = _props.children,\n          className = _props.className,\n          _props$as = _props.as,\n          as = _props$as === void 0 ? 'h2' : _props$as;\n      if (!styles) return null;\n      return _react.default.createElement(\"div\", {\n        onClick: toggleTab,\n        className: className + ' ' + styles.wrapper,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24\n        },\n        __self: this\n      }, _react.default.createElement(_index.Typography, {\n        styles: {\n          margin: 0\n        },\n        as: as,\n        size: 'medium',\n        fontWeight: 'inherit',\n        textAlign: 'center',\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25\n        },\n        __self: this\n      }, children));\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return TopLabel;\n}(_react.Component);\n\nObject.defineProperty(TopLabel, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(TopLabel, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar style = function style(_ref) {\n  var theme = _ref.theme,\n      isActive = _ref.isActive,\n      styles = _ref.styles;\n  return {\n    wrapper: _objectSpread({\n      position: 'relative',\n      display: 'inline-block',\n      transform: 'translateY(-50%)',\n      padding: '2rem',\n      margin: '1rem',\n      zIndex: 5,\n      backgroundColor: '#FFFFFF'\n    }, isActive ? {\n      // border: '0.1rem solid #FDF396',\n      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',\n      fontWeight: 'bold'\n    } : null, styles)\n  };\n};\n\nvar _default = (0, _reactFela.connect)(style)(TopLabel);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/topLabel/top_label.js?");

/***/ }),

/***/ "./src/modules/about/view/about/index.js":
/*!***********************************************!*\
  !*** ./src/modules/about/view/about/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _index = __webpack_require__(/*! ../../../../blocks/container/index */ \"./src/blocks/container/index.js\");\n\nvar _reactLocalizeRedux = __webpack_require__(/*! react-localize-redux */ \"./node_modules/react-localize-redux/es/index.js\");\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../../../blocks/button/button */ \"./src/blocks/button/button.js\"));\n\nvar _index2 = __webpack_require__(/*! ../../../../components/top/index */ \"./src/components/top/index.js\");\n\nvar _index3 = __webpack_require__(/*! ../../../../blocks/row/index */ \"./src/blocks/row/index.js\");\n\nvar _index4 = __webpack_require__(/*! ../../../../blocks/column/index */ \"./src/blocks/column/index.js\");\n\nvar _index5 = __webpack_require__(/*! ../../../../components/topLabel/index */ \"./src/components/topLabel/index.js\");\n\nvar _index6 = __webpack_require__(/*! ../../../../blocks/wrapper/index */ \"./src/blocks/wrapper/index.js\");\n\nvar _index7 = __webpack_require__(/*! ../../../../components/decorate/index */ \"./src/components/decorate/index.js\");\n\nvar _index8 = __webpack_require__(/*! ../../../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\modules\\\\about\\\\view\\\\about\\\\index.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AboutPage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(AboutPage, _Component);\n\n  function AboutPage() {\n    _classCallCheck(this, AboutPage);\n\n    return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));\n  }\n\n  _createClass(AboutPage, [{\n    key: \"render\",\n    value: function render() {\n      var isActive = this.state.isActive;\n      var translate = this.props.translate;\n      return _react.default.createElement(_react.Fragment, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45\n        },\n        __self: this\n      }, _react.default.createElement(_index2.Top, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46\n        },\n        __self: this\n      }, translate('about_aboutus')), _react.default.createElement(_index.Container, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49\n        },\n        __self: this\n      }, _react.default.createElement(_index5.TopLabelRow, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50\n        },\n        __self: this\n      }, _react.default.createElement(_index5.TopLabel, {\n        isActive: true,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51\n        },\n        __self: this\n      }, translate('about_aboutus'))), _react.default.createElement(_index.Container, {\n        maxWidth: '768px',\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55\n        },\n        __self: this\n      }, data.map(function (item, index) {\n        return _react.default.createElement(_index3.Row, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 58\n          },\n          __self: this\n        }, _react.default.createElement(_index8.Typography, {\n          as: 'p',\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 59\n          },\n          __self: this\n        }, item.content), _react.default.createElement(_index7.DecorateDots, {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 60\n          },\n          __self: this\n        }));\n      }))));\n    }\n  }]);\n\n  return AboutPage;\n}(_react.Component);\n\nObject.defineProperty(AboutPage, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    content: [{\n      content: \"about_question_1_description\"\n    }, {\n      content: \"about_question_2_description\"\n    }, {\n      content: \"about_question_3_description\"\n    }, {\n      content: \"about_question_4_description\"\n    }, {\n      content: \"about_question_5_description\"\n    }, {\n      content: \"about_question_6_description\"\n    }, {\n      content: \"about_question_7_description\"\n    }, {\n      content: \"about_question_8_description\"\n    }]\n  }\n});\n;\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: (0, _reactLocalizeRedux.getTranslate)(state.locale),\n    currentLanguage: (0, _reactLocalizeRedux.getActiveLanguage)(state.locale).code\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(AboutPage);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/modules/about/view/about/index.js?");

/***/ })

}]);