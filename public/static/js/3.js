(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1072:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=(p(r(1087)),r(346)),i=(r(347),r(345),r(1121),r(1074)),a=p(r(1240)),l=p(r(1239)),u=r(1073),c=(r(1236),r(1235),r(1234)),s=(r(50),r(67)),f=r(27),m="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\modules\\about\\view\\about\\index.js";function p(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var _=[{title:"about_notarize",content:n.default.createElement(a.default,{__source:{fileName:m,lineNumber:21},__self:void 0})},{title:"about_verify",content:n.default.createElement(l.default,{__source:{fileName:m,lineNumber:24},__self:void 0})}],v=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==d(o)&&"function"!=typeof o?y(n):o).state=r.initialState,r.toggleTab=r.toggleTab.bind(y(r)),r}var r,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(a=[{key:"toggleTab",value:function(e){console.log(e),this.setState({isActive:e})}},{key:"render",value:function(){var e=this,t=this.state.isActive,r=this.props.translate;return n.default.createElement(n.Fragment,{__source:{fileName:m,lineNumber:54},__self:this},n.default.createElement(i.Top,{__source:{fileName:m,lineNumber:55},__self:this},r("about_aboutus")),n.default.createElement(o.Container,{__source:{fileName:m,lineNumber:58},__self:this},n.default.createElement(u.TopLabelRow,{__source:{fileName:m,lineNumber:59},__self:this},_.map(function(o,i){return n.default.createElement(u.TopLabel,{isActive:i===t,key:i.toString(),index:i,toggleTab:function(){e.toggleTab(i)},__source:{fileName:m,lineNumber:62},__self:this},r(o.title))})),n.default.createElement(c.TabPanel,{isActive:t,__source:{fileName:m,lineNumber:67},__self:this},_.map(function(e,t){return n.default.createElement("div",{key:t,__source:{fileName:m,lineNumber:69},__self:this},e.content)}))))}},{key:"initialState",get:function(){return{isActive:0}}}])&&b(r.prototype,a),l&&b(r,l),t}();Object.defineProperty(v,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(v,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var h=(0,f.connect)(function(e){return{translate:(0,s.getTranslate)(e.locale),currentLanguage:(0,s.getActiveLanguage)(e.locale).code}})(v);t.default=h},1083:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DecorateDots",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(1085))&&n.__esModule?n:{default:n}},1085:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=((n=r(2))&&n.__esModule,"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\decorate\\decorate_dots.js");var a=(0,r(14).connect)(function(e){var t=e.theme;return{wrapper:{fontSize:0,display:"inline-block",lineHeight:"0.75rem",whiteSpace:"nowrap",margin:"auto"},dot:{display:"inline-block",width:"0.75rem",height:"0.75rem",margin:"0 0.1875rem",verticalAlign:"middle",borderRadius:"50%",backgroundColor:t.palette.secondary.light,":nth-child(2n)":{backgroundColor:t.palette.secondary.main},":nth-child(3n)":{backgroundColor:t.palette.secondary.dark}}}})(function(e){var t=e.styles;return o.default.createElement("div",{className:t.wrapper,__source:{fileName:i,lineNumber:7},__self:this},o.default.createElement("div",{className:t.dot,__source:{fileName:i,lineNumber:8},__self:this}),o.default.createElement("div",{className:t.dot,__source:{fileName:i,lineNumber:9},__self:this}),o.default.createElement("div",{className:t.dot,__source:{fileName:i,lineNumber:10},__self:this}))});t.default=a},1087:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=((n=r(2))&&n.__esModule,r(202));function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=(0,r(14).createComponentWithProxy)(function(e){var t=e.as,r=void 0===t?"default":t,n=e.textTransform,o=void 0!==n&&n,i=e.fontWeight,l=void 0!==i&&i,u=e.textAlign;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({lineHeight:1.2,as:r},o?{textTransform:"uppercase"}:null,l?{fontWeights:"700"}:null,void 0!==u&&u?{textAlign:"center"}:null)},function e(t){var r=(0,i.getElementType)(e,t);return o.default.createElement(r,{className:t.className,__source:{fileName:"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\title\\title.js",lineNumber:62},__self:this},t.children||"")});t.default=l},1094:function(e,t){e.exports="/static/media/icon_pluse-3b884da7.svg"},1095:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(1))&&n.__esModule?n:{default:n},i=r(14),a=r(344),l=r(343),u="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\about\\about_item.js";function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){s(e,t,r[t])})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=(0,i.connect)(function(e){e.theme;var t=e.variant,r=void 0===t?"vertical":t;return{aboutWrapper:c({width:"100%",display:"inline-flex !important",flexDirection:"row",justifyContent:"flex-start",alignItems:"flex-start",verticalAlign:"inherit"},"vertical"===r?{"@media(min-width: 768px)":{alignItems:"center",flexDirection:"column",justifyContent:"center"}}:null),aboutIconWrapper:c({position:"relative",backgroundColor:"#4F4F4F",borderRadius:"50%",overflow:"hidden",width:"5rem",height:"5rem",minWidth:"5rem",marginRight:"2rem"},"vertical"===r?{"@media(min-width: 768px)":{marginRight:"0"}}:null),aboutIconImage:{position:"absolute !important",width:"50%",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},aboutContent:c({textAlign:"left"},"vertical"===r?{"@media(min-width: 768px)":{textAlign:"center"}}:null),aboutTitle:c({marginBottom:"1rem",marginTop:0},"vertical"===r?{"@media(min-width: 768px)":{marginTop:"1.4rem"}}:null),aboutDescription:{margin:"0"}}})(function(e){var t=e.styles,r=e.title,n=e.description,i=e.icon;return o.default.createElement("div",{className:t.aboutWrapper,__source:{fileName:u,lineNumber:8},__self:this},o.default.createElement("div",{className:t.aboutIconWrapper,__source:{fileName:u,lineNumber:9},__self:this},o.default.createElement(a.Image,{className:t.aboutIconImage,src:i,__source:{fileName:u,lineNumber:10},__self:this})),o.default.createElement("div",{className:t.aboutContent,__source:{fileName:u,lineNumber:12},__self:this},o.default.createElement(l.Typography,{className:t.aboutTitle,as:"h3",size:"medium",fontWeight:"bold",textAlign:"inherit",__source:{fileName:u,lineNumber:13},__self:this},r),o.default.createElement(l.Typography,{className:t.aboutDescription,as:"p",size:"small",textAlign:"inherit",__source:{fileName:u,lineNumber:22},__self:this},n)))});t.default=f},1112:function(e,t){e.exports="/static/media/icon_clock-b5d62328.svg"},1113:function(e,t){e.exports="/static/media/icon_email-afaa036e.svg"},1114:function(e,t){e.exports="/static/media/icon_paypal-cceed1ec.svg"},1115:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"InputLabel",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"InputMessage",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"InputText",{enumerable:!0,get:function(){return i.InputText}}),Object.defineProperty(t,"InputWrapper",{enumerable:!0,get:function(){return a.default}});var n=l(r(1118)),o=l(r(1117)),i=r(1086),a=l(r(1119));function l(e){return e&&e.__esModule?e:{default:e}}},1116:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Textarea=void 0;var n,o,i,a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=(n=r(2))&&n.__esModule?n:{default:n},u=r(14),c=r(1115),s="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\input-fela\\textarea.js";function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=(0,u.createComponentWithProxy)(function(){return{backgroundColor:" rgb(255, 255, 255)",borderRadius:"0.25rem",border:"0.0625rem solid rgb(204, 204, 204)",color:"rgb(51, 51, 51)",cursor:"auto",overflow:"hidden",position:"relative",width:"100%",padding:"0.625rem"}},(i=o=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=(e.input,e.label),r=(e.className,e.meta);return a.default.createElement(c.InputWrapper,{__source:{fileName:s,lineNumber:49},__self:this},a.default.createElement(c.InputLabel,{__source:{fileName:s,lineNumber:51},__self:this},t),r&&a.default.createElement(c.InputMessage,{meta:r,__source:{fileName:s,lineNumber:59},__self:this}))}},{key:"initialState",get:function(){return{}}}])&&m(r.prototype,n),o&&m(r,o),t}(),Object.defineProperty(o,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{input:l.default.object.isRequired,label:l.default.oneOfType([l.default.object,l.default.string]),meta:l.default.object.isRequired}}),Object.defineProperty(o,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}}),i));t.Textarea=d},1120:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=(b(r(2)),r(352)),i=r(1086),a=(r(1116),r(343)),l=r(349),u=r(14),c=b(r(348)),s=r(201),f=r(67),m=r(27),p="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\form\\form_feedback.js",d=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["mutation createFeedback(\n    $name: String,\n    $email: String,\n    $title: String,\n    $message: String,\n    ){\n        createFeedback(\n            name:$name,\n            email:$email,\n            title:$title,\n            message:$message,\n        ) {\n            name\n            email\n            title\n            message\n        }\n    }"]);function b(e){return e&&e.__esModule?e:{default:e}}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var h=(0,c.default)(d),g=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,u,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(u=[{key:"submit",value:function(e){var t={variables:e};this.props.createFeedback(t).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props,r=t.handleSubmit,u=(t.reset,t.error,t.pristine),c=t.submitting,s=t.styles,f=t.translate;return n.default.createElement("form",{onSubmit:r(function(t){return e.submit(t)}),__source:{fileName:p,lineNumber:67},__self:this},n.default.createElement(o.Field,{name:"name",component:i.InputText,placeholder:f("contact_form_name"),type:"text",__source:{fileName:p,lineNumber:68},__self:this}),n.default.createElement(o.Field,{name:"email",component:i.InputText,placeholder:f("contact_form_email"),type:"email",__source:{fileName:p,lineNumber:74},__self:this}),n.default.createElement(o.Field,{name:"title",component:i.InputText,placeholder:f("contact_form_theme"),type:"text",__source:{fileName:p,lineNumber:80},__self:this}),n.default.createElement(o.Field,{name:"message",component:i.InputText,placeholder:f("contact_form_message"),type:"textarea",__source:{fileName:p,lineNumber:86},__self:this}),n.default.createElement("div",{className:s.footer,__source:{fileName:p,lineNumber:92},__self:this},n.default.createElement(l.Button,{variant:"raised",color:"primary",type:"submit",disabled:u||c,__source:{fileName:p,lineNumber:93},__self:this},n.default.createElement(a.Typography,{as:"p",size:"small",color:"secondary",bright:"contrastText",__source:{fileName:p,lineNumber:95},__self:this},f("contact_submit")))))}},{key:"initialState",get:function(){return{}}}])&&_(r.prototype,u),c&&_(r,c),t}();Object.defineProperty(g,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(g,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});g=(0,u.connect)(function(){return{maxWidth:"100%",footer:{textAlign:"right",marginBottom:"5rem"}}})(g),g=(0,o.reduxForm)({form:"FormFeedback"})(g),g=(0,s.graphql)(h,{name:"createFeedback",mutate:{fetchPolicy:"no-cache",errorPolicy:"all"}})(g);var O=(0,m.connect)(function(e){return{translate:(0,f.getTranslate)(e.locale),currentLanguage:(0,f.getActiveLanguage)(e.locale).code}})(g);t.default=O},1121:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FormFeedback",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(1120))&&n.__esModule?n:{default:n}},1234:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabPanel=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=(n=r(2))&&n.__esModule?n:{default:n};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.isActive,n=e.className;return o.default.createElement("div",{className:n,role:"tabpanel","aria-labelledby":"ch1Tab",__source:{fileName:"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\tabs\\tab_panel.js",lineNumber:29},__self:this},t[r])}},{key:"initialState",get:function(){return{}}}])&&l(r.prototype,n),i&&l(r,i),t}();t.TabPanel=c,Object.defineProperty(c,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{children:i.default.any,isActive:i.default.oneOfType([i.default.string,i.default.number]),className:i.default.string}}),Object.defineProperty(c,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{className:"tab_panel"}})},1235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabItem=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=(n=r(2))&&n.__esModule?n:{default:n},a="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\tabs\\tabs_tab-item.js";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var s=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.isActive,n=e.index,i=e.toggleTab,l=e.disabled,u=e.classNameWrap,c=void 0===u?"tab_item":u,s=e.classNameBtn,f=void 0===s?"tab_button":s;return o.default.createElement("li",{className:c,role:"tab",__source:{fileName:a,lineNumber:48},__self:this},o.default.createElement("button",{onClick:function(){i(n)},disabled:l||!1,"data-tab-index":n,className:"".concat(f)+(r===n?" ".concat(f,"--active"):""),__source:{fileName:a,lineNumber:49},__self:this},t))}},{key:"initialState",get:function(){return{}}}])&&u(r.prototype,n),i&&u(r,i),t}();t.TabItem=s,Object.defineProperty(s,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{children:i.default.any.isRequired,isActive:i.default.oneOfType([i.default.string,i.default.number]).isRequired,index:i.default.oneOfType([i.default.string,i.default.number]).isRequired,toggleTab:i.default.func.isRequired,disabled:i.default.bool,classNameWrap:i.default.string,classNameBtn:i.default.string}}),Object.defineProperty(s,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{classNameWrap:"tab_item",classNameBtn:"tab_button"}})},1236:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TabList=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=(n=r(2))&&n.__esModule?n:{default:n};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,n=e.style;return o.default.createElement("ol",{className:r,style:n,role:"tablist",__source:{fileName:"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\tabs\\tab_list.js",lineNumber:26},__self:this},t)}},{key:"initialState",get:function(){return{}}}])&&l(r.prototype,n),i&&l(r,i),t}();t.TabList=c,Object.defineProperty(c,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{children:i.default.any.isRequired,className:i.default.string}}),Object.defineProperty(c,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{className:"tab_list"}})},1237:function(e,t){e.exports="/static/media/icon_search-9008f843.svg"},1238:function(e,t){e.exports="/static/media/icon_question-cd02d3c2.svg"},1239:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=(d(r(2)),r(347)),i=r(345),a=r(14),l=r(1083),u=r(343),c=(r(344),d(r(1095))),s=d(r(1094)),f=d(r(1238)),m=d(r(1237)),p="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\modules\\about\\view\\about\\about-verify.js";function d(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==b(o)&&"function"!=typeof o?_(n):o).state=r.initialState,r.renderNotarize=r.renderNotarize.bind(_(r)),r}var r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(a=[{key:"renderNotarize",value:function(e,t){var r=this.props.styles;return n.default.createElement(n.Fragment,{key:"renderNotarize-".concat(t),__source:{fileName:p,lineNumber:53},__self:this},n.default.createElement(o.Row,{className:r.row,__source:{fileName:p,lineNumber:54},__self:this},n.default.createElement(i.Column,{className:r.column,grid:[[1024,20,"%"]],__source:{fileName:p,lineNumber:55},__self:this},n.default.createElement(c.default,{icon:e.icon,__source:{fileName:p,lineNumber:59},__self:this})),n.default.createElement(i.Column,{className:r.column,grid:[[1024,80,"%"]],__source:{fileName:p,lineNumber:63},__self:this},n.default.createElement(u.Typography,{as:"h4",size:"medium",fontWeight:"bold",__source:{fileName:p,lineNumber:67},__self:this},e.title),n.default.createElement(u.Typography,{as:"p",size:"small",__source:{fileName:p,lineNumber:70},__self:this},e.content))),n.default.createElement(o.Row,{className:r.row,__source:{fileName:p,lineNumber:75},__self:this},n.default.createElement(l.DecorateDots,{__source:{fileName:p,lineNumber:76},__self:this})))}},{key:"render",value:function(){var e=this,t=this.props,r=t.data,o=t.styles;return n.default.createElement("div",{className:o.wrapper,__source:{fileName:p,lineNumber:85},__self:this},r.map(function(t,r){return e.renderNotarize(t,r)}))}},{key:"initialState",get:function(){return{}}}])&&y(r.prototype,a),s&&y(r,s),t}();Object.defineProperty(v,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(v,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{data:[{icon:s.default,title:"Add file",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{icon:m.default,title:"Searching",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{icon:f.default,title:"Answer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]}});var h=(0,a.connect)(function(){return{row:{minHeight:"70px",display:"flex",verticalAlign:"middle",marginBottom:"1.5rem"},column:{alignSelf:"baseline",alignItems:"center"},colDot:{}}})(v);t.default=h},1240:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=(b(r(2)),r(347)),i=r(345),a=r(14),l=r(1083),u=r(343),c=b(r(1095)),s=b(r(1114)),f=b(r(1094)),m=b(r(1113)),p=b(r(1112)),d="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\modules\\about\\view\\about\\about-notarize.js";function b(e){return e&&e.__esModule?e:{default:e}}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(r=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==y(o)&&"function"!=typeof o?v(n):o).state=r.initialState,r.renderVerify=r.renderVerify.bind(v(r)),r}var r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(a=[{key:"renderVerify",value:function(e,t){var r=this.props.styles;return n.default.createElement(n.Fragment,{key:"renderVerify-".concat(t),__source:{fileName:d,lineNumber:58},__self:this},n.default.createElement(o.Row,{className:r.row,__source:{fileName:d,lineNumber:59},__self:this},n.default.createElement(i.Column,{className:r.column,grid:[[1024,20,"%"]],__source:{fileName:d,lineNumber:60},__self:this},n.default.createElement(c.default,{icon:e.icon,__source:{fileName:d,lineNumber:64},__self:this})),n.default.createElement(i.Column,{className:r.column,grid:[[1024,80,"%"]],__source:{fileName:d,lineNumber:68},__self:this},n.default.createElement(u.Typography,{as:"h4",size:"medium",fontWeight:"bold",__source:{fileName:d,lineNumber:72},__self:this},e.title),n.default.createElement(u.Typography,{as:"p",size:"small",__source:{fileName:d,lineNumber:75},__self:this},e.content))),n.default.createElement(o.Row,{className:r.row,__source:{fileName:d,lineNumber:80},__self:this},n.default.createElement(l.DecorateDots,{__source:{fileName:d,lineNumber:81},__self:this})))}},{key:"render",value:function(){var e=this,t=this.props,r=t.data,o=t.styles;return n.default.createElement("div",{className:o.wrapper,__source:{fileName:d,lineNumber:90},__self:this},r.map(function(t,r){return e.renderVerify(t,r)}))}},{key:"initialState",get:function(){return{}}}])&&_(r.prototype,a),s&&_(r,s),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{data:[{icon:f.default,title:"Add file",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{icon:s.default,title:"Pay",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{icon:p.default,title:"Wait",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{icon:m.default,title:"Answer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]}});var g=(0,a.connect)(function(){return{row:{minHeight:"70px",display:"flex",verticalAlign:"middle",marginBottom:"1.5rem"},column:{alignSelf:"baseline",alignItems:"center"},colDot:{}}})(h);t.default=g}}]);