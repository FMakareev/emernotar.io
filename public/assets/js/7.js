(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/blocks/title/title.js":
/*!***********************************!*\
  !*** ./src/blocks/title/title.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _get_element_type = __webpack_require__(/*! ../../utils/component/get_element_type */ \"./src/utils/component/get_element_type.js\");\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\blocks\\\\title\\\\title.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\r\nExample Variable. Maybe later, if it needed union 3 ferst to scope, for @media\r\n* as\r\n* textTransform {binary} \r\n* fontWeight {binary}\r\n* textAlign {binary}\r\n*/\nvar as = {\n  'default': {\n    marginBottom: '0.5rem',\n    marginTop: '1.414rem',\n    fontSize: '2.441rem'\n  },\n  // '14px': {\n  //     fontSize: 14+'px',\n  // },\n  'color': {\n    fontSize: '1.125rem',\n    color: '#888888'\n  },\n  'h1': {\n    // fontSize: 32+'px',\n    // textAlign: 'left',\n    fontSize: '2.441rem'\n  },\n  'h2': {\n    fontSize: '1.953rem'\n  },\n  'h3': {\n    fontSize: '1.563rem'\n  },\n  'h4': {\n    fontSize: '1.25rem'\n  },\n  'small': {\n    fontSize: '0.8rem'\n  }\n};\n\nvar TitleStyle = function TitleStyle(_ref) {\n  var _ref$as = _ref.as,\n      as = _ref$as === void 0 ? 'default' : _ref$as,\n      _ref$textTransform = _ref.textTransform,\n      textTransform = _ref$textTransform === void 0 ? false : _ref$textTransform,\n      _ref$fontWeight = _ref.fontWeight,\n      fontWeight = _ref$fontWeight === void 0 ? false : _ref$fontWeight,\n      _ref$textAlign = _ref.textAlign,\n      textAlign = _ref$textAlign === void 0 ? false : _ref$textAlign;\n  return _objectSpread({\n    lineHeight: 1.2,\n    as: as\n  }, textTransform ? {\n    textTransform: 'uppercase'\n  } : null, fontWeight ? {\n    fontWeights: '700'\n  } : null, textAlign ? {\n    textAlign: 'center'\n  } : null);\n};\n\nvar Title = function Title(props) {\n  var ElementType = (0, _get_element_type.getElementType)(Title, props);\n  return _react.default.createElement(ElementType, {\n    className: props.className,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62\n    },\n    __self: this\n  }, props.children || '');\n};\n\nvar _default = (0, _reactFela.createComponentWithProxy)(TitleStyle, Title);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/blocks/title/title.js?");

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

