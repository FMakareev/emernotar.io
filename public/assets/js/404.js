(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["404"],{

/***/ "./src/assets/BCgraphicelement-3-min.jpg":
/*!***********************************************!*\
  !*** ./src/assets/BCgraphicelement-3-min.jpg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/media/BCgraphicelement-3-min.jpg\";\n\n//# sourceURL=webpack:///./src/assets/BCgraphicelement-3-min.jpg?");

/***/ }),

/***/ "./src/assets/icons/icon_close.svg":
/*!*****************************************!*\
  !*** ./src/assets/icons/icon_close.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/media/icon_close.svg\";\n\n//# sourceURL=webpack:///./src/assets/icons/icon_close.svg?");

/***/ }),

/***/ "./src/assets/icons/icon_home.svg":
/*!****************************************!*\
  !*** ./src/assets/icons/icon_home.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/media/icon_home.svg\";\n\n//# sourceURL=webpack:///./src/assets/icons/icon_home.svg?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../../blocks/column/index */ \"./src/blocks/column/index.js\");\n\nvar _BCgraphicelement3Min = _interopRequireDefault(__webpack_require__(/*! ../../assets/BCgraphicelement-3-min.jpg */ \"./src/assets/BCgraphicelement-3-min.jpg\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Top =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Top, _Component);\n\n  function Top(props) {\n    var _this;\n\n    _classCallCheck(this, Top);\n\n    _this = _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).call(this, props));\n    _this.state = _this.initialState;\n    return _this;\n  }\n\n  _createClass(Top, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          styles = _props.styles,\n          children = _props.children;\n      if (!styles) return null;\n      return _react.default.createElement(\"div\", {\n        className: styles.wrapper\n      }, _react.default.createElement(\"img\", {\n        className: styles.bgImage,\n        src: _BCgraphicelement3Min.default,\n        alt: \"\"\n      }), _react.default.createElement(_index2.Column, {\n        styles: {\n          position: 'relative',\n          zIndex: '2'\n        },\n        grid: [[425, 80, '%'], [768, 60, '%']]\n      }, _react.default.createElement(_index.Typography, {\n        styles: {\n          margin: '3.125rem 0 5.625rem',\n          fontSize: '2rem'\n        },\n        as: \"h1\",\n        size: 'medium',\n        textAlign: 'center'\n      }, children)));\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return Top;\n}(_react.Component);\n\nObject.defineProperty(Top, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(Top, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar style = function style(_ref) {\n  var theme = _ref.theme,\n      marginBottom = _ref.marginBottom,\n      paddingBottom = _ref.paddingBottom,\n      wrapperStyles = _ref.wrapperStyles;\n  return {\n    wrapper: _objectSpread({\n      paddingTop: '1px',\n      verticalAlign: 'top',\n      textAlign: 'center',\n      position: 'relative',\n      maxWeight: '1200px',\n      overflow: 'hidden'\n    }, theme ? _objectSpread({}, theme.top) : null, marginBottom ? {\n      marginBottom: marginBottom\n    } : null, paddingBottom ? {\n      paddingBottom: paddingBottom\n    } : {\n      paddingBottom: '1px'\n    }, wrapperStyles),\n    bgImage: {\n      position: 'absolute',\n      width: '200%',\n      top: '50%',\n      left: '50%',\n      zIndex: '1',\n      transform: 'translate(-50%,-50%)',\n      '@media(min-width:768px)': {\n        width: '150%'\n      },\n      '@media(min-width:1024px)': {\n        width: '100%'\n      }\n    }\n  };\n};\n\nvar _default = (0, _reactFela.connect)(style)(Top);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/top/top.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../../blocks/image/index */ \"./src/blocks/image/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TopLabelRow =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TopLabelRow, _Component);\n\n  function TopLabelRow(props) {\n    var _this;\n\n    _classCallCheck(this, TopLabelRow);\n\n    _this = _possibleConstructorReturn(this, (TopLabelRow.__proto__ || Object.getPrototypeOf(TopLabelRow)).call(this, props));\n    _this.state = _this.initialState;\n    return _this;\n  }\n\n  _createClass(TopLabelRow, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          styles = _props.styles,\n          children = _props.children;\n      return _react.default.createElement(\"div\", {\n        className: styles && styles.wrapper\n      }, children);\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return TopLabelRow;\n}(_react.Component);\n\nObject.defineProperty(TopLabelRow, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(TopLabelRow, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar style = function style(_ref) {\n  var children = _ref.children,\n      styles = _ref.styles;\n  return {\n    wrapper: _objectSpread({\n      marginRight: '-1rem',\n      marginLeft: '-1rem'\n    }, styles, children && children.length ? {\n      display: 'flex',\n      justifyContent: 'space-around',\n      flexDirection: 'row' // '-ms-flex-direction': 'row',\n      // '-ms-flex-pack': 'distribute',\n\n    } : {\n      display: 'flex',\n      justifyContent: 'center',\n      flexDirection: 'row' // '-ms-flex-direction': 'row',\n      // '-ms-flex-pack': 'center'\n\n    })\n  };\n};\n\nvar _default = (0, _reactFela.connect)(style)(TopLabelRow);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/topLabel/top_label-row.js?");

