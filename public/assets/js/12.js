(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{1080:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=(P(r(2)),r(44)),a=r(18),i=r(15),l=r(207),u=r(208),s=r(206),c=r(1090),f=r(1089),m=r(134),p=r(349),d=r(351),_=r(51),h=P(r(1129)),b=P(r(1099)),y=P(r(1152)),g=P(r(1112)),v=P(r(1234)),N=P(r(1233)),O=r(209),w=P(r(350)),j=r(352),E="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\modules\\verify\\view\\verify\\index.js",k=I(["query certificate($hash: String){\n    certificate(hash: $hash){\n        emerhash \n    }\n}"]),C=I(["query($name: String){\n    certificateList(name: $name) {\n        name\n        notarizationDate\n        ownerEmail\n    }\n}"]);function P(e){return e&&e.__esModule?e:{default:e}}function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(0,w.default)(k);var M=(0,w.default)(C),V=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==x(o)&&"function"!=typeof o?S(n):o).state=r.initialState,r.onModalToggle=r.onModalToggle.bind(S(r)),r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(o=[{key:"onModalToggle",value:function(e){console.log(e),this.setState({open:e})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,r=t.translate,o=t.styles,a=this.state.open;return console.log(this.props),n.default.createElement(n.Fragment,{__source:{fileName:E,lineNumber:103},__self:this},n.default.createElement(c.Top,{paddingBottom:"9rem",__source:{fileName:E,lineNumber:104},__self:this},r("verify_verify")),n.default.createElement(l.Container,{__source:{fileName:E,lineNumber:107},__self:this},n.default.createElement(u.Row,{__source:{fileName:E,lineNumber:108},__self:this},n.default.createElement(s.Column,{__source:{fileName:E,lineNumber:109},__self:this},n.default.createElement(f.TopLabelRow,{__source:{fileName:E,lineNumber:110},__self:this},n.default.createElement(f.TopLabel,{as:"div",isActive:!0,__source:{fileName:E,lineNumber:111},__self:this},n.default.createElement(m.Typography,{styles:{margin:"0 0 2rem 0"},as:"h2",size:"large",fontWeight:"bold",textAlign:"center",color:"secondary",bright:"contrastText",__source:{fileName:E,lineNumber:113},__self:this},r("verify_file_hash")),n.default.createElement(p.Image,{className:o.topLabelIcon,src:g.default,__source:{fileName:E,lineNumber:118},__self:this}),n.default.createElement(u.Row,{justifyContent:"spaceBetween",__source:{fileName:E,lineNumber:122},__self:this},n.default.createElement(s.Column,{styles:{display:"inline-block"},__source:{fileName:E,lineNumber:123},__self:this},n.default.createElement(_.Link,{to:"/",styles:{textDecoration:"none"},__source:{fileName:E,lineNumber:124},__self:this},n.default.createElement(d.Button,{variant:"raised",color:"primary",__source:{fileName:E,lineNumber:125},__self:this},n.default.createElement(p.Image,{src:b.default,styles:{padding:"0.2rem"},__source:{fileName:E,lineNumber:126},__self:this}),n.default.createElement(m.Typography,{as:"p",size:"small",textDecoration:"none",color:"secondary",bright:"contrastText",__source:{fileName:E,lineNumber:127},__self:this},r("verify_home"))))),n.default.createElement(s.Column,{styles:{display:"inline-block"},__source:{fileName:E,lineNumber:134},__self:this},n.default.createElement(d.Button,{onClick:function(){return e.onModalToggle(!0)},variant:"raised",color:"primary",__source:{fileName:E,lineNumber:135},__self:this},n.default.createElement(p.Image,{src:y.default,styles:{padding:"0.2rem",height:"2.3rem"},__source:{fileName:E,lineNumber:137},__self:this}),n.default.createElement(m.Typography,{as:"p",size:"small",color:"secondary",bright:"contrastText",styles:{marginRight:"0.5rem"},__source:{fileName:E,lineNumber:138},__self:this},r("verify_notarize")))))))))),n.default.createElement(l.Container,{styles:{maxWidth:"768px !important",marginBottom:"5rem",marginTop:"-5rem"},__source:{fileName:E,lineNumber:151},__self:this},n.default.createElement(u.Row,{__source:{fileName:E,lineNumber:152},__self:this},n.default.createElement(s.Column,{__source:{fileName:E,lineNumber:153},__self:this},this.props.match.params.hash&&n.default.createElement(O.Query,{query:M,variables:{name:this.props.match.params.hash},ssr:!1,__source:{fileName:E,lineNumber:156},__self:this},function(e){var t=e.loading,o=e.error,a=e.data;return console.log(t,o,a),t?n.default.createElement(j.PreLoader,{palette:"dark",__source:{fileName:E,lineNumber:163},__self:this}):o?n.default.createElement(m.Typography,{as:"p",size:"medium",color:"error",bright:"dark",fontWeight:"bold",textAlign:"center",__source:{fileName:E,lineNumber:166},__self:this},r("home_network_error")):a.certificateList&&a.certificateList.length?n.default.createElement(n.Fragment,{__source:{fileName:E,lineNumber:180},__self:this},n.default.createElement(m.Typography,{as:"h3",size:"large",fontWeight:"bold",textAlign:"center",__source:{fileName:E,lineNumber:181},__self:this},r("verify_file_is_not_unique"),n.default.createElement("br",{__source:{fileName:E,lineNumber:187},__self:this}),r("verify_matches_found"),": ",a.certificateList.length),a.certificateList.map(function(e,t){return n.default.createElement(v.default,{data:e,key:"VerifyItem-".concat(t),__source:{fileName:E,lineNumber:192},__self:this})})):n.default.createElement(n.Fragment,{__source:{fileName:E,lineNumber:199},__self:this},n.default.createElement(m.Typography,{styles:{marginBottom:"5rem"},as:"h3",size:"large",fontWeight:"bold",textAlign:"center",__source:{fileName:E,lineNumber:200},__self:this},r("verify_not_matches_found")))})))),n.default.createElement(N.default,{open:a,onModalToggle:this.onModalToggle,__source:{fileName:E,lineNumber:222},__self:this}))}},{key:"initialState",get:function(){return{open:!1,hasError:!1,hash:h.default.toObject(window.location.search.substring(1)).hash}}}])&&T(r.prototype,o),a&&T(r,a),t}();Object.defineProperty(V,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(V,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{match:{params:{hash:null}}}});V=(0,i.connect)(function(){return{topLabel:{padding:"2rem 5rem !important"},topLabelIcon:{marginBottom:"3rem !important",height:"6.25rem"}}})(V);var L=V=(0,a.connect)(function(e){return{translate:(0,o.getTranslate)(e.locale),currentLanguage:e.locale?(0,o.getActiveLanguage)(e.locale).code:null,preLoader:e.preLoader.toggle}})(V);t.default=L},1099:function(e,t){e.exports="/assets/media/icon_home-9d8cd709.svg"},1112:function(e,t){e.exports="/assets/media/icon_verify-79cd01e0.svg"},1152:function(e,t){e.exports="/assets/media/icon_notorize-black-1c328f6d.svg"},1174:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RadioGroup=t.Radio=void 0;var n=i(r(2)),o=i(r(1)),a=(r(15),"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\input-fela\\input_radio-group\\input_radio-group.js");function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){function t(){return s(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,o.default.Component),f(t,[{key:"render",value:function(){var e=this.context.radioGroup,t=e.name,r=e.selectedValue,n=e.onChange,i={};return void 0!==r&&(i.checked=this.props.value===r),"function"==typeof n&&(i.onChange=n.bind(null,this.props.value)),o.default.createElement("input",u({},this.props,{type:"radio",name:t},i,{__source:{fileName:a,lineNumber:17},__self:this}))}}]),t}();t.Radio=d,d.contextTypes={radioGroup:n.default.object};var _=function(e){function t(){return s(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,o.default.Component),f(t,[{key:"getChildContext",value:function(){var e=this.props;return{radioGroup:{name:e.name,selectedValue:e.selectedValue,onChange:e.onChange}}}},{key:"render",value:function(){var e=this.props,t=e.Component,r=(e.name,e.selectedValue,e.onChange,e.children),n=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["Component","name","selectedValue","onChange","children"]);return o.default.createElement(t,u({},n,{__source:{fileName:a,lineNumber:42},__self:this}),r)}}]),t}();t.RadioGroup=_,_.defaultProps={Component:"div"},_.propTypes={name:n.default.string,selectedValue:n.default.oneOfType([n.default.string,n.default.number,n.default.bool]),onChange:n.default.func,children:n.default.node.isRequired,Component:n.default.oneOfType([n.default.string,n.default.func,n.default.object])},_.childContextTypes={radioGroup:n.default.object}},1175:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.CheckboxGroup=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(15),a="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\input-fela\\input_checkbox-group\\input_checkbox-group.js";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var h=function(e){function t(){return u(this,t),f(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return p(t,n.Component),c(t,[{key:"componentWillMount",value:function(){if(!this.props||!this.props.checkboxGroup)throw new Error("The `Checkbox` component must be used as a child of `CheckboxGroup`.")}},{key:"render",value:function(){var e=this.props,t=e.checkboxGroup,r=t.name,o=t.checkedValues,i=t.onChange,u=_(e,["checkboxGroup"]),s={};return o&&(s.checked=o.indexOf(this.props.value)>=0),"function"==typeof i&&(s.onChange=i.bind(null,this.props.value)),n.default.createElement("input",l({},u,{type:"checkbox",name:r,disabled:this.props.disabled},s,{__source:{fileName:a,lineNumber:70},__self:this}))}}]),t}();Object.defineProperty(h,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"Checkbox"});var b=function(e){function t(e){var r;return u(this,t),r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),Object.defineProperty(m(r),"_prepareBoxes",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(o>t)return e;var a={name:r.props.name,checkedValues:r.state.value,onChange:r._onCheckboxChange};return n.default.Children.map(e,function(e){return e&&e.$$typeof?e.type===h?n.default.cloneElement(e,{checkboxGroup:a}):n.default.cloneElement(e,{},e.props.children?n.default.Children.map(e.props.children,function(e){return r._prepareBoxes(e,t,o+1)}):null):e})}}),r._isControlledComponent=r._isControlledComponent.bind(m(r)),r._onCheckboxChange=r._onCheckboxChange.bind(m(r)),r.getValue=r.getValue.bind(m(r)),r.state={value:r.props.value||r.props.defaultValue||[]},r}return p(t,n.Component),c(t,[{key:"componentWillReceiveProps",value:function(e){e.value&&this.setState({value:e.value})}},{key:"render",value:function(){var e=this.props,t=e.Component,r=(e.name,e.value,e.onChange,e.children),o=e.checkboxDepth,i=void 0===o?1:o,u=_(e,["Component","name","value","onChange","children","checkboxDepth"]);return n.default.createElement(t,l({},u,{__source:{fileName:a,lineNumber:132},__self:this}),this._prepareBoxes(r,i))}},{key:"getValue",value:function(){return this.state.value}},{key:"_isControlledComponent",value:function(){return Boolean(this.props.value)}},{key:"_onCheckboxChange",value:function(e,t){var r;r=t.target.checked?this.state.value.concat(e):this.state.value.filter(function(t){return t!==e}),this._isControlledComponent()?this.setState({value:this.props.value}):this.setState({value:r}),"function"==typeof this.props.onChange&&this.props.onChange(r,t,this.props.name)}}]),t}();t.CheckboxGroup=b,Object.defineProperty(b,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"CheckboxGroup"}),Object.defineProperty(b,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{Component:"div"}});var y=h=(0,o.connect)(function(e){var t=e.value,r=_(e,["value"]);return console.log(t),console.log(r),{inputCheck:{position:"absolute",opacity:"0",visibility:"hidden"},inputDot:{position:"relative",display:"block",width:"1rem",height:"1rem",borderRadius:"50%",border:"1px solid #AEAEAE",verticalAlign:"middle",":before":function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){d(e,t,r[t])})}return e}({content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",borderRadius:"50%",display:"block",width:"0.5rem",height:"0.5rem",backgroundColor:"#000",opacity:"0"},t?{opacity:"1"}:null)},inputDescription:{display:"inline-block",verticalAlign:"middle",paddingLeft:"1rem"}}})(h);t.default=y},1233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=v(r(1232)),a=v(r(350)),i=r(209),l=r(134),u=r(15),s=r(359),c=r(351),f=r(1131),m=r(349),p=(r(1175),r(1174)),d=r(44),_=v(r(1152)),h=r(18),b=r(352),y="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\modules\\verify\\view\\verify\\verify_modal.js",g=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["mutation createNotarization(\n    $name: String!,\n    $emailHashed: Boolean,\n    $docName: String,\n    $additionalInfo: String,\n    $creationTime: Int,\n    ){\n        createNotarization(\n            name:$name,\n            emailHashed:$emailHashed,\n            docName:$docName,\n            additionalInfo:$additionalInfo,\n            creationTime:$creationTime\n        ) {\n            name\n            emailHashed\n            docName\n            additionalInfo\n            creationTime\n        }\n    }"]);function v(e){return e&&e.__esModule?e:{default:e}}function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=(0,a.default)(g),k=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==N(o)&&"function"!=typeof o?j(n):o).state=r.initialState,r.handleChange=r.handleChange.bind(j(r)),r.submit=r.submit.bind(j(r)),r.onPreLoaderToggle=r.onPreLoaderToggle.bind(j(r)),r}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(a=[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e){console.log(e),this.setState({emailHashed:e})}},{key:"submit",value:function(e){console.log(e);var t=localStorage.getItem("fileHash"),r=localStorage.getItem("fileName"),n=Math.floor(Date.now()/1e3);localStorage.setItem("timestamp",n);var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){O(e,t,r[t])})}return e}({name:t,docName:r,creationTime:n},e,{emailHashed:this.state.emailHashed});o.hasOwnProperty("additionalInfo")&&o.additionalInfo||(o.additionalInfo="");var a={variables:o};this.setState({responseData:a}),this.props.onModalToggle(!1),this.onPreLoaderToggle(!0),this.props.createNotarization(a).then(function(e){console.log(e),window.location.replace("http://rc.compaero.ru/paypal/paypal")}).catch(function(e){console.log(e)})}},{key:"onPreLoaderToggle",value:function(e){console.log(open),this.setState({preLoader:e})}},{key:"render",value:function(){var e=this,t=this.props,r=t.open,a=t.onModalToggle,i=t.styles,u=t.handleSubmit,d=(t.reset,t.error),h=(t.pristine,t.submitting,t.translate),g=this.state.preLoader;return console.log(this),n.default.createElement(n.Fragment,{__source:{fileName:y,lineNumber:112},__self:this},n.default.createElement(o.default,{open:r,classNames:{modal:i.VerifyModalWrapper},onClose:function(){return a(!r)},little:!0,__source:{fileName:y,lineNumber:113},__self:this},n.default.createElement("div",{className:i.VerifyModalHeader,__source:{fileName:y,lineNumber:119},__self:this},n.default.createElement(l.Typography,{as:"h3",size:"large",fontWeight:"bold",textAlign:"center",textTransform:"uppercase",color:"secondary",bright:"contrastText",__source:{fileName:y,lineNumber:120},__self:this},h("verify_modal_title"))),n.default.createElement("form",{onSubmit:u(function(t){return e.submit(t)}),__source:{fileName:y,lineNumber:127},__self:this},n.default.createElement(p.RadioGroup,{name:"emailHashed",selectedValue:this.state.emailHashed,onChange:this.handleChange,__source:{fileName:y,lineNumber:128},__self:this},n.default.createElement(p.Radio,{value:!0,checked:!0,__source:{fileName:y,lineNumber:132},__self:this}),h("verify_modal_hash_email"),n.default.createElement("br",{__source:{fileName:y,lineNumber:132},__self:this}),n.default.createElement(p.Radio,{value:!1,__source:{fileName:y,lineNumber:133},__self:this}),h("verify_modal_open_email")),n.default.createElement("br",{__source:{fileName:y,lineNumber:135},__self:this}),n.default.createElement("label",{htmlFor:"",__source:{fileName:y,lineNumber:136},__self:this},n.default.createElement(l.Typography,{as:"p",size:"small",textDecoration:"none",color:"secondary",bright:"contrastText",__source:{fileName:y,lineNumber:137},__self:this},h("verify_modal_additional_label")),n.default.createElement(s.Field,{name:"additionalInfo",component:f.InputText,placeholder:h("verify_modal_additional_textarea"),type:"textarea",__source:{fileName:y,lineNumber:141},__self:this})),d&&n.default.createElement("strong",{__source:{fileName:y,lineNumber:148},__self:this},d),n.default.createElement("div",{className:i.VerifyModalFooter,__source:{fileName:y,lineNumber:150},__self:this},n.default.createElement(c.Button,{variant:"raised",color:"primary",type:"submit",styles:{textAlign:"center"},__source:{fileName:y,lineNumber:152},__self:this},n.default.createElement(m.Image,{src:_.default,styles:{padding:"0.2rem",maxWidth:"40px"},__source:{fileName:y,lineNumber:155},__self:this}),n.default.createElement(l.Typography,{as:"p",size:"small",textDecoration:"none",color:"secondary",bright:"contrastText",__source:{fileName:y,lineNumber:157},__self:this},h("verify_modal_btn_submit")))))),g&&n.default.createElement(b.PreLoader,{backdrop:!0,__source:{fileName:y,lineNumber:178},__self:this}))}},{key:"initialState",get:function(){return{emailHashed:!1}}}])&&w(r.prototype,a),i&&w(r,i),t}();k=(0,u.connect)(function(){return{VerifyModalWrapper:{backgroundColor:"#FDF396 !important"},VerifyModalHeader:{padding:"1rem 2rem !important"},VerifyModalContent:{padding:"1rem 2rem !important"},VerifyModalFooter:{padding:"1rem 2rem !important",textAlign:"center"},VerifyModalFooterText:{padding:"1rem 2rem !important"}}})(k),k=(0,s.reduxForm)({form:"VerifyModal"})(k),k=(0,i.graphql)(E,{name:"createNotarization",mutate:{fetchPolicy:"no-cache",errorPolicy:"all"}})(k);var C=(0,h.connect)(function(e){return{translate:(0,d.getTranslate)(e.locale),currentLanguage:(0,d.getActiveLanguage)(e.locale).code}})(k);t.default=C},1234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(r(1)),o=r(15),a=r(349),i=s(r(1112)),l=r(134),u="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\modules\\verify\\view\\verify\\verify_item.js";function s(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.connect)(function(){return{VerifyItemWrapper:{display:"flex",flexDirection:"row",marginBottom:"2rem"},VerifyItemImageWrapper:{display:"inline-block",width:"20%",overflow:"hidden"},VerifyItemImage:{width:"100%"},VerifyItemContent:{display:"inline-block",width:"80%",paddingLeft:"2rem"},VerifyItemTitle:{},VerifyItemDescription:{}}})(function(e){var t=e.className,r=e.styles,o=e.data;return n.default.createElement("div",{className:t+" "+r.VerifyItemWrapper,__source:{fileName:u,lineNumber:8},__self:this},n.default.createElement("div",{className:r.VerifyItemImageWrapper,__source:{fileName:u,lineNumber:9},__self:this},n.default.createElement(a.Image,{src:i.default,className:r.VerifyItemImage,__source:{fileName:u,lineNumber:10},__self:this})),n.default.createElement("div",{className:r.VerifyItemContent,__source:{fileName:u,lineNumber:12},__self:this},n.default.createElement(l.Typography,{styles:{wordWrap:"break-word"},fontWeight:"bold",as:"h3",size:"medium",__source:{fileName:u,lineNumber:13},__self:this},o.ownerEmail),n.default.createElement(l.Typography,{as:"p",styles:{wordWrap:"break-word"},size:"small",__source:{fileName:u,lineNumber:16},__self:this},o.name),n.default.createElement(l.Typography,{as:"p",styles:{wordWrap:"break-word"},size:"small",__source:{fileName:u,lineNumber:19},__self:this},o.notarizationDate)))});t.default=c}}]);