/***/ "./src/components/form/form_feedback.js":
/*!**********************************************!*\
  !*** ./src/components/form/form_feedback.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reduxForm = __webpack_require__(/*! redux-form */ \"./node_modules/redux-form/es/index.js\");\n\nvar _input_text = __webpack_require__(/*! ../../blocks/input-fela/input_text/input_text */ \"./src/blocks/input-fela/input_text/input_text.js\");\n\nvar _index = __webpack_require__(/*! ../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../../blocks/button/index */ \"./src/blocks/button/index.js\");\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _graphqlTag = _interopRequireDefault(__webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\"));\n\nvar _reactApollo = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.browser.umd.js\");\n\nvar _reactLocalizeRedux = __webpack_require__(/*! react-localize-redux */ \"./node_modules/react-localize-redux/es/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _index3 = __webpack_require__(/*! ../preloader/index */ \"./src/components/preloader/index.js\");\n\nvar _required = __webpack_require__(/*! ../../utils/validation/required */ \"./src/utils/validation/required.js\");\n\nvar _index4 = __webpack_require__(/*! ../../store/index */ \"./src/store/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\components\\\\form\\\\form_feedback.js\";\n\nvar _templateObject = /*#__PURE__*/ _taggedTemplateLiteral([\"mutation createFeedback(\\n    $name: String,\\n    $email: String,\\n    $title: String,\\n    $message: String,\\n    ){\\n        createFeedback(\\n            name:$name,\\n            email:$email,\\n            title:$title,\\n            message:$message,\\n        ) {\\n            name\\n            email\\n            title\\n            message\\n        }\\n    }\"]);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nvar validate = function validate(values) {\n  var errors = {};\n\n  if (!values.username) {\n    // required(translate('contact_error_required'))\n    errors.username = 'Required';\n  }\n\n  if (!values.password) {\n    errors.password = 'Required';\n  }\n\n  return errors;\n};\n\nvar createFeedback = (0, _graphqlTag.default)(_templateObject);\n\nvar FormFeedback =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(FormFeedback, _Component);\n\n  function FormFeedback(props) {\n    var _this;\n\n    _classCallCheck(this, FormFeedback);\n\n    _this = _possibleConstructorReturn(this, (FormFeedback.__proto__ || Object.getPrototypeOf(FormFeedback)).call(this, props));\n    _this.state = _this.initialState;\n    _this.submit = _this.submit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(FormFeedback, [{\n    key: \"onPreLoaderToggle\",\n    value: function onPreLoaderToggle(state) {\n      console.log(open);\n      this.setState({\n        preLoader: state\n      });\n    }\n  }, {\n    key: \"submit\",\n    value: function submit(value) {\n      var _this2 = this;\n\n      var data = {\n        variables: value\n      };\n      this.onPreLoaderToggle(true);\n      return this.props.createFeedback(data).then(function (res) {\n        console.log(res);\n\n        _this2.onPreLoaderToggle(false);\n\n        _this2.setState({\n          status: res\n        });\n\n        _this2.props.reset();\n      }).catch(function (err) {\n        _this2.onPreLoaderToggle(false);\n\n        console.log('statusCode: ', err.networkError.statusCode);\n        console.log('bodyText: ', err.networkError.bodyText);\n\n        if (err.networkError.statusCode >= 400) {\n          _this2.setState({\n            error: err.networkError.bodyText\n          });\n        }\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {// Store.subscribe(() => {\n      //     unregisterField('FormFeedback','name');\n      //     registerField('FormFeedback', 'name', 'text')\n      // })\n      // console.log('updateSyncErrors');\n      // updateSyncErrors('FormFeedback')\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.props.reset();\n      (0, _reduxForm.destroy)('FormFeedback');\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      var _props = this.props,\n          handleSubmit = _props.handleSubmit,\n          reset = _props.reset,\n          pristine = _props.pristine,\n          submitting = _props.submitting,\n          styles = _props.styles,\n          translate = _props.translate;\n      var _state = this.state,\n          preLoader = _state.preLoader,\n          error = _state.error,\n          status = _state.status;\n      return _react.default.createElement(\"form\", {\n        onSubmit: handleSubmit(function (value) {\n          return _this3.submit(value);\n        }),\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112\n        },\n        __self: this\n      }, _react.default.createElement(_reduxForm.Field, {\n        name: \"name\",\n        component: _input_text.InputText,\n        placeholder: translate('contact_form_name'),\n        type: \"text\",\n        validate: [(0, _required.required)(translate('contact_error_required'))],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113\n        },\n        __self: this\n      }), _react.default.createElement(_reduxForm.Field, {\n        name: \"email\",\n        component: _input_text.InputText,\n        placeholder: translate('contact_form_email'),\n        type: \"email\",\n        validate: [(0, _required.required)(translate('contact_error_required'))],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120\n        },\n        __self: this\n      }), _react.default.createElement(_reduxForm.Field, {\n        name: \"title\",\n        component: _input_text.InputText,\n        placeholder: translate('contact_form_theme'),\n        type: \"text\",\n        validate: [(0, _required.required)(translate('contact_error_required'))],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127\n        },\n        __self: this\n      }), _react.default.createElement(_reduxForm.Field, {\n        name: \"message\",\n        component: _input_text.InputText,\n        placeholder: translate('contact_form_message'),\n        type: \"textarea\",\n        validate: [(0, _required.required)(translate('contact_error_required'))],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 134\n        },\n        __self: this\n      }), error && _react.default.createElement(_index.Typography, {\n        as: 'p',\n        size: 'medium',\n        color: 'error',\n        bright: 'dark',\n        fontWeight: 'bold',\n        textAlign: 'center',\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 142\n        },\n        __self: this\n      }, translate('home_network_error')), status && _react.default.createElement(_index.Typography, {\n        as: 'p',\n        size: 'medium',\n        bright: 'dark',\n        fontWeight: 'bold',\n        textAlign: 'center',\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 155\n        },\n        __self: this\n      }, translate('home_success')), _react.default.createElement(\"div\", {\n        className: styles.footer,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 166\n        },\n        __self: this\n      }, _react.default.createElement(_index2.Button, {\n        variant: \"raised\",\n        color: 'primary',\n        type: \"submit\",\n        disabled: pristine || submitting,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 167\n        },\n        __self: this\n      }, _react.default.createElement(_index.Typography, {\n        as: 'p',\n        size: 'small',\n        color: 'secondary',\n        bright: 'contrastText',\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 171\n        },\n        __self: this\n      }, translate('contact_submit')))), preLoader && _react.default.createElement(_index3.PreLoader, {\n        backdrop: true,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 177\n        },\n        __self: this\n      }));\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {\n        preLoader: false,\n        error: null\n      };\n    }\n  }]);\n\n  return FormFeedback;\n}(_react.Component);\n\nObject.defineProperty(FormFeedback, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(FormFeedback, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\n\nvar STYLE = function STYLE() {\n  return {\n    maxWidth: '100%',\n    footer: {\n      textAlign: 'right',\n      marginBottom: '5rem'\n    }\n  };\n};\n\nFormFeedback = (0, _reactFela.connect)(STYLE)(FormFeedback);\nFormFeedback = (0, _reduxForm.reduxForm)({\n  form: 'FormFeedback'\n})(FormFeedback);\nFormFeedback = (0, _reactApollo.graphql)(createFeedback, {\n  name: 'createFeedback',\n  mutate: {\n    fetchPolicy: 'no-cache',\n    errorPolicy: 'all'\n  }\n})(FormFeedback);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: (0, _reactLocalizeRedux.getTranslate)(state.locale),\n    currentLanguage: (0, _reactLocalizeRedux.getActiveLanguage)(state.locale).code\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(_dispatch) {\n  return {\n    dispatch: function dispatch(action, payload) {\n      _dispatch();\n    }\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(FormFeedback);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/components/form/form_feedback.js?");