/***/ }),

/***/ "./src/components/topLabel/top_label.js":
/*!**********************************************!*\
  !*** ./src/components/topLabel/top_label.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _index = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar TopLabel =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(TopLabel, _Component);\n\n  function TopLabel(props) {\n    var _this;\n\n    _classCallCheck(this, TopLabel);\n\n    _this = _possibleConstructorReturn(this, (TopLabel.__proto__ || Object.getPrototypeOf(TopLabel)).call(this, props));\n    _this.state = _this.initialState;\n    return _this;\n  }\n\n  _createClass(TopLabel, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          styles = _props.styles,\n          toggleTab = _props.toggleTab,\n          children = _props.children,\n          className = _props.className,\n          _props$as = _props.as,\n          as = _props$as === void 0 ? 'h2' : _props$as;\n      if (!styles) return null;\n      return _react.default.createElement(\"div\", {\n        onClick: toggleTab,\n        className: className + ' ' + styles.wrapper\n      }, _react.default.createElement(_index.Typography, {\n        styles: {\n          margin: 0\n        },\n        as: as,\n        size: 'medium',\n        fontWeight: 'inherit',\n        textAlign: 'center'\n      }, children));\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return TopLabel;\n}(_react.Component);\n\nObject.defineProperty(TopLabel, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(TopLabel, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar style = function style(_ref) {\n  var theme = _ref.theme,\n      isActive = _ref.isActive,\n      styles = _ref.styles;\n  return {\n    wrapper: _objectSpread({\n      position: 'relative',\n      display: 'inline-block',\n      transform: 'translateY(-50%)',\n      padding: '2rem',\n      margin: '1rem',\n      zIndex: 5,\n      backgroundColor: '#FFFFFF'\n    }, isActive ? {\n      // border: '0.1rem solid #FDF396',\n      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',\n      fontWeight: 'bold'\n    } : null, styles)\n  };\n};\n\nvar _default = (0, _reactFela.connect)(style)(TopLabel);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/topLabel/top_label.js?");

/***/ }),

