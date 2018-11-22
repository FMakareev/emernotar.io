(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./src/blocks/title/title.js":
/*!***********************************!*\
  !*** ./src/blocks/title/title.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_component_get_element_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/component/get_element_type */ \"./src/utils/component/get_element_type.js\");\n/* harmony import */ var react_fela__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/*\r\nExample Variable. Maybe later, if it needed union 3 ferst to scope, for @media\r\n* as\r\n* textTransform {binary} \r\n* fontWeight {binary}\r\n* textAlign {binary}\r\n*/\n\nvar as = {\n  'default': {\n    marginBottom: '0.5rem',\n    marginTop: '1.414rem',\n    fontSize: '2.441rem'\n  },\n  // '14px': {\n  //     fontSize: 14+'px',\n  // },\n  'color': {\n    fontSize: '1.125rem',\n    color: '#888888'\n  },\n  'h1': {\n    // fontSize: 32+'px',\n    // textAlign: 'left',\n    fontSize: '2.441rem'\n  },\n  'h2': {\n    fontSize: '1.953rem'\n  },\n  'h3': {\n    fontSize: '1.563rem'\n  },\n  'h4': {\n    fontSize: '1.25rem'\n  },\n  'small': {\n    fontSize: '0.8rem'\n  }\n};\n\nvar TitleStyle = function TitleStyle(_ref) {\n  var _ref$as = _ref.as,\n      as = _ref$as === void 0 ? 'default' : _ref$as,\n      _ref$textTransform = _ref.textTransform,\n      textTransform = _ref$textTransform === void 0 ? false : _ref$textTransform,\n      _ref$fontWeight = _ref.fontWeight,\n      fontWeight = _ref$fontWeight === void 0 ? false : _ref$fontWeight,\n      _ref$textAlign = _ref.textAlign,\n      textAlign = _ref$textAlign === void 0 ? false : _ref$textAlign;\n  return _objectSpread({\n    lineHeight: 1.2,\n    as: as\n  }, textTransform ? {\n    textTransform: 'uppercase'\n  } : null, fontWeight ? {\n    fontWeights: '700'\n  } : null, textAlign ? {\n    textAlign: 'center'\n  } : null);\n};\n\nvar Title = function Title(props) {\n  var ElementType = Object(_utils_component_get_element_type__WEBPACK_IMPORTED_MODULE_2__[\"getElementType\"])(Title, props);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementType, {\n    className: props.className\n  }, props.children || '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_fela__WEBPACK_IMPORTED_MODULE_3__[\"createComponentWithProxy\"])(TitleStyle, Title));\n\n//# sourceURL=webpack:///./src/blocks/title/title.js?");

/***/ }),

/***/ "./src/modules/notification/view/notification/index.js":
/*!*************************************************************!*\
  !*** ./src/modules/notification/view/notification/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_container_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/container/index */ \"./src/blocks/container/index.js\");\n/* harmony import */ var _blocks_title_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../blocks/title/title */ \"./src/blocks/title/title.js\");\n/* harmony import */ var _blocks_row_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../blocks/row/index */ \"./src/blocks/row/index.js\");\n/* harmony import */ var _blocks_column_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../blocks/column/index */ \"./src/blocks/column/index.js\");\n/* harmony import */ var _blocks_button_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../blocks/button/index */ \"./src/blocks/button/index.js\");\n/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-localize-redux */ \"./node_modules/react-localize-redux/es/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\n\n\nvar NotificationPage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(NotificationPage, _Component);\n\n  function NotificationPage() {\n    _classCallCheck(this, NotificationPage);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(NotificationPage).apply(this, arguments));\n  }\n\n  _createClass(NotificationPage, [{\n    key: \"render\",\n    value: function render() {\n      var translate = this.props.translate;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_container_index__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_title_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        as: \"h1\"\n      }, translate('notification_record_added')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_row_index__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_column_index__WEBPACK_IMPORTED_MODULE_4__[\"Column\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_title_title__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        as: \"h3\"\n      }, translate('notification_notar_info')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, translate('notification_owner'), \":\"), \" \\u041A\\u0442\\u043E \\u0442\\u043E\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, translate('notification_date')), \" 00.00.0000\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_row_index__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_column_index__WEBPACK_IMPORTED_MODULE_4__[\"Column\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_button_index__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n        variant: \"raised\",\n        color: \"secondary\"\n      }, translate('notification_view_cert')))));\n    }\n  }]);\n\n  return NotificationPage;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: Object(react_localize_redux__WEBPACK_IMPORTED_MODULE_6__[\"getTranslate\"])(state.locale),\n    currentLanguage: Object(react_localize_redux__WEBPACK_IMPORTED_MODULE_6__[\"getActiveLanguage\"])(state.locale).code\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(mapStateToProps)(NotificationPage));\n\n//# sourceURL=webpack:///./src/modules/notification/view/notification/index.js?");

/***/ })

}]);