(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),o=(d(n(1311)),n(50)),i=n(18),a=n(212),l=n(1305),u=d(n(1300)),c=d(n(1299)),f=d(n(1298)),p=n(1120),s=n(213),y=n(211),b=n(1117);function d(e){return e&&e.__esModule?e:{default:e}}function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.content,n=e.translate;return r.default.createElement(r.Fragment,null,r.default.createElement(p.Top,null,n("help_help")),r.default.createElement(a.Container,null,r.default.createElement(s.Row,null,r.default.createElement(y.Column,null,r.default.createElement(b.TopLabelRow,null,r.default.createElement(b.TopLabel,{isActive:!0},n("help_faq")))))),r.default.createElement(a.Container,{maxWidth:"768px"},t&&t.map(function(e,t){return r.default.createElement(f.default,{id:t+1,key:"AccordionWrapper-".concat(t)},r.default.createElement(l.AccordionWrapper,{active:window.location.hash==="#".concat(t+1)?0:null},r.default.createElement(l.AccordionItem,null,r.default.createElement(l.AccordionToggle,null,r.default.createElement(u.default,{color:function(){return(t+1)%3==0?"dark":(t+1)%2==0?"main":"light"},count:t+1},n(e.title))),r.default.createElement(l.AccordionContent,null,r.default.createElement(c.default,{color:function(){return(t+1)%3==0?"dark":(t+1)%2==0?"main":"light"}},n(e.content))))))})))}}])&&v(n.prototype,o),i&&v(n,i),t}();Object.defineProperty(_,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{content:[{title:"help_question_1_title",content:"help_question_1_description"},{title:"help_question_2_title",content:"help_question_2_description"},{title:"help_question_3_title",content:"help_question_3_description"},{title:"help_question_4_title",content:"help_question_4_description"},{title:"help_question_5_title",content:"help_question_5_description"},{title:"help_question_6_title",content:"help_question_6_description"},{title:"help_question_7_title",content:"help_question_7_description"},{title:"help_question_8_title",content:"help_question_8_description"},{title:"help_question_9_title",content:"help_question_9_description"},{title:"help_question_10_title",content:"help_question_10_description"},{title:"help_question_11_title",content:"help_question_11_description"},{title:"help_question_12_title",content:"help_question_12_description"},{title:"help_question_13_title",content:"help_question_13_description"}]}});var O=(0,i.connect)(function(e){return{translate:(0,o.getTranslate)(e.locale),currentLanguage:(0,o.getActiveLanguage)(e.locale).code}})(_);t.default=O},1117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TopLabel",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"TopLabelRow",{enumerable:!0,get:function(){return o.default}});var r=i(n(1119)),o=i(n(1118));function i(e){return e&&e.__esModule?e:{default:e}}},1118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));n(135),n(351);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=n.initialState,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.styles,n=e.children;return o.default.createElement("div",{className:t&&t.wrapper},n)}},{key:"initialState",get:function(){return{}}}])&&u(n.prototype,r),i&&u(n,i),t}();Object.defineProperty(f,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(f,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var p=(0,i.connect)(function(e){var t=e.children;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({marginRight:"-1rem",marginLeft:"-1rem"},e.styles,t&&t.length?{display:"flex",justifyContent:"space-around",flexDirection:"row"}:{display:"flex",justifyContent:"center",flexDirection:"row"})}})(f);t.default=p},1119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),o=n(15),i=n(135);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=n.initialState,n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n=t,(o=[{key:"render",value:function(){var e=this.props,t=e.styles,n=e.toggleTab,o=e.children,a=e.className,l=e.as,u=void 0===l?"h2":l;return t?r.default.createElement("div",{onClick:n,className:a+" "+t.wrapper},r.default.createElement(i.Typography,{styles:{margin:0},as:u,size:"medium",fontWeight:"inherit",textAlign:"center"},o)):null}},{key:"initialState",get:function(){return{}}}])&&u(n.prototype,o),a&&u(n,a),t}();Object.defineProperty(f,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(f,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var p=(0,o.connect)(function(e){e.theme;var t=e.isActive,n=e.styles;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({position:"relative",display:"inline-block",transform:"translateY(-50%)",padding:"2rem",margin:"1rem",zIndex:5,backgroundColor:"#FFFFFF"},t?{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",fontWeight:"bold"}:null,n)}})(f);t.default=p},1120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Top",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(1122))&&r.__esModule?r:{default:r}},1121:function(e,t,n){e.exports=n.p+"assets/media/BCgraphicelement-3-min.jpg"},1122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=n(15),a=n(135),l=n(211),u=(r=n(1121))&&r.__esModule?r:{default:r};function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=n.initialState,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.styles,n=e.children;return t?o.default.createElement("div",{className:t.wrapper},o.default.createElement("img",{className:t.bgImage,src:u.default,alt:""}),o.default.createElement(l.Column,{styles:{position:"relative",zIndex:"2"},grid:[[425,80,"%"],[768,60,"%"]]},o.default.createElement(a.Typography,{styles:{margin:"3.125rem 0 5.625rem",fontSize:"2rem"},as:"h1",size:"medium",textAlign:"center"},n))):null}},{key:"initialState",get:function(){return{}}}])&&s(n.prototype,r),i&&s(n,i),t}();Object.defineProperty(b,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(b,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var d=(0,i.connect)(function(e){var t=e.theme,n=e.marginBottom,r=e.paddingBottom,o=e.wrapperStyles;return{wrapper:c({paddingTop:"1px",verticalAlign:"top",textAlign:"center",position:"relative",maxWeight:"1200px",overflow:"hidden"},t?c({},t.top):null,n?{marginBottom:n}:null,r?{paddingBottom:r}:{paddingBottom:"1px"},o),bgImage:{position:"absolute",width:"200%",top:"50%",left:"50%",zIndex:"1",transform:"translate(-50%,-50%)","@media(min-width:768px)":{width:"150%"},"@media(min-width:1024px)":{width:"100%"}}}})(b);t.default=d},1298:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=n.initialState,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.id,r=e.styles;return o.default.createElement("div",{id:n,className:r.wrapper},t)}},{key:"initialState",get:function(){return{}}}])&&l(n.prototype,r),i&&l(n,i),t}();Object.defineProperty(c,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(c,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var f=(0,i.connect)(function(e){e.color,e.theme,e.count;return{wrapper:{marginBottom:"".concat(2.5,"rem"),position:"relative",zIndex:1}}})(c);t.default=f},1299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=n.initialState,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.styles;e.index;return o.default.createElement("div",{className:n.wrapper},t)}},{key:"initialState",get:function(){return{}}}])&&l(n.prototype,r),i&&l(n,i),t}();Object.defineProperty(c,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(c,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var f=(0,i.connect)(function(e){var t=e.color;return{wrapper:{backgroundColor:e.theme.palette.secondary[t()],marginLeft:"".concat(4,"rem"),padding:"1rem 1.25rem",color:"#000"}}})(c);t.default=f},1300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=n.initialState,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.styles,r=e.onClick;return console.log(this.props),o.default.createElement("div",{onClick:r,className:n.wrapper},o.default.createElement("div",{className:n.icon}),o.default.createElement("button",{className:n.content},o.default.createElement("div",{className:n.text},t)))}},{key:"initialState",get:function(){return{}}}])&&c(n.prototype,r),i&&c(n,i),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var s=(0,i.connect)(function(e){var t=e.color,n=e.theme,r=e.count,o=e.active;return{wrapper:{position:"relative",zIndex:2,display:"flex",flexDirection:"row",alignItems:"inherit",width:"100%",padding:0,backgroundColor:"transparent",border:"none",cursor:"pointer",":hover :first-child:before":{color:"#000"},":hover :last-child":{color:"#000"}},icon:{position:"relative",width:"".concat(5,"rem"),minHeight:"".concat(5,"rem"),borderRadius:"50%",backgroundColor:n.palette.secondary[t()],":before":a({content:'"'.concat(r,'"'),position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",display:"block",color:"#fff",fontSize:"1.75rem",fontWeight:"bold"},o?{color:"#000"}:null)},content:a({display:"flex",justifyContent:"flex-start",alignItems:"center",width:"calc(100% - ".concat(2.5,"rem)"),minHeight:"".concat(5,"rem"),marginLeft:"-".concat(2.5,"rem !important"),padding:"1rem 1rem 1rem ".concat(2.5,"rem"),backgroundColor:n.palette.secondary[t()],textAlign:"left",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.25)",border:"none",":hover":{color:"#000"}},o?{color:"#000"}:null),text:a({fontSize:"1.75rem",color:"#4F4F4F",fontWeight:"bold",fontFamily:"'Vollkorn-Bold', serif, 'Roboto', sans-serif",":hover":{color:"#000"}},o?{color:"#000"}:null)}})(p);t.default=s},1301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==a(o)&&"function"!=typeof o?u(r):o).state=n.initialState,n.onActive=n.onActive.bind(u(n)),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"onActive",value:function(e){var t=e!==this.state.active?e:null;this.setState({active:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.className,i=this.state.active;console.log(this);var a=o.default.Children.map(n,function(t,n){return o.default.cloneElement(t,{index:n,active:i,onActive:function(){e.onActive(n)}})});return o.default.createElement("div",{className:r},a)}},{key:"initialState",get:function(){return{active:this.props.active}}}])&&l(n.prototype,r),i&&l(n,i),t}();Object.defineProperty(c,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{active:null}});var f=(0,i.createComponentWithProxy)(function(){return{}},c);t.default=f},1302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.active,r=e.index,i=e.onActive,a=e.className,l=o.default.Children.map(t,function(e){return o.default.cloneElement(e,{active:n===r,index:r,onClick:i})});return o.default.createElement("div",{className:a},l)}}])&&l(n.prototype,r),i&&l(n,i),t}(),f=(0,i.createComponentWithProxy)(function(){return{}},c);t.default=f},1303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.active,r=e.index,i=e.onActive,a=e.className,l=o.default.Children.map(t,function(e){return o.default.cloneElement(e,{active:n,index:r,onActive:i})});return o.default.createElement("div",{className:a},l)}}])&&l(n.prototype,r),i&&l(n,i),t}(),f=(0,i.createComponentWithProxy)(function(){return{}},c);t.default=f},1304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),i=((r=n(2))&&r.__esModule,n(15));function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var c=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=n.initialState,n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.children,n=e.active,r=e.index,i=e.className;return console.log("AccordionContent:",this.props),r!==n?null:o.default.createElement("div",{className:i},t)}},{key:"initialState",get:function(){return{}}}])&&l(n.prototype,r),i&&l(n,i),t}();Object.defineProperty(c,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(c,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{active:!1}});var f=(0,i.createComponentWithProxy)(function(){return{}},c);t.default=f},1305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AccordionContent",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"AccordionItem",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"AccordionToggle",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"AccordionWrapper",{enumerable:!0,get:function(){return a.default}});var r=l(n(1304)),o=l(n(1303)),i=l(n(1302)),a=l(n(1301));function l(e){return e&&e.__esModule?e:{default:e}}},1306:function(e,t,n){"use strict";(function(t){(function(){var n,r,o,i,a,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),l=1e9*t.uptime(),a=i-l):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(void 0)}).call(this,n(136))},1307:function(e,t,n){"use strict";(function(t){for(var r=n(1306),o="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",l=o["request"+a],u=o["cancel"+a]||o["cancelRequest"+a],c=0;!l&&c<i.length;c++)l=o[i[c]+"Request"+a],u=o[i[c]+"Cancel"+a]||o[i[c]+"CancelRequest"+a];if(!l||!u){var f=0,p=0,s=[];l=function(e){if(0===s.length){var t=r(),n=Math.max(0,1e3/60-(t-f));f=n+t,setTimeout(function(){var e=s.slice(0);s.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(f)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return s.push({handle:++p,callback:e,cancelled:!1}),p},u=function(e){for(var t=0;t<s.length;t++)s[t].handle===e&&(s[t].cancelled=!0)}}e.exports=function(e){return l.call(o,e)},e.exports.cancel=function(){u.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,n(43))},1308:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(1307),i=(r=o)&&r.__esModule?r:{default:r};var a=new Map,l=new Set,u=!1,c=0;function f(){return(new Date).getTime()}function p(e){var t=e.fn,n=e.args;t.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n))}var s=function(e){return function(t,n){var r=t.nextTick,o=t.ms,i=t.mode;e-r>=0&&(l.add(t),0===i?a.delete(n):a.set(n,Object.assign({},t,{nextTick:r+o})))}};function y(){var e=f();a.forEach(s(e)),0!==l.size&&(l.forEach(p),l.clear()),0!==a.size?(0,i.default)(y):u=!1}function b(e){var t=e.fn,n=e.ms,r=void 0===n?0:n,o=e.args,l=e.mode;if(!t)return null;var p=c;return a.set(p,{fn:t,ms:r,nextTick:f()+r,args:o,mode:l}),u||(u=!0,(0,i.default)(y)),c+=1,p}function d(e){a.has(e)&&a.delete(e),0===a.size&&(u=!1)}t.default={setTimeout:function(e){for(var t=arguments.length,n=Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];return b({fn:e,ms:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,args:n,mode:0})},clearTimeout:d,setInterval:function(e){for(var t=arguments.length,n=Array(t>2?t-2:0),r=2;r<t;r++)n[r-2]=arguments[r];return b({fn:e,ms:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,args:n,mode:1})},clearInterval:d}},1309:function(e,t,n){"use strict";e.exports=n(1308).default},1310:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animateScroll=void 0,t.updateHistory=function(e){e="#"+e,history.pushState?history.pushState(null,null,e):location.hash=e};var r,o,i=n(1309);t.animateScroll=(r=void 0,o=void 0,function(e,t){return new Promise(function(n,l){var u=e?document.getElementById(e):document.body;if(!u)return l("Cannot find element: #"+e);var c=t.offset,f=t.duration,p=t.easing,s=a(),y=function(e){return e.getBoundingClientRect().top+a()}(u)+c-s;r&&((0,i.clearTimeout)(r),o()),o=n,function t(){var o=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+20;if(function(e){document.documentElement.scrollTop=document.body.scrollTop=e}(p(null,o,s,y,f)),!(o<f))return r=void 0,n(e);r=(0,i.setTimeout)(function(){t(o)},20)}()})});function a(){return document.documentElement.scrollTop||document.body.scrollTop}},1311:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=f(n(1)),u=f(n(2)),c=n(1310);function f(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==r(t)&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._handleClick=function(e){n.state.beforeAnimate(e),e&&e.preventDefault(),(0,c.animateScroll)(n.state.to,n.state.animate).then(function(t){t&&(n.state.disableHistory||(0,c.updateHistory)(t),n.state.afterAnimate(e))})},n.state=t._stateHelper(e),n.simulateClick=n._handleClick,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+r(t));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.default.Component),a(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(t._stateHelper(e))}},{key:"render",value:function(){var e=this.props,t=(e.to,e.animate,e.beforeAnimate,e.afterAnimate,e.disableHistory,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["to","animate","beforeAnimate","afterAnimate","disableHistory"]));return this.props.children?l.default.createElement("a",i({},t,{href:"#"+this.state.to,onClick:this._handleClick})):null}}],[{key:"_stateHelper",value:function(e){var t=e.animate||{},n=t.offset,r=void 0===n?0:n,o=t.duration,i=void 0===o?400:o,a=t.easing,l=void 0===a?s:a;return{to:e.to&&e.to.replace(/^#/,"")||"",animate:{offset:r,duration:i,easing:l},beforeAnimate:e.beforeAnimate||function(){},afterAnimate:e.afterAnimate||function(){},disableHistory:e.disableHistory}}},{key:"getDerivedStateFromProps",value:function(e){return t._stateHelper(e)}}]),t}();function s(e,t,n,r,o){return-r*(t/=o)*(t-2)+n}p.propTypes={to:u.default.string.isRequired,animate:u.default.shape({offset:u.default.number,duration:u.default.number,easing:u.default.func}),beforeAnimate:u.default.func,afterAnimate:u.default.func,disableHistory:u.default.bool,children:u.default.node},t.default=p;var y=o(/^v?((\d+)\.(\d+)\.(\d+))(?:-([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?(?:\+([\dA-Za-z\-]+(?:\.[\dA-Za-z\-]+)*))?$/.exec(l.default.version),4),b=y[2],d=y[3];b>=16&&d>=3&&delete p.prototype.componentWillReceiveProps}}]);