/***/ "./src/routes/errors/404.js":
/*!**********************************!*\
  !*** ./src/routes/errors/404.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _index = __webpack_require__(/*! ../../blocks/container/index */ \"./src/blocks/container/index.js\");\n\nvar _button = _interopRequireDefault(__webpack_require__(/*! ../../blocks/button/button */ \"./src/blocks/button/button.js\"));\n\nvar _index2 = __webpack_require__(/*! ../../components/top/index */ \"./src/components/top/index.js\");\n\nvar _index3 = __webpack_require__(/*! ../../blocks/column/index */ \"./src/blocks/column/index.js\");\n\nvar _index4 = __webpack_require__(/*! ../../components/topLabel/index */ \"./src/components/topLabel/index.js\");\n\nvar _index5 = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _index6 = __webpack_require__(/*! ../../blocks/image/index */ \"./src/blocks/image/index.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/es/index.js\");\n\nvar _reactLocalizeRedux = __webpack_require__(/*! react-localize-redux */ \"./node_modules/react-localize-redux/es/index.js\");\n\nvar _icon_close = _interopRequireDefault(__webpack_require__(/*! ../../assets/icons/icon_close.svg */ \"./src/assets/icons/icon_close.svg\"));\n\nvar _icon_home = _interopRequireDefault(__webpack_require__(/*! ../../assets/icons/icon_home.svg */ \"./src/assets/icons/icon_home.svg\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar PageNotFound =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(PageNotFound, _Component);\n\n  function PageNotFound(props) {\n    var _this;\n\n    _classCallCheck(this, PageNotFound);\n\n    _this = _possibleConstructorReturn(this, (PageNotFound.__proto__ || Object.getPrototypeOf(PageNotFound)).call(this, props));\n    _this.state = _this.initialState;\n    return _this;\n  }\n\n  _createClass(PageNotFound, [{\n    key: \"render\",\n    value: function render() {\n      var _props = this.props,\n          translate = _props.translate,\n          instruction = _props.instruction,\n          styles = _props.styles,\n          staticContext = _props.staticContext;\n      return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_index2.Top, {\n        paddingBottom: '7rem'\n      }, translate('home_error')), _react.default.createElement(_index.Container, null, _react.default.createElement(_index4.TopLabelRow, null, _react.default.createElement(_index4.TopLabel, {\n        as: 'div',\n        isActive: true\n      }, _react.default.createElement(_index6.Image, {\n        styles: {\n          maxWidth: '8rem'\n        },\n        src: _icon_close.default\n      }), _react.default.createElement(_index5.Typography, {\n        as: 'h2',\n        size: 'large',\n        fontWeight: 'bold',\n        textAlign: 'center',\n        textTransform: 'uppercase',\n        color: 'secondary',\n        bright: 'contrastText'\n      }, translate('home_error_page_not_found'))))), _react.default.createElement(_index.Container, {\n        styles: {\n          marginTop: '-10rem',\n          textAlign: 'center'\n        }\n      }, _react.default.createElement(_index3.Column, {\n        grid: [[, 70, '%']]\n      }, _react.default.createElement(_index5.Typography, {\n        as: 'p',\n        size: 'medium',\n        fontWeight: 'bold',\n        styles: {\n          lineHeight: '2'\n        },\n        color: 'secondary',\n        bright: 'contrastText'\n      }, translate('home_error_page_not_found_description_title'), _react.default.createElement(\"br\", null), translate('home_error_page_not_found_description_1'), _react.default.createElement(\"br\", null), translate('home_error_page_not_found_description_2'), _react.default.createElement(\"br\", null), translate('home_error_page_not_found_description_3')))), _react.default.createElement(_index.Container, {\n        styles: {\n          paddingBottom: '5rem',\n          textAlign: 'center'\n        }\n      }, _react.default.createElement(_reactRouterDom.Link, {\n        to: \"/\",\n        styles: {\n          textDecoration: 'none'\n        }\n      }, _react.default.createElement(_button.default, {\n        variant: \"raised\",\n        color: 'primary'\n      }, _react.default.createElement(_index6.Image, {\n        src: _icon_home.default,\n        styles: {\n          padding: '0.2rem'\n        }\n      }), _react.default.createElement(_index5.Typography, {\n        as: 'p',\n        size: 'small',\n        color: 'secondary',\n        bright: 'contrastText'\n      }, translate('home_page_title'))))));\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return PageNotFound;\n}(_react.Component);\n\nObject.defineProperty(PageNotFound, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(PageNotFound, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: (0, _reactLocalizeRedux.getTranslate)(state.locale),\n    currentLanguage: (0, _reactLocalizeRedux.getActiveLanguage)(state.locale).code\n  };\n};\n\nPageNotFound = (0, _reactRedux.connect)(mapStateToProps)(PageNotFound);\nvar _default = PageNotFound;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/routes/errors/404.js?");

/***/ })

}]);