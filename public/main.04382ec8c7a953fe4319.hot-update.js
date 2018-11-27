exports.id = "main";
exports.modules = {

/***/ "./src/blocks/layout/layout.js":
/*!*************************************!*\
  !*** ./src/blocks/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_fela__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-fela */ \"react-fela\");\n/* harmony import */ var react_fela__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_fela__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-localize-redux */ \"react-localize-redux\");\n/* harmony import */ var react_localize_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_localize_redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _blocks_header_header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../blocks/header/header */ \"./src/blocks/header/header.js\");\n/* harmony import */ var _blocks_footer_footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../blocks/footer/footer */ \"./src/blocks/footer/footer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _container_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../container/index */ \"./src/blocks/container/index.js\");\n/* harmony import */ var _row_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../row/index */ \"./src/blocks/row/index.js\");\n/* harmony import */ var _column_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../column/index */ \"./src/blocks/column/index.js\");\n/* harmony import */ var _assets_icons_logo_compaero_2018_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/icons/logo_compaero_2018.svg */ \"./src/assets/icons/logo_compaero_2018.svg\");\n/* harmony import */ var _assets_icons_logo_compaero_2018_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_logo_compaero_2018_svg__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _assets_icons_apple_store_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/icons/apple_store.svg */ \"./src/assets/icons/apple_store.svg\");\n/* harmony import */ var _assets_icons_apple_store_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_apple_store_svg__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _assets_icons_google_play_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/icons/google_play.svg */ \"./src/assets/icons/google_play.svg\");\n/* harmony import */ var _assets_icons_google_play_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_icons_google_play_svg__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _typography_index__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../typography/index */ \"./src/blocks/typography/index.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar LayoutStyle = function LayoutStyle(_ref) {\n  var theme = _ref.theme;\n  return {\n    layout: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, theme.layout),\n    footer: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_6___default()({}, theme.footer)\n  };\n};\n\nvar Layout =\n/*#__PURE__*/\nfunction (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Layout, _Component);\n\n  function Layout() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Layout);\n\n    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Layout).apply(this, arguments));\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Layout, [{\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          styles = _this$props.styles,\n          translate = _this$props.translate;\n      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        className: styles && styles.layout\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_blocks_header_header__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"main\", null, Object(react_router_config__WEBPACK_IMPORTED_MODULE_10__[\"renderRoutes\"])(this.props.route.routes))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_blocks_footer_footer__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n        className: styles && styles.footer\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_container_index__WEBPACK_IMPORTED_MODULE_16__[\"Container\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_row_index__WEBPACK_IMPORTED_MODULE_17__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_column_index__WEBPACK_IMPORTED_MODULE_18__[\"Column\"], {\n        styles: {\n          marginBottom: '15px',\n          '@media(min-width: 768px)': {\n            display: 'inline-block',\n            width: '40%',\n            verticalAlign: 'middle',\n            textAlign: 'center',\n            marginBottom: '0'\n          }\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_row_index__WEBPACK_IMPORTED_MODULE_17__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_typography_index__WEBPACK_IMPORTED_MODULE_22__[\"Typography\"], {\n        as: 'span',\n        size: 'medium',\n        color: 'default',\n        bright: 'contrastText'\n      }, translate('home_copyright'))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_row_index__WEBPACK_IMPORTED_MODULE_17__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_column_index__WEBPACK_IMPORTED_MODULE_18__[\"Column\"], {\n        styles: {\n          verticalAlign: 'middle',\n          display: 'inline-block',\n          width: '50%',\n          marginBottom: '15px',\n          '@media(min-width: 768px)': {\n            width: '30%',\n            marginBottom: '0'\n          }\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n        style: {\n          width: '100%'\n        },\n        src: _assets_icons_apple_store_svg__WEBPACK_IMPORTED_MODULE_20___default.a,\n        alt: \"download from app store\"\n      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_column_index__WEBPACK_IMPORTED_MODULE_18__[\"Column\"], {\n        styles: {\n          verticalAlign: 'middle',\n          display: 'inline-block',\n          width: '50%',\n          marginBottom: '15px',\n          '@media(min-width: 768px)': {\n            width: '30%',\n            marginBottom: '0'\n          }\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n        href: \"https://play.google.com/store/apps/details?id=com.emercoin.emernotar\",\n        target: \"_blank\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n        style: {\n          width: '100%'\n        },\n        src: _assets_icons_google_play_svg__WEBPACK_IMPORTED_MODULE_21___default.a,\n        alt: \"download from google play\"\n      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_column_index__WEBPACK_IMPORTED_MODULE_18__[\"Column\"], {\n        styles: {\n          '@media(min-width: 768px)': {\n            display: 'inline-block',\n            width: '30%',\n            verticalAlign: 'top',\n            textAlign: 'center'\n          }\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[\"Link\"], {\n        to: \"/policy\",\n        styles: {\n          verticalAlign: 'top'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_typography_index__WEBPACK_IMPORTED_MODULE_22__[\"Typography\"], {\n        as: 'span',\n        size: 'medium',\n        color: 'default',\n        bright: 'contrastText'\n      }, translate('home_policy')))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_column_index__WEBPACK_IMPORTED_MODULE_18__[\"Column\"], {\n        styles: {\n          '@media(min-width: 768px)': {\n            display: 'inline-block',\n            width: '30%',\n            verticalAlign: 'top',\n            textAlign: 'center'\n          }\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"a\", {\n        target: \"_blank\",\n        style: {\n          color: '#fff',\n          textDecoration: 'none'\n        },\n        href: \"https://code-artel.com/\"\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"div\", {\n        style: {\n          display: 'inline-block',\n          verticalAlign: 'top',\n          width: '40px',\n          height: '40px',\n          marginRight: '10px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(\"img\", {\n        style: {\n          border: 'none'\n        },\n        src: _assets_icons_logo_compaero_2018_svg__WEBPACK_IMPORTED_MODULE_19___default.a,\n        alt: \"\"\n      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_typography_index__WEBPACK_IMPORTED_MODULE_22__[\"Typography\"], {\n        as: 'span',\n        size: 'medium',\n        color: 'default',\n        bright: 'contrastText',\n        styles: {\n          display: 'inline-block',\n          verticalAlign: 'top'\n        }\n      }, \"CodeArtel\")))))));\n    }\n  }]);\n\n  return Layout;\n}(react__WEBPACK_IMPORTED_MODULE_7__[\"Component\"]);\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(Layout, \"propTypes\", {});\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: Object(react_localize_redux__WEBPACK_IMPORTED_MODULE_11__[\"getTranslate\"])(state.locale),\n    currentLanguage: Object(react_localize_redux__WEBPACK_IMPORTED_MODULE_11__[\"getActiveLanguage\"])(state.locale).code\n  };\n};\n\nLayout = Object(react_fela__WEBPACK_IMPORTED_MODULE_9__[\"connect\"])(LayoutStyle)(Layout);\nLayout = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__[\"connect\"])(mapStateToProps)(Layout);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[\"withRouter\"])(Layout));\n\n//# sourceURL=webpack:///./src/blocks/layout/layout.js?");

/***/ })

};