/***/ }),

/***/ "./src/components/form/index.js":
/*!**************************************!*\
  !*** ./src/components/form/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"FormFeedback\", {\n  enumerable: true,\n  get: function get() {\n    return _form_feedback.default;\n  }\n});\n\nvar _form_feedback = _interopRequireDefault(__webpack_require__(/*! ./form_feedback */ \"./src/components/form/form_feedback.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//# sourceURL=webpack:///./src/components/form/index.js?");

/***/ }),

/***/ "./src/modules/contact/view/contact/contacts.js":
/*!******************************************************!*\
  !*** ./src/modules/contact/view/contact/contacts.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\"));\n\nvar _index = __webpack_require__(/*! ../../../../blocks/row/index */ \"./src/blocks/row/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../../../../blocks/typography/index */ \"./src/blocks/typography/index.js\");\n\nvar _index3 = __webpack_require__(/*! ../../../../blocks/column/index */ \"./src/blocks/column/index.js\");\n\nvar _reactFela = __webpack_require__(/*! react-fela */ \"./node_modules/react-fela/es/index.js\");\n\nvar _index4 = __webpack_require__(/*! ../../../../components/decorate/index */ \"./src/components/decorate/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reactLocalizeRedux = __webpack_require__(/*! react-localize-redux */ \"./node_modules/react-localize-redux/es/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\modules\\\\contact\\\\view\\\\contact\\\\contacts.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar Contacts =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Contacts, _Component);\n\n  function Contacts(props) {\n    var _this;\n\n    _classCallCheck(this, Contacts);\n\n    _this = _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this, props));\n    _this.state = _this.initialState;\n    _this.renderContactRow = _this.renderContactRow.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(Contacts, [{\n    key: \"renderContactRow\",\n    value: function renderContactRow(props, index) {\n      var _props = this.props,\n          styles = _props.styles,\n          translate = _props.translate;\n      return _react.default.createElement(_index.Row, {\n        key: \"renderContactRow-\".concat(index),\n        className: styles.row,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44\n        },\n        __self: this\n      }, _react.default.createElement(_index3.Column, {\n        grid: [[500, 33.3333333, '%'], [0, 20, '%']],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45\n        },\n        __self: this\n      }, translate(props.title)), _react.default.createElement(_index3.Column, {\n        grid: [[500, 33.3333333, '%'], [0, 20, '%']],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52\n        },\n        __self: this\n      }, _react.default.createElement(_index4.DecorateDots, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56\n        },\n        __self: this\n      })), _react.default.createElement(_index3.Column, {\n        grid: [[500, 33.3333333, '%'], [0, 60, '%']],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58\n        },\n        __self: this\n      }, props.content));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _props2 = this.props,\n          data = _props2.data,\n          styles = _props2.styles;\n      return (// <div className={styles.wrapper}>\n        //     {\n        //         data.map((item,index) => this.renderContactRow(item))\n        //     }\n        // </div>\n        _react.default.createElement(_index2.Typography, {\n          as: 'p',\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 76\n          },\n          __self: this\n        }, data.map(function (item, index) {\n          return _this2.renderContactRow(item, index);\n        }))\n      );\n    }\n  }, {\n    key: \"initialState\",\n    get: function get() {\n      return {};\n    }\n  }]);\n\n  return Contacts;\n}(_react.Component);\n\nObject.defineProperty(Contacts, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {}\n});\nObject.defineProperty(Contacts, \"defaultProps\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    data: [{\n      title: 'contact_phone',\n      content: '0 000 000 00 00'\n    }, {\n      title: 'contact_email',\n      content: 'email@email.com'\n    }, {\n      title: 'contact_address',\n      content: 'Country, city blbalabla st. 15/ 45'\n    }]\n  }\n});\n\nvar STYLE = function STYLE() {\n  return {\n    // wrapper: {\n    //     marginBottom: '3rem',\n    //     marginTop: '3rem',\n    //     color: '#FDF396',\n    // },\n    row: {\n      marginBottom: '1.5rem',\n      marginTop: '1.5rem'\n    },\n    colDot: {}\n  };\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: (0, _reactLocalizeRedux.getTranslate)(state.locale),\n    currentLanguage: (0, _reactLocalizeRedux.getActiveLanguage)(state.locale).code\n  };\n};\n\nContacts = (0, _reactFela.connect)(STYLE)(Contacts);\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Contacts);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/modules/contact/view/contact/contacts.js?");

