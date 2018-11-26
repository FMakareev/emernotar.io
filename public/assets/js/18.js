(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/modules/static/view/mailIOS/index.js":
/*!**************************************************!*\
  !*** ./src/modules/static/view/mailIOS/index.js ***!
  \**************************************************/
/*! exports provided: MailIOS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MailIOS\", function() { return MailIOS; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../blocks/image */ \"./src/blocks/image/index.js\");\n/* harmony import */ var _assets_email_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/email_logo..jpg */ \"./src/assets/email_logo..jpg\");\n/* harmony import */ var _assets_email_logo_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_email_logo_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_localize_redux_lib_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-localize-redux/lib/index */ \"./node_modules/react-localize-redux/lib/index.js\");\n/* harmony import */ var react_localize_redux_lib_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux_lib_index__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store */ \"./src/store/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_reducers_localization_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/reducers/localization/actions */ \"./src/store/reducers/localization/actions.js\");\n/* harmony import */ var react_fela__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n/* harmony import */ var _blocks_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../blocks/typography */ \"./src/blocks/typography/index.js\");\n/* harmony import */ var _components_topLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/topLabel */ \"./src/components/topLabel/index.js\");\n/* harmony import */ var _mail_ca_logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mail/ca_logo */ \"./src/modules/static/view/mail/ca_logo.js\");\n/* harmony import */ var _blocks_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../blocks/button */ \"./src/blocks/button/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/** global ENDPOINT_CLIENT */\n\n\n\n\n\n\n\n\n\n\n\n\nvar MailIOS =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MailIOS, _Component);\n\n  function MailIOS() {\n    _classCallCheck(this, MailIOS);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(MailIOS).apply(this, arguments));\n  }\n\n  _createClass(MailIOS, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          translate = _this$props.translate,\n          styles = _this$props.styles,\n          url = _this$props.url,\n          emerhash = _this$props.emerhash;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        width: \"100%\",\n        border: \"0\",\n        cellPadding: \"0\",\n        cellSpacing: \"0\",\n        style: {\n          borderSpacing: 0,\n          borderCollapse: 'collapse'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        style: {\n          display: 'none'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"mailsubject\", null, translate('static_dear_user')))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        align: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        width: \"100%\",\n        border: \"0\",\n        cellPadding: \"0\",\n        cellSpacing: \"0\",\n        style: {\n          borderSpacing: 0,\n          borderCollapse: 'collapse',\n          width: '100%'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", {\n        className: styles.th\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: styles.top\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        colSpan: \"2\",\n        width: \"100%\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_image__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n        src: 'http://emernotar.localhost' + _assets_email_logo_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,\n        alt: 'emernotar.io'\n      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        width: \"100%\",\n        border: \"0\",\n        cellPadding: \"0\",\n        cellSpacing: \"0\",\n        className: styles.table\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: styles.topFooter\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_topLabel__WEBPACK_IMPORTED_MODULE_9__[\"TopLabel\"], {\n        isActive: true,\n        styles: {\n          transform: 'none',\n          width: 'calc(100% - 48px)',\n          marginTop: '24px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        as: 'div',\n        fontWeight: 'bold',\n        textAlign: 'center'\n      }, translate('static_dear_user')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        as: 'p',\n        fontWeight: 'bold'\n      }, translate('static_template1_active_description'))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        width: \"100%\",\n        border: \"0\",\n        cellPadding: \"0\",\n        cellSpacing: \"0\",\n        className: styles.table\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: styles.topFooter\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        style: {\n          padding: '24px 0 40px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_button__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n        as: \"a\",\n        href: url,\n        variant: \"raised\",\n        color: 'primary'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        as: 'span',\n        size: 'large',\n        textDecoration: 'none'\n      }, translate('static_template1_active_button'))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        width: \"100%\",\n        border: \"0\",\n        cellPadding: \"0\",\n        cellSpacing: \"0\",\n        style: {\n          borderSpacing: 0,\n          borderCollapse: 'collapse',\n          width: '100%'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tfoot\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: styles.footer\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        colSpan: \"1\",\n        align: \"center\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        width: \"100%\",\n        border: \"0\",\n        cellPadding: \"0\",\n        cellSpacing: \"0\",\n        className: styles.table\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tfoot\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        className: styles.footer\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        colSpan: \"1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        as: \"p\",\n        size: 'small',\n        bright: 'light',\n        fontWeight: 'bold',\n        textAlign: 'center'\n      }, \"EMERNOTAR.IO \\xA9 2018\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        colSpan: \"1\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        target: \"_blank\",\n        style: {\n          color: '#fff',\n          textDecoration: 'none',\n          display: 'block',\n          padding: '10px 0'\n        },\n        href: \"https://compaero.ru\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          display: 'inline-block',\n          verticalAlign: 'bottom',\n          width: '40px',\n          marginRight: '10px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mail_ca_logo__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blocks_typography__WEBPACK_IMPORTED_MODULE_8__[\"Typography\"], {\n        as: 'span',\n        size: 'medium',\n        color: 'default',\n        bright: 'contrastText',\n        styles: {\n          display: 'inline-block',\n          verticalAlign: 'middle'\n        }\n      }, \"CompAero\"))))))))))))));\n    }\n  }]);\n\n  return MailIOS;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nvar style = function style(_ref) {\n  var theme = _ref.theme;\n  return {\n    top: _objectSpread({\n      minHeight: '10rem',\n      paddingTop: '1px',\n      verticalAlign: 'middle',\n      position: 'relative',\n      borderBottom: '6px solid #FDF396',\n      width: '100%'\n    }, theme.header),\n    topFooter: {\n      minHeight: '43px',\n      verticalAlign: 'middle',\n      position: 'relative',\n      textAlign: 'center',\n      color: 'black',\n      marginTop: '24px',\n      width: '100%'\n    },\n    footer: _objectSpread({\n      minHeight: '43px',\n      verticalAlign: 'middle',\n      position: 'relative'\n    }, theme.footer, {\n      borderTop: 'none',\n      width: '100%'\n    }),\n    table: {\n      borderSpacing: 0,\n      borderCollapse: 'collapse',\n      width: '640px'\n    },\n    th: {},\n    tr: {\n      width: '100%'\n    }\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: Object(react_localize_redux_lib_index__WEBPACK_IMPORTED_MODULE_3__[\"getTranslate\"])(state.locale),\n    currentLanguage: Object(react_localize_redux_lib_index__WEBPACK_IMPORTED_MODULE_3__[\"getActiveLanguage\"])(state.locale).code\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    setActiveLanguage: function setActiveLanguage(value) {\n      dispatch(Object(_store_reducers_localization_actions__WEBPACK_IMPORTED_MODULE_6__[\"changeTranslate\"])(_store__WEBPACK_IMPORTED_MODULE_4__[\"Store\"].getState(), value));\n    }\n  };\n};\n\nMailIOS = Object(react_fela__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(style)(MailIOS);\nMailIOS = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(mapStateToProps, mapDispatchToProps)(MailIOS);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MailIOS);\n\n//# sourceURL=webpack:///./src/modules/static/view/mailIOS/index.js?");

/***/ })

}]);