/***/ }),

/***/ "./src/modules/contact/view/contact/index.js":
/*!***************************************************!*\
  !*** ./src/modules/contact/view/contact/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _title = _interopRequireDefault(__webpack_require__(/*! ../../../../blocks/title/title */ \"./src/blocks/title/title.js\"));\n\nvar _index = __webpack_require__(/*! ../../../../blocks/container/index */ \"./src/blocks/container/index.js\");\n\nvar _index2 = __webpack_require__(/*! ../../../../blocks/row/index */ \"./src/blocks/row/index.js\");\n\nvar _index3 = __webpack_require__(/*! ../../../../blocks/column/index */ \"./src/blocks/column/index.js\");\n\nvar _index4 = __webpack_require__(/*! ../../../../components/form/index */ \"./src/components/form/index.js\");\n\nvar _index5 = __webpack_require__(/*! ../../../../components/top/index */ \"./src/components/top/index.js\");\n\nvar _contacts = _interopRequireDefault(__webpack_require__(/*! ./contacts */ \"./src/modules/contact/view/contact/contacts.js\"));\n\nvar _index6 = __webpack_require__(/*! ../../../../components/topLabel/index */ \"./src/components/topLabel/index.js\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _reactLocalizeRedux = __webpack_require__(/*! react-localize-redux */ \"./node_modules/react-localize-redux/es/index.js\");\n\nvar _jsxFileName = \"E:\\\\development\\\\compaero.project\\\\emernatar.io-ssr\\\\src\\\\modules\\\\contact\\\\view\\\\contact\\\\index.js\";\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ContactPage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ContactPage, _Component);\n\n  function ContactPage() {\n    _classCallCheck(this, ContactPage);\n\n    return _possibleConstructorReturn(this, (ContactPage.__proto__ || Object.getPrototypeOf(ContactPage)).apply(this, arguments));\n  }\n\n  _createClass(ContactPage, [{\n    key: \"render\",\n    value: function render() {\n      var translate = this.props.translate;\n      return _react.default.createElement(_react.Fragment, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20\n        },\n        __self: this\n      }, _react.default.createElement(_index5.Top, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21\n        },\n        __self: this\n      }, translate('contact_contacts')), _react.default.createElement(_index.Container, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24\n        },\n        __self: this\n      }, _react.default.createElement(_index2.Row, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25\n        },\n        __self: this\n      }, _react.default.createElement(_index3.Column, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26\n        },\n        __self: this\n      }, _react.default.createElement(_index6.TopLabelRow, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 27\n        },\n        __self: this\n      }, _react.default.createElement(_index6.TopLabel, {\n        isActive: true,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31\n        },\n        __self: this\n      }, translate('contact_ask_a_question')))))), _react.default.createElement(_index.Container, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39\n        },\n        __self: this\n      }, _react.default.createElement(_index2.Row, {\n        justifyContent: 'center',\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40\n        },\n        __self: this\n      }, _react.default.createElement(_index3.Column, {\n        grid: [[700, 50, '%']],\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 41\n        },\n        __self: this\n      }, _react.default.createElement(_index4.FormFeedback, {\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42\n        },\n        __self: this\n      })))));\n    }\n  }]);\n\n  return ContactPage;\n}(_react.Component);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    translate: (0, _reactLocalizeRedux.getTranslate)(state.locale),\n    currentLanguage: (0, _reactLocalizeRedux.getActiveLanguage)(state.locale).code\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(ContactPage);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/modules/contact/view/contact/index.js?");

/***/ }),

/***/ "./src/utils/validation/required.js":
/*!******************************************!*\
  !*** ./src/utils/validation/required.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.required = void 0;\n\nvar required = function required(message) {\n  return function (value) {\n    return value ? undefined : message;\n  };\n};\n\nexports.required = required;\n\n//# sourceURL=webpack:///./src/utils/validation/required.js?");

/***/ })

}]);